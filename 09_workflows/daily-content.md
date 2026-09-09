# Daily Content Workflow

> Nâng cấp từ bản cũ (08:00 đề xuất → 09:00 duyệt → …). Giữ nguyên khung giờ, thêm tầng dữ liệu và chiến lược.

---

## 08:00 — DATA REFRESH
Nạp dữ liệu trước khi nghĩ ra ý tưởng.

| Nguồn | File / công cụ | Trạng thái |
|---|---|---|
| Tồn kho + giá | `02_products/products.md` + trang nguồn | ✅ |
| Doanh số | — | 🔴 chưa có (`UNVERIFIED.md` #13) |
| Câu hỏi khách hôm qua | comment/inbox page | ⚠️ ghi tay |
| Số liệu bài hôm qua | `tools/fb_fetch.py` → `07_analytics/content-performance.md` | ✅ có script |
| Chiến dịch đang chạy | `05_campaigns/` | ✅ |

## 08:15 — MARKETING MANAGER AI
Agent 01–03. Trả lời:
- Hôm nay nên đẩy sản phẩm nào? (còn hàng, tồn lâu, hợp mùa)
- Persona nào ưu tiên? Họ đang gặp vấn đề gì?
- Pillar / giai đoạn phễu nào đang thiếu?
- Bài tuần trước cái nào thắng, vì sao, có nên lặp lại?

**Xuất:** 3–5 cơ hội content kèm lý do, đã xếp `priority`.

## 09:00 — NGƯỜI DUYỆT CHIẾN LƯỢC
Người quyết định: hôm nay làm ý tưởng nào. **Duyệt chiến lược, chưa duyệt câu chữ.**
Duyệt sai ở bước này thì mọi bước sau đều lãng phí.

## 09:15 — CONTENT AGENTS
Agent 04–07: atom → hook → caption/script → visual direction.
**Xuất:** Content Package đủ 12 thành phần (`04_content/content-package.md`) vào `04_content/drafts/`.

## 10:00 — GATES
Agent 08 (Gate 1–2) và agent 09 (Gate 3–4), cộng Gate 0 và Gate 5.
Fail → trả về đúng agent gây lỗi, không quay lại đầu dây chuyền.

## 10:30 — HUMAN APPROVAL (Gate 6)
Người duyệt nội dung cuối. Ký tên + ngày vào header file.
Package chuyển `drafts/` → `approved/`.

## Trong ngày — PUBLISH
Agent 10 chuẩn bị, **người bấm đăng**. Kiểm tra lại giá + tồn kho ngay trước khi đăng.
Trực comment 60 phút đầu.

## Cuối ngày — METRICS
Ghi số 24h của bài hôm qua vào `07_analytics/content-performance.md`.
Ghi lại ca tư vấn đáng kể trong ngày → nguồn cho pillar CP06.

## Sáng hôm sau — LEARNING
Agent 12 đọc số liệu, cập nhật giả thuyết. Bản đầy đủ chạy hằng tuần: `weekly-learning.md`.

---

## Rút gọn khi bận
Bỏ 08:15 và 09:15 mở rộng, chạy chế độ rút gọn của orchestrator:
Strategy → Idea → Content → Fact-check → Brand → Human.
**Không bao giờ bỏ:** Fact-check, Brand, Human.
