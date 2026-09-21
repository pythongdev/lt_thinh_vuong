# Template kịch bản video — format chuẩn của team

> Nguồn format: sheet KB của team, tab "2in1 sinh viên"
> https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8/edit?gid=1727303797
>
> ⚠️ Sheet này là **FORMAT, không phải NGUỒN FACT** (luật #19). Kịch bản cũ trong đó
> có nhiều câu nay đã bị cấm — xem mục 5 của file này.

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
(`04_content/drafts/`), không đẩy lên sheet:

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
- [ ] Bản đầy đủ (P/J/O/CP, nguồn fact, điều cấm) đã có trong `04_content/drafts/`
- [ ] Người dùng đã nói "ok" (Gate 6) — chưa "ok" thì **không đụng vào sheet** (luật #18)
