# Ý TƯỞNG — Chương 2 của chiến dịch: "Dân văn phòng 15–18 triệu"

> ## 🅿️ GÁC LẠI LÀM CHƯƠNG 3 — quyết định người dùng 2026-09-21
> Người dùng chọn **giữ P1 (Sinh viên / mua máy đầu tiên)** cho tuần 28/09–04/10.
> Bộ 5 bài đã viết theo hướng đó: `05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/00-ke-hoach/ke-hoach.md`.
> Bản ý tưởng P2 (Nhân viên văn phòng) dưới đây **vẫn còn nguyên giá trị** — tầng 15–18 triệu
> chưa ai viết, và phát hiện ở mục 2 (ở tầm 17 triệu shop có cả máy mới 100% bảo hành 12 tháng
> lẫn máy likenew cao cấp, so được bằng hai máy thật) vẫn đúng. Dùng cho tuần 05–11/10.
> ⚠️ Khi mở lại phải chạy `python3 tools/collection_fetch.py` — số liệu dưới đây chụp 2026-09-20.

> **Trạng thái: BẢN Ý TƯỞNG CHỜ DUYỆT.** Chưa viết Content Package, chưa vào calendar,
> chưa chạm sheet. Đây là bước "đưa ý tưởng trước" theo yêu cầu người dùng 2026-09-21.
>
> Nối tiếp: `05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/00-ke-hoach/ke-hoach.md` (chương 1, tuần 21–27/09,
> 10 nội dung đã bàn giao ở `05_campaigns/2026-09-21-chuong-1-sinh-vien-13-trieu/04-ban-giao/2026-09-21-BAN-GIAO-SHEET-tuan-21-27-09.md`).
>
> Nguồn dữ liệu: `02_products/36-may-duoc-viet-2026-09-20.csv` · `01_company/facts/policies.md`
> · `03_customers/personas.md` · `15_competitors/competitors.md` · `01_company/facts/UNVERIFIED.md`
> · nghiên cứu thị trường 2026-09-21 (mục 1.3).

---

## 1. Vì sao chương 2 nên đổi persona, không viết thêm cho sinh viên

### 1.1 Chương 1 đã vét gần hết góc của P1 (Sinh viên / mua máy đầu tiên)
10 nội dung tuần 21–27/09 đã dùng: sai lầm nhìn chữ i7 · mới hay cũ · gập xoay để làm gì ·
3 thứ soi 30 giây · 10 thứ kiểm trước khi trả tiền · máy cũ chậm dần · 15 ngày đổi ý ·
chọn dòng máy · ba chiếc dưới 13 triệu (×2). Viết thêm cho cùng persona ở cùng tầm giá
sẽ lặp lại chính mình.

### 1.2 Kho hàng đang nói rất rõ: tầng 15–18 triệu còn nguyên, chưa ai viết
Trong 36 máy có tồn kho xác thực, tầng **15–18 triệu có 8 máy / 33 chiếc** — chưa có bài nào.
Persona khớp sẵn: `personas.md` chốt **P2 (Nhân viên văn phòng) = 15–20 triệu**.
Không lệch persona, không cần ghi chú ngoại lệ nào.

### 1.3 Nghiên cứu thị trường 2026-09-21 — 3 điều tìm được

| # | Tìm được gì | Dùng vào đâu |
|---|---|---|
| 1 | Nội dung về **2in1 xoay gập** trên mạng gần như chỉ nói về **máy mới**. Máy 2in1 **đã qua sử dụng** là vùng gần như trống — mà 29/36 máy có kho thật của shop chính là nhóm này | Cả 5 bài đứng ở vùng ít người tranh |
| 2 | Bài viết trong ngành đồng thuận: nỗi lo số một khi mua 2in1 cũ là **bản lề** (chịu lực gấp nhiều lần máy thường) và **màn cảm ứng** (chi phí thay cao hơn). Chưa ai trả lời thẳng | **Bài 2** — bài trust mạnh nhất của bộ |
| 3 | Nguồn hàng Latitude/XPS cũ ở Việt Nam thường là **máy doanh nghiệp thanh lý nhập từ Mỹ / Nhật / EU** | ⛔ **KHÔNG viết.** Đây là mặt bằng ngành, không phải fact về nguồn hàng của shop. Đã thêm thành câu hỏi 4 ở mục 4 |

> ⚠️ Lưu ý phương pháp: mục 1.3 là tài liệu tham khảo ngoài, **không phải nguồn fact**
> (luật `16_research/`). Nó chỉ dùng để **chọn góc**, không dùng để lấy con số vào bài.

---

## 2. Bốn máy làm xương sống — tất cả đã đối chiếu CSV 2026-09-20

Lấy theo **TÊN sản phẩm** (luật #13), bảo hành theo **`warranty_tag` từng máy** (luật #14),
`compare_at > price` ở cả 4 máy nên không vướng luật #15.

| Vai | Máy | Cấu hình (đọc từ tên) | Tình trạng · BH | Giá | Kho 20/09 |
|---|---|---|---|---|---|
| Rẻ nhất tầng | Dell XPS 7390 2in1 | i7-1065G7 · 16GB · 256GB · 13.3" FHD cảm ứng, xoay gập | **Cũ** · 6 tháng | 15.880.000đ | 3 |
| Không cảm ứng, ổ to | Dell Inspiron 5430 | i5-1340P · 16GB · **512GB** · 14" 2.5K | Likenew · 6 tháng | 16.680.000đ | 3 |
| **Đối trọng máy mới** | Asus Vivobook S14 Q423SA | Ultra 5 226V · 16GB DDR5 · 512GB · 14" FHD+ **OLED** | **Mới 100%** · **12 tháng** | 16.980.000đ | 3 |
| Cao nhất tầng | Dell XPS 9310 2in1 | i7-1165G7 · 16GB · 256GB · 13" FHD+ cảm ứng, xoay gập | Likenew · 6 tháng | 17.980.000đ | 7 |

### 🟢 Phát hiện quan trọng nhất của chương 2
Ở tầm 13 triệu (chương 1), shop **không có máy mới 100% nào có tồn kho xác thực** → bài
"mới hay cũ" buộc phải so **theo tầm cấu hình chung**, không so được hai máy cụ thể
(xem mục 5 ô #1 của bản bàn giao tuần 21–27).

Ở tầm **17 triệu thì có**: Asus Vivobook S14 OLED **mới 100%, bảo hành 12 tháng, 16.980.000đ**
nằm ngay cạnh XPS 9310 2in1 **likenew, 17.980.000đ**. Lần này bài "mới hay cũ" so được bằng
**hai chiếc máy thật đang bán trong cùng một cửa hàng** — mạnh hơn hẳn bản chương 1, và con số
"12 tháng" lần này gắn đúng vào một máy có `warranty_tag = 12 Tháng`, không phải nói chung chung.

### Máy đã cân nhắc rồi loại
| Máy | Vì sao loại |
|---|---|
| Surface Laptop 4 — 14.880.000đ | Tên chỉ ghi **Cảm ứng**, không ghi xoay gập, nhưng tag phân khúc lại ghi "Xoay gập" → không được gọi là 2in1. Thêm nữa cột `vendor` trên web ghi **Samsung** cho máy Microsoft — lỗi dữ liệu, cần shop sửa |
| Dell Precision 7550 ×2 · Precision 5550 | Máy trạm 15,6" có card rời — đúng **P4 (Đồ họa / kỹ thuật)**, không phải P2 (Nhân viên văn phòng). Để dành cho một chiến dịch riêng |
| HP OmniBook 5 Flip — 15.890.000đ | Máy mới nhưng chỉ **8GB RAM** — mâu thuẫn trực tiếp với luận điểm "RAM 16GB" là xương sống của cả bộ bài |
| Lenovo ThinkPad X1 Yoga Gen 6 — 13.480.000đ | Kho chỉ 2 chiếc, và dưới tầng giá của bộ bài này |

---

## 3. Năm bài — mạch đi từ hiểu vấn đề tới chốt máy

Mạch lặp lại đúng khung đã dùng ở chương 1 (đổi thước đo → dạy tự kiểm → so sánh → chọn trong nhà
→ chốt), nhưng đổi persona, đổi tầng giá, đổi bộ máy.

### Bài 1 — "Máy mở 30 tab với một file Excel nặng mà ì — phần lớn không phải lỗi con chip"
- **Dạng:** bài viết · **Trục:** P2 (Nhân viên văn phòng) · J2 (Bắt đầu quan tâm laptop cũ)
  · O2 (Hiểu vấn đề) · CP02 (Kiến thức)
- Đổi thước đo của dân văn phòng từ *con chip* sang **RAM 16GB + ổ SSD + màn hình**, giống
  cách chương 1 làm với sinh viên nhưng nói bằng tình huống công việc: 30 tab, file Excel
  nhiều sheet, họp online trong khi vẫn mở tài liệu.
- **Không nêu tên máy nào.** Đây là bài mở đường, không bán.
- ⛔ Không một con số hiệu năng nào — shop chưa đo (`UNVERIFIED.md` #14 và mục 6 chương 1).
  Không nói "chạy mượt", "không lag" như một lời hứa; chỉ nói RAM nhiều thì mở được nhiều
  thứ cùng lúc mà không phải đóng bớt.
- **CTA:** comment nghề đang làm + thường mở bao nhiêu tab.

### Bài 2 — "Mua laptop xoay gập đã qua sử dụng: 5 thứ chỉ soi được khi máy nằm trước mặt bạn"
- **Dạng:** bộ ảnh lật · **Trục:** P2 (Nhân viên văn phòng) · J2 (Bắt đầu quan tâm laptop cũ)
  · O2 (Hiểu vấn đề) · CP04 (Quy trình kiểm tra)
- Đây là **bài mạnh nhất của bộ** và là bài dùng lại được lâu nhất — ghim đầu trang được,
  đăng lại được. Nó là bản 2in1 của bài "10 thứ phải kiểm tra" tuần trước, không trùng nội dung.
- Năm mục: **bản lề** (xoay chậm hết 360 độ, nghe tiếng, thả tay xem màn có tự trôi) ·
  **cảm ứng** (vẽ một đường liền qua 4 góc và giữa màn) · **điểm chết** (ảnh trắng rồi ảnh đen
  kín màn) · **khe tản nhiệt** · **bàn phím khi màn đã gập ra sau** (phải tự khoá).
- 🔴 **Câu thật nhất của cả bộ, và là lý do bài này đáng viết:** `policies.md` ghi rõ
  **điểm chết trên màn hình nằm trong diện TỪ CHỐI bảo hành**. Vậy nên shop nói thẳng:
  *"Màn hình có trong diện bảo hành, nhưng điểm chết thì không — nên bạn phải soi nó ngay
  tại quầy, và bạn còn 15 ngày để đổi ý."* Không cửa hàng nào tự đăng điều này.
- ⛔ Bài này **không bán hàng**: không giá, không tên máy, không "nhắn tin ngay".
- ⚠️ **Chặn một phần:** `policies.md` chỉ ghi bảo hành **main / màn hình / bàn phím** —
  **bản lề không có trong danh sách**. Chưa có câu trả lời thì bài chỉ được dạy cách soi bản lề,
  **không được nói bản lề có bảo hành hay không**. Xem câu 1 mục 4.
- **CTA:** lưu bài lại, hôm đi xem máy mở ra soi.

### Bài 3 — "17 triệu: máy mới 100% màn OLED, hay máy cao cấp đã qua sử dụng xoay gập cảm ứng?"
- **Dạng:** bài viết · **Trục:** P2 (Nhân viên văn phòng) · J3 (Đang so sánh)
  · O4 (Cân nhắc mua) · CP03 (So sánh)
- Hai máy thật, cùng một cửa hàng, chênh 1 triệu:
  - **Asus Vivobook S14 OLED — 16.980.000đ** · mới 100% · Ultra 5 226V · 16GB DDR5 · 512GB
    · 14" FHD+ OLED · **bảo hành 12 tháng**
  - **Dell XPS 9310 2in1 — 17.980.000đ** · likenew · i7-1165G7 · 16GB · 256GB
    · 13" FHD+ cảm ứng, xoay gập · bảo hành 6 tháng, pin 3 tháng
- Nói rõ mỗi bên thắng cái gì, **không bên nào thắng hẳn**: máy mới hơn ở bảo hành (12 so với 6
  tháng), ở ổ cứng (512 so với 256GB) và ở màn OLED; máy đã qua sử dụng hơn ở chỗ xoay gập
  cảm ứng được và là dòng cao cấp của Dell.
- Bắt buộc giữ **câu thú nhận đời chip** như luật đã chốt ở chương 1 mục 0.6: máy cũ dùng chip
  đời cũ hơn máy mới cùng tiền, nói trước, không để khách tự phát hiện.
- ⛔ Không nói máy nào "tốt hơn". Không chấm điểm. Không nói OLED "đẹp hơn" theo kiểu định lượng.
- **CTA:** comment công việc chính, shop nói nên đi hướng nào.

### Bài 4 — "Cùng là Dell XPS 2in1, chênh 2,1 triệu — lấy bản nào?"
- **Dạng:** bài viết · **Trục:** P2 (Nhân viên văn phòng) · J3 (Đang so sánh)
  · O4 (Cân nhắc mua) · CP03 (So sánh)
- Bài **chọn-trong-nhà**: khách đã tin, đã muốn 2in1, giờ chỉ còn chọn bản. Giữ khách ở lại
  thay vì để khách đi so với chỗ khác.
  - **XPS 7390 2in1 — 15.880.000đ** · i7-1065G7 · 16GB · 256GB · 13.3" FHD cảm ứng
  - **XPS 9310 2in1 — 17.980.000đ** · i7-1165G7 · 16GB · 256GB · 13" FHD+ cảm ứng
- Khác nhau đúng hai chỗ có fact: **một đời chip** và **độ phân giải màn (FHD so với FHD+)**.
  Giống nhau: RAM 16GB, ổ 256GB, đều xoay gập cảm ứng, đều bảo hành 6 tháng.
- Phép tính chênh lệch theo đúng cách chương 1 đã chốt: chia **2.100.000đ** giữa hai máy,
  ⛔ **tuyệt đối không** chia tổng giá máy cho số tháng dùng — làm vậy là ngầm hứa máy sống
  mấy năm trong khi bảo hành 6 tháng.
- ⚠️ XPS 7390 là phân khúc **`Cũ`** → **không dùng câu "nguyên zin chưa qua sửa chữa"**
  cho máy này (`UNVERIFIED.md` #24 — câu cam kết đó trên web chỉ gắn với nhóm Likenew).
- **CTA:** comment công việc + có hay không cần cảm ứng, shop chốt giúp.

### Bài 5 — "4 máy 15–18 triệu cho dân văn phòng đang có tại 71 Thiên Hiền"
- **Dạng:** bài viết kèm bộ ảnh · **Trục:** P2 (Nhân viên văn phòng) · J4 (Đã inbox / gọi / ghé shop)
  · O5 (Tạo lead / đơn) · CP05 (Đánh giá sản phẩm)
- Đủ 4 máy ở mục 2, **mỗi máy nói thẳng một điểm yếu**:
  | Máy | Điểm yếu nói thật |
  |---|---|
  | XPS 7390 2in1 — 15.880.000đ | Đời chip cũ nhất trong bốn máy; ổ 256GB |
  | Inspiron 5430 — 16.680.000đ | **Không có cảm ứng, không xoay gập**; dòng phổ thông, không phải dòng cao cấp |
  | Vivobook S14 OLED — 16.980.000đ | Không xoay gập; không phải dòng doanh nhân |
  | XPS 9310 2in1 — 17.980.000đ | Đắt nhất tầng; ổ chỉ 256GB trong khi hai máy kia 512GB |
- ⛔ **Không đặt giá ở dòng đầu** (Facebook hạn chế hiển thị bài mở đầu bằng giá).
- ⛔ **Không viết số lượng máy** dù cả 4 máy đều `stock_tracked=yes` — kho chỉ còn 3/3/3/7 chiếc,
  và số đó là ảnh chụp 20/09. Chỉ viết "đang có trên kệ" **sau khi gọi shop xác nhận sáng hôm đăng**.
- Kèm đủ cam kết có nguồn: bảo hành 6 tháng main – màn – phím và pin 3 tháng (ba máy cũ/likenew) ·
  **12 tháng cho riêng chiếc Vivobook mới 100%** · 15 ngày đổi máy · vệ sinh, tra keo, cài Windows
  miễn phí trọn đời · giao toàn quốc 3–5 ngày làm việc, nhận máy được kiểm tra.
- **First comment:** địa chỉ + 0928939666 + 4 đường dẫn sản phẩm.
- **CTA:** nhắn tin để shop kiểm tra máy còn không.

---

## 4. Phải trả lời trước khi viết bản chính thức

| # | Câu hỏi | Chặn bài nào | Nếu không trả lời kịp |
|---|---|---|---|
| 1 | **Bản lề có nằm trong diện bảo hành 6 tháng không?** `policies.md` chỉ ghi main / màn hình / bàn phím | Bài 2 | Bài 2 chỉ dạy cách soi bản lề, **không nói gì về bảo hành bản lề**. Bài vẫn đăng được |
| 2 | Câu **"nguyên zin chưa qua sửa chữa"** có áp cho máy phân khúc `Cũ` không? (`UNVERIFIED.md` #24, đang chặn 9/36 máy) | Bài 4 · Bài 5 | Bỏ hẳn câu đó khỏi phần nói về XPS 7390 |
| 3 | **Inspiron 5430** — tên web ghi màn **2.5K** nhưng tag ghi **2K**, và đường dẫn ghi `new-100` trong khi tên ghi `[Like new]` + bảo hành 6 tháng. Máy này likenew hay mới? Màn 2K hay 2.5K? | Bài 5 | Viết theo tên (luật #13): likenew, bảo hành 6 tháng, **và bỏ hẳn độ phân giải màn**, chỉ ghi "màn 14 inch" |
| 4 | Bốn máy này về từ đâu — **máy doanh nghiệp thanh lý nhập khẩu**, hay nguồn khác? | Không chặn bài nào | Không nhắc nguồn hàng. ⛔ Không được suy từ mặt bằng ngành ở mục 1.3 |
| 5 | Kho 20/09 (3 · 3 · 3 · 7 chiếc) còn đúng tới ngày đăng không? | Bài 3 · 4 · 5 | Gọi shop sáng hôm đăng. Máy nào hết thì rút khỏi bài, không thay bằng máy ngoài danh sách 36 |

**Việc bắt buộc, không phải câu hỏi:**

1. ⛔ **Danh sách 36 máy hết hạn 2026-09-27.** Bộ bài này đăng từ 28/09 → **phải chạy
   `python3 tools/collection_fetch.py` trước khi viết bản chính thức**, rồi đối chiếu lại
   giá · kho · `warranty_tag` của cả 4 máy. Máy nào rơi khỏi danh sách thì rơi khỏi bài (luật #20).
2. **Gate 6 phải có người ký** trước khi đăng (luật #8) — chưa ký thì dừng ở bước 3 của quy trình
   bàn giao, không chạm Google Sheet (luật #18).
3. Bài **"Có 13 triệu: nên mua hãng nào?"** của chương 1 **vẫn đang bị chặn** — vẫn chờ chủ shop
   trả lời có được mở đầu bằng câu "shop mình bán Dell nhiều nhất" hay không.

---

## 5. Điều cả năm bài đều không được viết

Kế thừa toàn bộ danh sách cấm của chương 1, cộng thêm phần riêng của 2in1:

- Không con số hiệu năng, không FPS, không điểm benchmark — shop chưa đo máy nào.
- Không thời lượng pin (`UNVERIFIED.md` #14), không cân nặng — chưa cân máy nào.
- Không hứa **thay được pin / nâng được RAM / thay được ổ** trên bất kỳ máy nào trong bốn máy
  — chưa mở máy kiểm khe cắm.
- Không nói bản lề "bền", "chắc chắn như mới" — không có căn cứ đo.
- Không nói màn cảm ứng "nhạy như điện thoại".
- Không dùng chữ **"chính hãng"** cho ba máy cũ/likenew.
- Không "bảo hành 12 tháng" cho ba máy cũ/likenew — con số 12 tháng **chỉ gắn vào chiếc
  Vivobook S14 mới 100%**.
- Không trả góp, không freeship, không quà tặng kèm, không giảm giá riêng.
- Không nêu tên cửa hàng bán laptop khác. So sánh chỉ ở mức mặt bằng chung.
- Không "tốt nhất", "số một", "rẻ nhất", "sốc".
- Không "còn X máy", "sắp hết", "số lượng có hạn" — kể cả khi CSV có số, phải gọi xác nhận trong ngày.

---

*Duyệt xong mục 3 thì bước tiếp theo là viết 5 Content Package 12 thành phần vào
`04_content/drafts/`, chạy 7 gate, rồi rút thành khối 10 trường của sheet.*
