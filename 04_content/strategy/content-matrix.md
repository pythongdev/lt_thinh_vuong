# Content Matrix

> Bảng điều phối: ghép **Persona × Journey × Objective × Pillar × Format × CTA**.
> Dùng khi lập kế hoạch tuần và khi kiểm tra "content này có hợp lệ không".

---

## 1. Ma trận chuẩn — Persona × Journey

| Persona | J0–J1 (chưa biết) | J2 (quan tâm) | J3 (cân nhắc) | J4 (lead) |
|---|---|---|---|---|
| **P1 Sinh viên** | CP08 sai lầm · Reels · O1 | CP02 kiến thức · O2 | CP01 tư vấn ngân sách · O4 | CP05 review máy 10–15tr · O5 |
| **P2 Văn phòng** | CP09 thị trường · Reels · O1 | CP02 · O2 | CP03 so sánh dòng · O4 | CP10 máy có sẵn · O5 |
| **P3 Game thủ** | CP08 · Reels · O1 | CP02 (GPU/FPS) · O2 | CP03 cùng tầm giá · O4 | CP05 review · O5 |
| **P4 Đồ hoạ/kỹ thuật** | CP09 · O1 | CP02 (RAM/VRAM) · O2 | CP05 theo phần mềm · O4 | CP05 · O5 |
| **P5 Doanh nghiệp** | CP07 hậu trường · O1 | 🔒 CP04 quy trình test · O3 | CP01 trang bị theo lô · O4 | CP10 · O5 |

> 🔒 = ô bị khoá vì thiếu fact, **không được xếp lịch**. Ô CP04 (mọi persona) đang khoá —
> chưa có quy trình test đã xác minh (`UNVERIFIED.md` #7, #12). Pillar CP06 cũng khoá — chưa có case khách thật.
> ⚠️ P5 còn vướng: chưa rõ có xuất hoá đơn VAT / giá theo lô (`UNVERIFIED.md`, `personas.md` P5).

---

## 2. Ma trận Objective × Format

| | Reels | Post ảnh | Carousel | Story | Customer story |
|---|---|---|---|---|---|
| O1 Reach | ✅ ưu tiên | ○ | ○ | ○ | ○ |
| O2 Education | ✅ | ✅ | ✅ ưu tiên | ○ | ✗ |
| O3 Trust | ✅ | ✅ | ○ | ✅ | ✅ ưu tiên |
| O4 Consideration | ○ | ✅ | ✅ ưu tiên | ○ | ✅ |
| O5 Conversion | ○ | ✅ ưu tiên | ○ | ✅ | ✗ |

✅ hợp · ○ dùng được · ✗ không nên

---

## 3. Kiểm tra hợp lệ của một content atom

Một atom hợp lệ khi **cả 6 điều** đúng:

1. Có đúng 1 persona (P1–P5).
2. Có đúng 1 journey stage (J0–J7).
3. Có đúng 1 objective (O1–O5).
4. Có đúng 1 pillar (CP01–CP10).
5. Ô tương ứng trong ma trận mục 1 hoặc 2 không bị đánh ✗ hoặc 🔒.
6. Mọi fact trong `proof` truy được về file nguồn.

Sai bất kỳ điều nào → Gate 0 (Strategy Check) chặn lại. Xem `10_gates/README.md`.

---

## 4. Đọc bảng để tìm lỗ hổng

Cuối mỗi tuần, tô lại bảng mục 1 bằng số bài đã đăng.
- Ô trống nhiều tuần liên tiếp → phễu đang hở ở đó.
- Ô dày đặc nhưng không ra kết quả → sai format hoặc sai hook, không phải sai chủ đề.

Kết quả ghi vào `07_analytics/reports/` theo mẫu tuần.
