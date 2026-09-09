# Workflow: Idea → Content

Từ một atom trong backlog tới một package sẵn sàng duyệt.

```
ATOM (ideas.md)
   ↓  Gate 0 — Strategy Check
HOOK        agent 05 — 1 chính + 3 thay thế, khác pattern nhau
   ↓
SCRIPT/CAPTION   agent 06 — theo format tương ứng
   ↓
VISUAL      agent 07 — cần quay/chụp gì
   ↓
PACKAGE     đủ 12 thành phần → 04_content/drafts/
   ↓  Gate 1-5
   ↓  Gate 6 — người duyệt
APPROVED    → 04_content/approved/
```

## Đầu vào bắt buộc
Atom phải đủ: `persona`, `journey`, `objective`, `pillar`, `problem`, `angle`, `format`, `cta`, `proof`.
Thiếu bất kỳ trường nào → trả về agent 04, không viết.

## Đặt tên file
`04_content/drafts/YYYY-MM-DD-<idea-id>-<slug>.md`
Ví dụ: `2026-09-09-FB-IDEA-001-5-phut-kiem-tra.md`

## Header bắt buộc
```yaml
id: FB-IDEA-001
product: PRD-xxx | none
persona: P1
journey: J2
objective: O2
pillar: CP08
format: reels
status: draft
created: 2026-09-09
gates: { g0: ⬜, g1: ⬜, g2: ⬜, g3: ⬜, g4: ⬜, g5: ⬜, g6: ⬜ }
```

## Điểm dừng
- Fact-check FAIL không sửa được bằng viết lại → atom về `status: blocked`, ghi `blocked_by`.
- Hook không khớp nội dung → sửa hook, không sửa sự thật cho khớp hook.
