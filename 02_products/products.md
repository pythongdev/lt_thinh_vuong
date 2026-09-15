# Product Database

> Nguồn chuẩn cho mọi fact sản phẩm dùng trong content.
> Quy tắc: field nào chưa xác minh → ghi `UNKNOWN`, **không suy đoán**.
> Giá đổi liên tục → luôn mở lại link nguồn trước khi đưa giá vào bài đăng.
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

### ⛔ PHÂN KHÚC DƯỚI 5 TRIỆU — ĐÓNG, KHÔNG VIẾT BÀI

**Quyết định của chủ shop 2026-09-09: ngừng làm content cho phân khúc dưới 5 triệu.**

Lý do dữ liệu chống lưng quyết định này — cả 6 máy dưới 5 triệu trong catalog
**không máy nào có tồn kho xác thực**:

| Giá | Máy | Tồn kho |
|---|---|---|
| 4.290.000đ | Dell Latitude 7270 i5-6300U (PRD-002) | ❌ không theo dõi |
| 4.380.000đ | Dell Latitude 7280 i5-6300U | ❌ không theo dõi |
| 4.600.000đ | Dell Latitude 5470 i5-6300U (PRD-003) | ❌ không theo dõi |
| 4.880.000đ | Dell Latitude 5490 i5-7300U | ❌ không theo dõi |
| 4.900.000đ | Dell Latitude 7480 i5-6300U | ⛔ **chủ shop: hết hàng** |
| 4.980.000đ | Dell Latitude 7470 i5-6300U | ❌ không theo dõi |

> ⛔ **Không viết bài bán, không làm hook "laptop 4 triệu", không chạy quảng cáo phân khúc này.**
> Máy rẻ nhất được phép viết bài hiện nay: **Dell Latitude 7400 vân carbon — 6.880.000đ**
> (i5-8365U · 8GB · 256GB · 14" FHD · BH 6 tháng · **kho 3 máy xác thực**).
>
> 💡 Khách hỏi máy 4 triệu trong inbox/comment thì vẫn tư vấn bình thường —
> lệnh cấm này áp cho **bài đăng chủ động**, không phải chăm sóc khách.

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

## ✅ MÁY CÓ TỒN KHO XÁC THỰC (**37** máy dùng được — chụp 2026-09-15)

Snapshot web cho 39 máy, nhưng chủ shop xác nhận **2 máy Latitude 7480 đã hết hàng**
→ còn **37 máy** được phép viết bài. Đây là **danh sách ưu tiên**: số lượng thật, giá thật,
cấu hình thật.

### Phân khúc 6–10 triệu (⚠️ dưới ngân sách mọi persona — xem `personas.md` 2026-09-15)

> ⛔ Dưới 6.880.000đ hiện **không còn máy nào viết bài được** — xem mục 0 ở trên.

| Giá | Máy | Cấu hình | BH | Kho |
|---|---|---|---|---|
| ~~4.900.000đ~~ | ~~Dell Latitude 7480 i5-6300U~~ | ⛔ **CHỦ SHOP: HẾT HÀNG** — không viết bài | ~~1 tháng~~ | ⛔ |
| ~~5.190.000đ~~ | ~~Dell Latitude 7480 i5-7200U~~ | ⛔ **CHỦ SHOP: HẾT HÀNG** — không viết bài | ~~1 tháng~~ | ⛔ |
| 6.880.000đ | Dell Latitude 7400 vân carbon | i5-8365U · 8GB DDR4 · 256GB NVMe · 14" FHD | 6 tháng | 3 |
| 7.690.000đ | Dell Latitude 7390 2in1 | i5-8250U · 8GB DDR4 · 256GB NVMe · 13.3" FHD cảm ứng | 6 tháng | 4 |
| 8.290.000đ | Dell Latitude 7390 2in1 | i5-8250U · **16GB** · 256GB · 13.3" FHD cảm ứng | 6 tháng | 5 |
| 8.970.000đ | Dell Latitude 7400 2in1 | i5-8365U · 8GB · 256GB · 14" FHD cảm ứng | 6 tháng | 2 |
| 8.980.000đ | Dell Latitude 5300 2in1 | i7-8665U · 16GB · 256GB · 13.3" FHD cảm ứng | 6 tháng | 2 |
| 9.280.000đ | Dell Latitude 7400 2in1 | i5-8365U · 16GB · 256GB · 14" FHD cảm ứng | 6 tháng | 8 |
| 9.380.000đ | Dell Latitude 7420 vỏ carbon | i5-1145G7 · 16GB · 256GB NVMe · 14" FHD · Iris Xe | 6 tháng | 5 |
| 9.690.000đ | Dell Latitude 5300 2in1 | i7-8665U · 16GB · 512GB · 13.3" FHD cảm ứng | 6 tháng | 3 |
| 9.880.000đ | Dell Latitude 5310 2in1 | i5-10210U · 16GB · 512GB · 13.3" FHD cảm ứng | 6 tháng | 4 |

### Phân khúc 10–18 triệu (P1 sinh viên 10–15tr · P2 văn phòng 15–20tr · P5 doanh nghiệp từ 13tr)

| Giá | Máy | Cấu hình | BH | Kho |
|---|---|---|---|---|
| 10.680.000đ | Dell Latitude 7400 2in1 | i7-8665U · 16GB · 512GB · 14" FHD cảm ứng | 6 tháng | **44** |
| 10.980.000đ | Dell Latitude 7420 2in1 carbon | i5-1145G7 · 16GB · 256GB · 14" FHD cảm ứng | 6 tháng | 5 |
| 11.280.000đ | Dell Inspiron 7415 2in1 | Ryzen 7-5700U · 16GB · 512GB · 14" FHD cảm ứng | 6 tháng | 3 |
| 11.980.000đ | Dell Latitude 9410 2in1 | i5-10210U · 16GB · 256GB · 14" | 6 tháng | 4 |
| 12.980.000đ | Dell Latitude 7420 vỏ nhôm | i7-1185G7 · 16GB · 512GB · 14" FHD · Iris Xe | 6 tháng | 3 |
| 12.980.000đ | Dell Latitude 9410 2in1 | i7-10610U · 16GB · 256GB · 14" | 6 tháng | 5 |
| 13.480.000đ | Lenovo ThinkPad X1 Yoga Gen 6 | i5-1135G7 · 16GB LPDDR4 · 256GB · 14" FHD+ cảm ứng | 6 tháng | 2 |
| 13.680.000đ | Dell Latitude 9410 2in1 | i7-10610U · 16GB · 512GB · 14" | 6 tháng | 8 |
| 13.880.000đ | Dell Inspiron 13-7391 2in1 | i7-10510U · 16GB · 256GB · **13.3" 4K cảm ứng** | 6 tháng | 6 |
| 13.890.000đ | Dell Latitude 9520 2in1 | i5-1145G7 · 16GB · 256GB · 15" FHD cảm ứng | 6 tháng | 4 |
| 14.880.000đ | Surface Laptop 4 | i7-1185G7 · 16GB · 512GB · 13.5" 2K cảm ứng | 6 tháng | 4 |
| **14.980.000đ** (từ 14.480.000đ, 2026-09-15) | Dell Latitude 9420 2in1 | i5-1145G7 · 16GB · 256GB · 14" 2K | 6 tháng | 13 |
| 15.180.000đ | Dell Precision 7550 | i7-10850H · 16GB · 512GB · **NVIDIA T1000** · 15.6" FHD | 6 tháng | 4 |
| 15.790.000đ | Dell Precision 7550 | i7-10850H · 16GB · 512GB · ⚠️T2000/T1000 · 15.6" FHD | 6 tháng | 4 |
| 15.880.000đ | Dell XPS 7390 2in1 | i7-1065G7 · 16GB · 256GB · 13.3" FHD cảm ứng | 6 tháng | 3 |
| 15.890.000đ | HP OmniBook 5 Flip 2in1 | Core 5-120U · 8GB · 512GB · 14" cảm ứng | **12 tháng** (mới) | 3 |
| 16.680.000đ | Dell Inspiron 5430 | i5-1340P · 16GB · 512GB · 14" 2K | 6 tháng | 3 |
| 16.980.000đ | Asus TUF A15 FA506QM | Ryzen 7-5800H · 16GB · 512GB · **RTX 3050Ti** · 15.6" 144Hz | 6 tháng | 5 |
| 16.980.000đ | Asus Vivobook S14 Q423SA | Ultra 5 226V · 16GB DDR5 · 512GB · 14" FHD+ **OLED** | **12 tháng** (mới) | 3 |
| 17.680.000đ | Dell Precision 5550 | i7-10850H · 16GB · 512GB · Quadro T2000 · 15.6" FHD | 6 tháng | 9 |
| 17.980.000đ | Dell XPS 9310 2in1 | i7-1165G7 · 16GB · 256GB · 13.3" | 6 tháng | 7 |

### Phân khúc trên 18 triệu (P2 văn phòng tới 20tr · P3 gaming · P4 đồ hoạ · P5 doanh nghiệp)

| Giá | Máy | Cấu hình | BH | Kho |
|---|---|---|---|---|
| 18.680.000đ | Acer Nitro 5 Tiger | i5-12500H · 16GB · 512GB · **RTX 3050Ti** · 15.6" 165Hz | 6 tháng | 2 |
| 18.880.000đ | Dell Latitude 9430 2in1 | i7-1265U · 16GB DDR5 · 256GB · 14" 2.2K cảm ứng | 6 tháng | 3 |
| 20.880.000đ | Dell Latitude 9430 2in1 | i7-1265U · **32GB DDR5** · 256GB · 14" 2.2K cảm ứng | 6 tháng | 2 |
| **23.880.000đ** (từ 19.880.000đ, 2026-09-15) | Dell Inspiron 7440 2in1 | Core 5-120U · 16GB · 512GB · 14" FHD cảm ứng | **12 tháng** (mới) | 7 |
| 24.280.000đ | HP OmniBook X Flip 2in1 | Ryzen AI 5 340 · ⚠️16GB? · 512GB · 14" cảm ứng | **12 tháng** (mới) | 8 |
| 25.390.000đ | Dell Inspiron 7445 2in1 | ⚠️Ryzen 7/5-8840HS · 16GB? · 1TB · 14" FHD+ cảm ứng | **12 tháng** (mới) | 5 |
| 26.490.000đ | HP OmniBook X Flip 2in1 | Ryzen AI 7 350 · 24GB · 1TB · 14" cảm ứng | **12 tháng** (mới) | 5 |

> 💡 **Đọc ra chiến lược**: **29/37** máy còn hàng là **máy 2in1 xoay gập cảm ứng**, chủ yếu
> Dell Latitude dòng doanh nhân. Đây mới là hàng shop thực sự đang có — không phải gaming.
> Content nên dồn vào đây thay vì các dòng đã hết.

---

## PRD chi tiết

## PRD-001 — Dell Latitude E7440
| Field | Value |
|---|---|
| brand | Dell |
| model | Latitude E7440 |
| status | ⛔ **ĐÃ GỠ KHỎI WEBSITE** |
| verified_at | 2026-09-15 |

> ⛔ **Không còn tồn tại trên catalog** (đã quét toàn bộ 593 SP ngày 2026-09-09, không có kết quả nào khớp "E7440").
> Ngày 2026-09-05 máy này còn trên trang nhưng đã hết hàng → nay bị gỡ hẳn.
> **Không viết bài, không nhắc tên máy này.** Giữ bản ghi để biết lịch sử.
>
> **Không có hàng thay thế — phân khúc đã đóng.**
> Ứng viên duy nhất còn hàng ở tầm giá này là Latitude 7480, nhưng chủ shop xác nhận
> **cũng đã hết hàng** (2026-09-09). Toàn bộ phân khúc dưới 5 triệu **ngừng làm content**
> — xem mục 0 đầu file. `UNVERIFIED.md` #16 và #17 đã đóng.

## PRD-002 — Dell Latitude 7270
| Field | Value |
|---|---|
| brand | Dell |
| model | Latitude 7270 |
| condition | Cũ |
| cpu | Intel Core i5-6300U |
| ram | 8GB |
| storage | 256GB NVMe SSD |
| gpu | Intel HD Graphics (onboard) |
| display | **12.5" HD** (xác nhận lại 2026-09-09) |
| price | **4.290.000đ** (giá gốc 6.980.000đ) — không đổi so với 2026-09-05 |
| stock | ⚠️ **KHÔNG XÁC ĐỊNH** — web không theo dõi kho cho máy này |
| warranty | 6 tháng main/màn/phím; pin 3 tháng (tag `baohanh_6 Tháng`) |
| persona | P1, P2 (ưu tiên người cần máy siêu nhỏ gọn) |
| source | https://laptoptv.vn/dell-latitude-7270-core-i5-6300u-ram-8gb-ssd-256gb-man-hinh-12-5-inch-hd |
| verified_at | 2026-09-15 |
> Biến thể i7-6600U — **5.090.000đ** (gốc 7.480.000đ), cùng tình trạng kho không xác định.
>
> ⛔ **KHÔNG VIẾT BÀI — thuộc phân khúc dưới 5 triệu đã đóng** (quyết định chủ shop 2026-09-09).
> Đây vẫn là máy rẻ nhất catalog, nhưng không có tồn kho xác thực và phân khúc đã ngừng làm
> content. Giữ bản ghi để tư vấn inbox và để dùng lại nếu shop mở lại phân khúc.

## PRD-003 — Dell Latitude 5470
| Field | Value |
|---|---|
| brand | Dell |
| model | Latitude 5470 |
| condition | Cũ |
| cpu | Intel Core i5-6300U |
| ram | **8GB DDR4 2133MHz** (chốt theo sổ tay Dell — xem dưới). Web ghi "DDR3" là **sai** |
| storage | 256GB SSD M.2 NVMe |
| gpu | Intel Graphics (onboard) |
| display | **14"** — ⚠️ **HD 1366×768 hay FHD 1920×1080 chưa chốt, chỉ máy thật mới trả lời được**. Bài viết chỉ được ghi "màn 14 inch" |
| price | **4.600.000đ** (gốc 8.980.000đ) — không đổi |
| stock | ⚠️ **KHÔNG XÁC ĐỊNH** — web không theo dõi kho |
| warranty | 6 tháng main/màn/phím; pin 3 tháng |
| persona | P1, P2, P5 |
| source | https://laptoptv.vn/laptop-cu-dell-latitude-5470-core-i5-6300u-8gb-256gb-man-hinh-14-inch-fhd |
| verified_at | 2026-09-15 |

> ⛔ **KHÔNG VIẾT BÀI — 4.600.000đ thuộc phân khúc dưới 5 triệu đã đóng** (chủ shop 2026-09-09).
> Câu hỏi màn HD/FHD (#15) vì thế **hạ mức ưu tiên** — không còn chặn bài nào.
> Hai biến thể i7 (5.690.000đ và 6.090.000đ) nằm **ngoài** phân khúc đóng, nhưng cũng
> không có tồn kho xác thực → vẫn phải gọi shop trước khi viết.

> ### Kết quả tra cứu 2026-09-09 (task #15) — đã đảo lại kết luận cũ
>
> ✅ **RAM = DDR4 2133MHz. Ghi chép "DDR3" trước đó là SAI.**
> Sổ tay Dell Latitude E5470 ghi rõ: bộ nhớ **DDR4 SDRAM 2133MHz**, 4–16GB, **không có tuỳ chọn
> DDR3 hay DDR3L**. Nền tảng Skylake của máy này không chạy DDR3 phổ thông.
> Lý do kết luận cũ sai: hai "nguồn độc lập" (tag `ram_ 8GB DDR3` + bảng thông số trong mô tả)
> thật ra **là một nguồn** — khối mô tả là văn bản copy-paste dùng chung cho cả 3 máy 5470,
> nên máy i7-6600U có tag `ram_8GB DDR4` mà mô tả vẫn ghi "RAM 8GB DDR3". Xem `UNVERIFIED.md` #22.
> 👉 Dù vậy **loại RAM không phải điểm bán** — trong bài cứ viết "RAM 8GB", đừng nêu DDR.
>
> ⛔ **MÀN HÌNH: KHÔNG CHỐT ĐƯỢC BẰNG DỮ LIỆU WEB — và sẽ không bao giờ chốt được.**
> Dell xuất xưởng E5470 với **cả ba loại panel 14"**: FHD 1920×1080 non-touch (300 nit),
> FHD 1920×1080 cảm ứng (270 nit), và HD 1366×768 (200 nit). Nên "HD" và "FHD" **đều là
> cấu hình có thật** — đây là câu hỏi *máy này là con nào*, không phải lỗi đánh máy trên web.
> Trên trang SP: **FHD ở 4 chỗ** (tên SP, tag `manhinh_ 14 inch FHD`, đoạn "Thiết kế", tên file ảnh
> `dell-latitude-e5470-full-hd-ips...`) · **HD ở 2 chỗ** (bảng thông số `14" HD`, câu "độ phân giải HD")
> — nhưng cả 2 chỗ ghi HD nằm trong khối mô tả copy-paste → không tính là nguồn.
> 👉 **Hành động duy nhất còn lại: kỹ thuật bật máy, xem Settings → Display.** 30 giây là xong.
> Cho tới lúc đó: **chỉ được viết "màn 14 inch"**, cấm chữ "FHD" và cấm chữ "Full HD".
> (`UNVERIFIED.md` #15 — vẫn mở, nhưng đã hết việc để tra)
>
> Nguồn: [Dell E5470 — Memory specifications](https://www.dell.com/support/manuals/en-us/latitude-e5470-laptop/latitudee5470_om/memory-specifications) ·
> [Display specifications](https://www.dell.com/support/manuals/en-us/latitude-e5470-laptop/latitudee5470_pub/display-specifications)
>
> Fact khác lấy được từ mô tả — ⚠️ mô tả là văn bản copy-paste dùng chung, **coi là chưa xác minh**:
> pin ~3h · nặng 1.75kg · vỏ sợi carbon + khung magie · 2×USB 3.2 Gen1, 1×USB-C, LAN, HDMI,
> jack 3.5mm, khe SD · Windows 10.

> Biến thể khác cùng dòng (kho không xác định): i7-6600U 5.690.000đ · i7-6820HQ 6.090.000đ.

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
| stock | ✅ **6 máy** — có theo dõi kho, số liệu đáng tin (2026-09-09) |
| warranty | 6 tháng main/màn/phím; pin 3 tháng |
| persona | P2, P5 |
| source | https://laptoptv.vn/laptop-cu-dell-inspiron-13-7391-2in1-core-i7-10510u-16gb-256-13-3-inch-4k-cam-ung |
| verified_at | 2026-09-15 |

> ✅ **Đã mở khoá — trước đây toàn UNKNOWN, nay đủ fact để viết bài.**
> Đây là một trong số ít máy vừa có tồn kho xác thực vừa đủ thông số.
>
> **Biến thể 512GB — 14.480.000đ (gốc 18.980.000đ): có TẶNG KÈM BÚT cảm ứng**
> (ghi rõ trong tên sản phẩm). ⚠️ Bản 256GB **không** có bút — đừng viết nhầm.
> Bản 512GB **không** có theo dõi kho → không nói về số lượng.
> Link bản 512GB: https://laptoptv.vn/laptop-cu-dell-inspiron-13-7391-2in1-core-i7-10510u-16gb-256gb-4k-cam-ung

## PRD-005 — Nhóm gaming
| Field | Value |
|---|---|
| Số máy gaming trong catalog | **79** |
| Dải giá | 15.680.000đ – 88.680.000đ |
| Hãng chính | Lenovo Legion, Acer Predator/Nitro, Asus TUF, MSI |
| verified_at | 2026-09-09 |

> ⚠️ Đây là dữ liệu **nhóm**, không phải 1 sản phẩm. Muốn viết bài cho 1 máy gaming cụ thể
> → tách thành PRD riêng với giá và cấu hình chính xác của máy đó.
>
> 🔴 **Trong 79 máy gaming, chỉ 2 máy có tồn kho xác thực:**
> - Asus TUF A15 FA506QM · Ryzen 7-5800H · 16GB · 512GB · RTX 3050Ti · 15.6" 144Hz — **16.980.000đ**, kho 5
> - Acer Nitro 5 Tiger · i5-12500H · 16GB · 512GB · RTX 3050Ti · 15.6" 165Hz — **18.680.000đ**, kho 2
>
> Toàn bộ Legion/Predator cao cấp (33–54 triệu) **không có tồn kho xác thực**, và một số
> còn nằm trong nhóm "giá gốc thấp hơn giá bán" → không viết bài giảm giá cho chúng.
> **Kết luận: gaming không phải mũi nhọn nên dồn content lúc này.**

---

## Cách tra cứu nhanh

Cột CSV: `id,name,vendor,type,segment,condition,warranty_tag,cpu,ram,ssd,gpu,screen,price,compare_at,stock_tracked,qty,url`

⚠️ Tên sản phẩm có chứa dấu phẩy → **không dùng `awk -F,`**, phải đọc bằng CSV parser:

```bash
# Máy văn phòng dưới 8 triệu
python3 -c "
import csv
for r in csv.DictReader(open('02_products/catalog/catalog-2026-09-15.csv')):
    if r['segment']=='Văn phòng' and int(r['price'])<8_000_000:
        print(r['price'], r['warranty_tag'], r['name'])
"

# Máy có tồn kho xác thực trong snapshot (39 dòng — TRỪ 2 máy Latitude 7480
# chủ shop báo hết hàng → 37 máy thực sự viết bài được)
python3 -c "
import csv
for r in csv.DictReader(open('02_products/catalog/catalog-2026-09-15.csv')):
    if r['stock_tracked']=='yes' and int(r['qty'])>0:
        print(r['qty'], r['price'], r['name'])
"
```
