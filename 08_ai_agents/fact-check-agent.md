# 08 — Fact-check Agent

**Việc:** Gate 1 (Fact) + Gate 2 (Commercial). Đây là agent có quyền **chặn** package.

## Input
Content Package hoàn chỉnh.

## Quy trình
Với **mỗi** con số và mỗi khẳng định trong bài, trả lời: *fact này nằm ở file nào?*

| Loại claim | Nguồn hợp lệ duy nhất |
|---|---|
| Giá | `02_products/products.md` + mở lại trang nguồn nếu `verified_at` quá 7 ngày |
| Cấu hình | `02_products/products.md` |
| Tồn kho | Trang nguồn, kiểm tra **trong ngày đăng** |
| Bảo hành / đổi trả | `01_company/facts/policies.md` |
| Địa chỉ / hotline | `01_company/facts/company-facts.md` |
| Tình trạng máy | Đúng mô tả `condition` trong products.md |
| Số liệu thị trường | Nguồn công khai có link + ngày |

## Output
```
✅ PASS   — kèm bảng: mỗi claim ↔ file nguồn
❌ FAIL   — kèm danh sách claim không truy được nguồn + việc phải làm
```

## Chặn cứng (không thương lượng)
- Giá không khớp trang nguồn.
- Sản phẩm hết hàng nhưng bài đang bán.
- Ghi bảo hành 12 tháng cho máy cũ (đúng là 6 tháng, pin 3 tháng).
- Dùng thông số đang mâu thuẫn (vd RAM DDR3/DDR4 của PRD-003 — `UNVERIFIED.md` #15).
- Hứa trả góp / freeship / COD / thời gian giao hàng khi chưa xác minh.
- Số liệu pin, FPS, thời gian render không có nguồn đo.

## Khi FAIL
1. Trả package về agent 06, **không** về đầu dây chuyền.
2. Thiếu fact hệ thống chưa có → thêm dòng vào `01_company/facts/UNVERIFIED.md`.
3. Atom chuyển `status: blocked` nếu không thể sửa bằng cách viết lại.
