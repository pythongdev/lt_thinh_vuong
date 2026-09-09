# Content Package — đầu ra chuẩn của hệ thống

> Hệ thống **không** trả về "một caption". Nó trả về một gói đủ để đăng và đo.
> Một atom (`04_content/backlog/idea-schema.md`) → một package.

---

## 12 thành phần

| # | Thành phần | Bắt buộc | Ghi chú |
|---|---|---|---|
| 1 | **Strategy** | ✅ | persona / journey / objective / pillar / atom id |
| 2 | **Hook** | ✅ | bản chính + 3 bản thay thế để A/B |
| 3 | **Script** | reels/video | theo nhịp trong `formats/reels.md` |
| 4 | **Caption** | ✅ | bản sẵn sàng copy-paste |
| 5 | **Visual direction** | ✅ | cần chụp/quay gì, tại đâu, máy nào |
| 6 | **Thumbnail** | reels/video | chữ trên thumbnail + hình |
| 7 | **CTA** | ✅ | đúng 1, hợp objective (`facebook-strategy.md` mục 4) |
| 8 | **Hashtags** | ✅ | 3–6 tag |
| 9 | **First comment** | ✅ | link/địa chỉ/thông tin phụ, không nhét vào bài |
| 10 | **Sales follow-up** | O4, O5 | trả lời 5 comment/inbox thường gặp cho chủ đề này |
| 11 | **Measurement plan** | ✅ | chỉ số nào quyết định bài này thành/bại |
| 12 | **Fact table** | ✅ | mỗi claim ↔ file nguồn |

---

## Mẫu file package

```markdown
---
id: FB-IDEA-002
product: PRD-002
persona: P1
journey: J3
objective: O4
pillar: CP01
format: post
status: draft
created: 2026-09-09
gates: { g0: ⬜, g1: ⬜, g2: ⬜, g3: ⬜, g4: ⬜, g5: ⬜, g6: ⬜ }
---

## 1. Strategy
Vì sao viết bài này, cho ai, để đạt gì.

## 2. Hook
Chính: ...
A: ... | B: ... | C: ...

## 3. Script            (nếu là video)
## 4. Caption
## 5. Visual direction
## 6. Thumbnail         (nếu là video)
## 7. CTA
## 8. Hashtags
## 9. First comment
## 10. Sales follow-up
| Câu khách hay hỏi | Trả lời (chỉ dùng fact đã xác minh) |

## 11. Measurement plan
Chỉ số chính: ... · Ngưỡng coi là thắng: ... · Đo sau: 24h / 72h / 7d

## 12. Fact table
| Claim trong bài | Nguồn |
|---|---|
| 4.290.000đ | products.md#PRD-002 (laptoptv.vn, verified 2026-09-05, check lại ngày đăng) |
| Bảo hành 6 tháng main/màn/phím | policies.md |
```

---

## Quy tắc

- Thiếu bất kỳ thành phần **bắt buộc** nào → Gate 5 (Content Quality) chặn.
- Claim không truy được nguồn → ghi `⚠️ NEEDS_VERIFICATION` ngay trong caption, không lặng lẽ để nguyên.
- Package sống ở `04_content/drafts/` → `approved/` → `published/`.
