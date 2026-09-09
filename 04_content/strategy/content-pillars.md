# Content Pillars — CP01 đến CP10

> **Lưu ý mã hiệu:** pillar dùng mã `CP01–CP10`. Persona dùng `P1–P5`.
> Không dùng "P01" cho pillar để tránh đọc nhầm với persona.

Mỗi content thuộc **đúng 1 pillar**. Pillar quyết định *nói về cái gì*;
objective quyết định *nói để làm gì*.

---

## CP01 — Laptop Buying Guide (Tư vấn mua)
Tư vấn theo ngân sách và nhu cầu.
- Ví dụ: *"5 triệu mua được laptop như thế nào?"*
- Persona: P1, P2, P5 · Objective: O2, O4 · Journey: J2–J3
- Nguồn fact: `02_products/products.md` (dải giá thật), `03_customers/personas.md`

## CP02 — Laptop Education (Kiến thức)
Giải thích khái niệm kỹ thuật bằng ngôn ngữ đời thường.
- Ví dụ: *"CPU thế hệ 6 và thế hệ 10 khác nhau ở đâu khi dùng thật?"*
- Persona: P1, P2 · Objective: O2 · Journey: J1–J2
- ⚠️ Không nêu con số hiệu năng nếu không có nguồn đo được.

## CP03 — Laptop Comparison (So sánh)
So sánh dòng máy / phân khúc, **không so sánh shop**.
- Ví dụ: *"Cùng tầm 4–5 triệu: máy 12.5" siêu gọn hay máy 14" màn rộng?"*
- Persona: P1, P2, P3 · Objective: O4 · Journey: J3
- ⛔ Cấm nêu tên đối thủ. Chỉ được nói "mặt bằng chung ngoài thị trường".

## CP04 — Laptop Testing (Quy trình kiểm tra)
Shop kiểm tra máy cũ như thế nào trước khi giao khách.
- Ví dụ: *"Một chiếc máy cũ được kiểm tra những gì trước khi lên kệ?"*
- Persona: mọi persona · Objective: O3 · Journey: J2–J3
- 🔴 **ĐANG KHOÁ:** quy trình test chưa được xác minh (`UNVERIFIED.md` #7, #12).
  Đây là pillar mạnh nhất của shop nhưng **chưa được phép viết** cho tới khi kỹ thuật cung cấp quy trình thật.

## CP05 — Product Review (Đánh giá sản phẩm)
Một máy cụ thể: hợp ai, không hợp ai.
- Ví dụ: *"Latitude 5470 hợp với ai và không hợp với ai?"*
- Persona: theo trường `persona` của sản phẩm · Objective: O4, O5 · Journey: J3–J4
- Bắt buộc: máy còn hàng, giá kiểm tra trong ngày đăng.
- Bắt buộc: nói cả điểm **không** hợp — đây là điểm tạo tin cậy.

## CP06 — Customer Story (Chuyện khách hàng)
Kể lại một ca tư vấn thật.
- Ví dụ: *"Bạn sinh viên có 6 triệu, cuối cùng chọn máy nào và vì sao?"*
- Persona: theo nhân vật trong chuyện · Objective: O3 · Journey: J3, J7
- ⛔ Chỉ kể chuyện **có thật**. Không dựng khách ảo. Không dùng ảnh khách khi chưa xin phép.
- ⚠️ Hiện chưa có kho case thật trong repo → cần ghi lại từ inbox/cửa hàng trước khi viết.

## CP07 — Behind The Business (Hậu trường)
Con người, cửa hàng, công việc hằng ngày.
- Ví dụ: *"Một ngày ở cửa hàng 71 Thiên Hiền."*
- Persona: mọi persona · Objective: O1, O3 · Journey: J0–J2
- Lợi thế thật: shop có **cửa hàng vật lý** — nhiều nơi bán online thuần không có.

## CP08 — Mistakes (Sai lầm khi mua)
Cảnh báo, phòng tránh rủi ro.
- Ví dụ: *"3 lỗi hay gặp khi mua laptop cũ lần đầu."*
- Persona: P1, P2 · Objective: O1, O2 · Journey: J0–J2
- Đây là pillar dễ lan nhất. Nhưng cấm hù dọa sai sự thật và cấm ám chỉ shop khác lừa đảo.

## CP09 — Market / Technology (Thị trường & công nghệ)
Thay đổi ngoài thị trường ảnh hưởng tới người mua máy cũ.
- Ví dụ: *"Windows 11 ảnh hưởng thế nào tới laptop đời cũ?"*
- Persona: P2, P4 · Objective: O2 · Journey: J1–J3
- ⚠️ Phải dẫn nguồn công khai kiểm chứng được, ghi `verified_at`.

## CP10 — Offer (Hàng & ưu đãi)
Máy đang có, giá, chương trình có thật.
- Ví dụ: *"Những máy dưới 7 triệu đang có tại shop."*
- Persona: theo sản phẩm · Objective: O5 · Journey: J4
- ⛔ Chỉ đăng khi tồn kho đã kiểm tra trong ngày. Không có chương trình thật → không viết "ưu đãi".

---

## Phân bổ đề xuất / tuần (7 bài)

| Pillar | Bài/tuần | Ghi chú |
|---|---|---|
| CP01 Buying Guide | 1 | Trục chính, hợp mùa tựu trường |
| CP02 Education | 1 | |
| CP03 Comparison | 1 | |
| CP04 Testing | 0 → 1 | Mở khoá ngay khi có quy trình test |
| CP05 Product Review | 1 | |
| CP06 Customer Story | 0 → 1 | Mở khoá khi có case thật |
| CP07 Behind Business | 0.5 | Xen kẽ |
| CP08 Mistakes | 1 | |
| CP09 Market/Tech | 0.5 | Xen kẽ |
| CP10 Offer | 1 | Không quá 1–2 bài/tuần |

Thay thế `content-rules.md` cũ (Product 40 / Educational 30 / Trust 20 / Promotion 10):
tỉ lệ cũ vẫn đúng về tinh thần, bảng trên là bản chi tiết hoá.
