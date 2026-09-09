# Workflow: Analytics Loop

## Nhịp

| Khi nào | Việc | Ai |
|---|---|---|
| Cuối mỗi ngày | Ghi số 24h của bài hôm qua | Analytics Agent + người |
| +72h | Ghi save / inbox / qualified lead | Analytics Agent |
| +7 ngày | Ghi đơn / doanh thu, chấm 4 trục | Analytics Agent + chủ shop |
| Cuối tuần | Báo cáo tuần | `weekly-learning.md` |

## Lấy dữ liệu
```bash
python tools/fb_fetch.py     # xem tools/README.md
```
Số liệu Facebook lấy được tự động. **Inbox, đơn hàng, doanh thu hiện phải ghi tay.**

## Chấm điểm
Theo `07_analytics/metrics.md` mục 4 — 4 trục riêng biệt, không cộng thành một số.
Chấm bằng **trục ứng với objective đã khai báo trước khi đăng**.

## Đọc kết quả

| Hiện tượng | Nghĩa là | Việc cần làm |
|---|---|---|
| Reach thấp | Hook hoặc format không giữ được người | Thử hook khác (EXP-001) |
| Reach cao, engagement thấp | Hook hay nhưng nội dung không đáp ứng | Sửa phần thân bài |
| Engagement cao, inbox thấp | CTA sai hoặc bài không dẫn tới hành động | Thử CTA khác (EXP-002) |
| Inbox nhiều, qualified thấp | Kéo sai người | Xem lại persona / ngôn ngữ |
| Qualified cao, đơn thấp | Nghẽn ở khâu tư vấn, không phải content | `06_sales/sales-process.md` |

## Giới hạn hiện tại (nói thẳng)
Chưa nối được doanh thu về từng bài. Vì vậy mọi kết luận "bài này tạo ra tiền"
hiện là **suy đoán**. Gỡ bằng: hỏi khách "biết shop qua đâu" khi inbox, và có file đơn hàng
(`UNVERIFIED.md` #13).

## Cấm
- Điền số áng chừng.
- Đổi objective của bài sau khi thấy kết quả.
- Kết luận từ 1 bài.
