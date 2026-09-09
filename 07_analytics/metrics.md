# Marketing Metrics

> Đo để biết **content nào tạo ra tiền**, không phải để có báo cáo đẹp.

---

## 1. Funnel

```
Reach              bao nhiêu người nhìn thấy
  ↓
Video View         bao nhiêu người dừng lại xem
  ↓
Engagement         like / comment / share / save
  ↓
Profile Visit      bao nhiêu người tò mò về shop
  ↓
Messenger          bao nhiêu người nhắn tin
  ↓
Qualified Lead     nhắn tin có nêu ngân sách hoặc nhu cầu cụ thể
  ↓
Consultation       đã tư vấn xong, khách đang cân nhắc
  ↓
Order              đã mua
  ↓
Revenue            doanh thu
```

Mỗi bậc rơi bao nhiêu % → biết phễu hở ở đâu.

## 2. Chỉ số cơ bản (mỗi bài)

reach · impressions · video view · % xem hết · engagement · comment · share · save ·
profile visit · click · inbox · qualified lead · order · revenue

## 3. Chỉ số hiệu quả (quan trọng hơn chỉ số thô)

| Chỉ số | Công thức | Trả lời câu hỏi |
|---|---|---|
| Lead / 1.000 reach | lead ÷ reach × 1000 | Content này có kéo được người thật không? |
| Revenue / 1.000 reach | doanh thu ÷ reach × 1000 | Reach của content này đáng bao nhiêu tiền? |
| Revenue / content | doanh thu quy về bài đó | Bài nào tạo ra tiền? |
| Cost / content | thời gian × chi phí sản xuất | Bài nào đắt? |
| Qualified rate | qualified lead ÷ inbox | Bài kéo đúng người hay kéo người hỏi cho vui? |

> ⚠️ **Chưa đo được doanh thu theo bài.** Cần quy trình hỏi khách "biết shop qua đâu"
> hoặc mã theo dõi khi inbox. Ghi vào `01_company/facts/UNVERIFIED.md` nếu chưa có.

## 4. Content Score — chấm theo 4 trục, không cộng thành 1 số

Cộng tất cả thành một điểm duy nhất sẽ **giấu mất** việc bài đó đang làm tốt việc gì.

| Trục | Tính từ | Bài nào được chấm bằng trục này |
|---|---|---|
| **Awareness Score** | reach, view, share, follow mới | O1 |
| **Trust Score** | save, comment thể hiện an tâm, profile visit | O3 |
| **Consideration Score** | comment nêu ngân sách/nhu cầu, click, inbox hỏi máy | O2, O4 |
| **Conversion Score** | qualified lead, đơn, doanh thu | O5 |

Ví dụ đọc kết quả:
```
Reel A
Awareness      92
Trust          71
Consideration  48
Conversion     12
```
→ Reel A **không thất bại**. Nó là bài O1 và đang làm đúng việc của nó.
Chấm nó bằng Conversion Score là chấm sai đề.

**Quy tắc:** mỗi bài được đánh giá bằng trục ứng với objective đã khai báo **trước khi đăng**.

## 5. Nhịp đo

| Mốc | Đo gì |
|---|---|
| 24h | reach, view, engagement — biết bài có được phân phối không |
| 72h | inbox, lead — biết bài có kéo người thật không |
| 7 ngày | đơn, doanh thu, save/share dài hạn |

Ghi vào `07_analytics/content-performance.md`.

## 6. Learning loop

```
Content → Metrics → Analysis → Hypothesis → Experiment → Result → Update strategy
```

- Pattern nhận ra → `07_analytics/learned-patterns.md`
- Giả thuyết cần kiểm chứng → `04_content/backlog/experiments.md`
- Chiến lược đổi → `04_content/strategy/`

## 7. Nguồn dữ liệu

| Nguồn | Lấy bằng | Trạng thái |
|---|---|---|
| Facebook Page Insights | `tools/fb_fetch.py` (Graph API) | ✅ có script |
| Messenger / inbox | thủ công, ghi tay | ⚠️ chưa có quy trình |
| Đơn hàng, doanh thu | chủ shop xuất | 🔴 chưa có (`UNVERIFIED.md` #13) |

**Không có 2 nguồn dưới thì mọi kết luận về "content nào tạo ra tiền" chỉ là suy đoán.**
