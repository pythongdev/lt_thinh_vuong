# Bàn giao Google Sheet — Chương 2 (sinh viên chuyên sâu) · 2 tuần 28/09 – 11/10/2026

> **Chiến dịch:** [Sinh viên: những câu chương 1 chưa trả lời](../../INDEX.md) · **Persona:** P1 (Sinh viên / mua máy đầu tiên)
> **Bản viết lại 2026-09-28** theo phản hồi của sếp — thay bản `BAN-GIAO-TUAN-28-09-04-10.md` (2026-09-24).
> **Kế hoạch 2 tuần:** [00-ke-hoach/ke-hoach-2-tuan.md](../../00-ke-hoach/ke-hoach-2-tuan.md)
> **Sheet đích:** https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc

## 🟢 TRẠNG THÁI

| | |
|---|---|
| Gate 0–5 | ✅ chạy lại trên cả 22 nội dung ngày 2026-09-28 · kiểm giọng 4 câu (`ngon-ngu-theo-persona.md` mục 5) |
| **Gate 6 — người ký** | ✅ **người dùng duyệt ("duyệt") trong chat 2026-09-28** — tuần 2 vẫn phải kéo lại giá trước khi đăng |
| Tuần 1 (28/09–04/10) | Giá đối chiếu `36-may-duoc-viet-2026-09-28.csv`, hạn 2026-10-05 — dùng được |
| Tuần 2 (05/10–11/10) | ✅ Giá: người dùng xác nhận 2026-09-28 vẫn đúng. Sáng ngày đăng vẫn gọi 0928939666 |
| Tuyến E, F | `kho-khach-that.md` đang trống → 4 khung E/F đổi sang tuyến B (luật #25). Có ca đã xin phép thì thay theo `01-drafts/2026-09-28-tuyen-E-F-khuon-cho-ca.md` |
| Đã chạm sheet chưa | ❌ chưa — connector chỉ đọc ô. Người phụ trách chạy `day-len-sheet.gs` hoặc nhập CSV |

Sinh lại 3 file máy đọc sau khi sửa file này:
`python3 tools/ban_giao_to_sheet.py 05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/01-bai-dang/BAN-GIAO-2-TUAN-28-09-11-10.md`

---

## 0. Lịch 2 tuần — 22 nội dung, 6 tuyến bài

| # | Ngày | Giờ | Tuyến bài | Dạng | Tên bài | Giá? |
|---|---|---|---|---|---|---|
| 1 | T2 28-09 | 12:15 | A · Tư vấn – kiến thức | Reels | Bố mẹ lo chữ "cũ" | không |
| 2 | T2 28-09 | 20:30 | A · Tư vấn – kiến thức | post | 3 câu bố mẹ hay hỏi | không |
| 3 | T3 29-09 | 12:15 | B · Hình ảnh sản phẩm | Bộ ảnh | Latitude 5310 2in1 | có |
| 4 | T3 29-09 | 20:30 | A · Tư vấn – kiến thức | post | Cỡ màn 13 / 14 / 15,6 inch | không |
| 5 | T4 30-09 | 12:15 | A · Tư vấn – kiến thức | Reels | Cỡ nào nhét vừa balo | không |
| 6 | T4 30-09 | 20:30 | D · Bảo hành – hậu mãi | Reels | Máy dở chứng tuần thi, gọi ai | không |
| 7 | T5 01-10 | 12:15 | C · Review sản phẩm | Reels | Review Latitude 7390 2in1 | caption |
| 8 | T5 01-10 | 20:30 | A · Tư vấn – kiến thức | post | Ví có 9 triệu rưỡi mua được gì | có |
| 9 | T6 02-10 | 12:15 | B · Hình ảnh sản phẩm | Bộ ảnh | Latitude 7420 vỏ carbon | có |
| 10 | T6 02-10 | 20:30 | E → B (kho trống) | Bộ ảnh | Latitude 5300 2in1 hai bản ổ | có |
| 11 | T7 03-10 | 12:15 | F → B (kho trống) | Bộ ảnh | Latitude 7390 2in1 | có |
| 12 | T2 05-10 | 12:15 | A · Tư vấn – kiến thức | Reels | Có đúng 9 triệu rưỡi — 3 máy | có |
| 13 | T2 05-10 | 20:30 | A · Tư vấn – kiến thức | post | 256GB hay 512GB | có |
| 14 | T3 06-10 | 12:15 | B · Hình ảnh sản phẩm | Bộ ảnh | Latitude 9410 2in1 i7 512GB | có |
| 15 | T3 06-10 | 20:30 | A · Tư vấn – kiến thức | post | Latitude 7400 2in1 — 3 điều | có |
| 16 | T4 07-10 | 12:15 | A · Tư vấn – kiến thức | Reels | 700 nghìn đó mua được gì | có |
| 17 | T4 07-10 | 20:30 | D · Bảo hành – hậu mãi | Reels | Cài lại Windows mùa thi | không |
| 18 | T5 08-10 | 12:15 | C · Review sản phẩm | Reels | Review Latitude 7420 vỏ carbon | caption |
| 19 | T5 08-10 | 20:30 | A · Tư vấn – kiến thức | Reels | 20 giây soi điểm chết | caption |
| 20 | T6 09-10 | 12:15 | B · Hình ảnh sản phẩm | Bộ ảnh | Inspiron 7415 2in1 | có |
| 21 | T6 09-10 | 20:30 | E → B (kho trống) | Bộ ảnh | Latitude 7420 vỏ nhôm | có |
| 22 | T7 10-10 | 12:15 | F → B (kho trống) | Bộ ảnh | Latitude 7400 2in1 i5 256GB | có |

| Tuyến | Tuần 1 | Tuần 2 |
|---|---|---|
| A — Tư vấn – kiến thức (10 nội dung cũ, viết lại giọng) | 5 | 5 |
| B — Hình ảnh sản phẩm | 2 (+2 thay E/F) | 2 (+2 thay E/F) |
| C — Review sản phẩm | 1 | 1 |
| D — Bảo hành – hậu mãi | 1 | 1 |
| E — Feedback khách hàng | 0 — kho trống | 0 — kho trống |
| F — Hình ảnh khách tại cửa hàng | 0 — kho trống | 0 — kho trống |
| **Tổng** | **11** | **11** |

CN 04-10 và CN 11-10: trực bình luận và tin nhắn, không đăng mới.
Bốn trục P / J / O / CP, bình luận đầu, kịch bản trả lời inbox chỉ sống ở file này và `01-drafts/`, không lên sheet.
Kịch bản 5 cột của 9 video: [../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md](../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md).

---

## 1 · Thứ 2 28-09 · 12:15 — Reels "Bố mẹ lo chữ cũ"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 28-09 (Thứ 2) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Giáo dục |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | Bố mẹ lo chữ "cũ" |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J1 (Đã thấy shop) |
| **Objective** | O1 (Tiếp cận) |
| **Pillar** | CP08 (Sai lầm khi mua) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Gửi video này cho bố mẹ xem cùng |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Tối gọi về nhà: "Con định mua laptop cũ." Đầu dây bên kia im mất mấy giây.

Bố mẹ không lo cái máy. Bố mẹ lo chữ "cũ". Lo vậy là đúng, nên đừng cãi. Trả lời bằng 3 thứ này:

❓ "Người ta dùng hỏng rồi mới bán?"
Đừng nói bằng miệng. Ra quầy bật máy: mở ảnh trắng kín màn, rồi ảnh đen. Gõ hết một lượt bàn phím. Cắm thử từng cổng. Soi xong mới trả tiền.

❓ "Hỏng thì ai sửa?"
Hỏi người bán 4 câu, bắt trả lời bằng số: bảo hành bao lâu, bảo hành những gì, pin bao lâu, đổi máy trong mấy ngày.
Bên mình: máy cũ và likenew bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

❓ "Sao không mua mới cho chắc?"
Mua mới cũng được, không sai. Cùng số tiền, máy mới thì chip mới hơn, bảo hành dài hơn. Máy doanh nhân đã qua sử dụng thì RAM với ổ cứng nhiều hơn. Shop mình bán máy cũ nên câu này hơi có lợi cho mình — nghe bớt đi một nửa cũng được.

Mười phút đi xem máy cùng nhau đỡ hơn một tiếng cãi nhau qua điện thoại.

👉 Gửi video này cho bố mẹ xem cùng.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #laptopsinhvien #kinhnghiemmualaptop #muamaydautien #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB1 — 6 cảnh, 38 giây.
- Quay dọc 9:16 · 1080×1920 · quầy tư vấn 71 Thiên Hiền · máy quay đặt chân máy.
- Máy: Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB, bật nguồn sẵn, desktop có sẵn 1 file ảnh trắng + 1 file ảnh đen kín màn.
- Đạo cụ: 2 ghế kê cùng phía bàn · 1 tờ A5 in 3 dòng "6 tháng bo mạch · màn hình · bàn phím / Pin 3 tháng / 15 ngày đổi máy" · 1 cáp USB.
- Voice: nhân viên bán hàng đọc, thu riêng sau khi quay. Phụ đề bắt buộc.
- ⛔ Không giá · không tên máy trên hình · không quay mặt người · không cảnh người bán chỉ tay · không câu chê bố mẹ.

---

## 2 · Thứ 2 28-09 · 20:30 — post "3 câu bố mẹ hay hỏi"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 28-09 (Thứ 2) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Giáo dục |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | 3 câu bố mẹ hay hỏi |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J1 (Đã thấy shop) |
| **Objective** | O1 (Tiếp cận) |
| **Pillar** | CP08 (Sai lầm khi mua) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Gửi bài này cho bố mẹ, hoặc lưu lại |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Chọn được máy rồi. Giờ tới phần khó hơn: gọi điện xin bố mẹ.

"Con định mua laptop cũ." Vừa nói xong là nghe ba câu này. Cả ba đều hỏi đúng, nên đừng gạt đi.

❓ "Người ta dùng hỏng rồi mới bán, con mua về làm gì?"

Câu này cãi bằng miệng không được. Đổi sang thứ soi được:
• Bật máy, xem cấu hình thật.
• Mở ảnh trắng kín màn, rồi ảnh đen kín màn — soi màn hình.
• Gõ hết một lượt bàn phím.
• Cắm thử từng cổng.
Làm ngay tại quầy, soi xong thấy ổn mới trả tiền.

❓ "Hỏng thì ai sửa? Mua mới còn có bảo hành, cũ thì ai lo?"

Hỏi người bán đúng 4 câu, bắt họ trả lời bằng số:
• Bảo hành bao lâu?
• Bảo hành những bộ phận nào?
• Pin bảo hành riêng bao lâu?
• Đổi máy trong mấy ngày?

Bên mình trả lời luôn: máy cũ và likenew bảo hành 6 tháng cho bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows thì miễn phí trọn đời.

Chỗ nào trả lời vòng vo 4 câu này mới đáng lo, chứ không phải chữ "cũ".

❓ "Sao không mua mới cho chắc?"

Mua mới cũng được, không sai. Có điều cùng một số tiền:
• Máy mới: chip đời mới hơn, bảo hành dài hơn.
• Máy doanh nhân đã qua sử dụng: thường RAM nhiều hơn, ổ cứng to hơn.
Bạn học gì, ngày nào cũng dùng máy làm gì thì chọn theo cái đó.

Shop mình bán máy cũ nên câu trên hơi có lợi cho mình đấy — bạn với bố mẹ nghe bớt đi một nửa cũng được.

Cách nhanh nhất để bố mẹ yên tâm: đi xem máy cùng nhau. Nhìn thấy cửa hàng, tự tay bật máy, hỏi thẳng người bán. Mười phút ở đó đỡ hơn một tiếng cãi nhau qua điện thoại.

👉 Gửi bài này cho bố mẹ, hoặc lưu lại để hôm gọi về nhà có cái mở ra.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #laptopsinhvien #kinhnghiemmualaptop #muamaydautien #laptopthinhvuong
```

**First comment** *(sheet không có trường này — người đăng tự chép xuống bình luận đầu)*:
```
4 câu hỏi ở cửa hàng nào cũng được, kể cả bên mình — chép lại mang đi:

1. Bảo hành bao lâu?
2. Bảo hành những bộ phận nào?
3. Pin bảo hành riêng bao lâu?
4. Đổi máy trong mấy ngày?

Bên mình: 6 tháng bo mạch – màn hình – bàn phím (máy cũ, likenew) · pin 3 tháng · 15 ngày đổi sang máy khác miễn phí · vệ sinh, tra keo tản nhiệt, cài Windows miễn phí trọn đời.

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội
☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
1 ảnh · 1:1 · 1080×1080px · dưới 1MB · chụp tại quầy tư vấn 71 Thiên Hiền.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Toàn · chéo 45°, ngang tầm mắt người ngồi | Hai ghế trống kê cùng phía bàn, laptop mở nắp giữa bàn, màn đang bật; kệ máy phía sau để mờ | `BỐ MẸ LO CHỮ "CŨ"` / `3 câu hay hỏi` / `và cách trả lời` |

- Chữ đặt ở hai phần ba trên của ảnh. Logo Thịnh Vượng góc trái trên.
- ⛔ Không người trong khung · không giá · không tên máy · không giá dán trên kệ lọt khung · không "ưu đãi", "giảm giá".

---

## 3 · Thứ 3 29-09 · 12:15 — Bộ ảnh Latitude 5310 2in1

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 29-09 (Thứ 3) · 12:15 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 5310 2in1 — 8 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | B — Hình ảnh sản phẩm |
| **Tên bài (nội bộ)** | Bộ ảnh Latitude 5310 2in1 |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Latitude 5310 2in1 i5-10210U · 16GB · 512GB · 13.3" FHD cảm ứng (9.880.000đ · Cũ · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Năm nhất chưa sao. Lên năm ba, tài liệu, ảnh chụp bảng, video thuyết trình nhóm dồn lại — ổ bé là ngồi xoá bớt.

Chiếc này ổ 512GB.

💻 Dell Latitude 5310 2in1
i5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ
Máy cũ, dòng doanh nhân của Dell.
💰 9.880.000đ

Máy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 5310 2in1 · i5-10210U · 16GB · 512GB · 13,3 inch FHD cảm ứng — 9.880.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5310-2in1-cam-ung-core-i5-10210u-16gb-512gb-man-hinh-13-3-inch-fhd-cam-ung

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45°, ngang mặt bàn | Máy mở nắp, màn bật hình nền Windows | `LATITUDE 5310 2IN1` / `RAM 16GB · Ổ 512GB` / `13,3 inch cảm ứng` |
| 2 | Trung · chính diện | Màn bật ảnh trắng kín màn | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Nắp lưng đóng, thấy logo Dell | — |
| 7 | Cận | Vết xước / mòn thật trên máy | `Vết dùng thật của máy này` |
| 8 | Trung · chéo | Màn dựng chữ A trên bàn học có vở, bút | — |

- Máy không có vết xước → bỏ ảnh 7 và xoá dòng "Máy đã qua sử dụng nên có vết dùng…" trong caption.
- ⛔ Không ảnh stock, không ảnh máy khác cùng dòng · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi" · không bút cảm ứng trong khung · không chữ "nguyên zin" (máy Cũ).

---

## 4 · Thứ 3 29-09 · 20:30 — post "Cỡ màn 13 / 14 / 15,6 inch"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 29-09 (Thứ 3) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Giáo dục |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | Cỡ màn 13 / 14 / 15,6 inch |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J2 (Bắt đầu quan tâm laptop cũ) |
| **Objective** | O2 (Hiểu vấn đề) |
| **Pillar** | CP02 (Kiến thức) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Comment ngành học + một tuần mang máy đi mấy buổi |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Bàn gấp trong giảng đường rộng đúng một quyển vở. Bạn đo cái máy định mua chưa?

Màn to hơn không có nghĩa là tốt hơn. Nó chỉ tốn chỗ hơn.

📐 13 – 13,3 INCH
Đặt vừa bàn gấp giảng đường, bỏ vừa balo nhỏ.
Chỗ dở: cùng độ phân giải Full HD thì chữ, bảng biểu nhỏ hơn. Mở hai cửa sổ cạnh nhau — bên này tài liệu, bên kia bài đang gõ — là chật.
Hợp với ai: cả ngày chạy giữa giảng đường với thư viện, chủ yếu gõ bài và đọc.

📐 14 INCH
Cỡ ở giữa, cũng là cỡ hay gặp nhất ở dòng máy doanh nhân.
Vẫn bỏ balo đi học hằng ngày được, mở hai cửa sổ cạnh nhau đỡ chật hơn 13 inch.
Hợp với ai: đa số các bạn — khối kinh tế, làm slide, Excel nhiều sheet.

📐 15,6 INCH
Nhìn bảng biểu, làm slide rộng nhất trong ba cỡ.
Chỗ dở: chiếm gần hết mặt bàn, không phải balo nào cũng bỏ vừa.
Hợp với ai: học ở phòng trọ là chính, một tuần mang máy đi vài buổi.

Tự hỏi mình 2 câu là ra:

1️⃣ Một tuần mang máy ra khỏi phòng mấy buổi?
Nhiều buổi → 13 hoặc 14 inch. Ít buổi → 15,6 inch cũng không sao.

2️⃣ Có hay mở hai cửa sổ cạnh nhau không?
Có → đừng xuống 13 inch. Không → 13 inch gọn hơn hẳn.

Shop mình có cả ba cỡ, nên bài này không lái bạn về cỡ nào. Mua nhầm cỡ là máy nằm ở phòng trọ, không đi học cùng bạn.

Hôm ghé cửa hàng, đeo theo đúng cái balo đang đi học. Cho máy vào, kéo khoá thử. Cái này nhìn ảnh không đoán được.

👉 Comment ngành bạn học + một tuần mang máy đi mấy buổi, mình nói nên nhắm cỡ nào.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #kinhnghiemmualaptop #chonlaptop #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Hai cách tự đo ở phòng trọ, không cần máy:

📏 Đo balo: mở balo, đo chiều rộng lòng trong. Máy 13,3 inch thường cần khoảng 31–32cm, 14 inch khoảng 32–33cm, 15,6 inch khoảng 36–37cm. Mỗi dòng máy một khác, nên hôm ghé cứ cho máy vào balo thử là chắc nhất.

📏 Thử cỡ chữ: mở một file Word có bảng trên máy đang dùng, xếp hai cửa sổ cạnh nhau. Thấy chật thì đừng xuống 13 inch.

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội
☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
1 ảnh · 1:1 · 1080×1080px · dưới 1MB · chụp tại 71 Thiên Hiền · nền trung tính, đủ sáng.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Toàn · từ trên xuống, nghiêng 30° | Ba máy mở nắp xếp cạnh nhau từ nhỏ đến to: Latitude 5310 2in1 (13,3 inch) · Latitude 7400 2in1 i7 (14 inch) · Latitude 9520 2in1 (15,6 inch); một quyển vở A4 đặt sát máy 13,3 inch | `13 · 14 · 15,6 INCH` / `Cỡ nào mang đi học được?` / `Đo bằng cái balo của bạn` |

- Ba máy cùng khung, cùng khoảng cách ống kính, không ghép ảnh. Logo Thịnh Vượng góc trái trên.
- ⛔ Không giá · không tên máy trên ảnh · không cân nặng · không "ưu đãi", "giảm giá", "số lượng có hạn".

---

## 5 · Thứ 4 30-09 · 12:15 — Reels "Cỡ nào nhét vừa balo"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 30-09 (Thứ 4) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Giáo dục |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | Cỡ nào nhét vừa balo |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J2 (Bắt đầu quan tâm laptop cũ) |
| **Objective** | O2 (Hiểu vấn đề) |
| **Pillar** | CP02 (Kiến thức) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Comment ngành học + một tuần mang máy đi mấy buổi |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Bàn gấp giảng đường rộng đúng một quyển vở. Máy bạn định mua có đặt vừa không?

Màn to hơn không có nghĩa là tốt hơn. Nó chỉ tốn chỗ hơn.

📐 13 – 13,3 inch: vừa bàn gấp, vừa balo nhỏ. Mở hai cửa sổ cạnh nhau thì chật.
📐 14 inch: cỡ giữa, vẫn nhét balo đi học được, hai cửa sổ đỡ chật hơn.
📐 15,6 inch: nhìn bảng biểu rộng nhất. Nhưng chiếm gần hết bàn, balo nhỏ không vừa.

Tự hỏi 2 câu: một tuần mang máy ra khỏi phòng mấy buổi, và có hay mở hai cửa sổ cạnh nhau không.

Hôm ghé cửa hàng, đeo theo đúng cái balo đang đi học, nhét máy vào kéo khoá thử.

👉 Comment ngành bạn học + một tuần mang máy đi mấy buổi, mình nói nên nhắm cỡ nào.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #kinhnghiemmualaptop #chonlaptop #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB2 — 6 cảnh, 34 giây.
- Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền · máy quay đặt chân máy, góc từ trên xuống nghiêng 30°.
- Máy: Dell Latitude 5310 2in1 i5-10210U 16GB 512GB (13,3 inch) · Dell Latitude 7400 2in1 i7-8665U 16GB 512GB (14 inch) · Dell Latitude 9520 2in1 i5-1145G7 16GB 256GB (15,6 inch).
- Đạo cụ: 1 quyển vở A4 · 1 balo đi học cỡ thường (loại sinh viên hay đeo, không chọn balo laptop to).
- Voice: nhân viên đọc, thu riêng. Phụ đề bắt buộc.
- ⛔ Không giá · không tên máy trên hình · không nói, không ghi cân nặng.

---

## 6 · Thứ 4 30-09 · 20:30 — Reels "Máy dở chứng tuần thi, gọi ai"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 30-09 (Thứ 4) · 20:30 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust thương hiệu |
| **Tuyến bài (nội bộ)** | D — Bảo hành – hậu mãi |
| **Tên bài (nội bộ)** | Máy dở chứng tuần thi, gọi ai |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O3 (Tin công ty) |
| **Pillar** | CP07 (Hậu trường) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Lưu bài lại, mua máy ở đâu cũng hỏi đúng mấy dòng này |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Máy tự tắt đúng tuần thi. Việc đầu tiên không phải lên nhóm lớp hỏi — mà là biết máy mình còn được bảo hành cái gì.

Máy cũ và likenew bên mình:
✅ 6 tháng cho bo mạch, màn hình, bàn phím
✅ Pin 3 tháng — pin là đồ hao mòn nên ngắn hơn
✅ Trong 15 ngày đổi sang máy khác miễn phí
✅ Vệ sinh máy, tra keo tản nhiệt, cài Windows, cài phần mềm — miễn phí trọn đời

Không bảo hành — nói trước cho rõ:
❌ Vào nước
❌ Rơi vỡ, va đập
❌ Điểm chết trên màn hình
❌ Đã mang đi sửa chỗ khác, hoặc tự sửa trong BIOS
❌ Có lỗi mà không báo trong vòng 30 ngày

Thấy máy lạ là gọi luôn số kỹ thuật: 0825998855 (8h–17h30). Đừng để dồn tới cuối kỳ.

👉 Lưu bài này lại. Mua máy ở đâu cũng hỏi đúng mấy dòng này.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #baohanhlaptop #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB3 — 9 cảnh, 42 giây.
- Quay dọc 9:16 · 1080×1920 · cảnh 1 ở bàn học dựng tại shop, cảnh 2–9 ở quầy 71 Thiên Hiền.
- Máy: bất kỳ máy nào trong danh sách 36 (không lên tên, không lên giá).
- Đạo cụ: tờ A5 in "6 tháng bo mạch · màn hình · bàn phím / Pin 3 tháng" · cốc nước · tua vít · điện thoại mở sẵn màn quay số 0825998855 · vở, bút, dây sạc cho cảnh bàn học.
- Voice: nhân viên kỹ thuật hoặc bán hàng đọc. Phụ đề bắt buộc.
- ⛔ Không đổ nước lên máy · không dùng máy vỡ thật hay đập máy · không dựng điểm chết giả · không gọi cảnh là "quy trình test" · không nói "bảo hành 12 tháng", "1 đổi 1", "hoàn tiền 100%".

---

## 7 · Thứ 5 01-10 · 12:15 — Reels "Review Latitude 7390 2in1"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 01-10 (Thứ 5) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust SP / Review SP |
| **Tuyến bài (nội bộ)** | C — Review sản phẩm |
| **Tên bài (nội bộ)** | Review Latitude 7390 2in1 16GB |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP05 (Đánh giá sản phẩm) |
| **Sản phẩm nêu tên** | Dell Latitude 7390 2in1 i5-8250U · 16GB · 256GB · 13.3" cảm ứng (8.290.000đ · Cũ · BH 6 tháng) |
| **CTA** | Comment ngành học + số tiền đang có |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Chiếc này mình nói chỗ dở trước: chip đời 8. Cùng tiền, máy mới có chip đời mới hơn.

Đổi lại được gì thì xem hết video rồi tự quyết nhé.

💻 Dell Latitude 7390 2in1
i5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ
Máy cũ, dòng doanh nhân của Dell.
💰 8.290.000đ

✅ Hợp với bạn nếu:
• Học khối kinh tế, xã hội — Word, Excel, slide, học online
• Hay mang máy lên giảng đường, thư viện
• Bàn phòng trọ chật, cần dựng máy chữ A xem bài giảng

❌ Không hợp nếu:
• Ngành bạn phải cài phần mềm chuyên ngành nặng
• Bạn cần ổ to để chứa video, phim — máy này ổ 256GB
• Bạn cần màn to để mở hai cửa sổ cạnh nhau cả ngày

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

⚠️ Bên mình có hai bản 7390 2in1: bản 8GB và bản 16GB. Video này là bản 16GB.

👉 Comment ngành bạn học + số tiền đang có, mình nói chiếc này hợp với bạn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #reviewlaptop #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 7390 2in1 · i5-8250U · 16GB · 256GB · 13,3 inch cảm ứng — 8.290.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7390-2in1-ca-m-u-ng-core-i5-8250u-16gb-256gb-man-hinh-13-3-inch-xoay-ga-p-360

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB4 — 12 cảnh, 56 giây.
- Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền.
- Máy: Dell Latitude 7390 2in1 i5-8250U · **16GB** · 256GB — không lấy nhầm bản 8GB.
- Đạo cụ: bàn học dựng chật (~50cm, vở, bút, dây sạc) · 1 quyển vở A4 · tờ A5 bảo hành · 1 cáp sạc, 1 USB · desktop có sẵn file ảnh trắng, ảnh đen, 1 bài giảng video, 1 file Word, 5–6 tab trình duyệt.
- Voice: nhân viên bán hàng đọc. Phụ đề bắt buộc.
- ⛔ Không giá trên hình, không đọc giá · không chữ "FHD" (tên máy không có) · không "nguyên zin" · không "bản lề chắc", "cảm ứng nhạy", "pin cả ngày", "mượt" · không bút cảm ứng.

---

## 8 · Thứ 5 01-10 · 20:30 — post "Ví có 9 triệu rưỡi mua được gì"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 01-10 (Thứ 5) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | Ví có 9 triệu rưỡi mua được gì |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP01 (Tư vấn mua) |
| **Sản phẩm nêu tên** | Latitude 7390 2in1 16GB (8.290.000đ) · Latitude 7420 vỏ carbon (9.380.000đ) · Latitude 5310 2in1 (9.880.000đ) |
| **CTA** | Comment số tiền đang có + ngành học |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Ví có đúng 9 triệu rưỡi — tiền làm thêm cả hè cộng bố mẹ gửi thêm. Mua được gì?

Nói trước chỗ thiệt: dưới 10 triệu thì chip đời cũ hơn, ổ cứng bé hơn. Còn RAM vẫn giữ được 16GB — học Meet, mở Word, chục tab tài liệu cùng lúc.

Ba chiếc bên mình đang bán ở tầm này, kèm chỗ dở của từng chiếc:

🔹 Dell Latitude 7390 2in1 — 8.290.000đ
i5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ
Ít tiền nhất trong ba chiếc.
Chỗ dở: chip đời cũ nhất trong ba chiếc, ổ 256GB.

🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ
i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD
Chip đời mới nhất, màn 14 inch rộng nhất trong ba chiếc.
Chỗ dở: KHÔNG cảm ứng, không xoay gập. Ổ vẫn 256GB.

🔹 Dell Latitude 5310 2in1 — 9.880.000đ
i5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ
Ổ to nhất, gấp đôi hai chiếc kia.
Chỗ dở: đắt nhất trong ba chiếc, màn 13,3 inch mở hai cửa sổ cạnh nhau hơi chật.

Chọn nhanh:
• Muốn giữ lại nhiều tiền nhất → chiếc 8.290.000đ
• Muốn chip mới, màn rộng → chiếc 9.380.000đ
• Lười dọn file → chiếc 9.880.000đ

Cả ba là máy đã qua sử dụng, dòng doanh nhân của Dell. Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh, tra keo tản nhiệt, cài Windows miễn phí trọn đời.

Nói thêm: dưới 10 triệu thì đừng nhắm máy 15,6 inch có card đồ hoạ rời. Nhóm đó ở tầm tiền cao hơn, và cũng không làm ra để mang lên giảng đường mỗi ngày.

👉 Comment số tiền đang có + ngành học, mình gợi ý chiếc nào trong ba chiếc.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Link ba chiếc trong bài:

• Dell Latitude 7390 2in1 · i5-8250U · 16GB · 256GB — 8.290.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7390-2in1-ca-m-u-ng-core-i5-8250u-16gb-256gb-man-hinh-13-3-inch-xoay-ga-p-360

• Dell Latitude 7420 [vỏ carbon] · i5-1145G7 · 16GB · 256GB — 9.380.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7420-core-i5-1145g7-16gb-256gb-14-0-inch-fhd

• Dell Latitude 5310 2in1 · i5-10210U · 16GB · 512GB — 9.880.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5310-2in1-cam-ung-core-i5-10210u-16gb-512gb-man-hinh-13-3-inch-fhd-cam-ung

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
3 ảnh · 1:1 · 1080×1080px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · cùng một nền trung tính cho cả bộ · máy chiếm khoảng 60% khung · logo Thịnh Vượng góc trái trên mọi ảnh.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45° | Latitude 7390 2in1 16GB mở nắp, màn bật | `LATITUDE 7390 2IN1` / `RAM 16GB · Ổ 256GB · 13,3 inch` / `Ít tiền nhất trong 3 máy` |
| 2 | Trung · chéo 45° | Latitude 7420 vỏ carbon mở nắp thường, màn bật | `LATITUDE 7420 VỎ CARBON` / `RAM 16GB · Ổ 256GB · 14 inch` / `Chip đời mới nhất trong 3 máy` |
| 3 | Trung · chéo 45° | Latitude 5310 2in1 mở nắp, màn bật | `LATITUDE 5310 2IN1` / `RAM 16GB · Ổ 512GB · 13,3 inch` / `Ổ to nhất trong 3 máy` |

- Thứ tự ảnh đúng thứ tự trong caption.
- ⛔ Ảnh 2 không chụp thế xoay gập, không tay chạm màn (tên máy không có cảm ứng) · không giá trên ảnh · không "còn X máy", "sắp hết", "giảm giá", "ưu đãi".

---

## 9 · Thứ 6 02-10 · 12:15 — Bộ ảnh Latitude 7420 vỏ carbon

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 02-10 (Thứ 6) · 12:15 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7420 vỏ carbon — 7 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | B — Hình ảnh sản phẩm |
| **Tên bài (nội bộ)** | Bộ ảnh Latitude 7420 vỏ carbon |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Latitude 7420 [vỏ carbon] i5-1145G7 · 16GB · 256GB · 14" FHD — bản thường, không 2in1 (9.380.000đ · Likenew · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Bên trái tài liệu, bên phải bài đang gõ. Màn 14 inch mở hai cửa sổ cạnh nhau đỡ chật hơn 13 inch.

💻 Dell Latitude 7420 [vỏ carbon]
i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD
Máy likenew, dòng doanh nhân của Dell.
💰 9.380.000đ

Nói rõ: chiếc này KHÔNG cảm ứng, không xoay gập. Bên mình có bản 7420 2in1 vỏ carbon riêng, giá khác — nhắn tin ghi đúng tên để khỏi nhầm.

Máy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 7420 [vỏ carbon] · i5-1145G7 · 16GB · 256GB · 14 inch FHD — 9.380.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7420-core-i5-1145g7-16gb-256gb-14-0-inch-fhd

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 7 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45°, ngang mặt bàn | Máy mở nắp, màn bật hình nền Windows | `LATITUDE 7420 VỎ CARBON` / `RAM 16GB · Ổ 256GB` / `14 inch · không cảm ứng` |
| 2 | Trung · chính diện | Màn mở hai cửa sổ cạnh nhau: PDF bên trái, Word bên phải | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Nắp lưng đóng, thấy vân carbon và logo Dell | — |
| 7 | Cận | Vết xước / mòn thật trên máy | `Vết dùng thật của máy này` |

- Máy không có vết xước → bỏ ảnh 7 và xoá dòng "Máy đã qua sử dụng nên có vết dùng…" trong caption.
- ⛔ Không chụp thế xoay gập, không tay chạm màn · không lấy nhầm bản 7420 2in1 vỏ carbon (10.980.000đ) · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi" · không ảnh stock.

---

## 10 · Thứ 6 02-10 · 20:30 — Bộ ảnh Latitude 5300 2in1 hai bản ổ

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 02-10 (Thứ 6) · 20:30 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 5300 2in1 (bản 256GB + bản 512GB) — 8 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | Khung E — Feedback khách hàng → `kho-khach-that.md` trống → đổi sang B — Hình ảnh sản phẩm (luật #25) |
| **Tên bài (nội bộ)** | Bộ ảnh Latitude 5300 2in1 hai bản ổ |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Latitude 5300 2in1 i7-8665U · 16GB · 256GB (8.980.000đ) và · 512GB (9.690.000đ) · 13.3" FHD cảm ứng · Cũ · BH 6 tháng |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Hai chiếc giống hệt nhau. Cùng chip i7, cùng 16GB RAM. Khác đúng cái ổ.

💻 Dell Latitude 5300 2in1
i7-8665U · RAM 16GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ
Máy cũ, dòng doanh nhân của Dell.
💰 Bản ổ 256GB: 8.980.000đ
💰 Bản ổ 512GB: 9.690.000đ

Tài liệu để hết trên Drive → bản 256GB là đủ.
Hay quay dựng video bài nhóm, tải phim về xem → nghĩ tới bản 512GB.

Bên mình chưa kiểm khe cắm ổ từng máy, nên không hứa sau này nâng ổ lên được.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 5300 2in1 · i7-8665U · 16GB · 13,3 inch FHD cảm ứng
• Bản 256GB — 8.980.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-256gb-13-3-inch-fhd-cam-ung
• Bản 512GB — 9.690.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-512gb-13-3-inch-fhd-cam-ung

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · dán giấy nhớ "256" / "512" dưới đáy từng máy để khỏi lẫn khi chụp (không lọt khung).

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chính diện | Hai máy mở nắp đặt sát nhau cùng khung, màn bật | `LATITUDE 5300 2IN1` / `256GB — 512GB` / `Cùng máy · khác ổ` |
| 2 | Trung · chính diện | Bản 256GB: màn bật ảnh trắng kín màn | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad bản 256GB | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Hai nắp lưng đóng đặt cạnh nhau, thấy logo Dell | — |
| 7 | Cận | Vết xước / mòn thật — mỗi máy 1 ảnh nếu có (7a · 7b) | `Vết dùng thật của máy này` |
| 8 | Trung · chéo | Bản 512GB dựng chữ A trên bàn học có vở, bút | — |

- Máy nào không có vết xước → bỏ ảnh 7 của máy đó.
- ⛔ Không chụp cửa sổ dung lượng ổ còn trống · không hứa nâng ổ · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi" · không chữ "nguyên zin" (máy Cũ) · không bút cảm ứng.

---

## 11 · Thứ 7 03-10 · 12:15 — Bộ ảnh Latitude 7390 2in1

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 03-10 (Thứ 7) · 12:15 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7390 2in1 16GB — 8 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | Khung F — Hình ảnh khách tại cửa hàng → `kho-khach-that.md` trống → đổi sang B — Hình ảnh sản phẩm (luật #25) |
| **Tên bài (nội bộ)** | Bộ ảnh Latitude 7390 2in1 16GB |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Latitude 7390 2in1 i5-8250U · 16GB · 256GB · 13.3" cảm ứng (8.290.000đ · Cũ · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Hôm thứ 5 mình review chiếc này bằng video. Hôm nay là ảnh thật, đủ góc — kể cả chỗ trầy.

💻 Dell Latitude 7390 2in1
i5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ
Máy cũ, dòng doanh nhân của Dell.
💰 8.290.000đ

Bên mình có 2 bản 7390 2in1. Chiếc trong ảnh là bản 16GB RAM — nhắn tin nhớ ghi "16GB" để khỏi nhầm.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 7390 2in1 · i5-8250U · 16GB · 256GB · 13,3 inch cảm ứng — 8.290.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7390-2in1-ca-m-u-ng-core-i5-8250u-16gb-256gb-man-hinh-13-3-inch-xoay-ga-p-360

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc đã quay video thứ 5.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45°, ngang mặt bàn | Máy mở nắp, màn bật hình nền Windows | `LATITUDE 7390 2IN1` / `RAM 16GB · Ổ 256GB` / `13,3 inch cảm ứng` |
| 2 | Trung · chính diện | Màn bật ảnh trắng kín màn | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Nắp lưng đóng, thấy logo Dell | — |
| 7 | Cận | Vết xước / mòn thật trên máy | `Vết dùng thật của máy này` |
| 8 | Trung · chéo | Màn gập phẳng 360° đặt trên bàn học | — |

- Máy không có vết xước → bỏ ảnh 7 và đổi câu mở caption thành "Hôm nay là ảnh thật, đủ góc."
- ⛔ Không chữ "FHD" (tên máy không có) · không lấy nhầm bản 8GB · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi" · không "nguyên zin" (máy Cũ) · không bút cảm ứng.

---

## 12 · Thứ 2 05-10 · 12:15 — Reels "Có đúng 9 triệu rưỡi"

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 05-10 (Thứ 2) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | Có đúng 9 triệu rưỡi — 3 máy |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP01 (Tư vấn mua) |
| **Sản phẩm nêu tên** | Latitude 7390 2in1 16GB (8.290.000đ) · Latitude 7420 vỏ carbon (9.380.000đ) · Latitude 5310 2in1 (9.880.000đ) |
| **CTA** | Comment số tiền đang có + ngành học |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Ví có đúng 9 triệu rưỡi. Nhiều bạn nghĩ tầm này là phải chịu RAM 8GB.

Thiệt chỗ nào nói trước: chip đời cũ hơn, ổ bé hơn. Còn RAM vẫn 16GB.

🔹 Dell Latitude 7390 2in1 — 8.290.000đ
i5-8250U · RAM 16GB · ổ 256GB · 13,3 inch cảm ứng, xoay gập
Chỗ dở: chip đời cũ nhất trong ba chiếc, ổ 256GB.

🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ
i5-1145G7 · RAM 16GB · ổ 256GB · 14 inch FHD
Chỗ dở: KHÔNG cảm ứng, không xoay gập.

🔹 Dell Latitude 5310 2in1 — 9.880.000đ
i5-10210U · RAM 16GB · ổ 512GB · 13,3 inch FHD cảm ứng, xoay gập
Chỗ dở: đắt nhất trong ba chiếc.

Cả ba là máy đã qua sử dụng. Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Comment số tiền đang có + ngành học, mình gợi ý chiếc nào.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB5 — 6 cảnh, 37 giây. Video so sánh (loại D) — giá được hiện thành chữ trên màn.
- Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền · ba máy cùng một mặt bàn.
- Máy: Latitude 7390 2in1 i5-8250U 16GB 256GB · Latitude 7420 vỏ carbon i5-1145G7 16GB 256GB (bản thường) · Latitude 5310 2in1 i5-10210U 16GB 512GB.
- Sáng ngày quay: gọi 0928939666 xác minh 3 giá + máy còn hay hết. Không đăng lại video sau hạn dùng ghi ở dòng tiêu đề.
- Voice: nhân viên bán hàng đọc, không đọc giá. Phụ đề bắt buộc.
- ⛔ Không xoay gập / chạm màn chiếc 7420 · không "còn hàng", "giá tốt nhất" · không ghép ảnh máy trên mạng.

---

## 13 · Thứ 2 05-10 · 20:30 — post "256GB hay 512GB"

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 05-10 (Thứ 2) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | 256GB hay 512GB |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP03 (So sánh) |
| **Sản phẩm nêu tên** | Latitude 5300 2in1 i7 (256GB · 512GB) · Latitude 9410 2in1 i7-10610U (256GB · 512GB) |
| **CTA** | Comment ngành học, mình nói nên lấy bản nào |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
700 nghìn là mấy tuần tiền ăn đấy. Bỏ ra để ổ to gấp đôi thì có đáng không?

Cùng một chiếc máy, cùng chip, cùng 16GB RAM — bản ổ 512GB đắt hơn bản 256GB khoảng 700 nghìn. Hai cặp đang bán bên mình:

🔹 Dell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập
Bản ổ 256GB: 8.980.000đ
Bản ổ 512GB: 9.690.000đ
→ chênh 710.000đ

🔹 Dell Latitude 9410 2in1 — i7-10610U · 16GB · màn 14 inch FHD
Bản ổ 256GB: 12.980.000đ
Bản ổ 512GB: 13.680.000đ
→ chênh 700.000đ

Hai tầm tiền cách nhau 4 triệu mà cùng chênh khoảng 700 nghìn.

Nói trường hợp không đáng trước nhé.

❌ 256GB LÀ ĐỦ, ĐỪNG THÊM TIỀN NẾU:
• Tài liệu để trên Google Drive, OneDrive — máy chỉ giữ bài đang làm.
• Học khối kinh tế, văn phòng — chủ yếu Word, Excel, PowerPoint, học online.
• Ảnh, video để trong điện thoại, không đổ vào máy.
• Có sẵn ổ cứng rời, hoặc định mua một cái sau.

✅ NÊN THÊM 700 NGHÌN NẾU:
• Ngành phải cài phần mềm chuyên ngành nặng — kỹ thuật, kiến trúc, thiết kế, dựng phim.
• Hay quay dựng video, kể cả video thuyết trình nhóm.
• Hay tải phim, tải khoá học về xem offline.
• Biết tính mình lười dọn file, nhìn thanh dung lượng đỏ là khó chịu.

Ổ chật không làm hỏng máy. Nó làm bạn mệt: cài thêm một thứ là phải xoá một thứ.

Đừng nghĩ "thêm 700 nghìn được thêm 256GB". Nghĩ xem 700 nghìn đó, nếu không dồn vào ổ, mua được gì cho việc học. Mỗi người một đáp án.

Bên mình chưa kiểm khe cắm ổ từng máy, nên không hứa sau này nâng ổ lên được. Ổ chọn hôm nay là ổ bạn dùng luôn.

Cả bốn máy là máy đã qua sử dụng. Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Comment ngành bạn học, mình nói nên lấy bản 256GB hay 512GB.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Link bốn máy trong bài, xếp theo cặp:

LATITUDE 5300 2IN1 — i7-8665U · 16GB · 13,3 inch FHD cảm ứng
• Bản 256GB — 8.980.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-256gb-13-3-inch-fhd-cam-ung
• Bản 512GB — 9.690.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-512gb-13-3-inch-fhd-cam-ung

LATITUDE 9410 2IN1 — i7-10610U · 16GB · 14 inch FHD
• Bản 256GB — 12.980.000đ
https://laptoptv.vn/dell-latitude-9410-2in1-core-i7-10610u-16gb-256gb-man-hinh-14-inch-fhd
• Bản 512GB — 13.680.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-9410-2in1-core-i7-10610u-16gb-512gb-14-inch-fhd

Tự kiểm trước khi quyết: mở This PC trên máy đang dùng, xem ổ C đang chiếm bao nhiêu.
```

**BRIEF ẢNH:**
2 ảnh · 1:1 · 1080×1080px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · cùng một nền trung tính · logo Thịnh Vượng góc trái trên.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chính diện | Hai chiếc Latitude 5300 2in1 (256GB, 512GB) mở nắp đặt sát nhau cùng khung | `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 710.000đ` |
| 2 | Trung · chính diện, cùng bố cục ảnh 1 | Hai chiếc Latitude 9410 2in1 i7 (256GB, 512GB) mở nắp đặt sát nhau | `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 700.000đ` |

- Không xếp được hai máy cùng dòng cạnh nhau → chụp một máy, ghép cạnh ảnh chụp cửa sổ Properties của ổ C bản 256GB và bản 512GB.
- ⛔ Ảnh 2 không tay chạm màn, không thế xoay gập (tên 9410 không có cảm ứng) · không ghi số dung lượng còn trống · không giá trên ảnh · không "còn X máy", "giảm giá", "ưu đãi".

---

## 14 · Thứ 3 06-10 · 12:15 — Bộ ảnh Latitude 9410 2in1 i7 512GB

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 06-10 (Thứ 3) · 12:15 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 9410 2in1 i7 512GB — 7 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | B — Hình ảnh sản phẩm |
| **Tên bài (nội bộ)** | Bộ ảnh Latitude 9410 2in1 i7 512GB |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Latitude 9410 2in1 i7-10610U · 16GB · 512GB · 14" FHD (13.680.000đ · Likenew · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
File bài tập nặng, ảnh chụp mô hình, video thuyết trình — ổ bé là tuần nào cũng phải ngồi dọn.

💻 Dell Latitude 9410 2in1
i7-10610U · RAM 16GB · ổ 512GB · màn 14 inch FHD
Máy likenew, dòng doanh nhân của Dell.
💰 13.680.000đ

Bên mình có 3 bản 9410 2in1 (i5 256GB · i7 256GB · i7 512GB). Chiếc trong ảnh là bản i7 512GB — nhắn tin nhớ ghi đủ để khỏi nhầm giá.

Tên máy trên web không ghi cảm ứng, nên mình không hứa cảm ứng và bộ ảnh này không chụp chạm màn.

Máy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 9410 2in1 · i7-10610U · 16GB · 512GB · 14 inch FHD — 13.680.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-9410-2in1-core-i7-10610u-16gb-512gb-14-inch-fhd

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 7 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45°, ngang mặt bàn | Máy mở nắp, màn bật hình nền Windows | `LATITUDE 9410 2IN1` / `i7 · RAM 16GB · Ổ 512GB` / `14 inch` |
| 2 | Trung · chính diện | Màn bật ảnh trắng kín màn | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Nắp lưng đóng, thấy logo Dell | — |
| 7 | Cận | Vết xước / mòn thật trên máy | `Vết dùng thật của máy này` |

- Máy không có vết xước → bỏ ảnh 7 và xoá dòng "Máy đã qua sử dụng nên có vết dùng…" trong caption.
- ⛔ Không chụp thế xoay gập, không tay chạm màn · không lấy nhầm bản i5 hay bản i7 256GB · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi" · không ảnh stock.

---

## 15 · Thứ 3 06-10 · 20:30 — post "Latitude 7400 2in1 — 3 điều"

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 06-10 (Thứ 3) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Trust SP / Review SP |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | Latitude 7400 2in1 — 3 điều nên biết |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J4 (Đã inbox / gọi / ghé shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP05 (Đánh giá sản phẩm) |
| **Sản phẩm nêu tên** | Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB · 14" FHD cảm ứng (10.680.000đ · Likenew · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Tối trước hôm đi xem máy, lưu bài này lại. Ba điều về chiếc Latitude 7400 2in1 — có một chỗ dở và một thứ bảo hành không lo.

DELL LATITUDE 7400 2IN1
i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ
Máy likenew, dòng doanh nhân của Dell.
Giá 10.680.000đ

1️⃣ CHỖ DỞ: ĐỜI CHIP

Chip chiếc này đời cũ hơn mấy máy xoay gập khác bên mình ở tầm 11–15 triệu. Đổi lại, ở tầm 10 triệu bạn có RAM 16GB với ổ 512GB.

Ngành phải chạy phần mềm nặng, hoặc muốn chip đời mới nhất trong tầm tiền → chiếc này không phải chiếc của bạn.

Còn ngày nào cũng Word, Excel, slide, học online, mở chục tab → RAM với ổ là thứ bạn đụng tới hằng ngày, đời chip thì ít hơn.

2️⃣ XOAY GẬP: CÓ NGƯỜI CẦN, CÓ NGƯỜI KHÔNG

Màn lật hẳn 360 độ ra sau. Ba lúc dùng tới:
• Ngồi giảng đường, gập phẳng đặt lên đùi đọc tài liệu, lật trang bằng ngón tay.
• Bàn thư viện, quán cà phê chật — dựng chữ A xem bài giảng, họp nhóm online.
• Bảng Excel to — zoom bằng hai ngón như điện thoại.

Chỉ gõ bài, chưa bao giờ thấy thiếu cảm ứng? Thì đừng chọn máy này vì xoay gập. Chọn vì RAM và ổ.

Hay ghi chú, vẽ sơ đồ thì ra ngồi thử. Máy không kèm bút, bạn dùng ngón tay.

3️⃣ ĐIỂM CHẾT MÀN HÌNH: KHÔNG BẢO HÀNH

Bảo hành bên mình: bo mạch, màn hình, bàn phím 6 tháng. Pin 3 tháng.
Nhưng điểm chết trên màn thì không nằm trong bảo hành.

Nên soi ngay tại quầy, trước khi trả tiền. Mất 20 giây:
• Mở ảnh trắng kín màn, rồi ảnh đen kín màn. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.
• Xoay màn chậm hết 360 độ, nghe có tiếng lạ không. Thả tay giữa chừng xem màn có tự trôi xuống không.
• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem chỗ nào không ăn.

Soi ở cửa hàng nào cũng được, bên mình cũng vậy. Cứ soi kỹ, không ai giục. Về nhà đổi ý thì còn 15 ngày đổi sang máy khác miễn phí.

ĐI KÈM MÁY
• Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng.
• 15 ngày đổi sang máy khác miễn phí.
• Vệ sinh máy, tra keo tản nhiệt, cài Windows, cài phần mềm — miễn phí trọn đời.
• Giao hàng toàn quốc 3–5 ngày làm việc, nhận máy được kiểm tra.

⚠️ Bên mình có 3 bản 7400 2in1. Chiếc này là bản i7 · 16GB · 512GB.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 7400 2in1 · i7-8665U · 16GB · 512GB · 14 inch FHD cảm ứng — 10.680.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7400-2in1-cam-ung-core-i7-8665u-ram-16gb-ssd-512gb-intel-uhd-graphic-14inch-cam-ung

Ba thứ soi tại quầy, chép lại mang đi:
1. Ảnh trắng kín màn → rồi ảnh đen kín màn. Soi điểm chết, vệt sọc, chỗ ám màu.
2. Xoay màn chậm hết 360 độ, nghe tiếng. Thả tay giữa chừng xem màn có tự trôi.
3. Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn.

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
5 ảnh · 1:1 · 1080×1080px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · logo Thịnh Vượng góc trái trên mọi ảnh · không ảnh stock, không ảnh của hãng.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45° | Máy mở nắp, thấy rõ tình trạng vỏ | `DELL LATITUDE 7400 2IN1` / `RAM 16GB · Ổ 512GB · 14 inch` / `Bảo hành 6 tháng` |
| 2 | Trung · từ trên xuống | Máy gập phẳng 360° đặt trên đùi hoặc mặt bàn, màn mở một file PDF | `Gập phẳng đọc tài liệu` |
| 3 | Trung · chéo | Máy dựng chữ A trên mặt bàn hẹp | `Bàn chật vẫn dùng được` |
| 4 | Trung · chính diện | Màn bật ảnh đen kín màn, phòng đủ sáng để thấy máy đang bật | `Điểm chết KHÔNG được bảo hành` / `Soi tại quầy, 20 giây` |
| 5 | Cận · từ trên xuống | Bàn phím | — |

- Máy có vết xước → thêm ảnh 6 cận vết xước, chữ `Vết dùng thật của máy này`.
- ⛔ Không bút cảm ứng trong khung · không giá trên ảnh · không "còn X máy", "sắp hết", "giảm giá", "ưu đãi".

---

## 16 · Thứ 4 07-10 · 12:15 — Reels "700 nghìn đó mua được gì"

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 07-10 (Thứ 4) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | 700 nghìn đó mua được gì |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP03 (So sánh) |
| **Sản phẩm nêu tên** | Latitude 5300 2in1 i7 bản 256GB (8.980.000đ) · bản 512GB (9.690.000đ) |
| **CTA** | Comment ngành học, mình nói nên lấy bản nào |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Hai chiếc trong video giống hệt nhau. Cùng chip, cùng 16GB RAM. Khác đúng cái ổ.

Dell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập
Bản ổ 256GB: 8.980.000đ
Bản ổ 512GB: 9.690.000đ
→ chênh 710.000đ

❌ ĐỪNG THÊM TIỀN NẾU
• Tài liệu để trên Drive, máy chỉ giữ bài đang làm.
• Học khối kinh tế, văn phòng — Word, Excel, slide, học online.
• Ảnh, video để trong điện thoại.

✅ NÊN THÊM NẾU
• Ngành phải cài phần mềm nặng.
• Hay dựng video bài nhóm.
• Hay tải phim, khoá học về xem offline.

700 nghìn là mấy tuần tiền ăn. Nếu không dồn vào ổ, nó mua được gì cho việc học?

Bên mình chưa kiểm khe cắm ổ từng máy, nên không hứa sau này nâng ổ lên được.

👉 Comment ngành bạn học, mình nói nên lấy bản 256GB hay 512GB.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB6 — 6 cảnh, 35 giây. Video so sánh hai máy (loại D) — giá được hiện thành chữ trên màn.
- Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền · máy quay đặt chân máy, không đổi góc suốt video.
- Máy: hai chiếc Dell Latitude 5300 2in1 i7-8665U 16GB — bản 256GB và bản 512GB.
- Đạo cụ: mẩu giấy trắng viết tay "700.000đ" · desktop bản 256GB mở sẵn thư mục Google Drive, bản 512GB mở sẵn thư mục video.
- Sáng ngày quay: gọi 0928939666 xác minh cả 2 giá. Không đăng lại video sau hạn dùng ghi ở dòng tiêu đề.
- ⛔ Không hứa nâng ổ · không "còn hàng" · không nói bản 512GB đáng mua hơn.

---

## 17 · Thứ 4 07-10 · 20:30 — Reels "Cài lại Windows mùa thi"

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 07-10 (Thứ 4) · 20:30 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust thương hiệu |
| **Tuyến bài (nội bộ)** | D — Bảo hành – hậu mãi |
| **Tên bài (nội bộ)** | Cài lại Windows mùa thi |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J6 (Quay lại (nâng cấp, mua thêm, bảo hành)) |
| **Objective** | O3 (Tin công ty) |
| **Pillar** | CP07 (Hậu trường) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Lưu bài lại để lúc cần có số gọi |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Đêm trước hạn nộp bài, Windows báo lỗi, máy không vào được. Chuyện này không hiếm đâu.

Máy mua ở bên mình thì ba việc này miễn phí trọn đời:
🔧 Cài lại Windows, cài phần mềm
🔧 Vệ sinh máy
🔧 Tra keo tản nhiệt

Cần thì gọi số kỹ thuật trước: 0825998855 (8h–17h30).

Nói rõ để khỏi hiểu nhầm: đây là dịch vụ kèm theo máy, không phải bảo hành. Bảo hành máy cũ và likenew vẫn là 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng.

👉 Lưu bài này lại để lúc cần có số gọi.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #caiwin #vesinhlaptop #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB7 — 8 cảnh, 36 giây.
- Quay dọc 9:16 · 1080×1920 · tại bàn kỹ thuật 71 Thiên Hiền.
- Máy: một máy trong danh sách 36 đang chờ vệ sinh (không lên tên, không lên giá).
- Đạo cụ: tua vít · chổi quét bụi · tuýp keo tản nhiệt · USB cài Windows · điện thoại mở sẵn màn quay số 0825998855.
- Người làm: kỹ thuật viên thật, chỉ quay tay. Voice: kỹ thuật viên hoặc nhân viên bán hàng đọc.
- ⛔ Không nói máy sẽ mát hơn, nhanh hơn sau khi vệ sinh · không nói thời gian làm xong · không gọi là "quy trình test" · không hứa "sửa miễn phí", "bảo hành lỗi phần mềm".

---

## 18 · Thứ 5 08-10 · 12:15 — Reels "Review Latitude 7420 vỏ carbon"

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 08-10 (Thứ 5) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust SP / Review SP |
| **Tuyến bài (nội bộ)** | C — Review sản phẩm |
| **Tên bài (nội bộ)** | Review Latitude 7420 vỏ carbon |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP05 (Đánh giá sản phẩm) |
| **Sản phẩm nêu tên** | Dell Latitude 7420 [vỏ carbon] i5-1145G7 · 16GB · 256GB · 14" FHD — bản thường (9.380.000đ · Likenew · BH 6 tháng) |
| **CTA** | Comment ngành học + số tiền đang có |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Chiếc này nói trước: không cảm ứng, không xoay gập. Ai cần ghi chú bằng tay trên màn thì lướt qua được rồi.

Còn lại thì xem nó có gì.

💻 Dell Latitude 7420 [vỏ carbon]
i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD
Máy likenew, dòng doanh nhân của Dell.
💰 9.380.000đ

✅ Hợp với bạn nếu:
• Muốn chip đời 11 mà ví dưới 10 triệu
• Hay mở hai cửa sổ cạnh nhau — tài liệu một bên, bài gõ một bên
• Học văn phòng, kinh tế, không cần cảm ứng

❌ Không hợp nếu:
• Cần viết, vẽ, ghi chú trên màn
• Cần ổ to — máy này ổ 256GB

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

⚠️ Bên mình có cả bản 7420 2in1 vỏ carbon, giá khác. Video này là bản thường, không 2in1.

👉 Comment ngành bạn học + số tiền đang có, mình nói chiếc này hợp với bạn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #reviewlaptop #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 7420 [vỏ carbon] · i5-1145G7 · 16GB · 256GB · 14 inch FHD — 9.380.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7420-core-i5-1145g7-16gb-256gb-14-0-inch-fhd

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB8 — 12 cảnh, 55 giây.
- Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền.
- Máy: Dell Latitude 7420 [vỏ carbon] i5-1145G7 · 16GB · 256GB — bản thường, không lấy nhầm bản 2in1 (10.980.000đ).
- Đạo cụ: 1 quyển vở A4 · tờ A5 bảo hành · 1 cáp sạc, 1 USB · desktop có sẵn 1 file PDF, 1 file Word, file ảnh trắng, ảnh đen.
- Voice: nhân viên bán hàng đọc. Phụ đề bắt buộc.
- ⛔ Không giá trên hình, không đọc giá · ngón tay không chạm màn, không xoay màn quá 180° · không "mượt", "pin cả ngày", "nhẹ".

---

## 19 · Thứ 5 08-10 · 20:30 — Reels "20 giây soi điểm chết"

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 08-10 (Thứ 5) · 20:30 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust SP / Review SP |
| **Tuyến bài (nội bộ)** | A — Tư vấn – kiến thức |
| **Tên bài (nội bộ)** | 20 giây soi điểm chết |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J4 (Đã inbox / gọi / ghé shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP05 (Đánh giá sản phẩm) |
| **Sản phẩm nêu tên** | Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB (10.680.000đ) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Màn hình có bảo hành. Nhưng điểm chết trên màn thì không — chính sách bên mình ghi rõ.

Nên trước khi trả tiền, tự soi. Mất 20 giây:

Mở một ảnh trắng kín màn. Rồi một ảnh đen kín màn. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.

Máy xoay gập thì soi thêm hai thứ:
• Xoay màn chậm hết 360 độ, nghe có tiếng lạ không. Thả tay giữa chừng — màn phải đứng yên.
• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem chỗ nào không ăn.

Chiếc trong video: Dell Latitude 7400 2in1 — 10.680.000đ
i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ. Máy likenew, dòng doanh nhân của Dell.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

Soi ở cửa hàng nào cũng được, bên mình cũng vậy. Cứ soi kỹ, không ai giục.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB9 — 6 cảnh, 36 giây.
- Quay dọc 9:16 · 1080×1920 · quầy 71 Thiên Hiền · tắt bớt đèn trần, quay màn chính diện để tránh vân moiré.
- Máy: Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB · desktop có sẵn file ảnh trắng, ảnh đen.
- Voice: nhân viên bán hàng đọc. Phụ đề bắt buộc.
- ⛔ Không giá trên hình (video không phải loại so sánh) · không dựng máy có điểm chết · không chèn ảnh điểm chết trên mạng · không "còn hàng" · không hứa bảo hành điểm chết. Màn sạch thì nói rõ "màn này sạch".

---

## 20 · Thứ 6 09-10 · 12:15 — Bộ ảnh Inspiron 7415 2in1

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 09-10 (Thứ 6) · 12:15 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Inspiron 7415 2in1 — 8 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | B — Hình ảnh sản phẩm |
| **Tên bài (nội bộ)** | Bộ ảnh Inspiron 7415 2in1 |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Inspiron 7415 2in1 Ryzen 7-5700U · 16GB · 512GB · 14" FHD cảm ứng (11.280.000đ · Likenew · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Làm slide thuyết trình nhóm, bốn đứa chụm đầu vào một cái màn. Gập ngược màn ra sau, cả nhóm cùng xem.

💻 Dell Inspiron 7415 2in1
Ryzen 7-5700U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ
Máy likenew.
💰 11.280.000đ

Máy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #dellinspiron #laptop2in1 #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Inspiron 7415 2in1 · Ryzen 7-5700U · 16GB · 512GB · 14 inch FHD cảm ứng — 11.280.000đ
https://laptoptv.vn/likenew-dell-inspiron-7415-2in1-ryzen-7-5700u-16gb-512gb-14-inch-fhd-cam-ung

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45°, ngang mặt bàn | Máy mở nắp, màn bật hình nền Windows | `INSPIRON 7415 2IN1` / `RAM 16GB · Ổ 512GB` / `14 inch cảm ứng` |
| 2 | Trung · chính diện | Màn bật ảnh trắng kín màn | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Nắp lưng đóng, thấy logo Dell | — |
| 7 | Cận | Vết xước / mòn thật trên máy | `Vết dùng thật của máy này` |
| 8 | Trung · ngang tầm mắt | Màn gập ngược dựng chữ A, màn mở một slide, 3 bàn tay đặt quanh mép bàn (không thấy mặt) | — |

- Máy không có vết xước → bỏ ảnh 7 và xoá dòng "Máy đã qua sử dụng nên có vết dùng…" trong caption.
- ⛔ Không viết "dòng doanh nhân" (Inspiron không phải dòng Latitude) · không bút cảm ứng · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi" · không mặt người chưa xin phép.

---

## 21 · Thứ 6 09-10 · 20:30 — Bộ ảnh Latitude 7420 vỏ nhôm

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 09-10 (Thứ 6) · 20:30 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7420 vỏ nhôm — 7 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | Khung E — Feedback khách hàng → `kho-khach-that.md` trống → đổi sang B — Hình ảnh sản phẩm (luật #25) |
| **Tên bài (nội bộ)** | Bộ ảnh Latitude 7420 vỏ nhôm |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Latitude 7420 [vỏ nhôm] i7-1185G7 · 16GB · 512GB · 14" FHD (12.980.000đ · Likenew · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Không cần cảm ứng, không cần xoay gập. Chỉ cần chip đời mới, RAM 16GB, ổ 512GB để khỏi ngồi dọn file.

💻 Dell Latitude 7420 [vỏ nhôm]
i7-1185G7 · RAM 16GB · ổ 512GB · màn 14 inch FHD
Máy likenew, dòng doanh nhân của Dell.
💰 12.980.000đ

Chiếc này KHÔNG cảm ứng, không xoay gập — bộ ảnh chụp đúng thế mở nắp thường.

Máy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 7420 [vỏ nhôm] · i7-1185G7 · 16GB · 512GB · 14 inch FHD — 12.980.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7420-vo-nhom-core-i7-1185g7-16gb-512gb-14-0-inch-fhd

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 7 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45°, ngang mặt bàn | Máy mở nắp, màn bật hình nền Windows | `LATITUDE 7420 VỎ NHÔM` / `i7 · RAM 16GB · Ổ 512GB` / `14 inch · không cảm ứng` |
| 2 | Trung · chính diện | Màn bật ảnh trắng kín màn | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Nắp lưng nhôm đóng, thấy logo Dell | — |
| 7 | Cận | Vết xước / mòn thật trên máy | `Vết dùng thật của máy này` |

- Máy không có vết xước → bỏ ảnh 7 và xoá dòng "Máy đã qua sử dụng nên có vết dùng…" trong caption.
- ⛔ Không chụp thế xoay gập, không tay chạm màn · không lấy nhầm bản vỏ carbon · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi".

---

## 22 · Thứ 7 10-10 · 12:15 — Bộ ảnh Latitude 7400 2in1 i5 256GB

> ✅ **Giá tuần 2: người dùng xác nhận 2026-09-28 vẫn đúng** — không cần kéo lại trước khi bàn giao. Sáng ngày đăng vẫn gọi 0928939666 xác minh máy còn hay hết.

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 10-10 (Thứ 7) · 12:15 |
| **ĐỊNH DẠNG** | Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7400 2in1 i5 16GB 256GB — 8 ảnh |
| **TUYẾN ND** | Sản phẩm |
| **Tuyến bài (nội bộ)** | Khung F — Hình ảnh khách tại cửa hàng → `kho-khach-that.md` trống → đổi sang B — Hình ảnh sản phẩm (luật #25) |
| **Tên bài (nội bộ)** | Bộ ảnh Latitude 7400 2in1 i5 256GB |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh máy / shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP10 (Hàng & ưu đãi) |
| **Sản phẩm nêu tên** | Dell Latitude 7400 2in1 i5-8365U · 16GB · 256GB · 14" FHD cảm ứng (9.280.000đ · Likenew · BH 6 tháng) |
| **CTA** | Nhắn tin để shop kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa chụp)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Thích chiếc 7400 2in1 hôm thứ 3 mà ví thiếu 1,4 triệu? Có bản này.

Cùng thân máy xoay gập, cùng màn 14 inch cảm ứng, cùng 16GB RAM. Khác chip và ổ.

💻 Dell Latitude 7400 2in1
i5-8365U · RAM 16GB · ổ 256GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ
Máy likenew, dòng doanh nhân của Dell.
💰 9.280.000đ

Bản i7 · 16GB · 512GB: 10.680.000đ. Chênh 1.400.000đ — đổi lại chip i5 và ổ 256GB.

Bên mình có 3 bản 7400 2in1. Nhắn tin nhớ ghi "i5 16GB 256GB" để khỏi nhầm.

Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Nhắn tin để shop kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**First comment** *(người đăng tự chép xuống bình luận đầu)*:
```
Dell Latitude 7400 2in1 · i5-8365U · 16GB · 256GB · 14 inch FHD cảm ứng — 9.280.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7400-2in1-cam-ung-core-i5-8365u-ram-16gb-ssd-256gb-intel-uhd-graphic-14inch-cam-ung

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.

| Ảnh | Khung · góc | Chụp gì | Chữ trên ảnh |
|---|---|---|---|
| 1 | Trung · chéo 45°, ngang mặt bàn | Máy mở nắp, màn bật hình nền Windows | `LATITUDE 7400 2IN1` / `i5 · RAM 16GB · Ổ 256GB` / `14 inch cảm ứng` |
| 2 | Trung · chính diện | Màn bật ảnh trắng kín màn | — |
| 3 | Cận · từ trên xuống | Bàn phím + touchpad | — |
| 4 | Cận · ngang | Cạnh trái, thấy rõ các cổng | — |
| 5 | Cận · ngang | Cạnh phải, thấy rõ các cổng | — |
| 6 | Trung · chéo | Nắp lưng đóng, thấy logo Dell | — |
| 7 | Cận | Vết xước / mòn thật trên máy | `Vết dùng thật của máy này` |
| 8 | Trung · từ trên xuống | Máy gập phẳng 360°, màn mở một file PDF | — |

- Máy không có vết xước → bỏ ảnh 7.
- ⚠️ Tag web của máy này ghi ổ 512GB — **sai so với tên**. Viết theo tên: 256GB (luật #13). Trước khi chụp mở `This PC` kiểm ổ; thấy 512GB thì dừng, báo người viết.
- ⛔ Không lấy nhầm bản i5 8GB hay bản i7 · không bút cảm ứng · không giá trên ảnh · không "còn hàng", "còn X máy", "giảm giá", "ưu đãi".

---

## Ghi chú còn treo — người dùng cần chốt

| # | Việc | Phương án đang dùng |
|---|---|---|
| 1 | ~~Trùng lịch chương 3~~ | ✅ người dùng quyết 2026-09-28: chương 3 dời sang 12–18/10 |
| 2 | ~~Gate 6 bản mới chưa ký~~ → ✅ duyệt 2026-09-28 | xong |
| 3 | ~~Tuần 2 dùng giá hạn 2026-10-05~~ | ✅ người dùng xác nhận giá vẫn đúng 2026-09-28 |
| 4 | `kho-khach-that.md` trống → 4 khung E/F đang chạy tuyến B | Có ca đã xin phép trước ngày đăng → thay khối 10, 11, 21, 22 bằng khuôn E/F |
| 5 | Hai ghi chú cũ về bảng quy đổi `TUYẾN ND` (CP03 (So sánh), CP01 (Tư vấn mua) chưa có chỗ rõ ràng) | Giữ như bản 24/09: xếp vào **Sản phẩm** |

## Điều cả 22 nội dung đều không được viết

Trả góp · freeship · quà tặng · "còn hàng" / "còn X máy" / "sắp hết" (luật #12) · cân nặng máy ·
số giờ pin · "mượt", "bản lề chắc", "cảm ứng nhạy" · tên đối thủ (luật #9) · "chính hãng" cho máy cũ ·
"rẻ nhất" / "tốt nhất" / "số 1" / "sốc" · bảo hành khác 6 tháng bo mạch – màn – phím và 3 tháng pin (luật #14) ·
"nguyên zin" cho máy Cũ (7390, 5300, 5310) · hứa nâng ổ cứng · máy dưới 5 triệu (luật #16) ·
máy ngoài danh sách 36 (luật #20) · giá trên hình ở video không phải loại so sánh ·
"ghé shop sau giờ học" (chưa có fact giờ mở cửa).
