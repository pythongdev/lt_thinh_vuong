---
id: FB-CH2-03
product: PRD — Latitude 7390 2in1 16GB · Latitude 7420 vỏ carbon · Latitude 5310 2in1
persona: P1 — Sinh viên / mua máy đầu tiên
journey: J3 — Đang so sánh máy / shop
objective: O4 — Cân nhắc mua
pillar: CP01 — Tư vấn mua
format: post
risk: medium
status: draft
created: 2026-09-21
scheduled: 2026-09-30 20:30
gates: { g0: ⚠️, g1: ✅, g2: ⬜, g3: ✅, g4: ✅, g5: ✅, g6: ⬜ }
---

# Bài 3 — "Chưa tới 10 triệu thì mua được máy như thế nào?"

> ⚠️ **Gate 0 mang ghi chú lệch** — xem mục 1. ⬜ **Gate 2 chưa chạy được**: danh sách 36 máy
> hết hạn 2026-09-27, bài đăng 30/09 → **phải chạy `python3 tools/collection_fetch.py`** rồi
> đối chiếu lại giá · kho · `warranty_tag` cả 3 máy trước khi đăng.

## 1. Strategy

**Trục:** P1 (Sinh viên / mua máy đầu tiên) · J3 (Đang so sánh) · O4 (Cân nhắc mua)
· CP01 (Tư vấn mua) · format post. Khớp đúng ma trận chuẩn `content-matrix.md`
(P1 × J3 = CP01 · O4), và O4 (Cân nhắc mua) × Post ảnh = ✅.

**Vì sao viết bài này.** Cả chương 1 xây quanh con số 13 triệu. Nhưng tầng **7–10 triệu** trong
danh sách máy có tồn kho xác thực đang có **8 máy / 33 chiếc** và **chưa một bài nào nhắc tới**.
Mỗi bạn sinh viên có 9 triệu đọc chương 1 đều tự hiểu là "ở đây không có gì cho mình" — trong khi
thực tế có, và không hề nghèo.

**Luận điểm trung tâm, và nó là fact kiểm được:** trong 8 máy tầng dưới 10 triệu của shop,
**6 máy vẫn có RAM 16GB**, và 2 máy có ổ 512GB. Nghĩa là thứ chương 1 dạy khách coi trọng
(RAM nhiều hơn là thứ đáng nhìn hơn con chip) **không biến mất khi hạ 3 triệu ngân sách** —
cái mất là đời chip và dung lượng ổ. Bài nói thẳng cả hai chiều.

**Vì sao bài này quan trọng hơn vẻ ngoài của nó.** Nó mở rộng phễu xuống một tầng ngân sách mới
mà không cần thêm hàng, không cần thêm fact mới, và không mâu thuẫn với bất kỳ bài nào của chương 1.

### ⚠️ Gate 0 — ghi chú lệch, cần người dùng chốt

`personas.md` chốt **P1 (Sinh viên / mua máy đầu tiên) = 10–15 triệu**, và tự ghi chú ở dòng 12–13:
*"nhóm máy 6,88–9,88 triệu hiện không nằm trong ngân sách persona nào."*
Trong khi `36-MAY-DUOC-VIET.md` (mới hơn — 2026-09-20) gán tầng **7–10 triệu cho P1**.

Bài này viết theo **file mới hơn**. Đề xuất sửa `personas.md` thành **P1 = 8–15 triệu**.
Chưa sửa thì bài vẫn đăng được, nhưng Gate 0 của nó ghi ⚠️ chứ không ✅.

**Không liên quan tới luật #16** (phân khúc dưới 5 triệu đã đóng): máy rẻ nhất trong bài này là
**8.290.000đ**, còn máy rẻ nhất được viết theo luật #20 là 7.690.000đ. Không vướng.

## 2. Hook

**Chính:** "Chưa tới 10 triệu. Nhiều bạn nghĩ tầm này là phải chấp nhận RAM 8GB."

**A (ngân sách trực tiếp):** "9 triệu mua laptop đi học thì được máy như thế nào? Mình mở bảng hàng ra cho bạn xem."

**B (phản định kiến):** "Hạ ngân sách từ 13 xuống 9 triệu, thứ bạn mất không phải là RAM."

**C (nói thẳng điểm yếu trước):** "Dưới 10 triệu thì vẫn có máy 16GB RAM. Chỗ bạn phải nhường là đời chip — mình nói trước."

## 3. Script
*(không áp dụng — format post)*

## 4. Caption

```
Chưa tới 10 triệu. Nhiều bạn nghĩ tầm này là phải chấp nhận RAM 8GB và ổ cứng bé.

Mình mở đúng bảng hàng đang có ra cho bạn xem, kèm chỗ dở của từng máy.

Nói thẳng trước một điều, kẻo đọc hết bài lại thấy bên mình giấu: hạ ngân sách từ 13 triệu xuống dưới 10 triệu, thứ bạn phải nhường là ĐỜI CHIP và DUNG LƯỢNG Ổ CỨNG. Thứ bạn giữ được là RAM.

Ba chiếc đáng cân nhắc ở tầm này:

🔹 Dell Latitude 7390 2in1 — 8.290.000đ
i5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ
Ít tiền nhất trong ba chiếc mà vẫn đủ 16GB RAM.
Điểm yếu: đời chip cũ nhất trong ba chiếc, và ổ 256GB.

🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ
i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD
Đời chip mới nhất trong ba chiếc, và màn 14 inch rộng hơn.
Điểm yếu: chiếc này KHÔNG có màn cảm ứng và không xoay gập được. Ổ vẫn 256GB.

🔹 Dell Latitude 5310 2in1 — 9.880.000đ
i5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ
Ổ cứng lớn nhất trong ba chiếc — gấp đôi hai chiếc kia.
Điểm yếu: đắt nhất trong ba chiếc, và màn 13,3 inch chật hơn 14 inch khi xếp hai cửa sổ cạnh nhau.

Đọc ba chiếc trên theo cách này thì dễ chọn hơn:

• Muốn tiết kiệm nhất mà vẫn 16GB → chiếc 8.290.000đ
• Muốn đời chip mới nhất và màn rộng nhất → chiếc 9.380.000đ
• Muốn ổ cứng lớn, đỡ phải dọn file → chiếc 9.880.000đ

Cả ba đều là máy đã qua sử dụng, thuộc dòng doanh nhân của Dell. Bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows — miễn phí trọn đời.

Một câu thật nữa: ở tầm dưới 10 triệu, đừng nhắm máy trạm màn 15,6 inch có card đồ hoạ rời. Nhóm đó ở tầm tiền cao hơn, và nó cũng không làm ra để mang lên giảng đường mỗi ngày.

👉 Comment ngân sách chính xác của bạn + ngành đang học, mình gợi ý chiếc nào trong ba chiếc này.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong
```

## 5. Visual direction

Tỉ lệ 1:1 · **3 ảnh**, 1080×1080px, dưới 1MB mỗi ảnh. Ảnh máy thật chụp tại shop, **không ảnh stock**.

Mỗi máy một ảnh, mở nắp, nền trung tính thống nhất cả bộ, máy chiếm khoảng 60% khung.
Thứ tự ảnh đúng thứ tự trong caption (8.29 → 9.38 → 9.88 triệu).

Text trên mỗi ảnh, tối đa 3 dòng:
- Ảnh 1: `LATITUDE 7390 2IN1` / `16GB RAM · 256GB · 13,3 inch` / `Ít tiền nhất mà vẫn 16GB`
- Ảnh 2: `LATITUDE 7420 VỎ CARBON` / `16GB RAM · 256GB · 14 inch` / `Đời chip mới nhất`
- Ảnh 3: `LATITUDE 5310 2IN1` / `16GB RAM · 512GB · 13,3 inch` / `Ổ cứng lớn nhất`

Logo Thịnh Vượng góc trái trên mọi ảnh.

⚠️ **Ảnh chiếc 7420 vỏ carbon không được chụp ở thế gập xoay hay cảm ứng** — tên sản phẩm của máy
này không ghi cảm ứng (xem mục 12). Chụp đúng thế mở nắp thường.

⛔ **Không ghi giá lên ảnh** — giá chỉ nằm trong caption.
⛔ Không ghi "còn X máy", "sắp hết", "số lượng có hạn", "giảm giá", "ưu đãi".

## 6. Thumbnail
*(không áp dụng — format post)*

## 7. CTA

**Đúng 1 CTA — bình luận:**
"Comment ngân sách chính xác của bạn + ngành đang học, mình gợi ý chiếc nào trong ba chiếc này."

Hợp O4 (Cân nhắc mua): lấy đủ thông tin để tư vấn chọn giữa ba máy đã nêu.
⛔ Không thêm CTA inbox hay CTA gọi — một bài một CTA (luật #5).

## 8. Hashtags

`#laptopsinhvien` · `#laptopcu` · `#delllatitude` · `#laptopduoi10trieu` · `#laptopthinhvuong`

## 9. First comment

```
📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)

Link ba chiếc trong bài:

• Dell Latitude 7390 2in1 i5-8250U | 16GB | 256GB — 8.290.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7390-2in1-ca-m-u-ng-core-i5-8250u-16gb-256gb-man-hinh-13-3-inch-xoay-ga-p-360

• Dell Latitude 7420 [Vỏ Carbon] i5-1145G7 | 16GB | 256GB — 9.380.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7420-core-i5-1145g7-16gb-256gb-14-0-inch-fhd

• Dell Latitude 5310 2in1 i5-10210U | 16GB | 512GB — 9.880.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5310-2in1-cam-ung-core-i5-10210u-16gb-512gb-man-hinh-13-3-inch-fhd-cam-ung
```

## 10. Sales follow-up — 5 câu hay gặp

| Câu khách hay hỏi | Trả lời (chỉ dùng fact đã xác minh) |
|---|---|
| "Ba chiếc này còn hàng không?" | "Bạn gọi 0928939666 để bên mình kiểm và giữ máy giúp bạn nhé." ⛔ **Không tự khẳng định còn hay hết trong comment** — kho phải xác minh trong ngày (luật #12, và danh sách 36 máy chụp ngày 2026-09-20) |
| "256GB có đủ không?" | "Tuỳ bạn lưu gì. Bên mình có bài riêng so đúng chuyện này — chiếc 512GB và chiếc 256GB cùng dòng chênh nhau khoảng 700 nghìn. Bạn cho mình biết ngành học thì mình nói cụ thể." *(dẫn sang Bài 4 đăng 01/10)* |
| "Có nâng thêm RAM được không?" | "Chỗ này bên mình chưa kiểm khe RAM từng máy nên chưa dám hứa. Bạn gọi 0825998855 hỏi kỹ thuật, họ mở máy xem rồi trả lời chắc chắn hơn." ⛔ **Không hứa nâng cấp được** (chương 1 mục 0.6 đã cắt tiêu chí này) |
| "i5 đời 8 giờ còn dùng được không?" | "Với Word, Excel, PowerPoint và học online thì dòng doanh nhân này làm ra để chạy cả ngày trong công ty. Nhưng bên mình chưa đo hiệu năng nên không đưa con số. Bạn ghé 71 Thiên Hiền mở đúng file bạn hay dùng lên thử là chắc nhất." ⛔ Không đưa số liệu hiệu năng |
| "Chiếc 9.380.000đ có cảm ứng không? Thấy dòng 7420 có bản cảm ứng mà." | "Chiếc này thì không — mình ghi rõ trong bài. Dòng 7420 có nhiều bản khác nhau, bên mình còn bản cảm ứng ở tầm giá khác. Bạn gọi 0928939666 để bên mình chỉ đúng bản bạn cần." ✅ Đây là câu **rất dễ gặp**, và trả lời đúng là điểm tin cậy |

## 11. Measurement plan

**Objective là O4 (Cân nhắc mua)** → chỉ số chính là **bình luận có ý định mua**, không phải reach.

- **Chỉ số chính:** số bình luận **nêu ngân sách cụ thể hoặc chỉ tên một trong ba máy**.
  Đây là tín hiệu khách đã bước vào J3 (Đang so sánh) thật.
- **Chỉ số phụ:** số lượt nhấn vào link trong bình luận đầu · số inbox trong 72h · lượt lưu bài.
- **Ngưỡng coi là thắng:** bài tạo ra **nhiều bình luận nêu ngân sách hơn** so với bài
  "13 triệu nên lấy dòng máy nào" của chương 1 (POST 08, đăng 25/09) — hai bài cùng dạng, cùng
  persona, khác tầng giá, nên so được trực tiếp.
- **Đo sau:** 24h · 72h · 7 ngày.
- **Điều cần học, và đây là câu hỏi đáng giá nhất của cả tuần:** **tầng 7–10 triệu có tồn tại nhu cầu
  thật không?** Nếu bài này ăn hơn bài 13 triệu → mở tuyến riêng cho tầng dưới 10 triệu và sửa
  ngân sách P1 trong `personas.md`. Nếu kém rõ rệt → kết luận ngân sách thật của P1 đúng là từ
  10 triệu, và tầng 7–10 triệu chỉ dùng để tư vấn inbox. Ghi vào
  `07_analytics/learned-patterns.md` ở mức `low` (một bài thì luôn `low`).

## 12. Fact table

| Claim trong bài | Nguồn |
|---|---|
| Dell Latitude 7390 2in1 · i5-8250U · 16GB · 256GB · 13,3 inch cảm ứng, xoay gập 360 độ · **8.290.000đ** | `02_products/36-may-duoc-viet-2026-09-20.csv` id 44712862 (verified 2026-09-20, **check lại ngày đăng**). Cấu hình đọc từ **tên sản phẩm** (luật #13) |
| Dell Latitude 7420 [Vỏ Carbon] · i5-1145G7 · 16GB · 256GB · 14 inch FHD · **9.380.000đ** | `02_products/36-may-duoc-viet-2026-09-20.csv` id 50452813 (verified 2026-09-20, **check lại ngày đăng**) |
| Dell Latitude 5310 2in1 · i5-10210U · 16GB · 512GB · 13,3 inch FHD cảm ứng, xoay gập 360 độ · **9.880.000đ** | `02_products/36-may-duoc-viet-2026-09-20.csv` id 44712848 (verified 2026-09-20, **check lại ngày đăng**) |
| Cả ba là máy đã qua sử dụng, dòng doanh nhân của Dell | Tên sản phẩm: "Laptop cũ" (7390, 5310) và "[Like New]" (7420 carbon). Latitude là dòng doanh nhân — `02_products/products.md` § dòng Latitude |
| Bảo hành 6 tháng bo mạch – màn hình – bàn phím | `warranty_tag` = "6 Tháng" ở cả 3 máy trong CSV (luật #14, đọc theo từng máy) + `01_company/facts/policies.md` § phạm vi bảo hành |
| Pin bảo hành 3 tháng | `01_company/facts/policies.md` § Bảo hành — chính sách chung |
| 15 ngày đổi sang máy khác miễn phí | `01_company/facts/policies.md` § Đổi trả |
| Vệ sinh, tra keo tản nhiệt, cài Windows miễn phí trọn đời | `01_company/facts/policies.md` § Dịch vụ miễn phí kèm theo (trọn đời) |
| "6 trong 8 máy tầng dưới 10 triệu vẫn có RAM 16GB" *(dùng ở mục Strategy, KHÔNG đưa vào caption)* | `02_products/36-MAY-DUOC-VIET.md` § bảng tầng 7–10 triệu: 8 máy, chỉ 2 máy 8GB (7.690.000đ và 8.970.000đ) |
| "Máy trạm màn 15,6 inch có card đồ hoạ rời ở tầm tiền cao hơn" | `02_products/36-may-duoc-viet-2026-09-20.csv`: Precision 7550 từ **15.180.000đ**, Precision 5550 **17.680.000đ** — đều trên 15 triệu. Viết ở mức "tầm tiền cao hơn", **không nêu tên máy** |
| Địa chỉ · 0928939666 (8h–20h30) · 0825998855 (8h–17h30) | `01_company/facts/company-facts.md` (verified 2026-09-09) |

### ⚠️ Bốn bẫy dữ liệu đã xử lý trong bài này

| # | Bẫy | Đã xử lý thế nào |
|---|---|---|
| 1 | **Latitude 7390 — tag CPU ghi i5-8350U, tên ghi i5-8250U** (một trong 6 máy có tag lệch tên, `36-MAY-DUOC-VIET.md`) | Caption viết **i5-8250U** theo tên sản phẩm (luật #13) |
| 2 | 🆕 **Latitude 7390 bản 16GB — tên sản phẩm KHÔNG có chữ "FHD"**, chỉ ghi `13.3 inch Cảm ứng`. Tag thì ghi "13 inch FHD Cảm ứng". Bảng trong `36-MAY-DUOC-VIET.md` ghi "13.3" FHD cảm ứng" — tức **đã lấy FHD từ tag**, trái luật #13 | Caption viết **"màn 13,3 inch cảm ứng"**, **bỏ chữ FHD**. 👉 Nên sửa lại dòng này trong `36-MAY-DUOC-VIET.md`, và thêm máy này vào danh sách tag lệch tên |
| 3 | **Latitude 7420 vỏ carbon — tên ghi `14.0 inch FHD`, KHÔNG có "2in1", KHÔNG có "Cảm ứng"**, nhưng tag phân khúc ghi "Xoay gập" | Caption **nói thẳng máy này không cảm ứng, không xoay gập** và biến nó thành điểm yếu được công bố. Brief ảnh cấm chụp máy ở thế gập xoay |
| 4 | **Latitude 7420 vỏ carbon — GPU không có trong tên sản phẩm** (tag ghi Iris Xe) | **Không viết GPU** cho máy này. Sinh viên không cần thông số đó |

### ⛔ Những gì bài này CỐ Ý không viết

| Không viết | Vì sao |
|---|---|
| "nguyên zin chưa qua sửa chữa" | 7390 và 5310 là phân khúc **`Cũ`**; câu cam kết đó trên web chỉ gắn với nhóm **Likenew** (`UNVERIFIED.md` #24 — đang chặn 9/36 máy) |
| Số lượng máy còn lại | Luật #12. Cả 3 máy có `stock_tracked=yes` nên **được phép** nói số, nhưng số là ảnh chụp 2026-09-20 và kho chỉ 5 · 5 · 4 chiếc → không viết, chỉ gọi xác nhận |
| Bản 8GB của Latitude 7390 (7.690.000đ) | Tên máy đó **không ghi cảm ứng** trong khi bản 16GB thì có → đang là câu hỏi treo với chủ shop (`36-MAY-DUOC-VIET.md` § việc cần hỏi, câu 2). Tránh hẳn |
| Số liệu hiệu năng, thời lượng pin, cân nặng | Shop chưa đo, chưa cân (`UNVERIFIED.md` #14) |
| "nâng thêm RAM được" | Chưa kiểm khe RAM từng máy (chương 1 mục 0.6) |
| Loại RAM (DDR3 / DDR4) | `UNVERIFIED.md` #23 — 12 máy nền DDR4 bị gắn tag DDR3. Latitude 5300 2in1 nằm trong danh sách đó. Loại RAM không phải điểm bán, viết "RAM 16GB" là đủ |
| Giảm giá / phần trăm tiết kiệm | Chiến dịch **không có chương trình khuyến mãi** tuần này (chương 1). Cả 3 máy có `compare_at > price` nên viết giảm giá không phạm luật #15, nhưng không có chương trình thật thì không được dựng ra |

---

## 13. Khối 10 trường — bàn giao Google Sheet (bước 3)

> Bản gộp cả 5 bài để copy-paste: `05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/2026-09-28-BAN-GIAO-SHEET-tuan-28-09-04-10.md`
> ⛔ **CHƯA ĐĂNG ĐƯỢC** — chạy `python3 tools/collection_fetch.py` rồi đối chiếu lại giá · kho · `warranty_tag` 3 máy. Gọi shop xác nhận sáng hôm đăng.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 30-09 (Thứ 4) · 20:30 |
| **STT** | POST 13 — ⚠️ đánh lại theo số đang chạy trong sheet |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Sản phẩm |
| **TITLE** | Chưa tới 10 triệu được máy gì · P1 (Sinh viên / mua máy đầu tiên) · J3 (Đang so sánh) · O4 (Cân nhắc mua) · CP01 (Tư vấn mua) |
| **CONTENT** | → lấy nguyên khối ``` của **mục 4. Caption** phía trên |
| **BRIEF ẢNH** | → rút từ **mục 5. Visual direction** phía trên |
| **LINK ẢNH** | *(để trống — chưa có bộ ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**First comment** (sheet không có trường này — người đăng tự chép xuống bình luận đầu):
→ lấy từ **mục 9. First comment** phía trên.

⬜ **Gate 6 chưa ai ký** → chưa được đẩy lên sheet (luật #8, #18).
