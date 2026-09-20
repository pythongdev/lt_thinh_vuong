# Content Atom — Schema

> Đơn vị nhỏ nhất của hệ thống. Không phải "bài viết", mà là **một ý tưởng đã có chiến lược**.
> Mọi content package đều sinh ra từ một atom. Không có atom → không sản xuất.

---

## Schema

```yaml
id:          FB-IDEA-###          # bắt buộc, duy nhất
product:     PRD-xxx | none       # none nếu là content không gắn sản phẩm
persona:     P1..P5               # đúng 1
journey:     J0..J7               # đúng 1
objective:   O1..O5               # đúng 1
pillar:      CP01..CP10           # đúng 1
problem:     >                    # nỗi đau của khách, viết bằng lời khách nói
angle:       >                    # góc nhìn của bài — KHÁC với problem
hook:        >                    # câu mở đầu dự kiến
format:      reels|post|carousel|story|comparison|product-review|customer-story
cta:         >                    # đúng 1 hành động
proof:       [ ... ]              # danh sách nguồn fact: file + mã (vd products.md#PRD-006)
risk:        low|medium|high      # rủi ro fact/brand
priority:    số                   # tính bằng công thức bên dưới
status:      idea|approved|drafting|in-review|scheduled|published|archived|blocked
blocked_by:  ...                  # nếu status=blocked: thiếu fact nào
```

---

## Giải thích 3 trường hay bị làm sai

**`problem` ≠ `angle`.**
- problem: *"Có 6 triệu mà không biết mua máy nào."* — điều khách đang nghĩ.
- angle: *"Không cần laptop mới để học CNTT."* — điều bài viết muốn nói.

**`proof` không phải là "nguồn tham khảo".**
Là danh sách chính xác nơi lấy từng con số. Nếu bài có giá → phải có `products.md#PRD-xxx`.
Nếu bài nói bảo hành → phải có `policies.md`. Không truy được → `risk: high` hoặc `status: blocked`.

**`risk`**
| Mức | Khi nào | Xử lý |
|---|---|---|
| low | Không có giá, không có cam kết, chỉ kiến thức chung | Gate thường |
| medium | Có gợi ý sản phẩm, có so sánh | Fact-check kỹ |
| high | Có giá, tồn kho, cam kết, chuyện khách hàng | Bắt buộc human duyệt trước khi đăng |

---

## Công thức priority

```
Priority = (Business Impact × Audience Relevance × Confidence) / Production Effort
```

| Yếu tố | Thang | Nghĩa |
|---|---|---|
| Business Impact | 1–5 | Gần doanh thu tới đâu (O5 cao, O1 thấp — nhưng O1 nuôi phễu) |
| Audience Relevance | 1–5 | Đúng persona đang được ưu tiên tuần này không |
| Confidence | 0.1–1.0 | Tin bao nhiêu rằng nó sẽ chạy (có pattern đã học = cao) |
| Production Effort | 1–5 | 1 = viết 20 phút · 5 = phải quay video tại shop |

Ví dụ: Impact 4 × Relevance 5 × Confidence 0.6 / Effort 2 = **6.0**

> AI **không viết mọi ý tưởng**. Nó chọn ý tưởng có priority cao nhất còn chỗ trong lịch tuần.

---

## Vòng đời status

```
idea → approved → drafting → in-review → scheduled → published
                                  ↓
                              archived
   ↓
blocked  (thiếu fact — ghi blocked_by, thêm dòng vào UNVERIFIED.md)
```
