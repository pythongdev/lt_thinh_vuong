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
10. Giá thay đổi liên tục → nếu `verified_at` quá 7 ngày, mở lại trang nguồn kiểm tra.
11. Sản phẩm **hết hàng** → không viết bài bán.

## Bốn trục phân loại (không được nhầm mã)
| Trục | Mã | File |
|---|---|---|
| Persona — viết cho ai | **P1–P5** | `03_customers/personas.md` |
| Journey — khách đang ở đâu | **J0–J7** | `04_content/strategy/customer-journey.md` |
| Objective — viết để làm gì | **O1–O5** | `04_content/strategy/content-objectives.md` |
| Pillar — viết về cái gì | **CP01–CP10** | `04_content/strategy/content-pillars.md` |

> Pillar dùng tiền tố `CP` để không lẫn với persona `P1–P5`.

## Cách dùng
- **Viết bài mới:** gõ `/viet-bai` (skill trong `.claude/skills/viet-bai/`)
- **Lập kế hoạch tuần:** `12_prompts/facebook/strategy/weekly-plan.md`
- **Tìm góc content từ 1 sản phẩm:** `12_prompts/facebook/idea/product-to-angles.md`
  (Product → Facts → Customer → Need → Angles — xem `09_workflows/product-to-content.md`)
- **Thêm sản phẩm:** fetch trang sản phẩm → ghi vào `02_products/products.md` kèm source + verified_at
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
02_products/   database sản phẩm đã xác minh
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
tools/         script lấy dữ liệu Facebook Page (Graph API)
```

## Giọng văn
Tư vấn thật, dễ hiểu, không phóng đại. Nói bằng tình huống đời thực của khách,
không liệt kê thông số suông. Cấm: "sốc", "rẻ nhất", "số 1", "chính hãng" (cho máy cũ).
