# 04-ban-giao — khối dán lên Google Sheet

Tuần này bàn giao **2 nhánh, 2 sheet khác nhau** → chia làm **2 thư mục**, mỗi thư mục
có README riêng nói rõ cách đẩy:

| Thư mục | Nhánh | Khuôn | Sheet đích |
|---|---|---|---|
| [01-bai-dang/](01-bai-dang/) | **Bài đăng** — 10 nội dung (5 reel 12:15 + 5 bài viết 20:30), lưới 9 dòng × 8 cột, 2 khối | [`post-template.md`](../../../04_content/templates/post-template.md) | Digital Plan - Social<br>https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc |
| [02-reel/](02-reel/) | **Reels / video** — 5 kịch bản × 6 cảnh, 5 cột `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT MÀN HÌNH · NOTE` | [`kich-ban-video-sheet.md`](../../../04_content/templates/reel_template/kich-ban-video-sheet.md) | Sheet kịch bản video (KB)<br>https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8 |

> Ô `CONTENT` và ô `BRIEF ẢNH` của lưới 9×8 **không thay thế được kịch bản 5 cột** —
> người quay cần từng cảnh một dòng. **Thiếu nhánh nào là chưa bàn giao xong** (luật #21).
>
> Hai sheet chạy riêng, hai Apps Script riêng. Đừng chạy script của nhánh này lên sheet của nhánh kia.

## 🟢 Gate 6 — người dùng nói "ok" 2026-09-24

Được đẩy lên sheet và upload Drive. **Nhưng sheet thật của team vẫn chưa bị chạm** —
connector Google Drive chỉ đọc, không ghi được ô. Chỉ được coi là "đã lên sheet" sau khi
người phụ trách chạy Apps Script / nhập CSV và **nhìn thấy khối nằm trong sheet**.

## 📤 Bản trên Google Drive (upload 2026-09-24)

Thư mục chứa cả hai file — **My Drive của `pythondevhn2023@gmail.com`, chưa chia sẻ cho ai:**
https://drive.google.com/drive/folders/1wbJJaGa7YhwX13XPFD9vX6eP2_NboQNB

| File | Nội dung | Link |
|---|---|---|
| **BÀN GIAO TUẦN 28.09–04.10.2026 — Chương 2 sinh viên (khuôn tab T9.2026)** | Lưới 9×8, 2 khối (12:15 và 20:30), sinh từ [SHEET-TUAN-28-09-04-10-luoi.csv](01-bai-dang/SHEET-TUAN-28-09-04-10-luoi.csv) | https://docs.google.com/spreadsheets/d/1os858KNThkQBG37q169jAxdMnnMevEXkSR0jxNCyyGE |
| **KB TUAN 28.09–04.10.2026 (AI) — Chương 2 sinh viên** | 5 kịch bản × 6 cảnh = 30 dòng + 5 dòng tiêu đề, sinh từ [KICH-BAN-VIDEO-TUAN-28-09-04-10.csv](02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.csv) | https://docs.google.com/spreadsheets/d/113HxJNiapcllmf7lIOeuDJhw2JKCPKvUK9GKzPREDs8 |

- Cả hai đã đọc lại sau khi tạo: đúng số dòng, đúng nhãn, không lệch cột, emoji còn nguyên.
- ⚠️ Đây **không phải** sheet của team. Sheet lịch đăng (`1crOiBL4…`) và sheet KB (`1Nu5cBft…`)
  **vẫn chưa bị chạm**.
- Hai file nhập từ CSV nên **chưa có định dạng** (chưa merge dòng tiêu đề kịch bản, chưa set
  chiều cao dòng). Muốn có sẵn định dạng thì dùng Apps Script — xem README từng nhánh.

---

## Việc người đẩy phải tự làm

| # | Việc | Nhánh | Vì sao |
|---|---|---|---|
| 1 | Dán 2 khối vào đúng chỗ trong lịch tháng 9–10, giữ nguyên thứ tự dòng | Bài đăng | Tab đang chạy không còn dòng `STT` / `TITLE` / `DATE & TIME` — không tự thêm lại |
| 2 | Giữ `STATUS` = `CHỜ FEEDBACK` | Bài đăng | Chỉ người phụ trách đổi thành `ĐÃ AIR` **sau khi bài đã đăng thật** |
| 3 | `LINK ẢNH/ KB` để trống cho thiết kế điền | Cả hai | Chưa quay, chưa chụp |
| 4 | Dán **bình luận đầu** ngay sau khi bài lên | Bài đăng | Sheet không có trường này — nội dung nằm trong file `.md` của từng bài |
| 5 | Chạy lại `python3 tools/collection_fetch.py` trước **30/09** | Cả hai | Danh sách 36 máy hạn **2026-09-29**, mà 6 nội dung có giá đăng 30/09 – 02/10 |
| 6 | Sáng ngày đăng 30-09, 01-10, 02-10: gọi 0928939666 xác minh giá + máy còn hay hết | Cả hai | Ba cặp nội dung có giá (luật #10, #12, #17) |
| 7 | **Đánh lại số `Kịch bản <N>`** trong tab KB theo số đang chạy | Reel | Ở đây đánh 1–5 cho trọn tuần, tab đích có thể đang ở số khác |
| 8 | Copy 30 dòng sang tab KB đang chạy, rồi **merge dòng tiêu đề** mỗi kịch bản | Reel | Nhập CSV không giữ merge |

---

## Sinh lại file máy đọc

Sửa file `.md` gốc rồi sinh lại — **đừng sửa thẳng vào `.csv` / `.gs`**:

```bash
D=05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao

python3 tools/ban_giao_to_sheet.py  $D/01-bai-dang/BAN-GIAO-TUAN-28-09-04-10.md
python3 tools/kich_ban_to_sheet.py  $D/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md
```

Mỗi script ghi thẳng vào thư mục chứa file `.md` nguồn, không ghi lẫn sang nhánh kia.
Sửa nội dung xong thì **upload lại lên Drive** — hai file Drive ở trên là ảnh chụp ngày 2026-09-24.
