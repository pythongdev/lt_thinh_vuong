# 02-reel — 5 kịch bản video, tuần 05–11/10/2026

Nhánh **reels / video**. Khuôn: [`kich-ban-video-sheet.md`](../../../../04_content/templates/reel_template/kich-ban-video-sheet.md) —
**5 cột** `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT MÀN HÌNH · NOTE`, mỗi cảnh 1 dòng,
trên mỗi kịch bản 1 dòng tiêu đề merge.

**Sheet đích — sheet kịch bản video (KB) của team**
https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8

> ⚠️ Sheet này **khác** sheet lịch đăng. Caption và brief ảnh của 5 bài viết nằm ở
> nhánh kia: [../01-bai-dang/](../01-bai-dang/).

## File

| File | Nội dung | Trạng thái |
|---|---|---|
| [KICH-BAN-VIDEO-TUAN-05-11-10.md](KICH-BAN-VIDEO-TUAN-05-11-10.md) | **Bản gốc** — 5 kịch bản × 6 cảnh, đủ 5 cột, dòng tiêu đề merge kèm yêu cầu quay + điều cấm riêng từng video | 🟢 sinh 2026-09-22 |
| [KICH-BAN-VIDEO-TUAN-05-11-10.csv](KICH-BAN-VIDEO-TUAN-05-11-10.csv) | Bản nhập tay — Tệp → Nhập → **Chèn trang tính mới** | 🟢 |
| [day-len-kb-sheet.gs](day-len-kb-sheet.gs) | **Apps Script** — hàm `dayLenKB`, tạo tab mới `KB TUAN 05-11.10 (AI)`, điền 30 cảnh, merge dòng tiêu đề. Không ghi đè tab nào đang có | 🟢 cú pháp đã kiểm |

`.csv` và `.gs` sinh **tự động** từ file `.md`. Sửa kịch bản thì sửa `.md` rồi sinh lại:

```bash
python3 tools/kich_ban_to_sheet.py 05_campaigns/2026-10-05-chuong-3-van-phong-15-18-trieu/04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-05-11-10.md
```

## 📤 Bản trên Google Drive (2026-09-23)

**Google Sheet — KB TUAN 05-11.10.2026 (AI) — Chương 3 dân văn phòng**
https://docs.google.com/spreadsheets/d/1u7OLOmJOq-neAHg_qKafaIkfrqhEASFI35ioo_zRz7k

- Sinh từ [KICH-BAN-VIDEO-TUAN-05-11-10.csv](KICH-BAN-VIDEO-TUAN-05-11-10.csv), đúng 5 cột
  `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT  MÀN HÌNH · NOTE` (header lấy y nguyên tab `gid=1727303797`).
- Đã đọc lại sau khi tạo: đủ **5 kịch bản × 6 cảnh = 30 dòng**, 5 dòng tiêu đề kịch bản.
- File ở **My Drive** của `pythondevhn2023@gmail.com`, **chưa chia sẻ cho ai**.
- ⚠️ Đây **không phải** sheet KB của team. Sheet team (`1Nu5cBft…`) **vẫn chưa bị chạm** —
  connector Drive chỉ tạo được file mới, **không ghi được ô** vào sheet có sẵn.
- ⚠️ Dòng tiêu đề mỗi kịch bản **chưa được merge** — nhập CSV không merge ô được.
  Muốn có sẵn merge thì dùng Apps Script (cách 1 dưới đây).

## Hai cách đẩy lên sheet KB thật của team

### Cách 1 — Apps Script
1. Mở **sheet KB** → **Tiện ích mở rộng (Extensions)** → **Apps Script**
2. Xoá code mẫu, dán toàn bộ [day-len-kb-sheet.gs](day-len-kb-sheet.gs), Ctrl+S
3. Bấm **Run** hàm `dayLenKB` → Google hỏi quyền thì **Cho phép**
4. Script tạo tab mới `KB TUAN 05-11.10 (AI)` → soát lại → copy sang tab KB đang chạy

### Cách 2 — Nhập CSV
Sheet KB → **Tệp → Nhập → Tải lên** [KICH-BAN-VIDEO-TUAN-05-11-10.csv](KICH-BAN-VIDEO-TUAN-05-11-10.csv)
→ **Chèn trang tính mới**.

## Hai việc riêng của nhánh này

| # | Việc | Vì sao |
|---|---|---|
| 1 | **Đánh lại số `Kịch bản <N>`** theo số đang chạy trong tab KB | Ở đây đánh 1–5 cho trọn tuần, tab đích có thể đang ở số khác |
| 2 | Copy 30 dòng từ sheet AI ở trên sang tab KB đang chạy của team | Connector không ghi được ô vào sheet có sẵn — bước này phải làm tay |
| 3 | **Merge dòng tiêu đề** của mỗi kịch bản hết 5 cột sau khi copy | Nhập CSV không giữ merge |
