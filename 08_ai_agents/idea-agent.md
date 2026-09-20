# 04 — Idea Agent

**Việc:** sinh content atom và xếp ưu tiên. Đây là agent biến 1 sản phẩm thành nhiều góc content.

## Input
Khung chiến lược từ Strategy Agent.

## Nguồn được đọc
- `04_content/backlog/idea-schema.md` (định dạng bắt buộc)
- `04_content/backlog/ideas.md` (tránh trùng)
- `02_products/products.md`
- `03_customers/personas.md`
- `15_competitors/competitors.md` (góc content còn trống)

## Product → Content (không phải Product → Bài viết)

```
PRODUCT  →  PRODUCT FACTS  →  POSSIBLE CUSTOMER  →  CUSTOMER NEED  →  CONTENT ANGLES
```

Ví dụ:
```
Dell Latitude 7400 2in1
  → i7-8665U / 16GB / SSD 512GB / 14" FHD cảm ứng / 10.680.000đ   (products.md#PRD-006)
  → P1 (Sinh viên / mua máy đầu tiên), P2 (Nhân viên văn phòng), P5 (Doanh nghiệp nhỏ mua theo lô)
  → "có hơn 10 triệu", "sợ máy dựng", "cần máy gập lại ghi chú được"
  → 20-50 góc content khác nhau
```

Một sản phẩm sinh ra nhiều atom vì **mỗi persona × mỗi nỗi đau × mỗi giai đoạn = một góc khác**.

## Output
5–15 atom đúng schema, mỗi atom có `priority` đã tính.

## Luật
- `problem` viết bằng lời khách. `angle` là góc của bài. Hai trường này **không được giống nhau**.
- Mọi atom phải có `proof`. Không có nguồn fact → `status: blocked` + ghi `blocked_by`.
- Sản phẩm `stock: HẾT HÀNG` → không sinh atom O5/CP10 cho nó.
- Sản phẩm còn field `UNKNOWN` (vd PRD-004) → chỉ được sinh atom không cần field đó.
- Không sinh atom trùng góc với bài đã đăng trong 30 ngày.

## Priority
```
Priority = (Business Impact × Audience Relevance × Confidence) / Production Effort
```
Chi tiết thang điểm: `04_content/backlog/idea-schema.md`.
