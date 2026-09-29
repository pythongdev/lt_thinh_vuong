# 05_campaigns — Chỉ mục chiến dịch

> **Thư mục này là nơi ra kết quả.** Mỗi chiến dịch = 1 folder, chứa trọn vòng đời của nó:
> kế hoạch → bài viết → duyệt → đăng → bàn giao → kết quả. Mở 1 folder là thấy hết.
>
> Các thư mục khác trong repo (`01_company/`, `02_products/`, `03_customers/`, `04_content/strategy/`,
> `10_gates/`, `12_prompts/`…) là **thông tin quản lý** — nguồn fact, chiến lược, luật, khuôn mẫu.
> Chiến dịch **đọc** từ đó, **không** ghi ngược vào đó.

---

## 1. Các chiến dịch

| # | Chiến dịch | Tuần đăng | Viết cho ai | Số bài | Trạng thái |
|---|---|---|---|---|---|
| 1 | [Sinh viên có 13 triệu](2026-09-21-chuong-1-sinh-vien-13-trieu/INDEX.md) | 21–27/09/2026 | P1 — Sinh viên / mua máy đầu tiên | 11 nội dung (6 Reels · 4 bài viết · 4 Story) | 🟡 Soạn xong — **Gate 6 chưa ký**, chưa lên sheet |
| 2 | [Sinh viên: những câu chương 1 chưa trả lời](2026-09-28-chuong-2-sinh-vien-chuyen-sau/INDEX.md) | 28/09–11/10/2026 (**2 tuần**) | P1 — Sinh viên / mua máy đầu tiên | 24 nội dung · 9 tuyến bài (10 tư vấn · 4 bộ ảnh SP · 2 review · 2 bảo hành · 2 so sánh hai máy · 2 tự kiểm tra máy cũ · 2 tương tác CN) · 13 kịch bản video | 🟢 **Bản 3 — 17 tuyến bài (2026-09-29)**: Gate 6 "ok" 2026-09-29 · khối 1, 2 đăng bù cùng đợt 29-09 · Drive: lưới bài đăng đã lên, KB chưa lên · chưa lên sheet team |
| 3 | [Dân văn phòng 15–19 triệu](2026-10-05-chuong-3-van-phong-15-18-trieu/INDEX.md) | **12–25/10/2026 (2 tuần)** — khung 22 nội dung chờ duyệt, bản 22/09 sẽ viết lại theo luật #23–#25 | P2 — Nhân viên văn phòng | 22 nội dung · 6 tuyến (khung) — 10 cũ viết lại + 12 mới | 🟡 Khung chờ duyệt dạng bài · chưa viết chi tiết |

**Chưa có chiến dịch nào đăng thật.** Cả 3 đều đang chờ người ký Gate 6 (luật #8: AI không tự
đăng content thương mại).

---

## 2. Mạch nối giữa các chiến dịch

```
Chương 1 (21–27/09)              Chương 2 (28/09–11/10)           Chương 3 (12–25/10)
Sinh viên có 13 triệu       →    Câu chương 1 chưa trả lời    →    Dân văn phòng 15–19 triệu
P1 · 13 triệu                    P1 · 7–13 triệu, đào sâu           P2 · 15–19 triệu
"mua máy cũ thế nào"             "bố mẹ · cỡ màn · 9 triệu ·        máy gập xoay cho dân đi làm,
                                  256 hay 512 · 1 máy cụ thể"       5 bài viết + 5 video
```

---

## 3. Cấu trúc bên trong mỗi folder chiến dịch

```
<ngày>-chuong-<n>-<tên>/
├── INDEX.md          ← đọc file này trước: có gì, trạng thái, đang bị chặn gì
├── 00-ke-hoach/      kế hoạch đầy đủ + bản tóm tắt cho chủ shop (-TOM-TAT.md)
├── 01-drafts/        Content Package 12 thành phần, chưa qua gate
├── 02-approved/      đã qua đủ 7 gate (10_gates/README.md), chờ tới lịch đăng
├── 03-published/     đã đăng thật, có link bài + mã theo dõi
├── 04-ban-giao/      khối lưới 9×8 để dán vào Google Sheet fanpage
└── 05-ket-qua/       số liệu sau khi đăng + bài học rút ra
```

Bài chạy theo một chiều: `01-drafts/` → `02-approved/` → `03-published/`.
Khuôn mẫu mở chiến dịch mới: [campaign-template.md](campaign-template.md).

---

## 4. Luật phải nhớ khi mở chiến dịch mới

| Luật | Nội dung |
|---|---|
| #23 | **Giọng đời sống của đúng persona** — `03_customers/ngon-ngu-theo-persona.md` |
| #24 | **Bàn giao là lệnh làm** — không lời nhận xét trong caption / brief / kịch bản; cảnh ghi khung hình + góc |
| #25 | **6 tuyến bài / tuần**, 1 chương trải 2 tuần — `04_content/strategy/tuyen-bai-tuan.md` |
| #20 | **Chỉ viết về 36 máy có tồn kho xác thực** — `02_products/36-MAY-DUOC-VIET.md`. Danh sách hết hạn → chạy `python3 tools/collection_fetch.py` |
| #8 | **AI không tự đăng content thương mại.** Gate 6 phải có người ký |
| #18 | **Local trước, sheet sau.** Chỉ đẩy lên Google Sheet khi người dùng nói "ok" |
| #5, #6 | Mỗi bài đúng **1 persona · 1 CTA · 1 objective · 1 journey stage · 1 pillar** |
| #13, #14 | Cấu hình đọc theo **tên sản phẩm** (tag web sai) · bảo hành đọc theo **`warranty_tag` từng máy** |
| — | **Mọi lần nhắc mã P / J / O / CP phải kèm tên tiếng Việt.** Ngoại lệ duy nhất: file `-TOM-TAT.md` cho chủ shop thì **bỏ hẳn mã** |
