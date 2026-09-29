# 04-ban-giao — khối dán lên Google Sheet (2 tuần 28/09 – 11/10/2026)

Bản viết lại **2026-09-28** theo phản hồi của sếp (luật #23, #24, #25 `CLAUDE.md`).
Hai nhánh, hai sheet khác nhau → 2 thư mục, mỗi thư mục có README riêng:

| Thư mục | Nhánh | Khuôn | Sheet đích |
|---|---|---|---|
| [01-bai-dang/](01-bai-dang/) | **Bài đăng** — 22 nội dung, 6 tuyến bài, lưới 9×8, 4 khối (2 tuần × 12:15 / 20:30) | [`post-template.md`](../../../04_content/templates/post-template.md) | Digital Plan - Social<br>https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc |
| [02-reel/](02-reel/) | **Reels / video** — 9 kịch bản, 71 cảnh, 5 cột | [`kich-ban-video-sheet.md`](../../../04_content/templates/reel_template/kich-ban-video-sheet.md) | Sheet kịch bản video (KB)<br>https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8 |

## 🟢 Gate 6 — người dùng duyệt bản mới 2026-09-28

Được đẩy lên sheet và upload Drive. Sheet thật của team vẫn chưa bị chạm — connector chỉ đọc ô.
Giá tuần 2: người dùng xác nhận vẫn đúng 2026-09-28.

## 📤 Google Drive — thư mục chương 2 (My Drive, chưa chia sẻ)

https://drive.google.com/drive/folders/1wbJJaGa7YhwX13XPFD9vX6eP2_NboQNB — chia **thư mục con theo ngày** để so sánh các bản
(sắp xếp 2026-09-29, người dùng yêu cầu giữ file cũ, không xoá).

| Thư mục con | File bên trong |
|---|---|
| **2026-09-28 · Bản 2 — viết lại theo phản hồi sếp — ĐANG DÙNG**<br>https://drive.google.com/drive/folders/1D303rcbZ3dpPNkKXKOCI8GTYD1hZ7JmL | BÀN GIAO TUẦN 1 · 28.09–04.10 — https://docs.google.com/spreadsheets/d/1YQtFkKY4sxFVzcN_UTlqWotSudac_QO5hd7MT1hXvLo<br>BÀN GIAO TUẦN 2 · 05.10–11.10 — https://docs.google.com/spreadsheets/d/11ksT49rf3ozAwvJe5hIxk6KguIiUCwph-BrsTLXAYAQ<br>KB 2 TUAN · có hạn dùng KB5 KB6 — https://docs.google.com/spreadsheets/d/1bXPss42qKHsftW2UAUyKS1qhx8oD-ndagjO7DpLKXnQ |
| 2026-09-28 · Bản 2 nháp — KB thiếu hạn dùng — KHÔNG DÙNG<br>https://drive.google.com/drive/folders/1znIuqcF-jhxKNs98x5871W5gURVfscYl | [KHÔNG DÙNG …] KB 2 TUAN — https://docs.google.com/spreadsheets/d/1F82_JoxwDYLi2StWWNnu5r9_HmenMAMJggus06Sa-ms |
| 2026-09-24 · Bản 1 — trước phản hồi sếp — KHÔNG DÙNG<br>https://drive.google.com/drive/folders/14vuaav-5ihcmmlnCY37xSrNQ-VHd3MIs | BÀN GIAO TUẦN 28.09–04.10 (10 nội dung) — https://docs.google.com/spreadsheets/d/1os858KNThkQBG37q169jAxdMnnMevEXkSR0jxNCyyGE<br>KB TUAN 28.09–04.10 (5 kịch bản) — https://docs.google.com/spreadsheets/d/113HxJNiapcllmf7lIOeuDJhw2JKCPKvUK9GKzPREDs8 |

Bản mới sau này: tạo thư mục con `<yyyy-mm-dd> · Bản <n> — <lý do>` và tải vào đó, **không xoá, không ghi đè bản cũ**.
Sheet thật của team (lịch đăng, KB) **chưa bị chạm**.

## Việc người đẩy phải tự làm

| # | Việc | Nhánh |
|---|---|---|
| 1 | Dán 4 khối vào đúng chỗ trong lịch tháng 9–10, giữ nguyên thứ tự dòng | Bài đăng |
| 2 | Giữ `STATUS` = `CHỜ FEEDBACK`; `LINK ẢNH/ KB` để trống cho thiết kế / người quay điền | Bài đăng |
| 3 | Dán **bình luận đầu** ngay sau khi bài lên (sheet không có trường này) | Bài đăng |
| 4 | ~~Kéo lại giá tuần 2~~ → người dùng xác nhận vẫn đúng 2026-09-28 | Cả hai |
| 5 | Sáng ngày đăng bài có giá: gọi 0928939666 xác minh máy còn hay hết | Cả hai |
| 6 | Khung E / F (bài 10, 11, 21, 22): kiểm `kho-khach-that.md` — có ca đã xin phép thì thay | Bài đăng |
| 7 | Đánh lại số `Kịch bản <N>` theo số đang chạy; merge dòng tiêu đề nếu nhập CSV | Reel |

## Sinh lại file máy đọc

```bash
D=05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao

python3 tools/ban_giao_to_sheet.py  $D/01-bai-dang/BAN-GIAO-2-TUAN-28-09-11-10.md
python3 tools/kich_ban_to_sheet.py  $D/02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md
```
