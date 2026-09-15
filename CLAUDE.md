# Laptop Thịnh Vượng — AI Content System

## Bối cảnh
Đây là hệ thống hỗ trợ viết content cho **Laptop Thịnh Vượng** (laptoptv.vn) —
cửa hàng laptop cũ/likenew tại 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội.
Kênh chính: Facebook fanpage. Người dùng là người viết content của công ty.

⚠️ **TV = Thịnh Vượng**, không phải "Laptop TV" / tivi. Đừng viết sai tên thương hiệu.

## Quy tắc bất di bất dịch
1. **Không có fact → không viết.** Giá, cấu hình, bảo hành, tồn kho chỉ lấy từ file nguồn.
2. Nguồn chuẩn: `01_company/facts/` (công ty + chính sách), `02_products/products.md` (sản phẩm).
3. Máy cũ bảo hành **6 tháng** (main/màn/phím), pin **3 tháng**. Máy mới 12 tháng. Không viết khác.
4. Chưa xác minh trả góp / freeship / tồn kho → **không được hứa**. Xem `01_company/facts/UNVERIFIED.md`.
5. Mỗi bài nhắm **đúng 1 persona** (P1–P5) và **đúng 1 CTA**.
6. Mỗi bài phải khai báo **đúng 1 objective** (O1–O5), **1 journey stage** (J0–J7), **1 pillar** (CP01–CP10).
7. Mọi bài phải qua **7 gate** trong `10_gates/README.md` trước khi đăng.
8. **AI không tự đăng content thương mại.** Gate 6 phải có người ký.
9. **Không nêu tên đối thủ trong bài đăng.** So sánh chỉ ở mức mặt bằng chung.
10. Giá thay đổi liên tục → nếu `verified_at` quá 7 ngày, chạy `python3 tools/catalog_fetch.py`.
11. Sản phẩm **hết hàng / đã gỡ khỏi web** → không viết bài bán.
12. **Không được viết "còn hàng", "còn X máy", "sắp hết"** trừ khi sản phẩm có
    `stock_tracked=yes` và `qty>0` trong `02_products/catalog/catalog-<ngày>.csv`.
    Web hiện "còn hàng" cho 554/593 máy **không** có quản lý tồn kho → tín hiệu này vô nghĩa.
13. **Cấu hình lấy theo TÊN sản phẩm, không lấy theo tag.** Tag trên web có lỗi ở nhiều máy
    (sai CPU, sai RAM, sai GPU, sai tình trạng cũ/mới). Tag lệch tên → không viết thông số đó.
14. **Bảo hành đọc theo từng máy** (cột `warranty_tag`), không mặc định 6 tháng — đã gặp
    máy cũ chỉ bảo hành **1 tháng** (2 máy Latitude 7480). Xem `01_company/facts/policies.md`.
    Máy nào có tag bảo hành khác chuẩn → hỏi lại trước khi viết.
15. Trước khi viết "giảm giá X%", kiểm tra `compare_at > price`. Có **11 máy** trên web (2026-09-15)
    ghi giá gốc thấp hơn giá bán → viết giảm giá cho chúng là bịa.
16. ⛔ **Phân khúc dưới 5 triệu ĐÃ ĐÓNG** (chủ shop, 2026-09-09) — không viết bài bán,
    không làm hook "laptop 4 triệu". Máy rẻ nhất được viết: **6.880.000đ** (Latitude 7400
    vân carbon). Tư vấn inbox/comment cho khách hỏi máy 4 triệu thì **vẫn làm bình thường**.
17. **Lời chủ shop ghi đè dữ liệu web.** Web báo còn 17 máy mà chủ shop nói hết là **hết**.
    Các ghi đè đã chốt nằm ở `02_products/products.md` mục 0 — đọc mục đó trước khi viết.

## Bốn trục phân loại (không được nhầm mã)
| Trục | Mã | File |
|---|---|---|
| Persona — viết cho ai | **P1–P5** | `03_customers/personas.md` |
| Journey — khách đang ở đâu | **J0–J7** | `04_content/strategy/customer-journey.md` |
| Objective — viết để làm gì | **O1–O5** | `04_content/strategy/content-objectives.md` |
| Pillar — viết về cái gì | **CP01–CP10** | `04_content/strategy/content-pillars.md` |

> Pillar dùng tiền tố `CP` để không lẫn với persona `P1–P5`.

### ⛔ Không bao giờ viết mã trơn — luôn kèm tên
Người dùng không nhớ hết mã. **Mọi lần** nhắc P / J / O / CP — trong câu trả lời chat,
kế hoạch tuần, báo cáo, backlog, calendar, metadata Content Package, file draft — phải
viết **mã + tên tiếng Việt** ngay cạnh nhau, kể cả khi đã nhắc ở dòng trên.

- ✅ `P2 (Nhân viên văn phòng)` · `J3 (Đang so sánh)` · `O3 (Tin công ty)` · `CP08 (Sai lầm khi mua)`
- ❌ `P2` · `J3/O3` · `CP08` · "bài này nhắm P2, J3"
- Trong bảng: cột ghi `P2 — Nhân viên văn phòng`, không để cột chỉ có mã.
- Liệt kê nhiều mã: `O3 (Tin công ty), O4 (Cân nhắc mua)` — không viết `O3, O4`.

Bảng tra (tên chuẩn lấy từ 4 file trên):

| Mã | Tên ghi kèm |
|---|---|
| P1 | Sinh viên / mua máy đầu tiên |
| P2 | Nhân viên văn phòng |
| P3 | Game thủ |
| P4 | Đồ họa / kỹ thuật |
| P5 | Doanh nghiệp nhỏ mua theo lô |
| J0 | Chưa biết shop |
| J1 | Đã thấy shop |
| J2 | Bắt đầu quan tâm laptop cũ |
| J3 | Đang so sánh máy / shop |
| J4 | Đã inbox / gọi / ghé shop |
| J5 | Đã mua |
| J6 | Quay lại (nâng cấp, mua thêm, bảo hành) |
| J7 | Giới thiệu người khác |
| O1 | Tiếp cận |
| O2 | Hiểu vấn đề |
| O3 | Tin công ty |
| O4 | Cân nhắc mua |
| O5 | Tạo lead / đơn |
| CP01 | Tư vấn mua |
| CP02 | Kiến thức |
| CP03 | So sánh |
| CP04 | Quy trình kiểm tra |
| CP05 | Đánh giá sản phẩm |
| CP06 | Chuyện khách hàng |
| CP07 | Hậu trường |
| CP08 | Sai lầm khi mua |
| CP09 | Thị trường & công nghệ |
| CP10 | Hàng & ưu đãi |

Tên trong 4 file gốc đổi → cập nhật bảng này theo.

## Cách dùng
- **Hiểu toàn bộ hệ thống:** `HE-THONG-HOAT-DONG.md` (workflow · luật · 7 gate · đo · học)
- **Viết bài mới:** gõ `/viet-bai` (skill trong `.claude/skills/viet-bai/`)
- **Lập kế hoạch tuần:** `12_prompts/facebook/strategy/weekly-plan.md`
- **Tìm góc content từ 1 sản phẩm:** `12_prompts/facebook/idea/product-to-angles.md`
  (Product → Facts → Customer → Need → Angles — xem `09_workflows/product-to-content.md`)
- **Cập nhật giá/sản phẩm:** `python3 tools/catalog_fetch.py` → sinh
  `02_products/catalog/catalog-<ngày>.csv` (593 SP) + in cảnh báo dữ liệu. Chạy **mỗi tuần**.
- **Thêm sản phẩm:** lấy từ CSV trên → ghi vào `02_products/products.md` kèm source + verified_at
- **Thiếu thông tin:** ghi vào `01_company/facts/UNVERIFIED.md`, đừng đoán
- **Đọc số liệu / rút pattern:** `09_workflows/weekly-learning.md`
- **Kéo dữ liệu page Facebook:** xem `tools/README.md`

## Đầu ra chuẩn
Không phải "một caption" mà là **Content Package** 12 thành phần —
`04_content/content-package.md`. Thiếu thành phần bắt buộc → Gate 5 chặn.

Vòng đời file: `04_content/drafts/` → `approved/` → `published/`.
(`04_content/posts/` là kho bài giai đoạn đầu, giữ để tham chiếu.)

## Cấu trúc thư mục
```
01_company/    facts (công ty, chính sách) + brand (định vị, tone)
02_products/   database sản phẩm đã xác minh + catalog/ (snapshot CSV toàn web)
03_customers/  5 personas
04_content/    strategy/ (objectives, pillars, journey, matrix, facebook-strategy)
               formats/ (reels, post, carousel, story, comparison, review, customer-story)
               backlog/ (idea-schema, ideas, experiments) · calendar/
               templates/ · drafts/ → approved/ → published/ · posts/ (kho cũ)
05_campaigns/  chiến dịch
06_sales/      quy trình bán, xử lý phản đối
07_analytics/  metrics · content-performance · experiments · learned-patterns · reports/
08_ai_agents/  12 agent + orchestrator
09_workflows/  daily · product-to-content · idea-to-content · approval · publishing
               · analytics-loop · weekly-learning
10_gates/      7 cổng kiểm duyệt (Gate 0–6)
11_tasks/      backlog hệ thống
12_prompts/    prompt chuẩn + facebook/ (strategy, idea, hook, reels, posts, review, analytics)
13_examples/   bài mẫu đã fact-check
14_roadmap/    7 phase
15_competitors/ phân tích đối thủ (đọc trước khi tìm góc content mới)
16_research/   tài liệu nghiên cứu/tham khảo (chưa phải nguồn fact — không trích vào bài)
tools/         catalog_fetch.py (sản phẩm+giá) · fb_fetch.py (Facebook Graph API)
```

## Giọng văn
Tư vấn thật, dễ hiểu, không phóng đại. Nói bằng tình huống đời thực của khách,
không liệt kê thông số suông. Cấm: "sốc", "rẻ nhất", "số 1", "chính hãng" (cho máy cũ).
