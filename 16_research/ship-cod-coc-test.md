# Nghiên cứu: Chính sách ship / COD / cọc test máy

> **Mục đích:** gỡ khoá backlog P0 "Chính sách ship/COD/cọc test (#3, #4, #10)"
> → mở khoá `FB-IDEA-103` (priority 6.5, bán từ xa) và toàn bộ nhóm khách ngoài Hà Nội.
> **Ngày nghiên cứu:** 2026-09-09
> ⚠️ **Đây là tài liệu nghiên cứu, KHÔNG phải nguồn fact.** Không trích số liệu ở đây vào bài đăng.
> Chỉ phần "Đã có fact" (mục 1) là được dùng, vì nó đến từ `policies.md`.

---

## 1. Ta ĐÃ có gì (fact đã xác minh — được viết ngay)

Nguồn: `01_company/facts/policies.md`, verified 2026-09-09.

| Fact | Nội dung | Dùng được? |
|---|---|---|
| Phạm vi giao | Toàn quốc | ✅ |
| Thời gian | 3–5 ngày làm việc (ước tính theo khoảng cách 5–7 ngày) | ✅ |
| Số lần giao | Tối đa 2 lần; giao hụt → liên lạc lại trong 2 ngày làm việc | ✅ |
| Kiểm tra khi nhận | Khách được "kiểm tra nếu sản phẩm có bất kỳ lỗi hay khiếm khuyết nào" | ⚠️ mơ hồ — xem mục 3 |
| COD | Có, **nhưng chỉ ở "khu vực hỗ trợ giao nhận miễn phí"** (nguyên văn trang thanh toán) | ⚠️ chưa định nghĩa khu vực |
| Chuyển khoản | BIDV CN Thăng Long, STK 22010000673371, chủ TK là công ty | ✅ |
| Đổi trả | 15 ngày. Máy lỗi → đổi miễn phí; hoàn tiền khấu trừ 10%. Đổi ý → hoàn tiền khấu trừ 20% | ✅ |
| Phí ship | ❌ Không có con số. Web chỉ ghi "mức phí theo chi phí đã ký với bên đối tác" | ❌ |
| Freeship | ❌ Có nhắc "khu vực hỗ trợ giao hàng miễn phí" nhưng **không định nghĩa khu vực nào** | ❌ |
| Đặt cọc | ❌ Không nêu ở bất kỳ trang nào | ❌ |

---

## 2. Đối thủ đang làm gì

| Shop | Chính sách bán từ xa |
|---|---|
| **LaptopMD** | Nguyên văn: *"Shop có ship COD toàn quốc, khách hàng cọc trước 200k nhận hàng được bật nguồn KT máy rồi thanh toán nốt"* |
| Mặt bằng thị trường laptop cũ | Mô hình cọc là **chuẩn ngành** cho bán từ xa. Mức cọc phổ biến **200k–300k**, tỷ lệ thuận giá máy + phí ship |
| **Thịnh Vượng** | Chưa có gì tương đương được công bố |

**Kết luận:** đây không phải "sáng kiến của đối thủ", đây là **điều kiện tối thiểu để chơi**
ở kênh bán từ xa. Không có nó thì không phải là ta yếu hơn — là ta **không có mặt** ở phân khúc đó.

---

## 3. 🔴 Phát hiện quan trọng nhất — "cho kiểm tra" ≠ "cho test máy"

Đây là thứ làm thay đổi cách trả lời câu hỏi #4 và #10.

**Quy định đồng kiểm của các đơn vị vận chuyển (GHTK, GHN):**

| Điểm | Nội dung |
|---|---|
| Ai quyết định | **Người bán.** Shop phải bấm chọn dịch vụ đồng kiểm khi tạo đơn. Không chọn → shipper không cho khách mở gói |
| Khách được làm | Mở gói, kiểm **số lượng, màu sắc, ngoại hình**, đối chiếu với đơn, từ chối nhận nếu sai/hỏng, quay video |
| Khách **KHÔNG** được làm | Mở seal/tem niêm phong của sản phẩm; **dùng thử sản phẩm** — trừ khi người bán bật thêm dịch vụ riêng "Xem hàng / Thử hàng" |
| Hàng điện tử | Được xem ngoại hình (xước, nứt, seal). **Không** được cắm điện, cài phần mềm, dùng thử — trừ khi vận đơn có ghi chú riêng |
| Đơn COD ≥ 2 triệu | GHN **bắt buộc** khách phối hợp đồng kiểm. → **Mọi đơn laptop của ta đều rơi vào diện này** |
| Laptop = hàng cấm bay | Chỉ đi **đường bộ**, chậm hơn 3–5 ngày so với hàng thường |

### Ba hệ quả

**(1) Câu chữ trên web đang mơ hồ ở mức nguy hiểm.**
"Khách được kiểm tra nếu sản phẩm có bất kỳ lỗi hay khiếm khuyết nào" — khách tỉnh đọc câu này
sẽ hiểu là *được bật máy lên soi*. Nhưng shipper chỉ cho xem vỏ hộp. Khoảng cách giữa hai cách
hiểu này chính là **chỗ phát sinh tranh chấp và bóc phốt**.

**(2) Cọc 200k của đối thủ không phải phép màu vận chuyển.**
Không có đơn vị vận chuyển nào đảm bảo "bật nguồn kiểm tra máy" như một dịch vụ mặc định —
shipper không đợi 10 phút để khách boot máy soi điểm chết. Lời hứa đó thực chất được chống lưng
bằng **chính sách đổi trả của shop**, không phải bằng shipper. Nói cách khác: **ta có thể hứa
điều tương đương mà không cần đàm phán gì với đơn vị vận chuyển** — chỉ cần chủ shop chấp nhận
rủi ro hoàn hàng.

**(3) Lợi thế thật của ta không nằm ở lúc nhận hàng — nằm ở 15 ngày sau đó.**
"Bật máy test 10 phút trước mặt shipper" là một bài test **tệ**: không soi được chai pin,
không soi được nhiệt độ khi tải nặng, không soi được máy có tự sập sau 2 tiếng không.
**15 ngày đổi trả** thì soi được tất cả. Ta đang có vũ khí mạnh hơn của đối thủ mà **page
chưa từng nói tới**.

---

## 4. ⚠️ Nhưng 15 ngày của ta có một lỗ hổng với khách tỉnh

Chính sách hiện tại: máy **có lỗi**, nếu khách trả lại lấy tiền → **khấu trừ 10%**.

Với khách Hà Nội thì hiếm khi dùng tới (họ đổi máy khác). Với khách tỉnh, tình huống thực tế là:

> Khách Nghệ An mua máy 5.000.000đ. Về dùng 3 ngày phát hiện máy lỗi. Muốn trả lại lấy tiền.
> → Mất **500.000đ khấu trừ** + phí ship 2 chiều. **Máy lỗi là lỗi của shop, nhưng khách chịu ~600k.**

Khách tỉnh không đổi máy khác dễ như khách Hà Nội — họ vừa mất niềm tin, họ muốn thoát ra.
Nếu ta đi quảng cáo "15 ngày đổi trả" cho khách tỉnh mà không xử lý điểm này thì **bài viết
càng chạy tốt, rủi ro bóc phốt càng cao**. Đây là fact mới cần chủ shop chốt — đã mở thành **UNVERIFIED #24 🔴 GẤP**.

---

## 5. Chi phí thật của việc freeship (để chủ shop quyết có số hay không)

Ước tính từ bảng giá công bố của đơn vị vận chuyển (GHN), gói ~2–3kg:

| Khoản | Mức |
|---|---|
| Nội tỉnh Hà Nội | từ ~15.500đ |
| Liên tỉnh | cao hơn theo vùng; laptop đi đường bộ nên nằm ở khung tiết kiệm |
| Phí chuyển tiền COD | 5.500đ / giao dịch |
| Phí khai giá (hàng giá trị cao) | tính theo % giá trị — **chưa xác minh, phải hỏi đối tác vận chuyển của shop** |

→ Với máy 5 triệu, chi phí giao 1 đơn đi tỉnh nằm ở mức **vài chục nghìn đến khoảng trăm nghìn**,
tức **~1–2% giá trị đơn**. Đây là con số **hoàn toàn gánh được** để đổi lấy quyền viết một câu
dứt khoát trong content. Cái đắt không phải phí ship — cái đắt là **rủi ro khách trả hàng**,
và cái đó đã được cọc xử lý.

---

## 6. KHUYẾN NGHỊ

### 6.1. Ba phương án cho chủ shop

| | **A — Sao chép mô hình cọc** | **B — "Test tại nhà" (khuyến nghị)** | **C — Giữ nguyên, chỉ nói rõ** |
|---|---|---|---|
| Nội dung | Cọc 200–300k, nhận hàng bật máy kiểm rồi trả nốt | Cọc 300k + **cam kết 7 ngày đầu máy lỗi: đổi hoặc hoàn 100%, shop chịu ship 2 chiều** | Không cọc. Chỉ định nghĩa rõ khu vực freeship + phí ship + nói thẳng khách chỉ được xem ngoại hình khi nhận |
| Ta được gì | Ngang bằng đối thủ | **Vượt đối thủ.** Đối thủ cho test 10 phút, ta cho test 7 ngày — bài test thật sự | Hết mơ hồ, hết rủi ro tranh chấp |
| Rủi ro | Thấp. Cọc bù được phí ship 2 chiều nếu khách bỏ hàng | Trung bình. Cần kỷ luật kiểm máy trước khi gửi — nhưng đó chính là pillar CP04 đang xây | Cao về mặt thương mại: vẫn không cạnh tranh được ở kênh từ xa |
| Chi phí thật | ~1–2% giá trị đơn | ~1–2% + rủi ro hoàn hàng (ước tính thấp nếu quy trình test tốt) | 0 |
| Mở khoá content | FB-IDEA-103 | FB-IDEA-103 + một góc content **không đối thủ nào có** | Chỉ mở một phần |

**Khuyến nghị: phương án B.**
Lý do: nó không đua theo đối thủ trên sân của đối thủ. Nó **đổi khung cuộc chơi** từ
"được test lúc nhận hàng" sang "được test bằng chính việc dùng thật" — và nó khớp chính xác
với định vị của shop trong `15_competitors/competitors.md`: *chứng minh thay vì tuyên bố*.
Nó cũng cộng hưởng với CP04 (quy trình test máy): dám cho khách 7 ngày hoàn 100% là **bằng chứng**
rằng quy trình test có thật, không phải khẩu hiệu.

### 6.2. 8 câu hỏi chốt với chủ shop (câu hỏi đóng, trả lời được trong 10 phút)

Ưu tiên hỏi theo thứ tự này — 3 câu đầu gỡ được nhiều nhất.

1. **Khu vực nào được freeship?** (nội thành HN / toàn Hà Nội / toàn quốc) → gỡ #3, #4
2. **Ngoài khu vực đó, phí ship là bao nhiêu?** Một con số, hoặc "khách trả theo cước đơn vị vận chuyển" → gỡ #3
3. **Có nhận cọc để ship COD đi tỉnh không? Cọc bao nhiêu?** (0 / 200k / 300k / theo % giá máy) → gỡ #10
4. **Khi nhận hàng khách được làm gì:** chỉ xem ngoại hình, hay được bật nguồn kiểm tra? Shop có bật dịch vụ đồng kiểm khi tạo đơn không? → gỡ #4, #10 và **xoá điểm mơ hồ ở mục 3**
5. **Khách tỉnh mua máy, máy LỖI, muốn trả lại lấy tiền trong 15 ngày — có khấu trừ 10% không?** (mục 4 ở trên — đã mở thành UNVERIFIED **#24**, quan trọng nhất về mặt rủi ro)
6. **Ai trả phí ship chiều về** khi máy lỗi phải trả lại?
7. **COD tối đa bao nhiêu tiền?** Máy 20–30 triệu có ship COD không hay bắt buộc chuyển khoản?
8. **Đang dùng đơn vị vận chuyển nào?** (để xác minh phí khai giá + giới hạn COD thật)

### 6.3. Việc làm được NGAY, không cần chờ chủ shop

| Việc | Vì sao làm được |
|---|---|
| Viết bài về **15 ngày đổi trả** | Fact đã xác minh trong `policies.md`. Đây là lợi thế mạnh nhất mà page chưa từng nói. Không phụ thuộc #3/#4/#10 |
| Viết bài **"giao toàn quốc 3–5 ngày làm việc"** | Fact đã xác minh |
| Viết bài **dạy khách tự test laptop cũ** (góc #4 trong competitors.md) | Không cần fact nội bộ nào. Chuẩn bị sẵn nền cho FB-IDEA-103 |
| **Không** viết: freeship, phí ship, cọc, "test máy khi nhận" | Chưa có fact. Giữ nguyên lệnh cấm trong `policies.md` |

### 6.4. Đề nghị sửa website (gửi kèm cho quản trị web)

Câu *"khách được kiểm tra nếu sản phẩm có bất kỳ lỗi hay khiếm khuyết nào"* nên được viết lại
thành câu nói rõ khách được làm gì cụ thể khi nhận hàng. Câu hiện tại vừa không giúp bán được
hàng (quá mơ hồ để khách yên tâm), vừa tạo rủi ro tranh chấp (khách hiểu rộng hơn thực tế).

---

## 7. Sau khi có câu trả lời thì làm gì

1. Ghi fact mới vào `01_company/facts/policies.md` § Vận chuyển, kèm `verified_at` + nguồn (chủ shop).
2. Xoá #3, #4, #10 khỏi `UNVERIFIED.md`; đóng #24 nếu câu 5–6 được trả lời; thêm mục mới nếu câu 7–8 phát sinh fact chưa rõ.
3. Gỡ lệnh cấm tương ứng trong `policies.md` § Cách dùng trong content.
4. Đổi `FB-IDEA-103` sang `status: open` trong `04_content/backlog/ideas.md`.
5. Cập nhật `15_competitors/competitors.md` dòng "Ship COD test máy" của cột Thịnh Vượng.
6. Tick mục "Chính sách ship/COD/cọc test" trong `11_tasks/backlog.md`.

---

## Nguồn tham khảo

- Quy định đồng kiểm GHTK — https://ghtk.vn/blog/dong-kiem-la-gi/
- Chính sách giao hàng GHTK — https://ghtk.vn/dich-vu-giao-hang/chinh-sach-giao-hang/
- Đồng kiểm & ship COD, GHN — https://ghn.vn/blogs/thong-tin-giao-hang/dong-kiem-hang-hoa-la-gi-ship-cod-dong-kiem-can-luu-y-gi
- Bảng giá vận chuyển GHN — https://ghn.vn/pages/bang-gia-moi-sieu-tiet-kiem
- Chính sách thanh toán Thịnh Vượng — https://laptoptv.vn/chinh-sach-thanh-toan
- LaptopMD (đối thủ) — https://laptopmd.vn/
