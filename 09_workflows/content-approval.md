# Workflow: Content Approval

## Đường đi của file

Bài **thuộc một chiến dịch** đi trong folder của chiến dịch đó:

```
05_campaigns/<chiến-dịch>/01-drafts/     AI vừa tạo, chưa qua gate
        ↓  Gate 0-5 (AI chạy) + Gate 6 (người ký)
05_campaigns/<chiến-dịch>/02-approved/   đã duyệt, chờ tới lịch đăng
        ↓  đăng
05_campaigns/<chiến-dịch>/03-published/  đã đăng, có link bài thật
        ↓  số liệu sau khi đăng
05_campaigns/<chiến-dịch>/05-ket-qua/    reach · tương tác · inbox · đơn + bài học
```

Bài **lẻ, không thuộc chiến dịch nào** đi đường cũ:

```
04_content/drafts/  →  04_content/approved/  →  04_content/published/
```

Chỉ mục mọi chiến dịch: `05_campaigns/INDEX.md`.

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
