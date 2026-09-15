#!/usr/bin/env python3
"""
Lấy bài đăng + chỉ số hiệu quả từ Facebook Page của Laptop Thịnh Vượng.

Dùng Facebook Graph API với Page Access Token — cách chính thống của Meta,
không phải scraping, không cần mật khẩu.

Cách chạy:
    export FB_PAGE_TOKEN="EAAG..."     # token lấy từ Graph API Explorer
    export FB_PAGE_ID="123456789"      # hoặc để trống, script tự tìm
    python3 tools/fb_fetch.py

Kết quả:
    07_analytics/fb_posts_raw.json     dữ liệu thô
    07_analytics/fb_posts.md           bảng xếp hạng bài theo tương tác
"""

import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

API = "https://graph.facebook.com/v21.0"
# Graph API trả created_time theo UTC. Khách của shop ở Hà Nội → phải đổi sang +07,
# nếu không thì mọi kết luận về khung giờ đều lệch 7 tiếng.
HANOI = timezone(timedelta(hours=7))
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "07_analytics")

# Chỉ số lấy cho mỗi bài. Nếu page chưa đủ quyền, script bỏ qua phần này.
INSIGHT_METRICS = ",".join([
    "post_impressions",
    "post_impressions_unique",
    "post_engaged_users",
    "post_clicks",
    "post_reactions_by_type_total",
])


def get(path, **params):
    """Gọi Graph API, trả về dict. Ném RuntimeError kèm thông báo dễ hiểu."""
    params["access_token"] = TOKEN
    url = f"{API}/{path}?{urllib.parse.urlencode(params)}"
    try:
        with urllib.request.urlopen(url, timeout=30) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        try:
            msg = json.loads(body)["error"]["message"]
        except Exception:
            msg = body
        raise RuntimeError(f"Graph API lỗi ({e.code}): {msg}") from None


def find_page_id():
    """Tự tìm page ID nếu token là user token có quyền quản lý page."""
    data = get("me/accounts", fields="id,name")
    pages = data.get("data", [])
    if not pages:
        raise RuntimeError(
            "Token không quản lý page nào. Đặt FB_PAGE_ID thủ công, "
            "hoặc kiểm tra lại quyền pages_show_list."
        )
    if len(pages) > 1:
        print("Token quản lý nhiều page:", file=sys.stderr)
        for p in pages:
            print(f"  {p['id']}  {p['name']}", file=sys.stderr)
        print("→ Đặt FB_PAGE_ID để chọn page cụ thể.\n", file=sys.stderr)
    print(f"Dùng page: {pages[0]['name']} ({pages[0]['id']})")
    return pages[0]["id"]


def fetch_posts(page_id, limit=100):
    """Lấy các bài đăng gần nhất, tự phân trang."""
    posts, url_params = [], {
        "fields": "id,message,created_time,permalink_url,full_picture,"
                  "shares,comments.summary(true),reactions.summary(true)",
        "limit": 25,
    }
    data = get(f"{page_id}/posts", **url_params)
    while True:
        posts.extend(data.get("data", []))
        nxt = data.get("paging", {}).get("next")
        if not nxt or len(posts) >= limit:
            break
        with urllib.request.urlopen(nxt, timeout=30) as r:
            data = json.loads(r.read().decode())
    return posts[:limit]


def fetch_insights(post_id):
    """Lấy chỉ số của 1 bài. Trả về {} nếu không đủ quyền."""
    try:
        data = get(f"{post_id}/insights", metric=INSIGHT_METRICS)
    except RuntimeError:
        return {}
    out = {}
    for m in data.get("data", []):
        vals = m.get("values") or [{}]
        out[m["name"]] = vals[0].get("value")
    return out


def posted_at(p):
    """Giờ đăng theo giờ Hà Nội. Trả về None nếu Facebook không cho created_time."""
    raw = p.get("created_time")
    if not raw:
        return None
    try:
        return datetime.strptime(raw, "%Y-%m-%dT%H:%M:%S%z").astimezone(HANOI)
    except ValueError:
        return None


def median(xs):
    xs = sorted(xs)
    if not xs:
        return 0
    mid = len(xs) // 2
    return xs[mid] if len(xs) % 2 else (xs[mid - 1] + xs[mid]) / 2


def by_hour(posts):
    """Gom bài theo giờ đăng. Dùng trung vị vì 1 bài viral kéo lệch trung bình."""
    buckets = {}
    for p in posts:
        t = posted_at(p)
        if t:
            buckets.setdefault(t.hour, []).append(p)
    rows = []
    for hour in sorted(buckets):
        group = buckets[hour]
        reaches = [r for r in (p["insights"].get("post_impressions_unique")
                               for p in group) if isinstance(r, int)]
        rows.append({
            "hour": hour,
            "n": len(group),
            "eng": median([engagement(p) for p in group]),
            "reach": median(reaches) if reaches else None,
        })
    return rows


def engagement(p):
    r = (p.get("reactions") or {}).get("summary", {}).get("total_count", 0)
    c = (p.get("comments") or {}).get("summary", {}).get("total_count", 0)
    s = (p.get("shares") or {}).get("count", 0)
    # Comment và share thể hiện ý định mạnh hơn reaction → cho trọng số cao hơn.
    return r + c * 3 + s * 5


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    page_id = os.environ.get("FB_PAGE_ID") or find_page_id()

    print("Đang lấy bài đăng...")
    posts = fetch_posts(page_id)
    print(f"Lấy được {len(posts)} bài. Đang lấy chỉ số...")

    for i, p in enumerate(posts, 1):
        p["insights"] = fetch_insights(p["id"])
        if i % 10 == 0:
            print(f"  {i}/{len(posts)}")

    posts.sort(key=engagement, reverse=True)

    raw_path = os.path.join(OUT_DIR, "fb_posts_raw.json")
    with open(raw_path, "w", encoding="utf-8") as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)

    md_path = os.path.join(OUT_DIR, "fb_posts.md")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write("# Bài đăng Facebook — xếp theo tương tác\n\n")
        f.write(f"Lấy lúc: {datetime.now():%Y-%m-%d %H:%M} · Page: {page_id} · "
                f"{len(posts)} bài\n\n")
        f.write("Điểm tương tác = reaction + comment×3 + share×5 "
                "(comment/share thể hiện ý định mua mạnh hơn).\n\n")
        f.write("| # | Ngày | Giờ | Điểm | React | Cmt | Share | Reach | Dòng đầu |\n")
        f.write("|---|---|---|---|---|---|---|---|---|\n")
        for i, p in enumerate(posts, 1):
            msg = (p.get("message") or "").split("\n")[0][:60].replace("|", "/")
            t = posted_at(p)
            date = f"{t:%Y-%m-%d}" if t else "—"
            hhmm = f"{t:%H:%M}" if t else "—"
            r = (p.get("reactions") or {}).get("summary", {}).get("total_count", 0)
            c = (p.get("comments") or {}).get("summary", {}).get("total_count", 0)
            s = (p.get("shares") or {}).get("count", 0)
            reach = p["insights"].get("post_impressions_unique", "—")
            f.write(f"| {i} | {date} | {hhmm} | {engagement(p)} | {r} | {c} | {s} | "
                    f"{reach} | {msg} |\n")

        rows = by_hour(posts)
        f.write("\n---\n\n# Phân bố theo giờ đăng (giờ Hà Nội)\n\n")
        if not rows:
            f.write("Không đọc được `created_time` của bài nào.\n")
        else:
            f.write("| Giờ | Số bài | Điểm tương tác (trung vị) | Reach (trung vị) | Đủ mẫu? |\n")
            f.write("|---|---|---|---|---|\n")
            for row in rows:
                reach = row["reach"] if row["reach"] is not None else "—"
                enough = "✅" if row["n"] >= 3 else f"⚠️ mới {row['n']} bài"
                f.write(f"| {row['hour']:02d}:00 | {row['n']} | {row['eng']:g} | "
                        f"{reach} | {enough} |\n")
            gio_trong = [h for h in range(6, 24)
                         if h not in {row["hour"] for row in rows}]
            f.write("\n⛔ **Bảng này KHÔNG nói được khung giờ nào tốt nhất.** Nó chỉ nói "
                    "giờ nào đã từng đăng thì kết quả ra sao. Giờ chưa đăng bao giờ thì "
                    "không có dữ liệu — không phải là giờ xấu.\n\n")
            if gio_trong:
                f.write("Giờ trong ngày (06:00–23:00) **chưa từng đăng bài nào**: "
                        + ", ".join(f"{h:02d}h" for h in gio_trong) + "\n\n")
            f.write("Dòng ⚠️ (dưới 3 bài) là nhiễu, không được kết luận. Muốn có câu trả "
                    "lời thật → chạy EXP-004 trong `04_content/backlog/experiments.md`.\n")

        f.write("\n---\n\n# Toàn văn 10 bài tốt nhất\n\n")
        for i, p in enumerate(posts[:10], 1):
            t = posted_at(p)
            when = f"{t:%Y-%m-%d %H:%M}" if t else "không rõ ngày"
            f.write(f"## {i}. {when} — {engagement(p)} điểm\n\n")
            f.write(f"{p.get('permalink_url','')}\n\n```\n"
                    f"{p.get('message') or '(không có caption)'}\n```\n\n")

    print(f"\nXong.\n  {md_path}\n  {raw_path}")
    print("\nBước tiếp: mở Claude Code và nói \"phân tích 07_analytics/fb_posts.md\"")


if __name__ == "__main__":
    TOKEN = os.environ.get("FB_PAGE_TOKEN")
    if not TOKEN:
        sys.exit("Thiếu FB_PAGE_TOKEN. Xem hướng dẫn: tools/README.md")
    try:
        main()
    except RuntimeError as e:
        sys.exit(f"Lỗi: {e}")
