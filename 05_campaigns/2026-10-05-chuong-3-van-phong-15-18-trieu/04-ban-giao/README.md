# 04-ban-giao — khối 10 trường dán vào Google Sheet

Format: `04_content/templates/fanpage-sheet.md` mục 1 — 10 trường đúng thứ tự dòng:
`DATE & TIME · STT · ĐỊNH DẠNG · TUYẾN ND · TITLE · CONTENT · BRIEF ẢNH · LINK ẢNH · FORMAT · STATUS`.

Sheet đích: **Digital Plan - Social Laptop Thịnh Vượng**
https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc

---

## Đang có gì

| File | Nội dung | Trạng thái |
|---|---|---|
| [BAN-GIAO-TUAN-05-11-10.md](BAN-GIAO-TUAN-05-11-10.md) | **Bản người đọc** — 10 khối 10 trường (5 bài viết + 5 video), tuần 05–11/10/2026: caption đầy đủ, brief ảnh, brief quay, checklist fact-check, việc chặn trước khi đăng | 🟡 gộp 2026-09-22 |
| [day-len-sheet.gs](day-len-sheet.gs) | **Apps Script** — dán vào sheet rồi bấm Run, script tự tạo **tab mới** `TUAN 05-11.10 (AI)` và điền đủ 10 trường × 10 bài. Không ghi đè tab nào đang có | 🟢 sinh 2026-09-22, cú pháp đã kiểm |
| [SHEET-TUAN-05-11-10-doc.csv](SHEET-TUAN-05-11-10-doc.csv) | **Bản nhập tay, layout giống sheet** — cột A = tên trường, cột B–K = 10 bài. Dùng khi không muốn chạy script: File → Nhập (Import) → Chèn trang tính mới | 🟢 |
| [SHEET-TUAN-05-11-10-ngang.csv](SHEET-TUAN-05-11-10-ngang.csv) | Bản xoay ngang — 1 bài = 1 dòng, 10 cột. Dùng để lọc/soát, không dùng để dán vào lịch tuần | 🟢 |

Cả 3 file máy đọc được sinh **tự động từ** `BAN-GIAO-TUAN-05-11-10.md`.
Sửa caption thì sửa file .md rồi sinh lại, đừng sửa thẳng vào CSV / .gs.

---

## ⚠️ Chưa có gì được ghi lên sheet

Connector Google Drive của hệ thống **chỉ đọc, không ghi được ô**. Ba file trên mới là
**bản xuất để người đẩy lên** — chưa đụng vào sheet thật. Chỉ được coi là "đã lên sheet"
sau khi người phụ trách chạy script hoặc dán tay xong và nhìn thấy khối trong sheet.

Sheet đang mở quyền **ai có link cũng sửa được** (kiểm tra 2026-09-22) → chạy script được ngay,
không cần xin thêm quyền.

### Cách 1 — Apps Script (nhanh nhất, khuyên dùng)
1. Mở sheet → **Tiện ích mở rộng (Extensions)** → **Apps Script**
2. Xoá code mẫu, dán toàn bộ [day-len-sheet.gs](day-len-sheet.gs), Ctrl+S
3. Bấm **Run** hàm `dayLenSheet` → lần đầu Google hỏi quyền thì **Cho phép**
4. Script tạo tab mới `TUAN 05-11.10 (AI)` → soát lại → copy khối sang đúng chỗ trong lịch tháng 10

### Cách 2 — Nhập CSV
Sheet → **Tệp → Nhập → Tải lên** [SHEET-TUAN-05-11-10-doc.csv](SHEET-TUAN-05-11-10-doc.csv)
→ chọn **Chèn trang tính mới** → copy khối sang lịch tháng 10.

### Cách 3 — Dán tay
Mở [BAN-GIAO-TUAN-05-11-10.md](BAN-GIAO-TUAN-05-11-10.md), copy từng ô. Chậm, dễ sót — chỉ dùng khi sửa lẻ 1 bài.

---

## Việc người đẩy phải tự làm

| # | Việc | Vì sao |
|---|---|---|
| 1 | **Đánh cột `STT`** — cả 10 bài đang để trống | Phải nối tiếp số `POST` đang chạy trong lịch tháng 10, script không đoán hộ được |
| 2 | Giữ `STATUS` = `CHỜ FEEDBACK` | Chỉ người phụ trách đổi thành `ĐÃ AIR` **sau khi bài đã đăng thật** |
| 3 | `LINK ẢNH` để trống cho thiết kế điền | Chưa quay, chưa chụp |
| 4 | Sáng mỗi ngày đăng: gọi 0928939666 xác minh kho **4 bài có giá** (bài 6, 7, 8, 10) | Xem khối 🔴 trong `BRIEF ẢNH` của từng bài đó |
| 5 | Chạy lại `python3 tools/collection_fetch.py` sát ngày đăng | Danh sách 36 máy hạn **2026-09-29**, giá đổi → sửa bài trước khi đăng |
| 6 | Dán **bình luận đầu** ngay sau khi bài lên | Sheet không có trường này — nội dung ở mục 11 của file .md |

---

## Sinh lại 3 file máy đọc

Sau khi sửa `BAN-GIAO-TUAN-05-11-10.md`:

```bash
python3 tools/ban_giao_to_sheet.py 05_campaigns/2026-10-05-chuong-3-van-phong-15-18-trieu/04-ban-giao/BAN-GIAO-TUAN-05-11-10.md
```
