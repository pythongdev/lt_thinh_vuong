# Khuôn — có video mới thì làm gì

> Dùng khi bạn xem được một video hay và muốn biến nó thành **dạng đặt hàng được**,
> không phải chỉ lưu link rồi quên.
> Chỉ mục các dạng đang có: [INDEX.md](INDEX.md)

---

## 6 bước

| Bước | Làm gì |
|---|---|
| 1 | **Tải / quay màn hình video gốc.** Đặt tên `<ngày>-<mô-tả-ngắn>.mp4`, ví dụ `2026-09-22-reel-goc-3-kich-ban-hook.mp4` |
| 2 | **Đặt tên cho dạng** — 3–6 chữ, gọi được thành lời khi đặt hàng người dựng. Ví dụ *"B-roll mượn + thẻ gọi tên"* |
| 3 | **Tạo thư mục** `<NN>-<ten-dang>/nguon/` với `NN` là số tiếp theo trong [INDEX.md](INDEX.md) mục 1 |
| 4 | **Bỏ video vào `nguon/`** + viết `nguon/nguon.md` theo khuôn mục 2 dưới |
| 5 | **Viết `huong-dan.md`** theo khuôn mục 3 dưới |
| 6 | **Thêm 1 dòng vào bảng mục 1 của [INDEX.md](INDEX.md)** — không làm bước này thì coi như chưa có |

Khi nào có thời gian thì viết thêm 1 file `vi-du-*.md` — một kịch bản dựng xong theo dạng đó,
gửi thẳng cho người quay được. Mẫu đang có:
[01-broll-muon-the-goi-ten/vi-du-kich-ban-ba-cau-hoi.md](01-broll-muon-the-goi-ten/vi-du-kich-ban-ba-cau-hoi.md).

---

## 1. Ba câu phải trả lời được trước khi bóc

Không trả lời được cả ba → video đó chưa đáng bóc thành dạng, cứ để link trong ghi chú.

1. **Nó giữ người xem bằng cái gì?** Gọi tên được cơ chế, không phải "nó hay".
2. **Khung của nó lặp lại được không?** Làm được 5 video khác cùng khung thì mới là *dạng*.
3. **Luật của shop có cấm phần nào không?** Xem [INDEX.md](INDEX.md) mục 4 — phần bị cấm
   phải ghi rõ trong `huong-dan.md`, đừng để người dựng tự phát hiện.

---

## 2. Khuôn `nguon/nguon.md`

```markdown
# Nguồn — <tên dạng>

| | |
|---|---|
| File | `<tên file>.mp4` |
| Nguồn | <nền tảng, tác giả, có tick xanh không, ngành gì> |
| Caption gốc | <chép lại> |
| Độ dài thật | <giây> |
| Khung hình | <dọc 9:16 / ngang> |
| Tương tác | 👍 … · 💬 … · ↗️ … · 🔖 … |
| Lấy về ngày | <ngày> |

**Chỉ số đáng chú ý:** <tỉ lệ lưu / chia sẻ / bình luận nói lên điều gì về dạng này>

**Phần chưa đọc được:** <ví dụ: chưa bóc được lời thoại — ghi rõ, đừng đoán>
```

---

## 3. Khuôn `huong-dan.md` — 10 mục

Lấy nguyên bộ khung của [01-broll-muon-the-goi-ten/huong-dan.md](01-broll-muon-the-goi-ten/huong-dan.md):

| Mục | Nội dung |
|---|---|
| 0 | Đọc file này để làm gì |
| 1 | Video gốc là gì (bảng — trỏ sang `nguon/nguon.md`) |
| 2 | Bóc băng từng giây + quy cách chữ đo trực tiếp từ hình |
| 3 | **Công thức rút ra** — sơ đồ nhịp + 1 câu nguyên tắc |
| 4 | Những thứ giữ người xem, đánh số, mỗi thứ 2–3 câu |
| 5 | **Bảng bê được / không bê được** sang Laptop Thịnh Vượng, kèm số luật |
| 6 | 2–3 đề tài mẫu đã map sẵn 4 trục |
| 7 | **BRIEF giao người quay/dựng** — khối copy được, không gửi kèm file này |
| 8 | **PROMPT cho AI viết kịch bản** |
| 9 | Nếu dùng AI sinh hình — giới hạn bắt buộc |
| 10 | Checklist trước khi giao |

**Mục 6 — 4 trục phải viết đủ mã + tên tiếng Việt**, ví dụ:
`P2 (Nhân viên văn phòng)` · `J3 (Đang so sánh)` · `O3 (Tin công ty)` · `CP08 (Sai lầm khi mua)`.
Viết `P2` trơn là sai. Bảng tra ở `CLAUDE.md`.

---

## 4. Ba lỗi hay gặp khi bóc

1. **Chép lại nội dung thay vì khung.** Video gốc thường khác ngành — cái bê được là
   *nhịp và cách gọi tên ý*, không phải chủ đề.
2. **Đoán phần không đọc được.** Chưa bóc được lời thoại thì ghi *"chưa đọc được"*,
   đừng viết như thể đã nghe.
3. **Quên đối chiếu `04_content/formats/reels.md`.** Đó là luật format chính thức.
   Dạng mới mâu thuẫn với nó → file đó thắng, và ghi rõ chỗ mâu thuẫn trong mục 5.
