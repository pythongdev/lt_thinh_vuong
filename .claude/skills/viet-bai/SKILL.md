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
| `03_customers/personas.md` | Chọn góc viết |
| `04_content/templates/facebook.md` hoặc `tiktok.md` | Cấu trúc bài |
| `15_competitors/competitors.md` | Điểm mạnh/yếu so với đối thủ, góc content còn trống |

## Bước 2 — Xác định input
Nếu người dùng chưa nói rõ, hỏi ngắn gọn (tối đa 1 lượt):
- **Sản phẩm nào?** (mã PRD, hoặc tên máy, hoặc link trang sản phẩm)
- **Nhắm ai?** (P1 sinh viên / P2 văn phòng / P3 game thủ / P4 đồ họa / P5 doanh nghiệp)
- **Mục tiêu?** (Inbox / Chốt đơn / Awareness)

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

## Bước 5 — Xuất kết quả
Luôn trả về đủ 4 phần:

1. **Bài đăng** (bản chính, sẵn sàng copy-paste)
2. **3 hook thay thế** để A/B test
3. **5 câu trả lời comment** thường gặp cho sản phẩm này
4. **Bảng nguồn fact** — mỗi claim ↔ file nguồn:

   | Claim trong bài | Nguồn |
   |---|---|
   | 4.600.000đ | products.md PRD-003 (laptoptv.vn, 2026-09-05) |

Nếu có claim nào không truy được nguồn → đánh dấu `⚠️ NEEDS_VERIFICATION` ngay trong bài,
đừng lặng lẽ để nguyên.

## Bước 6 — Lưu
Lưu bài vào `04_content/posts/YYYY-MM-DD-<slug>.md` kèm header:
```
product: PRD-xxx
persona: Px
objective: ...
status: draft | approved | published
```

---

## Cấm tuyệt đối
- Bịa giá, cấu hình, tồn kho, thời gian giao hàng.
- Viết "bảo hành 12 tháng" cho máy cũ (đúng là **6 tháng**, pin 3 tháng).
- Hứa trả góp / freeship / hoàn tiền 100% — chưa có fact (xem `UNVERIFIED.md`).
- Dùng "chính hãng" cho máy cũ → dùng "nguyên zin" / "likenew".
- Xếp hạng: "rẻ nhất", "số 1", "uy tín nhất Hà Nội", "bảo hành dài nhất".
- **Nêu tên đối thủ** trong bài đăng, hoặc ám chỉ đối thủ bán máy kém.
- Câu view sai sự thật: "Sốc", "Chỉ hôm nay" (khi không có chương trình thật).
