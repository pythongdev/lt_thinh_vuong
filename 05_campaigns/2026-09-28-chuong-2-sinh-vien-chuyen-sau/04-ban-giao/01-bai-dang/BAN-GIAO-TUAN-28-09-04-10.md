# Bàn giao Google Sheet — Chương 2 (sinh viên chuyên sâu), tuần 28/09 – 04/10/2026

> **Chiến dịch:** [Sinh viên: những câu chương 1 chưa trả lời](../../INDEX.md) · **Persona:** P1 (Sinh viên / mua máy đầu tiên)
> **Gộp lại theo khuôn lưới 9×8:** 2026-09-24 · **Nguồn:** 5 Content Package trong [01-drafts/](../../01-drafts/)
> **Sheet đích:** https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc

## 🟢 TRẠNG THÁI

| | |
|---|---|
| Gate 0–5 | ✅ đã chạy trên cả 5 bài đăng (xem header từng file draft) · Gate 0 của Bài 3 mang ghi chú lệch, xem mục cuối |
| **Gate 6 — người ký** | ✅ người dùng nói "ok" trong chat **2026-09-24** |
| Bản đẩy lên sheet | ✅ sinh 2026-09-24: `day-len-sheet.gs` · `SHEET-TUAN-28-09-04-10-luoi.csv` · `SHEET-TUAN-28-09-04-10-ngang.csv` |
| Nhánh reel | ✅ [02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md](../02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md) — 5 kịch bản, 30 cảnh |
| Đã chạm sheet chưa | ❌ **chưa** — connector Google Drive chỉ đọc, không ghi được ô. Người phụ trách chạy `day-len-sheet.gs` hoặc nhập CSV |

> ⚠️ **Khuôn đã đổi so với bản 2026-09-21.** Tab đang chạy không còn dòng `STT` / `TITLE` /
> `DATE & TIME`; lưới là **9 dòng × 8 cột**, Thứ 2 ở cột B. Bản cũ (khuôn 10 trường) đã bị thay
> bằng file này. Khuôn chuẩn: [`04_content/templates/post-template.md`](../../../../04_content/templates/post-template.md).

Sinh lại 3 file máy đọc sau khi sửa file này:
`python3 tools/ban_giao_to_sheet.py 05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/01-bai-dang/BAN-GIAO-TUAN-28-09-04-10.md`

---

## ⛔ CHẶN CỨNG TRƯỚC KHI ĐĂNG — 3 trong 5 bài đăng và 3 trong 5 reel

Danh sách 36 máy (`02_products/36-may-duoc-viet-2026-09-22.csv`, verified 2026-09-22)
**hết hạn 2026-09-29**. Sáu nội dung dưới đây đăng sau ngày đó và đều nêu tên máy kèm giá:

| Nội dung | Ngày | Việc phải làm trước khi đăng |
|---|---|---|
| Reel "Dưới 10 triệu vẫn có 16GB RAM" · post "Chưa tới 10 triệu" | 30-09 | chạy `python3 tools/collection_fetch.py`, đối chiếu lại giá · kho · `warranty_tag` 3 máy |
| Reel "700 nghìn đó mua được gì" · post "256GB hay 512GB" | 01-10 | như trên cho 4 máy — **nhạy nhất với giá**, cả lập luận dựa trên khoảng chênh ~700.000đ |
| Reel "Hai mươi giây soi điểm chết" · post "Latitude 7400 2in1" | 02-10 | như trên + **gọi 0928939666 sáng hôm đăng** xác nhận máy còn hay hết (luật #12, #17) |

Hai bài Thứ 2 và Thứ 3 (và 2 reel cùng ngày) **không nêu tên máy, không có giá** → đăng được ngay.

---

## 0. Lịch tuần — 10 nội dung

| # | Ngày | Giờ | Dạng | Tên bài | Tuyến ND | Rủi ro |
|---|---|---|---|---|---|---|
| 1 | T2 28-09 | 12:15 | Reels | Ba câu bố mẹ hay hỏi | Giáo dục | thấp |
| 2 | T2 28-09 | 20:30 | post | 3 câu bố mẹ hay hỏi | Giáo dục | thấp |
| 3 | T3 29-09 | 12:15 | Reels | Đo bằng cái balo của bạn | Giáo dục | thấp |
| 4 | T3 29-09 | 20:30 | post | Chọn cỡ màn 13 / 14 / 15,6 inch | Giáo dục | thấp |
| 5 | T4 30-09 | 12:15 | Reels | Dưới 10 triệu vẫn có 16GB RAM | Sản phẩm | vừa — **có giá** |
| 6 | T4 30-09 | 20:30 | post | Chưa tới 10 triệu được máy gì | Sản phẩm | vừa — **có giá** |
| 7 | T5 01-10 | 12:15 | Reels | 700 nghìn đó mua được gì | Sản phẩm | vừa — **có giá** |
| 8 | T5 01-10 | 20:30 | post | 256GB hay 512GB | Sản phẩm | vừa — **có giá** |
| 9 | T6 02-10 | 12:15 | Reels | Hai mươi giây soi điểm chết | Trust SP / Review SP | vừa — **có giá** |
| 10 | T6 02-10 | 20:30 | post | Latitude 7400 2in1 — 3 điều nên biết | Trust SP / Review SP | vừa — **có giá** |

**T7 03/10 và CN 04/10:** không đăng nội dung mới — trực bình luận và tin nhắn của 10 nội dung trên.

Hai khung giờ 12:15 và 20:30 → lưới tuần tách thành **2 khối**, khung giờ nằm ở ô A dòng thứ
(`post-template.md` mục 1). Bốn trục P / J / O / CP, nguồn fact, bình luận đầu và kịch bản
trả lời inbox **chỉ sống ở file này và ở `01-drafts/`**, không đẩy lên sheet.

---

## 1 · Thứ 2 28-09 · 12:15 — Reels "Ba câu bố mẹ hay hỏi"

📄 Bản đầy đủ: [2026-09-28-post-01-ba-cau-bo-me-hay-hoi.md](../../01-drafts/2026-09-28-post-01-ba-cau-bo-me-hay-hoi.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 28-09 (Thứ 2) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Giáo dục |
| **Tên bài (nội bộ)** | Ba câu bố mẹ hay hỏi |
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
Bố mẹ không phản đối chiếc máy. Bố mẹ phản đối chữ "cũ".

Ba câu bố mẹ hay hỏi nhất khi nghe con nói muốn mua laptop cũ — và cả ba đều là câu hỏi đúng, nên đừng gạt đi.

❓ "Người ta dùng hỏng rồi mới bán?"
Câu này không cãi được bằng lời. Nên đừng cãi — đổi sang thứ kiểm được: bật máy xem cấu hình thật, mở ảnh trắng rồi ảnh đen kín màn để soi màn hình, gõ hết một lượt bàn phím, cắm thử từng cổng. Làm ngay tại quầy, trước khi trả tiền.

❓ "Hỏng thì ai sửa?"
Đây là câu quan trọng nhất. Hỏi bốn câu, và bắt người bán nói thành số: bảo hành bao lâu, bảo hành những bộ phận nào, pin được bảo hành riêng bao lâu, đổi trả trong bao nhiêu ngày.
Bên mình trả lời sẵn: máy cũ và likenew bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng; trong 15 ngày đổi sang máy khác miễn phí.

❓ "Sao không mua mới cho chắc?"
Mua mới cũng là một lựa chọn đúng. Cùng một số tiền, máy mới cho bạn đời chip mới hơn và bảo hành dài hơn; máy doanh nhân đã qua sử dụng thường cho bạn nhiều RAM và ổ cứng lớn hơn. Bên mình bán máy cũ nên câu này có lợi cho mình — bạn cứ trừ hao mà nghe.

Cách gọn nhất để bố mẹ yên tâm: đi cùng nhau đến xem máy. Mười phút ở cửa hàng nói được nhiều hơn một buổi tranh luận ở nhà.

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
- Quay dọc 9:16 · 1080×1920 · quay tại quầy tư vấn 71 Thiên Hiền. Thời lượng 38 giây, 6 cảnh.
- Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB1.
- Máy quay: một máy bất kỳ trong danh sách 36 máy được viết. Quầy kê hai ghế cùng phía bàn, dựng đúng cảnh phụ huynh đi cùng con.
- Cảnh chính là cảnh 4 — bốn câu phải hỏi hiện thành chữ trên màn, dành nhiều đất nhất.
- Voice thật, phụ đề bắt buộc. Ánh sáng đều, không đèn màu, không hiệu ứng chuyển cảnh.
- ⛔ Không ghi giá · không ghi tên máy lên video · không dựng cảnh người bán chỉ tay thuyết phục · không nói hộ suy nghĩ của bố mẹ theo kiểu chê bai.

---

## 2 · Thứ 2 28-09 · 20:30 — post "3 câu bố mẹ hay hỏi"

📄 Bản đầy đủ: [2026-09-28-post-01-ba-cau-bo-me-hay-hoi.md](../../01-drafts/2026-09-28-post-01-ba-cau-bo-me-hay-hoi.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 28-09 (Thứ 2) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Giáo dục |
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
Bạn chốt được máy rồi. Giờ mới đến phần khó: thuyết phục bố mẹ.

Ba câu bố mẹ hay hỏi nhất. Cả ba đều là câu hỏi đúng, nên đừng gạt đi — trả lời thẳng thì dễ hơn nhiều.

❓ "Người ta dùng hỏng rồi mới bán, con mua về làm gì?"

Không ai chứng minh được điều ngược lại bằng lời nói. Nên đừng tranh luận — hãy đổi sang chuyện kiểm được:

Bật máy lên xem cấu hình thật, mở ảnh trắng rồi ảnh đen kín màn để soi màn hình, gõ thử hết một lượt bàn phím, cắm thử từng cổng. Làm ngay tại quầy, trước khi trả tiền.

Máy tốt thì chịu được soi. Máy không tốt thì lộ ra ở phút thứ ba.

❓ "Hỏng thì ai sửa? Mua mới có bảo hành chứ cũ thì ai lo?"

Đây là câu quan trọng nhất, và nó có câu trả lời cụ thể được — nếu bạn hỏi cho đủ.

Hỏi bốn câu, và bắt người bán nói thành số:
• Bảo hành bao lâu?
• Bảo hành những bộ phận nào?
• Pin được bảo hành riêng bao lâu?
• Đổi trả trong bao nhiêu ngày?

Bên mình trả lời sẵn: máy cũ và likenew bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng; trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows — miễn phí trọn đời.

Chỗ nào trả lời vòng vo bốn câu này thì đó mới là chỗ đáng lo, không phải chữ "cũ".

❓ "Sao không mua mới cho chắc?"

Mua mới cũng là một lựa chọn đúng. Chỉ cần biết mình đang đổi gì lấy gì:

Cùng một số tiền, máy mới cho bạn đời chip mới hơn và thời gian bảo hành dài hơn. Máy doanh nhân đã qua sử dụng cùng tầm tiền thường cho bạn nhiều RAM và ổ cứng lớn hơn.

Không có bên nào thắng hẳn. Có bên nào phù hợp hơn với việc bạn sắp làm hằng ngày thôi.

Bên mình bán máy cũ, nên câu trên là câu có lợi cho mình — mình nói trước để bạn cứ trừ hao mà đọc.

Cách gọn nhất để bố mẹ yên tâm: đi cùng nhau đến xem máy. Nhìn thấy cửa hàng, bật thử máy, hỏi trực tiếp — mười phút ở đó nói được nhiều hơn một buổi tranh luận ở nhà.

👉 Gửi bài này cho bố mẹ, hoặc lưu lại để hôm nói chuyện có cái mở ra.
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
Bốn câu nên hỏi ở bất kỳ cửa hàng nào, kể cả bên mình — chép lại cho dễ mang đi:

1. Bảo hành bao lâu?
2. Bảo hành những bộ phận nào?
3. Pin được bảo hành riêng bao lâu?
4. Đổi trả trong bao nhiêu ngày?

Bên mình: 6 tháng cho bo mạch – màn hình – bàn phím (máy cũ, likenew) · pin 3 tháng · 15 ngày đổi sang máy khác miễn phí · vệ sinh, tra keo tản nhiệt, cài Windows miễn phí trọn đời.

📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội
☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Tỉ lệ 1:1 · **1 ảnh** · 1080×1080px, dưới 1MB.

Bối cảnh: **quầy tư vấn thật ở 71 Thiên Hiền**, có hai người ngồi cùng phía bàn — dựng đúng cảnh
phụ huynh đi cùng con đến xem máy. Máy mở nắp trên bàn, thấy rõ màn hình đang bật.
Nền là cửa hàng thật, **không phông dựng, không ảnh stock**.

Text trên ảnh, tối đa 3 dòng:
`3 CÂU BỐ MẸ HAY HỎI` / `khi bạn nói muốn mua laptop cũ` / `và cách trả lời`

Logo Thịnh Vượng góc trái trên.

⛔ Không ghi giá lên ảnh. Không ghi tên máy. Không ghi "ưu đãi", "giảm giá".
⛔ Không dựng cảnh người bán đang chỉ tay thuyết phục — bài này không bán.

---

## 3 · Thứ 3 29-09 · 12:15 — Reels "Đo bằng cái balo của bạn"

📄 Bản đầy đủ: [2026-09-29-post-02-chon-co-man-13-14-15.md](../../01-drafts/2026-09-29-post-02-chon-co-man-13-14-15.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 29-09 (Thứ 3) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Giáo dục |
| **Tên bài (nội bộ)** | Đo bằng cái balo của bạn |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J2 (Bắt đầu quan tâm laptop cũ) |
| **Objective** | O2 (Hiểu vấn đề) |
| **Pillar** | CP02 (Kiến thức) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Comment ngành bạn học + một tuần mang máy đi mấy buổi |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Cái bàn gấp trong giảng đường rộng chừng một quyển vở. Bạn đã tính chuyện đó chưa?

Màn to hơn không phải màn tốt hơn — nó là màn cần nhiều chỗ hơn.

📐 13 – 13,3 inch: đặt vừa bàn gấp giảng đường, bỏ vừa những chiếc balo nhỏ. Đổi lại, xếp hai cửa sổ cạnh nhau để vừa đọc vừa gõ sẽ chật.

📐 14 inch: cỡ ở giữa, và là cỡ phổ biến nhất ở dòng máy doanh nhân. Vẫn bỏ balo đi học hằng ngày, mà hai cửa sổ cạnh nhau thì đỡ chật hơn 13 inch.

📐 15,6 inch: nhìn bảng biểu và làm slide dễ nhất vì có nhiều chỗ nhất. Đổi lại, chiếm nhiều mặt bàn hơn, và không phải chiếc balo nào cũng bỏ vừa.

Hai câu tự hỏi là ra: một tuần bạn mang máy ra khỏi nhà mấy buổi, và bạn có hay mở hai cửa sổ cạnh nhau không.

Hàng bên mình đang có cả ba cỡ, nên mình không lái bạn về cỡ nào. Chọn sai cỡ thì máy cấu hình tốt cỡ nào bạn cũng để nó ở nhà.

Một mẹo cuối: hôm ghé cửa hàng, mang theo đúng cái balo bạn đang dùng. Thử cho máy vào rồi kéo khoá — chuyện đó không đoán được qua ảnh.

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
- Quay dọc 9:16 · 1080×1920 · quay tại 71 Thiên Hiền. Thời lượng 34 giây, 6 cảnh.
- Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB2.
- Máy quay: ba máy cỡ 13,3 inch · 14 inch · 15,6 inch trong danh sách 36 máy, đặt cùng một mặt bàn, cùng khung, cùng khoảng cách ống kính — không ghép hình.
- Đạo cụ bắt buộc: một quyển vở A4 làm mốc so sánh và một chiếc balo đi học thật để quay cảnh cho máy vào kéo khoá.
- Voice thật, phụ đề bắt buộc.
- ⛔ Không ghi giá · không ghi tên máy · **không nói và không ghi cân nặng máy** (shop chưa cân máy nào — `UNVERIFIED.md` #14).

---

## 4 · Thứ 3 29-09 · 20:30 — post "Chọn cỡ màn 13 / 14 / 15,6 inch"

📄 Bản đầy đủ: [2026-09-29-post-02-chon-co-man-13-14-15.md](../../01-drafts/2026-09-29-post-02-chon-co-man-13-14-15.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 29-09 (Thứ 3) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Giáo dục |
| **Tên bài (nội bộ)** | Chọn cỡ màn 13 / 14 / 15,6 inch |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J2 (Bắt đầu quan tâm laptop cũ) |
| **Objective** | O2 (Hiểu vấn đề) |
| **Pillar** | CP02 (Kiến thức) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* |
| **CTA** | Comment ngành bạn học + một tuần mang máy đi mấy buổi |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Trước khi so cấu hình, có một thứ quyết định bạn có mang máy đi học thật hay để nó ở nhà: cỡ màn hình.

Cái bàn gấp trong giảng đường rộng chừng một quyển vở. Cái bàn trong quán cà phê còn phải chia cho cốc nước. Máy to hơn không phải máy tốt hơn — nó là máy cần nhiều chỗ hơn.

Ba cỡ thường gặp, và ai nên chọn cỡ nào:

📐 13 – 13,3 INCH
Đặt vừa lên bàn gấp trong giảng đường, bỏ vừa những chiếc balo nhỏ.
Đánh đổi: ở cùng độ phân giải Full HD, màn nhỏ hơn thì chữ và bảng biểu hiện ra nhỏ hơn. Xếp hai cửa sổ cạnh nhau để vừa đọc tài liệu vừa gõ sẽ chật.
Hợp với: bạn di chuyển nhiều, học ở giảng đường và thư viện cả ngày, chủ yếu gõ văn bản và đọc.

📐 14 INCH
Cỡ ở giữa, và là cỡ phổ biến nhất ở dòng máy doanh nhân.
Vẫn bỏ được balo đi học hằng ngày, mà xếp hai cửa sổ cạnh nhau thì đỡ chật hơn 13 inch.
Hợp với: phần lớn các bạn — học khối kinh tế, văn phòng, làm slide, Excel nhiều sheet.

📐 15,6 INCH
Nhìn bảng biểu và làm slide dễ nhất trong ba cỡ, vì có nhiều chỗ nhất.
Đánh đổi: chiếm nhiều mặt bàn hơn, và không phải chiếc balo nào cũng bỏ vừa — đo trước cái balo bạn đang dùng.
Hợp với: bạn học ở nhà hoặc ở phòng trọ là chính, mỗi tuần chỉ mang máy đi vài buổi.

Cách chọn gọn nhất, hỏi mình hai câu:

1️⃣ Một tuần bạn mang máy ra khỏi nhà bao nhiêu buổi?
Nhiều buổi thì nghiêng về 13 – 14 inch. Ít buổi thì 15,6 inch không thành vấn đề.

2️⃣ Bạn có thường xuyên mở hai cửa sổ cạnh nhau không?
Có thì đừng xuống 13 inch. Không thì 13 inch tiết kiệm chỗ hơn hẳn.

Hàng bên mình đang có cả ba cỡ, nên bài này mình không lái bạn về cỡ nào. Chọn sai cỡ thì máy cấu hình tốt cỡ nào bạn cũng để nó ở nhà.

Một mẹo cuối: hôm ghé cửa hàng, mang theo đúng cái balo bạn đang dùng. Thử cho máy vào rồi kéo khoá. Chuyện đó không đoán được qua ảnh.

👉 Comment ngành bạn học + một tuần mang máy đi mấy buổi, mình nói nên nhắm cỡ nào.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #kinhnghiemmualaptop #chonlaptop #laptopthinhvuong
```

**First comment** *(sheet không có trường này — người đăng tự chép xuống bình luận đầu)*:
```
Hai cách tự đo trước khi ghé cửa hàng — làm ở nhà được, không cần máy:

📏 Đo balo: mở balo ra, đo chiều rộng lòng trong. Máy 13,3 inch thường cần khoảng 31–32cm, máy 14 inch khoảng 32–33cm, máy 15,6 inch khoảng 36–37cm. Con số này khác nhau theo từng dòng máy, nên hôm ghé cứ cho máy vào balo thử — đó là cách chắc nhất.

📏 Thử cỡ chữ: mở một file Word có bảng biểu trên máy bạn đang dùng, rồi xếp hai cửa sổ cạnh nhau. Nếu thấy chật thì đừng xuống 13 inch.

Ghé xem tận tay cả ba cỡ:
📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội
☎️ 0928939666 (8h–20h30)
```

**BRIEF ẢNH:**
Tỉ lệ 1:1 · **1 ảnh** · 1080×1080px, dưới 1MB. Ảnh máy thật tại shop, **không ảnh stock**.

Bố cục: **ba máy mở nắp xếp cạnh nhau trên cùng một mặt bàn**, theo thứ tự nhỏ → to
(13.3 inch · 14 inch · 15,6 inch), chụp chính diện từ trên xuống một góc nhẹ để thấy rõ
**chênh lệch kích cỡ thật**. Đây là toàn bộ giá trị của ảnh — ba máy phải cùng khung, cùng khoảng
cách ống kính, không ghép ảnh.

Mẹo làm chênh lệch dễ thấy: đặt **một quyển vở A4 cùng trong khung** làm mốc so sánh.

Text trên ảnh, tối đa 3 dòng:
`13 · 14 · 15,6 INCH` / `Cỡ nào mang đi học được?` / `Đo bằng cái balo của bạn`

Logo Thịnh Vượng góc trái trên. Nền trung tính, đủ sáng.

⛔ Không ghi giá. Không ghi tên máy trên ảnh — bài này không bán máy nào.
⛔ **Không ghi cân nặng máy lên ảnh** — shop chưa cân máy nào.
⛔ Không ghi "ưu đãi", "giảm giá", "số lượng có hạn".

---

## 5 · Thứ 4 30-09 · 12:15 — Reels "Dưới 10 triệu vẫn có 16GB RAM"

📄 Bản đầy đủ: [2026-09-30-post-03-chua-toi-10-trieu.md](../../01-drafts/2026-09-30-post-03-chua-toi-10-trieu.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 30-09 (Thứ 4) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Sản phẩm |
| **Tên bài (nội bộ)** | Dưới 10 triệu vẫn có 16GB RAM |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP01 (Tư vấn mua) |
| **Sản phẩm nêu tên** | Latitude 7390 2in1 (8.290.000đ) · Latitude 7420 vỏ carbon (9.380.000đ) · Latitude 5310 2in1 (9.880.000đ) |
| **CTA** | Comment ngân sách + ngành đang học |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Chưa tới 10 triệu. Nhiều bạn nghĩ tầm này là phải chịu RAM 8GB.

Nói thẳng trước, kẻo xem hết lại thấy bên mình giấu: hạ ngân sách xuống dưới 10 triệu, thứ bạn phải nhường là ĐỜI CHIP và DUNG LƯỢNG Ổ CỨNG. Thứ bạn giữ được là RAM.

🔹 Dell Latitude 7390 2in1 — 8.290.000đ
i5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ
Ít tiền nhất trong ba chiếc mà vẫn đủ 16GB RAM. Điểm yếu: đời chip cũ nhất, ổ 256GB.

🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ
i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD
Đời chip mới nhất và màn rộng nhất. Điểm yếu: chiếc này KHÔNG có màn cảm ứng, không xoay gập được. Ổ vẫn 256GB.

🔹 Dell Latitude 5310 2in1 — 9.880.000đ
i5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch cảm ứng, xoay gập 360 độ
Ổ cứng lớn nhất — gấp đôi hai chiếc kia. Điểm yếu: đắt nhất trong ba chiếc.

Cả ba đều là máy đã qua sử dụng, thuộc dòng doanh nhân của Dell. Bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Comment ngân sách chính xác của bạn + ngành đang học, mình gợi ý chiếc nào trong ba chiếc này.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Quay dọc 9:16 · 1080×1920 · quay tại 71 Thiên Hiền. Thời lượng 36 giây, 6 cảnh.
- Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB3.
- Máy quay: đúng ba máy Dell Latitude 7390 2in1 16GB · Latitude 7420 vỏ carbon · Latitude 5310 2in1, đặt cùng một mặt bàn.
- Giá chỉ hiện ở chữ trên màn, người nói không đọc giá.
- ⚠️ Sáng ngày quay gọi 0928939666 xác minh lại cả 3 giá và máy còn hay hết.
- ⛔ **Không quay chiếc 7420 vỏ carbon ở thế gập xoay hay chạm tay lên màn** — tên sản phẩm của máy này không có cảm ứng (luật #13).
- ⛔ Không nói "còn hàng" / "còn mấy máy" · không nói "giá tốt nhất" · không ghép ảnh máy lấy trên mạng.

---

## 6 · Thứ 4 30-09 · 20:30 — post "Chưa tới 10 triệu được máy gì"

📄 Bản đầy đủ: [2026-09-30-post-03-chua-toi-10-trieu.md](../../01-drafts/2026-09-30-post-03-chua-toi-10-trieu.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 30-09 (Thứ 4) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Sản phẩm |
| **Tên bài (nội bộ)** | Chưa tới 10 triệu được máy gì |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP01 (Tư vấn mua) |
| **Sản phẩm nêu tên** | Latitude 7390 2in1 (8.290.000đ) · Latitude 7420 vỏ carbon (9.380.000đ) · Latitude 5310 2in1 (9.880.000đ) |
| **CTA** | Comment ngân sách + ngành đang học |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
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

**First comment** *(sheet không có trường này — người đăng tự chép xuống bình luận đầu)*:
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

**BRIEF ẢNH:**
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

---

## 7 · Thứ 5 01-10 · 12:15 — Reels "700 nghìn đó mua được gì"

📄 Bản đầy đủ: [2026-10-01-post-04-256-hay-512.md](../../01-drafts/2026-10-01-post-04-256-hay-512.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 01-10 (Thứ 5) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Sản phẩm |
| **Tên bài (nội bộ)** | 700 nghìn đó mua được gì |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP03 (So sánh) |
| **Sản phẩm nêu tên** | Latitude 5300 2in1 bản 256GB (8.980.000đ) · bản 512GB (9.690.000đ) |
| **CTA** | Comment ngành bạn học, mình nói nên lấy bản nào |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Hai chiếc trong video giống hệt nhau. Cùng con chip, cùng 16GB RAM. Khác đúng một thứ: ổ cứng.

Dell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập
Bản ổ 256GB: 8.980.000đ
Bản ổ 512GB: 9.690.000đ
→ chênh 710.000đ

❌ KHI NÀO 256GB LÀ ĐỦ, ĐỪNG THÊM TIỀN
• Bạn để tài liệu trên Google Drive hoặc OneDrive, máy chỉ giữ bản đang làm.
• Bạn học khối kinh tế, văn phòng — chủ yếu Word, Excel, PowerPoint, học online.
• Ảnh và video bạn để trên điện thoại, không đổ vào máy.
• Bạn có sẵn một ổ cứng di động, hoặc sẵn sàng mua một cái sau này.

✅ KHI NÀO NÊN THÊM 700 NGHÌN
• Ngành bạn học phải cài phần mềm chuyên ngành nặng.
• Bạn quay và dựng video, kể cả chỉ để làm bài tập nhóm.
• Bạn tải phim, tải khoá học về xem offline.
• Bạn biết tính mình: không thích dọn file.

Và đây là phần quan trọng nhất: đừng tính là "thêm 700 nghìn để có thêm 256GB". Hãy tính xem 700 nghìn đó, nếu không dùng cho ổ cứng, bạn mua được gì cho việc học.

Một điều cần biết trước khi quyết: bên mình chưa kiểm khe cắm ổ cứng của từng máy, nên mình KHÔNG hứa là sau này nâng ổ lên được.

👉 Comment ngành bạn học, mình nói bạn nên lấy bản 256GB hay 512GB.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Quay dọc 9:16 · 1080×1920 · quay tại 71 Thiên Hiền. Thời lượng 33 giây, 6 cảnh.
- Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB4.
- Máy quay: hai chiếc Dell Latitude 5300 2in1 — bản ổ 256GB và bản ổ 512GB — đặt cạnh nhau trong cùng một khung.
- Điểm mạnh của hình là **hai máy trông giống hệt nhau**: đừng đổi góc máy quay giữa hai chiếc.
- Cảnh chính là cảnh 5 — tờ giấy ghi 700.000đ đặt giữa hai máy.
- ⚠️ Sáng ngày quay gọi 0928939666 xác minh lại cả 2 giá (bài mất lý lẽ nếu khoảng chênh đổi).
- ⛔ Không hứa nâng ổ cứng về sau · không nói "còn hàng" · không nói bản 512GB đáng mua hơn.

---

## 8 · Thứ 5 01-10 · 20:30 — post "256GB hay 512GB"

📄 Bản đầy đủ: [2026-10-01-post-04-256-hay-512.md](../../01-drafts/2026-10-01-post-04-256-hay-512.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 01-10 (Thứ 5) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Sản phẩm |
| **Tên bài (nội bộ)** | 256GB hay 512GB |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J3 (Đang so sánh) |
| **Objective** | O4 (Cân nhắc mua) |
| **Pillar** | CP03 (So sánh) |
| **Sản phẩm nêu tên** | Latitude 5300 2in1 (256GB · 512GB) · Latitude 9410 2in1 (256GB · 512GB) |
| **CTA** | Comment ngành bạn học, mình nói nên lấy bản nào |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Cùng một chiếc máy, cùng con chip, cùng 16GB RAM — bản ổ 512GB đắt hơn bản 256GB khoảng 700 nghìn.

Đáng không? Mình trả lời cả hai chiều, và nói chiều "đừng thêm tiền" trước.

Trước tiên, đây là hai cặp máy thật đang bán bên mình, để bạn thấy khoảng chênh này không phải mình bịa ra:

🔹 Dell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập
Bản ổ 256GB: 8.980.000đ
Bản ổ 512GB: 9.690.000đ
→ chênh 710.000đ

🔹 Dell Latitude 9410 2in1 — i7-10610U · 16GB · màn 14 inch FHD
Bản ổ 256GB: 12.980.000đ
Bản ổ 512GB: 13.680.000đ
→ chênh 700.000đ

Hai cặp ở hai tầm tiền cách nhau 4 triệu mà cùng ra khoảng 700 nghìn. Nên con số này khá ổn định để bạn lấy làm mốc.

❌ KHI NÀO 256GB LÀ ĐỦ, ĐỪNG THÊM TIỀN

• Bạn để tài liệu trên Google Drive hoặc OneDrive, máy chỉ giữ bản đang làm.
• Bạn học khối kinh tế, văn phòng — chủ yếu Word, Excel, PowerPoint, học online.
• Ảnh và video bạn để trên điện thoại, không đổ vào máy.
• Bạn có sẵn một ổ cứng di động, hoặc sẵn sàng mua một cái sau này.

Trong cả bốn trường hợp trên, 700 nghìn đó nên để dành cho thứ khác.

✅ KHI NÀO NÊN THÊM 700 NGHÌN

• Ngành bạn học phải cài phần mềm chuyên ngành nặng — kỹ thuật, kiến trúc, thiết kế, dựng phim.
• Bạn quay và dựng video, kể cả chỉ để làm bài tập nhóm.
• Bạn tải phim, tải khoá học về xem offline.
• Bạn biết tính mình: không thích dọn file, không thích nhìn thanh dung lượng đỏ.

Gạch đầu dòng cuối là gạch thật nhất. Ổ cứng chật không làm máy hỏng — nó làm bạn mệt. Mỗi lần cài thêm một thứ lại phải xoá một thứ khác.

⚠️ VÀ ĐÂY LÀ PHẦN QUAN TRỌNG NHẤT

Đừng tính là "thêm 700 nghìn để có thêm 256GB". Hãy tính là: 700 nghìn đó, nếu không dùng cho ổ cứng, bạn mua được gì cho việc học?

Đó mới là câu so sánh đúng. Và câu trả lời khác nhau với từng người — nên không có đáp án chung.

Một điều cần biết trước khi quyết: bên mình chưa kiểm khe cắm ổ cứng của từng máy, nên mình KHÔNG hứa là sau này nâng ổ lên được. Cứ coi như dung lượng bạn chọn hôm nay là dung lượng bạn sống cùng.

Cả bốn máy trên đều là máy đã qua sử dụng. Bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.

👉 Comment ngành bạn học, mình nói bạn nên lấy bản 256GB hay 512GB.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong
```

**First comment** *(sheet không có trường này — người đăng tự chép xuống bình luận đầu)*:
```
📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)

Link bốn máy trong bài, xếp theo cặp:

CẶP LATITUDE 5300 2IN1 — i7-8665U · 16GB · 13,3 inch FHD cảm ứng
• Bản 256GB — 8.980.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-256gb-13-3-inch-fhd-cam-ung
• Bản 512GB — 9.690.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-512gb-13-3-inch-fhd-cam-ung

CẶP LATITUDE 9410 2IN1 — i7-10610U · 16GB · 14 inch FHD
• Bản 256GB — 12.980.000đ
https://laptoptv.vn/dell-latitude-9410-2in1-core-i7-10610u-16gb-256gb-man-hinh-14-inch-fhd
• Bản 512GB — 13.680.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-9410-2in1-core-i7-10610u-16gb-512gb-14-inch-fhd

Cách tự kiểm trước khi quyết: mở This PC trên máy bạn đang dùng, xem ổ C đang chiếm bao nhiêu. Đó là con số thật nhất, hơn mọi lời tư vấn.
```

**BRIEF ẢNH:**
Tỉ lệ 1:1 · **2 ảnh**, 1080×1080px, dưới 1MB mỗi ảnh. Ảnh máy thật tại shop, **không ảnh stock**.

**Ảnh 1 — cặp Latitude 5300 2in1.** Hai máy cùng dòng đặt cạnh nhau, mở nắp, **cùng một khung**.
Điểm mạnh của ảnh: hai máy **trông giống nhau hoàn toàn** — đó chính là thông điệp.
Text: `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 710.000đ`

**Ảnh 2 — cặp Latitude 9410 2in1.** Cùng bố cục.
Text: `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 700.000đ`

Nếu shop không xếp được hai máy cùng dòng cạnh nhau: chụp **một máy**, kèm ảnh chụp màn hình cửa sổ
dung lượng ổ đĩa của bản 256GB và bản 512GB đặt cạnh nhau. Vẫn giữ được ý.

Logo Thịnh Vượng góc trái trên. Nền trung tính thống nhất cả hai ảnh.

⚠️ **Cặp Latitude 9410 không được chụp ở thế cảm ứng** (không chạm ngón tay lên màn, không cảnh
vẽ/viết trên màn) — tên sản phẩm của cả hai bản 9410 **không ghi "Cảm ứng"** (xem mục 12).

⛔ Không ghi "còn X máy", "sắp hết", "giảm giá", "ưu đãi".
⛔ Không ghi con số dung lượng trống còn lại sau khi cài Windows — shop chưa đo.

---

## 9 · Thứ 6 02-10 · 12:15 — Reels "Hai mươi giây soi điểm chết"

📄 Bản đầy đủ: [2026-10-02-post-05-latitude-7400-2in1.md](../../01-drafts/2026-10-02-post-05-latitude-7400-2in1.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 02-10 (Thứ 6) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Trust SP / Review SP |
| **Tên bài (nội bộ)** | Hai mươi giây soi điểm chết |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J4 (Đã inbox / gọi / ghé shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP05 (Đánh giá sản phẩm) |
| **Sản phẩm nêu tên** | Latitude 7400 2in1 i7-8665U (10.680.000đ) |
| **CTA** | Nhắn tin mình kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Màn hình thì có bảo hành. Nhưng ĐIỂM CHẾT trên màn thì không — bên mình ghi rõ trong chính sách.

Nên trước khi trả tiền, bạn phải tự soi. Mất đúng 20 giây:

Mở một ảnh trắng kín màn hình. Rồi mở một ảnh đen kín màn hình. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.

Máy xoay gập thì soi thêm hai thứ:
• Xoay màn chậm hết một vòng 360 độ, nghe xem có tiếng lạ không. Thả tay ở nửa đường — màn phải đứng yên, trôi xuống là bản lề đã rơ.
• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem có chỗ nào mất nét không.

Chiếc trong video: DELL LATITUDE 7400 2IN1 — 10.680.000đ
i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ. Máy likenew, dòng doanh nhân của Dell.

Bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows — miễn phí trọn đời.

Soi cửa hàng nào cũng được. Soi bên mình cũng được. Kiểm kỹ đi, không ai giục bạn đâu.

👉 Nhắn tin mình kiểm tra máy còn không.
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**BRIEF ẢNH (brief quay):**
- Quay dọc 9:16 · 1080×1920 · quay tại quầy 71 Thiên Hiền. Thời lượng 36 giây, 6 cảnh.
- Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB5.
- Máy quay: Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB.
- Phòng tắt bớt đèn, không để đèn trần hắt lên mặt kính màn. Quay màn chính diện tránh vân moiré.
- Cảnh 4: sau khi thả tay khỏi màn phải giữ khung đủ 3 giây — cắt sớm là hỏng cảnh chứng minh.
- ⚠️ Sáng ngày quay gọi 0928939666 xác minh giá và máy còn hay hết.
- ⛔ Không dàn dựng máy có điểm chết rồi quay · không chèn ảnh điểm chết lấy trên mạng · không nói "còn hàng" · không hứa bảo hành điểm chết. Màn sạch thì nói rõ "màn này sạch".

---

## 10 · Thứ 6 02-10 · 20:30 — post "Latitude 7400 2in1 — 3 điều nên biết"

📄 Bản đầy đủ: [2026-10-02-post-05-latitude-7400-2in1.md](../../01-drafts/2026-10-02-post-05-latitude-7400-2in1.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 02-10 (Thứ 6) · 20:30 |
| **ĐỊNH DẠNG** | post |
| **TUYẾN ND** | Trust SP / Review SP |
| **Tên bài (nội bộ)** | Latitude 7400 2in1 — 3 điều nên biết |
| **Persona** | P1 (Sinh viên / mua máy đầu tiên) |
| **Journey** | J4 (Đã inbox / gọi / ghé shop) |
| **Objective** | O5 (Tạo lead / đơn) |
| **Pillar** | CP05 (Đánh giá sản phẩm) |
| **Sản phẩm nêu tên** | Latitude 7400 2in1 i7-8665U (10.680.000đ) |
| **CTA** | Nhắn tin mình kiểm tra máy còn không |
| **CONTENT** | ↓ khối dưới |
| **BRIEF ẢNH** | ↓ khối dưới |
| **LINK ẢNH/ KB** | *(để trống — chưa có ảnh)* |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |

**CONTENT:**
```
Chiếc này bên mình có sẵn nhiều nhất trong nhóm máy xoay gập. Nên thay vì kể ưu điểm, mình nói ba điều nên biết trước khi xuống tiền — trong đó có một điểm yếu và một giới hạn của bảo hành.

DELL LATITUDE 7400 2IN1
i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ
Máy likenew, dòng doanh nhân của Dell.
Giá 10.680.000đ

1️⃣ ĐỜI CHIP LÀ CHỖ DỞ NHẤT — MÌNH NÓI TRƯỚC

Con chip của chiếc này thuộc đời cũ hơn những máy xoay gập khác bên mình đang có ở tầm 11–15 triệu. Đây là chỗ bạn nhường để lấy được 16GB RAM và ổ 512GB ở tầm 10 triệu.

Nếu bạn học ngành phải chạy phần mềm nặng, hoặc bạn muốn máy đời mới nhất trong tầm tiền, thì chiếc này không phải chiếc của bạn — mình nói thẳng như vậy.

Còn nếu bạn dùng Word, Excel, PowerPoint, học online, mở nhiều tab cùng lúc, thì 16GB RAM và ổ 512GB là hai thứ bạn chạm vào mỗi ngày, còn đời chip thì không.

2️⃣ XOAY GẬP KHÔNG PHẢI ĐỂ CHO ĐẸP — NHƯNG CŨNG KHÔNG PHẢI AI CŨNG CẦN

Màn hình lật hẳn 360 độ ra sau thành mặt phẳng. Ba việc nó làm được thật:

• Đặt lên đùi trong giảng đường, đọc tài liệu, lật trang bằng ngón tay, không vướng bàn phím.
• Dựng hình chữ A trên bàn chật — quán cà phê, thư viện — vẫn xem video và họp online được.
• Zoom bảng Excel bằng hai ngón như dùng điện thoại.

Nói thật: nếu bạn chỉ gõ văn bản và chưa bao giờ thấy thiếu màn cảm ứng, thì đây không phải lý do để bạn chọn máy này. Hãy chọn nó vì RAM và ổ cứng.

Còn nếu bạn hay ghi chú, hay vẽ sơ đồ — thì đến ngồi thử. Máy không kèm bút cảm ứng, bạn dùng ngón tay.

3️⃣ ĐIỀU BẮT BUỘC SOI TẠI QUẦY — VÌ NÓ KHÔNG THUỘC DIỆN BẢO HÀNH

Phần này cửa hàng nào cũng ngại đăng. Mình đăng trước.

Bảo hành của bên mình gồm bo mạch, màn hình và bàn phím — 6 tháng. Pin 3 tháng.

Nhưng ĐIỂM CHẾT trên màn hình thì KHÔNG thuộc diện bảo hành.

Nghĩa là: màn hình có bảo hành, mà điểm chết thì không. Nên bạn phải tự soi, ngay tại quầy, trước khi trả tiền. Cách soi mất đúng 20 giây:

Mở một ảnh trắng kín màn hình. Rồi mở một ảnh đen kín màn hình. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.

Và vì đây là máy xoay gập, soi thêm hai thứ nữa:
• Xoay màn chậm hết một vòng 360 độ, nghe xem có tiếng lạ không. Thả tay ở nửa đường xem màn có tự trôi xuống không.
• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem có chỗ nào mất nét không.

Soi cửa hàng nào cũng được. Soi bên mình cũng được. Kiểm kỹ đi, không ai giục bạn đâu — và nếu về nhà đổi ý, bạn còn 15 ngày để đổi sang máy khác miễn phí.

ĐI KÈM MÁY
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

#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong
```

**First comment** *(sheet không có trường này — người đăng tự chép xuống bình luận đầu)*:
```
📍 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội — ☎️ 0928939666 (8h–20h30)

Dell Latitude 7400 2in1 · i7-8665U | 16GB | 512GB | 14 inch FHD cảm ứng — 10.680.000đ
https://laptoptv.vn/laptop-cu-dell-latitude-7400-2in1-cam-ung-core-i7-8665u-ram-16gb-ssd-512gb-intel-uhd-graphic-14inch-cam-ung

Ba thứ soi tại quầy, chép lại cho dễ mang đi:
1. Ảnh trắng kín màn → rồi ảnh đen kín màn. Soi điểm chết, vệt sọc, chỗ ám màu.
2. Xoay màn chậm hết 360 độ, nghe tiếng. Thả tay giữa đường xem màn có tự trôi.
3. Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn.

Soi ở đâu cũng dùng được ba bước này, không riêng bên mình.
```

**BRIEF ẢNH:**
Tỉ lệ 1:1 · **5 ảnh**, 1080×1080px, dưới 1MB mỗi ảnh. Ảnh máy thật chụp tại 71 Thiên Hiền,
**không ảnh stock, không ảnh marketing của hãng**.

| Ảnh | Nội dung | Text trên ảnh (tối đa 3 dòng) |
|---|---|---|
| 1 | Máy mở nắp, góc tổng thể, thấy rõ tình trạng vỏ | `DELL LATITUDE 7400 2IN1` / `16GB RAM · 512GB · 14 inch` / `Bảo hành 6 tháng` |
| 2 | Máy **gập phẳng 360 độ thành mặt bảng**, đặt trên đùi hoặc trên bàn | `Gập phẳng để đọc tài liệu` |
| 3 | Máy **dựng hình chữ A** trên một mặt bàn hẹp | `Bàn chật vẫn dùng được` |
| 4 | **Ảnh đen kín màn hình** đang bật trên máy — cảnh soi điểm chết | `Điểm chết KHÔNG thuộc diện bảo hành` / `Soi tại quầy, 20 giây` |
| 5 | Close-up bàn phím hoặc cạnh máy, đủ sáng | *(không cần text)* |

**Ảnh 4 là ảnh quan trọng nhất của bộ** — nó là thứ phân biệt bài này với mọi bài review khác.
Chụp thật, màn đang hiển thị ảnh đen toàn khung, phòng đủ sáng để thấy đây là màn đang bật.

⚠️ **Nếu máy có vết xước → cho thấy** (`04_content/formats/post.md`: đây là điểm tạo tin cậy).
⛔ **Không cho bút cảm ứng vào khung hình** — máy này không kèm bút (`policies.md` § quà tặng:
chỉ Inspiron 13-7391 bản **512GB** có bút).
⛔ **Không ghi giá lên ảnh** — giá chỉ nằm trong caption.
⛔ Không ghi "còn X máy", "sắp hết", "số lượng có hạn", "giảm giá", "ưu đãi".

---

## Ghi chú còn treo — người dùng cần chốt

| # | Việc | Phương án đang dùng |
|---|---|---|
| 1 | `personas.md` chốt P1 (Sinh viên / mua máy đầu tiên) = 10–15 triệu, nhưng `36-MAY-DUOC-VIET.md` (mới hơn) gán tầng 7–10 triệu cho P1 | Bài 3 và reel cùng ngày viết theo file mới hơn. Đề xuất sửa `personas.md` thành **P1 = 8–15 triệu**. Chưa sửa thì Gate 0 của Bài 3 ghi ⚠️ |
| 2 | Bảng quy đổi tuyến ND ở `fanpage-sheet.md` mục 2 **không có CP03 (So sánh)** và CP09 (Thị trường & công nghệ) | Nội dung số 7 và 8 là CP03 (So sánh) → xếp tạm vào **Sản phẩm** vì có nêu máy kèm giá |
| 3 | CP01 (Tư vấn mua) trong bảng quy đổi sang "Tương tác", nhưng chương 1 đã xếp bài CP01 vào "Sản phẩm" | Nội dung 5 và 6 theo tiền lệ chương 1 → **Sản phẩm**. Nên chốt một cách rồi sửa bảng |
| 4 | Số % khấu trừ khi trả lại lấy tiền (chương 1 câu 5) | Vẫn dùng phương án an toàn: không nêu số trong bài và comment công khai |

## Điều cả 10 nội dung đều không được viết

Trả góp · freeship · quà tặng (`UNVERIFIED.md` #2, #3, #9) · "còn hàng" / "còn X máy" (luật #12) ·
cân nặng máy (shop chưa cân máy nào) · tên đối thủ (luật #9) · "chính hãng" cho máy cũ ·
"rẻ nhất" / "tốt nhất" / "số 1" / "sốc" · bảo hành khác 6 tháng main-màn-phím và 3 tháng pin (luật #14) ·
hứa nâng cấp ổ cứng về sau · máy dưới 5 triệu (luật #16).
