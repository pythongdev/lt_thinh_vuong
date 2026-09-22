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

## Chương 2 series sinh viên — 5 atom, đã có draft (thêm 2026-09-21)

> Cả 5 đã viết thành Content Package trong `05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/01-drafts/`, kế hoạch ở
> `05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/00-ke-hoach/ke-hoach.md`. **Gate 6 chưa ai ký.**

```yaml
id: FB-CH2-01
product: none
persona: P1
journey: J1
objective: O1
pillar: CP08
problem: "Bố mẹ em không đồng ý cho mua máy cũ, bảo mua mới cho chắc."
angle: "Người cần được thuyết phục không phải người đọc bài — đưa cho sinh viên câu trả lời cho bố mẹ."
hook: "Bạn chốt được máy rồi. Giờ mới đến phần khó: thuyết phục bố mẹ."
format: post
cta: "Gửi bài này cho bố mẹ, hoặc lưu lại."
proof: [policies.md, company-facts.md, brand.md]
risk: low
priority: 8
status: drafting
```

```yaml
id: FB-CH2-02
product: none
persona: P1
journey: J2
objective: O2
pillar: CP02
problem: "Không biết nên lấy máy 13, 14 hay 15,6 inch."
angle: "Chọn sai cỡ thì máy cấu hình tốt cỡ nào cũng bị để ở nhà — đo bằng balo, không đo bằng cân."
hook: "Trước khi so cấu hình, có một thứ quyết định bạn có mang máy đi học thật không: cỡ màn."
format: post
cta: "Comment ngành học + một tuần mang máy đi mấy buổi."
proof: [36-may-duoc-viet-2026-09-20.csv, policies.md]
risk: low
priority: 7.5
status: drafting
```

```yaml
id: FB-CH2-03
product: PRD — Latitude 7390 2in1 16GB · 7420 vỏ carbon · 5310 2in1
persona: P1
journey: J3
objective: O4
pillar: CP01
problem: "Em không có 13 triệu, em có 9 triệu thì mua được gì?"
angle: "Hạ ngân sách từ 13 xuống dưới 10 triệu, thứ bạn nhường là đời chip và ổ cứng — RAM 16GB thì giữ được."
hook: "Chưa tới 10 triệu. Nhiều bạn nghĩ tầm này là phải chấp nhận RAM 8GB."
format: post
cta: "Comment ngân sách chính xác + ngành đang học."
proof: [36-may-duoc-viet-2026-09-20.csv, policies.md]
risk: medium
priority: 9
status: drafting
blocked_by: "⚠️ Gate 0 lệch: personas.md chốt P1 = 10–15tr, 36-MAY-DUOC-VIET.md gán 7–10tr cho P1. Cần chốt. Và danh sách 36 máy hết hạn 2026-09-27 → chạy collection_fetch.py."
```

```yaml
id: FB-CH2-04
product: PRD — Latitude 5300 2in1 (256GB & 512GB) · Latitude 9410 2in1 (256GB & 512GB)
persona: P1
journey: J3
objective: O4
pillar: CP03
problem: "256GB có đủ cho 4 năm học không, hay thêm tiền lấy 512GB?"
angle: "Dạy cách định giá một nâng cấp: đừng tính 'thêm 700 nghìn được 256GB', tính '700 nghìn đó mua được gì khác'."
hook: "Cùng một chiếc máy, bản 512GB đắt hơn bản 256GB khoảng 700 nghìn. Đáng không?"
format: post
cta: "Comment ngành học, mình nói nên lấy 256GB hay 512GB."
proof: [36-may-duoc-viet-2026-09-20.csv, policies.md]
risk: medium
priority: 9
status: drafting
blocked_by: "Danh sách 36 máy hết hạn 2026-09-27 → chạy collection_fetch.py. Bài đặc biệt nhạy với giá: cả lập luận dựa trên khoảng chênh ~700.000đ."
```

```yaml
id: FB-CH2-05
product: PRD — Dell Latitude 7400 2in1 i7-8665U | 16GB | 512GB (10.680.000đ)
persona: P1
journey: J4
objective: O5
pillar: CP05
problem: "Muốn mua chiếc này nhưng sợ mua máy xoay gập cũ thì bản lề và màn cảm ứng hỏng."
angle: "Review một máy có kèm một điểm yếu và một giới hạn của bảo hành — điểm chết màn hình KHÔNG thuộc diện bảo hành, nên phải soi tại quầy."
hook: "Chiếc này bên mình có sẵn nhiều nhất. Nên mình nói cả chỗ dở của nó."
format: post
cta: "Nhắn tin mình kiểm tra máy còn không."
proof: [36-may-duoc-viet-2026-09-20.csv, policies.md, 36-MAY-DUOC-VIET.md]
risk: medium
priority: 9.5
status: drafting
blocked_by: "Danh sách 36 máy hết hạn 2026-09-27. Câu 'bản lề có được bảo hành không?' chưa có đáp án (policies.md chỉ ghi main/màn/phím)."
```

---

## Quy tắc dùng backlog

1. Idea mới → thêm vào mục **Đang mở** với đủ schema. Thiếu trường → không nhận.
2. Thiếu fact → `status: blocked` + ghi `blocked_by` + **thêm dòng vào `01_company/facts/UNVERIFIED.md`**.
3. Mỗi sáng Planner đọc file này, chọn theo `priority` và chỗ trống trong `04_content/calendar/`.
4. Idea đã đăng → `status: published`, chuyển xuống mục lưu trữ, ghi mã bài trong `07_analytics/content-performance.md`.
