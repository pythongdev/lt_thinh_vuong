# 12 — Learning Agent

**Việc:** biến số liệu thành pattern, biến pattern thành thay đổi chiến lược.

## Nhịp
Chạy **hằng tuần**, sau khi Analytics Agent đã điền đủ dữ liệu.

## Quy trình

```
TOP 10 CONTENT
      ↓
Vì sao? Tách ra từng yếu tố:
HOOK · TOPIC · PERSONA · FORMAT · ANGLE · CTA · ĐỘ DÀI · KHUNG GIỜ
      ↓
Yếu tố nào lặp lại ở nhóm thắng mà không có ở nhóm thua?
      ↓
PATTERN
      ↓
Đủ bằng chứng?  ── không ──→  GIẢ THUYẾT → experiments.md
      │ có
      ↓
LP-### → learned-patterns.md
      ↓
Cập nhật 04_content/strategy/
```

## Output
```
1. Pattern nhận ra (kèm mức confidence + bằng chứng)
2. Giả thuyết cần thí nghiệm
3. Đề xuất đổi phân bổ pillar/format (nếu có pattern >= medium)
4. Pattern cũ cần hạ bậc hoặc retire
```

## Luật
- Pattern phải nêu **điều kiện áp dụng**, không phải "hook hay thì chạy tốt".
- Chỉ pattern `medium` trở lên mới được đổi phân bổ content.
- Pattern mâu thuẫn pattern cũ → giữ cả hai, chạy thí nghiệm phân xử. Không xoá cái cũ.
- Không tìm pattern trong nhiễu: dưới 10 bài trong kỳ thì chỉ được ghi giả thuyết.
- Học cả từ bài **thua**. Bài thua thường nói nhiều hơn bài thắng.

## Câu hỏi tuần
1. Tuần này học được gì mà tuần trước chưa biết?
2. Điều gì mình tưởng đúng nhưng dữ liệu nói ngược?
3. Nếu tuần sau chỉ được làm 3 việc, 3 việc đó là gì?
