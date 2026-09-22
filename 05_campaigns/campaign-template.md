# Khuôn mẫu mở chiến dịch mới

> Chỉ mục toàn bộ chiến dịch: [INDEX.md](INDEX.md)

## Bước 1 — Tạo folder

Tên folder: `<ngày-đăng-đầu-tiên>-chuong-<n>-<slug>` — ví dụ `2026-10-12-chuong-4-game-thu`.

```bash
CD=05_campaigns/2026-10-12-chuong-4-game-thu
mkdir -p "$CD"/{00-ke-hoach,01-drafts,02-approved,03-published,04-ban-giao,05-ket-qua}
```

Copy `README.md` của 5 thư mục con từ một chiến dịch đã có sang.

## Bước 2 — Viết `INDEX.md` của chiến dịch

Bắt buộc 5 mục: **Folder này có gì** (bảng 6 thư mục + trạng thái) · **Kế hoạch** ·
**Nội dung đã soạn** (bảng: ngày · bài · bốn trục · nêu tên máy?) · **Bàn giao lên sheet** ·
**⛔ Điều đang chặn** (bảng: chặn gì · ai gỡ).
Lấy mẫu từ `2026-09-28-chuong-2-sinh-vien-chuyen-sau/INDEX.md`.

Đầu file ghi rõ: trạng thái · persona · nguồn dữ liệu · link chương trước / chương sau.

## Bước 3 — Điền `00-ke-hoach/ke-hoach.md`

```markdown
# <Tên chiến dịch> — <tuần đăng>

> Trạng thái: ... · Soạn: <ngày> · Nguồn dữ liệu: <file + ngày verified_at>

## 0. Đọc trước — chỗ nào kế hoạch vênh với kho hàng thật
## 1. Tổng quan chiến dịch
- Viết cho ai:   P? (tên tiếng Việt)
- Mục tiêu:      O? (tên tiếng Việt)
- Tuyến nội dung: CP?? (tên tiếng Việt)
- Bắt đầu / Kết thúc:
- Máy được nêu tên (phải nằm trong danh sách 36 — luật #20):
- Kênh chính:

## 2. Bản đồ series — mỗi bài đúng 1 mã
| Ngày | Bài | File draft | P — tên | J — tên | O — tên | CP — tên | CTA |

## 3. Bảng fact dùng cho cả series
| Fact | Giá trị | Nguồn | verified_at |

## 4. Câu hỏi cho chủ shop (chưa trả lời thì viết theo phương án an toàn)
## 5. Điều cả series đều không được viết
## 6. Đo lường
| Chỉ số | Mốc kỳ vọng | Đọc ở đâu |
```

## Bước 4 — Viết bài vào `01-drafts/`

Gõ `/viet-bai`. Mỗi bài là **Content Package 12 thành phần** (`04_content/content-package.md`),
không phải một caption. Đặt tên `YYYY-MM-DD-<loại>-<số>-<slug>.md`.

## Bước 5 — Chạy 7 gate rồi bàn giao

1. Chạy đủ 7 gate (`10_gates/README.md`) + checklist mục 7 của `04_content/templates/fanpage-sheet.md`
2. Rút thành khối theo `04_content/templates/post-template.md` → `04-ban-giao/`
3. **Người dùng đọc và nói "ok"** — Gate 6 phải có người ký (luật #8)
4. Chỉ khi đã "ok" → đẩy lên Google Sheet, `STATUS` = `CHỜ FEEDBACK` (luật #18)
5. Bài đã đăng → chuyển file sang `03-published/` kèm link bài thật

## Bước 6 — Sau khi đăng, điền `05-ket-qua/`

`so-lieu.md` (reach · tương tác · lưu · chia sẻ · inbox · đơn) và `bai-hoc.md`.
Rút pattern theo `09_workflows/weekly-learning.md`, chốt vào `07_analytics/learned-patterns.md`.

## Bước 7 — Cập nhật 2 chỗ

- [INDEX.md](INDEX.md) mục 1: thêm 1 dòng cho chiến dịch mới
- [INDEX.md](INDEX.md) mục 2: nối chiến dịch mới vào sơ đồ mạch

## Cần bản cho chủ shop / sếp đọc?

Sinh `00-ke-hoach/ke-hoach-TOM-TAT.md` theo mục "Bản tóm tắt cho người ngoài hệ thống"
của `CLAUDE.md`. **Bỏ hẳn mã P / J / O / CP**, chỉ để tên tiếng Việt — đây là ngoại lệ duy nhất
của luật "không bao giờ viết mã trơn".
