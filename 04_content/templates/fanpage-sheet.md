# Template bài đăng theo Google Sheet Fanpage

> **Nguồn:** Google Sheet "FANPAGE LAPTOP THỊNH VƯỢNG"
> https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc
> Đọc ngày **2026-09-20**. Sheet gồm ~39 khối bảng: 1 khối audit fanpage + web,
> 1 khối danh mục SKU, 1 khối Q&A inbox, 1 khối kế hoạch tuyến nội dung,
> còn lại là **lịch đăng theo tuần** (từ 10-04 đến nay, đa số đã `ĐÃ AIR`).
>
> File này là **bản dịch cấu trúc của sheet sang repo**: giữ nguyên bộ trường của sheet
> để copy ngược lên được, nhưng ràng buộc lại nội dung theo luật trong `CLAUDE.md`.
>
> ⚠️ Sheet là **format**, không phải **nguồn fact**. Rất nhiều caption cũ trong sheet
> vi phạm luật hiện hành của hệ thống — xem mục 4 trước khi tái sử dụng bất kỳ câu nào.

---

## 1. Bộ trường của 1 bài (đúng thứ tự dòng trong sheet)

Mỗi tuần trong sheet là 1 block. Cột = thứ trong tuần. Mỗi bài là 1 ô dọc theo 9 dòng:

| # | Dòng trong sheet | Nội dung | Bắt buộc |
|---|---|---|---|
| 1 | `DATE & TIME` | Thứ + ngày (`28-04`) | ✅ |
| 2 | `STT` | `POST 12` — số thứ tự bài trong tháng | ✅ |
| 3 | `ĐỊNH DẠNG` | Dạng sản xuất: `post` · `Video` · `Reels` · `Bộ ảnh` · `Caption` · `Bài viết website + share fb` | ✅ |
| 4 | `TUYẾN ND` | Tuyến nội dung — xem mục 2 | ✅ |
| 5 | `TITLE` | Tên bài để nội bộ gọi nhau (không phải dòng đầu caption) | ✅ |
| 6 | `CONTENT` | Caption đầy đủ, sẵn sàng copy lên fanpage | ✅ |
| 7 | `BRIEF ẢNH` | Brief cho thiết kế: tỉ lệ · số lượng · text trên ảnh · logo | ✅ |
| 8 | `LINK ẢNH` | Link Drive bộ ảnh / mã kịch bản (`KB20`) | điền khi có |
| 9 | `FORMAT` | Kênh đẩy: `Post caption` · `Post ads` · `Post TV` | ✅ |
| 10 | `STATUS` | `CHỜ FEEDBACK` → `ĐÃ AIR` | ✅ |

> Sheet không có cột nào cho persona / journey / objective / pillar. **Ta bổ sung 4 trường này
> ở bản local** (mục 5) và để lại trong `TITLE` khi đẩy lên sheet, vì 7 gate bắt buộc phải khai.

---

## 2. Tuyến nội dung trong sheet ↔ Pillar của hệ thống

Sheet dùng 6 tuyến. Đây là bảng quy đổi sang `CP01–CP10` (`04_content/strategy/content-pillars.md`):

| Tuyến ND (sheet) | Tần suất trong sheet | Quy đổi sang pillar |
|---|---|---|
| Sản phẩm | 120 bài | CP05 (Đánh giá sản phẩm) hoặc CP10 (Hàng & ưu đãi) |
| Trust thương hiệu | 85 bài | CP07 (Hậu trường) hoặc CP06 (Chuyện khách hàng) |
| CTKM | 45 bài | CP10 (Hàng & ưu đãi) |
| Tương tác | 40 bài | CP01 (Tư vấn mua) |
| Giáo dục | 38 bài | CP02 (Kiến thức), CP04 (Quy trình kiểm tra), CP08 (Sai lầm khi mua) |
| Trust SP / Review SP | 9 bài | CP04 (Quy trình kiểm tra) hoặc CP05 (Đánh giá sản phẩm) |

Tỉ trọng sheet đề ra (khối "SỐ LƯỢNG NỘI DUNG TRIỂN KHAI", 30 bài/tháng):

| Nhóm | Tỉ trọng | Số bài/tháng |
|---|---|---|
| Nội dung giới thiệu sản phẩm (likenew + mới) | 30% | 11 |
| Nội dung chứng minh chất lượng | 20% | 6 |
| Nội dung xây dựng uy tín | 20% | 6 |
| Nội dung tương tác | 10% | 3 |
| Nội dung giáo dục | 10% | 3 |
| Nội dung khác (CTKM, giải trí) | 10% | 1 |

Kịch bản/tháng: 10 post thường · 10 video thường · 5 post quảng cáo · 5 video quảng cáo.

---

## 3. Chuẩn nội dung sheet đã chốt (giữ nguyên)

### 3.1 Cấu trúc post chuẩn
1. **Tiêu đề (dòng mở caption)** — ngắn, có câu hỏi / số liệu / từ gây tò mò. Chèn từ khoá tự nhiên
   ("laptop Dell cũ Hà Nội"). 1–2 emoji, không hơn.
2. **Nội dung chính**
   - Mở đầu: nêu đúng vấn đề khách đang gặp.
   - Giải pháp: giới thiệu máy / dịch vụ.
   - Lợi ích: 3–5 điểm.
   - CTA: đúng **1** hành động.
3. **Cam kết chất lượng** — chỉ được viết theo `01_company/facts/policies.md`, xem mục 4.1.
4. **Chân post** — hotline · website · địa chỉ.
5. **Hashtag** — 3–5 tag, trộn phổ biến + niche.

### 3.2 Cấu trúc bài giới thiệu sản phẩm (sheet gọi là "post SP")
`Tiêu đề` → `A. Hook` → `B. Thông tin sản phẩm` → `C. Điểm mạnh` → `D. Hình ảnh`
→ `F. Giá & khuyến mãi` → `G. CTA` → `Chân post` → `Hashtag`.

- Máy mới: nhấn công nghệ, độ mới, khuyến mãi.
- Máy likenew: nhấn giá, chất lượng đã kiểm, bảo hành — **đúng số của từng máy**.

### 3.3 Cấu trúc bài review (video)
`Hook 3 giây` → `A. Giới thiệu` → `B. Đánh giá chi tiết (thiết kế · tính năng · hiệu suất · đáng tiền không)`
→ `C. Trải nghiệm thực tế` → `D. Kết luận: ai nên mua / ai không nên` → `E. CTA`.

> Mục D **bắt buộc có "ai không nên mua"**. Đây là điểm sheet làm đúng và hợp `tone-of-voice.md`.

### 3.4 Chuẩn ảnh
- Tỉ lệ: **1:1** (newsfeed) hoặc **4:5** (mobile). Tránh 16:9.
- Tối thiểu 1080×1080px, dung lượng < 1MB.
- 1 sản phẩm chính chiếm ~60% khung. Không quá 3 dòng chữ trên ảnh. Nền trung tính.
- Bắt buộc: logo Thịnh Vượng · **ảnh máy thật, không ảnh stock**.
- Bộ ảnh sản phẩm: 5–8 ảnh, có cả góc tổng thể và close-up (vết xước, bàn phím, màn hình).
- ❌ Ảnh mờ · nhồi chữ · không ghi rõ tình trạng máy · thiếu logo · từ phóng đại.

### 3.5 Giờ đăng
- Sáng 9:00–11:00 · Trưa 12:00–13:30 · Chiều 16:00–18:00 · Tối 20:00–22:00 (cao điểm).
- Cuối tuần: 10:00–12:00 hoặc 15:00–17:00.
- Tránh 14:00–16:00 ngày thường.

### 3.6 Nhận định hiệu quả đã ghi trong sheet
- Video tiếp cận tốt hơn post.
- Video quay tại cửa hàng + tuyến review sản phẩm tiếp cận tốt nhất.
- Post đang tiếp cận kém, chưa ổn định → cần đầu tư hook và 3 giây đầu.

---

## 4. ⛔ Những câu trong sheet KHÔNG được copy lại

Caption cũ trong sheet được viết trước khi có hệ thống fact. Dưới đây là các câu xuất hiện
nhiều lần và **vi phạm luật hiện hành**. Gate 1 (Fact), Gate 3 (Brand), Gate 4 (Claim) sẽ chặn.

### 4.1 Bảo hành
| Câu trong sheet | Vì sao sai | Viết đúng |
|---|---|---|
| "Bảo hành 12–24 tháng" (chuẩn post, trang SP) | Máy cũ là **6 tháng** main/màn/phím, pin **3 tháng** | Đọc `warranty_tag` của đúng máy đó trong `02_products/catalog/catalog-<ngày>.csv` |
| "Bảo hành từ 6 – 12 tháng" | Gộp 2 loại máy làm một | Máy cũ 6 tháng · máy mới 12 tháng, viết riêng |
| "Tại sao chúng tôi bảo hành lên đến 18 tháng?" | Không có fact nào cho 18 tháng | Bỏ hẳn |
| "Bảo hành toàn quốc" | Chưa xác minh | `UNVERIFIED.md` |

### 4.2 Claim bị cấm trong `01_company/brand/brand.md`
- ❌ "chính hãng" cho máy cũ → ✅ "nguyên zin", "likenew"
- ❌ "Giúp bạn sở hữu laptop xịn **giá tốt nhất**" · "Cam kết giá rẻ nhất thị trường" → bỏ
- ❌ "GIẢM GIÁ SỐC" · "Giảm sốc đến 50%" · "ưu đãi cực shock" → bỏ
- ❌ "Hàng nguyên zin nhập khẩu Mỹ **100%**" → chỉ viết những gì product facts xác nhận
- ❌ Nêu tên đối thủ (luật #9)

### 4.3 Chưa xác minh — không được hứa (`UNVERIFIED.md`)
- ❌ "Hỗ trợ trả góp 0% qua thẻ tín dụng Visa, Master, JCB" — #2 chưa xác minh
- ❌ "Miễn phí ship hàng toàn quốc" / "Giao hàng miễn phí toàn quốc" — #3 chưa xác minh
- ❌ "Tặng ngay bộ quà tặng trị giá đến 1,5 triệu" / "balo + chuột 500.000₫" — #9 chưa xác minh
- ❌ "Lỗi 1 đổi 1 trong vòng 15 ngày" — chính sách thật là **đổi trong 15 ngày, trả lại khấu trừ 10%**
- ❌ "Test 15 tiêu chí trước khi bán" — #7, #12 chưa xác minh, chưa có quy trình ký
- ❌ "Hỗ trợ kỹ thuật trọn đời 24/7" — chưa có fact, hotline kỹ thuật chỉ 8h–17h30

### 4.4 Tồn kho & khan hiếm (luật #12)
- ❌ "CHỈ CÒN 5 MÁY – ĐẶT NGAY KẺO HẾT" · "SỐ LƯỢNG CÓ HẠN" · "Chỉ còn 2 sản phẩm trong kho"
  · "5 người đang xem sản phẩm này" · "Về là cháy"
- Chỉ được viết số lượng khi máy có `stock_tracked=yes` và `qty>0` trong catalog CSV.
  93% catalog **không** bật quản lý kho.

### 4.5 Phân khúc đã đóng (luật #16)
- ❌ "Chỉ từ 3 triệu" · "DELL LATITUDE 7480 giá chỉ 4,5 triệu" · "Top laptop dưới 5 triệu"
- Máy rẻ nhất được viết bài: **6.880.000đ** (Latitude 7400 vân carbon).
- Tư vấn inbox/comment cho khách hỏi máy 4 triệu thì vẫn làm bình thường.

### 4.6 Tên thương hiệu
- ❌ "LAPTOP TV" (xuất hiện trong caption 30/4) → ✅ **Laptop Thịnh Vượng**. TV = Thịnh Vượng.

### 4.7 Số điện thoại
- Sheet dùng "0928.939.666 - 0945.998.855" ở mọi chân post.
- ✅ CTA mua hàng → **0928939666** (8h–20h30)
- ✅ CTA bảo hành / sau bán → **0825998855** (8h–17h30)
- ⚠️ 0945998855 chưa rõ chức năng → hạn chế dùng.

### 4.8 Chân post chuẩn (bản đã sửa, dùng bản này)
```
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội
```

---

## 5. Template điền 1 bài (bản local — dùng cái này khi viết)

~~~markdown
### POST <số> — <ngày, thứ>

| Trường | Giá trị |
|---|---|
| DATE & TIME | 21-09 (Thứ 2) · giờ đăng: 20:00 |
| STT | POST 01 |
| ĐỊNH DẠNG | post / Video / Reels / Bộ ảnh |
| TUYẾN ND | Sản phẩm |
| FORMAT | Post caption |
| STATUS | CHỜ FEEDBACK |
| **Persona** | P2 — Nhân viên văn phòng |
| **Journey** | J3 — Đang so sánh |
| **Objective** | O4 — Cân nhắc mua |
| **Pillar** | CP05 — Đánh giá sản phẩm |
| **Product** | PRD-xxx (`02_products/products.md`) |
| **CTA** | (đúng 1) |

**TITLE (nội bộ):**
<tên bài> · P2 (Nhân viên văn phòng) · J3 (Đang so sánh) · O4 (Cân nhắc mua) · CP05 (Đánh giá sản phẩm)

**CONTENT:**
```
<caption đầy đủ, sẵn sàng copy — theo cấu trúc mục 3.1 hoặc 3.2, chân post mục 4.8>
```

**Hook thay thế (A/B):**
- A: ...
- B: ...
- C: ...

**BRIEF ẢNH:**
- Tỉ lệ: 1:1 · Số lượng: N
- Nội dung ảnh: ...
- Text trên ảnh (tối đa 3 dòng): ...
- Logo: Thịnh Vượng, góc trái trên

**LINK ẢNH:** <để trống cho thiết kế điền>

**First comment:** <link sản phẩm / thông tin phụ>

**Hashtag:** #laptopthinhvuong #... (3–5 tag)

**Fact table:**
| Claim trong bài | Nguồn |
|---|---|
| 12.980.000đ | products.md#PRD-xxx (verified <ngày>) |
| Bảo hành 6 tháng main/màn/phím | policies.md |

**Gates:** G0 ⬜ · G1 ⬜ · G2 ⬜ · G3 ⬜ · G4 ⬜ · G5 ⬜ · G6 ⬜
~~~

---

## 6. Quan hệ với Content Package

Sheet **không thay thế** Content Package 12 thành phần (`04_content/content-package.md`).

| Thành phần Content Package | Chỗ tương ứng trên sheet |
|---|---|
| 1 Strategy | ❌ sheet không có → nhét vào `TITLE` |
| 2 Hook | nằm trong `CONTENT` (dòng đầu) — bản A/B không có chỗ trên sheet |
| 3 Script | `LINK ẢNH` trỏ tới doc kịch bản (`KB20`) |
| 4 Caption | `CONTENT` |
| 5 Visual direction | `BRIEF ẢNH` |
| 6 Thumbnail | `BRIEF ẢNH` |
| 7 CTA | trong `CONTENT` |
| 8 Hashtags | cuối `CONTENT` |
| 9 First comment | ❌ sheet không có |
| 10 Sales follow-up | ❌ sheet không có (có khối Q&A inbox riêng) |
| 11 Measurement plan | ❌ sheet không có (chỉ có cột `Chỉ số` bỏ trống) |
| 12 Fact table | ❌ sheet không có |

**Kết luận:** bản đầy đủ sống ở `04_content/drafts/`. Sheet chỉ nhận **phần đăng được**
(`ĐỊNH DẠNG` · `TUYẾN ND` · `TITLE` · `CONTENT` · `BRIEF ẢNH` · `FORMAT` · `STATUS`).

---

## 7. Checklist trước khi đẩy lên Google Sheet

- [ ] Bài đã qua đủ **7 gate** (`10_gates/README.md`), Gate 6 có người ký
- [ ] Không có câu nào trong danh sách mục 4
- [ ] Chân post dùng bản mục 4.8
- [ ] Giá trong bài khớp catalog CSV trong vòng **7 ngày** (luật #10)
- [ ] Cấu hình lấy theo **tên sản phẩm**, không theo tag (luật #13)
- [ ] Bảo hành đọc theo `warranty_tag` của đúng máy (luật #14)
- [ ] `TITLE` có ghi đủ mã + tên tiếng Việt của P / J / O / CP
- [ ] `STATUS` để `CHỜ FEEDBACK`, chỉ người phụ trách đổi thành `ĐÃ AIR` sau khi đăng
