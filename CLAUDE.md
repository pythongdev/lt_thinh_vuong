# Laptop Thịnh Vượng — AI Content System

## Bối cảnh
Đây là hệ thống hỗ trợ viết content cho **Laptop Thịnh Vượng** (laptoptv.vn) —
cửa hàng laptop cũ/likenew tại 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội.
Kênh chính: Facebook fanpage. Người dùng là người viết content của công ty.

⚠️ **TV = Thịnh Vượng**, không phải "Laptop TV" / tivi. Đừng viết sai tên thương hiệu.

## Quy tắc bất di bất dịch
1. **Không có fact → không viết.** Giá, cấu hình, bảo hành, tồn kho chỉ lấy từ file nguồn.
2. Nguồn chuẩn: `01_company/facts/` (công ty + chính sách), `02_products/products.md` (sản phẩm).
3. Máy cũ bảo hành **6 tháng** (main/màn/phím), pin **3 tháng**. Máy mới 12 tháng. Không viết khác.
4. Chưa xác minh trả góp / freeship / tồn kho → **không được hứa**. Xem `01_company/facts/UNVERIFIED.md`.
5. Mỗi bài nhắm **đúng 1 persona** (P1–P5) và **đúng 1 CTA**.
6. Mỗi bài phải khai báo **đúng 1 objective** (O1–O5), **1 journey stage** (J0–J7), **1 pillar** (CP01–CP10).
7. Mọi bài phải qua **7 gate** trong `10_gates/README.md` trước khi đăng.
8. **AI không tự đăng content thương mại.** Gate 6 phải có người ký.
9. **Không nêu tên đối thủ trong bài đăng.** So sánh chỉ ở mức mặt bằng chung.
10. Giá thay đổi liên tục → nếu `verified_at` quá 7 ngày, chạy `python3 tools/catalog_fetch.py`.
11. Sản phẩm **hết hàng / đã gỡ khỏi web** → không viết bài bán.
12. **Không được viết "còn hàng", "còn X máy", "sắp hết"** trừ khi sản phẩm có
    `stock_tracked=yes` và `qty>0` trong `02_products/catalog/catalog-<ngày>.csv`.
    Web hiện "còn hàng" cho 554/593 máy **không** có quản lý tồn kho → tín hiệu này vô nghĩa.
13. **Cấu hình lấy theo TÊN sản phẩm, không lấy theo tag.** Tag trên web có lỗi ở nhiều máy
    (sai CPU, sai RAM, sai GPU, sai tình trạng cũ/mới). Tag lệch tên → không viết thông số đó.
14. **Bảo hành đọc theo từng máy** (cột `warranty_tag`), không mặc định 6 tháng — đã gặp
    máy cũ chỉ bảo hành **1 tháng** (2 máy Latitude 7480). Xem `01_company/facts/policies.md`.
    Máy nào có tag bảo hành khác chuẩn → hỏi lại trước khi viết.
15. Trước khi viết "giảm giá X%", kiểm tra `compare_at > price`. Có **11 máy** trên web (2026-09-15)
    ghi giá gốc thấp hơn giá bán → viết giảm giá cho chúng là bịa.
16. ⛔ **Phân khúc dưới 5 triệu ĐÃ ĐÓNG** (chủ shop, 2026-09-09) — không viết bài bán,
    không làm hook "laptop 4 triệu". Máy rẻ nhất được viết: **6.880.000đ** (Latitude 7400
    vân carbon). Tư vấn inbox/comment cho khách hỏi máy 4 triệu thì **vẫn làm bình thường**.
17. **Lời chủ shop ghi đè dữ liệu web.** Web báo còn 17 máy mà chủ shop nói hết là **hết**.
    Các ghi đè đã chốt nằm ở `02_products/products.md` mục 0 — đọc mục đó trước khi viết.
18. **Local trước, sheet sau.** Mọi bài viết ở repo trước. Chỉ đẩy lên Google Sheet fanpage
    khi người dùng nói "ok". **Không tự ghi lên sheet.** Xem mục "Bàn giao lên Google Sheet".
19. **Google Sheet fanpage là FORMAT, không phải NGUỒN FACT.** Caption cũ trong sheet viết
    trước khi có hệ thống fact và vi phạm nhiều luật ở trên (bảo hành 12–24 tháng, trả góp 0%,
    freeship toàn quốc, "chỉ còn 5 máy", "giá tốt nhất", máy 4,5 triệu, sai tên "LAPTOP TV").
    Danh sách câu cấm copy lại: `04_content/templates/fanpage-sheet.md` mục 4.
20. ⛔ **CHỈ VIẾT VỀ 36 MÁY CÓ TỒN KHO XÁC THỰC** (chốt 2026-09-20).
    Danh sách trắng: `02_products/36-MAY-DUOC-VIET.md` (dữ liệu: `02_products/36-may-duoc-viet-2026-09-20.csv`).
    Máy không có tên trong danh sách đó → **không viết bài bán, không làm hook, không nêu tên
    làm ví dụ**. Tư vấn inbox/comment cho khách hỏi máy khác thì **vẫn làm bình thường**.
    Danh sách hết hạn 2026-09-27 → chạy `python3 tools/collection_fetch.py` để dựng lại.
21. 🎬 **Video bàn giao phải có kịch bản 5 cột**, không chỉ caption. Khuôn:
    `04_content/templates/reel_template/kich-ban-video-sheet.md` — `STT · BỐI CẢNH · NỘI DỤNG - VOICE
    · TEXT MÀN HÌNH · NOTE`, mỗi cảnh 1 dòng, trên mỗi kịch bản 1 dòng tiêu đề merge.
    Tuần nào có video thì `04-ban-giao/` phải có **cả 2 nhánh** file (bài đăng + kịch bản video).
    Sheet KB của team: https://docs.google.com/spreadsheets/d/1Nu5cBftCJJzjJqWgRzXE0XYIR2pvmdHHCnwAsrsgoa8
22. **Upload Google Drive cũng nằm sau Gate 6.** Luật #18 áp cho cả Drive: chưa có "ok"
    thì không upload file bàn giao lên Drive, không đụng sheet KB. Và không được báo
    "đã đưa lên Drive" khi thực tế mới chỉ sinh file trong repo.

## Bốn trục phân loại (không được nhầm mã)
| Trục | Mã | File |
|---|---|---|
| Persona — viết cho ai | **P1–P5** | `03_customers/personas.md` |
| Journey — khách đang ở đâu | **J0–J7** | `04_content/strategy/customer-journey.md` |
| Objective — viết để làm gì | **O1–O5** | `04_content/strategy/content-objectives.md` |
| Pillar — viết về cái gì | **CP01–CP10** | `04_content/strategy/content-pillars.md` |

> Pillar dùng tiền tố `CP` để không lẫn với persona `P1–P5`.

### ⛔ Không bao giờ viết mã trơn — luôn kèm tên
Người dùng không nhớ hết mã. **Mọi lần** nhắc P / J / O / CP — trong câu trả lời chat,
kế hoạch tuần, báo cáo, backlog, calendar, metadata Content Package, file draft — phải
viết **mã + tên tiếng Việt** ngay cạnh nhau, kể cả khi đã nhắc ở dòng trên.

- ✅ `P2 (Nhân viên văn phòng)` · `J3 (Đang so sánh)` · `O3 (Tin công ty)` · `CP08 (Sai lầm khi mua)`
- ❌ `P2` · `J3/O3` · `CP08` · "bài này nhắm P2, J3"
- Trong bảng: cột ghi `P2 — Nhân viên văn phòng`, không để cột chỉ có mã.
- Liệt kê nhiều mã: `O3 (Tin công ty), O4 (Cân nhắc mua)` — không viết `O3, O4`.
- **Ngoại lệ duy nhất:** file tóm tắt cho người ngoài hệ thống (sếp / chủ shop) thì **bỏ hẳn mã**,
  chỉ để tên tiếng Việt — xem mục "Bản tóm tắt cho người ngoài hệ thống".

Bảng tra (tên chuẩn lấy từ 4 file trên):

| Mã | Tên ghi kèm |
|---|---|
| P1 | Sinh viên / mua máy đầu tiên |
| P2 | Nhân viên văn phòng |
| P3 | Game thủ |
| P4 | Đồ họa / kỹ thuật |
| P5 | Doanh nghiệp nhỏ mua theo lô |
| J0 | Chưa biết shop |
| J1 | Đã thấy shop |
| J2 | Bắt đầu quan tâm laptop cũ |
| J3 | Đang so sánh máy / shop |
| J4 | Đã inbox / gọi / ghé shop |
| J5 | Đã mua |
| J6 | Quay lại (nâng cấp, mua thêm, bảo hành) |
| J7 | Giới thiệu người khác |
| O1 | Tiếp cận |
| O2 | Hiểu vấn đề |
| O3 | Tin công ty |
| O4 | Cân nhắc mua |
| O5 | Tạo lead / đơn |
| CP01 | Tư vấn mua |
| CP02 | Kiến thức |
| CP03 | So sánh |
| CP04 | Quy trình kiểm tra |
| CP05 | Đánh giá sản phẩm |
| CP06 | Chuyện khách hàng |
| CP07 | Hậu trường |
| CP08 | Sai lầm khi mua |
| CP09 | Thị trường & công nghệ |
| CP10 | Hàng & ưu đãi |

Tên trong 4 file gốc đổi → cập nhật bảng này theo.

## Cách dùng
- **Hiểu toàn bộ hệ thống:** `HE-THONG-HOAT-DONG.md` (workflow · luật · 7 gate · đo · học)
- **Máy nào được viết:** `02_products/36-MAY-DUOC-VIET.md` — **đọc trước mọi bài** (luật #20)
- **Chiến dịch đang có gì, đang bị chặn gì:** `05_campaigns/INDEX.md`
- **Mở chiến dịch mới:** `05_campaigns/campaign-template.md` (7 bước, có sẵn lệnh tạo folder)
- **Viết bài mới:** gõ `/viet-bai` (skill trong `.claude/skills/viet-bai/`)
- **Khuôn bàn giao bài đăng (BẮT BUỘC):** `04_content/templates/post-template.md`
  (lưới 9 dòng × 8 cột đúng tab đang chạy + khuôn ô CONTENT + checklist trước khi dán)
- **Diễn giải sheet fanpage:** `04_content/templates/fanpage-sheet.md`
  (chuẩn ảnh + giờ đăng + tỉ trọng tuyến nội dung + câu cấm copy)
- **Khuôn kịch bản video (BẮT BUỘC):** `04_content/templates/reel_template/` — cả nhánh reel nằm trong folder này
  - đặc tả 5 cột: `kich-ban-video-sheet.md`
  (5 cột của sheet KB + dòng tiêu đề merge + câu cấm copy + cách đưa lên Drive)
  → sinh bản dán: `python3 tools/kich_ban_to_sheet.py <file KICH-BAN-VIDEO>.md`
  → **file mẫu để copy:** `04_content/templates/reel_template/KICH-BAN-VIDEO-MAU.md`
    (bản trắng điền thẳng trên sheet: `reel_template/kich-ban-video-mau.csv`)
- **Lập kế hoạch tuần:** `12_prompts/facebook/strategy/weekly-plan.md`
- **Tìm góc content từ 1 sản phẩm:** `12_prompts/facebook/idea/product-to-angles.md`
  (Product → Facts → Customer → Need → Angles — xem `09_workflows/product-to-content.md`)
- **Cập nhật giá/sản phẩm:** `python3 tools/catalog_fetch.py` → sinh
  `02_products/catalog/catalog-<ngày>.csv` (593 SP) + in cảnh báo dữ liệu. Chạy **mỗi tuần**.
- **Thêm sản phẩm:** lấy từ CSV trên → ghi vào `02_products/products.md` kèm source + verified_at
- **Thiếu thông tin:** ghi vào `01_company/facts/UNVERIFIED.md`, đừng đoán
- **Đọc số liệu / rút pattern:** `09_workflows/weekly-learning.md`
- **Kéo dữ liệu page Facebook:** xem `tools/README.md`
- **Làm bản cho sếp / chủ shop đọc:** sinh `<file-gốc>-TOM-TAT.md` cùng thư mục —
  xem mục "Bản tóm tắt cho người ngoài hệ thống" (bỏ mã, dịch hết thuật ngữ)
- **Đánh giá lại toàn hệ thống:** `17_danh-gia-he-thong/README.md` — khung chấm, nhịp chạy,
  bảng chỉ số qua các lần. Mỗi lần đánh giá là **1 file mới**, không sửa đè bản cũ

## Đầu ra chuẩn
Không phải "một caption" mà là **Content Package** 12 thành phần —
`04_content/content-package.md`. Thiếu thành phần bắt buộc → Gate 5 chặn.

### Bài sống ở đâu — hỏi 1 câu: bài này thuộc chiến dịch nào?

| Trường hợp | Nơi lưu |
|---|---|
| **Thuộc một chiến dịch** (đa số) | `05_campaigns/<chiến-dịch>/01-drafts/` → `02-approved/` → `03-published/` |
| **Bài lẻ, không thuộc chiến dịch nào** | `04_content/drafts/` → `approved/` → `published/` |

Mỗi chiến dịch là **1 folder chứa trọn vòng đời của nó** — kế hoạch, bài viết, bàn giao,
kết quả nằm cùng chỗ. Chỉ mục: `05_campaigns/INDEX.md`. Mở chiến dịch mới:
`05_campaigns/campaign-template.md`.

(`04_content/posts/` đã xoá 2026-09-20 — toàn bộ bài cũ viết về máy ngoài danh sách 36.)

## Bàn giao lên Google Sheet fanpage

Sheet lịch đăng của team:
https://docs.google.com/spreadsheets/d/1crOiBL4PmlywPIVcrQNE7NciKEd81IfUgujkz0j2VAc

**Khuôn bắt buộc khi bàn giao** — lưới **9 dòng × 8 cột**, 1 khối = 1 tuần.
Cột A là nhãn, Thứ 2 ở cột B, Chủ Nhật ở cột H. Hai dòng đầu là *thứ trong tuần* và *ngày*,
rồi 7 nhãn: `ĐỊNH DẠNG` · `TUYẾN ND` · `CONTENT` · `BRIEF ẢNH` · `LINK ẢNH/ KB`
· `FORMAT` · `STATUS`. Tab đang chạy **không còn** dòng `STT` / `TITLE` / `DATE & TIME` —
không tự thêm lại. Đặc tả đầy đủ + template điền sẵn: `04_content/templates/post-template.md`.
Sinh bản dán: `python3 tools/ban_giao_to_sheet.py <file BAN-GIAO>.md`.

### 5 bước — LOCAL trước, ONLINE sau

| Bước | Làm gì | Ở đâu |
|---|---|---|
| 1 | Viết Content Package 12 thành phần (khai đủ P / J / O / CP kèm tên tiếng Việt) | `05_campaigns/<chiến-dịch>/01-drafts/` |
| 2 | Chạy đủ **7 gate** (`10_gates/README.md`) + checklist mục 7 của `fanpage-sheet.md` | draft |
| 3 | Gộp vào `04-ban-giao/` theo khuôn `post-template.md`, chạy `tools/ban_giao_to_sheet.py` để sinh bản dán | `04-ban-giao/` |
| 4 | **Người dùng đọc và nói "ok"** — Gate 6 phải có người ký | — |
| 5 | Chỉ khi đã "ok" → đẩy lên sheet, `STATUS` = `CHỜ FEEDBACK` | Google Sheet |

- Chưa có "ok" → **dừng ở bước 3**, không đụng vào sheet.
- Chỉ người phụ trách đổi `STATUS` thành `ĐÃ AIR` sau khi bài đã đăng thật.
- Bản đầy đủ luôn sống ở repo. Sheet chỉ nhận phần đăng được — 4 trục, fact table,
  measurement plan, first comment, sales follow-up **không** có chỗ trên sheet.

### ⚠️ Giới hạn công cụ
Connector Google Drive hiện tại **chỉ đọc**, không ghi được ô. Bước 5 làm theo 1 trong 3 cách:
1. Xuất file `-luoi.csv` / Apps Script để người dùng nhập vào sheet (mặc định).
2. Viết Apps Script / dùng Sheets API — cần người dùng cấp quyền.
3. Nối connector Google Sheets có quyền ghi.

Không được "báo đã đẩy lên sheet" nếu thực tế mới chỉ xuất block để copy.

## Bản tóm tắt cho người ngoài hệ thống (sếp / chủ shop / khách)

Kế hoạch trong repo viết cho **người vận hành hệ thống**. Sếp và chủ shop **không đọc được** bản đó:
mã P / J / O / CP, tên file nguồn, số gate, tên script đều là tiếng lóng nội bộ.
Khi người dùng nói *"cái này cho sếp đọc"*, *"sếp không biết hệ thống"*, *"đừng viết tắt"* →
sinh **file tóm tắt riêng**, không sửa bản gốc.

**Tên file:** `<tên-file-gốc>-TOM-TAT.md`, đặt **cùng thư mục** với bản gốc.
Bản gốc giữ nguyên mọi thứ kỹ thuật — hai file sống song song, không thay thế nhau.

### Bố cục bắt buộc — 4 mục
| Mục | Nội dung |
|---|---|
| Mở đầu | Viết cho ai · mục tiêu kinh doanh · kênh đăng · mạch các bài nối nhau thế nào |
| 1. Bảng tóm tắt | 1 dòng / 1 bài: Ngày · Tên bài · Dạng bài · Bài này nhằm làm gì · Người đọc đang ở bước nào · Muốn người đọc làm gì |
| 2. Khung từng bài | Mỗi bài 1 mục: các nhịp nội dung đánh số, câu mở, câu kêu gọi, điều cấm riêng của bài |
| 3. Điều không được viết | Gộp toàn bộ danh sách cấm thành câu tiếng Việt thường, kèm lý do ngắn |
| 4. Việc cần sếp quyết | Bảng: câu hỏi đầy đủ + "nếu không trả lời kịp thì làm gì". Đánh số lại từ 1, không giữ mã Q |

Cuối file thêm 1 dòng: *"Kế hoạch chi tiết đầy đủ nằm ở bản gốc cùng thư mục."*

### ⛔ Bỏ mã, không phải viết mã kèm tên
Đây là **ngoại lệ duy nhất** của luật "không bao giờ viết mã trơn". Trong file tóm tắt:
**bỏ hẳn mã**, chỉ để tên tiếng Việt đầy đủ. Viết `CP02 (Kiến thức)` cho sếp đọc là vẫn sai.

### Bảng dịch thuật ngữ — dùng cột phải
| Trong hệ thống | Viết cho sếp |
|---|---|
| `CP02 (Kiến thức)`, `O2 (Hiểu vấn đề)` | "Bài này nhằm làm gì": *giúp người đọc hiểu đúng vấn đề* |
| `J2 (Bắt đầu quan tâm laptop cũ)` | "Người đọc đang ở bước nào": *mới bắt đầu quan tâm laptop cũ* |
| `P1 (Sinh viên / mua máy đầu tiên)` | *bạn sinh viên sắp mua chiếc laptop đầu tiên* |
| CTA | "Muốn người đọc làm gì" |
| Reels · Carousel · Story · Post | Video ngắn · Chuỗi ảnh lật · Tin · Bài viết |
| Gate 0–6, Content Package, `catalog_fetch.py`, tên file nguồn | Bỏ hẳn |
| Q1, Q2, Q7… | Câu hỏi viết đủ thành câu, đánh số lại từ 1 |
| `stock_tracked=yes`, `compare_at` | *có kiểm đếm số lượng trong kho* · *giá gốc ghi trên web* |
| i7-1185G7 · Ryzen 7-5700U | *chip i7 đời 11* · *chip Ryzen 7* |
| 2in1 | *gập xoay* |
| FHD · SSD 512GB | *màn 14 inch* · *ổ 512 GB* |
| 16GB RAM | *RAM 16 GB* (giữ RAM — đây là từ khách hàng vẫn dùng) |

Giữ nguyên: RAM, ổ cứng, màn hình, pin, bảo hành — đây là từ người mua laptop nào cũng hiểu.

### Luật còn nguyên hiệu lực trong bản tóm tắt
Fact-check **không** được nới. Giá, cấu hình, bảo hành, tồn kho trong file tóm tắt phải
truy được về nguồn y như bài đăng. Chỗ nào bản gốc đang chờ chủ shop trả lời →
trong bản tóm tắt viết theo **phương án an toàn**, và nêu lại ở mục 4 để sếp quyết.
Không được im lặng chọn hộ.

## Cấu trúc thư mục
```
01_company/    facts (công ty, chính sách) + brand (định vị, tone)
02_products/   database sản phẩm đã xác minh + catalog/ (snapshot CSV toàn web)
03_customers/  5 personas
04_content/    strategy/ (objectives, pillars, journey, matrix, facebook-strategy)
               formats/ (reels, post, carousel, story, comparison, review, customer-story)
               backlog/ (idea-schema, ideas, experiments) · calendar/
               templates/ (post-template = KHUÔN BÀN GIAO · fanpage-sheet · facebook · tiktok)
               templates/reel_template/ (kich-ban-video-sheet = đặc tả · KICH-BAN-VIDEO-MAU.md · .csv)
               drafts/ → approved/ → published/ (chỉ bài lẻ, không thuộc chiến dịch nào)
05_campaigns/  INDEX.md = chỉ mục mọi chiến dịch · campaign-template.md = khuôn mở mới
               <ngày>-chuong-<n>-<tên>/  ← mỗi chiến dịch 1 folder, trọn vòng đời:
                   INDEX.md · 00-ke-hoach/ · 01-drafts/ · 02-approved/
                   · 03-published/ · 04-ban-giao/ · 05-ket-qua/
06_sales/      quy trình bán, xử lý phản đối
07_analytics/  metrics · content-performance · experiments · learned-patterns · reports/
08_ai_agents/  12 agent + orchestrator
09_workflows/  daily · product-to-content · idea-to-content · approval · publishing
               · analytics-loop · weekly-learning
10_gates/      7 cổng kiểm duyệt (Gate 0–6)
11_tasks/      backlog hệ thống
12_prompts/    prompt chuẩn + facebook/ (strategy, idea, hook, reels, posts, review, analytics)
13_examples/   bài mẫu đã fact-check
14_roadmap/    7 phase
15_competitors/ phân tích đối thủ (đọc trước khi tìm góc content mới)
16_research/   tài liệu nghiên cứu/tham khảo (chưa phải nguồn fact — không trích vào bài)
17_danh-gia-he-thong/  các lần đánh giá lại hệ thống (không phải nguồn fact)
tools/         catalog_fetch.py (sản phẩm+giá) · fb_fetch.py (Facebook Graph API)
               ban_giao_to_sheet.py (bài đăng → sheet) · kich_ban_to_sheet.py (video → sheet KB)
```

## Giọng văn
Tư vấn thật, dễ hiểu, không phóng đại. Nói bằng tình huống đời thực của khách,
không liệt kê thông số suông. Cấm: "sốc", "rẻ nhất", "số 1", "chính hãng" (cho máy cũ).
