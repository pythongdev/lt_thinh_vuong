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
from datetime import datetime

API = "https://graph.facebook.com/v21.0"
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
        f.write("| # | Ngày | Điểm | React | Cmt | Share | Reach | Dòng đầu |\n")
        f.write("|---|---|---|---|---|---|---|---|\n")
        for i, p in enumerate(posts, 1):
            msg = (p.get("message") or "").split("\n")[0][:60].replace("|", "/")
            date = p.get("created_time", "")[:10]
            r = (p.get("reactions") or {}).get("summary", {}).get("total_count", 0)
            c = (p.get("comments") or {}).get("summary", {}).get("total_count", 0)
            s = (p.get("shares") or {}).get("count", 0)
            reach = p["insights"].get("post_impressions_unique", "—")
            f.write(f"| {i} | {date} | {engagement(p)} | {r} | {c} | {s} | "
                    f"{reach} | {msg} |\n")

        f.write("\n---\n\n# Toàn văn 10 bài tốt nhất\n\n")
        for i, p in enumerate(posts[:10], 1):
            f.write(f"## {i}. {p.get('created_time','')[:10]} — "
                    f"{engagement(p)} điểm\n\n")
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
