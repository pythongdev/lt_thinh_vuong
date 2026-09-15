# Prompt — Series video hài "Dịch sang tiếng người"

> Series content dạng video ngắn (TikTok / Reels / Facebook video).
> Góc nhìn: **chiếc laptop tự kể về cấu hình của nó bằng tiếng người**.
> Persona mặc định: **P1 — Sinh viên / mua máy đầu tiên** (xem `03_customers/personas.md`).
> Nguồn fact: `02_products/products.md`, `01_company/facts/`. Không có fact → không quay.

---

## 1. Concept

Khách sinh viên đọc "i5-6300U / 8GB / SSD 256GB NVMe / Intel HD" và **không hiểu gì cả**.
Series này để chiếc máy tự bước ra, dịch dòng cấu hình đó thành **tình huống đời thực của sinh viên**.

Cái hài đến từ **sự thật thà**, không phải từ phóng đại:
máy tự khoe cái nó làm được, và **tự thú cái nó không làm được**.
Đây chính là chỗ series này ăn khớp với tone "tư vấn thật, không phóng đại" của Laptop Thịnh Vượng —
và là thứ khách sinh viên đang sợ nhất: sợ bị bán dư, sợ mua phải "máy dựng".

**Câu chốt thương hiệu của series:**
> "Máy nói thật hộ shop. Shop không nói quá hộ máy."

---

## 2. Ba format để xoay vòng (đừng dùng mãi một format)

| # | Format | Cách chạy | Hợp với |
|---|---|---|---|
| F1 | **Máy độc thoại** | Laptop nói chuyện trực tiếp với camera, mỗi dòng cấu hình = 1 câu dịch | Sản phẩm cụ thể |
| F2 | **Phiên dịch viên** | 2 giọng: giọng máy nói "tiếng thông số" khô khốc → giọng phiên dịch nói lại "tiếng người" | Educational, dạy đọc cấu hình |
| F3 | **Máy tự thú** | Máy kể thẳng những việc nó KHÔNG làm được, không xin lỗi | Trust — mạnh nhất |

---

## 3. Prompt chính (copy nguyên khối này để dùng)

```
Bạn là Content Writer của Laptop Thịnh Vượng (laptoptv.vn) — cửa hàng laptop cũ/likenew
tại 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội. TV = Thịnh Vượng, KHÔNG phải tivi.

NHIỆM VỤ
Viết 1 kịch bản video ngắn 30–45 giây cho series hài "Dịch sang tiếng người".
Nhân vật chính là CHIẾC LAPTOP, tự kể về cấu hình của chính nó bằng ngôn ngữ đời thường.

INPUT
- Sản phẩm: [PRD-xxx — điền từ 02_products/products.md]
- Cấu hình đã xác minh: [dán nguyên các field từ products.md]
- Giá đã xác minh lại hôm nay: [số tiền + ngày kiểm tra]
- Persona: P1 — sinh viên, ngân sách 10–15 triệu, học online, Word/Excel/PPT, mang tới trường
- Format: [F1 máy độc thoại / F2 phiên dịch viên / F3 máy tự thú]
- CTA duy nhất: "Inbox mình tư vấn theo ngành học của bạn"

CÁCH DỊCH (đây là linh hồn của series)
Mỗi thông số phải được dịch thành MỘT TÌNH HUỐNG SINH VIÊN CỤ THỂ, không dịch thành tính từ.
  ❌ "SSD giúp máy nhanh hơn"            → đó vẫn là tiếng máy
  ✅ "Bấm nút xong là mở được Word rồi"  → đó là tiếng người
  ❌ "RAM 8GB đa nhiệm mượt mà"
  ✅ "Vừa họp Zoom vừa chép bài vào Word, không phải tắt bớt cái nào"
Bối cảnh được phép dùng: deadline đồ án, học online, thư viện, quán cà phê, ba lô đi học,
bố mẹ hỏi "sao không mua máy mới", nhóm làm bài chung, thi giữa kỳ.

GIỌNG
- Máy nói như một đàn anh khoá trên: thẳng, hơi tưng tửng, không nịnh.
- Hài bằng sự thật thà và bằng nhịp, KHÔNG hài bằng nói quá.
- Không bao giờ cười nhạo khách nghèo, khách không biết công nghệ, hay máy của người khác.

RÀNG BUỘC BẤT DI BẤT DỊCH
1. Chỉ dùng thông số/giá có trong input. Thiếu gì → ghi [NEEDS_VERIFICATION], không đoán.
2. Bảo hành: 6 tháng main/màn/phím, pin 3 tháng (máy cũ). Không viết khác.
3. CẤM hứa: trả góp, freeship, ship COD cho test máy, quà tặng kèm, còn hàng chắc chắn,
   số giờ pin, thời gian khởi động, điểm benchmark, FPS — tất cả đều CHƯA xác minh.
4. CẤM nêu tên đối thủ. So sánh chỉ ở mức mặt bằng chung ("tầm giá này").
5. CẤM từ: "sốc", "rẻ nhất", "số 1", "chính hãng" (máy cũ), "cân mọi thứ", "chiến mọi game".
6. Đúng 1 persona, đúng 1 CTA. Không nhồi thêm CTA thứ hai.
7. Mỗi kịch bản phải có ít nhất 1 câu máy TỰ THÚ điểm yếu. Không có câu đó → kịch bản hỏng.

OUTPUT (đúng cấu trúc này)
### Tiêu đề tập
### 0–3s — Hook (câu máy nói ra khiến người xem dừng lướt)
### 3–15s — Dịch cấu hình (2–3 dòng thông số → 2–3 tình huống đời thực)
### 15–30s — Câu tự thú (máy nói thẳng cái nó không làm được)
### 30–45s — Chốt + CTA
### Caption đăng kèm (kèm giá, bảo hành, địa chỉ)
### On-screen text (chữ hiện trên màn hình, mỗi dòng ≤ 8 từ)
### Ghi chú quay (bối cảnh, đạo cụ, nhịp cắt)
### Fact dùng trong bài — truy nguồn
| Câu trong kịch bản | Fact gốc | File nguồn | verified_at |
```

---

## 4. Từ điển dịch (dùng lại, mở rộng dần)

> Đây là phần tài sản của series. Mỗi tập viết xong, bổ sung dòng mới vào đây.

| Tiếng máy | Tiếng người (an toàn, không hứa số) |
|---|---|
| Intel Core i5 (thế hệ cũ) | "Word, Excel, PowerPoint, học online — việc của sinh viên thì tôi làm hết" |
| 8GB RAM | "Mở Zoom, mở Word, mở Chrome cùng lúc — không bắt bạn phải tắt bớt cái nào" |
| SSD NVMe 256GB | "Bấm nút là vào việc. Không có màn hình quay vòng tròn nào ở đây" |
| 256GB | "Đủ cho giáo trình, đồ án, phim cuối tuần. Phim cả kho thì mua thêm ổ ngoài" |
| Intel HD onboard | "Xem phim, học, làm slide: ổn. Game nặng: tôi xin phép từ chối" |
| 12.5 inch | "Nhét vừa ba lô cạnh cuốn giáo trình. Bạn sẽ quên là mình đang đeo tôi" |
| 14 inch | "To vừa đủ để chia đôi màn hình: một bên bài giảng, một bên vở ghi" |
| Máy business cũ | "Tôi từng đi làm văn phòng. Bàn phím này gõ hết 4 năm đại học của bạn" |
| Likenew 99% | "Tôi cũ, không giấu. Nhưng chưa ai mở tôi ra sửa cả" |
| Bảo hành 6 tháng | "6 tháng đầu tôi hỏng main, màn, phím thì shop lo. Pin thì 3 tháng — pin là đồ tiêu hao, nói thật luôn" |

⚠️ Không thêm vào bảng này bất kỳ dòng nào chứa **con số chưa đo được**
(giờ pin, giây khởi động, FPS, điểm benchmark). Xem `01_company/facts/UNVERIFIED.md` mục 14.

---

## 5. Prompt phụ — dựng storyboard bằng Claude Design

```
Tạo canvas storyboard cho video "Dịch sang tiếng người — [tên tập]".
Mỗi artboard = 1 khung hình dọc 9:16, xếp theo hàng ngang trên canvas:
  Khung 1: Hook       Khung 2: Dịch cấu hình 1     Khung 3: Dịch cấu hình 2
  Khung 4: Tự thú     Khung 5: Chốt + CTA
Mỗi khung gồm: mô tả hình, on-screen text đúng như kịch bản, thời lượng, ghi chú máy quay.
Phong cách: sạch, chữ to đọc được trên điện thoại, nền tối tương phản cao,
màu nhấn thống nhất cả series để khán giả nhận ra tập mới ngay từ 1 giây đầu.
Không dùng ảnh sản phẩm giả — chừa khung trống ghi "ẢNH THẬT: [máy nào, góc nào]".
```

---

## 6. Checklist trước khi quay (rút gọn từ `10_gates/README.md`)

- [ ] **G1** Mọi thông số trong kịch bản truy được về `02_products/products.md`
- [ ] **G2** Giá đã mở lại trang nguồn kiểm tra **trong ngày quay**, không dùng giá cũ quá 7 ngày
- [ ] **G2b** Máy còn hàng (E7440 hiện **HẾT HÀNG** — không quay)
- [ ] **G3** Có đúng 1 persona, đúng 1 CTA, không có tên đối thủ
- [ ] **G4** Không có con số nào chưa đo được (giờ pin / giây boot / FPS)
- [ ] **G4b** Có ít nhất 1 câu máy tự thú điểm yếu
- [ ] **G5** Chủ shop duyệt trước khi đăng

---

## 7. Nguồn tham chiếu
- Sản phẩm: `02_products/products.md`
- Persona P1: `03_customers/personas.md`
- Tone: `01_company/brand/tone-of-voice.md`
- Cấm hứa: `01_company/facts/UNVERIFIED.md`
- Khung video: `04_content/templates/tiktok.md`
- Gates: `10_gates/README.md`
