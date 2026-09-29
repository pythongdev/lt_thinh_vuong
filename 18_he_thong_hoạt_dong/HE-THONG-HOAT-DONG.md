# Hệ thống hoạt động như thế nào

> File này giải thích **toàn bộ cơ chế** của Laptop Thịnh Vượng Content OS:
> dữ liệu đi từ đâu tới đâu, ai/agent nào làm gì, chặn ở đâu, đo bằng gì, học ra sao.
> Đọc file này là hiểu được cả repo. Các file khác là chi tiết của từng mảnh.
>
> Cập nhật: 2026-09-09

---

## PHẦN 0 — Ý tưởng cốt lõi trong 1 phút

Hệ thống này **không phải** "AI viết caption". Nó là một dây chuyền sản xuất có kiểm định:

```
Sự thật (fact) → Chiến lược → Ý tưởng → Nội dung → 7 cổng kiểm duyệt → Người ký → Đăng → Đo → Học → quay lại Chiến lược
```

Ba câu quyết định mọi thứ trong repo:

| Câu | Nghĩa thực tế |
|---|---|
| **Không có fact → không viết** | Mọi con số phải truy được về một file nguồn. Không có nguồn thì dừng, ghi vào `UNVERIFIED.md`, không đoán. |
| **AI không tự đăng content thương mại** | Gate 6 bắt buộc có chữ ký người. Không có cách nào lách. |
| **Mỗi bài chỉ làm đúng 1 việc** | 1 persona · 1 journey · 1 objective · 1 pillar · 1 CTA. Bài "vừa awareness vừa chốt đơn" là bài không đo được. |

Vì sao khắt khe vậy? Vì bán **laptop cũ**. Sai giá, sai bảo hành, hứa cái chưa có
(trả góp, freeship, COD test máy) là mất uy tín ngay trong comment — thứ khó lấy lại nhất
của một shop máy cũ.

---

## PHẦN 1 — Kiến trúc 8 tầng

Repo được xếp theo đúng dòng chảy của dữ liệu. Số thư mục = thứ tự tầng.

```
┌─ TẦNG 1: SỰ THẬT (nguồn chuẩn, chỉ đọc khi viết bài) ────────────────┐
│  01_company/facts/     company-facts · policies · UNVERIFIED         │
│  01_company/brand/     brand (định vị, cấm nói gì) · tone-of-voice   │
│  02_products/          products.md — giá, cấu hình, tồn kho          │
│  03_customers/         personas.md — P1..P5                          │
│  06_sales/             quy trình bán, xử lý phản đối                 │
│  15_competitors/       đối thủ đang mạnh/yếu ở đâu                   │
│  16_research/          ⚠️ tài liệu tham khảo — KHÔNG phải nguồn fact  │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌─ TẦNG 2: CHIẾN LƯỢC (quyết định viết cho ai / để làm gì) ────────────┐
│  04_content/strategy/   objectives O1-O5 · pillars CP01-CP10         │
│                         journey J0-J7 · content-matrix · fb-strategy │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌─ TẦNG 3: Ý TƯỞNG (atom) ─────────────────────────────────────────────┐
│  04_content/backlog/    idea-schema · ideas.md · experiments.md      │
│  04_content/calendar/   lịch tuần/tháng                              │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌─ TẦNG 4: SẢN XUẤT ───────────────────────────────────────────────────┐
│  04_content/formats/    nhịp & độ dài từng format                    │
│  04_content/templates/  khung bài facebook / tiktok                  │
│  12_prompts/            thư viện prompt chuẩn                        │
│  08_ai_agents/          12 agent + orchestrator (luật chạy)          │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌─ TẦNG 5: KIỂM ĐỊNH ──────────────────────────────────────────────────┐
│  10_gates/README.md     Gate 0 → Gate 6                              │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌─ TẦNG 6: XUẤT BẢN ───────────────────────────────────────────────────┐
│  05_campaigns/<chiến-dịch>/01-drafts/ → 02-approved/ → 03-published/ │
│  (bài lẻ: 04_content/drafts/ → approved/ → published/)               │
│  09_workflows/publishing.md                                          │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌─ TẦNG 7: ĐO ─────────────────────────────────────────────────────────┐
│  07_analytics/  metrics · content-performance · reports/             │
│  tools/fb_fetch.py  (Graph API kéo số liệu page)                     │
└──────────────────────────┬───────────────────────────────────────────┘
                           ↓
┌─ TẦNG 8: HỌC ────────────────────────────────────────────────────────┐
│  07_analytics/learned-patterns.md · experiments.md                   │
│  09_workflows/weekly-learning.md                                     │
└──────────────────────────┬───────────────────────────────────────────┘
                           └──→ quay lại TẦNG 2 (sửa chiến lược)
```

**Luật đọc theo tầng:** tầng dưới **không được** ghi đè tầng trên.
Content không được "sửa" sự thật cho hợp bài. Nếu bài cần một fact chưa có,
việc phải làm là đi xác minh fact, không phải viết mềm đi.

---

## PHẦN 2 — Bốn trục phân loại (xương sống của cả hệ thống)

Mỗi content phải khai báo **đúng 1 giá trị cho mỗi trục**. Đây là thứ khiến hệ thống đo được.

| Trục | Câu hỏi | Mã | File |
|---|---|---|---|
| **Persona** | Viết cho ai? | P1–P5 | `03_customers/personas.md` |
| **Journey** | Người đó đang ở đâu trong hành trình mua? | J0–J7 | `04_content/strategy/customer-journey.md` |
| **Objective** | Viết để đạt được gì? | O1–O5 | `04_content/strategy/content-objectives.md` |
| **Pillar** | Viết về chuyện gì? | CP01–CP10 | `04_content/strategy/content-pillars.md` |

⚠️ **Pillar dùng tiền tố `CP`** (CP01…CP10) để không lẫn với persona (P1…P5). Đây là lỗi nhầm mã hay gặp nhất.

### 2.1 Persona — P1..P5

| Mã | Ai | Điểm cần nhớ khi viết |
|---|---|---|
| P1 | Sinh viên / mua máy đầu tiên | Ngân sách 10–15tr, sợ mua phải máy dựng, bố mẹ can thiệp. Hỏi rất lâu ở J2–J3. |
| P2 | Nhân viên văn phòng | Cần chạy nhiều tab + Excel mượt, ngại rủi ro, ưu tiên máy business. |
| P3 | Game thủ | Quan tâm GPU/FPS — nhưng shop chưa có số đo → cấm bịa hiệu năng. |
| P4 | Đồ hoạ / kỹ thuật | Quan tâm RAM/VRAM theo phần mềm cụ thể. |
| P5 | Doanh nghiệp nhỏ mua theo lô | Nhảy thẳng J1 → J4. ⚠️ Chưa xác minh VAT / giá lô → chưa được hứa. |

### 2.2 Journey — J0..J7

```
J0 UNKNOWN → J1 AWARE → J2 INTERESTED → J3 CONSIDERING → J4 LEAD
   → J5 CUSTOMER → J6 REPEAT → J7 ADVOCATE
```

Luật: **không đẩy content J4/J5 cho người đang ở J0.** Họ chưa quan tâm máy nào,
họ đang quan tâm vấn đề của họ.

> Giả thuyết hiện tại của shop: nghẽn ở **J3 → J4** (khách so sánh xong thì ngại xuống tiền),
> vì bảo hành 6 tháng thấp hơn mặt bằng 9–12 tháng và shop chưa công bố quy trình test.
> Đây **là giả thuyết**, chưa có dữ liệu inbox xác nhận.

### 2.3 Objective — O1..O5 (trục quyết định cách CHẤM ĐIỂM bài)

| Mã | Mục tiêu | CTA hợp lệ | Chấm bằng |
|---|---|---|---|
| O1 Reach | Thêm người biết tới shop | Theo dõi trang, lưu bài, comment | reach, view, share |
| O2 Education | Khách hiểu đúng vấn đề | Lưu bài, comment tình huống | save, comment hỏi, thời gian xem |
| O3 Trust | Tin rằng mua đây không bị lừa | Ghé shop, hỏi bảo hành | save, profile visit, comment an tâm |
| O4 Consideration | Đưa shop vào danh sách chọn | Comment ngân sách, inbox tư vấn | comment có ngân sách, click, inbox |
| O5 Conversion | Ra inbox chất lượng / đơn | Inbox / gọi / ghé shop | qualified lead, đơn, doanh thu |

Baseline phân bổ: O1 20% · O2 25% · O3 20% · O4 20% · O5 15%.

**Đây là chỗ hay sai nhất:** chấm bài O1 bằng số inbox rồi kết luận "bài thất bại".
Sai đề. Mỗi bài chỉ được chấm bằng trục ứng với objective **đã khai báo trước khi đăng**.

### 2.4 Pillar — CP01..CP10

| Mã | Nội dung | Trạng thái |
|---|---|---|
| CP01 | Tư vấn mua theo ngân sách | ✅ |
| CP02 | Kiến thức laptop nói bằng đời thường | ✅ (cấm nêu số hiệu năng không nguồn) |
| CP03 | So sánh **dòng máy**, không so sánh shop | ✅ (⛔ cấm nêu tên đối thủ) |
| CP04 | Quy trình shop test máy cũ | 🔴 **ĐANG KHOÁ** — `UNVERIFIED.md` #7, #12 |
| CP05 | Review 1 máy cụ thể: hợp ai / **không** hợp ai | ✅ (bắt buộc còn hàng + giá check trong ngày) |
| CP06 | Chuyện khách hàng thật | 🔴 **ĐANG KHOÁ** — chưa có kho case thật |
| CP07 | Hậu trường cửa hàng | ✅ (lợi thế thật: có shop vật lý) |
| CP08 | Sai lầm khi mua máy cũ | ✅ (cấm hù doạ sai sự thật) |
| CP09 | Thị trường / công nghệ | ✅ (phải dẫn nguồn công khai + `verified_at`) |
| CP10 | Hàng đang có & ưu đãi | ✅ (chỉ khi tồn kho check trong ngày) |

> Hai pillar mạnh nhất của shop (CP04 chứng minh quy trình test, CP06 chuyện khách thật)
> **đang bị khoá vì thiếu fact**, không phải vì thiếu ý tưởng. Xem Phần 9.

### 2.5 Content Matrix — nơi 4 trục gặp nhau

`04_content/strategy/content-matrix.md` là bảng tra: Persona × Journey → pillar/objective/format nên dùng.
Ô nào đánh 🔒 (khoá vì thiếu fact) hoặc ✗ (không hợp) thì **không được xếp lịch**.

Một atom hợp lệ khi **cả 6 điều** đúng:

1. Đúng 1 persona · 2. Đúng 1 journey · 3. Đúng 1 objective · 4. Đúng 1 pillar
5. Ô tương ứng trong ma trận không bị ✗ / 🔒 · 6. Mọi fact trong `proof` truy được về file nguồn

Sai bất kỳ điều nào → **Gate 0 chặn**, chưa được viết một chữ nào.

---

## PHẦN 3 — Content Atom: đơn vị nhỏ nhất

Hệ thống **không làm việc với "bài viết"**. Nó làm việc với **atom** — một ý tưởng đã có chiến lược.
Không có atom → không sản xuất. Schema đầy đủ: `04_content/backlog/idea-schema.md`.

```yaml
id:         FB-IDEA-###        # duy nhất
product:    PRD-xxx | none
persona:    P1..P5             # đúng 1
journey:    J0..J7             # đúng 1
objective:  O1..O5             # đúng 1
pillar:     CP01..CP10         # đúng 1
problem:    >                  # nỗi đau, viết bằng LỜI KHÁCH NÓI
angle:      >                  # góc nhìn của bài — PHẢI KHÁC problem
hook:       >
format:     reels|post|carousel|story|comparison|product-review|customer-story
cta:        >                  # đúng 1 hành động
proof:      [ products.md#PRD-006, policies.md ]   # nơi lấy TỪNG con số
risk:       low|medium|high
priority:   số
status:     idea|approved|drafting|in-review|scheduled|published|archived|blocked
blocked_by: ...                # nếu blocked: thiếu fact nào
```

### Ba trường hay bị làm sai

**`problem` ≠ `angle`** — Gate 0 kiểm tra riêng điều này.
- problem: *"Có 6 triệu mà không biết mua máy nào."* → điều **khách đang nghĩ**
- angle: *"Không cần laptop mới để học CNTT."* → điều **bài muốn nói**

**`proof` không phải "nguồn tham khảo"** mà là địa chỉ chính xác của từng con số.
Có giá → phải có `products.md#PRD-xxx`. Có bảo hành → phải có `policies.md`.
Không truy được → `risk: high` hoặc `status: blocked`.

**`risk` quyết định ai phải ký Gate 6:**

| risk | Khi nào | Ai ký |
|---|---|---|
| low | Chỉ kiến thức chung, không giá, không cam kết | Người viết content |
| medium | Có gợi ý sản phẩm, có so sánh | Người viết content |
| high | **Có giá / tồn kho / cam kết / chuyện khách** | Người viết + **chủ shop hoặc phụ trách bán hàng** |

### Công thức priority

```
Priority = (Business Impact × Audience Relevance × Confidence) / Production Effort
```

| Yếu tố | Thang | Nghĩa |
|---|---|---|
| Business Impact | 1–5 | Gần doanh thu tới đâu |
| Audience Relevance | 1–5 | Có đúng persona đang ưu tiên tuần này không |
| Confidence | 0.1–1.0 | Tin bao nhiêu rằng nó chạy (có pattern đã học = cao) |
| Production Effort | 1–5 | 1 = viết 20 phút · 5 = phải quay video tại shop |

Ví dụ: `4 × 5 × 0.6 / 2 = 6.0`

> AI **không viết mọi ý tưởng**. Nó chọn ý tưởng priority cao nhất còn chỗ trong lịch tuần.

⚠️ Hiện priority đang tính bằng **ước lượng**, không phải dữ liệu bán hàng (`UNVERIFIED.md` #13).

### Vòng đời status

```
idea → approved → drafting → in-review → scheduled → published
                                 ↓
                             archived
  ↓
blocked   (thiếu fact — ghi blocked_by + thêm dòng vào UNVERIFIED.md)
```

---

## PHẦN 4 — Content Package: đầu ra chuẩn (12 thành phần)

Hệ thống **không trả về một caption**. Nó trả về một gói đủ để đăng và đo.
Một atom → một package. Spec: `04_content/content-package.md`.

| # | Thành phần | Bắt buộc | Nội dung |
|---|---|---|---|
| 1 | **Strategy** | ✅ | persona/journey/objective/pillar + vì sao ghép vậy |
| 2 | **Hook** | ✅ | 1 chính + **3 thay thế khác pattern nhau** (để A/B có nghĩa) |
| 3 | **Script** | reels/video | theo nhịp trong `formats/reels.md` |
| 4 | **Caption** | ✅ | bản sẵn sàng copy-paste |
| 5 | **Visual direction** | ✅ | cần chụp/quay gì, ở đâu, máy nào |
| 6 | **Thumbnail** | reels/video | chữ + hình |
| 7 | **CTA** | ✅ | **đúng 1**, hợp objective |
| 8 | **Hashtags** | ✅ | 3–6 tag |
| 9 | **First comment** | ✅ | link/địa chỉ/thông tin phụ — không nhét vào bài |
| 10 | **Sales follow-up** | O4, O5 | 5 câu khách hay hỏi + câu trả lời chỉ dùng fact đã xác minh |
| 11 | **Measurement plan** | ✅ | chỉ số nào quyết định thắng/thua, đo ở mốc nào |
| 12 | **Fact table** | ✅ | **mỗi claim ↔ file nguồn** |

Thiếu bất kỳ thành phần bắt buộc nào → **Gate 5 chặn**.
Claim không truy được nguồn → ghi `⚠️ NEEDS_VERIFICATION` ngay trong caption, không lặng lẽ để nguyên.

### Header bắt buộc của mọi file package

```yaml
id: FB-IDEA-002
product: PRD-006
persona: P1
journey: J3
objective: O4
pillar: CP01
format: post
risk: low
status: draft
created: 2026-09-09
gates: { g0: ⬜, g1: ⬜, g2: ⬜, g3: ⬜, g4: ⬜, g5: ⬜, g6: ⬜ }
```

Sau khi duyệt thêm: `approved_by`, `approved_at`.
Sau khi đăng thêm: `published_url`, `published_at`.

Đặt tên file: `05_campaigns/<chiến-dịch>/01-drafts/YYYY-MM-DD-<idea-id>-<slug>.md`
(bài lẻ không thuộc chiến dịch nào: `04_content/drafts/YYYY-MM-DD-<idea-id>-<slug>.md`)
→ ví dụ `2026-09-09-FB-IDEA-001-5-phut-kiem-tra.md`

### Fact table trông như thế nào

| Claim trong bài | Nguồn |
|---|---|
| 10.680.000đ | `products.md#PRD-006` (laptoptv.vn, verified **2026-09-20**, **check lại ngày đăng**) |
| Bảo hành 6 tháng main/màn/phím | `policies.md` |
| Vệ sinh, cài Win miễn phí trọn đời | `policies.md` |
| 71 Thiên Hiền, Mỹ Đình 1 | `company-facts.md` |

---

## PHẦN 5 — 7 GATE (điểm chặn — phần quan trọng nhất)

Gate chạy **theo thứ tự 0 → 6, không nhảy cóc**. Chi tiết: `10_gates/README.md`.

```
Atom  ──▶ ┌─────────────────┐
          │ G0 STRATEGY     │  Strategy Agent (03)   — chặn TRƯỚC khi tốn công viết
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ G1 FACT         │  Fact-check Agent (08) — mọi số truy được về nguồn
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ G2 COMMERCIAL   │  Fact-check Agent (08) — giá/stock/bảo hành khớp nguồn
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ G3 BRAND        │  Brand Agent (09)      — tone + định vị + tên đúng
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ G4 SAFETY/CLAIM │  Brand Agent (09)      — không claim gây hiểu nhầm
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ G5 QUALITY      │  Content Agent (06)    — đủ 12 thành phần, dùng được
          └────────┬────────┘
                   ▼
          ┌─────────────────┐
          │ G6 HUMAN        │  ⚠️ NGƯỜI KÝ — AI KHÔNG CÓ QUYỀN BỎ QUA
          └────────┬────────┘
                   ▼
              approved/ → đăng
```

### Gate 0 — Strategy Check *(chặn trước khi tốn công viết)*
- [ ] Đúng 1 persona (P1–P5) · 1 journey (J0–J7) · 1 objective (O1–O5) · 1 pillar (CP01–CP10)
- [ ] Ô tương ứng trong `content-matrix.md` **không** bị ✗ hoặc 🔒
- [ ] Nối ngược được lên một business goal (`content-strategy.md` mục 2)
- [ ] `problem` **khác** `angle`

### Gate 1 — Fact Check *(không có fact → không publish)*
- [ ] Mọi con số truy được về file nguồn
- [ ] Có bảng: mỗi claim ↔ file nguồn
- [ ] Không claim nào ở trạng thái đoán
- [ ] Claim chưa truy được → đã đánh dấu `⚠️ NEEDS_VERIFICATION`

### Gate 2 — Commercial Check *(giá / kho / bảo hành)*
- [ ] Giá khớp trang nguồn, kiểm tra **trong ngày đăng**
- [ ] Tồn kho kiểm tra **trong ngày đăng** — hết hàng thì không đăng bài bán
- [ ] **Không viết "còn hàng / còn X máy"** trừ khi máy đó có `stock_tracked=yes` và `qty>0`
      trong `02_products/catalog/catalog-<ngày>.csv` (chỉ **39/593** máy đạt điều kiện này)
- [ ] Bảo hành đọc theo **cột `warranty_tag` của đúng máy đó**, không mặc định 6 tháng —
      đã gặp máy cũ chỉ ghi **1 tháng** (2 máy Latitude 7480, nay hết hàng). Mặc định: cũ 6 tháng
      main/màn/phím + pin 3 tháng, mới 12 tháng
- [ ] Viết "giảm X%" thì phải có `compare_at > price` — **11 máy** trên web ghi giá gốc
      thấp hơn giá bán, viết giảm giá cho chúng là bịa
- [ ] `verified_at` không quá **7 ngày**, quá thì đã chạy `python3 tools/catalog_fetch.py`
- [ ] ⛔ **Máy không thuộc phân khúc dưới 5 triệu** — phân khúc này đã đóng 2026-09-09,
      máy rẻ nhất được viết bài là **6.880.000đ**
- [ ] Không hứa trả góp / freeship / COD / thời gian giao hàng chưa xác minh
- [ ] Thông số lấy theo **tên sản phẩm**, không lấy theo tag (tag web sai ở nhiều máy).
      Không dùng thông số đang mâu thuẫn — tag web lệch tên sản phẩm (6/36 máy dính lỗi này,
      xem `02_products/36-MAY-DUOC-VIET.md`). Tag cãi tên → bỏ thông số đó khỏi bài.

### Gate 3 — Brand Check *(đúng tone & định vị)*
- [ ] Tên đúng: **Laptop Thịnh Vượng** — TV = Thịnh Vượng, **không phải tivi**
- [ ] Giọng tư vấn thật, dễ hiểu, không phóng đại
- [ ] Nói bằng tình huống đời thực, không liệt kê thông số suông
- [ ] Định vị: minh bạch tình trạng + hậu mãi — **không phải "rẻ nhất"**
- [ ] Đúng ngôn ngữ của persona đã chọn · Đúng 1 CTA hợp objective

### Gate 4 — Safety / Claim Check *(claim gây hiểu nhầm)*
- [ ] Không xếp hạng: "số 1", "rẻ nhất", "uy tín nhất", "bảo hành dài nhất"
- [ ] Không "chính hãng" cho máy cũ → dùng "nguyên zin", "likenew"
- [ ] Không cam kết ngoài `policies.md`
- [ ] **Không nêu tên đối thủ**, không ám chỉ nơi khác bán máy kém
- [ ] Không khan hiếm giả: "chỉ hôm nay", "còn 1 máy cuối" khi không có fact
- [ ] Chuyện khách: **có thật + đã xin phép**

### Gate 5 — Content Quality *(gói có dùng được không)*
- [ ] Đủ 12 thành phần bắt buộc
- [ ] Hook **khớp** nội dung bài
- [ ] Có 3 hook thay thế, **khác pattern nhau**
- [ ] Thông số đã dịch thành lợi ích đời thực
- [ ] Có measurement plan
- [ ] Có 5 câu trả lời comment (với bài O4/O5)
- [ ] Tiếng Việt tự nhiên, không sáo rỗng

### Gate 6 — Human Approval *(bắt buộc, không uỷ quyền)*
- [ ] Người duyệt đã đọc **toàn bộ** bài, không chỉ lướt
- [ ] `risk: high` → **chủ shop hoặc người phụ trách bán hàng ký**
- [ ] Đã ghi `approved_by` + `approved_at` vào header

**AI không có quyền bỏ qua gate này. Không có chữ ký → không đăng.**

### Luật chung của gate

| | |
|---|---|
| **Thứ tự** | 0 → 6, không nhảy cóc |
| **Khi fail** | Trả về **đúng agent gây lỗi**, KHÔNG quay lại đầu dây chuyền |
| **Ghi lại** | Lý do fail giữ ở cuối file — đó là **dữ liệu học**, không được xoá |
| **Lỗi lặp** | Cùng một lỗi 3 lần → sửa vào **file luật** (template/format/prompt), không sửa từng bài |
| **Gấp** | Bận tới đâu cũng **không được bỏ Gate 1, 2, 4, 6** |

---

## PHẦN 6 — 12 Agent + Orchestrator

Mỗi agent có **một việc**, đọc **nguồn cố định**, xuất **định dạng cố định**.
Danh sách: `08_ai_agents/README.md`. Luật chạy: `08_ai_agents/orchestrator.md`.

```
                  ORCHESTRATOR  (luật chạy — không phải agent viết bài)
                       │
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
   STRATEGY        CREATION           QA
   01 Research     05 Hook            08 Fact-check  (Gate 1–2)
   02 Audience     06 Content         09 Brand       (Gate 3–4)
   03 Strategy     07 Visual
   04 Idea
       │               │               │
       └───────────────┼───────────────┘
                       ↓
                   HUMAN (Gate 6)
                       ↓
                 10 PUBLISHING
                       ↓
                 11 ANALYTICS
                       ↓
                 12 LEARNING
                       ↓
                → quay lại STRATEGY
```

### Thứ tự bắt buộc — mỗi agent có điều kiện chặn riêng

| Bước | Agent | **Không được chạy nếu** |
|---|---|---|
| 1 | 01 Research | — |
| 2 | 02 Audience | chưa có dữ liệu bước 1 |
| 3 | 03 Strategy | chưa chọn persona |
| 4 | 04 Idea | chưa có objective + pillar |
| 5 | 05 Hook | **atom chưa qua Gate 0** |
| 6 | 06 Content | chưa có hook được chọn |
| 7 | 07 Visual | chưa có script/caption |
| 8 | 08 Fact-check | **package chưa đủ 12 thành phần** |
| 9 | 09 Brand | **chưa qua Gate 1–2** |
| 10 | 10 Publishing | **chưa có chữ ký người duyệt (Gate 6)** |
| 11 | 11 Analytics | bài chưa đăng |
| 12 | 12 Learning | chưa đủ dữ liệu tối thiểu |

### Luật dừng — orchestrator dừng **toàn bộ** dây chuyền khi

- Thiếu fact bắt buộc → ghi `UNVERIFIED.md`, atom → `status: blocked`
- Sản phẩm **hết hàng** nhưng atom là O5 / CP10
- `verified_at` của giá **quá 7 ngày** mà chưa kiểm tra lại
- Gate nào fail → trả về **đúng agent gây lỗi**, không trả về đầu dây chuyền

### Luật chống lạm dụng

- ❌ Không chạy song song 12 agent để "cho nhanh" — sai một bước hỏng cả package
- ❌ Không để agent tự đánh giá công việc của chính nó (Content **không** tự fact-check)
- ❌ Không bỏ agent nào để tiết kiệm thời gian — bỏ Fact-check = đăng sai giá

### Chế độ rút gọn (khi cần bài gấp)

```
03 Strategy → 04 Idea → 06 Content → 08 Fact-check → 09 Brand → HUMAN
```
Bỏ 01, 02, 05, 07. **Không bao giờ** bỏ 08, 09 và Human.

### Ghi chú riêng — Hook Agent (05)

Hook **không được random**, phải chọn pattern có chủ đích:
Curiosity · Mistake · Contrarian · Comparison · Specific number · Story · Budget · Pain.
Output = 1 chính + 3 thay thế, **mỗi cái thuộc pattern khác nhau** (nếu 4 hook cùng pattern thì A/B vô nghĩa).
Cấm: "Sốc", "Rẻ nhất", "Số 1", "Chỉ hôm nay" (không có chương trình thật), "Số lượng có hạn" (chưa check kho).
**Không nêu giá ở hook** bài Facebook. Không dùng pattern Story nếu chưa có chuyện thật.

---

## PHẦN 7 — 7 Workflow

```
product-to-content → idea-to-content → content-approval → publishing
        ↑                                                      ↓
weekly-learning ←──────────────── analytics-loop ←─────────────┘
```

### 7.1 `daily-content.md` — nhịp trong ngày

| Giờ | Việc | Ai |
|---|---|---|
| **08:00** | DATA REFRESH: tồn kho + giá, câu hỏi khách hôm qua, số liệu bài hôm qua (`fb_fetch.py`), chiến dịch đang chạy | Người + script |
| **08:15** | MARKETING MANAGER AI (agent 01–03): hôm nay đẩy sản phẩm nào, persona nào ưu tiên, pillar nào đang thiếu, tuần trước bài nào thắng → **xuất 3–5 cơ hội đã xếp priority** | AI |
| **09:00** | **NGƯỜI DUYỆT CHIẾN LƯỢC** — chọn hôm nay làm ý tưởng nào. Duyệt chiến lược, **chưa duyệt câu chữ**. Sai ở đây thì mọi bước sau lãng phí. | Người |
| **09:15** | CONTENT AGENTS (04–07): atom → hook → caption/script → visual → **Content Package** vào `drafts/` | AI |
| **10:00** | GATES: agent 08 (G1–2), agent 09 (G3–4), cộng G0 và G5 | AI |
| **10:30** | **HUMAN APPROVAL (Gate 6)** — ký tên + ngày. `drafts/` → `approved/` | Người |
| Trong ngày | PUBLISH — agent 10 chuẩn bị, **người bấm đăng**. Check lại giá + kho ngay trước khi đăng. Trực comment 60 phút đầu | Người |
| Cuối ngày | METRICS — ghi số 24h vào `content-performance.md`. Ghi ca tư vấn đáng kể → nguyên liệu CP06 | Người |
| Sáng hôm sau | LEARNING — agent 12 cập nhật giả thuyết | AI |

### 7.2 `product-to-content.md` — từ 1 sản phẩm ra 20–50 góc

> **Sản phẩm không phải là content.** Một sản phẩm là nguyên liệu cho rất nhiều góc.

```
PRODUCT → PRODUCT FACTS → POSSIBLE CUSTOMER → CUSTOMER NEED → CONTENT ANGLES (20-50 atom)
```

Chuỗi **sai** hay gặp: `PRODUCT → BÀI VIẾT VỀ PRODUCT` → ra bài liệt kê thông số, không ai đọc.

Ví dụ với PRD-006 (Latitude 7400 2in1, 10.680.000đ):
```
i7-8665U · 16GB · SSD 512GB · 14" FHD cảm ứng · 10.680.000đ · BH 6 tháng · kho 44
  ↓ ai có thể mua: P1 (Sinh viên / mua máy đầu tiên) · P2 (Nhân viên văn phòng)
                   · P5 (Doanh nghiệp nhỏ mua theo lô)
  ↓ P1 nghĩ gì: "có hơn 10 triệu" · "sợ mua máy dựng" · "bố mẹ hỏi sao không mua mới"
  ↓ góc:
  - "10 triệu mua được máy như thế nào?"             CP01 · O4 · post
  - "Máy doanh nghiệp cũ khác máy phổ thông ở đâu?"  CP02 · O2 · reels
  - "Máy này hợp ai — và không hợp ai"               CP05 · O4 · review
  - "Sinh viên có nên mua máy 14 inch không?"        CP03 · O4 · comparison
```

Các bước: nạp facts → **check `stock`** (hết hàng = không làm content bán) → **check `verified_at`**
(quá 7 ngày = mở lại trang nguồn) → liệt kê persona → lấy nỗi đau → sinh atom → tính priority →
vào `ideas.md` → chọn atom cao nhất chạy tiếp.

**Sản phẩm mới:** chạy `python3 tools/catalog_fetch.py` → lấy dòng của máy đó trong
`02_products/catalog/catalog-<ngày>.csv` → ghi vào `products.md` kèm `source` + `verified_at`
→ **mới được** sinh atom.
Không viết bài từ thông tin chưa vào database.

### 7.3 `idea-to-content.md` — từ atom ra package

```
ATOM → [Gate 0] → HOOK (05) → SCRIPT/CAPTION (06) → VISUAL (07) → PACKAGE 12 phần
     → [Gate 1-5] → [Gate 6 người ký] → approved/
```

Đầu vào bắt buộc: atom phải đủ `persona`, `journey`, `objective`, `pillar`, `problem`, `angle`,
`format`, `cta`, `proof`. Thiếu bất kỳ trường nào → trả về agent 04, **không viết**.

Điểm dừng:
- Fact-check FAIL không sửa được bằng viết lại → atom `status: blocked` + `blocked_by`
- Hook không khớp nội dung → **sửa hook, không sửa sự thật cho khớp hook**

### 7.4 `content-approval.md` — đường đi của file

Bài thuộc một chiến dịch:

```
05_campaigns/<chiến-dịch>/01-drafts/     AI vừa tạo, chưa qua gate
      ↓  G0-G5 (AI chạy) + G6 (người ký)
05_campaigns/<chiến-dịch>/02-approved/   đã duyệt, chờ tới lịch
      ↓  đăng
05_campaigns/<chiến-dịch>/03-published/  đã đăng, có link bài thật
      ↓  số liệu
05_campaigns/<chiến-dịch>/05-ket-qua/    reach · tương tác · inbox · đơn
```

Bài lẻ, không thuộc chiến dịch nào: `04_content/drafts/` → `approved/` → `published/`.

Khi bị trả về:
1. Ghi **lý do fail** vào cuối file (giữ lại, **không xoá** — dữ liệu học)
2. Sửa đúng chỗ bị chỉ ra
3. Chạy lại **từ gate bị fail trở đi**, không phải từ đầu
4. Cùng lỗi 3 lần → sửa vào file luật

Cấm: đăng bài chưa có `g6: ✅` · người viết tự ký G6 cho bài `risk: high` của chính mình khi có giá/cam kết ·
sửa nội dung sau khi đã ký mà không ký lại.

### 7.5 `publishing.md` — checklist trước khi đăng

- [ ] Header có `g0`–`g6` đủ ✅ và `approved_by`
- [ ] **Giá** check lại trên trang nguồn **hôm nay**
- [ ] **Tồn kho** check lại **hôm nay**
- [ ] Ảnh/video là **máy thật của shop**, đúng máy trong bài
- [ ] Đúng 1 CTA hợp objective · First comment đã soạn · Hashtag 3–6
- [ ] 5 câu trả lời comment đã sẵn · **Biết ai trực comment 60 phút đầu**

**60 phút đầu** là lúc bài được phân phối mạnh nhất:
- Trả lời mọi comment
- Hỏi giá/kho → trả lời bằng fact đã kiểm tra **hôm nay**, không áng chừng
- Hỏi cái chưa xác minh (trả góp, COD, quà tặng) → **không hứa**, nói sẽ kiểm tra và báo lại,
  rồi **thêm dòng vào `UNVERIFIED.md`**
- **Không xoá comment tiêu cực** nếu không vi phạm — trả lời tử tế là nội dung tin cậy tốt nhất

Sau khi đăng: `approved/` → `published/` + thêm `published_url`, `published_at`
→ thêm dòng vào `content-performance.md` → atom `status: published`.

Cấm: đăng bài có giá mà chưa check trang nguồn trong ngày · đăng dồn nhiều bài một buổi để bù lịch ·
sửa nội dung sau khi đăng mà không ghi lại.

### 7.6 `analytics-loop.md` — nhịp đo

| Mốc | Đo gì |
|---|---|
| **24h** | reach, view, engagement — bài có được phân phối không |
| **72h** | inbox, lead — bài có kéo người thật không |
| **7 ngày** | đơn, doanh thu, save/share dài hạn |

Đọc kết quả:

| Hiện tượng | Nghĩa là | Việc cần làm |
|---|---|---|
| Reach thấp | Hook/format không giữ được người | Thử hook khác |
| Reach cao, engagement thấp | Hook hay nhưng nội dung không đáp ứng | Sửa thân bài |
| Engagement cao, inbox thấp | CTA sai hoặc bài không dẫn tới hành động | Thử CTA khác |
| Inbox nhiều, qualified thấp | **Kéo sai người** | Xem lại persona / ngôn ngữ |
| Qualified cao, đơn thấp | Nghẽn ở **khâu tư vấn**, không phải content | `06_sales/sales-process.md` |

Cấm: điền số áng chừng · **đổi objective của bài sau khi thấy kết quả** · kết luận từ 1 bài.

### 7.7 `weekly-learning.md` — biến dữ liệu thành thay đổi

8 bước: (1) Kiểm kê theo pillar/objective/persona → (2) Điền bảng funnel, bậc nào rơi nhiều nhất
là việc tuần sau → (3) Top 3 / Bottom 3 chấm theo **đúng trục objective của từng bài**, tách ra
hook · chủ đề · persona · format · góc · CTA · độ dài · khung giờ → (4) Tìm pattern →
(5) Cập nhật thí nghiệm → (6) Cập nhật chiến lược → (7) Fact còn thiếu đang khoá gì →
(8) Ba việc tuần sau.

**Ngưỡng ghi pattern:** dưới 10 bài trong tuần → **chỉ được ghi giả thuyết**, không ghi pattern.

Cấm: kết luận đẹp để báo cáo nghe hay · bỏ qua bài thua (**bài thua là dữ liệu học quan trọng nhất**) ·
đổi chiến lược vì một bài viral.

---

## PHẦN 8 — Đo và Học

### 8.1 Funnel

```
Reach → Video View → Engagement → Profile Visit → Messenger
      → Qualified Lead → Consultation → Order → Revenue
```
Mỗi bậc rơi bao nhiêu % → biết phễu hở ở đâu.

### 8.2 Content Score — 4 trục, **không cộng thành 1 số**

Cộng tất cả thành một điểm sẽ **giấu mất** việc bài đó đang làm tốt việc gì.

| Trục | Tính từ | Chấm bài nào |
|---|---|---|
| **Awareness Score** | reach, view, share, follow mới | O1 |
| **Trust Score** | save, comment an tâm, profile visit | O3 |
| **Consideration Score** | comment nêu ngân sách/nhu cầu, click, inbox hỏi máy | O2, O4 |
| **Conversion Score** | qualified lead, đơn, doanh thu | O5 |

Ví dụ đọc kết quả:
```
Reel A:  Awareness 92 · Trust 71 · Consideration 48 · Conversion 12
```
→ Reel A **không thất bại**. Nó là bài O1 và đang làm đúng việc của nó.
Chấm nó bằng Conversion Score là **chấm sai đề**.

### 8.3 Chỉ số hiệu quả (quan trọng hơn chỉ số thô)

| Chỉ số | Công thức | Trả lời câu hỏi |
|---|---|---|
| Lead / 1.000 reach | lead ÷ reach × 1000 | Content này có kéo người thật không? |
| Revenue / 1.000 reach | doanh thu ÷ reach × 1000 | Reach của content này đáng bao nhiêu tiền? |
| Qualified rate | qualified lead ÷ inbox | Kéo đúng người hay kéo người hỏi cho vui? |

### 8.4 Learning loop

```
Content → Metrics → Analysis → Hypothesis → Experiment → Result → Update strategy
```

- Pattern có bằng chứng → `07_analytics/learned-patterns.md` (mã `LP-###`)
- Linh cảm chưa chứng minh → `04_content/backlog/experiments.md`
- Chiến lược đổi → `04_content/strategy/`

**Ngưỡng confidence:**

| Mức | Điều kiện | Được làm gì |
|---|---|---|
| low | 1–2 bài, chưa lặp lại | Chỉ tham khảo, **không đổi kế hoạch** |
| medium | ≥3 bài cùng chiều, hoặc 1 thí nghiệm hoàn tất | **Được** đổi phân bổ content |
| high | ≥2 thí nghiệm độc lập cùng kết luận, hoặc ≥8 bài cùng chiều | Được đổi chiến lược |

Chỉ pattern **medium trở lên** mới được dùng để đổi: phân bổ pillar · ma trận ·
công thức hook · lịch đăng. Mỗi lần đổi phải ghi **vì sao** và **pattern nào làm căn cứ**.

Luật khác: pattern phải nêu **điều kiện áp dụng** (không phải "hook hay thì chạy tốt") ·
tới `expires` mà không kiểm tra lại thì **tự hạ một bậc confidence** ·
pattern mâu thuẫn thì **không xoá cái cũ**, giữ cả hai và chạy thí nghiệm phân xử ·
pattern học từ 1 bài viral **luôn** là `low` (viral thường là may, không phải quy luật).

### 8.5 Nguồn dữ liệu — và giới hạn phải nói thẳng

| Nguồn | Lấy bằng | Trạng thái |
|---|---|---|
| Facebook Page Insights | `tools/fb_fetch.py` (Graph API, quyền chỉ-đọc) | ✅ có script |
| Messenger / inbox | ghi tay | ⚠️ chưa có quy trình |
| Đơn hàng, doanh thu | chủ shop xuất | 🔴 **chưa có** (`UNVERIFIED.md` #13) |

> **Chưa nối được doanh thu về từng bài.** Vì vậy mọi kết luận "bài này tạo ra tiền"
> hiện là **suy đoán**. Gỡ bằng: hỏi khách "biết shop qua đâu" khi inbox + có file đơn hàng.

Cách lấy token Facebook: `tools/README.md` (Graph API Explorer → 3 quyền
`pages_show_list`, `pages_read_engagement`, `read_insights`).
**Không commit token vào git.**

---

## PHẦN 9 — Cái gì đang bị KHOÁ (và vì sao)

Đây là phần quan trọng nhất về mặt vận hành hiện tại:
**hệ thống đã sẵn sàng, thứ đang thiếu là fact.**

| Đang khoá | Vì thiếu | Ai gỡ được |
|---|---|---|
| **Pillar CP04** (quy trình test máy) | `UNVERIFIED.md` #7, #12 — chưa có quy trình test đã xác minh | Kỹ thuật |
| **Pillar CP06** (chuyện khách hàng) | Chưa có kho case thật | Người bán ghi lại ca tư vấn hằng ngày |
| **FB-IDEA-101** (priority **9.0** — cao nhất backlog) | Như CP04 | Kỹ thuật |
| **FB-IDEA-102** (priority 7.0) | Như CP06 | Người bán |
| **FB-IDEA-103** (priority 6.5, bán từ xa) | #3, #4, #10 — chưa rõ ship COD, phí ship, cho test trước khi trả tiền | Chủ shop |
| **Ô 🔒 trong content-matrix** | CP04 mọi persona | Kỹ thuật |
| **Content cho P5** | Chưa rõ VAT / giá theo lô | Chủ shop |
| **Priority tính bằng số thật** | #13 — không có file đơn hàng nào trong repo | Chủ shop |

### 4 mục 🔴 GẤP (đến từ phân tích đối thủ)

| # | Câu hỏi | Vì sao gấp |
|---|---|---|
| 9 | Có tặng kèm gì khi mua máy không? | Đối thủ tặng trọn bộ 4 món — đang thiệt với khách sinh viên |
| 10 | Có cho cọc + test máy khi nhận COD không? | Đối thủ cho cọc 200k test rồi trả nốt — không có tương đương = mất khách ngoài Hà Nội |
| 11 | Có thể nâng bảo hành lên 9–12 tháng cho dòng đã test kỹ? | Đối thủ 9–12 tháng, ta 6 tháng — **điểm yếu lớn nhất khi khách so sánh** |
| 12 | Quy trình test gồm bước nào, quay video được không? | **Góc content mạnh nhất: chứng minh thay vì tuyên bố** |

Trả lời được 4 câu này là mở khoá 5 góc content mạnh nhất + 2 pillar.

### Lỗi dữ liệu đang treo

- **PRD-001 (E7440) ĐÃ BỊ GỠ KHỎI WEBSITE** (quét toàn bộ 593 SP ngày 2026-09-09, không còn kết quả).
  → không viết bài, không nhắc tên máy. `UNVERIFIED.md` #16.
- **PRD-003 (5470)**: RAM **chốt = DDR4 2133** ✅ theo sổ tay Dell (E5470 **không có** tuỳ chọn DDR3).
  Kết luận "DDR3" trước đó **đã bị đảo** — hai "nguồn" trên trang SP thật ra là một (mô tả copy-paste).
  Nhưng **màn HD hay FHD thì web không bao giờ trả lời được**: Dell bán E5470 với cả panel
  HD 1366×768 lẫn FHD 1920×1080 → phải bật máy thật mới biết.
  → ⛔ **chỉ được viết "màn 14 inch"**, không đưa "FHD" vào bài. `UNVERIFIED.md` #15.
- **Phần mô tả sản phẩm không dùng để lấy con số.** Đo trên cả 593 SP: 105 máy (17%) dùng chung khối
  mô tả với máy khác → **31 máy (5,2%) có mô tả mâu thuẫn với chính tên máy** (12 sai CPU, 15 sai RAM,
  5 tên FHD/mô tả HD, 3 tự mâu thuẫn HD-FHD). Danh sách: `02_products/catalog/loi-mo-ta-2026-09-09.csv`.
  ⛔ Mô tả chỉ dùng lấy ý, **không làm nguồn fact**. `UNVERIFIED.md` #22.
- **12 máy nền tảng DDR4 bị gắn tag RAM `DDR3`** → không viết loại RAM theo tag. `UNVERIFIED.md` #23.
- **Tồn kho không đáng tin**: 554/593 máy không bật quản lý kho → web luôn hiện "còn hàng".
  ⛔ Không được nói về số lượng cho những máy này. `UNVERIFIED.md` #19.
- ✅ **ĐÃ ĐÓNG — 2 máy Latitude 7480 bảo hành 1 tháng**: chủ shop xác nhận **hết hàng** (2026-09-09),
  và **đóng luôn phân khúc dưới 5 triệu**. Không viết bài bán nhóm này nữa. `UNVERIFIED.md` #16, #17.
  Bài học giữ lại: **bảo hành máy cũ không luôn là 6 tháng** — phải đọc `warranty_tag` từng máy.
- **11 máy có giá gốc thấp hơn giá bán** → cấm viết "giảm giá" cho chúng. `UNVERIFIED.md` #18.
- **Tag cấu hình & tình trạng sai lệch** ở nhiều máy → lấy thông số theo tên SP. `UNVERIFIED.md` #20, #21.
- **Thời lượng pin thực tế**: chưa đo → P1 coi "pin đi cả buổi" là tiêu chí mua nhưng **chưa được phép hứa**. #14.

---

## PHẦN 10 — Đi hết một bài từ đầu đến cuối (ví dụ có thật)

> ⛔ **LƯU Ý — cập nhật 2026-09-20: ví dụ này là BÀI HỌC LỊCH SỬ, không phải bài chạy được.**
> `FB-IDEA-002` dựng trên **PRD-002 (Latitude 7270, 4.290.000đ) — PRD này đã bị gỡ khỏi
> `products.md`** vì máy nằm ngoài **danh sách 36 máy** (luật #20, `02_products/36-MAY-DUOC-VIET.md`).
> Giữ nguyên ví dụ vì nó dạy đúng **quy trình 14 bước** và ở bước ⑧ cho thấy hệ thống chặn
> bài như thế nào — nay lý do chặn mạnh hơn: máy **không có tồn kho xác thực**.
>
> 👉 Muốn chạy thật quy trình này, thay nguyên liệu bằng máy "hero" **PRD-006 —
> Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB · 14" FHD cảm ứng · 10.680.000đ ·
> BH 6 tháng · kho 44 chiếc**. Persona: **P1 (Sinh viên / mua máy đầu tiên)** và
> **P2 (Nhân viên văn phòng)** tầm 10–11 triệu. Phiên bản FB-IDEA-002 đã cập nhật sẵn
> trong `04_content/backlog/ideas.md`.

Lấy `FB-IDEA-002` trong `04_content/backlog/ideas.md`.

**① Nguyên liệu** — `products.md#PRD-002`: Dell Latitude 7270, i5-6300U, 8GB, SSD 256GB,
12.5" HD, **4.290.000đ**, BH 6 tháng, `verified_at: 2026-09-09`.
⚠️ **Tồn kho KHÔNG xác định** (máy này không bật quản lý kho) → bài không được nói "còn hàng",
phải gọi shop xác nhận trước khi đăng. Loại RAM chỉ có trong tag (DDR4), tên SP không ghi
→ **không đưa "DDR4" vào bài**.

**② Atom**
```yaml
id: FB-IDEA-002 · product: PRD-002
persona: P1 · journey: J3 · objective: O4 · pillar: CP01 · format: post
problem: "Có khoảng 4-5 triệu, không biết tầm tiền đó mua được máy như thế nào."
angle:   "Tầm 4-5 triệu vẫn mua được máy business mỏng nhẹ, đổi lại là máy nhỏ và đời cũ hơn."
cta:     "Comment ngân sách + ngành học, mình gợi ý máy phù hợp."
proof:   [products.md#PRD-002, policies.md]
risk: high · priority: 5.0
```

**③ Gate 0** — P1 × J3 tra `content-matrix.md` → ô "CP01 tư vấn ngân sách · O4" ✅ hợp lệ, không 🔒.
`problem` ≠ `angle` ✅. Objective O4 × format post → ✅ trong ma trận mục 2. **QUA.**

**④ Hook (agent 05)** — chính: *"Có 4 triệu rưỡi, mua được laptop như thế nào?"* (pattern **Budget**).
3 thay thế phải khác pattern: Contrarian / Comparison / Mistake. **Không nêu giá ở hook.**

**⑤ Caption (agent 06)** — theo `templates/facebook.md`, ngôn ngữ P1,
dịch thông số thành đời thực: "12.5 inch" → "bỏ vừa balo, mang đi học cả ngày không nặng vai".
Đúng 1 CTA. Không hứa trả góp (chưa xác minh).

**⑥ Visual (agent 07)** — chụp máy thật tại 71 Thiên Hiền, có cảnh cầm tay để thấy độ mỏng.

**⑦ Package** — đủ 12 thành phần, lưu vào `01-drafts/` của chiến dịch,
ví dụ `05_campaigns/<chiến-dịch>/01-drafts/2026-09-09-FB-IDEA-002-4-trieu-ruoi.md`
với header `gates: { g0: ✅, g1: ⬜, ... }`.

**⑧ Gate 1–2 (agent 08)** — ⛔ **BÀI BỊ CHẶN Ở ĐÂY (từ 2026-09-09).**
- 4.290.000đ ↔ `products.md#PRD-002` ✅ (giá đúng)
- BH 6 tháng ↔ `warranty_tag` ✅
- `verified_at 2026-09-09` ✅ — quá 7 ngày thì chạy `python3 tools/catalog_fetch.py`
- tồn kho `stock_tracked=no` → ⚠️ không được nói "còn hàng"
- ⛔ **Máy không có tên trong `02_products/36-MAY-DUOC-VIET.md` → KHÔNG ĐĂNG (luật #20).**

> 💡 **Đây chính là điểm hay của hệ thống gate**: bài đã đi qua 7 bước, viết xong, hook xong —
> nhưng một quyết định kinh doanh ở tầng fact vẫn chặn được nó trước khi ra khách.
> Nếu không có Gate 2 thì bài này đã đăng và shop phải trả lời khách về máy không bán nữa.

**⑨ Gate 3–4 (agent 09)** — tên "Laptop Thịnh Vượng" ✅ · không "rẻ nhất"/"chính hãng" ✅ ·
không nêu tên đối thủ ✅ · không khan hiếm giả ✅.

**⑩ Gate 5** — đủ 12 phần, hook khớp bài, 3 hook khác pattern, có measurement plan,
có 5 câu trả lời comment (bắt buộc vì O4).

**⑪ Gate 6** — `risk: high` (có giá) → **chủ shop hoặc phụ trách bán hàng ký**.
Ghi `approved_by` + `approved_at`. File → `02-approved/` của chiến dịch
(bài lẻ: `04_content/approved/`).

**⑫ Đăng** — người bấm đăng. Check lại giá + kho ngay trước khi đăng. Đăng first comment.
Trực comment 60 phút. File → `published/` + `published_url`.

**⑬ Đo** — 24h reach/engagement · 72h inbox/lead · 7d đơn.
Chấm bằng **Consideration Score** (vì O4), **không** chấm bằng Conversion.

**⑭ Học** — ghi vào `content-performance.md`. Cuối tuần vào Top3/Bottom3.
Nếu ≥3 bài cùng chiều → viết `LP-###` confidence `medium` → mới được đổi phân bổ pillar.

---

## PHẦN 11 — Bảng cấm (gộp từ mọi file)

### Về fact
- ❌ Bịa giá, cấu hình, tồn kho, thời gian giao hàng
- ❌ Dùng số "tham khảo" khi không có nguồn
- ❌ Viết bài bán cho sản phẩm **hết hàng**
- ❌ Viết bài bán cho **phân khúc dưới 5 triệu** — đóng từ 2026-09-09, máy rẻ nhất được
  viết là **6.880.000đ**. (Tư vấn inbox/comment cho khách hỏi máy 4 triệu thì **vẫn làm**)
- ❌ Tin dữ liệu web khi **chủ shop đã nói khác** — lời chủ shop thắng, xem `products.md` mục 0
- ❌ Đăng bài có giá mà chưa check trang nguồn **trong ngày**
- ❌ Dùng `16_research/` làm nguồn fact (đó là tài liệu tham khảo)

### Về chính sách
- ❌ "Bảo hành 12 tháng" cho máy cũ → đúng là **6 tháng**, pin **3 tháng**
- ❌ "1 đổi 1 trong 30 ngày", "hoàn tiền 100%" — sai chính sách
- ❌ Hứa trả góp / freeship / COD — **chưa xác minh**
- ❌ Cam kết bảo hành rơi vỡ / vào nước

### Về brand
- ❌ Viết sai tên: **TV = Thịnh Vượng**, không phải tivi
- ❌ "Chính hãng" cho máy cũ → "nguyên zin" / "likenew"
- ❌ Xếp hạng: "rẻ nhất", "số 1", "uy tín nhất Hà Nội", "bảo hành dài nhất"
- ❌ **Nêu tên đối thủ** hoặc ám chỉ nơi khác bán máy kém
- ❌ "Sốc", "Chỉ hôm nay", "Còn 1 máy cuối" khi không có fact
- ❌ Dựng khách ảo · dùng ảnh khách chưa xin phép

### Về quy trình
- ❌ AI tự đăng content thương mại
- ❌ Đăng bài chưa có `g6: ✅`
- ❌ Người viết tự ký Gate 6 cho bài `risk: high` của chính mình khi có giá/cam kết
- ❌ Sửa nội dung sau khi ký duyệt mà không ký lại
- ❌ Nhảy cóc gate · chạy song song 12 agent · để agent tự chấm bài của chính nó
- ❌ Sửa sự thật cho khớp hook (phải sửa hook)

### Về đo & học
- ❌ Điền số áng chừng
- ❌ **Đổi objective của bài sau khi thấy kết quả**
- ❌ Chấm bài bằng trục không phải objective của nó
- ❌ Kết luận từ 1 bài · đổi chiến lược vì 1 bài viral
- ❌ Ghi pattern khi tuần đó dưới 10 bài (chỉ được ghi giả thuyết)
- ❌ Bỏ qua bài thua

---

## PHẦN 12 — Dùng hằng ngày: tra nhanh

| Muốn làm gì | Làm sao |
|---|---|
| **Viết một bài** | Gõ `/viet-bai` → trả lời: sản phẩm + persona + objective + format |
| **Lập kế hoạch tuần** | `12_prompts/facebook/strategy/weekly-plan.md` |
| **Từ 1 sản phẩm tìm nhiều góc** | `12_prompts/facebook/idea/product-to-angles.md` + `09_workflows/product-to-content.md` |
| **Thêm sản phẩm mới** | `python3 tools/catalog_fetch.py` → lấy dòng trong catalog CSV → ghi vào `02_products/products.md` kèm `source` + `verified_at` → **rồi mới** sinh atom |
| **Thiếu thông tin** | Thêm dòng vào `01_company/facts/UNVERIFIED.md` — **đừng đoán** |
| **Kéo số liệu Facebook** | `export FB_PAGE_TOKEN=...` → `python3 tools/fb_fetch.py` (xem `tools/README.md`) |
| **Rút pattern cuối tuần** | `09_workflows/weekly-learning.md` → xuất `07_analytics/reports/YYYY-Www.md` |
| **Trước khi đăng** | Tick đủ `10_gates/README.md` + checklist `09_workflows/publishing.md` |

### `/viet-bai` chạy 6 bước

1. **Nạp knowledge base** — company-facts · policies · brand · tone · products · personas ·
   objectives · pillars · journey · format · template · competitors
2. **Xác định input** — sản phẩm? persona? objective? format? → tự suy pillar + journey → **tự chạy Gate 0**
3. **Fact-check bắt buộc TRƯỚC khi viết** — mỗi con số: *nằm ở file nào?*
4. **Viết** theo template, dịch thông số thành lợi ích đời thực, đúng 1 persona, đúng 1 CTA
5. **Xuất Content Package** 12 thành phần (không phải mỗi caption)
6. **Lưu** vào `01-drafts/` của chiến dịch (bài lẻ: `04_content/drafts/`) với header đầy đủ

Nếu người dùng đưa link sản phẩm laptoptv.vn → WebFetch lấy cấu hình + giá →
**ghi vào `products.md` kèm source + verified_at trước khi viết**.

Ý tưởng mới nảy ra trong lúc viết → **thêm atom vào `ideas.md`**, đừng bỏ phí.

---

## PHẦN 13 — Trạng thái & lộ trình

| Phase | Nội dung | Trạng thái |
|---|---|---|
| 1 | Knowledge base + skill `/viet-bai` | ✅ |
| 2 | Tầng chiến lược, format library, backlog, 7 gates, 12 agent | ✅ **cấu trúc xong, chưa chạy thật** |
| 3 | Content Factory | ⬜ |
| 4 | Planner | ⬜ |
| 5 | Analytics nối doanh thu | ⬜ |
| 6 | Learning Engine | ⬜ |
| 7 | AI Marketing Manager | ⬜ |

**Nút thắt hiện tại không phải công nghệ mà là fact.**
`learned-patterns.md` đang trống (chưa có dữ liệu), `content-performance.md` chưa có số thật,
không có file đơn hàng. Nghĩa là:
- Tầng 8 (Học) **chưa chạy được** → Tầng 2 (Chiến lược) vẫn đang dùng baseline ước lượng
- Priority của backlog là **ước lượng**, không phải dữ liệu

Việc gấp nhất, theo đúng thứ tự đòn bẩy:
1. Trả lời 4 mục 🔴 GẤP (`UNVERIFIED.md` #9–12) → mở khoá CP04 + FB-IDEA-101 (priority 9.0)
2. Bắt đầu **ghi lại ca tư vấn hằng ngày** → mở khoá CP06 + FB-IDEA-102
3. Có **file đơn hàng** + hỏi khách "biết shop qua đâu" → mở khoá cả tầng Analytics và Learning

---

## Phụ lục — Bản đồ file

| Cần gì | Mở file |
|---|---|
| Luật tổng | `CLAUDE.md` · `README.md` · **file này** |
| Fact công ty / chính sách | `01_company/facts/company-facts.md` · `policies.md` |
| Chưa xác minh | `01_company/facts/UNVERIFIED.md` |
| Định vị & cấm nói | `01_company/brand/brand.md` · `tone-of-voice.md` |
| Sản phẩm | `02_products/products.md` (schema: `product-schema.md`) |
| Persona | `03_customers/personas.md` |
| 4 trục | `04_content/strategy/` (objectives · pillars · journey · content-matrix) |
| Đầu ra chuẩn | `04_content/content-package.md` |
| Atom schema | `04_content/backlog/idea-schema.md` · dữ liệu: `ideas.md` |
| Format & template | `04_content/formats/` · `04_content/templates/` |
| Chiến dịch | `05_campaigns/INDEX.md` (chỉ mục) · `campaign-template.md` (mở mới) |
| Vòng đời bài | `05_campaigns/<chiến-dịch>/01-drafts/` → `02-approved/` → `03-published/` → `05-ket-qua/` |
| Vòng đời bài lẻ | `04_content/drafts/` → `approved/` → `published/` |
| Đo | `07_analytics/metrics.md` · `content-performance.md` · `reports/` |
| Học | `07_analytics/learned-patterns.md` · `04_content/backlog/experiments.md` |
| Agent | `08_ai_agents/README.md` · `orchestrator.md` |
| Quy trình | `09_workflows/` (7 file) |
| Gate | `10_gates/README.md` |
| Prompt | `12_prompts/` · `12_prompts/facebook/` |
| Bài mẫu | `13_examples/` |
| Đối thủ | `15_competitors/competitors.md` |
| Script FB | `tools/README.md` |
