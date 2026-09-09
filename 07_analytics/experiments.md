# Experiments — kết quả

> Kế hoạch thí nghiệm nằm ở `04_content/backlog/experiments.md`.
> File này ghi **kết quả** sau khi chạy xong.

| ID | Giả thuyết | Biến | Metric | Sample thực tế | Kết quả | Kết luận | Pattern |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## Cách kết luận

| Tình huống | Kết luận |
|---|---|
| Variant thắng rõ, đủ sample | ✅ Thắng → viết `LP-###`, đổi cách làm mặc định |
| Chênh lệch nhỏ, đủ sample | ⚖️ Hoà → giữ control, ghi lại để khỏi thử lại |
| Chưa đủ sample | ⏸ Inconclusive → chạy tiếp hoặc bỏ, **không kết luận** |
| Variant thua | ❌ Thua → cũng là kiến thức, ghi lại |

## Cấm
- Đổi metric sau khi đã thấy kết quả.
- Kết luận từ 1 cặp bài.
- Chạy thí nghiệm vi phạm gate (vd: thử hook giật tít sai sự thật).
