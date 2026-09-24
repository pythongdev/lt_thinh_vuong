# 04-ban-giao — khối dán lên Google Sheet

Tuần này bàn giao **2 nhánh, 2 sheet khác nhau** → chia làm **2 thư mục**, mỗi thư mục
có README riêng nói rõ cách đẩy:

| Thư mục | Nhánh | Khuôn | Sheet đích |
|---|---|---|---|
| [01-bai-dang/](01-bai-dang/) | **Bài đăng** — 5 bài viết, lưới 9 dòng × 8 cột | [`post-template.md`](../../../04_content/templates/post-template.md) | Digital Plan - Social<br>https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc |
| [02-reel/](02-reel/) | **Reels / video** — 5 kịch bản, 5 cột `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT MÀN HÌNH · NOTE` | [`kich-ban-video-sheet.md`](../../../04_content/templates/reel_template/kich-ban-video-sheet.md) | Sheet kịch bản video (KB)<br>https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8 |

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

## 📤 Bản trên Google Drive

**Bản đang dùng — đúng khuôn tab T9.2026** (upload 2026-09-23)
*BÀN GIAO TUẦN 05–11.10.2026 — Chương 3 dân văn phòng (khuôn tab T9.2026)*
https://docs.google.com/spreadsheets/d/1m7VTCtrKkRlZoAPkt227Q2fonItI8_s1cEoExPJBYwc

- Sinh từ [01-bai-dang/day-len-sheet.gs](01-bai-dang/day-len-sheet.gs) (cùng nguồn với
  [SHEET-TUAN-05-11-10-luoi.csv](01-bai-dang/SHEET-TUAN-05-11-10-luoi.csv)) → file Excel →
  upload Drive, Google tự chuyển thành Sheet. Tab tên `TUAN 05-11.10 (AI)`.
- Mang sẵn định dạng của tab đang chạy: cột A là cột nhãn (rộng 120px), cột B–H 340px,
  wrap + căn trên, 2 dòng thứ trong tuần tô nền `#d9ead3` in đậm, dòng `CONTENT` cao 420px,
  dòng `BRIEF ẢNH` cao 300px, đóng băng cột A. Dán sang lịch tháng 10 là giữ nguyên hình.
- Nội dung: đủ 10 khối (5 bài viết + 5 video), `STATUS` = `CHỜ FEEDBACK`,
  dòng `LINK ẢNH/ KB` để trống cho thiết kế điền.

**Bản cũ — chỉ có chữ, không có định dạng** (upload 2026-09-22, nhập từ CSV)
https://docs.google.com/spreadsheets/d/1d7TkfkBIcIMtAtq5AnvbtEoBfk4EYUWyxzWOe3ynf9A
→ nội dung giống hệt bản trên. Giữ hay xoá tuỳ người dùng — **không** đưa cho team bản này.

- Cả hai file ở **My Drive** của người dùng, **chưa chia sẻ cho ai**. Muốn team đọc thì tự bấm Chia sẻ.
- ⚠️ Đây **không phải** sheet lịch đăng của team. Sheet team (`1crOiBL4...`) vẫn chưa bị chạm.
**Google Sheet — KB TUAN 05-11.10.2026 (AI) — Chương 3 dân văn phòng** (2026-09-23)
https://docs.google.com/spreadsheets/d/1u7OLOmJOq-neAHg_qKafaIkfrqhEASFI35ioo_zRz7k

- Sinh từ [02-reel/KICH-BAN-VIDEO-TUAN-05-11-10.csv](02-reel/KICH-BAN-VIDEO-TUAN-05-11-10.csv), đúng 5 cột của tab `gid=1727303797`.
- Đã đọc lại sau khi tạo: đủ 5 kịch bản × 6 cảnh = 30 dòng.
- File ở **My Drive**, **chưa chia sẻ cho ai**. Dòng tiêu đề kịch bản **chưa merge**.
- ⚠️ Đây **không phải** sheet KB của team. Sheet KB team (`1Nu5cBft…`) vẫn chưa bị chạm.

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
| 8 | Copy 30 dòng từ sheet AI sang tab KB đang chạy, rồi **merge dòng tiêu đề** mỗi kịch bản | Reel | Connector Drive chỉ tạo file mới, không ghi được ô vào sheet có sẵn |

---

## Sinh lại file máy đọc

Sửa file `.md` gốc rồi sinh lại — **đừng sửa thẳng vào `.csv` / `.gs`**:

```bash
D=05_campaigns/2026-10-05-chuong-3-van-phong-15-18-trieu/04-ban-giao

python3 tools/ban_giao_to_sheet.py  $D/01-bai-dang/BAN-GIAO-TUAN-05-11-10.md
python3 tools/kich_ban_to_sheet.py  $D/02-reel/KICH-BAN-VIDEO-TUAN-05-11-10.md
```

Mỗi script ghi thẳng vào thư mục chứa file `.md` nguồn, không ghi lẫn sang nhánh kia.
