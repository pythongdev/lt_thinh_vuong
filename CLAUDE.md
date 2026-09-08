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
5. Mỗi bài nhắm **đúng 1 persona** (P1–P5 trong `03_customers/personas.md`) và **đúng 1 CTA**.
6. Mọi bài phải qua 5 gate trong `10_gates/README.md` trước khi đăng.
7. **Không nêu tên đối thủ trong bài đăng.** So sánh chỉ được nói ở mức mặt bằng chung.
8. Giá thay đổi liên tục → nếu `verified_at` quá 7 ngày, mở lại trang nguồn kiểm tra.

## Cách dùng
- Viết bài mới: gõ `/viet-bai` (skill trong `.claude/skills/viet-bai/`)
- Thêm sản phẩm: fetch trang sản phẩm → ghi vào `02_products/products.md` kèm source + verified_at
- Thiếu thông tin: ghi vào `01_company/facts/UNVERIFIED.md`, đừng đoán
- Kéo dữ liệu page Facebook về phân tích: xem `tools/README.md`

## Cấu trúc thư mục
```
01_company/    facts (công ty, chính sách) + brand (định vị, tone)
02_products/   database sản phẩm đã xác minh
03_customers/  5 personas
04_content/    rules, templates (facebook/tiktok), posts/ (bài đã viết)
05_campaigns/  chiến dịch
06_sales/      quy trình bán, xử lý phản đối
07_analytics/  chỉ số + learning loop
08_ai_agents/  mô tả các agent
09_workflows/  quy trình hằng ngày
10_gates/      5 cổng kiểm duyệt
11_tasks/      backlog
12_prompts/    prompt chuẩn
13_examples/   bài mẫu đã fact-check
14_roadmap/    lộ trình
15_competitors/ phân tích đối thủ (đọc trước khi tìm góc content mới)
tools/         script lấy dữ liệu Facebook Page (Graph API)
```

## Giọng văn
Tư vấn thật, dễ hiểu, không phóng đại. Nói bằng tình huống đời thực của khách,
không liệt kê thông số suông. Cấm: "sốc", "rẻ nhất", "số 1", "chính hãng" (cho máy cũ).
