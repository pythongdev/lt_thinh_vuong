# MẪU — Kịch bản video <tuần / chiến dịch>

> **File này là khuôn trắng để copy, không phải bài thật.**
> Copy sang `05_campaigns/<chiến-dịch>/04-ban-giao/02-reel/KICH-BAN-VIDEO-<tuần>.md` rồi điền.
> Đặc tả đầy đủ (ý nghĩa từng cột, câu cấm, checklist): [`kich-ban-video-sheet.md`](kich-ban-video-sheet.md).

Format: đúng 5 cột của sheet KB — `STT · BỐI CẢNH · NỘI DỤNG - VOICE · TEXT MÀN HÌNH · NOTE`.

Sheet đích: **Sheet kịch bản video của team**
https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8

> ⚠️ Sheet đó là **FORMAT, không phải NGUỒN FACT** (luật #19). Mọi con số trong file bàn giao
> phải truy về `01-drafts/` của chiến dịch — mục 12 (fact table) của từng bài.

## 🟡 TRẠNG THÁI

⬜ **Gate 6 chưa ai ký** → chưa được đẩy lên sheet KB, chưa upload Drive (luật #8, #18).

| Việc người đẩy phải tự làm | Vì sao |
|---|---|
| **Đánh lại số `Kịch bản <N>`** theo số đang chạy trong tab đích | File này đánh từ 1, sheet có thể đang ở số khác |
| **STT đếm lại từ 1 ở mỗi kịch bản** — giữ nguyên như file này | Đúng cách sheet đang làm |
| Sáng ngày đăng: gọi 0928939666 xác minh còn máy + đúng giá với kịch bản có nêu giá | Giá và tồn kho đổi liên tục (luật #10, #17) |
| Chạy lại `python3 tools/collection_fetch.py` sát ngày quay | Danh sách 36 máy được viết có hạn (luật #20) |

---

## Cách điền — 6 việc

1. **Mỗi kịch bản 1 mục** mở đầu bằng `## KB<n> · ` — script tìm mục theo đúng chuỗi này.
2. **Dòng metadata** ngay dưới tiêu đề: link draft + 4 trục **mã kèm tên tiếng Việt**
   (`P2 (Nhân viên văn phòng) · J3 (Đang so sánh) · O4 (Cân nhắc mua) · CP03 (So sánh)`).
   Dòng này sống ở repo, **không** lên sheet.
3. **Dòng tiêu đề merge** nằm trong khối ``` — bắt buộc có `có mẫu` / `không mẫu`
   và một trong `voice thật` / `voice AI` / `nhạc`, nếu không script sẽ cảnh báo.
4. **Bảng 5 cột**: 1 cảnh = 1 dòng, đổi hình mỗi 3–5 giây, thoại tối đa 3 từ/giây.
   Không gõ ký tự `|` trong ô — dùng `·`.
5. Cảnh không có người nói → ô VOICE ghi `Nhạc không có lời`. Cảnh không có chữ overlay
   → **để trống ô TEXT MÀN HÌNH**, đừng nghĩ thêm chữ.
6. Timecode nhét vào **đầu ô NOTE** (`0–3s (HOOK)`) — sheet không có cột timecode.

Điền xong chạy:

```bash
python3 tools/kich_ban_to_sheet.py 05_campaigns/<chiến-dịch>/04-ban-giao/02-reel/KICH-BAN-VIDEO-<tuần>.md
```

Script sinh `.csv` + `day-len-kb-sheet.gs` cùng thư mục và in cảnh báo. Còn dòng ⚠️ → sửa `.md` rồi chạy lại, **đừng sửa thẳng CSV**.

---

# ── VÍ DỤ ĐIỀN SẴN (xoá cả mục KB1 này khi dùng thật) ──

## KB1 · Reels · T2 <ngày> · 12:15 — "Gập màn ra sau để làm gì"

📄 Bản đầy đủ: [<tên-file-draft>.md](../../01-drafts/<tên-file-draft>.md)
· P2 (Nhân viên văn phòng) · J1 (Đã thấy shop) · O1 (Tiếp cận) · CP02 (Kiến thức)

**Dòng tiêu đề — merge hết 5 cột:**
```
Kịch bản 1: Gập màn ra sau để làm gì - không mẫu - không voice, để tiếng bản lề thật + nhạc nền nhẹ · Thời lượng 35 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền · Máy quay: một máy trong danh sách 36 máy được viết · Ánh sáng đều, không đèn màu, không hiệu ứng chuyển cảnh bay lượn · Phụ đề bắt buộc · ⛔ Không ghi giá, không ghi tên máy lên video, không dùng ảnh/video của hãng
```

| STT | BỐI CẢNH | NỘI DỤNG - VOICE | TEXT MÀN HÌNH | NOTE |
|---|---|---|---|---|
| 1 | Cận bàn tay gập màn từ 90 độ ra sau 360 độ, quay chậm. Bàn làm việc thật có cốc cà phê và sổ, không dọn sạch trơn | Nhạc không có lời · để tiếng bản lề thật | Cái này để làm gì? | 0–3s (HOOK) · 3 giây đầu quyết định cả video |
| 2 | Tư thế 1 — ngồi bàn, máy mở bình thường, tay gõ phím | Nhạc không có lời | Ngồi bàn mình: như mọi cái laptop khác. | 3–12s |
| 3 | Tư thế 2 — gập chữ A, bàn phím úp xuống, chỉ còn màn dựng đứng | Nhạc không có lời | Bàn họp chật: bỏ bàn phím xuống, màn vẫn đứng. | 12–22s · CẢNH CHÍNH — dành nhiều đất nhất |
| 4 | Bốn tư thế cắt nhanh liên tiếp, dừng ở tư thế cuối | Nhạc không có lời | Một cái máy, bốn cách đặt. | 22–35s (CHỐT) |

# ── HẾT VÍ DỤ · KHUÔN TRẮNG BẮT ĐẦU TỪ ĐÂY ──

---

## KB2 · <Reels / video dài> · <thứ> <ngày> · <giờ đăng> — "<tên bài>"

📄 Bản đầy đủ: [<tên-file-draft>.md](../../01-drafts/<tên-file-draft>.md)
· P? (<tên persona>) · J? (<tên bước>) · O? (<tên mục tiêu>) · CP?? (<tên tuyến>)

**Dòng tiêu đề — merge hết 5 cột:**
```
Kịch bản 2: <tên kịch bản> - <có mẫu / không mẫu> - <voice thật / voice AI / nhạc> · Thời lượng <n> giây · Quay dọc 9:16 1080x1920 tại <nơi quay> · Máy quay: <máy trong danh sách 36 máy, hoặc "không quay máy cụ thể"> · <yêu cầu ánh sáng, phụ đề> · ⛔ <điều cấm riêng của video này>
```

| STT | BỐI CẢNH | NỘI DỤNG - VOICE | TEXT MÀN HÌNH | NOTE |
|---|---|---|---|---|
| 1 | <quay cái gì, ở đâu, tay làm gì> | <"lời thoại"> hoặc Nhạc không có lời | <chữ overlay, để trống nếu không có> | 0–3s (HOOK) |
| 2 | <bối cảnh cảnh 2> | <thoại cảnh 2> | | <timecode> · <ghi chú quay> |
| 3 | <bối cảnh cảnh 3> | <thoại cảnh 3> | | <timecode> |
| 4 | <bối cảnh cảnh 4> | <thoại cảnh 4> | | <timecode> · CẢNH CHÍNH |
| 5 | <bối cảnh cảnh chốt> | <câu chốt / CTA> | | <timecode> (CHỐT) |

---

## KB3 · <Reels / video dài> · <thứ> <ngày> · <giờ đăng> — "<tên bài>"

📄 Bản đầy đủ: [<tên-file-draft>.md](../../01-drafts/<tên-file-draft>.md)
· P? (<tên persona>) · J? (<tên bước>) · O? (<tên mục tiêu>) · CP?? (<tên tuyến>)

**Dòng tiêu đề — merge hết 5 cột:**
```
Kịch bản 3: <tên kịch bản> - <có mẫu / không mẫu> - <voice thật / voice AI / nhạc> · Thời lượng <n> giây · Quay dọc 9:16 1080x1920 tại <nơi quay> · Máy quay: <máy trong danh sách 36 máy> · <yêu cầu quay> · ⛔ <điều cấm riêng của video này>
```

| STT | BỐI CẢNH | NỘI DỤNG - VOICE | TEXT MÀN HÌNH | NOTE |
|---|---|---|---|---|
| 1 | <bối cảnh hook> | <thoại hook> | <chữ hook> | 0–3s (HOOK) |
| 2 | <bối cảnh cảnh 2> | <thoại cảnh 2> | | <timecode> |
| 3 | <bối cảnh cảnh 3> | <thoại cảnh 3> | | <timecode> |
| 4 | <bối cảnh cảnh chốt> | <câu chốt / CTA> | | <timecode> (CHỐT) |

<!-- Thêm KB4, KB5… bằng cách copy nguyên một mục ở trên. -->

---

## Checklist trước khi gửi người dùng duyệt

- [ ] Đúng 5 cột, đúng thứ tự, không ô nào chứa ký tự `|`
- [ ] Mỗi kịch bản có dòng tiêu đề merge, ghi rõ có mẫu / không mẫu + voice thật / voice AI / nhạc
- [ ] STT đếm lại từ 1 ở mỗi kịch bản
- [ ] Đã đếm từ — thoại dưới 3 từ/giây
- [ ] Mọi máy nêu tên đều nằm trong `02_products/36-MAY-DUOC-VIET.md` (luật #20)
- [ ] Không có câu nào trong bảng câu cấm — [`kich-ban-video-sheet.md`](kich-ban-video-sheet.md) mục 5
- [ ] Bảo hành (nếu nhắc) đọc theo `warranty_tag` từng máy, không mặc định 6 tháng (luật #14)
- [ ] Không có câu "còn hàng" / "còn X máy" (luật #12)
- [ ] Bản đầy đủ 12 thành phần đã có trong `01-drafts/` của chiến dịch
- [ ] Đã chạy `python3 tools/kich_ban_to_sheet.py`, không còn dòng ⚠️ nào
- [ ] `04-ban-giao/` có đủ **2 nhánh** — bài đăng và kịch bản video (luật #21)
- [ ] Người dùng đã nói "ok" (Gate 6) — chưa "ok" thì **không đụng sheet KB, không upload Drive** (luật #18, #22)
