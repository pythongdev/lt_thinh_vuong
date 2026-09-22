# Chỉ mục — Nghiên cứu video

> ⚠️ **Trạng thái: NGHIÊN CỨU / THAM KHẢO.** Cả thư mục này nằm trong `16_research/` —
> **không phải nguồn fact.** Giá / cấu hình / bảo hành / tồn kho vẫn chỉ lấy từ
> `02_products/36-MAY-DUOC-VIET.md` (luật #20) và `01_company/facts/`.
> Không có kịch bản nào ở đây được đăng thẳng — phải copy sang
> `05_campaigns/<chiến-dịch>/01-drafts/` (hoặc `04_content/drafts/` nếu là bài lẻ) và chạy đủ
> **7 gate** (`10_gates/README.md`), Gate 6 phải có người ký (luật #8).

Cập nhật 2026-09-22.

---

## 0. Đọc file này để làm gì

Mỗi khi xem được một video hay trên mạng, thay vì lưu link rồi quên, ta **bóc nó ra thành
một dạng video đặt hàng được**: công thức nhịp, quy cách chữ, brief giao người dựng,
kịch bản mẫu. Mỗi dạng = **một thư mục** trong này.

File này trả lời đúng hai câu:
1. **Đang có những dạng video nào, dạng nào hợp với bài tôi sắp làm?** → mục 1
2. **Tôi vừa có video mới, bỏ vào đâu?** → mục 3 + [khuon-dang-video-moi.md](khuon-dang-video-moi.md)

---

## 1. Các dạng video đã bóc xong

| # | Dạng | Dài | Hợp với | Quay tại shop? | Trạng thái |
|---|---|---|---|---|---|
| 01 | [B-roll mượn + thẻ gọi tên](01-broll-muon-the-goi-ten/huong-dan.md) | 21–22s | Mẹo / cảnh báo / "3 thứ…" — mục tiêu **O2 (Hiểu vấn đề)**, **O3 (Tin công ty)**, **O4 (Cân nhắc mua)** | Gần như không cần | ✅ Dùng được, có kịch bản mẫu |

### 01 — B-roll mượn + thẻ gọi tên

```
MỒI 6s ("ba ...") → (ví dụ 3s → thẻ gọi tên 1,5s) × đúng 3 lần → thẻ chốt 1s → lặp về đầu
```
Nguyên tắc: **chiếu ví dụ trước, gọi tên sau.**

- **Mạnh nhất ở:** chỉ số **lưu** và **% xem hết** — không chấm dạng này bằng inbox.
- **Persona đã thử map:** P1 (Sinh viên / mua máy đầu tiên), P2 (Nhân viên văn phòng)
- **Journey:** J2 (Bắt đầu quan tâm laptop cũ), J3 (Đang so sánh)
- **Pillar:** CP01 (Tư vấn mua), CP04 (Quy trình kiểm tra), CP08 (Sai lầm khi mua)
- **Trong thư mục có:**
  - [huong-dan.md](01-broll-muon-the-goi-ten/huong-dan.md) — bóc băng, công thức, brief cho người dựng, prompt cho AI viết kịch bản
  - [vi-du-kich-ban-ba-cau-hoi.md](01-broll-muon-the-goi-ten/vi-du-kich-ban-ba-cau-hoi.md) — 1 kịch bản dựng xong, gửi đi quay được ngay
  - [nguon/](01-broll-muon-the-goi-ten/nguon/) — video gốc + xuất xứ

---

## 2. Đọc kèm (ngoài thư mục này)

| File | Là gì |
|---|---|
| `16_research/cach-viet-video-ngan-NGHIEN-CUU.md` | Nguyên tắc chung mọi video ngắn — hook, nhịp, retention. Đọc trước khi bóc dạng mới. |
| `04_content/formats/reels.md` | **Luật format chính thức** của hệ thống. Dạng nào trong đây mâu thuẫn với file đó → file đó thắng. |
| `12_prompts/facebook/reels/` | Prompt sinh kịch bản |
| `02_products/36-MAY-DUOC-VIET.md` | Máy nào được lên hình (luật #20) |

---

## 3. Quy ước thư mục — mỗi dạng một folder

```
16_research/video/
├── INDEX.md                      ← file này
├── khuon-dang-video-moi.md       ← khuôn bóc một video mới
└── <NN>-<ten-dang>/
    ├── huong-dan.md              ← bóc băng + công thức + brief + prompt  (bắt buộc)
    ├── vi-du-*.md                ← kịch bản mẫu đã dựng xong             (nên có)
    └── nguon/
        ├── nguon.md              ← video gốc từ đâu, số liệu tương tác
        └── <ngày>-<tên>.mp4      ← file video gốc
```

- Số thứ tự `NN` tăng dần theo thứ tự bóc: `01`, `02`, `03`…
- Tên thư mục = **tên dạng viết thường, gạch nối**, gọi được thành lời khi đặt hàng.
- Thêm dạng mới → làm theo [khuon-dang-video-moi.md](khuon-dang-video-moi.md), rồi **thêm 1 dòng vào bảng mục 1**.

---

## 4. Luật vẫn giữ nguyên trong mọi dạng video

1. **Phải có phụ đề.** Phần lớn người xem tắt tiếng (`04_content/formats/reels.md`).
2. **Khung hình nào có laptop → phải là máy thật của shop**, có tên trong
   `02_products/36-MAY-DUOC-VIET.md` (luật #20). Hình mượn chỉ dùng cho cảnh **không có laptop**.
3. **Không hiện giá lên hình.** Giá đổi từng tuần, video sống nhiều tháng → giá để ở
   bình luận đầu tiên, xác minh lại trong ngày đăng.
4. **Không nói "còn X máy", "sắp hết"** (luật #12), **không bịa khuyến mãi** (luật #15),
   **không nêu tên đối thủ** (luật #9).
5. **Bảo hành đọc theo từng máy** (luật #14) — không mặc định 6 tháng.
6. Mỗi video **đúng 1 CTA**, và với mục tiêu **O1 (Tiếp cận)** / **O2 (Hiểu vấn đề)** thì
   CTA **không phải "inbox chốt đơn"** — gắn CTA bán vào reel tiếp cận là giết reach.
