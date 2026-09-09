# Workflow: Content Approval

## Đường đi của file

```
04_content/drafts/      AI vừa tạo, chưa qua gate
        ↓  Gate 0-5 (AI chạy) + Gate 6 (người ký)
04_content/approved/    đã duyệt, chờ tới lịch đăng
        ↓  đăng
04_content/published/   đã đăng, có link bài thật
```

## Ai duyệt cái gì

| Gate | Người/agent chịu trách nhiệm |
|---|---|
| 0 Strategy | Strategy Agent (03) |
| 1 Fact | Fact-check Agent (08) |
| 2 Commercial | Fact-check Agent (08) |
| 3 Brand | Brand Agent (09) |
| 4 Claim/Safety | Brand Agent (09) |
| 5 Content Quality | Content Agent (06) tự kiểm + orchestrator |
| 6 Human | **Người** — bắt buộc, không uỷ quyền cho AI |

## Mức duyệt theo `risk`

| risk | Ai phải ký |
|---|---|
| low | Người viết content |
| medium | Người viết content |
| high (có giá / tồn kho / cam kết / chuyện khách) | Người viết + **chủ shop hoặc người phụ trách bán hàng** |

## Ghi chữ ký
Trong header file:
```yaml
gates: { g0: ✅, g1: ✅, g2: ✅, g3: ✅, g4: ✅, g5: ✅, g6: ✅ }
approved_by: <tên>
approved_at: 2026-09-09
```

## Khi bị trả về
1. Ghi **lý do fail** vào cuối file (giữ lại, không xoá — đây là dữ liệu học).
2. Sửa đúng chỗ bị chỉ ra.
3. Chạy lại **từ gate bị fail trở đi**, không phải từ đầu.
4. Cùng một lỗi lặp 3 lần → sửa vào file luật (template/format/prompt), không sửa từng bài.

## Cấm
- Đăng bài chưa có `g6: ✅`.
- Người viết tự ký Gate 6 cho bài `risk: high` của chính mình khi có giá/cam kết.
- Sửa nội dung sau khi đã ký duyệt mà không ký lại.
