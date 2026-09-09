# Content Experiments

> Mỗi lần chỉ đổi **một biến**. Đổi hai biến thì không biết cái nào tạo ra khác biệt.

---

## Schema

```yaml
id:          EXP-###
hypothesis:  >                 # "X tạo ra Y nhiều hơn Z"
variable:    hook|format|cta|thumbnail|duration|posting-time|persona-language
control:     A                 # phiên bản hiện tại
variant:     B                 # phiên bản thử
constant:    [ ... ]           # những thứ PHẢI giữ nguyên
metric:      >                 # chỉ số quyết định thắng/thua — chọn TRƯỚC khi chạy
sample:      >                 # cần bao nhiêu bài / bao nhiêu reach mới kết luận
duration:    >                 # chạy trong bao lâu
status:      planned|running|done|inconclusive
result:      >
learned:     LP-###            # nếu thắng → ghi vào learned-patterns.md
```

---

## Đang lên kế hoạch

```yaml
id: EXP-001
hypothesis: "Hook dạng cảnh báo giữ người xem lâu hơn hook dạng liệt kê thông tin."
variable: hook
control: "5 laptop dưới 7 triệu đáng mua."
variant: "Đừng mua laptop dưới 7 triệu trước khi xem hết video này."
constant: [sản phẩm, persona P1, format reels, độ dài <35s, khung giờ đăng, thumbnail]
metric: "% người xem hết video (ưu tiên), sau đó là share"
sample: "3 cặp bài, mỗi bài tối thiểu 1.000 reach"
duration: "3 tuần"
status: planned
result: ""
```

```yaml
id: EXP-002
hypothesis: "CTA hỏi ngân sách + ngành học tạo nhiều comment chất lượng hơn CTA mời inbox."
variable: cta
control: "Inbox mình tư vấn theo nhu cầu của bạn."
variant: "Comment ngân sách + ngành học, mình gợi ý máy phù hợp."
constant: [pillar CP01, persona P1, format post, hook, ảnh]
metric: "Số comment có nêu ngân sách hoặc nghề nghiệp (lead chất lượng), không phải tổng comment"
sample: "4 cặp bài"
duration: "4 tuần"
status: planned
result: ""
```

```yaml
id: EXP-003
hypothesis: "Reels dưới 35 giây có tỉ lệ xem hết cao hơn reels 45-60 giây với cùng nội dung."
variable: duration
control: "Bản 50 giây, giải thích đủ 3 ý."
variant: "Bản 30 giây, cắt còn 2 ý."
constant: [nội dung gốc, hook, persona, ngày đăng cách nhau 1 tuần]
metric: "% xem hết"
sample: "3 cặp"
duration: "4 tuần"
status: planned
result: ""
```

---

## Quy tắc

1. **Chọn metric trước khi chạy.** Chọn sau khi có kết quả là tự lừa mình.
2. Không chạy 2 thí nghiệm cùng biến trong cùng tuần.
3. Chưa đủ `sample` → `status: inconclusive`, không kết luận. Một bài viral không phải bằng chứng.
4. Thắng → viết thành `LP-###` trong `07_analytics/learned-patterns.md` với mức `confidence`.
5. Thí nghiệm không được vi phạm gate. Không có "thử hook giật tít xem sao".
