# Content Backlog — Ideas

> Schema: `idea-schema.md`. Sắp theo `priority` giảm dần.
> Cập nhật: 2026-09-09.
> ⚠️ Điểm `priority` hiện tính bằng **ước lượng**, không phải dữ liệu bán hàng
> (chưa có số bán — `UNVERIFIED.md` #13). Sẽ tính lại khi có số thật.

---

## Đang mở

```yaml
id: FB-IDEA-001
product: none
persona: P1
journey: J2
objective: O2
pillar: CP08
problem: "Muốn mua laptop cũ nhưng sợ mua phải máy dựng, không biết nhìn cái gì."
angle: "Có vài thứ ai cũng kiểm tra được trong 5 phút, không cần biết kỹ thuật."
hook: "Nếu sắp mua laptop cũ, đừng bỏ qua 5 phút này."
format: reels
cta: "Lưu lại để lúc đi xem máy mang ra dùng."
proof: [brand.md#diem-khac-biet, policies.md]
risk: low
priority: 6.0
status: idea
```

```yaml
id: FB-IDEA-002
product: PRD-006                     # đổi 2026-09-20: PRD-002 (4,29tr) đã gỡ theo luật #20
persona: P1                          # P1 (Sinh viên / mua máy đầu tiên)
journey: J3                          # J3 (Đang so sánh)
objective: O4                        # O4 (Cân nhắc mua)
pillar: CP01                         # CP01 (Tư vấn mua)
problem: "Có khoảng 10-11 triệu, không biết tầm tiền đó mua được máy như thế nào."
angle: "Tầm 10-11 triệu mua được máy doanh nhân 2in1 16GB/512GB, đổi lại là CPU đời cũ hơn."
hook: "Có hơn 10 triệu, mua được laptop như thế nào?"
format: post
cta: "Comment ngân sách + ngành học, mình gợi ý máy phù hợp."
proof: [products.md#PRD-006, policies.md]
risk: low
priority: 8.0
status: idea
note: "Góc 'tầm tiền X mua được máy thế nào' giữ nguyên, chỉ đổi nguyên liệu sang máy hero
  Dell Latitude 7400 2in1 i7 — 10.680.000đ, kho 44 chiếc, tag web khớp tên ở mọi thông số."
```

```yaml
id: FB-IDEA-003
product: none
persona: P2
journey: J2
objective: O2
pillar: CP02
problem: "Máy mở chục tab với Excel là quay như chong chóng, không biết do RAM hay do máy cũ."
angle: "Chậm vì ổ cứng và RAM là hai chuyện khác nhau — biết đúng thì đỡ tốn tiền sai chỗ."
hook: "Máy chậm chưa chắc do máy cũ."
format: carousel
cta: "Comment máy bạn đang dùng, mình nói nên nâng cái gì."
proof: []
risk: low
priority: 4.5
status: idea
note: "Không nêu con số hiệu năng cụ thể — chưa có nguồn đo."
```

```yaml
id: FB-IDEA-004
product: none
persona: P1
journey: J3
objective: O3
pillar: CP03
problem: "Cùng số tiền, nên mua máy mới cấu hình yếu hay máy business cũ cấu hình khá?"
angle: "Hai lựa chọn phục vụ hai kiểu người khác nhau, không có cái nào tốt hơn tuyệt đối."
hook: "Cùng 5 triệu: máy mới cấu hình vừa đủ, hay máy doanh nghiệp likenew?"
format: comparison
cta: "Comment nhu cầu của bạn, mình nói bạn hợp hướng nào."
proof: [products.md, brand.md]
risk: medium
priority: 4.0
status: idea
note: "Cấm nêu tên shop khác. Chỉ so hai LOẠI máy, không so hai nơi bán."
```

```yaml
id: FB-IDEA-005
product: none
persona: P5
journey: J2
objective: O3
pillar: CP07
problem: "Mua theo lô cho công ty, sợ nhà cung cấp biến mất sau khi bán."
angle: "Cửa hàng thật ở Mỹ Đình — hỏng máy thì biết mang đi đâu."
hook: "Mua laptop cho công ty, điều đáng lo nhất không phải giá."
format: post
cta: "Gọi 0928939666 để hỏi trang bị máy theo số lượng."
proof: [company-facts.md, brand.md#diem-khac-biet]
risk: medium
priority: 3.6
status: idea
note: "Chưa được hứa hoá đơn VAT / giá lô — UNVERIFIED.md, personas.md P5."
```

---

## Bị khoá (thiếu fact)

```yaml
id: FB-IDEA-101
product: none
persona: P1
journey: J3
objective: O3
pillar: CP04
problem: "Không biết máy cũ đã được kiểm tra những gì trước khi bán cho mình."
angle: "Cho khách xem đúng quy trình thay vì bảo khách tin."
hook: "Một chiếc máy cũ đi qua những bước nào trước khi tới tay bạn?"
format: reels
cta: "Ghé 71 Thiên Hiền xem máy trực tiếp."
proof: []
risk: high
priority: 9.0
status: blocked
blocked_by: "UNVERIFIED.md #7, #12 — chưa có quy trình test máy đã xác minh."
note: "Priority cao nhất backlog. Mở khoá được là mở khoá cả pillar CP04."
```

```yaml
id: FB-IDEA-102
product: none
persona: P1
journey: J3
objective: O3
pillar: CP06
problem: "Không biết người mua thật ở đây trải nghiệm thế nào."
angle: "Kể lại một ca tư vấn thật, kể cả ca khuyên khách mua rẻ hơn."
hook: "Hôm qua có bạn sinh viên tới với 6 triệu."
format: customer-story
cta: "Comment ngân sách + ngành học của bạn."
proof: []
risk: high
priority: 7.0
status: blocked
blocked_by: "Chưa có kho case khách hàng thật. Cần bắt đầu ghi lại ca tư vấn hằng ngày."
```

```yaml
id: FB-IDEA-103
product: none
persona: P1
journey: J3
objective: O5
pillar: CP10
problem: "Ở xa Hà Nội, sợ mua online nhận về máy không như mô tả."
angle: "Nói rõ mua từ xa thì được bảo vệ thế nào."
hook: "Ở xa mà muốn mua máy cũ thì làm sao yên tâm?"
format: post
cta: "Inbox mình hướng dẫn cách mua từ xa."
proof: [policies.md]
risk: high
priority: 6.5
status: blocked
blocked_by: "UNVERIFIED.md #3, #4, #10 — chưa rõ ship COD, phí ship, cho test trước khi trả tiền."
```

---

## Quy tắc dùng backlog

1. Idea mới → thêm vào mục **Đang mở** với đủ schema. Thiếu trường → không nhận.
2. Thiếu fact → `status: blocked` + ghi `blocked_by` + **thêm dòng vào `01_company/facts/UNVERIFIED.md`**.
3. Mỗi sáng Planner đọc file này, chọn theo `priority` và chỗ trống trong `04_content/calendar/`.
4. Idea đã đăng → `status: published`, chuyển xuống mục lưu trữ, ghi mã bài trong `07_analytics/content-performance.md`.
