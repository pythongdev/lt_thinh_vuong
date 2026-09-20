# Product Database

> Nguồn chuẩn cho mọi fact sản phẩm dùng trong content.
> Quy tắc: field nào chưa xác minh → ghi `UNKNOWN`, **không suy đoán**.
> Giá đổi liên tục → luôn mở lại link nguồn trước khi đưa giá vào bài đăng.
>
> **Cập nhật 2026-09-20.** Từ 2026-09-20 file này **không còn là danh sách máy được viết** —
> danh sách đó là `02_products/36-MAY-DUOC-VIET.md` (luật #20). File này giữ các luật đọc dữ liệu
> và PRD chi tiết của máy trong danh sách.
>
> **Cập nhật 2026-09-15** từ API catalog `laptoptv.vn/products.json` (593 sản phẩm).
> Snapshot đầy đủ: `02_products/catalog/catalog-2026-09-15.csv` (bản cũ 2026-09-09 giữ lại để so sánh).
>
> **Thay đổi so với 2026-09-09** (26 SP đổi trên web, 5 máy trong file này bị ảnh hưởng):
> Latitude 9420 2in1 i5 **14.480.000 → 14.980.000đ** · Inspiron 7440 2in1 **19.880.000 → 23.880.000đ** ·
> kho giảm: Latitude 7400 2in1 i5/16GB (9→8), Vivobook S14 (4→3), Latitude 9430 32GB (3→2).
> Không có máy nào bị gỡ hay thêm mới.

---

## 🔴 ĐỌC TRƯỚC KHI VIẾT BẤT KỲ BÀI NÀO

### 0. CHỦ SHOP GHI ĐÈ DỮ LIỆU WEB — cập nhật 2026-09-09

Chủ shop xác nhận trực tiếp. **Lời chủ shop thắng dữ liệu web trong mọi trường hợp.**

| Sản phẩm | Web (snapshot 2026-09-09) | Chủ shop xác nhận | Hành động |
|---|---|---|---|
| Dell Latitude 7480 i5-6300U — 4.900.000đ | kho 17, BH 1 tháng | ⛔ **HẾT HÀNG** | Không viết bài |
| Dell Latitude 7480 i5-7200U — 5.190.000đ | kho 1, BH 1 tháng | ⛔ **HẾT HÀNG** | Không viết bài |

> Câu hỏi "BH 1 tháng là thật hay lỗi nhập liệu?" (UNVERIFIED #17) **không cần trả lời nữa** —
> máy đã hết hàng. Giữ bản ghi để nếu máy về lại thì phải hỏi lại trước khi viết.

### ⛔ CHỈ VIẾT VỀ 36 MÁY TRONG DANH SÁCH TRẮNG (chốt 2026-09-20, luật #20)

**Content chỉ xoay quanh `02_products/36-MAY-DUOC-VIET.md`. Máy không có tên ở đó → không viết bài.**

Danh sách này là toàn bộ máy có **tồn kho xác thực** trong 3 danh mục Deal shock ·
Laptop Gaming · Laptop 2in1. Máy rẻ nhất được viết: **7.690.000đ** (Latitude 7390 2in1).

> Quy định này **thay thế** lệnh đóng phân khúc dưới 5 triệu (chủ shop 2026-09-09) —
> nó chặt hơn: không chỉ cấm dưới 5 triệu mà cấm mọi máy không có tồn kho xác thực.
> Dell Latitude 7400 vân carbon 6.880.000đ trước đây là "máy rẻ nhất được viết"
> **nay cũng bị loại** vì không nằm trong 3 danh mục.
>
> 💡 Khách hỏi máy ngoài danh sách trong inbox/comment thì **vẫn tư vấn bình thường** —
> lệnh cấm áp cho **bài đăng chủ động**, không phải chăm sóc khách.

### 1. Website KHÔNG phản ánh tồn kho thật
Trong 593 sản phẩm, **chỉ 50 biến thể có bật quản lý tồn kho**. 543 biến thể còn lại
để trống `inventory_management` → web **luôn hiển thị "còn hàng"** bất kể thực tế.

| Nhóm | Số SP | Ý nghĩa |
|---|---|---|
| Có theo dõi kho + `qty > 0` | **39** | ✅ Con số tồn kho đáng tin |
| Không theo dõi kho | 554 | ❌ "Còn hàng" trên web **vô nghĩa** |

> ⛔ **Không được viết "còn hàng", "còn X máy cuối", "sắp hết"** cho 554 máy không theo dõi kho.
> ✅ Chỉ các máy trong mục "Máy có tồn kho xác thực" bên dưới (**37 máy**, sau khi trừ
> 2 máy Latitude 7480 chủ shop báo hết) mới được nói về số lượng —
> và vẫn phải xác minh lại với shop trong ngày đăng.
> Đây là lý do UNVERIFIED #8 vẫn chưa đóng được.
>
> ⚠️ Từ 2026-09-15 có 1 máy **mới bật quản lý kho nhưng kho âm (-1)**: Asus Vivobook 14 OLED
> A1405VA i5-13500H. `qty` không > 0 → **không** được nói về số lượng; coi như chưa rõ còn hàng.

### 2. Tên sản phẩm là nguồn chuẩn, TAG có lỗi
Đối chiếu phát hiện nhiều chỗ tag mâu thuẫn với tên sản phẩm:

| Máy | Tên ghi | Tag ghi | Kết luận |
|---|---|---|---|
| Dell Precision 7550 (bản 15.790.000đ) | T2000 | `gpu_NVIDIA T1000` | ⚠️ Mâu thuẫn — không viết tên GPU |
| Dell Inspiron 7445 2in1 | Ryzen 7-8840HS, 16GB | `cpu_Ryzen 5 8840HS`, `ram_8GB` | ⚠️ Mâu thuẫn cả CPU lẫn RAM |
| HP OmniBook X Flip Ryzen AI 5 340 | 16GB | `ram_8GB DDR5`, `gpu_Intel Graphics` | ⚠️ Sai — máy Ryzen không có GPU Intel |
| Dell Latitude 7390 2in1 | i5-8250U | `cpu_i5-8350U` | ⚠️ Mâu thuẫn đời CPU |

> **Quy tắc**: lấy cấu hình từ **tên sản phẩm**. Nếu tag khác tên → **không đưa thông số đó
> vào bài**, hỏi kỹ thuật trước.

### 3. 11 sản phẩm có "giá gốc" THẤP HƠN giá bán (lỗi dữ liệu)
Ví dụ: Lenovo Legion Y7000P 2025 bán 53.990.000đ nhưng "giá gốc" ghi 48.880.000đ.
Mới thêm 2026-09-15: Dell Gaming G15 5520 i5-12500H — giá bán tăng 16.890.000 → **22.490.000đ**
nhưng giá gốc vẫn để 21.380.000đ.

> ⛔ **Không viết "giảm giá", "sale X%"** cho 11 máy này — khách soi ra là mất uy tín ngay.
> Danh sách đầy đủ: lọc `catalog-2026-09-15.csv` với `compare_at < price`.
> Đã đưa vào UNVERIFIED #18 để shop sửa trên web.

---

## ✅ 36 MÁY ĐƯỢC PHÉP VIẾT BÀI

> 📍 **Danh sách đầy đủ đã chuyển sang `02_products/36-MAY-DUOC-VIET.md`** (luật #20).
> Dữ liệu máy: `02_products/36-may-duoc-viet-2026-09-20.csv` · verified_at **2026-09-20**.
> File này không giữ bản sao để tránh hai nguồn lệch nhau.

**36 máy · 207 chiếc · 7.690.000đ – 26.490.000đ.** Toàn bộ nằm trong 3 danh mục
Deal shock · Laptop Gaming · Laptop 2in1 và đều có tồn kho xác thực.

- **29/36 là 2in1 xoay gập cảm ứng**, chủ yếu Dell Latitude doanh nhân — đây mới là hàng shop
  thực sự có. **Chỉ 2 máy gaming.** Content dồn vào **P2 (Nhân viên văn phòng)** và
  **P1 (Sinh viên / mua máy đầu tiên)**, không phải **P3 (Game thủ)**.
- Máy "hero": **Dell Latitude 7400 2in1 i7-8665U — 10.680.000đ, kho 44 chiếc.**
- ⛔ **Máy không có tên trong danh sách 36 → không viết bài, không nêu tên làm ví dụ.**
  Tư vấn inbox/comment cho khách hỏi máy khác thì vẫn làm bình thường.

---


## PRD chi tiết

## PRD-006 — Dell Latitude 7400 2in1 (máy "hero" — kho lớn nhất shop) ✅ ĐỦ FACT
| Field | Value |
|---|---|
| brand | Dell |
| model | Latitude 7400 2in1 |
| condition | **Likenew** |
| cpu | **Intel Core i7-8665U** (tag web khớp tên ✅) |
| ram | **16GB DDR4** |
| storage | **512GB NVMe** |
| gpu | Intel UHD Graphics (onboard) |
| display | **14" FHD, cảm ứng, xoay gập 360°** |
| price | **10.680.000đ** (giá gốc 13.480.000đ — hợp lệ, được viết giảm giá) |
| stock | ✅ **44 chiếc** — có theo dõi kho. **Lượng hàng lớn nhất shop**, gấp hơn 3 lần máy kế tiếp |
| warranty | 6 tháng main/màn/phím; pin 3 tháng (tag `baohanh_6 Tháng`) |
| persona | P1 (Sinh viên / mua máy đầu tiên), P2 (Nhân viên văn phòng), P5 (Doanh nghiệp nhỏ mua theo lô) |
| danh mục | Deal shock + Laptop 2in1 |
| source | https://laptoptv.vn/laptop-cu-dell-latitude-7400-2in1-cam-ung-core-i7-8665u-ram-16gb-ssd-512gb-intel-uhd-graphic-14inch-cam-ung |
| verified_at | 2026-09-20 |

> ✅ **Đây là máy nên dồn content vào.** 44 chiếc là con số hiếm — hầu hết máy khác chỉ 2–8 chiếc.
> Tag web khớp tên ở mọi thông số, giá gốc hợp lệ, bảo hành chuẩn 6 tháng → **không vướng luật
> #13, #14, #15**. Là máy đủ điều kiện nhất trong 36 máy để làm ví dụ và làm bài mẫu.
>
> ⚠️ Cùng dòng còn 2 bản **khác cấu hình, khác giá** cũng trong danh sách 36:
> i5-8365U/8GB/256GB — 8.970.000đ (kho 2) · i5-8365U/16GB/256GB — 9.280.000đ (kho 8).
> **Đừng lẫn giá giữa 3 bản.**

## PRD-004 — Dell Inspiron 13-7391 2in1 ✅ ĐÃ ĐỦ FACT
| Field | Value |
|---|---|
| brand | Dell |
| model | Inspiron 13 - 7391 2in1 |
| condition | **Likenew** |
| cpu | **Intel Core i7-10510U** |
| ram | **16GB** |
| storage | **256GB NVMe PCIe** |
| gpu | Intel Graphics (onboard) |
| display | **13.3 inch 4K, cảm ứng, xoay gập 360°** |
| price | **13.880.000đ** (giá gốc 18.980.000đ) |
| stock | ✅ **6 máy** — có theo dõi kho, xác nhận lại 2026-09-20 (không đổi) |
| warranty | 6 tháng main/màn/phím; pin 3 tháng |
| persona | P2 (Nhân viên văn phòng), P5 (Doanh nghiệp nhỏ mua theo lô) |
| source | https://laptoptv.vn/laptop-cu-dell-inspiron-13-7391-2in1-core-i7-10510u-16gb-256-13-3-inch-4k-cam-ung |
| verified_at | 2026-09-20 |

> ✅ **Đã mở khoá — trước đây toàn UNKNOWN, nay đủ fact để viết bài.**
> Đây là một trong số ít máy vừa có tồn kho xác thực vừa đủ thông số.
>
> ⛔ **Biến thể 512GB — 14.480.000đ (có tặng kèm bút cảm ứng): KHÔNG theo dõi kho
> → ngoài danh sách 36 → không viết bài, không nhắc tên trong bài.** Chỉ dùng khi tư vấn inbox.
> ⚠️ Bản 256GB trong danh sách **không** có bút — đừng viết nhầm.

---

## Cách tra cứu nhanh

Cột CSV: `id,name,vendor,type,segment,condition,warranty_tag,cpu,ram,ssd,gpu,screen,price,compare_at,stock_tracked,qty,url`

⚠️ Tên sản phẩm có chứa dấu phẩy → **không dùng `awk -F,`**, phải đọc bằng CSV parser:

```bash
# Máy văn phòng dưới 8 triệu
python3 -c "
import csv
for r in csv.DictReader(open('02_products/catalog/collections/all-2026-09-20.csv')):
    if r['segment']=='Văn phòng' and int(r['price'])<8_000_000:
        print(r['price'], r['warranty_tag'], r['name'])
"

# 36 máy được phép viết bài (danh sách trắng — luật #20)
python3 -c "
import csv
for r in csv.DictReader(open('02_products/36-may-duoc-viet-2026-09-20.csv')):
    print(r['qty'], r['price'], r['warranty_tag'], r['name'])
"

# Kéo lại dữ liệu 3 danh mục + dựng lại danh sách (chạy mỗi tuần)
python3 tools/collection_fetch.py
```
