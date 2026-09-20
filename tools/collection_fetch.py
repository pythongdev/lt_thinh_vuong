#!/usr/bin/env python3
"""
Kéo sản phẩm của từng collection (danh mục) trên laptoptv.vn về CSV.

Khác với catalog_fetch.py (kéo TOÀN BỘ web), file này chỉ kéo các danh mục
được chỉ định — dùng khi cần chạy content cho một nhóm hàng cụ thể.

API Sapo/Bizweb công khai:
    https://laptoptv.vn/collections/<alias>/products.json?limit=250&page=N

Dùng:
    python3 tools/collection_fetch.py                      # 3 danh mục mặc định
    python3 tools/collection_fetch.py deal-shock laptop-2in1

Kết quả:
    02_products/catalog/collections/<alias>-<ngày>.csv   — từng danh mục
    02_products/catalog/collections/all-<ngày>.csv       — gộp, thêm cột collection
    In ra bảng phân loại + CẢNH BÁO dữ liệu theo luật trong CLAUDE.md.
"""

import csv
import datetime as dt
import json
import os
import sys
from collections import Counter, defaultdict

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from catalog_fetch import FIELDS, _get, to_row  # noqa: E402

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(BASE, "02_products", "catalog", "collections")
API = "https://laptoptv.vn/collections/{}/products.json?limit=250&page={}"
INFO = "https://laptoptv.vn/collections/{}.json"
DEFAULT = ["deal-shock", "laptop-gaming", "laptop-2in1"]

# Ngưỡng phân khúc giá — mốc 5 triệu là luật #16 (phân khúc dưới 5tr đã đóng)
BANDS = [(0, 5_000_000, "<5tr (ĐÃ ĐÓNG — không viết bài bán)"),
         (5_000_000, 10_000_000, "5–10tr"),
         (10_000_000, 15_000_000, "10–15tr"),
         (15_000_000, 20_000_000, "15–20tr"),
         (20_000_000, 30_000_000, "20–30tr"),
         (30_000_000, 10**12, "trên 30tr")]


def band(price):
    for lo, hi, name in BANDS:
        if lo <= price < hi:
            return name
    return "?"


def fetch_collection(alias, max_pages=20):
    try:
        name = json.loads(_get(INFO.format(alias)))["collection"]["name"]
    except Exception:
        name = alias
    products = {}
    for page in range(1, max_pages + 1):
        batch = json.loads(_get(API.format(alias, page))).get("products", [])
        if not batch:
            break
        for p in batch:
            products[p["id"]] = p
        if len(batch) < 250:
            break
    print(f"  {alias:<16} “{name}”: {len(products)} sản phẩm")
    return name, list(products.values())


def write_csv(path, rows, fields):
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(rows)


def warn(all_rows):
    """Cảnh báo theo luật #12, #13, #14, #15, #16 trong CLAUDE.md."""
    print("\n⚠️  CẢNH BÁO DỮ LIỆU — đọc trước khi viết bài:")

    instock = [r for r in all_rows if r["stock_tracked"] == "yes" and r["qty"] > 0]
    print(f"\n  [#12 tồn kho] {len(instock)}/{len(all_rows)} SP có tồn kho xác thực (qty>0).")
    print(f"        ⛔ {len(all_rows) - len(instock)} SP còn lại KHÔNG được viết \"còn hàng\"/\"còn X máy\".")
    for r in instock[:10]:
        print(f"        kho {r['qty']:>3}  {r['price']:>11,}đ  {r['name'][:56]}")

    bad = [r for r in all_rows if 0 < r["compare_at"] < r["price"]]
    print(f"\n  [#15 giá gốc] {len(bad)} SP có compare_at < price → cấm viết \"giảm giá\":")
    for r in bad[:8]:
        print(f"        bán {r['price']:>11,} | gốc {r['compare_at']:>11,}  {r['name'][:50]}")

    odd = [r for r in all_rows
           if r["warranty_tag"] and not r["warranty_tag"].strip().startswith(("6 ", "12 "))]
    print(f"\n  [#14 bảo hành] {len(odd)} SP có tag bảo hành khác 6/12 tháng → hỏi lại chủ shop:")
    for r in odd[:8]:
        print(f"        BH {r['warranty_tag']:<12} {r['price']:>11,}đ  {r['name'][:46]}")
    notag = [r for r in all_rows if not r["warranty_tag"]]
    print(f"        {len(notag)} SP KHÔNG có tag bảo hành → không tự suy ra 6 tháng.")

    missing = [r for r in all_rows if not (r["cpu"] and r["ram"] and r["ssd"])]
    print(f"\n  [#13 cấu hình] {len(missing)} SP thiếu tag cpu/ram/ssd → lấy cấu hình từ TÊN máy.")

    cheap = [r for r in all_rows if r["price"] < 5_000_000]
    print(f"\n  [#16 dưới 5tr] {len(cheap)} SP dưới 5.000.000đ → KHÔNG viết bài bán:")
    for r in cheap[:8]:
        print(f"        {r['price']:>11,}đ  {r['name'][:56]}")


def main(aliases):
    today = dt.date.today().isoformat()
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Đang kéo danh mục từ laptoptv.vn ...")

    by_alias, names = {}, {}
    for alias in aliases:
        try:
            names[alias], raw = fetch_collection(alias)
        except Exception as e:
            print(f"  LỖI {alias}: {e}", file=sys.stderr)
            continue
        by_alias[alias] = sorted((to_row(p) for p in raw), key=lambda r: r["price"])

    if not by_alias:
        print("Không lấy được sản phẩm nào.", file=sys.stderr)
        return 1

    for alias, rows in by_alias.items():
        path = os.path.join(OUT_DIR, f"{alias}-{today}.csv")
        write_csv(path, rows, FIELDS)
        print(f"✅ {len(rows):>3} SP → {os.path.relpath(path, BASE)}")

    # gộp: 1 SP có thể nằm ở nhiều danh mục → gom tên danh mục vào 1 cột
    merged, cols = {}, defaultdict(list)
    for alias, rows in by_alias.items():
        for r in rows:
            merged[r["id"]] = r
            cols[r["id"]].append(alias)
    all_rows = sorted(merged.values(), key=lambda r: r["price"])
    for r in all_rows:
        r["collections"] = "|".join(cols[r["id"]])
        r["price_band"] = band(r["price"])
    all_path = os.path.join(OUT_DIR, f"all-{today}.csv")
    write_csv(all_path, all_rows, FIELDS + ["collections", "price_band"])
    print(f"✅ {len(all_rows):>3} SP (đã bỏ trùng) → {os.path.relpath(all_path, BASE)}")

    # ---- phân loại ----
    print("\n📊 PHÂN LOẠI")
    for alias, rows in by_alias.items():
        prices = [r["price"] for r in rows]
        print(f"\n— {names[alias]} ({alias}): {len(rows)} SP, "
              f"{min(prices):,}đ – {max(prices):,}đ")
        print(f"   Tình trạng: {dict(Counter(r['condition'] for r in rows))}")
        print(f"   Hãng: {dict(Counter(r['vendor'] for r in rows).most_common(8))}")
        for _, _, b in BANDS:
            n = sum(1 for r in rows if band(r["price"]) == b)
            if n:
                print(f"   {b:<38} {n:>3} SP")

    overlap = [r for r in all_rows if len(cols[r["id"]]) > 1]
    print(f"\n— Nằm ở nhiều danh mục cùng lúc: {len(overlap)} SP")
    for r in overlap[:10]:
        print(f"   {r['collections']:<26} {r['price']:>11,}đ  {r['name'][:44]}")

    warn(all_rows)
    print(f"\n👉 Việc tiếp theo: chọn máy để viết bài → ghi vào 02_products/products.md")
    print(f"   kèm source + verified_at={today}, rồi mới viết content.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:] or DEFAULT))
