# reel_template — khuôn nhánh Reels / video

Cả nhánh **kịch bản video** nằm trong folder này. Bài đăng (ảnh / text) dùng khuôn khác:
[`../post-template.md`](../post-template.md).

| File | Là gì | Khi nào mở |
|---|---|---|
| [`kich-ban-video-sheet.md`](kich-ban-video-sheet.md) | **Đặc tả** — ý nghĩa 5 cột, dòng tiêu đề merge, quy tắc viết trong ô, bảng câu cấm, checklist, thứ tự đưa lên Drive | Đọc 1 lần trước khi viết kịch bản đầu tiên |
| [`KICH-BAN-VIDEO-MAU.md`](KICH-BAN-VIDEO-MAU.md) | **File mẫu để copy** — 1 kịch bản ví dụ + khung trắng KB2, KB3 + checklist | Mỗi lần bắt đầu một tuần / chiến dịch mới |
| [`kich-ban-video-mau.csv`](kich-ban-video-mau.csv) | Lưới 5 cột trắng, 3 kịch bản × 8 cảnh | Khi người quay muốn điền thẳng trên sheet, không qua repo |

## Dùng thế nào

```bash
# 1. copy khuôn vào chiến dịch
cp 04_content/templates/reel_template/KICH-BAN-VIDEO-MAU.md \
   05_campaigns/<chiến-dịch>/04-ban-giao/02-reel/KICH-BAN-VIDEO-<tuần>.md

# 2. điền, xoá mục ví dụ KB1

# 3. sinh bản dán sheet + Apps Script
python3 tools/kich_ban_to_sheet.py \
   05_campaigns/<chiến-dịch>/04-ban-giao/02-reel/KICH-BAN-VIDEO-<tuần>.md
```

Script sinh `.csv` + `day-len-kb-sheet.gs` cùng thư mục và in cảnh báo nếu sai khuôn.
Còn dòng ⚠️ → sửa file `.md`, chạy lại. **Đừng sửa thẳng CSV / .gs.**

## Hai điều không được quên

- **Chưa có "ok" của người dùng thì dừng ở repo** — không đụng sheet KB, không upload Drive
  (luật #18, #22 · Gate 6 ở `10_gates/README.md`).
- **Sheet KB là FORMAT, không phải NGUỒN FACT** (luật #19). Kịch bản cũ trong sheet có nhiều
  câu nay đã bị cấm — bảng câu cấm ở [`kich-ban-video-sheet.md`](kich-ban-video-sheet.md) mục 5.

Sheet KB của team:
https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8
