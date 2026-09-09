# Laptop Thịnh Vượng — Facebook Content Operating System

Hệ thống AI quản lý và sản xuất content cho Laptop Thịnh Vượng (laptoptv.vn).
Không phải "AI viết bài rồi đăng Facebook", mà là:

**Business → Customer → Strategy → Content → Publish → Revenue → Learning → Strategy.**

## Nguyên tắc cốt lõi
1. One fact, one owner.
2. AI không được biến suy đoán thành sự thật.
3. Giá, tồn kho, chính sách và thông số sản phẩm phải lấy từ nguồn dữ liệu chuẩn.
4. Content phải qua đủ 7 gate trước khi xuất bản.
5. Mọi workflow quan trọng phải có trạng thái và người/phần chịu trách nhiệm.
6. Tự động hóa tăng dần theo mức độ tin cậy.
7. **AI không tự đăng content thương mại.** Người bấm đăng.

## Kiến trúc

```
COMPANY KNOWLEDGE     brand · products · customers · sales · competitors
        ↓
MARKET INTELLIGENCE   câu hỏi khách · đối thủ · tồn kho · xu hướng
        ↓
CONTENT STRATEGY      persona · journey · pillar · objective · angle
        ↓
CONTENT ENGINE        idea · hook · script · caption · visual · CTA
        ↓
QUALITY CONTROL       7 gates: strategy · fact · commercial · brand · claim · quality · human
        ↓
PUBLISHING            Page · Reels · Story
        ↓
ANALYTICS             reach · watch · engage · lead · order · revenue
        ↓
LEARNING ENGINE       pattern · hypothesis · experiment · winner
        ↓
    → quay lại CONTENT STRATEGY
```

## Bốn khái niệm phải nắm

| Khái niệm | Mã | File |
|---|---|---|
| Persona — viết cho ai | P1–P5 | `03_customers/personas.md` |
| Journey — khách đang ở đâu | J0–J7 | `04_content/strategy/customer-journey.md` |
| Objective — viết để làm gì | O1–O5 | `04_content/strategy/content-objectives.md` |
| Pillar — viết về cái gì | CP01–CP10 | `04_content/strategy/content-pillars.md` |

Mỗi content = **đúng 1 của mỗi loại**. Ghép sai → Gate 0 chặn.

## Bắt đầu nhanh
0. **Chưa hiểu hệ thống chạy thế nào? Đọc `HE-THONG-HOAT-DONG.md`** — giải thích đầy đủ workflow, luật, 7 gate, cách đo và học.
1. Mở Claude Code trong thư mục này.
2. Viết bài: gõ `/viet-bai` → trả lời sản phẩm + persona + objective → nhận Content Package đã fact-check.
3. Lập kế hoạch tuần: `12_prompts/facebook/strategy/weekly-plan.md`.
4. Tìm góc content từ 1 sản phẩm: `12_prompts/facebook/idea/product-to-angles.md`.
5. Trước khi đăng: tick đủ 7 gate trong `10_gates/README.md`.

## Cấu trúc

```
01_company/     facts + brand
02_products/    database sản phẩm đã xác minh
03_customers/   5 personas
04_content/     strategy/ formats/ backlog/ calendar/ drafts/ approved/ published/
05_campaigns/   chiến dịch
06_sales/       quy trình bán
07_analytics/   metrics · performance · experiments · learned-patterns · reports
08_ai_agents/   12 agent + orchestrator
09_workflows/   7 workflow, khép kín từ sản phẩm tới learning
10_gates/       7 cổng kiểm duyệt
11_tasks/       backlog hệ thống
12_prompts/     prompt library (facebook/)
13_examples/    bài mẫu đã fact-check
14_roadmap/     7 phase
15_competitors/ phân tích đối thủ (đọc trước khi tìm góc mới)
16_research/    tài liệu nghiên cứu (không phải nguồn fact)
tools/          script lấy dữ liệu Facebook Page
```

## Trạng thái (2026-09-09)
- ✅ Phase 1 — Knowledge base + skill `/viet-bai`
- ✅ Phase 2 — Tầng chiến lược, format library, backlog, 7 gates, 12 agent (**cấu trúc xong, chưa chạy thật**)
- ⬜ Phase 3 — Content Factory
- ⬜ Phase 4 — Planner
- ⬜ Phase 5 — Analytics nối doanh thu
- ⬜ Phase 6 — Learning Engine
- ⬜ Phase 7 — AI Marketing Manager

**Việc gấp nhất:** `01_company/facts/UNVERIFIED.md` — 4 mục 🔴 GẤP đang **khoá 3 pillar**
(CP04 quy trình test, CP06 chuyện khách, và content bán hàng từ xa) cùng 3 ý tưởng
priority cao nhất trong `04_content/backlog/ideas.md`. Hệ thống đã sẵn sàng; thứ đang thiếu là **fact**.
