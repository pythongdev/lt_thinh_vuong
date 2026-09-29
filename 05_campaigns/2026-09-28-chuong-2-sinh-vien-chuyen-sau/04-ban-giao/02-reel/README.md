# 02-reel — 13 kịch bản video, 2 tuần 28/09 – 11/10/2026

Nhánh **reels / video** của chương 2 (sinh viên). Khuôn:
[`kich-ban-video-sheet.md`](../../../../04_content/templates/reel_template/kich-ban-video-sheet.md) —
**5 cột** `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT MÀN HÌNH · NOTE`, mỗi cảnh 1 dòng,
trên mỗi kịch bản 1 dòng tiêu đề merge.

**Sheet đích — sheet kịch bản video (KB) của team**
https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8

## Mười ba kịch bản

| KB | Ngày đăng | Tuyến bài | Tên | Giá trên hình? |
|---|---|---|---|---|
| KB1 | T2 28-09 · 12:15 | Tư vấn – kiến thức | Bố mẹ lo chữ "cũ" | không |
| KB2 | T4 30-09 · 12:15 | Tư vấn – kiến thức | Cỡ nào nhét vừa balo | không |
| KB3 | T4 30-09 · 20:30 | Bảo hành – hậu mãi | Máy dở chứng tuần thi, gọi ai | không |
| KB4 | T5 01-10 · 12:15 | Review sản phẩm | Review Latitude 7390 2in1 | không |
| KB5 | T2 05-10 · 12:15 | Tư vấn – kiến thức | Có đúng 9 triệu rưỡi — 3 máy | **có** |
| KB6 | T4 07-10 · 12:15 | Tư vấn – kiến thức | 700 nghìn đó mua được gì | **có** |
| KB7 | T4 07-10 · 20:30 | Bảo hành – hậu mãi | Cài lại Windows mùa thi | không |
| KB8 | T5 08-10 · 12:15 | Review sản phẩm | Review Latitude 7420 vỏ carbon | không |
| KB9 | T5 08-10 · 20:30 | Tư vấn – kiến thức | 20 giây soi điểm chết | không |
| KB10 | T6 02-10 · 20:30 | Dạy khách tự kiểm tra máy cũ (thay Feedback) | Mua lại máy anh chị khoá trên — soi 3 chỗ | không |
| KB11 | T7 03-10 · 12:15 | So sánh hai máy (thay Khách tại shop) | Thêm 2,3 triệu: chip mới hay màn xoay | **có** — hạn 2026-10-06 |
| KB12 | T6 09-10 · 20:30 | Dạy khách tự kiểm tra máy cũ (thay Feedback) | Học online — soi webcam, mic, loa, cấu hình | không |
| KB13 | T7 10-10 · 12:15 | So sánh hai máy (thay Khách tại shop) | Thêm 1,4 triệu: lên 14 inch, đổi chip | **có** — hạn 2026-10-11 |

## File

| File | Nội dung | Trạng thái |
|---|---|---|
| [KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md](KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md) | **Bản gốc** — 13 kịch bản, 103 cảnh | 🟢 bản 3 2026-09-29 · KB1–KB9 duyệt 2026-09-28 · KB10–KB13 **"ok" 2026-09-29** |
| [KICH-BAN-VIDEO-2-TUAN-28-09-11-10.csv](KICH-BAN-VIDEO-2-TUAN-28-09-11-10.csv) | Bản nhập tay — Tệp → Nhập → Chèn trang tính mới | 🟡 |
| [day-len-kb-sheet.gs](day-len-kb-sheet.gs) | Apps Script hàm `dayLenKB` — tạo tab mới, điền cảnh, merge dòng tiêu đề | 🟡 |

Bản 24/09 (`KICH-BAN-VIDEO-TUAN-28-09-04-10.md`, 5 kịch bản) đã gỡ — xem lịch sử git.
**Bản Drive dùng (2026-09-29):** https://docs.google.com/spreadsheets/d/1bXPss42qKHsftW2UAUyKS1qhx8oD-ndagjO7DpLKXnQ — 9 kịch bản, 81 dòng, có hạn dùng KB5, KB6. Nhập từ CSV nên dòng tiêu đề chưa merge.
Bản cũ không xoá, nằm trong thư mục con theo ngày trên Drive — xem bảng ở [../README.md](../README.md) mục Google Drive.

```bash
python3 tools/kich_ban_to_sheet.py 05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md
```

## Việc riêng của nhánh này

| # | Việc |
|---|---|
| 1 | ✅ Gate 6 duyệt 2026-09-28 — được đẩy lên sheet KB |
| 2 | Đánh lại số `Kịch bản <N>` theo số đang chạy trong tab KB · merge dòng tiêu đề nếu nhập CSV |
| 3 | KB5, KB6: hạn dùng 2026-10-11 (giá người dùng xác nhận 2026-09-28) · sáng ngày quay gọi 0928939666 xác minh |
| 4 | KB4, KB8: màn Settings → About hiện chip khác tên máy → dừng quay, báo người viết |
