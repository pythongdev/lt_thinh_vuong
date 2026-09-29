# 01-bai-dang — 22 nội dung lên sheet lịch đăng, 2 tuần 28/09 – 11/10/2026

Nhánh **bài đăng**. Khuôn: [`post-template.md`](../../../../04_content/templates/post-template.md) —
lưới **9 dòng × 8 cột**, cột A là nhãn, Thứ 2 ở cột B, Chủ Nhật ở cột H.
2 tuần × 2 khung giờ (`12:15`, `20:30`) → **4 khối**.

**Sheet đích — Digital Plan - Social (lịch đăng fanpage)**
https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc

> Kịch bản quay 5 cột của 9 video nằm ở nhánh kia: [../02-reel/](../02-reel/) (luật #21).

## File

| File | Nội dung | Trạng thái |
|---|---|---|
| [BAN-GIAO-2-TUAN-28-09-11-10.md](BAN-GIAO-2-TUAN-28-09-11-10.md) | **Bản gốc** — 22 khối, 6 tuyến bài, đủ 4 trục kèm tên tiếng Việt, CONTENT, BRIEF ẢNH, bình luận đầu | 🟢 viết lại 2026-09-28 · **Gate 6 duyệt 2026-09-28** |
| [SHEET-2-TUAN-28-09-11-10-luoi.csv](SHEET-2-TUAN-28-09-11-10-luoi.csv) | Đúng lưới 9×8, 4 khối. Sheet → Tệp → Nhập → Chèn trang tính mới | 🟡 |
| [SHEET-2-TUAN-28-09-11-10-ngang.csv](SHEET-2-TUAN-28-09-11-10-ngang.csv) | 1 nội dung = 1 dòng, chỉ để lọc / soát | 🟡 |
| [day-len-sheet.gs](day-len-sheet.gs) | Apps Script — tạo tab mới, vẽ đúng lưới kèm định dạng | 🟡 |

Bản 24/09 (`BAN-GIAO-TUAN-28-09-04-10.md`, 10 nội dung, 1 tuyến) đã gỡ — xem lịch sử git.

Sửa `.md` rồi sinh lại, **đừng sửa thẳng CSV / .gs**:

```bash
python3 tools/ban_giao_to_sheet.py 05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/01-bai-dang/BAN-GIAO-2-TUAN-28-09-11-10.md
```

## 📤 Google Drive

**Bản dùng (2026-09-28), tách 2 file theo tuần:** tuần 1 https://docs.google.com/spreadsheets/d/1YQtFkKY4sxFVzcN_UTlqWotSudac_QO5hd7MT1hXvLo · tuần 2 https://docs.google.com/spreadsheets/d/11ksT49rf3ozAwvJe5hIxk6KguIiUCwph-BrsTLXAYAQ

Bản cũ 24/09 (10 nội dung giọng cũ) không xoá, nằm trong thư mục `2026-09-24 · Bản 1` trên Drive — xem bảng ở [../README.md](../README.md).

## Trước khi dán lên sheet team

- [x] Người dùng duyệt bản 2026-09-28 (Gate 6)
- [ ] Dán 4 khối đúng chỗ, giữ nguyên thứ tự 9 dòng, không thêm lại `STT` / `TITLE` / `DATE & TIME`
- [ ] `STATUS` giữ `CHỜ FEEDBACK`, chỉ đổi `ĐÃ AIR` sau khi bài đăng thật
- [x] Giá tuần 2: người dùng xác nhận vẫn đúng 2026-09-28
- [ ] Sáng mỗi ngày đăng bài có giá: gọi 0928939666 xác minh máy còn hay hết
- [ ] Bình luận đầu: chép tay xuống bình luận ngay sau khi bài lên — sheet không có trường này
- [ ] Khung E / F (bài 10, 11, 21, 22): kiểm `04_content/backlog/kho-khach-that.md` trước ngày đăng — có ca đã xin phép thì thay bằng khuôn E / F
