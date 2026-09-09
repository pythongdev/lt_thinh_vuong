# Learned Patterns

> Chỉ ghi pattern **đã có bằng chứng**. Đây không phải nơi ghi linh cảm.
> Linh cảm thì viết thành giả thuyết trong `04_content/backlog/experiments.md`.

---

## Schema

```yaml
id:          LP-###
pattern:     >                  # phát biểu ngắn, kiểm chứng được
evidence:    >                  # bao nhiêu bài, khoảng thời gian nào, số liệu ra sao
confidence:  low|medium|high
scope:       >                  # áp dụng cho persona/pillar/format nào
action:      >                  # Planner phải làm gì với pattern này
expires:     YYYY-MM-DD         # ngày cần kiểm tra lại
status:      active|retired
```

**Mức confidence**
| Mức | Điều kiện |
|---|---|
| low | 1–2 bài, chưa lặp lại → chỉ để tham khảo, không đổi kế hoạch |
| medium | ≥3 bài cùng chiều, hoặc 1 thí nghiệm hoàn tất |
| high | ≥2 thí nghiệm độc lập cùng kết luận, hoặc ≥8 bài cùng chiều |

Chỉ pattern `medium` trở lên mới được dùng để đổi phân bổ content.

---

## Pattern đang hoạt động

*(chưa có — chưa có dữ liệu hiệu quả nào trong repo)*

Ví dụ về dạng ghi khi có dữ liệu thật:

```yaml
id: LP-000-VI-DU
pattern: "Reels <35s + hook cảnh báo + persona P1 có tỉ lệ share cao hơn median."
evidence: "ĐÂY LÀ VÍ DỤ MINH HOẠ ĐỊNH DẠNG — không phải số liệu thật, không được dùng."
confidence: low
scope: "P1, format reels, pillar CP08"
action: "Ưu tiên slot reels đầu tuần cho dạng này."
expires: 2026-12-31
status: retired
```

---

## Quy tắc

1. Pattern phải nói được **điều kiện áp dụng**, không phải "hook hay thì chạy tốt".
2. Tới `expires` mà không kiểm tra lại → tự động hạ một bậc confidence.
3. Pattern mâu thuẫn với pattern cũ → **không xoá cái cũ**, ghi cả hai và chạy thí nghiệm phân xử.
4. Pattern học từ 1 bài viral → luôn `low`. Một bài viral thường là may, không phải quy luật.
