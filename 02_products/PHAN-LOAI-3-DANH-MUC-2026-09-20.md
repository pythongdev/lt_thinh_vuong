# 3 danh mục cần đẩy bán — dữ liệu & phân loại

> **Nguồn:** API công khai `laptoptv.vn/collections/<alias>/products.json`
> **verified_at: 2026-09-20** · kéo bằng `python3 tools/collection_fetch.py`
> **Hạn dùng: 2026-09-27** (luật #10 — quá 7 ngày phải kéo lại trước khi viết).
>
> File này là **bản phân loại để lập kế hoạch content**, chưa phải nguồn fact cho bài viết.
> Máy nào chọn viết → chép sang `02_products/products.md` kèm source + verified_at, rồi mới viết.

## File dữ liệu

| File | Nội dung |
|---|---|
| `catalog/collections/deal-shock-2026-09-20.csv` | 33 SP |
| `catalog/collections/laptop-gaming-2026-09-20.csv` | 82 SP |
| `catalog/collections/laptop-2in1-2026-09-20.csv` | 124 SP |
| `catalog/collections/all-2026-09-20.csv` | 217 SP đã bỏ trùng, thêm cột `collections` + `price_band` |
| `catalog/collections/xung-dot-cau-hinh-2026-09-20.csv` | 27 SP tag lệch tên — đọc trước khi viết thông số |

**239 lượt xuất hiện → 217 máy thật.** 22 máy nằm ở 2 danh mục cùng lúc
(20 máy Deal shock + 2in1, 2 máy Deal shock + Gaming) — **không viết 2 bài trùng nội dung cho 1 máy.**

---

## 1. Phân loại theo con số

### Bảng A — Số máy theo khoảng giá

| Khoảng giá | Deal shock | Laptop Gaming | Laptop 2in1 |
|---|---:|---:|---:|
| 5–10 triệu | — | 3 | 18 |
| 10–15 triệu | 11 | 8 | 48 |
| 15–20 triệu | 14 | 22 | 33 |
| 20–30 triệu | 8 | 31 | 23 |
| trên 30 triệu | — | 18 | 2 |
| **Tổng** | **33** | **82** | **124** |

### Bảng B — Tình trạng máy

| Danh mục | Cũ | Likenew | Mới 100% | Không rõ trong tên |
|---|---:|---:|---:|---:|
| Deal shock | 6 | 19 | 8 | 0 |
| Laptop Gaming | 24 | 16 | 40 | 2 |
| Laptop 2in1 | 33 | 58 | 32 | 1 |

### Bảng C — Hãng

| Danh mục | Phân bổ hãng |
|---|---|
| Deal shock | Dell 23 · HP 5 · Asus 2 · Lenovo 1 · Samsung 1 · Acer 1 |
| Laptop Gaming | Lenovo 28 · Acer 21 · Dell 12 · Asus 11 · HP 6 · MSI 2 · ASUS 1 · (trống) 1 |
| Laptop 2in1 | Dell 84 · HP 28 · Lenovo 7 · Samsung 4 · (trống) 1 |

### Bảng D — 36 máy có tồn kho xác thực (207 chiếc)

| Giá | Máy | Kho | BH | Danh mục |
|---|---|---:|---|---|
| 7.690.000đ | Laptop cũ Dell Latitude 7390 2in1 Core i5-8250U / 8GB / 256GB / 13.3 inch FHD | 4 | 6 Tháng | 2in1 |
| 8.290.000đ | Laptop cũ Dell Latitude 7390 2in1 Core i5-8250U / 16GB / 256GB / 13.3 inch Cảm ứng | 5 | 6 Tháng | 2in1 |
| 8.970.000đ | [Like New] Dell Latitude 7400 2in1 Core i5-8365U / 8GB / 256GB / Intel UHD Graphic / 14 inch FHD Cảm ứng | 2 | 6 Tháng | 2in1 |
| 8.980.000đ | Laptop cũ Dell Latitude 5300 2in1 Core i7-8665U / 16GB / 256GB / 13.3 inch FHD Cảm ứng | 2 | 6 Tháng | 2in1 |
| 9.280.000đ | [Like New] Dell Latitude 7400 2in1 Core i5-8365U / 16GB / 256GB / Intel UHD Graphic / 14 inch FHD Cảm ứng | 8 | 6 Tháng | 2in1 |
| 9.380.000đ | [Like New] Dell Latitude 7420 [Vỏ Carbon] Core i5-1145G7 / 16GB / 256GB / 14.0 inch FHD | 5 | 6 Tháng | 2in1 |
| 9.690.000đ | Laptop cũ Dell Latitude 5300 2in1 Core i7-8665U / 16GB / 512GB / 13.3 inch FHD Cảm ứng | 3 | 6 Tháng | 2in1 |
| 9.880.000đ | Laptop cũ Dell Latitude 5310 2in1 Core i5-10210U / 16GB / 512GB / 13.3 inch FHD Cảm ứng | 4 | 6 Tháng | 2in1 |
| 10.680.000đ | [Like New] Dell Latitude 7400 2in1 Core i7-8665U / 16GB / 512GB / Intel UHD Graphics / 14inch FHD Cảm ứng | 44 | 6 Tháng | Deal + 2in1 |
| 10.980.000đ | [Like New] Dell Latitude 7420 2in1 [vỏ carbon] Core i5-1145G7 / 16GB / 256GB / 14.0 inch FHD | 5 | 6 Tháng | 2in1 |
| 11.280.000đ | [LikeNew] Dell Inspiron 7415 2in1 Ryzen 7- 5700U / 16GB / 512GB / 14 inch FHD Cảm ứng | 3 | 6 Tháng | Deal + 2in1 |
| 11.980.000đ | [Like New] Dell Latitude 9410 2in1 Core i5-10210U / 16GB / 256GB / 14 inch FHD | 4 | 6 Tháng | 2in1 |
| 12.980.000đ | [Like New] Dell Latitude 9410 2in1 Core i7-10610U / 16GB / 256GB / 14 inch FHD | 5 | 6 Tháng | Deal + 2in1 |
| 12.980.000đ | [Like New] Dell Latitude 7420 [Vỏ nhôm] Core i7-1185G7 / 16GB / 512GB / 14.0 inch FHD | 3 | 6 Tháng | 2in1 |
| 13.480.000đ | [LikeNew] Lenovo Thinkpad X1 Yoga Gen 6 2in1 Core i5-1135G7 / 16GB / 256GB / 14 inch FHD+ ( Kèm bút ) | 2 | 6 Tháng | Deal + 2in1 |
| 13.680.000đ | [Like New] Dell Latitude 9410 2in1 Core i7-10610U / 16GB / 512GB / 14 inch FHD | 8 | 6 Tháng | Deal + 2in1 |
| 13.880.000đ | [Like new] Dell inspiron 13 - 7391 2in1 Core i7-10510U / 16GB / 256GB /13.3 inch 4K Cảm ứng | 6 | 6 Tháng | Deal |
| 14.290.000đ | [Like New] Dell Latitude 9520 2in1 Core i5-1145G7 / 16GB / 256GB / 15.6 inch FHD Cảm ứng | 4 | 6 Tháng | Deal + 2in1 |
| 14.880.000đ | [Like New] Surface Laptop 4 i7- 1185G7 / 16GB / 512GB / 13.5 inch 2K Cảm ứng | 4 | 6 Tháng | Deal + 2in1 |
| 14.980.000đ | [Like New] Dell Latitude 9420 2in1 Core i5-1145G7 / 16GB / 256GB / 14 inch 2K | 13 | 6 Tháng | Deal + 2in1 |
| 15.180.000đ | Laptop cũ Dell Precision 7550 Core™ i7-10850H / 16GB / 512GB / T1000 / 15.6 inch FHD | 4 | 6 Tháng | Deal |
| 15.790.000đ | Laptop cũ Dell Precision 7550 Core™ i7-10850H / 16GB / 512GB / T2000 / 15.6 inch FHD | 4 | 6 Tháng | Deal |
| 15.880.000đ | Laptop cũ Dell XPS 7390 2in1 Core i7-1065G7 / 16GB / 256GB / 13.3 inch FHD Cảm ứng | 3 | 6 Tháng | Deal |
| 15.890.000đ | [New 100%] HP OmniBook 5 Flip 2in1 Core 5 120U / 8GB / 512GB / 14inch FHD + Touch / Glacier Silver | 3 | 12 Tháng | Deal + 2in1 |
| 16.680.000đ | [Like new] Laptop Dell Inspiron 5430 Core i5-1340P / 16GB / 512GB / 14 inch 2.5K | 3 | 6 Tháng | Deal |
| 16.980.000đ | Laptop cũ Asus TUF A15 FA506QM Ryzen 7-5800H / 16GB / 512G / RTX 3050TI / 15.6 inch FHD 144Hz | 5 | 6 Tháng | Deal + Gaming |
| 16.980.000đ | [New 100%] Asus Vivobook S 14 Q423SA-U5512 Core Ultra 5 226V / 16GB / 512GB / Intel Arc Graphics / 14 inch FHD+ OLED | 3 | 12 Tháng | Deal |
| 17.680.000đ | [Like New] Dell Precision 5550 Core i7-10850H [10750H] / 16GB / 512GB / T2000 / 15.6 inch FHD | 9 | 6 Tháng | Deal |
| 17.980.000đ | [Like New] Dell XPS 9310 2in1 Core i7-1165G7 / 16GB / 256GB / 13 inch FHD+ Cảm ứng | 7 | 6 Tháng | Deal + 2in1 |
| 18.880.000đ | [Like New] Laptop Dell Latitude 9430 2in1 Core i7-1265U / 16GB / 256GB / Iris Xe Graphic / 14 inch 2K Cảm ứng | 3 | 6 Tháng | Deal + 2in1 |
| 19.680.000đ | [Like New] Acer Nitro 5 Tiger Core i5-12500H / 16GB / 512GB / RTX 3050 / 15.6 inch FHD 165Hz | 2 | 6 Tháng | Deal + Gaming |
| 20.880.000đ | [Like New] Laptop Dell Latitude 9430 2in1 Core i7-1265U / 32GB / 256GB / Iris Xe Graphic / 14 inch 2K Cảm ứng | 2 | 6 Tháng | Deal + 2in1 |
| 23.880.000đ | [New 100%] Laptop Dell Inspiron 7440 2in1 Core 5-120U / 16GB / 512GB / 14 inch FHD Cảm ứng | 7 | 12 Tháng | Deal + 2in1 |
| 24.280.000đ | [New100%] HP OmniBook X Flip 2in1 Ryzen AI 5 340 / 16GB / 512GB / 14 inch FHD+ Touch / Meteor Silver | 8 | 12 Tháng | Deal + 2in1 |
| 25.390.000đ | [New 100%] Laptop Dell Inspiron 7445 2in1 Ryzen 7 - 8840HS / 16GB / 1TB / AMD Radeon Graphics / 14 inch FHD+ Touch | 5 | 12 Tháng | Deal + 2in1 |
| 26.490.000đ | [New100%] HP OmniBook X Flip 2in1 Ryzen AI 7 350 / 24GB / 1TB / 14 inch FHD+ Touch / Meteor Silver | 5 | 12 Tháng | Deal + 2in1 |

### Bảng E — GPU rời trong danh mục Gaming (đọc từ TÊN máy)

| GPU | Số máy | Giá thấp nhất | Giá cao nhất |
|---|---:|---|---|
| RTX 3050 | 16 | 15.680.000đ | 27.690.000đ |
| RTX 4060 | 14 | 25.990.000đ | 38.990.000đ |
| (tên không ghi GPU) | 10 | 7.590.000đ | 23.890.000đ |
| RTX 3050 Ti | 8 | 16.980.000đ | 25.590.000đ |
| RTX 4050 | 8 | 22.580.000đ | 32.880.000đ |
| GTX 1650 | 7 | 13.480.000đ | 15.990.000đ |
| RTX 3060 | 6 | 21.690.000đ | 26.790.000đ |
| RTX 5060 | 6 | 34.480.000đ | 53.990.000đ |
| RTX 2050 | 2 | 15.680.000đ | 17.680.000đ |
| GTX 1050 Ti | 1 | 9.880.000đ | 9.880.000đ |
| GTX 1650 Ti | 1 | 13.680.000đ | 13.680.000đ |
| RTX 2060 | 1 | 14.980.000đ | 14.980.000đ |
| RTX 4070 | 1 | 42.890.000đ | 42.890.000đ |
| RTX 5070 | 1 | 54.390.000đ | 54.390.000đ |

### Bảng F — 4 máy cấm viết "giảm giá" (giá gốc < giá bán)

| Giá bán | "Giá gốc" trên web | Máy |
|---|---|---|
| 22.490.000đ | 21.380.000đ | [Like new] Dell Gaming G15 5520 Core i5-12500H / 16GB / 512GB / RTX 3050 / 15.6 inch FHD 120Hz |
| 32.390.000đ | 31.990.000đ | [New 100%] Laptop Lenovo Legion Y7000 2024 Core i7-13650HX / 24GB / 512GB / RTX 4060 8GB / 15.6 inch FHD 144Hz |
| 32.880.000đ | 31.890.000đ | [New100%] Laptop Lenovo Legion Slim 5 Y7000P Core i7-13620H / 16GB / 1TB / NVIDIA RTX 4050 Mobile / 16 inch 2K 165Hz 100% sRGB |
| 53.990.000đ | 48.880.000đ | [New 100%] Laptop Lenovo Legion Y7000P 2025 Core i9-14900HX / 16GB / 1TB / RTX 5060 8GB / 16 2K+ 240Hz |

### Bảng G — 4 máy KHÔNG có tag bảo hành

| Giá | Máy | Danh mục |
|---|---|---|
| 9.880.000đ | Laptop cũ Dell Inspiron 7567 / Core i7-7700HQ / 8GB / 256GB / GTX 1050Ti | Gaming |
| 15.680.000đ | Laptop Gaming Asus TUF FX706HC-HX009T Core i5 11400H / 16GB / 512GB / RTX 3050 / 17.3 inch FHD 144hz | Gaming |
| 16.290.000đ | Lenovo Ideapad Gaming 3 Ryzen 5-5600H / 8GB / 256GB / 3050TI / 15.6 inch FHD 120Hz | Gaming |
| 16.880.000đ | [Open box] Dell Latitude 9420 [Vỏ nhôm] Core i7-1185G7 / 16GB / 512GB / 14.0 inch FHD | 2in1 |

---

## 2. Chân dung 3 danh mục — viết cho ai

### Deal shock — 33 máy · 10,68–26,49 triệu
Không phải nhóm "giá rẻ" mà là **nhóm văn phòng cao cấp giảm giá**: 23/33 máy là Dell,
phần lớn dòng Latitude 9-series và 2in1 cao cấp, 19/33 là Likenew. Đây là danh mục
**khỏe nhất về tồn kho — 25/33 máy có kho xác thực**, nên là nhóm duy nhất được phép
nói chuyện số lượng.

- Persona chính: **P2 (Nhân viên văn phòng)**, phụ **P4 (Đồ họa / kỹ thuật)** cho 4 máy Precision 7550
- Journey: **J3 (Đang so sánh)** → **J4 (Đã inbox / gọi / ghé shop)**
- Objective: **O4 (Cân nhắc mua)** và **O5 (Tạo lead / đơn)**
- Pillar: **CP10 (Hàng & ưu đãi)**, phụ **CP05 (Đánh giá sản phẩm)**
- ⚠️ Tên danh mục là "Deal shock" nhưng **giọng văn cấm chữ "sốc"** — trong bài phải gọi khác.

### Laptop Gaming — 82 máy · 7,59–54,39 triệu
Danh mục **giá cao nhất và mới nhất**: 40/82 máy New 100% (bảo hành 12 tháng), 18 máy trên
30 triệu. Trục phân loại đúng của nhóm này là **GPU**, không phải giá — xem Bảng E.
Điểm yếu: **chỉ 2/82 máy có kho xác thực** → gần như toàn bộ danh mục cấm nói "còn hàng".

- Persona chính: **P3 (Game thủ)**, phụ **P4 (Đồ họa / kỹ thuật)** cho nhóm RTX 4060 trở lên
- Journey: **J2 (Bắt đầu quan tâm laptop cũ)** → **J3 (Đang so sánh)**
- Objective: **O2 (Hiểu vấn đề)** cho nhóm chọn GPU, **O4 (Cân nhắc mua)** cho bài từng máy
- Pillar: **CP03 (So sánh)** và **CP01 (Tư vấn mua)**, phụ **CP09 (Thị trường & công nghệ)**
- Góc mạnh nhất: "RTX 3050 hay RTX 4050?" — 16 máy RTX 3050 vs 8 máy RTX 4050, chồng giá nhau.

### Laptop 2in1 — 124 máy · 7,69–31,68 triệu
**Danh mục lớn nhất và rẻ nhất** — 18 máy dưới 10 triệu, 48 máy 10–15 triệu. Dell chiếm
84/124. Đây là nhóm duy nhất chạm được **P1 (Sinh viên / mua máy đầu tiên)**.
27/124 máy có kho xác thực, tập trung ở nhóm dưới 15 triệu.

- Persona: **P1 (Sinh viên / mua máy đầu tiên)** cho nhóm 7–10 triệu ·
  **P2 (Nhân viên văn phòng)** cho nhóm 10–20 triệu · **P4 (Đồ họa / kỹ thuật)** cho nhóm cảm ứng + bút
- Journey: **J0 (Chưa biết shop)** → **J2 (Bắt đầu quan tâm laptop cũ)**
- Objective: **O1 (Tiếp cận)** và **O2 (Hiểu vấn đề)**
- Pillar: **CP02 (Kiến thức)** — "2in1 là gì, ai thật sự cần" — và **CP01 (Tư vấn mua)**
- Cả danh mục hầu như chưa được giải thích: khách không biết 2in1 khác laptop thường chỗ nào.

---

## 3. ⛔ Luật áp cho 3 danh mục này

| Luật | Áp dụng cụ thể |
|---|---|
| #12 tồn kho | **36/217 máy** có kho xác thực. **181 máy còn lại cấm viết "còn hàng", "còn X máy", "sắp hết"** — kể cả khi web hiện còn hàng. Danh sách được phép: Bảng D. |
| #13 cấu hình | **27 máy** có tag lệch tên (Bảng CSV riêng). Lấy cấu hình **theo tên máy**; thông số nào tag cãi tên → **bỏ khỏi bài**. Thêm **31 máy** tag CPU chung chung ("Intel Core i7") → không dùng tag này. |
| #14 bảo hành | Đọc cột `warranty_tag` từng máy. Trong 3 danh mục: 0 máy bảo hành bất thường, nhưng **4 máy không có tag bảo hành** (Bảng G) → **không tự suy ra 6 tháng**, hỏi shop. |
| #15 giảm giá | **4 máy** ghi giá gốc thấp hơn giá bán (Bảng F) → cấm viết "giảm giá", "sale". |
| #16 dưới 5 triệu | ✅ Không máy nào dưới 5 triệu. Cả 3 danh mục hợp lệ. Máy rẻ nhất: 7.590.000đ (gaming). |
| #17 chủ shop ghi đè | 2 máy Latitude 7480 chủ shop báo hết **không** nằm trong 3 danh mục này. Vẫn phải hỏi shop trước khi lên lịch đăng. |
| #9 đối thủ | Danh mục Gaming dễ sa vào so sánh shop — chỉ so ở mặt bằng chung, không nêu tên. |
| Giọng văn | Cấm "sốc", "rẻ nhất", "số 1", "chính hãng" cho máy cũ — kể cả khi trích tên danh mục "Deal shock". |

### 3 máy chưa rõ tình trạng cũ/mới (tên không ghi)
Không viết "likenew" hay "mới" cho 3 máy này cho tới khi shop xác nhận:

| Giá | Máy |
|---|---|
| 15.680.000đ | Laptop Gaming Asus TUF FX706HC-HX009T Core i5 11400H (cũng thiếu tag bảo hành) |
| 16.290.000đ | Lenovo Ideapad Gaming 3 Ryzen 5-5600H (cũng thiếu tag bảo hành) |
| 16.880.000đ | [Open box] Dell Latitude 9420 Vỏ nhôm Core i7-1185G7 — "Open box" là tình trạng thứ 4, chưa có trong chính sách bảo hành |

---

## 4. Việc cần hỏi chủ shop trước khi lên lịch đăng

1. **4 máy không tag bảo hành** (Bảng G) — bảo hành bao lâu?
2. **"Open box" Latitude 9420** — tính là mới (12 tháng) hay likenew (6 tháng)?
3. **181 máy không theo dõi kho** — máy nào thật sự còn để ưu tiên đẩy trước?
4. **4 máy giá gốc lỗi** (Bảng F) — sửa trên web hay bỏ luôn ý định làm bài ưu đãi?
5. Danh mục nào cần bán gấp nhất? 217 máy không thể đẩy cùng lúc.

> Câu trả lời → ghi vào `01_company/facts/UNVERIFIED.md` và mục 0 của `02_products/products.md`.
