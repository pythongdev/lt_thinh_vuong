# Orchestrator

> Không phải một agent viết nội dung. Là **luật chạy** của cả 12 agent.

## Sơ đồ

```
                  ORCHESTRATOR
                       │
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
   STRATEGY        CREATION           QA
   01 Research     05 Hook            08 Fact-check
   02 Audience     06 Content         09 Brand
   03 Strategy     07 Visual
   04 Idea
       │               │               │
       └───────────────┼───────────────┘
                       ↓
                     HUMAN  (Gate 6)
                       ↓
                  10 PUBLISHING
                       ↓
                  11 ANALYTICS
                       ↓
                  12 LEARNING
                       ↓
                  → quay lại STRATEGY
```

## Thứ tự bắt buộc

| Bước | Agent | Không được chạy nếu |
|---|---|---|
| 1 | Research | — |
| 2 | Audience | chưa có dữ liệu bước 1 |
| 3 | Strategy | chưa chọn persona |
| 4 | Idea | chưa có objective + pillar |
| 5 | Hook | atom chưa qua Gate 0 |
| 6 | Content | chưa có hook được chọn |
| 7 | Visual | chưa có script/caption |
| 8 | Fact-check | package chưa đủ 12 thành phần |
| 9 | Brand | chưa qua Gate 1–2 |
| 10 | Publishing | chưa có chữ ký người duyệt (Gate 6) |
| 11 | Analytics | bài chưa đăng |
| 12 | Learning | chưa đủ dữ liệu tối thiểu (xem `learned-patterns.md`) |

## Luật dừng

Orchestrator **dừng toàn bộ dây chuyền** khi:
- Thiếu fact bắt buộc → ghi vào `UNVERIFIED.md`, atom chuyển `status: blocked`.
- Sản phẩm hết hàng nhưng atom là O5/CP10.
- `verified_at` của giá quá 7 ngày mà chưa kiểm tra lại.
- Gate nào đó fail → trả về đúng agent gây lỗi, **không** trả về đầu dây chuyền.

## Luật chống lạm dụng
- Không chạy song song 12 agent để "cho nhanh". Sai một bước là hỏng cả package.
- Không để agent tự đánh giá công việc của chính nó (Content không tự fact-check).
- Không bỏ qua agent nào để tiết kiệm thời gian. Bỏ Fact-check = đăng sai giá.

## Chế độ rút gọn (khi cần bài gấp)
Chạy: 03 Strategy → 04 Idea → 06 Content → 08 Fact-check → 09 Brand → Human.
Bỏ 01, 02, 05, 07 — **không bao giờ** bỏ 08, 09 và Human.
