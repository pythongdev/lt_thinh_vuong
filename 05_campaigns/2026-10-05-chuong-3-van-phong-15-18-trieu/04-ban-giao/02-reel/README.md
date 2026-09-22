# 02-reel — 5 kịch bản video, tuần 05–11/10/2026

Nhánh **reels / video**. Khuôn: [`kich-ban-video-sheet.md`](../../../../04_content/templates/kich-ban-video-sheet.md) —
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

## Hai cách đẩy lên sheet KB

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
| 2 | Upload `.md` + `.csv` lên **Google Drive** — **chỉ sau khi có "ok"** | Luật #22: Drive cũng nằm sau Gate 6. Hiện **chưa upload** |
