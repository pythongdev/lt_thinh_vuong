# 17_danh-gia-he-thong — Đánh giá lại hệ thống theo chu kỳ

> Thư mục này giữ **các lần soi lại toàn bộ hệ thống**: cái gì đang chạy thật, cái gì mới
> là giấy tờ, luật nào đã lệch thực tế, nút thắt nằm ở đâu, và lần sau phải khá hơn ở chỗ nào.
>
> ⚠️ **Đây KHÔNG phải nguồn fact.** Không trích số từ file đánh giá vào bài đăng.
> Nguồn fact vẫn là `01_company/facts/`, `02_products/`.

---

## 1. Khi nào chạy một lần đánh giá

| Dịp | Vì sao |
|---|---|
| **Mỗi tháng 1 lần** | Nhịp cố định, đủ dài để thấy thay đổi, đủ ngắn để chưa kịp trôi |
| **Sau mỗi chiến dịch đã đăng thật** | Lúc này mới có số liệu — đánh giá lúc chưa đăng là đánh giá bản thiết kế |
| **Trước khi mở phase mới** (`14_roadmap/`) | Không mở phase khi phase trước còn là giấy |
| **Sau một sự cố** (đăng sai giá, sai bảo hành, khách bóc phốt) | Tìm gate nào lẽ ra phải chặn mà không chặn |

---

## 2. Đặt tên file

```
YYYY-MM-DD-danh-gia-NN.md      ví dụ: 2026-09-22-danh-gia-01.md
```

- **Mỗi lần 1 file mới. Không sửa đè file cũ.** Giá trị của thư mục này nằm ở chỗ so được
  lần này với lần trước — sửa đè là mất luôn khả năng đó.
- Bản cũ sai thì **không xoá**, ghi thêm một dòng ở đầu file: *"Kết luận X đã sai, xem bản NN."*

---

## 3. Khung bắt buộc — 8 mục

| Mục | Nội dung |
|---|---|
| 0 | **Kết luận 1 phút** — 3–5 câu, đọc xong là biết hệ thống đang đứng ở đâu |
| 1 | **Đã soi những gì** — liệt kê file/lệnh đã chạy, để lần sau lặp lại được |
| 2 | **Chấm 10 tầng** — bảng điểm /5 kèm một câu lý do mỗi tầng |
| 3 | **Phát hiện** — mã `PH-NN`, mức 🔴/🟠/🟡, kèm **bằng chứng là đường dẫn file** |
| 4 | **Vấn đề gốc** — 2–4 cái, thứ sinh ra phần lớn phát hiện ở mục 3 |
| 5 | **Đề xuất** — chia 3 đợt: làm ngay · 2–4 tuần · chờ dữ liệu. Mỗi việc ghi *"xong là khi nào"* |
| 6 | **Việc cần người ngoài quyết** — chủ shop / kỹ thuật / quản trị web |
| 7 | **Bảng chỉ số baseline** — số của hôm nay, để lần sau trừ ra |

---

## 4. Luật khi chấm

1. **Chấm cái đang chạy, không chấm cái đã viết ra.** Một workflow có file mô tả nhưng chưa
   ai chạy lần nào thì tầng đó **không quá 2/5**.
2. **Mọi phát hiện phải có bằng chứng** là đường dẫn file (và số dòng nếu được). Không có
   đường dẫn → đó là cảm giác, đẩy xuống mục "nghi ngờ cần kiểm".
3. **Nêu cả cái đang tốt.** Bản đánh giá chỉ có lỗi sẽ khiến người đọc bỏ luôn thứ đang hiệu quả.
4. **Không đề xuất thứ cần dữ liệu chưa có.** Đề xuất phải làm được bằng nguồn lực hiện tại.
5. Giữ luật viết mã kèm tên tiếng Việt: `P2 (Nhân viên văn phòng)`, `CP04 (Quy trình kiểm tra)` —
   trừ khi làm bản `-TOM-TAT.md` cho chủ shop thì bỏ hẳn mã (xem `CLAUDE.md`).

---

## 5. Các lần đã đánh giá

| # | Ngày | File | Kết luận một dòng |
|---|---|---|---|
| 01 | 2026-09-22 | [2026-09-22-danh-gia-01.md](2026-09-22-danh-gia-01.md) | Nửa trên (fact → draft) chạy tốt và kỷ luật thật; nửa dưới (đăng → đo → học) chưa chạy ngày nào — 21 bài đứng chờ ký, 0 bài lên sóng |

---

## 6. Chỉ số theo dõi qua các lần

Điền lại mỗi lần đánh giá. Cột nào không lấy được số → ghi `n/a`, **không ước lượng**.

| Chỉ số | 2026-09-22 (lần 01) | lần 02 | lần 03 |
|---|---:|---:|---:|
| Bài đã đăng thật (cộng dồn) | 0 | | |
| Content Package đang chờ Gate 6 (Người ký) | 21 | | |
| Ngày chờ lâu nhất của 1 draft | 2 | | |
| Dòng trong `07_analytics/content-performance.md` | 0 | | |
| Pattern trong `07_analytics/learned-patterns.md` | 0 | | |
| Mục 🔴 GẤP còn mở trong `UNVERIFIED.md` | 7 | | |
| Pillar đang bị khoá 🔒 | 2 (CP04, CP06) | | |
| Máy được phép viết | 36 | | |
| Tuổi dữ liệu catalog (ngày) | 7 | | |
| Tổng dòng file .md trong repo | 20.934 | | |
| Số file .md | 156 | | |
| Dung lượng `.git` | 54 MB | | |
