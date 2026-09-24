# 01-bai-dang — 5 bài viết, tuần 05–11/10/2026

Nhánh **bài đăng**. Khuôn: [`post-template.md`](../../../../04_content/templates/post-template.md) —
lưới **9 dòng × 8 cột**, 1 khối = 1 tuần. Cột A là nhãn, Thứ 2 ở cột B, Chủ Nhật ở cột H.
Bảy nhãn: `ĐỊNH DẠNG · TUYẾN ND · CONTENT · BRIEF ẢNH · LINK ẢNH/ KB · FORMAT · STATUS`.

Tuần này 2 khung giờ/ngày → **2 khối**: `12:15` (5 video) và `20:30` (5 bài viết).

**Sheet đích — Digital Plan - Social Laptop Thịnh Vượng**
https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc

**Bản đã upload Google Drive (2026-09-23) — đúng khuôn tab T9.2026**
https://docs.google.com/spreadsheets/d/1m7VTCtrKkRlZoAPkt227Q2fonItI8_s1cEoExPJBYwc
→ mở ra là thấy lưới đã định dạng sẵn, copy 2 khối dán thẳng sang lịch tháng 10.
Chi tiết: mục *Bản trên Google Drive* ở [../README.md](../README.md).

> Kịch bản quay của 5 video nằm ở nhánh kia: [../02-reel/](../02-reel/). Ô `CONTENT` ở đây
> không thay thế được kịch bản 5 cột.

## File

| File | Nội dung | Trạng thái |
|---|---|---|
| [BAN-GIAO-TUAN-05-11-10.md](BAN-GIAO-TUAN-05-11-10.md) | **Bản người đọc** — 10 khối (5 bài viết + 5 video): caption đầy đủ, brief ảnh, brief quay, checklist fact-check, việc chặn trước khi đăng | 🟡 gộp 2026-09-22 |
| [day-len-sheet.gs](day-len-sheet.gs) | **Apps Script** — dán vào sheet rồi Run hàm `dayLenSheet`, script tự tạo **tab mới** `TUAN 05-11.10 (AI)`. Không ghi đè tab nào đang có | 🟢 sinh 2026-09-22 |
| [SHEET-TUAN-05-11-10-luoi.csv](SHEET-TUAN-05-11-10-luoi.csv) | **Bản chuẩn** — đúng lưới sheet (9 dòng × 8 cột × 2 khối). Dùng khi không muốn chạy script | 🟢 |
| [SHEET-TUAN-05-11-10-ngang.csv](SHEET-TUAN-05-11-10-ngang.csv) | Bản xoay ngang — 1 bài = 1 dòng. Chỉ để lọc/soát, **không** dán vào lịch tuần | 🟢 |
| [SHEET-TUAN-05-11-10-doc.csv](SHEET-TUAN-05-11-10-doc.csv) | ⛔ **Khuôn cũ** — còn dòng `STT` / `DATE & TIME` mà tab đang chạy đã bỏ. Không dùng, giữ lại để đối chiếu | 🔴 lỗi thời |

CSV và `.gs` sinh **tự động** từ `BAN-GIAO-TUAN-05-11-10.md`. Sửa caption thì sửa file `.md`
rồi sinh lại, đừng sửa thẳng file máy đọc:

```bash
python3 tools/ban_giao_to_sheet.py 05_campaigns/2026-10-05-chuong-3-van-phong-15-18-trieu/04-ban-giao/01-bai-dang/BAN-GIAO-TUAN-05-11-10.md
```

## Ba cách đẩy lên sheet

### Cách 1 — Apps Script (nhanh nhất, khuyên dùng)
1. Mở sheet → **Tiện ích mở rộng (Extensions)** → **Apps Script**
2. Xoá code mẫu, dán toàn bộ [day-len-sheet.gs](day-len-sheet.gs), Ctrl+S
3. Bấm **Run** hàm `dayLenSheet` → lần đầu Google hỏi quyền thì **Cho phép**
4. Script tạo tab mới `TUAN 05-11.10 (AI)` → soát lại → copy khối sang đúng chỗ trong lịch tháng 10

### Cách 2 — Nhập CSV
Sheet → **Tệp → Nhập → Tải lên** [SHEET-TUAN-05-11-10-luoi.csv](SHEET-TUAN-05-11-10-luoi.csv)
→ chọn **Chèn trang tính mới** → copy khối sang lịch tháng 10.

### Cách 3 — Dán tay
Mở [BAN-GIAO-TUAN-05-11-10.md](BAN-GIAO-TUAN-05-11-10.md), copy từng ô. Chậm, dễ sót — chỉ dùng khi sửa lẻ 1 bài.

Việc người đẩy phải tự làm: xem bảng ở [../README.md](../README.md).
