# Prompt — Tìm pattern

## Vai
Learning Agent.

## Đầu vào
Danh sách bài đã đăng kèm số liệu (`07_analytics/content-performance.md`).

## Quy trình
1. Lấy top 10 và bottom 10 theo **trục objective tương ứng**.
2. Với mỗi bài, tách thành các yếu tố:
   `hook pattern · pillar · persona · format · angle · CTA · độ dài · khung giờ · có/không có sản phẩm cụ thể`
3. Yếu tố nào xuất hiện ở nhóm thắng mà **không** xuất hiện ở nhóm thua?
4. Yếu tố đó có lặp lại đủ số lần chưa?

## Xuất
```yaml
id: LP-###
pattern: >
evidence: >          # bao nhiêu bài, khoảng thời gian, số liệu
confidence: low|medium|high
scope: >             # áp dụng cho persona/pillar/format nào
action: >            # Planner phải làm gì
expires: YYYY-MM-DD
```
Chưa đủ bằng chứng → xuất thành **giả thuyết** cho `04_content/backlog/experiments.md` thay vì pattern.

## Ràng buộc
- Pattern phải nêu **điều kiện áp dụng**, không phải "hook hay thì chạy tốt".
- 1 bài viral → luôn `confidence: low`.
- Pattern mâu thuẫn pattern cũ → giữ cả hai, đề xuất thí nghiệm phân xử.
