# 02-reel — 5 kịch bản video, tuần 28/09 – 04/10/2026

Nhánh **reels / video** của chương 2 (sinh viên). Khuôn:
[`kich-ban-video-sheet.md`](../../../../04_content/templates/reel_template/kich-ban-video-sheet.md) —
**5 cột** `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT MÀN HÌNH · NOTE`, mỗi cảnh 1 dòng,
trên mỗi kịch bản 1 dòng tiêu đề merge.

**Sheet đích — sheet kịch bản video (KB) của team**
https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8

> ⚠️ Sheet này **khác** sheet lịch đăng. Caption và brief của 10 nội dung nằm ở nhánh kia:
> [../01-bai-dang/](../01-bai-dang/).

## Năm kịch bản — mỗi cái là bản video của bài đăng cùng ngày

| KB | Ngày quay / đăng | Tên | Có giá? |
|---|---|---|---|
| KB1 | T2 28-09 · 12:15 | Ba câu bố mẹ hay hỏi | không |
| KB2 | T3 29-09 · 12:15 | Đo bằng cái balo của bạn | không |
| KB3 | T4 30-09 · 12:15 | Dưới 10 triệu vẫn có 16GB RAM | **có — 3 máy** |
| KB4 | T5 01-10 · 12:15 | 700 nghìn đó mua được gì | **có — 1 cặp** |
| KB5 | T6 02-10 · 12:15 | Hai mươi giây soi điểm chết | **có — 1 máy** |

Nguồn fact, 4 trục P / J / O / CP và điều cấm của từng kịch bản lấy nguyên từ Content Package
của bài đăng cùng ngày trong [../../01-drafts/](../../01-drafts/) — không mở fact mới.

## File

| File | Nội dung | Trạng thái |
|---|---|---|
| [KICH-BAN-VIDEO-TUAN-28-09-04-10.md](KICH-BAN-VIDEO-TUAN-28-09-04-10.md) | **Bản gốc** — 5 kịch bản × 6 cảnh, đủ 5 cột, dòng tiêu đề merge kèm yêu cầu quay + điều cấm riêng từng video | 🟢 sinh 2026-09-24 |
| [KICH-BAN-VIDEO-TUAN-28-09-04-10.csv](KICH-BAN-VIDEO-TUAN-28-09-04-10.csv) | Bản nhập tay — Tệp → Nhập → **Chèn trang tính mới** | 🟢 |
| [day-len-kb-sheet.gs](day-len-kb-sheet.gs) | **Apps Script** — hàm `dayLenKB`, tạo tab mới `KB TUAN 28-09-04.10 (AI)`, điền 30 cảnh, merge dòng tiêu đề. Không ghi đè tab nào đang có | 🟢 |

`.csv` và `.gs` sinh **tự động** từ file `.md`. Sửa kịch bản thì sửa `.md` rồi sinh lại:

```bash
python3 tools/kich_ban_to_sheet.py 05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md
```

## 📤 Bản trên Google Drive (2026-09-24)

**Google Sheet — KB TUAN 28.09–04.10.2026 (AI) — Chương 2 sinh viên**
https://docs.google.com/spreadsheets/d/113HxJNiapcllmf7lIOeuDJhw2JKCPKvUK9GKzPREDs8

- Sinh từ [KICH-BAN-VIDEO-TUAN-28-09-04-10.csv](KICH-BAN-VIDEO-TUAN-28-09-04-10.csv), đúng 5 cột
  `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT  MÀN HÌNH · NOTE` (header lấy y nguyên tab `gid=1727303797`).
- Đã đọc lại sau khi tạo: đủ **5 kịch bản × 6 cảnh = 30 dòng**, 5 dòng tiêu đề kịch bản.
- Nằm trong thư mục Drive của chương 2: https://drive.google.com/drive/folders/1wbJJaGa7YhwX13XPFD9vX6eP2_NboQNB
- File ở **My Drive**, **chưa chia sẻ cho ai**. Dòng tiêu đề kịch bản **chưa merge** (nhập CSV không merge được).
- ⚠️ Đây **không phải** sheet KB của team. Sheet KB team (`1Nu5cBft…`) **vẫn chưa bị chạm**.

## Hai cách đẩy lên sheet KB thật của team

### Cách 1 — Apps Script (có sẵn merge, định dạng)
1. Mở **sheet KB** → **Tiện ích mở rộng (Extensions)** → **Apps Script**
2. Xoá code mẫu, dán toàn bộ [day-len-kb-sheet.gs](day-len-kb-sheet.gs), Ctrl+S
3. Bấm **Run** hàm `dayLenKB` → Google hỏi quyền thì **Cho phép**
4. Script tạo tab mới `KB TUAN 28-09-04.10 (AI)` → soát lại → copy sang tab KB đang chạy

### Cách 2 — Nhập CSV
Sheet KB → **Tệp → Nhập → Tải lên** [KICH-BAN-VIDEO-TUAN-28-09-04-10.csv](KICH-BAN-VIDEO-TUAN-28-09-04-10.csv)
→ **Chèn trang tính mới**.

## Việc riêng của nhánh này

| # | Việc | Vì sao |
|---|---|---|
| 1 | **Đánh lại số `Kịch bản <N>`** theo số đang chạy trong tab KB | Ở đây đánh 1–5 cho trọn tuần, tab đích có thể đang ở số khác |
| 2 | Copy 30 dòng từ sheet AI sang tab KB đang chạy của team | Connector không ghi được ô vào sheet có sẵn |
| 3 | **Merge dòng tiêu đề** của mỗi kịch bản hết 5 cột sau khi copy | Nhập CSV không giữ merge |
| 4 | Trước ngày quay KB3–KB5: chạy `collection_fetch.py` + gọi 0928939666 xác minh giá | Ba kịch bản này có giá trên màn hình, danh sách 36 máy hạn 2026-09-29 |
| 5 | KB3 cảnh 4: **không quay chiếc 7420 vỏ carbon ở thế xoay gập / chạm màn** | Tên sản phẩm máy đó không có cảm ứng (luật #13) |
