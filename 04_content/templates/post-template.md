# TEMPLATE POST — khuôn bắt buộc khi bàn giao lên Google Sheet

> **Đây là khuôn chuẩn duy nhất.** Mọi lần bàn giao từ 2026-09-22 trở đi phải ra đúng khuôn này.
> Bàn giao không đúng khuôn → người đẩy trả lại, không dán lên sheet.
>
> **Nguồn format:** tab đang chạy của sheet "Digital Plan - Social Laptop Thịnh Vượng"
> https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc/edit?gid=1298966850
> (tab **T9.2026**) — đọc nguyên văn ngày **2026-09-22**.
>
> **Bản trên Google Drive** (tạo 2026-09-22, chủ sở hữu: tài khoản của người dùng):
> - Khuôn trắng để nhập vào sheet — *TEMPLATE POST — Laptop Thịnh Vượng (khuôn bàn giao fanpage)*
>   https://docs.google.com/spreadsheets/d/1ZnHDeX_VIAKrkVyOsbr7QPv8Vc_etJOYcopptxZS0CI
> - Hướng dẫn điền — *TEMPLATE POST — hướng dẫn điền (Laptop Thịnh Vượng)*
>   https://docs.google.com/document/d/11W_9CO7fHHvOOmJWJluMjawyZAysBwe_kJHKywp35WI
>
> Hai file Drive đang ở **My Drive**, **chưa chia sẻ cho ai**. Muốn team dùng thì tự bấm Chia sẻ.
> File trong repo là bản gốc — sửa repo trước, rồi mới cập nhật bản Drive.
>
> ⚠️ Sheet là **FORMAT, không phải NGUỒN FACT** (luật #19 trong `CLAUDE.md`).
> Caption cũ trong sheet vi phạm nhiều luật hiện hành — danh sách câu cấm copy lại:
> `04_content/templates/fanpage-sheet.md` mục 4.

---

## 1. Khuôn 1 tuần — 9 dòng × 8 cột

Sheet xếp theo **tuần**, không xếp theo bài. Mỗi tuần là 1 khối:

|  | **B** | **C** | **D** | **E** | **F** | **G** | **H** |
|---|---|---|---|---|---|---|---|
| **A (nhãn)** | Thứ 2 | Thứ 3 | Thứ 4 | Thứ 5 | Thứ 6 | Thứ 7 | Chủ Nhật |
| *(trống / khung giờ)* | `05-10` | `06-10` | `07-10` | `08-10` | `09-10` | `10-10` | `11-10` |
| `ĐỊNH DẠNG` | … | | | | | | |
| `TUYẾN ND` | … | | | | | | |
| `CONTENT` | … | | | | | | |
| `BRIEF ẢNH` | … | | | | | | |
| `LINK ẢNH/ KB` | … | | | | | | |
| `FORMAT` | … | | | | | | |
| `STATUS` | … | | | | | | |

Sau mỗi khối chừa **1 dòng trống** rồi mới tới tuần kế.

### ⛔ Ba chỗ hay làm sai
1. **Cột A là cột nhãn.** Thứ 2 nằm ở **cột B**, Chủ Nhật ở **cột H**. Đừng đẩy lệch 1 cột.
2. **Không có dòng `STT`, `TITLE`, `DATE & TIME`.** Ba dòng này có trong các tháng cũ (T4–T6)
   nhưng tab đang chạy **đã bỏ**. Không tự thêm lại.
3. Dòng link tên là **`LINK ẢNH/ KB`** — có chữ `/ KB`, không phải `LINK ẢNH`.

### Một ngày có 2 nội dung thì làm sao
1 cột = 1 ngày = **1 nội dung**. Ngày đăng 2 bài (trưa + tối) → **lặp khối tuần thêm 1 lần**
ngay dưới, và ghi khung giờ vào **ô A của dòng thứ trong tuần**:

```
12:15 , Thứ 2 , Thứ 3 , ...     ← khối 1
20:30 , Thứ 2 , Thứ 3 , ...     ← khối 2, ngay dưới
```

Ô A của dòng thứ trong tuần là chỗ **duy nhất** khung giờ đăng xuất hiện trên sheet.
Tab gốc để trống ô này; ta điền giờ vào vì lịch đăng của mình có 2 khung giờ/ngày.

Không nhét 2 caption vào chung 1 ô. Không mở thêm cột.

---

## 2. Điền gì vào từng dòng

| Dòng | Điền gì | Ai điền | Bắt buộc |
|---|---|---|---|
| *Thứ trong tuần* | `Thứ 2` … `Chủ Nhật` — cố định, không đổi | AI | ✅ |
| *Ngày* | `05-10` (ngày-tháng, 2 chữ số). Ô A để trống, hoặc ghi khung giờ khi tách khối | AI | ✅ |
| `ĐỊNH DẠNG` | Dạng sản xuất: `post` · `Video` · `Reels` · `Bộ ảnh` · `Caption` · `Bài viết website + share fb`. Được viết thêm mô tả việc phải làm cho người sản xuất (sheet đang làm vậy): *"Bộ hình ảnh sản phẩm Dell Latitude 9520 2in1 — 5 ảnh"* | AI | ✅ |
| `TUYẾN ND` | 1 trong 6 tuyến: `Sản phẩm` · `Trust thương hiệu` · `CTKM` · `Tương tác` · `Giáo dục` · `Trust SP / Review SP`. Quy đổi sang CP01–CP10: `fanpage-sheet.md` mục 2 | AI | ✅ |
| `CONTENT` | Caption đầy đủ, sẵn sàng copy lên fanpage. Gồm cả chân post + hashtag. Xem mục 3 | AI | ✅ |
| `BRIEF ẢNH` | Brief cho thiết kế / người quay: tỉ lệ · số lượng · chụp gì · text trên ảnh · điều cấm của bài đó | AI | ✅ |
| `LINK ẢNH/ KB` | Mã kịch bản (`KB4T9`) hoặc link Drive bộ ảnh | **người đẩy / thiết kế** | để trống |
| `FORMAT` | Kênh đẩy: `Post caption` · `Post ads` · `Post TV` | AI | ✅ |
| `STATUS` | Bàn giao luôn để **`CHỜ FEEDBACK`**. Chỉ người phụ trách đổi `ĐÃ AIR` **sau khi bài đã đăng thật** | AI đặt · người phụ trách đổi | ✅ |

### 4 trục P / J / O / CP đi đâu?
Sheet **không có chỗ** cho persona / journey / objective / pillar. Bốn trục này vẫn **bắt buộc khai**,
nhưng sống ở **bản repo** (`05_campaigns/<chiến-dịch>/01-drafts/` và file bàn giao `.md`),
không đẩy lên sheet. Cùng nhóm bị bỏ lại: fact table, measurement plan, bình luận đầu,
kịch bản trả lời inbox. Xem `fanpage-sheet.md` mục 6.

---

## 3. Khuôn ô `CONTENT`

```
<Dòng mở — câu hỏi / tình huống thật của khách. 1–2 emoji, không hơn>

<Thân bài: nêu đúng vấn đề khách gặp → giải pháp → 3–5 lợi ích>

<CTA — đúng 1 hành động>
______________________
📍 LAPTOP THỊNH VƯỢNG
☎️ Mua hàng: 0928939666 (8h–20h30)
🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)
🌐 https://laptoptv.vn
🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội

#hashtag1 #hashtag2 #hashtag3 #laptopthinhvuong
```

- Chân post dùng **đúng bản trên** (`fanpage-sheet.md` mục 4.8). Không copy chân post cũ trong sheet
  (sai số máy, có claim chưa xác minh).
- Hashtag **3–5 tag**. Không bê nguyên chuỗi 21 tag đang có trong sheet.
- Xuống dòng bằng Enter thật trong ô. Không dùng ký tự `|`.
- Bài sản phẩm theo mạch: `Hook → Thông tin máy → Điểm mạnh → Giá → CTA → Chân post → Hashtag`.

---

## 4. Khối điền 1 bài — dùng khi viết file bàn giao `.md`

File bàn giao trong `05_campaigns/<chiến-dịch>/04-ban-giao/BAN-GIAO-<tuần>.md` viết theo khuôn này.
`tools/ban_giao_to_sheet.py` đọc đúng khuôn này để sinh bản dán lên sheet — sai khuôn thì script dừng.

~~~markdown
## <số> · T2 05-10 · 12:15 — <dạng> "<tên bài>"

📄 Bản đầy đủ: [<file draft>.md](../01-drafts/<file draft>.md)

| Dòng trong sheet | Giá trị |
|---|---|
| **DATE & TIME** | 05-10 (Thứ 2) · 12:15 |
| **ĐỊNH DẠNG** | Reels |
| **TUYẾN ND** | Giáo dục |
| **FORMAT** | Post caption |
| **STATUS** | CHỜ FEEDBACK |
| **LINK ẢNH/ KB** | *(để trống — chưa quay)* |
| **Persona** | P2 (Nhân viên văn phòng) |
| **Journey** | J1 (Đã thấy shop) |
| **Objective** | O1 (Tiếp cận) |
| **Pillar** | CP02 (Kiến thức) |
| **Sản phẩm nêu tên** | *(không nêu tên máy)* hoặc `<tên máy trong 36-MAY-DUOC-VIET.md>` |
| **CTA** | *(đúng 1)* |

**CONTENT:**
```
<caption đầy đủ theo mục 3>
```

**BRIEF ẢNH:**
- Tỉ lệ · số lượng · chụp/quay gì
- Text trên ảnh (tối đa 3 dòng)
- ⛔ Điều cấm riêng của bài này

**Nguồn fact:**
| Câu trong bài | Nguồn |
|---|---|
| 12.980.000đ | `02_products/products.md#PRD-xxx` (verified <ngày>) |
| Bảo hành 6 tháng main/màn/phím | `01_company/facts/policies.md` |

**Gates:** G0 ⬜ · G1 ⬜ · G2 ⬜ · G3 ⬜ · G4 ⬜ · G5 ⬜ · G6 ⬜
~~~

> `DATE & TIME` chỉ tồn tại **trong file .md** để script biết xếp bài vào cột nào của tuần nào.
> Nó **không** thành một dòng trên sheet.

---

## 5. Sinh bản dán lên sheet

```bash
python3 tools/ban_giao_to_sheet.py 05_campaigns/<chiến-dịch>/04-ban-giao/BAN-GIAO-<tuần>.md
```

Sinh 3 file cùng thư mục:

| File | Dùng khi nào |
|---|---|
| `SHEET-<tuần>-luoi.csv` | **Bản chuẩn** — đúng lưới 9 dòng × 8 cột. Sheet → Tệp → Nhập → Chèn trang tính mới |
| `SHEET-<tuần>-ngang.csv` | 1 bài = 1 dòng. Chỉ để lọc / soát, **không** dán vào lịch tuần |
| `day-len-sheet.gs` | Apps Script — tự tạo tab mới và vẽ đúng lưới, có định dạng. Nhanh nhất |

Script **không ghi lên sheet**. Nó chỉ xuất bản để người phụ trách đẩy lên (luật #18).

---

## 6. Checklist trước khi dán lên sheet

**Đúng khuôn**
- [ ] Đúng 9 dòng, đúng thứ tự, nhãn viết đúng chữ (`LINK ẢNH/ KB`, không phải `LINK ẢNH`)
- [ ] Thứ 2 ở cột B, Chủ Nhật ở cột H — không lệch cột
- [ ] Không có dòng `STT` / `TITLE` / `DATE & TIME` trên sheet
- [ ] Ngày ghi dạng `05-10`, khớp đúng thứ trong tuần
- [ ] Ngày có 2 nội dung → đã tách thành 2 khối, ô A ghi khung giờ
- [ ] `STATUS` = `CHỜ FEEDBACK` ở **mọi** ô có bài
- [ ] `LINK ẢNH/ KB` để trống cho thiết kế điền

**Đúng luật nội dung**
- [ ] Mọi máy nêu tên nằm trong `02_products/36-MAY-DUOC-VIET.md` (luật #20)
- [ ] Giá khớp catalog trong vòng 7 ngày (luật #10) · bảo hành đọc theo `warranty_tag` (luật #14)
- [ ] Cấu hình lấy theo **tên sản phẩm**, không theo tag (luật #13)
- [ ] Không có câu nào trong `fanpage-sheet.md` mục 4 (bảo hành 12–24 tháng, trả góp 0%,
      freeship toàn quốc, "chỉ còn 5 máy", "giá tốt nhất", máy dưới 5 triệu, "LAPTOP TV")
- [ ] Chân post dùng bản mục 3 · hashtag 3–5 tag
- [ ] Không nêu tên đối thủ (luật #9)

**Đúng quy trình**
- [ ] Bài đã qua đủ 7 gate (`10_gates/README.md`)
- [ ] **Người dùng đã nói "ok"** (Gate 6). Chưa "ok" → dừng, không đụng vào sheet (luật #18)
- [ ] Bản đầy đủ (4 trục kèm tên tiếng Việt, nguồn fact, bình luận đầu) đã có trong `01-drafts/`

---

## 7. Đưa lên Google Drive — chỉ sau khi có "ok"

Thứ tự **không được đảo** (luật #18, Gate 6 ở `10_gates/README.md`):

| Bước | Làm gì | Ai làm |
|---|---|---|
| 1 | Viết Content Package đủ 12 thành phần trong `01-drafts/` | AI |
| 2 | Gộp thành `BAN-GIAO-<tuần>.md` theo mục 4, chạy `ban_giao_to_sheet.py` | AI |
| 3 | Chạy 7 gate + checklist mục 6 | AI |
| 4 | **Người dùng đọc và nói "ok"** — Gate 6 phải có người ký | Người dùng |
| 5 | Upload `-luoi.csv` (+ `.md` nếu cần) lên Google Drive, rồi nhập vào sheet hoặc chạy `day-len-sheet.gs` | Người đẩy |

- Chưa có "ok" → **dừng ở bước 3**. Không upload Drive, không đụng sheet.
- Script tạo **tab mới**, không ghi đè tab nào đang có.
- Không được báo "đã đưa lên Drive / đã lên sheet" nếu thực tế mới chỉ sinh file trong repo.

---

## 8. File liên quan

| File | Nội dung |
|---|---|
| `04_content/templates/fanpage-sheet.md` | Bản diễn giải sheet: quy đổi tuyến ND ↔ pillar, tỉ trọng, chuẩn ảnh, giờ đăng, **danh sách câu cấm copy** |
| `04_content/templates/reel_template/` | Cả nhánh reel: đặc tả `kich-ban-video-sheet.md` + file mẫu `KICH-BAN-VIDEO-MAU.md` |
| `04_content/content-package.md` | 12 thành phần bản đầy đủ trong repo |
| `10_gates/README.md` | 7 cổng kiểm duyệt |
| `tools/ban_giao_to_sheet.py` | Sinh bản dán lên sheet từ file bàn giao |
