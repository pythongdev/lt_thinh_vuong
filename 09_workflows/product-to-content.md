# Workflow: Product → Content

> **Sản phẩm không phải là content.** Một sản phẩm là nguyên liệu cho rất nhiều góc content khác nhau.

---

## Chuỗi đúng

```
PRODUCT
   ↓
PRODUCT FACTS          cấu hình, giá, tồn kho, bảo hành — đã xác minh
   ↓
POSSIBLE CUSTOMER      ai có thể mua máy này (P1-P5)
   ↓
CUSTOMER NEED          họ cần gì, sợ gì, nói bằng lời của họ
   ↓
CONTENT ANGLES         20-50 góc, mỗi góc là một atom
```

Chuỗi sai (hay gặp): `PRODUCT → BÀI VIẾT VỀ PRODUCT` — ra bài liệt kê thông số, không ai đọc.

---

## Ví dụ

```
Dell Latitude 7400 2in1                     products.md#PRD-006
  ↓
i7-8665U · 16GB · SSD 512GB · 14" FHD cảm ứng · 10.680.000đ · BH 6 tháng · kho 44
  ↓
P1 (Sinh viên / mua máy đầu tiên) · P2 (Nhân viên văn phòng) · P5 (Doanh nghiệp nhỏ mua theo lô)
  ↓
P1: "có hơn 10 triệu", "sợ mua máy dựng", "bố mẹ hỏi sao không mua mới"
  ↓
- "10 triệu mua được máy như thế nào?"             CP01 · O4 · post
- "Máy doanh nghiệp cũ khác máy phổ thông ở đâu?"  CP02 · O2 · reels
- "Máy này hợp ai — và không hợp ai"               CP05 · O4 · review
- "Sinh viên có nên mua máy 14 inch không?"        CP03 · O4 · comparison
- ... (tiếp tục theo từng persona × từng nỗi đau)
```

⛔ **Bước 0 bắt buộc (luật #20):** sản phẩm đầu vào phải có tên trong
`02_products/36-MAY-DUOC-VIET.md`. Không có tên ở đó → dừng, không chạy workflow này.
PRD-006 được chọn làm ví dụ vì tag web khớp tên ở mọi thông số nên không phải cắt bớt gì.

---

## Các bước

1. Nạp product facts từ `02_products/products.md`. Thiếu field cần dùng → dừng, ghi `UNVERIFIED.md`.
2. **Kiểm tra `stock`.** Hết hàng → không làm content bán (được làm content kiến thức không gắn máy đó).
3. **Kiểm tra `verified_at`.** Quá 7 ngày → mở lại trang nguồn.
4. Liệt kê persona có thể mua (trường `persona` của sản phẩm).
5. Với mỗi persona, lấy nỗi đau từ `03_customers/personas.md`.
6. Sinh atom (agent 04) — mỗi atom đúng 1 persona + 1 objective + 1 pillar.
7. Tính priority, đưa vào `04_content/backlog/ideas.md`.
8. Chọn atom priority cao nhất → chạy tiếp `idea-to-content.md`.

## Sản phẩm mới
Fetch trang sản phẩm → ghi vào `02_products/products.md` kèm `source` + `verified_at`
→ mới được sinh atom. Không viết bài từ thông tin chưa vào database.
