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

## ✅ Đối chiếu lại giá & tồn kho — 2026-09-28

Nguồn: `02_products/catalog/collections/all-2026-09-28.csv` (kéo bằng `collection_fetch.py`).

| Máy nêu trong kịch bản | Giá | Tồn kho | Bảo hành | Kết luận |
|---|---|---|---|---|
| Asus Vivobook S 14 — KB4 bên trái | 16.980.000đ | còn 2 | 12 tháng (máy mới) | 🟢 khớp bài |
| Dell XPS 9310 2in1 256GB — KB4 bên phải, KB1 | 17.980.000đ | còn 7 | 6 tháng | 🟢 khớp bài |
| Dell Latitude 9430 2in1 i7 16GB — KB1 | 18.880.000đ | còn 3 | 6 tháng | 🟢 khớp bài |

Hai con số viết cứng trong Kịch bản 4 **vẫn đúng**, không phải sửa. Không máy nào rời
danh sách trắng, không giá nào đổi so với bản 09-22.

> ⚠️ Danh sách trắng 36 máy **hết hạn 2026-09-29**, trong khi bài chạy **05–11/10**.
> Phải chạy lại `python3 tools/collection_fetch.py` và đối chiếu lại 3 máy trên
> **sát ngày quay / ngày đăng** (luật #10, #20). Bản đối chiếu trên chỉ có giá trị tới 29/09.
>
> Giữ nguyên danh sách **36 máy** theo quyết định 2026-09-28 — bản kéo 09-28 có thêm 4 máy
> đủ điều kiện nhưng **chưa được đưa vào** danh sách trắng.

## Cách đẩy đã chốt (2026-09-28): Apps Script

Người phụ trách tự chạy — connector của hệ thống không ghi được ô vào sheet có sẵn.
Script đã kiểm: **36 dòng** (1 header + 5 dòng tiêu đề + 30 cảnh), mọi dòng đủ 5 ô,
merge đúng 5 dòng tiêu đề, và **dừng với lỗi nếu tab đã tồn tại** — không ghi đè tab nào.

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
