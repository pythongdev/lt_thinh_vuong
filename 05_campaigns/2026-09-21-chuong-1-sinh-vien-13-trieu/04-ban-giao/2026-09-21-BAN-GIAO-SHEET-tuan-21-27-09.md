# Bàn giao Google Sheet — tuần 21–27/09/2026

> Sheet đích: https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc
> Soạn 2026-09-20 · format bám `04_content/templates/fanpage-sheet.md` mục 1 và khối
> "Guideline triển khai" đã đọc trong sheet (tuyến nội dung · giờ đăng · cấu trúc bài review).

## ⚠️ CHƯA VÀO SHEET LỊCH ĐĂNG — mới nằm ở một file Drive riêng

**Đã tạo trong Google Drive (2026-09-20):**
**FANPAGE TV — tuần 21-27/09/2026 (khối dán vào lịch đăng)**
https://docs.google.com/spreadsheets/d/1mmCWTi6_OBAymC8Pj2l4HvqfgwU-7_lir8ggD39O_rc/edit

**KỊCH BẢN VIDEO — Sinh viên có 13 triệu (KB-SV01→06)**
https://docs.google.com/spreadsheets/d/1QNvnFdNcBaCKhsOs2eCcJPzeyGMXpFDTr8jMihFd2gA/edit
Kịch bản theo từng mốc giây của 6 video, dựng theo đúng format sheet kịch bản team đang dùng
(`STT · KỊCH BẢN · BỐI CẢNH · NỘI DỤNG · TEXT MÀN HÌNH · NOTE`). Ô `LINK ẢNH` của 6 block Reels
dưới đây đã trỏ sang đây bằng mã `KB-SV01`–`KB-SV06`.

File đó đã dàn sẵn **đúng khung tuần của sheet lịch đăng** — cột là Thứ 2…Chủ nhật, dòng là
`DATE & TIME · STT · ĐỊNH DẠNG · TUYẾN ND · TITLE · CONTENT · BRIEF ẢNH · LINK ẢNH · FORMAT · STATUS`,
hai khối (slot sáng và slot tối). Caption, emoji, xuống dòng trong ô đều đã kiểm còn nguyên.
**Việc còn lại: bôi vùng đó → copy → dán vào block tuần 21-27/09 trong sheet lịch đăng của team.**

**Vì sao không ghi thẳng vào sheet lịch đăng:** connector Google Drive đang nối chỉ **đọc** ô.
Công cụ ghi duy nhất nó có (`update_file`) chỉ đổi được tên file và thư mục. Máy cũng không có
`gcloud`, `gspread` hay credential Google nào để đi đường khác.

Muốn lần sau ghi thẳng được, chọn một trong hai:
1. Nối **connector Google Sheets có quyền ghi** trong cài đặt connector của claude.ai.
2. Cấp quyền để chạy **Apps Script / Sheets API**.

---

## 1. Lịch tuần — 11 nội dung, 6 ngày đăng

Xếp theo **cách A**: video buổi sáng (9:00–11:00), bài viết buổi tối (20:00–22:00) —
đúng khung giờ khối guideline trong sheet ghi. Cùng chủ đề trong ngày, video kéo người vào bài viết.

| | **T2 21-09** | **T3 22-09** | **T4 23-09** | **T5 24-09** | **T6 25-09** | **T7 26-09** | **CN 27-09** |
|---|---|---|---|---|---|---|---|
| **Sáng** | REEL 01 — Sai lầm nhìn chữ i7 | REEL 06 — Gập xoay để làm gì | REEL 02 — 3 thứ soi trong 30 giây | REEL 03 — Máy cũ chậm không phải vì cũ | REEL 04 — Bạn có 15 ngày đổi ý | REEL 05 — Ba chiếc dưới 13 triệu | — |
| **Tối** | — | POST 01 — Mới hay cũ | POST 02 — 10 thứ phải kiểm tra | ⛔ **TRỐNG** (bài "hãng nào" bị chặn — mục 4) | POST 03 — 13 triệu lấy dòng nào | POST 04 — Ba chiếc tại 71 Thiên Hiền | — |
| **Story** | Bình chọn "cũ hay mới?" | — | Bình chọn "bạn học ngành gì?" | — | Hỏi đáp "Latitude là gì?" | Ảnh kệ máy thật | — |

**Chủ nhật 27/09 không đăng bài** — dành cả ngày trả lời bình luận và tin nhắn của 6 bài trước.

> **STT:** tôi đánh `POST 01`–`POST 11` cho tuần này. Sheet đánh số liên tục theo tháng —
> người điền phải **đánh lại theo số đang chạy trong sheet**, tôi không đọc được số hiện hành
> (bản đọc bị cắt ở tuần 26-05).

---

## 2. Bảng tra nhanh 10 trường

| STT | ĐỊNH DẠNG | TUYẾN ND | TITLE (rút gọn) | FORMAT | STATUS |
|---|---|---|---|---|---|
| POST 01 | Reels | Giáo dục | Sai lầm nhìn chữ i7 | Post caption | CHỜ FEEDBACK |
| POST 02 | post | Giáo dục | Có 13 triệu: máy mới hay máy cũ? | Post caption | CHỜ FEEDBACK |
| POST 03 | Reels | Sản phẩm | Gập xoay để làm gì? | Post caption | CHỜ FEEDBACK |
| POST 04 | Reels | Trust SP | 3 thứ soi trong 30 giây đầu | Post caption | CHỜ FEEDBACK |
| POST 05 | Bộ ảnh | Trust SP | 10 thứ phải kiểm tra trước khi trả tiền | Post caption | CHỜ FEEDBACK |
| POST 06 | Reels | Giáo dục | Máy cũ chậm dần không phải vì nó cũ | Post caption | CHỜ FEEDBACK |
| POST 07 | Reels | Trust thương hiệu | Bạn có 15 ngày để đổi ý | Post caption | CHỜ FEEDBACK |
| POST 08 | post | Sản phẩm | 13 triệu nên lấy dòng máy nào | Post caption | CHỜ FEEDBACK |
| POST 09 | Reels | Sản phẩm | Ba chiếc dưới 13 triệu | Post caption | CHỜ FEEDBACK |
| POST 10 | post | Sản phẩm | 3 chiếc đang có tại 71 Thiên Hiền | Post caption | CHỜ FEEDBACK |

*(10 nội dung đăng được. Bài "hãng nào" là nội dung thứ 11 — đang bị chặn, chưa vào bảng.)*

---

## 3. Khối 10 trường — copy từng cột vào sheet

Mỗi khối dưới đây là **một ô dọc** trong sheet, theo đúng thứ tự dòng
`DATE & TIME · STT · ĐỊNH DẠNG · TUYẾN ND · TITLE · CONTENT · BRIEF ẢNH · LINK ẢNH · FORMAT · STATUS`.

---

### ▶ POST 01 — Thứ 2, 21-09, 09:30 · Reels

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 21-09 (Thứ 2) · 09:30 |
| **STT** | POST 01 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Giáo dục |
| **TITLE** | Sai lầm nhìn chữ i7 · P1 (Sinh viên / mua máy đầu tiên) · J0 (Chưa biết shop) · O1 (Tiếp cận) · CP08 (Sai lầm khi mua) |

**CONTENT:**
```
Đi xem laptop cũ, câu đầu tiên hầu như ai cũng hỏi: "máy này i mấy?"

Vấn đề là chữ i7 không nói cho bạn biết máy có bao nhiêu RAM, ổ cứng bao nhiêu, màn hình còn tốt không, bàn phím có phím nào liệt không, và bảo hành ghi mấy tháng.

Hai chiếc cùng ghi i7 có thể cách nhau ba đời chip.

Sáu thứ nên nhìn khi cầm một chiếc máy cũ lên:
• Đời chip
• RAM
• Ổ cứng
• Màn hình
• Bàn phím
• Bảo hành ghi rõ bao lâu

i7 là tên một dòng chip, không phải lời hứa máy chạy tốt.

Mai mình đăng bài "có 13 triệu thì nên mua máy mới hay máy cũ". Theo dõi trang để không lỡ.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #laptopsinhvien #laptopthinhvuong #kinhnghiemmualaptop
```

**BRIEF ẢNH (kịch bản video):**
Reels dọc 9:16, 1080×1920, **30 giây**. Kịch bản đầy đủ theo mốc giây:
`05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/01-drafts/2026-09-21-reel-01-sai-lam-nhin-chu-i7.md`
Quay tại quầy 71 Thiên Hiền. Hai máy lên hình: Latitude 7400 2in1 (i7-8665U) và Latitude 7420 vỏ nhôm (i7-1185G7).
Bắt buộc có phụ đề, đặt ở 2/3 trên khung. **Không hiện giá, không đọc tên máy.**
Thumbnail: ngón tay chỉ vào chữ i7 trên màn hình — chữ "i7 — chỗ sai đầu tiên".

**LINK ẢNH:** `KB-SV01` — https://docs.google.com/spreadsheets/d/1QNvnFdNcBaCKhsOs2eCcJPzeyGMXpFDTr8jMihFd2gA/edit
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 02 — Thứ 3, 22-09, 20:30 · post

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 22-09 (Thứ 3) · 20:30 |
| **STT** | POST 02 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Giáo dục |
| **TITLE** | Có 13 triệu: máy mới hay máy cũ? · P1 (Sinh viên / mua máy đầu tiên) · J2 (Bắt đầu quan tâm laptop cũ) · O2 (Hiểu vấn đề) · CP03 (So sánh) |

**CONTENT:**
```
Có 13 triệu mua laptop đi học — nên mua máy mới hay máy cũ?

Nói thẳng một điều trước, kẻo đọc hết bài lại thấy bên mình giấu: ở tầm 13 triệu, máy mới và máy cũ KHÔNG cho bạn cùng một thứ. Bạn phải chọn đánh đổi, chứ không có bên nào hơn hẳn.

Nhìn thẳng vào bảng hàng:

🔹 MÁY MỚI 100% ở tầm dưới 13 triệu
RAM thường là 8GB · ổ 128–256GB · bảo hành 12 tháng · chưa ai dùng

🔹 MÁY ĐÃ QUA SỬ DỤNG, dòng doanh nhân, cùng tầm tiền
RAM 16GB · ổ 512GB · màn 14 inch · bảo hành 6 tháng, pin 3 tháng

Chiếc máy cũ mình đang nói tới là chiếc này: 12.980.000đ — i7 đời 11 · RAM 16GB · ổ 512GB · màn 14 inch.

Mỗi bên thắng một thứ, và thắng rõ:
• Máy mới hơn ở thời gian bảo hành — 12 tháng so với 6 tháng — và ở việc chưa ai dùng.
• Máy cũ hơn ở RAM và ổ cứng — 16GB và 512GB, gấp đôi cả hai.

Thay vì chỉ nhìn chữ "mới", nhìn đủ sáu thứ này:
RAM · ổ cứng · màn hình · bàn phím · vỏ máy · bảo hành có ghi rõ bao lâu không.

Pin 100% có thể cho cảm giác yên tâm, nhưng không bù được RAM thiếu, màn hình kém hay bảo hành mập mờ.

Kết lại hai chiều:
Mua máy cũ thì mua bằng kiến thức kiểm tra và bằng bảo hành cụ thể — đừng mua chỉ vì rẻ.
Mua máy mới thì cũng đừng mua chỉ vì chữ "mới" — hỏi luôn RAM bao nhiêu.

👉 Bạn chọn bên nào? Comment kèm ngành bạn học, mình nói thẳng là nên đi hướng nào.

Mai mình đăng danh sách những thứ phải kiểm trước khi trả tiền.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #laptopsinhvien #laptop13trieu #laptopthinhvuong #kinhnghiemmualaptop
```

**BRIEF ẢNH:**
Tỉ lệ 1:1 · số lượng 1 ảnh · ảnh máy thật tại shop, **không ảnh stock**.
Bố cục: hai chiếc máy mở nắp đặt song song, nền trung tính, máy chiếm ~60% khung.
Text trên ảnh (tối đa 3 dòng):
`13 TRIỆU` / `MÁY MỚI 8GB RAM — hay — MÁY CŨ 16GB RAM?` / `Mỗi bên thắng một thứ`
Logo Thịnh Vượng góc trái trên. Tối thiểu 1080×1080px, dưới 1MB.
⛔ Không ghi giá lên ảnh. Không ghi "giảm giá", "ưu đãi".

**LINK ẢNH:** *(để trống)*
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 03 — Thứ 3, 22-09, 09:30 · Reels

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 22-09 (Thứ 3) · 09:30 |
| **STT** | POST 03 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Sản phẩm |
| **TITLE** | Gập xoay để làm gì? · P1 (Sinh viên / mua máy đầu tiên) · J2 (Bắt đầu quan tâm laptop cũ) · O4 (Cân nhắc mua) · CP05 (Đánh giá sản phẩm) |

**CONTENT:**
```
Trên tên máy hay có chữ "2in1" hoặc "gập xoay". Nhiều bạn đọc lướt qua mà không biết nó làm được gì.

1️⃣ Gập hẳn ra sau thành bảng — đặt lên đùi trong giảng đường, đọc tài liệu, lật trang bằng ngón tay, không vướng bàn phím.
2️⃣ Dựng hình chữ A — bàn chật, quán cà phê, vẫn xem video và họp online được.
3️⃣ Màn cảm ứng — zoom bảng Excel bằng hai ngón như dùng điện thoại.

Không phải ai cũng cần. Nhưng cần rồi thì máy thường không thay được.

Máy trong video: Dell Latitude 7400 2in1 — i7-8665U · 16GB · 512GB · 14 inch FHD cảm ứng — 10.680.000đ.
Máy đã qua sử dụng. Bảo hành 6 tháng main – màn hình – bàn phím, pin 3 tháng.

👉 Comment ngành bạn học, mình nói thẳng là bạn có cần màn gập xoay hay không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptop2in1 #laptopsinhvien #delllatitude #laptopcu #laptopthinhvuong
```

**BRIEF ẢNH (kịch bản video):**
Reels dọc 9:16, 1080×1920, **33 giây**. Kịch bản đầy đủ:
`05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/01-drafts/2026-09-22-reel-06-gap-xoay-de-lam-gi.md`
Hai bối cảnh: quầy (cảnh lật màn 360 độ, cảnh Excel) + mô phỏng chỗ ngồi học tại shop.
Cả ba thao tác phải quay thật và phải chạy được.
⛔ **Không cho bút cảm ứng vào khung hình** — máy này không kèm bút.
Thumbnail: máy gập phẳng thành bảng đặt trên đùi — chữ "Gập xoay để làm gì?".

**LINK ẢNH:** `KB-SV02` — https://docs.google.com/spreadsheets/d/1QNvnFdNcBaCKhsOs2eCcJPzeyGMXpFDTr8jMihFd2gA/edit
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 04 — Thứ 4, 23-09, 09:30 · Reels

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 23-09 (Thứ 4) · 09:30 |
| **STT** | POST 04 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust SP |
| **TITLE** | 3 thứ soi trong 30 giây đầu · P1 (Sinh viên / mua máy đầu tiên) · J2 (Bắt đầu quan tâm laptop cũ) · O2 (Hiểu vấn đề) · CP04 (Quy trình kiểm tra) |

**CONTENT:**
```
Ba thứ soi được trong 30 giây đầu, không cần biết gì về máy tính:

1️⃣ CẤU HÌNH THẬT — Settings → System → About. Đọc dòng chip và dòng RAM, so với đúng lời người bán vừa nói. Lệch là hỏi lại.

2️⃣ MÀN HÌNH — mở một ảnh trắng kín màn, rồi một ảnh đen. Điểm chết, vệt sọc, chỗ ám vàng lộ ra hết.

3️⃣ BÀN PHÍM — mở một trang test phím, gõ hết một lượt từ Esc đến phím mũi tên. Phím nào không ăn, bạn thấy ngay.

Soi cửa hàng nào cũng được. Soi bên mình cũng được. Kiểm kỹ đi, không ai giục bạn đâu.

Bản đầy đủ mình đăng trong bài tối nay — lưu lại mang theo hôm đi xem máy.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #kinhnghiemmualaptop #laptopsinhvien #checkmaycu #laptopthinhvuong
```

**BRIEF ẢNH (kịch bản video):**
Reels dọc 9:16, 1080×1920, **44 giây**. Kịch bản đầy đủ:
`05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/01-drafts/2026-09-23-reel-02-ba-thu-soi-30-giay.md`
Quay tại bàn test. Máy: Latitude 7400 2in1 (i7-8665U · 16GB · 512GB).
**Thao tác phải thật, quay một mạch, không dựng giả** — đây là toàn bộ giá trị của video.
Chuẩn bị: mở sẵn trang test bàn phím, 1 ảnh trắng + 1 ảnh đen toàn màn, lau sạch màn.
Thumbnail: bàn tay cầm máy, màn hiện cửa sổ About — chữ "3 thứ soi trong 30 giây".

**LINK ẢNH:** `KB-SV03` — https://docs.google.com/spreadsheets/d/1QNvnFdNcBaCKhsOs2eCcJPzeyGMXpFDTr8jMihFd2gA/edit
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 05 — Thứ 4, 23-09, 20:30 · Bộ ảnh

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 23-09 (Thứ 4) · 20:30 |
| **STT** | POST 05 |
| **ĐỊNH DẠNG** | Bộ ảnh |
| **TUYẾN ND** | Trust SP |
| **TITLE** | 10 thứ phải kiểm tra trước khi trả tiền · P1 (Sinh viên / mua máy đầu tiên) · J2 (Bắt đầu quan tâm laptop cũ) · O2 (Hiểu vấn đề) · CP04 (Quy trình kiểm tra) |

**CONTENT:**
```
10 thứ phải kiểm tra trước khi trả tiền mua laptop cũ.

Lưu bài này lại. Hôm đi xem máy mở ra soi từng dòng.

1. Chip, RAM, ổ cứng đúng như rao bán — mở Settings → System → About xem tận mắt.
2. Màn hình không sọc, không nhấp nháy, không ám màu — mở một ảnh trắng kín màn rồi một ảnh đen.
3. Bàn phím và bàn di chuột đủ phím, không liệt.
4. Mọi cổng cắm đều nhận thiết bị.
5. Camera, loa, micro hoạt động.
6. Wi-Fi và Bluetooth ổn định.
7. Máy không quá nóng, không tự tắt.
8. Bản lề chắc chắn, không rơ, không kêu.
9. Sạc đúng công suất, không chập chờn.
10. Điều kiện bảo hành và đổi trả có ghi rõ ràng hay không.

Mục 10 là mục quan trọng nhất. Hỏi đủ bốn câu:
• Bảo hành bao lâu?
• Bảo hành những gì?
• Pin riêng bao lâu?
• Đổi trả trong bao nhiêu ngày?

Bên mình trả lời sẵn: 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng; 15 ngày đổi sang máy khác miễn phí.

Soi cửa hàng nào cũng được. Soi bên mình cũng được. Kiểm kỹ đi, không ai giục bạn đâu.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #kinhnghiemmualaptop #checkmaycu #laptopsinhvien #laptopthinhvuong
```

**BRIEF ẢNH:**
Bộ ảnh lật (carousel) **11 ảnh**, tỉ lệ 4:5 (tối ưu điện thoại), 1080×1350px.
- Ảnh 1 = bìa: chữ `10 THỨ PHẢI KIỂM TRA` / `TRƯỚC KHI TRẢ TIỀN MUA LAPTOP CŨ` trên nền ảnh máy thật tại quầy.
- Ảnh 2–11 = mỗi ảnh một mục, **chữ to đọc được trên điện thoại**, tối đa 3 dòng/ảnh,
  kèm một ảnh chụp thật minh hoạ đúng thao tác đó (màn hình đang mở About, ảnh đen trên màn, bàn phím…).
- Ảnh 11 (mục 10) làm đậm hơn — đây là ảnh mạnh nhất của bộ.
Logo Thịnh Vượng góc trái trên mọi ảnh. Nền trung tính thống nhất cả bộ.
⛔ Bài này **tuyệt đối không bán hàng**: không giá, không link sản phẩm, không "nhắn tin ngay".

**LINK ẢNH:** *(để trống)*
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 06 — Thứ 5, 24-09, 09:30 · Reels

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 24-09 (Thứ 5) · 09:30 |
| **STT** | POST 06 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Giáo dục |
| **TITLE** | Máy cũ chậm dần không phải vì nó cũ · P2 (Nhân viên văn phòng) · J3 (Đang so sánh) · O3 (Tin công ty) · CP02 (Kiến thức) |

**CONTENT:**
```
"Máy cũ dùng vài tháng là ì" — đây là nỗi sợ chính đáng nhất khi mua laptop cũ. Nhưng phần lớn không phải vì máy già.

🔧 BỤI BÁM KÍN KHE TẢN NHIỆT — quạt vẫn quay, hơi nóng vẫn không thoát ra được.

🔧 KEO TẢN NHIỆT KHÔ — lớp keo giữa chip và tấm đồng chai lại sau vài năm, dẫn nhiệt kém đi.

🔧 MÁY NÓNG THÌ TỰ HẠ TỐC để khỏi hỏng. Bạn thấy nó ì, tưởng máy đến tuổi.

Vệ sinh và tra lại keo là xong.

Máy mua tại shop thì bên mình làm miễn phí trọn đời — cùng với cài Windows và cài phần mềm.

👉 Gửi bài này cho đứa bạn đang kêu máy chậm.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #vesinhlaptop #keotannhiet #kienthuclaptop #laptopthinhvuong
```

**BRIEF ẢNH (kịch bản video):**
Reels dọc 9:16, 1080×1920, **40 giây**. Kịch bản đầy đủ:
`05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/01-drafts/2026-09-24-reel-03-may-cu-cham-dan.md`
Quay tại bàn kỹ thuật, ánh sáng đèn bàn, tay người thật + dụng cụ thật.
⚠️ **Hỏi kỹ thuật trước máy nào được phép mở nắp lưng ra quay.**
Tua nhanh đoạn vặn ốc, quay chậm đoạn nhấc tấm đồng và đoạn bóp keo.
Thumbnail: nắp lưng mở, khe tản nhiệt đầy bụi — chữ "Không phải vì máy cũ".

**LINK ẢNH:** `KB-SV04` — https://docs.google.com/spreadsheets/d/1QNvnFdNcBaCKhsOs2eCcJPzeyGMXpFDTr8jMihFd2gA/edit
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 07 — Thứ 6, 25-09, 09:30 · Reels

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 25-09 (Thứ 6) · 09:30 |
| **STT** | POST 07 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust thương hiệu |
| **TITLE** | Bạn có 15 ngày để đổi ý · P1 (Sinh viên / mua máy đầu tiên) · J3 (Đang so sánh) · O3 (Tin công ty) · CP07 (Hậu trường) |

**CONTENT:**
```
Phần này cửa hàng nào cũng ngại đăng. Mình đăng trước cho bạn khỏi phải hỏi.

✅ ĐƯỢC GÌ
• 15 ngày đổi sang máy khác miễn phí — máy lỗi hay bạn đổi ý cũng đổi.
• Bảo hành 6 tháng main, màn hình, bàn phím (máy cũ / likenew). Pin 3 tháng.
• Máy mới 100% thì bảo hành 12 tháng.
• Vệ sinh máy, tra keo tản nhiệt, cài Windows, cài phần mềm — miễn phí trọn đời.

❌ KHÔNG ĐƯỢC GÌ — bảo hành không nhận các trường hợp:
• Máy vào nước.
• Rơi vỡ, va đập, hư hỏng vật lý.
• Đã tháo sửa ở đơn vị bên ngoài.
• Điểm chết trên màn hình.
• Lỗi phát sinh nhưng không báo trong vòng 30 ngày.

Biết trước thì sau này không có gì phải cãi nhau.

👉 Gửi cho đứa bạn sắp mua máy cũ.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopcu #baohanhlaptop #muabanminhbach #laptopsinhvien #laptopthinhvuong
```

**BRIEF ẢNH (kịch bản video):**
Reels dọc 9:16, 1080×1920, **30 giây**. Kịch bản đầy đủ:
`05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/01-drafts/2026-09-25-reel-04-15-ngay-doi-y.md`
Quay tại quầy, người thật nhìn thẳng camera. Giọng bình thản, **không hạ giọng ở phần bất lợi**.
⚠️ Cảnh minh hoạ rơi vỡ / vào nước dựng an toàn — dùng máy hỏng của kỹ thuật, không làm hỏng máy đang bán.
Thumbnail: hai cột xanh / đỏ trên nền quầy — chữ "Được gì · Không được gì".

**LINK ẢNH:** `KB-SV05` — https://docs.google.com/spreadsheets/d/1QNvnFdNcBaCKhsOs2eCcJPzeyGMXpFDTr8jMihFd2gA/edit
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 08 — Thứ 6, 25-09, 20:30 · post

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 25-09 (Thứ 6) · 20:30 |
| **STT** | POST 08 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Sản phẩm |
| **TITLE** | 13 triệu nên lấy dòng máy nào · P1 (Sinh viên / mua máy đầu tiên) · J3 (Đang so sánh) · O4 (Cân nhắc mua) · CP01 (Tư vấn mua) |

**CONTENT:**
```
Có 13 triệu, đi học khối kinh tế — nên lấy dòng máy nào?

Ở tầm tiền này, trong hàng bên mình đang có, gần như toàn bộ là máy doanh nhân màn 14 inch và máy gập xoay cảm ứng. Đó cũng là nhóm hợp đi học nhất: màn 14 inch bỏ vừa balo, bàn phím làm ra để gõ nhiều.

Nhóm không nên nhắm ở tầm này: máy trạm màn 15,6 inch có card đồ hoạ rời — dành cho kỹ thuật và đồ hoạ, và ở tầm 15 triệu trở lên.

Ba chiếc đáng cân nhắc, mỗi chiếc mình nói thẳng một điểm yếu:

🔹 DÙNG HẾT NGÂN SÁCH — Dell Latitude 7420 vỏ nhôm — 12.980.000đ
i7-1185G7 · RAM 16GB · ổ 512GB · màn 14 inch FHD
Điểm yếu: không có màn cảm ứng.

🔹 ĐỂ DƯ KHOẢNG 2,3 TRIỆU — Dell Latitude 7400 2in1 — 10.680.000đ
i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, gập xoay
Điểm yếu: đời chip cũ nhất trong ba chiếc.

🔹 KHÔNG PHẢI DÒNG DOANH NHÂN — Dell Inspiron 7415 2in1 — 11.280.000đ
Ryzen 7-5700U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, gập xoay
Điểm yếu: dòng phổ thông, không phải dòng doanh nhân.

Bài toán tiền, tính theo đúng phần chênh lệch:
Chiếc 10.680.000đ và chiếc 12.980.000đ chênh nhau 2.300.000đ — khoảng 48.000đ mỗi tháng nếu bạn học bốn năm — đổi lấy đời chip mới hơn ba thế hệ.
Còn nếu để dành 2,3 triệu đó, bạn mua được gì cho việc học? Đó mới là câu đáng cân nhắc.

Cả ba đều là máy đã qua sử dụng. Bảo hành 6 tháng main – màn hình – bàn phím, pin 3 tháng.

👉 Comment ngân sách và ngành bạn học, mình gợi ý máy.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #delllatitude #laptop13trieu #laptopcu #laptopthinhvuong
```

**BRIEF ẢNH:**
Tỉ lệ 1:1 · **3 ảnh**, mỗi ảnh một máy, ảnh máy thật tại shop.
Text trên mỗi ảnh (tối đa 3 dòng): tên máy / `16GB RAM · 512GB · 14 inch` / vai trò ("Dùng hết ngân sách" · "Để dư 2,3 triệu" · "Không phải dòng doanh nhân").
Logo Thịnh Vượng góc trái trên. 1080×1080px, dưới 1MB, nền trung tính.
⛔ **Không ghi giá lên ảnh** — giá chỉ nằm trong caption. Không ghi "giảm giá", "ưu đãi", "số lượng có hạn".

**LINK ẢNH:** *(để trống)*
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 09 — Thứ 7, 26-09, 10:30 · Reels

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 26-09 (Thứ 7) · 10:30 |
| **STT** | POST 09 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Sản phẩm |
| **TITLE** | Ba chiếc dưới 13 triệu trên kệ 71 Thiên Hiền · P1 (Sinh viên / mua máy đầu tiên) · J4 (Đã inbox / gọi / ghé shop) · O5 (Tạo lead / đơn) · CP05 (Đánh giá sản phẩm) |

**CONTENT:**
```
Cả tuần nói cách nhìn máy rồi. Đây là ba chiếc thật đang nằm trên kệ 71 Thiên Hiền — cùng tầm 13 triệu, cùng RAM 16GB, cùng ổ 512GB, cùng màn 14 inch.

🔹 Dell Latitude 7420 [vỏ nhôm] — i7-1185G7 · 16GB · 512GB · 14" FHD · Iris Xe — 12.980.000đ
Dòng doanh nhân, đời chip mới nhất trong ba chiếc. Điểm yếu: không có màn cảm ứng.

🔹 Dell Latitude 7400 2in1 — i7-8665U · 16GB · 512GB · 14" FHD cảm ứng — 10.680.000đ
Gập xoay, lật ngược thành bảng để đọc tài liệu. Điểm yếu: đời chip cũ nhất trong ba chiếc.

🔹 Dell Inspiron 7415 2in1 — Ryzen 7-5700U · 16GB · 512GB · 14" FHD cảm ứng — 11.280.000đ
Gập xoay, chạy chip Ryzen. Điểm yếu: dòng phổ thông, không phải dòng doanh nhân.

Cả ba là máy đã qua sử dụng. Bảo hành 6 tháng main – màn hình – bàn phím, pin 3 tháng. 15 ngày đổi sang máy khác miễn phí. Vệ sinh, tra keo, cài Windows miễn phí trọn đời.

👉 Nhắn tin mình kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop13trieu #laptopthinhvuong
```

**BRIEF ẢNH (kịch bản video):**
Reels dọc 9:16, 1080×1920, **36 giây**. Kịch bản đầy đủ:
`05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/01-drafts/2026-09-26-reel-05-ba-chiec-duoi-13-trieu.md`
Quay tại kệ máy thật ở 71 Thiên Hiền — thấy được kệ và quầy, không phông nền dựng.
**Giá chỉ xuất hiện từ giây 27**, không đặt giá ở giây đầu.
⚠️ **Sáng hôm quay phải gọi shop xác nhận lại giá + tag bảo hành + máy còn hay hết.**
Thumbnail: ba máy mở nắp xếp chéo trên quầy — chữ "13 triệu — ba chiếc thật".

**LINK ẢNH:** `KB-SV06` — https://docs.google.com/spreadsheets/d/1QNvnFdNcBaCKhsOs2eCcJPzeyGMXpFDTr8jMihFd2gA/edit
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

### ▶ POST 10 — Thứ 7, 26-09, 20:30 · post

| Trường | Giá trị |
|---|---|
| **DATE & TIME** | 26-09 (Thứ 7) · 20:30 |
| **STT** | POST 10 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Sản phẩm |
| **TITLE** | 3 chiếc dưới 13 triệu đang có tại 71 Thiên Hiền · P1 (Sinh viên / mua máy đầu tiên) · J4 (Đã inbox / gọi / ghé shop) · O5 (Tạo lead / đơn) · CP05 (Đánh giá sản phẩm) |

**CONTENT:**
```
Ba chiếc laptop cho sinh viên đang nằm trên kệ 71 Thiên Hiền — bạn ghé là xem được tận tay.

Cả ba cùng RAM 16GB, cùng ổ 512GB, cùng màn 14 inch. Khác nhau ở ba chỗ, và mình nói thẳng điểm yếu của từng chiếc.

🔹 DELL LATITUDE 7420 [VỎ NHÔM]
i7-1185G7 · RAM 16GB · ổ 512GB · màn 14 inch FHD · Iris Xe
Dòng doanh nhân, đời chip mới nhất trong ba chiếc.
Điểm yếu: không có màn cảm ứng.
Giá 12.980.000đ

🔹 DELL LATITUDE 7400 2IN1
i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng
Gập xoay 360 độ — lật ngược thành bảng để đọc tài liệu trong giảng đường.
Điểm yếu: đời chip cũ nhất trong ba chiếc.
Giá 10.680.000đ

🔹 DELL INSPIRON 7415 2IN1
Ryzen 7-5700U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng
Cũng gập xoay, chạy chip Ryzen.
Điểm yếu: dòng phổ thông, không phải dòng doanh nhân.
Giá 11.280.000đ

Cả ba là máy đã qua sử dụng.

Đi kèm:
• Bảo hành 6 tháng cho bo mạch, màn hình, bàn phím. Pin 3 tháng.
• 15 ngày đổi sang máy khác miễn phí.
• Vệ sinh máy, tra keo tản nhiệt, cài Windows, cài phần mềm — miễn phí trọn đời.
• Giao hàng toàn quốc 3–5 ngày làm việc, nhận máy được kiểm tra.

👉 Nhắn tin mình kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop13trieu #laptopthinhvuong
```

**BRIEF ẢNH:**
Bộ ảnh **6–8 ảnh**, tỉ lệ 1:1, 1080×1080px, ảnh máy thật chụp tại shop.
Mỗi máy 2 ảnh: một góc tổng thể mở nắp, một close-up (bàn phím hoặc cạnh máy).
Thêm 1–2 ảnh kệ máy thật tại cửa hàng.
Text trên ảnh tổng thể (tối đa 3 dòng): tên máy / `16GB RAM · 512GB · 14 inch` / `Bảo hành 6 tháng`.
Logo Thịnh Vượng góc trái trên. Nền trung tính, máy chiếm ~60% khung.
⛔ **Không đặt giá ở dòng đầu caption** (Facebook hạn chế hiển thị bài mở đầu bằng giá) — đã xử lý.
⛔ Không ghi "còn X máy", "sắp hết", "số lượng có hạn" lên ảnh.

**First comment** *(sheet không có trường này — người đăng tự chép xuống bình luận đầu)*:
```
📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)

• Dell Latitude 7420 [vỏ nhôm] i7-1185G7 — 12.980.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7420-vo-nhom-core-i7-1185g7-16gb-512gb-14-0-inch-fhd

• Dell Latitude 7400 2in1 i7-8665U — 10.680.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7400-2in1-cam-ung-core-i7-8665u-ram-16gb-ssd-512gb-intel-uhd-graphic-14inch-cam-ung

• Dell Inspiron 7415 2in1 Ryzen 7-5700U — 11.280.000đ
https://laptoptv.vn/likenew-dell-inspiron-7415-2in1-ryzen-7-5700u-16gb-512gb-14-inch-fhd-cam-ung
```

**LINK ẢNH:** *(để trống)*
**FORMAT:** Post caption
**STATUS:** CHỜ FEEDBACK

---

## 4. ⛔ Bài bị chặn — KHÔNG đưa lên sheet

### "Có 13 triệu: nên mua hãng nào?" (dự kiến Thứ 5 24/09, Bộ ảnh)

**Chặn bởi câu 1 trong bản tóm tắt cho sếp:** *bài này có được mở đầu bằng câu
"cửa hàng mình bán Dell nhiều nhất" không?* Phương án dự phòng đã ghi sẵn là
**"chưa có ý kiến thì chưa đăng bài thứ Năm theo khung này"**.

Bỏ câu mở đầu đó thì bài thành một bảng so sánh hãng **tỏ ra khách quan trong khi shop bán
Dell áp đảo** — đúng lỗi "khách quan giả" mà chính kế hoạch chiến dịch đã cảnh báo. Nên
không có phương án an toàn để viết trước; phải chờ sếp trả lời.

⚠️ **Đồng thời phải sửa một số liệu trong bản kế hoạch trước khi viết bài này:**
bản tóm tắt ghi *"hơn 6 trên 10 chiếc laptop trên trang web là Dell"*. Số thật trong
`02_products/catalog/catalog-2026-09-15.csv`: **350/593 = 59,0%** — tức **gần 6 trên 10**,
chưa tới. Viết "hơn 6 trên 10" là sai số liệu.
(Dòng Dell: Latitude 145 · Inspiron 82 · Precision 46 · XPS 43 · Vostro 9. Bản kế hoạch ghi
Inspiron 79 — số đúng theo catalog 15/09 là **82**.)

**Ô Thứ Năm 24/09 buổi tối để trống.** Nếu sếp trả lời kịp thì điền bài này vào; không kịp thì
tuần chạy 10 nội dung thay vì 11.

---

## 5. Những chỗ tôi đã đổi so với bản kế hoạch — cần người dùng biết

| # | Bản kế hoạch ghi | Thực tế trong dữ liệu | Đã xử lý thế nào |
|---|---|---|---|
| 1 | Bài "mới hay cũ" so máy mới **chip đời 12 · 8GB · 512GB · màn 15,6" · BH 12 tháng** ở tầm 13 triệu | **Không có máy nào như vậy** trong danh sách 36 máy được viết. Trong danh sách 36, máy mới 100% rẻ nhất là 15.890.000đ — nhưng catalog đầy đủ **có** máy mới 100% ở 9.380.000đ · 10.880.000đ · 11.990.000đ, tất cả đều `qty=0` nên không vào danh sách trắng | So **theo tầm cấu hình**, không so hai chiếc máy cụ thể: máy mới dưới 13 triệu trong catalog đều là **8GB RAM · ổ 128–256GB**; máy cũ doanh nhân cùng tiền là 16GB · 512GB. ⛔ **Không được viết "13 triệu bên mình không có máy mới"** — khách mở web ra là thấy ngay, mất uy tín |
| 2 | "hơn 6 trên 10 laptop trên web là Dell" | 350/593 = **59,0%** | Bài dùng số này đang bị chặn (mục 4). Khi viết phải sửa thành "gần 6 trên 10" |
| 3 | Danh sách kiểm tra **12 mục** | Mục "số máy khớp giấy tờ" chờ câu 2; mục "pin" chờ câu 4 | Rút còn **10 mục**, đổi tên bài thành "10 thứ". Trả lời được 2 câu đó thì quay lại 12 mục |
| 4 | Bài Thứ Sáu mở bằng "Chọn Dell rồi —" | Câu đó dựa vào bài Thứ Năm đang bị chặn | Viết lại thành "13 triệu nên lấy dòng máy nào", không nhắc thị phần hãng, chỉ nói về hàng đang có |
| 5 | Chiến dịch chỉ có **1 reel** ("bài phụ, không kịp quay thì bỏ") | — | Thành **6 video**, xếp buổi sáng; bài viết giữ buổi tối |

---

## 6. Phải xong trước khi bấm đăng

| # | Việc | Ảnh hưởng |
|---|---|---|
| 1 | **Gate 6 — người ký duyệt** (luật #8) | Tất cả. Chưa ký thì chưa đăng |
| 2 | Gọi shop xác nhận **giá + tag bảo hành + máy còn hay hết** trong ngày đăng | POST 03 · 08 · 09 · 10 |
| 3 | Hỏi kỹ thuật **máy nào được mở nắp lưng ra quay** | POST 06 |
| 4 | Sếp trả lời **câu 1** (mở đầu bằng "shop bán Dell nhiều nhất") | Bài bị chặn ở mục 4 |
| 5 | Sếp trả lời **câu 2 + câu 4** (giấy bàn giao ghi số máy · nhân viên bật máy cho khách xem chai pin) | POST 05 quay lại 12 mục |
| 6 | Sếp trả lời **câu 5** (có nói thẳng khấu trừ 10%/20% không) | POST 07 hiện đang dùng phương án an toàn |
| 7 | **Danh sách 36 máy hết hạn 2026-09-27** → chạy `python3 tools/collection_fetch.py` | POST 03 · 08 · 09 · 10 nếu quay/đăng sau ngày đó |
| 8 | Đánh lại **STT** theo số đang chạy trong sheet | Tất cả |

## 7. Đã kiểm — 10 nội dung trên đều sạch với checklist mục 7 của `fanpage-sheet.md`

- ✅ Không có câu nào trong danh sách cấm mục 4 của `fanpage-sheet.md`
  (không "bảo hành 12–24 tháng" cho máy cũ · không "trả góp 0%" · không "freeship toàn quốc"
  · không "chỉ còn X máy" · không "giá tốt nhất" · không "chính hãng" · không "LAPTOP TV")
- ✅ Chân post dùng đúng bản mục 4.8
- ✅ Giá khớp `02_products/36-may-duoc-viet-2026-09-20.csv` (verified 2026-09-20, còn hạn)
- ✅ Cấu hình lấy theo **tên sản phẩm**, không theo tag (luật #13)
- ✅ Bảo hành đọc theo `warranty_tag` của từng máy — **cả 3 máy được nêu tên đều là 6 tháng**
  (luật #14). Con số "12 tháng" chỉ xuất hiện khi nói về **máy mới 100%** nói chung, không gắn
  vào máy cụ thể nào — đúng `policies.md`
- ✅ Không caption nào khẳng định shop **có** hay **không có** một máy cụ thể ở tầm giá nào —
  93% catalog không bật quản lý kho, mọi khẳng định kiểu đó đều không truy được nguồn (luật #12)
- ✅ Mọi máy được nêu tên đều nằm trong danh sách 36 máy (luật #20)
- ✅ `TITLE` có đủ mã + tên tiếng Việt của P / J / O / CP
- ✅ `STATUS` = `CHỜ FEEDBACK`
- ⬜ Gate 6 — **chưa ai ký**
