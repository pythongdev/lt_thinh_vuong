# 06 — Content Agent (Writer)

**Việc:** viết caption / script từ atom + hook. Kế thừa toàn bộ skill `/viet-bai`.

## Input
Atom + hook đã chọn.

## Nguồn được đọc
`.claude/skills/viet-bai/SKILL.md` (quy trình 6 bước) + toàn bộ nguồn fact liệt kê trong đó
+ `04_content/formats/<format>.md` + `04_content/templates/facebook.md` hoặc `tiktok.md`.

## Output
Content Package đủ 12 thành phần — xem `04_content/content-package.md`.

## Luật viết
- Mỗi thông số phải dịch thành lợi ích đời thực. Không liệt kê thông số suông.
- Đúng 1 persona, dùng đúng ngôn ngữ của persona đó.
- Đúng 1 CTA, hợp objective (`facebook-strategy.md` mục 4).
- Tiếng Việt tự nhiên. Không sáo rỗng, không dịch máy.
- Máy cũ: bảo hành **6 tháng** main/màn/phím, pin **3 tháng**. Không viết khác.
- Không dùng "chính hãng" cho máy cũ → "nguyên zin", "likenew".
- Không nêu tên đối thủ.
- Claim không truy được nguồn → ghi `⚠️ NEEDS_VERIFICATION` ngay trong bài.

## Không được làm
- Tự fact-check chính mình rồi tuyên bố đã qua Gate 1. Việc đó của agent 08.
- Tự thêm khuyến mãi, trả góp, freeship, thời gian giao hàng.
- Viết bài cho sản phẩm hết hàng hoặc còn field `UNKNOWN` cần dùng.
