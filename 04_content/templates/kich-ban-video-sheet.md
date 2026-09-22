# Template kịch bản video — format chuẩn của team

> Nguồn format: sheet KB của team
> https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8/edit?gid=1727303797
> (đối chiếu lại toàn sheet 2026-09-22: 14 tab, 8 tab mới nhất dùng đúng bộ 5 cột dưới đây)
>
> ⚠️ Sheet này là **FORMAT, không phải NGUỒN FACT** (luật #19). Kịch bản cũ trong đó
> có nhiều câu nay đã bị cấm — xem mục 5 của file này.

**Mọi video bàn giao đều phải có file kịch bản theo khuôn này.** Caption Facebook và
brief quay viết thành đoạn văn **không thay thế được** — người quay cần từng cảnh một dòng.
Xem mục 7 (bộ file bắt buộc) và mục 8 (đưa lên Google Drive).

## 1. Bộ cột — đúng 5 cột, đúng thứ tự

| STT | BỐI CẢNH | NỘI DỤNG - VOICE | TEXT MÀN HÌNH | NOTE |
|---|---|---|---|---|

- **STT** — số thứ tự cảnh, đếm lại từ 1 ở mỗi kịch bản.
- **BỐI CẢNH** — quay cái gì, ở đâu, tay làm gì. Viết như lệnh cho người cầm máy.
- **NỘI DỤNG - VOICE** — lời thoại. Đặt trong ngoặc kép khi là lời người nói.
  Cảnh không có thoại thì ghi `Nhạc không có lời`.
- **TEXT MÀN HÌNH** — chữ overlay. Để trống nếu cảnh đó không có chữ.
- **NOTE** — ghi chú quay + điều cấm riêng của cảnh. Để trống nếu không có.

## 2. Dòng tiêu đề mỗi kịch bản

Trên mỗi kịch bản có **1 dòng merge hết 5 cột**, viết theo mẫu:

```
Kịch bản <N>: <Tên kịch bản> - <có mẫu / không mẫu> - <voice thật / voice AI / nhạc>
```

Được phép nối thêm link video mẫu vào cuối dòng tiêu đề.
Ví dụ có thật trong sheet chuẩn:

- `Kịch bản 1: Hành trình 11 năm của Laptop Thịnh Vượng - Không mẫu - Voice AI`
- `Kịch bản 3: Hướng dẫn tiêu tiền lì xì đúng cách - không mẫu - nhạc  video mẫu: <link>`

## 3. Những gì KHÔNG có trong sheet

Format chuẩn **không có cột** cho timecode, persona, journey, objective, pillar,
fact table, measurement plan. Ba thứ này vẫn bắt buộc phải có nhưng sống ở **bản repo**
(`05_campaigns/<chiến-dịch>/01-drafts/`), không đẩy lên sheet:

- 4 trục P / J / O / CP kèm tên tiếng Việt (luật bắt buộc trong `CLAUDE.md`)
- NGUỒN FACT từng con số
- Danh sách điều cấm riêng của video

Timecode thì nhét vào đầu ô **NOTE** (`0–3s (HOOK)`) — không mở thêm cột.

## 4. Quy tắc viết nội dung trong ô

- 1 cảnh = 1 dòng. Không gộp 2 cảnh vào một dòng.
- Đổi hình mỗi 3–5 giây → kịch bản 30 giây thường ra 6–8 dòng.
- Thoại tối đa **3 từ/giây**. Đếm từ trước khi chốt.
- Không viết ký tự `|` trong ô (vỡ bảng). Dùng `·` để ngăn ý.
- Ô BỐI CẢNH phải quay được bằng đồ có sẵn tại shop. Không mô tả cảnh phải dựng.

## 5. Câu cấm copy lại từ kịch bản cũ trong sheet

Kịch bản cũ trong sheet KB viết trước khi có hệ thống fact. Không bê nguyên văn:

| Câu trong sheet cũ | Vì sao cấm |
|---|---|
| "Laptop chính hãng 100%" | Cấm dùng "chính hãng" cho máy cũ |
| "test 15 tiêu chí" | Quy trình test chưa được kỹ thuật ký (UNVERIFIED #7, #12) |
| "Giá tốt nhất thị trường" | Cấm "tốt nhất", "rẻ nhất", "số 1", "sốc" |
| "Bảo hành từ 6 đến 12 tháng" | Gộp máy cũ với máy mới. Bảo hành đọc theo tag từng máy (luật #14) |
| "Dùng vô tư 5-6 năm" | Chưa có nguồn nào |
| "Hiệu năng mạnh mẽ" | Claim hiệu năng, shop chưa đo |
| "Build chắc chắn" | Chưa có phép đo |
| Số 0945.998.855 | Chưa rõ chức năng đầu số |

Xem thêm `04_content/templates/fanpage-sheet.md` mục 4.

## 6. Checklist trước khi dán lên sheet

- [ ] Đúng 5 cột, đúng thứ tự
- [ ] Mỗi kịch bản có dòng tiêu đề merge, ghi rõ có mẫu / không mẫu / voice
- [ ] STT đếm lại từ 1 ở mỗi kịch bản
- [ ] Đã đếm từ, thoại dưới 3 từ/giây
- [ ] Mọi máy nêu tên đều nằm trong `02_products/36-MAY-DUOC-VIET.md` (luật #20)
- [ ] Không có câu nào trong bảng mục 5
- [ ] Bản đầy đủ (P/J/O/CP, nguồn fact, điều cấm) đã có trong `01-drafts/` của chiến dịch
- [ ] Mỗi cảnh có ô BỐI CẢNH quay được bằng đồ có sẵn tại shop
- [ ] Đã chạy `python3 tools/kich_ban_to_sheet.py`, không còn dòng ⚠️ nào
- [ ] `04-ban-giao/` có đủ **2 nhánh** file — bài đăng và kịch bản video (mục 7)
- [ ] Người dùng đã nói "ok" (Gate 6) — chưa "ok" thì **không đụng vào sheet, không upload Drive** (luật #18)

---

## 7. Bộ file bắt buộc trong `04-ban-giao/` của mỗi chiến dịch

Tuần nào có video thì `04-ban-giao/` phải có **đủ 2 nhánh**, thiếu nhánh nào là chưa bàn giao xong:

| Nhánh | File | Sheet đích |
|---|---|---|
| **Bài đăng** — lưới 9 dòng × 8 cột ([`post-template.md`](post-template.md)) | `BAN-GIAO-<tuần>.md` → `-luoi.csv` · `-ngang.csv` · `day-len-sheet.gs` | Sheet lịch đăng fanpage |
| **Kịch bản video** — 5 cột | `KICH-BAN-VIDEO-<tuần>.md` → `.csv` · `day-len-kb-sheet.gs` | Sheet KB video |

File `.md` là bản gốc. Sửa `.md` rồi sinh lại, **đừng sửa thẳng vào CSV / .gs**:

```bash
python3 tools/ban_giao_to_sheet.py  05_campaigns/<chiến-dịch>/04-ban-giao/BAN-GIAO-<tuần>.md
python3 tools/kich_ban_to_sheet.py  05_campaigns/<chiến-dịch>/04-ban-giao/KICH-BAN-VIDEO-<tuần>.md
```

`kich_ban_to_sheet.py` tự soát và in cảnh báo: STT không đếm liền từ 1, dòng tiêu đề thiếu
`có mẫu / không mẫu`, thiếu phần voice, ô BỐI CẢNH trống.

### Khuôn file `KICH-BAN-VIDEO-<tuần>.md` (script đọc được)

Mỗi kịch bản một mục, đúng thứ tự này (dấu `~~~` dưới đây là khối ``` thật trong file):

    ## KB<n> · <định dạng> · <thứ ngày> · <giờ> — "<tên bài>"

    📄 Bản đầy đủ: [<file draft>](../01-drafts/<file draft>)
    · P… · J… · O… · CP…        ← mã kèm tên tiếng Việt

    **Dòng tiêu đề — merge hết 5 cột:**
    ~~~
    Kịch bản <N>: <tên> - <có mẫu / không mẫu> - <voice thật / voice AI / nhạc>
    · <thời lượng> · <nơi quay, tỉ lệ> · <máy quay> · <yêu cầu quay>
    · ⛔ <điều cấm riêng của video>
    ~~~

    | STT | BỐI CẢNH | NỘI DỤNG - VOICE | TEXT MÀN HÌNH | NOTE |
    |---|---|---|---|---|
    | 1 | … | … | … | 0–3s (HOOK) · … |

Script tìm mục theo `## KB<n> · `, lấy dòng tiêu đề trong khối ```` ``` ```` đầu tiên,
rồi lấy mọi dòng bảng đúng 5 ô. Sai khuôn → script báo lỗi và dừng.

Quy ước chia ô, để không tự bịa thêm chữ:

- Câu **in đậm** ở cột "Chữ trên màn / lời" của draft → cột **TEXT MÀN HÌNH**
- Câu **trong ngoặc kép**, người nói → cột **NỘI DỤNG - VOICE**
- Video không có người thuyết minh → ô VOICE ghi `Nhạc không có lời`
- Draft không ghi chữ overlay cho cảnh nào → **để ô đó trống**, không nghĩ thêm chữ

## 8. Đưa lên Google Drive — chỉ sau khi có "ok"

Thứ tự **không được đảo** (luật #18, Gate 6 ở `10_gates/README.md`):

| Bước | Làm gì | Ai làm |
|---|---|---|
| 1 | Viết draft đủ 12 thành phần trong `01-drafts/` | AI |
| 2 | Rút thành `KICH-BAN-VIDEO-<tuần>.md`, chạy `kich_ban_to_sheet.py` | AI |
| 3 | Chạy 7 gate + checklist mục 6 của file này | AI |
| 4 | **Người dùng đọc và nói "ok"** — Gate 6 phải có người ký | Người dùng |
| 5 | Upload `.csv` + `.md` lên Google Drive, rồi chạy `day-len-kb-sheet.gs` trên sheet KB | Người đẩy |

- Chưa có "ok" → **dừng ở bước 3**. Không upload Drive, không đụng sheet KB.
- Script tạo **tab mới** `KB TUAN <tuần> (AI)`, không ghi đè tab nào đang có.
- Không được báo "đã đưa lên Drive" nếu thực tế mới chỉ sinh file trong repo.
- Bản đầy đủ luôn sống ở repo. Drive và sheet chỉ nhận phần quay được —
  4 trục P/J/O/CP, fact table, measurement plan **không** lên sheet KB (mục 3).
