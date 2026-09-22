---
name: viet-bai
description: Viết bài Facebook/TikTok cho Laptop Thịnh Vượng (laptoptv.vn) từ knowledge base đã xác minh. Dùng khi cần soạn content bán hàng, caption sản phẩm, bài đăng fanpage, kịch bản TikTok, hoặc trả lời comment/inbox khách. Tự động fact-check giá, cấu hình, chính sách bảo hành trước khi viết.
---

# Viết content cho Laptop Thịnh Vượng

## Nguyên tắc số 1
**Không có fact → không viết.** Thà hỏi lại còn hơn đăng sai giá hoặc sai chính sách bảo hành.

---

## Bước 1 — Nạp knowledge base
Đọc các file sau trước khi viết bất cứ chữ nào:

| File | Dùng để |
|---|---|
| `01_company/facts/company-facts.md` | Tên, địa chỉ, hotline, cam kết |
| `01_company/facts/policies.md` | Bảo hành, đổi trả — **trích đúng, không diễn giải thêm** |
| `01_company/brand/brand.md` | Định vị + forbidden claims |
| `01_company/brand/tone-of-voice.md` | Giọng văn |
| `02_products/products.md` | Cấu hình, giá |
| `03_customers/personas.md` | Chọn góc viết (P1–P5) |
| `04_content/strategy/content-objectives.md` | Chọn objective O1–O5 — quyết định CTA và cách chấm bài |
| `04_content/strategy/content-pillars.md` | Chọn pillar CP01–CP10 |
| `04_content/strategy/customer-journey.md` | Khách đang ở giai đoạn J nào |
| `04_content/formats/<format>.md` | Nhịp, độ dài, visual của format đang viết |
| `04_content/templates/facebook.md` hoặc `tiktok.md` | Cấu trúc bài |
| `15_competitors/competitors.md` | Điểm mạnh/yếu so với đối thủ, góc content còn trống |

## Bước 2 — Xác định input
Nếu người dùng chưa nói rõ, hỏi ngắn gọn (tối đa 1 lượt):
- **Sản phẩm nào?** (mã PRD, hoặc tên máy, hoặc link trang sản phẩm — hoặc `none` nếu bài không gắn máy)
- **Nhắm ai?** (P1 sinh viên / P2 văn phòng / P3 game thủ / P4 đồ họa / P5 doanh nghiệp)
- **Mục tiêu?** (O1 Reach / O2 Education / O3 Trust / O4 Consideration / O5 Conversion)
- **Format?** (reels / post / carousel / story / comparison / product-review / customer-story)

Từ 3 thứ trên tự suy ra `pillar` (CP01–CP10) và `journey` (J0–J7), rồi **tự chạy Gate 0**:
ô tương ứng trong `04_content/strategy/content-matrix.md` có hợp lệ không, có bị 🔒 không.
Không hợp lệ → nói rõ vì sao, đề xuất ghép đúng, chưa viết.

Nếu người dùng đưa link sản phẩm trên laptoptv.vn → dùng WebFetch lấy cấu hình + giá,
rồi **ghi bổ sung vào `02_products/products.md`** kèm source + verified_at trước khi viết.

## Bước 3 — Fact-check (BẮT BUỘC, làm trước khi viết)
Với mỗi con số/khẳng định sẽ đưa vào bài, tự trả lời: *fact này nằm ở file nào, dòng nào?*

| Loại claim | Nguồn hợp lệ duy nhất |
|---|---|
| Giá | `products.md` + kiểm tra lại trang nguồn nếu verified_at quá 7 ngày |
| Cấu hình | `products.md` |
| Bảo hành / đổi trả | `policies.md` |
| Địa chỉ / hotline | `company-facts.md` |
| Tình trạng máy | Chỉ được nói "likenew 99%, nguyên zin chưa qua sửa chữa" nếu product ghi vậy |

Nếu thiếu fact quan trọng → **dừng lại**, báo người dùng thiếu gì,
và thêm dòng vào `01_company/facts/UNVERIFIED.md`. Không đoán, không dùng số "tham khảo".

## Bước 4 — Viết
Theo đúng cấu trúc trong template của kênh tương ứng.
- Mỗi thông số phải dịch thành lợi ích đời thực (bảng ở mục 3 của template).
- Nhắm đúng 1 persona, dùng đúng ngôn ngữ của persona đó.
- Đúng 1 CTA.
- Tiếng Việt tự nhiên, không dịch máy, không sáo rỗng.

## Bước 5 — Xuất kết quả: Content Package
Không trả về mỗi caption. Trả về **Content Package** đủ 12 thành phần
(`04_content/content-package.md`). Tối thiểu luôn có:

1. **Strategy** — persona / journey / objective / pillar, và vì sao ghép như vậy.
   Luôn ghi **mã + tên** (`P2 (Nhân viên văn phòng)`), không ghi mã trơn — bảng tra ở `CLAUDE.md`.
2. **Bài đăng** (bản chính, sẵn sàng copy-paste)
3. **3 hook thay thế**, mỗi cái khác pattern (`08_ai_agents/hook-agent.md`)
4. **Visual direction** — cần chụp/quay gì, ở đâu, máy nào
5. **CTA** đúng 1, hợp objective · **Hashtag** 3–6 · **First comment**
6. **5 câu trả lời comment** thường gặp cho chủ đề này
7. **Measurement plan** — chỉ số nào quyết định bài này thành/bại (theo objective)
8. **Bảng nguồn fact** — mỗi claim ↔ file nguồn:

   | Claim trong bài | Nguồn |
   |---|---|
   | 10.680.000đ | products.md PRD-006 (laptoptv.vn, verified 2026-09-20) |

Nếu có claim nào không truy được nguồn → đánh dấu `⚠️ NEEDS_VERIFICATION` ngay trong bài,
đừng lặng lẽ để nguyên.

## Bước 6 — Lưu

Hỏi trước: **bài này thuộc chiến dịch nào?** (xem `05_campaigns/INDEX.md`)

| | Nơi lưu |
|---|---|
| Thuộc một chiến dịch | `05_campaigns/<chiến-dịch>/01-drafts/YYYY-MM-DD-<loại>-<số>-<slug>.md` |
| Bài lẻ | `04_content/drafts/YYYY-MM-DD-<idea-id>-<slug>.md` |

Header bắt buộc:
```yaml
id: FB-IDEA-xxx        # nếu bắt nguồn từ 04_content/backlog/ideas.md
product: PRD-xxx | none
persona: P1 — Sinh viên / mua máy đầu tiên
journey: J3 — Đang so sánh máy / shop
objective: O4 — Cân nhắc mua
pillar: CP01 — Tư vấn mua
format: post
risk: low | medium | high
status: draft
created: YYYY-MM-DD
gates: { g0: ⬜, g1: ⬜, g2: ⬜, g3: ⬜, g4: ⬜, g5: ⬜, g6: ⬜ }
```

Sau đó: qua gate (`10_gates/README.md`) → `02-approved/` (có `approved_by`) → đăng →
`03-published/` + ghi dòng vào `07_analytics/content-performance.md`, số liệu vào `05-ket-qua/`.
(Bài lẻ: `04_content/approved/` → `04_content/published/`.)

Ý tưởng mới nảy ra trong lúc viết → thêm atom vào `04_content/backlog/ideas.md`, đừng bỏ phí.

---

## 7 gate phải qua trước khi đăng
Gate 0 Strategy · 1 Fact · 2 Commercial · 3 Brand · 4 Claim · 5 Quality · 6 Human.
Chi tiết: `10_gates/README.md`. Bận tới đâu cũng **không bỏ Gate 1, 2, 4, 6**.

---

## Cấm tuyệt đối
- Bịa giá, cấu hình, tồn kho, thời gian giao hàng.
- Viết "bảo hành 12 tháng" cho máy cũ (đúng là **6 tháng**, pin 3 tháng).
- Hứa trả góp / freeship / hoàn tiền 100% — chưa có fact (xem `UNVERIFIED.md`).
- Dùng "chính hãng" cho máy cũ → dùng "nguyên zin" / "likenew".
- Xếp hạng: "rẻ nhất", "số 1", "uy tín nhất Hà Nội", "bảo hành dài nhất".
- **Nêu tên đối thủ** trong bài đăng, hoặc ám chỉ đối thủ bán máy kém.
- Câu view sai sự thật: "Sốc", "Chỉ hôm nay" (khi không có chương trình thật).
- Viết bài bán cho sản phẩm **hết hàng** (xem cột `stock`).
- Tự tuyên bố bài đã qua gate. Gate 6 phải có người ký.
