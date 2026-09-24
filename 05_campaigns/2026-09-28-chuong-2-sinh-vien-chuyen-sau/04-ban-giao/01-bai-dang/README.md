# 01-bai-dang — 10 nội dung lên sheet lịch đăng, tuần 28/09 – 04/10/2026

Nhánh **bài đăng**. Khuôn: [`post-template.md`](../../../../04_content/templates/post-template.md) —
lưới **9 dòng × 8 cột**, cột A là nhãn, Thứ 2 ở cột B, Chủ Nhật ở cột H.
Tuần này có 2 khung giờ nên lưới tách thành **2 khối**: `12:15` (5 reel) và `20:30` (5 bài viết).

**Sheet đích — Digital Plan - Social (lịch đăng fanpage)**
https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc

> ⚠️ Kịch bản quay 5 cột của 5 reel nằm ở nhánh kia: [../02-reel/](../02-reel/).
> Ô `BRIEF ẢNH` ở đây chỉ là brief tóm tắt, **không thay được kịch bản** (luật #21).

## File

| File | Nội dung | Trạng thái |
|---|---|---|
| [BAN-GIAO-TUAN-28-09-04-10.md](BAN-GIAO-TUAN-28-09-04-10.md) | **Bản gốc** — 10 khối, mỗi khối đủ 4 trục kèm tên tiếng Việt, CONTENT, BRIEF ẢNH, bình luận đầu (bài viết) | 🟢 dựng lại 2026-09-24 theo khuôn 9×8 |
| [SHEET-TUAN-28-09-04-10-luoi.csv](SHEET-TUAN-28-09-04-10-luoi.csv) | **Bản chuẩn** — đúng lưới 9×8, 2 khối. Sheet → Tệp → Nhập → Chèn trang tính mới | 🟢 |
| [SHEET-TUAN-28-09-04-10-ngang.csv](SHEET-TUAN-28-09-04-10-ngang.csv) | 1 nội dung = 1 dòng, chỉ để lọc / soát | 🟢 |
| [day-len-sheet.gs](day-len-sheet.gs) | **Apps Script** — tạo tab mới `SHEET-TUAN-28-09-04-10 (AI)`, vẽ đúng lưới kèm định dạng | 🟢 |

> File cũ `2026-09-28-BAN-GIAO-SHEET-tuan-28-09-04-10.md` (khuôn 10 trường `STT` / `TITLE` /
> `DATE & TIME` của tháng 4–6) đã được thay bằng file này. Tab đang chạy đã bỏ ba dòng đó.

Sửa `.md` rồi sinh lại, **đừng sửa thẳng CSV / .gs**:

```bash
python3 tools/ban_giao_to_sheet.py 05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/01-bai-dang/BAN-GIAO-TUAN-28-09-04-10.md
```

## 📤 Bản trên Google Drive (2026-09-24)

**Google Sheet — BÀN GIAO TUẦN 28.09–04.10.2026 — Chương 2 sinh viên (khuôn tab T9.2026)**
https://docs.google.com/spreadsheets/d/1os858KNThkQBG37q169jAxdMnnMevEXkSR0jxNCyyGE

- Sinh từ [SHEET-TUAN-28-09-04-10-luoi.csv](SHEET-TUAN-28-09-04-10-luoi.csv).
- Đã đọc lại sau khi tạo: đủ 2 khối × 9 dòng × 8 cột, `STATUS` = `CHỜ FEEDBACK` ở mọi ô có bài,
  `LINK ẢNH/ KB` để trống.
- Nằm trong thư mục Drive của chương 2: https://drive.google.com/drive/folders/1wbJJaGa7YhwX13XPFD9vX6eP2_NboQNB
- File ở **My Drive**, **chưa chia sẻ cho ai**. Nhập từ CSV nên **chưa có định dạng** (chiều cao
  dòng, màu nền, đóng băng cột A) — muốn có sẵn định dạng thì chạy [day-len-sheet.gs](day-len-sheet.gs).
- ⚠️ Đây **không phải** sheet lịch đăng của team. Sheet team (`1crOiBL4…`) **vẫn chưa bị chạm**.

## Trước khi dán lên sheet team

- [ ] Dán 2 khối đúng chỗ, giữ nguyên thứ tự 9 dòng, không thêm lại `STT` / `TITLE` / `DATE & TIME`
- [ ] Thứ 2 ở cột B, Chủ Nhật ở cột H — không lệch cột
- [ ] `STATUS` giữ `CHỜ FEEDBACK`, chỉ đổi `ĐÃ AIR` sau khi bài đăng thật
- [ ] Chạy `collection_fetch.py` trước 30/09 và xác minh lại giá 6 nội dung có giá (luật #10, #20)
- [ ] Bình luận đầu của 5 bài viết: chép tay xuống bình luận ngay sau khi bài lên — sheet không có trường này
