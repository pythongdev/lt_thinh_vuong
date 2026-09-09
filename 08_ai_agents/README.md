# AI Agents

12 agent + 1 orchestrator. Mỗi agent có **một việc**, đọc nguồn cố định, xuất định dạng cố định.

| # | Agent | File | Việc |
|---|---|---|---|
| 01 | Research | `research-agent.md` | Thu thập dữ liệu thô (sản phẩm, đối thủ, câu hỏi khách) |
| 02 | Audience | `audience-agent.md` | Chọn persona + nỗi đau đang cần xử lý |
| 03 | Strategy | `strategy-agent.md` | Chọn objective + pillar + journey |
| 04 | Idea | `idea-agent.md` | Sinh content atom, tính priority |
| 05 | Hook | `hook-agent.md` | Sinh hook theo pattern, không random |
| 06 | Content | `content-agent.md` | Viết caption/script (kế thừa skill `/viet-bai`) |
| 07 | Visual | `visual-agent.md` | Chỉ dẫn ảnh/video/thumbnail |
| 08 | Fact-check | `fact-check-agent.md` | Gate 1–2 |
| 09 | Brand | `brand-agent.md` | Gate 3–4 |
| 10 | Publishing | `publishing-agent.md` | Lịch đăng, first comment, checklist đăng |
| 11 | Analytics | `analytics-agent.md` | Đo, chấm 4 trục |
| 12 | Learning | `learning-agent.md` | Tìm pattern, đề xuất thí nghiệm |
| — | Orchestrator | `orchestrator.md` | Điều phối, chặn agent chạy sai thứ tự |

## Luật chung cho mọi agent

1. **Không có fact → không xuất.** Thiếu fact thì báo thiếu, không đoán.
2. Mỗi agent chỉ đọc nguồn được liệt kê trong file của nó.
3. Agent **không tự đăng bài**. Chỉ người mới đăng (Gate 6).
4. Agent không sửa file nguồn fact (`01_company/facts/`, `02_products/products.md`)
   trừ khi đang thực hiện đúng quy trình cập nhật có ghi `source` + `verified_at`.
5. Không agent nào được nêu tên đối thủ trong nội dung xuất ra ngoài.

> ⚠️ **Không cho 12 agent chạy tự do.** Orchestrator quyết định agent nào chạy, khi nào,
> và chặn lại ở các gate. Xem `orchestrator.md`.
