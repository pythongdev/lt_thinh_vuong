#!/usr/bin/env python3
"""
Kéo toàn bộ catalog laptoptv.vn về máy và ghi ra CSV đã chuẩn hoá.

Website chạy trên nền Sapo/Bizweb nên có sẵn API JSON công khai:
    https://laptoptv.vn/products.json?limit=250&page=N
Đây là cách chính thống, không phải scraping HTML, và trả về đúng giá + cấu hình
đang hiển thị trên web tại thời điểm chạy.

Dùng:
    python3 tools/catalog_fetch.py

Kết quả:
    02_products/catalog/catalog-<ngày>.csv   — snapshot đầy đủ
    In ra màn hình bản tóm tắt + CẢNH BÁO dữ liệu để cập nhật UNVERIFIED.md

Nên chạy lại mỗi tuần (quy tắc: verified_at quá 7 ngày là phải kiểm tra lại).
"""

import csv
import datetime as dt
import json
import os
import ssl
import subprocess
import sys
import urllib.request
from collections import Counter

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(BASE, "02_products", "catalog")
API = "https://laptoptv.vn/products.json?limit=250&page={}"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36"

FIELDS = ["id", "name", "vendor", "type", "segment", "condition", "warranty_tag",
          "cpu", "ram", "ssd", "gpu", "screen", "price", "compare_at",
          "stock_tracked", "qty", "url"]


def _ssl_context():
    """Python cài từ python.org trên macOS hay thiếu bộ chứng chỉ gốc → dùng certifi nếu có."""
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        return ssl.create_default_context()


def _get(url):
    """Tải 1 URL. Ưu tiên urllib; nếu lỗi chứng chỉ SSL thì fallback sang curl."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=60, context=_ssl_context()) as r:
            return r.read().decode("utf-8")
    except urllib.error.URLError as e:
        if not isinstance(getattr(e, "reason", None), ssl.SSLError):
            raise
        print("  (SSL của Python lỗi — chuyển sang dùng curl)")
        return subprocess.run(
            ["curl", "-sSL", "-A", UA, url],
            capture_output=True, text=True, check=True, timeout=90,
        ).stdout


def fetch_all(max_pages=20):
    """Lấy hết các trang cho tới khi trả về rỗng."""
    products = {}
    for page in range(1, max_pages + 1):
        batch = json.loads(_get(API.format(page))).get("products", [])
        print(f"  trang {page}: {len(batch)} sản phẩm")
        if not batch:
            break
        for p in batch:
            products[p["id"]] = p
    return list(products.values())


def tagval(p, prefix):
    """Lấy giá trị tag theo tiền tố, ưu tiên bản dài nhất (chi tiết nhất)."""
    vals = [t.split("_", 1)[1].strip() for t in (p.get("tags") or [])
            if t.lower().startswith(prefix) and "_" in t]
    vals = [v for v in vals if v]
    return max(vals, key=len) if vals else ""


def warranty(p):
    for t in p.get("tags") or []:
        if t.lower().startswith("baohanh_"):
            return t.split("_", 1)[1].strip()
    return ""


def condition(p):
    """Đọc tình trạng từ TÊN sản phẩm — tag tình trạng trên web có lỗi."""
    n = p["name"].lower()
    if "new 100" in n or "new100" in n:
        return "Mới"
    if "like new" in n or "likenew" in n:
        return "Likenew"
    if "cũ" in n:
        return "Cũ"
    ts = p.get("tags") or []
    return "Cũ" if "Cũ" in ts else ("Mới" if "Mới" in ts else "?")


def segment(p):
    ts = p.get("tags") or []
    for s in ["Gaming", "Đồ hoạ", "Xoay gập", "Cao cấp", "Văn phòng"]:
        if s in ts:
            return s
    return p.get("product_type") or "?"


def qty(p):
    return sum(v.get("inventory_quantity") or 0 for v in p.get("variants") or [])


def tracked(p):
    return any((v.get("inventory_management") or "") for v in p.get("variants") or [])


def to_row(p):
    return {
        "id": p["id"], "name": p["name"], "vendor": p.get("vendor") or "",
        "type": p.get("product_type") or "", "segment": segment(p),
        "condition": condition(p), "warranty_tag": warranty(p),
        "cpu": tagval(p, "cpu_"), "ram": tagval(p, "ram_"), "ssd": tagval(p, "ssd_"),
        "gpu": tagval(p, "gpu_"), "screen": tagval(p, "manhinh_"),
        "price": int(p["price"]), "compare_at": int(p.get("compare_at_price_max") or 0),
        "stock_tracked": "yes" if tracked(p) else "no", "qty": qty(p),
        "url": "https://laptoptv.vn/" + p["alias"],
    }


def main():
    print("Đang kéo catalog từ laptoptv.vn ...")
    try:
        raw = fetch_all()
    except Exception as e:
        print(f"LỖI khi gọi API: {e}", file=sys.stderr)
        return 1
    if not raw:
        print("Không lấy được sản phẩm nào.", file=sys.stderr)
        return 1

    rows = sorted((to_row(p) for p in raw), key=lambda r: r["price"])
    tags_of = {p["id"]: (p.get("tags") or []) for p in raw}
    today = dt.date.today().isoformat()
    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, f"catalog-{today}.csv")
    with open(out, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(rows)

    laptops = [r for r in rows if r["type"] == "Laptop"]
    instock = [r for r in rows if r["stock_tracked"] == "yes" and r["qty"] > 0]

    print(f"\n✅ Đã ghi {len(rows)} sản phẩm → {out}")
    print(f"   Laptop: {len(laptops)} | Linh kiện/PC/khác: {len(rows) - len(laptops)}")
    print(f"   Hãng: {dict(Counter(r['vendor'] for r in rows).most_common(6))}")
    print(f"   Tình trạng (laptop): {dict(Counter(r['condition'] for r in laptops))}")

    print(f"\n📦 CHỈ {len(instock)} sản phẩm có tồn kho xác thực (qty>0):")
    for r in instock[:10]:
        print(f"   kho {r['qty']:>3}  {r['price']:>11,}đ  {r['name'][:62]}")
    if len(instock) > 10:
        print(f"   ... và {len(instock) - 10} máy nữa (xem CSV)")
    print(f"   ⛔ {len(rows) - len(instock)} sản phẩm còn lại KHÔNG được viết \"còn hàng\".")

    # ---- cảnh báo dữ liệu, đối chiếu với UNVERIFIED.md ----
    print("\n⚠️  CẢNH BÁO DỮ LIỆU — cập nhật vào 01_company/facts/UNVERIFIED.md:")

    bad_price = [r for r in rows if 0 < r["compare_at"] < r["price"]]
    print(f"\n  [#18] {len(bad_price)} SP có giá gốc THẤP HƠN giá bán → cấm viết \"giảm giá\":")
    for r in bad_price[:6]:
        print(f"        bán {r['price']:>11,} | gốc {r['compare_at']:>11,}  {r['name'][:52]}")

    short_bh = [r for r in rows if r["warranty_tag"] and r["warranty_tag"].strip().startswith("1 ")]
    print(f"\n  [#17] {len(short_bh)} SP bảo hành BẤT THƯỜNG (1 tháng):")
    for r in short_bh:
        print(f"        {r['price']:>11,}đ  BH {r['warranty_tag']}  kho={r['qty']}  {r['name'][:50]}")

    # #21: tag tình trạng trên web lệch với tên sản phẩm (tên mới là nguồn chuẩn)
    new_as_used = [r for r in rows if r["condition"] == "Mới" and "Cũ" in tags_of[r["id"]]]
    likenew_as_new = [r for r in rows if r["condition"] == "Likenew" and "Mới" in tags_of[r["id"]]]
    print(f"\n  [#21] Tag tình trạng lệch với tên sản phẩm:")
    print(f"        {len(new_as_used):>3} SP tên \"[New 100%]\" nhưng gắn tag `Cũ`")
    print(f"        {len(likenew_as_new):>3} SP tên \"[Like New]\" nhưng gắn tag `Mới`"
          f" → dễ bị viết nhầm thành bảo hành 12 tháng")

    bh = Counter(r["warranty_tag"] or "(không tag)" for r in rows)
    print(f"\n  Phân bổ bảo hành: {dict(bh)}")

    print("\n👉 Việc tiếp theo: đối chiếu số trên với 02_products/products.md,")
    print("   cập nhật verified_at, và ghi thay đổi vào UNVERIFIED.md nếu có mục mới.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
