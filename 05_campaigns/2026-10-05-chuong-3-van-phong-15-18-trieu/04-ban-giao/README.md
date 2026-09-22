# 04-ban-giao — khối dán lên Google Sheet

Tuần này bàn giao **2 nhánh, 2 sheet khác nhau** → chia làm **2 thư mục**, mỗi thư mục
có README riêng nói rõ cách đẩy:

| Thư mục | Nhánh | Khuôn | Sheet đích |
|---|---|---|---|
| [01-bai-dang/](01-bai-dang/) | **Bài đăng** — 5 bài viết, lưới 9 dòng × 8 cột | [`post-template.md`](../../../04_content/templates/post-template.md) | Digital Plan - Social<br>https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc |
| [02-reel/](02-reel/) | **Reels / video** — 5 kịch bản, 5 cột `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT MÀN HÌNH · NOTE` | [`kich-ban-video-sheet.md`](../../../04_content/templates/kich-ban-video-sheet.md) | Sheet kịch bản video (KB)<br>https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8 |

> Ô `CONTENT` và ô `BRIEF ẢNH` của lưới 9×8 **không thay thế được kịch bản 5 cột** —
> người quay cần từng cảnh một dòng. **Thiếu nhánh nào là chưa bàn giao xong** (luật #21).
>
> Hai sheet chạy riêng, hai Apps Script riêng. Đừng chạy script của nhánh này lên sheet của nhánh kia.

---

## ⚠️ Chưa có gì được ghi lên sheet

Connector Google Drive của hệ thống **chỉ đọc, không ghi được ô**. Mọi file trong 2 thư mục
trên mới là **bản xuất để người đẩy lên** — chưa đụng vào sheet thật của team. Chỉ được coi là
"đã lên sheet" sau khi người phụ trách chạy script / dán tay xong và **nhìn thấy khối trong sheet**.

Sheet lịch đăng đang mở quyền **ai có link cũng sửa được** (kiểm tra 2026-09-22) → chạy script
được ngay, không cần xin thêm quyền.

## 📤 Bản trên Google Drive (2026-09-22)

**Google Sheet — BÀN GIAO TUẦN 05–11.10.2026 — Chương 3 dân văn phòng**
https://docs.google.com/spreadsheets/d/1d7TkfkBIcIMtAtq5AnvbtEoBfk4EYUWyxzWOe3ynf9A

- Sinh từ [01-bai-dang/SHEET-TUAN-05-11-10-luoi.csv](01-bai-dang/SHEET-TUAN-05-11-10-luoi.csv), đúng lưới 9 dòng × 8 cột.
- Đã đối chiếu sau khi tạo: đủ 10 nội dung, giá và bảo hành khớp bản repo.
- File ở **My Drive**, **chưa chia sẻ cho ai**. Muốn team đọc thì tự bấm Chia sẻ.
- ⚠️ Đây **không phải** sheet lịch đăng của team. Sheet team vẫn chưa bị chạm.
- Nhánh **reel chưa upload Drive** — chờ Gate 6 ký xong (luật #22).

---

## Việc người đẩy phải tự làm

| # | Việc | Nhánh | Vì sao |
|---|---|---|---|
| 1 | Dán 2 khối vào đúng chỗ trong lịch tháng 10, giữ nguyên thứ tự dòng | Bài đăng | Tab đang chạy không còn dòng `STT`/`TITLE` — không tự thêm lại |
| 2 | Giữ `STATUS` = `CHỜ FEEDBACK` | Bài đăng | Chỉ người phụ trách đổi thành `ĐÃ AIR` **sau khi bài đã đăng thật** |
| 3 | `LINK ẢNH/ KB` để trống cho thiết kế điền | Bài đăng | Chưa quay, chưa chụp |
| 4 | Sáng mỗi ngày đăng: gọi 0928939666 xác minh kho **4 bài có giá** (bài 6, 7, 8, 10) | Bài đăng | Xem khối 🔴 trong `BRIEF ẢNH` của từng bài đó |
| 5 | Chạy lại `python3 tools/collection_fetch.py` sát ngày đăng | Cả hai | Danh sách 36 máy hạn **2026-09-29**, giá đổi → sửa bài trước khi đăng |
| 6 | Dán **bình luận đầu** ngay sau khi bài lên | Bài đăng | Sheet không có trường này — nội dung ở mục 11 của file .md |
| 7 | **Đánh lại số `Kịch bản <N>`** trong tab KB theo số đang chạy | Reel | Ở đây đánh 1–5 cho trọn tuần, tab đích có thể đang ở số khác |
| 8 | Upload `.md` + `.csv` lên **Google Drive** sau khi có "ok" | Reel | Bước 5 mục 8 của `kich-ban-video-sheet.md` |

---

## Sinh lại file máy đọc

Sửa file `.md` gốc rồi sinh lại — **đừng sửa thẳng vào `.csv` / `.gs`**:

```bash
D=05_campaigns/2026-10-05-chuong-3-van-phong-15-18-trieu/04-ban-giao

python3 tools/ban_giao_to_sheet.py  $D/01-bai-dang/BAN-GIAO-TUAN-05-11-10.md
python3 tools/kich_ban_to_sheet.py  $D/02-reel/KICH-BAN-VIDEO-TUAN-05-11-10.md
```

Mỗi script ghi thẳng vào thư mục chứa file `.md` nguồn, không ghi lẫn sang nhánh kia.
