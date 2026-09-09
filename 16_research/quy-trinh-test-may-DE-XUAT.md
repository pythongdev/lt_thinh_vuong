# ĐỀ XUẤT — Quy trình test máy chuẩn (bản nháp, CHƯA XÁC MINH)

> ⚠️ **Trạng thái: ĐỀ XUẤT. Chưa phải fact. KHÔNG được trích bất kỳ dòng nào vào bài đăng.**
> File này nằm ở `16_research/` đúng theo luật: tài liệu tham khảo, chưa phải nguồn fact.
>
> Mục đích: đưa cho **kỹ thuật + chủ shop** một bản có sẵn để **sửa và ký**, thay vì hỏi
> "quy trình test của mình là gì?" rồi chờ. Khi được ký → chuyển sang
> `01_company/facts/quy-trinh-test-may.md` và mới được dùng trong content.
>
> Gỡ khoá: `UNVERIFIED.md` #7 + #12 → pillar **CP04** → idea **FB-IDEA-101** (priority 9.0, cao nhất backlog).
>
> Soạn ngày 2026-09-09. Nguồn tham khảo ở cuối file.

---

## 0. Vì sao quy trình này quan trọng hơn một bài content

Phân tích đối thủ (`15_competitors/competitors.md`) đã chỉ ra khoảng trống lớn nhất của thị trường:

> Ai cũng nói "nguyên zin 100%, chưa qua sửa chữa". **Không ai chứng minh.**

Ta đang thua đối thủ ở bảo hành (6 tháng vs 9–12 tháng) và quà tặng. Hai chỗ đó muốn thắng
phải **chi tiền**. Còn "chứng minh quy trình test" thì thắng bằng **kỷ luật**, không tốn tiền —
và một khi làm được thì đối thủ rất khó copy vì họ phải làm thật.

Nguyên tắc thiết kế của bản đề xuất này: **mỗi bước test phải đẻ ra một bằng chứng chụp/quay được.**
Bước nào không để lại bằng chứng thì không dùng được cho content — dù kỹ thuật có làm thật.

Đây cũng là lý do quy trình này giải quyết một lúc 4 việc:

| Việc | Cách quy trình này xử lý |
|---|---|
| Mở khoá pillar CP04 + FB-IDEA-101 | Có quy trình đã ký → được viết |
| Đóng UNVERIFIED #14 (pin thực tế) | Trạm 7 đo % chai pin bằng số, từng máy |
| Đóng UNVERIFIED #15 (5470 màn HD/FHD) | Trạm 4 đọc độ phân giải thật trên máy |
| Giảm rủi ro lỗi #20/#21 (tag web sai cấu hình/tình trạng) | Trạm 4 đối chiếu cấu hình thật ↔ tên sản phẩm |

---

## 1. Kiến trúc 3 lớp

| Lớp | Là gì | Ai làm | Ở đâu |
|---|---|---|---|
| **A. Quy trình** | 10 trạm test, cố định, không đổi theo máy | Kỹ thuật | File này (sau khi ký → `01_company/facts/`) |
| **B. Phiếu test từng máy** | Kết quả thật của **1 máy cụ thể**, có số | Kỹ thuật | Đề xuất: `02_products/test-records/<mã máy>.md` |
| **C. Luật dùng trong content** | Cái gì được viết, cái gì không | Người viết content | Mục 5 file này |

> 🔑 **Điểm mấu chốt:** content **không** được lấy fact từ lớp A. Lớp A chỉ cho phép nói
> *"quy trình của shop gồm những bước này"*. Muốn nói **số của một máy cụ thể**
> (pin còn 87%, ổ cứng đã chạy 4.200 giờ) thì phải có **phiếu test lớp B của đúng máy đó**.

---

## 2. Lớp A — 10 trạm test (bản đề xuất để kỹ thuật sửa)

Ký hiệu cột "Bằng chứng": thứ kỹ thuật phải lưu lại. Đây chính là nguyên liệu content.

### Trạm 0 — Tiếp nhận & định danh
| | |
|---|---|
| Làm gì | Ghi **Service Tag / Serial**, chụp ảnh máy lúc vừa nhận (4 mặt), ghi nguồn máy về |
| Công cụ | Điện thoại + sổ/phiếu |
| Bằng chứng | 4 ảnh + số serial |
| Vì sao | Serial là thứ neo toàn bộ phiếu test vào **đúng một chiếc máy**. Không có nó, mọi con số sau đều vô nghĩa |

### Trạm 1 — Ngoại hình & cơ khí
| | |
|---|---|
| Làm gì | Vỏ, móp, nứt · bản lề (đóng mở 5 lần, không rơ) · ốc có đủ không · **dấu vết đã mở máy / tem** · chân đế, khe tản nhiệt |
| Công cụ | Mắt + tay |
| Bằng chứng | Ảnh bản lề, ảnh mặt đáy, ảnh vết xước lớn nhất (nếu có) |
| Ngưỡng đề xuất | Xem thang phân hạng ngoại hình ở mục 3 |

### Trạm 2 — Vệ sinh + tra keo tản nhiệt
| | |
|---|---|
| Làm gì | Mở máy, thổi bụi quạt/khe tản, **thay keo tản nhiệt**, vệ sinh bàn phím/màn |
| Bằng chứng | **Ảnh trước/sau phần tản nhiệt** — đây là ảnh có sức thuyết phục cao nhất trong cả quy trình |
| Vì sao | Shop đã có dịch vụ "tra keo tản nhiệt trọn đời" (`policies.md`) mà **page chưa hề nói tới**. Đối thủ chỉ cài phần mềm hoặc vệ sinh — không ai tra keo |
| ❓ Cần kỹ thuật xác nhận | **Có tra keo cho MỌI máy trước khi bán không, hay chỉ khi máy nóng?** Câu trả lời quyết định được viết "mọi máy" hay không |

### Trạm 3 — Test phần cứng bằng công cụ của hãng (preboot)
| | |
|---|---|
| Làm gì | Chạy chẩn đoán tích hợp sẵn trong máy, **trước khi vào Windows** |
| Công cụ | **Dell:** F12 → Diagnostics (SupportAssist On-board Diagnostics / ePSA) — ra mã lỗi + **validation code**<br>**Lenovo:** F10 hoặc Lenovo Diagnostics UEFI<br>**HP:** F2 → PC Hardware Diagnostics UEFI |
| Bằng chứng | **Ảnh chụp màn hình kết quả PASS + validation code** |
| Vì sao đây là trạm mạnh nhất | Dell chiếm **350/593 sản phẩm (~59%)** catalog. Kết quả này **không phải shop tự chấm — là công cụ của Dell chấm**. Về mặt content, một cái ảnh "PASS" của Dell đáng giá hơn 10 câu cam kết tự viết |

### Trạm 4 — Đối chiếu cấu hình thật ↔ thông tin rao bán
| | |
|---|---|
| Làm gì | Đọc CPU, RAM (số thanh + bus + DDR3/DDR4), ổ cứng, GPU, **độ phân giải màn hình thật**, rồi **đối chiếu với tên sản phẩm trên web** |
| Công cụ | CPU-Z, HWiNFO64, `dxdiag`, Cài đặt → Hệ thống → Màn hình |
| Bằng chứng | 1 ảnh chụp CPU-Z + 1 ảnh độ phân giải |
| 🔴 Bắt buộc | **Lệch với web → báo ngay quản trị web sửa, và không viết bài về máy đó cho tới khi sửa xong.** Hiện có ít nhất 4 máy tag lệch tên (UNVERIFIED #20) và Latitude 5470 mâu thuẫn HD/FHD (#15) |

### Trạm 5 — Màn hình
| | |
|---|---|
| Làm gì | Điểm chết / điểm sáng · hở sáng 4 góc · ám màu · độ sáng tối đa · xước |
| Công cụ | Ảnh nền đơn sắc toàn màn hình (trắng · đen · đỏ · lục · lam), phòng tối để soi hở sáng |
| Bằng chứng | Ảnh nền đen (soi điểm sáng) + ảnh nền trắng (soi điểm chết) |
| ⚠️ Lưu ý chính sách | `policies.md` ghi **điểm chết màn hình là trường hợp TỪ CHỐI bảo hành**. Nghĩa là trạm này bắt buộc phải chặt — máy có điểm chết mà lọt ra là shop không đỡ được, khách cũng không được bảo hành |

### Trạm 6 — Bàn phím · touchpad · loa · mic · webcam
| | |
|---|---|
| Làm gì | Gõ đủ 100% số phím · touchpad đa điểm · loa trái/phải · mic thu · webcam |
| Công cụ | Phần mềm test phím (PassMark KeyboardTest hoặc công cụ test phím trên trình duyệt) · Ghi âm · Camera · `mmsys.cpl` để test loa từng bên |
| Bằng chứng | Ảnh bảng phím đã sáng hết (test phím) |

### Trạm 7 — Pin (⭐ trạm đẻ ra fact đắt nhất)
| | |
|---|---|
| Làm gì | Lấy **dung lượng thiết kế** vs **dung lượng thực còn** → tính **% chai**. Ghi số chu kỳ sạc nếu máy báo |
| Công cụ | Windows có sẵn: mở CMD gõ `powercfg /batteryreport` → mở file HTML → đọc **DESIGN CAPACITY** và **FULL CHARGE CAPACITY** |
| Công thức | `% pin còn lại = FULL CHARGE CAPACITY ÷ DESIGN CAPACITY × 100` |
| Bằng chứng | Ảnh chụp bảng battery report |
| ❓ Cần chốt ngưỡng | **Dưới bao nhiêu % thì thay pin / không bán?** Đề xuất khởi điểm: **< 70% → thay pin hoặc ghi rõ trên phiếu**, tham chiếu mặt bằng ngành ~80% |
| Vì sao đắt | Đây là **con số khách quan duy nhất về pin** mà mình có thể đưa ra. Bảo hành pin của shop chỉ **3 tháng** — ngắn hơn máy (6 tháng). Cách duy nhất để 3 tháng không thành điểm yếu là **nói thẳng pin còn bao nhiêu %**. Minh bạch một con số xấu vẫn tạo tin cậy hơn là im lặng |
| Đóng luôn UNVERIFIED #14 | Mô tả sản phẩm hiện đang chép số giờ pin từ **quảng cáo của hãng** (có chỗ ghi thẳng chữ "quảng cáo"). Trạm này thay bằng số đo thật |

### Trạm 8 — Ổ cứng
| | |
|---|---|
| Làm gì | Sức khoẻ ổ (Health %) · **số giờ đã chạy (Power On Hours)** · số lần bật · tốc độ đọc/ghi |
| Công cụ | CrystalDiskInfo (sức khoẻ + giờ chạy) · CrystalDiskMark (tốc độ) |
| Bằng chứng | Ảnh CrystalDiskInfo (phải thấy chữ **Good** + số giờ) |
| ❓ Cần chốt ngưỡng | Health dưới bao nhiêu / bao nhiêu giờ chạy thì thay ổ? Đề xuất: **không "Good" → thay, không bán** |

### Trạm 9 — Chạy tải & nhiệt độ (burn-in)
| | |
|---|---|
| Làm gì | Cho máy chạy tải nặng liên tục, theo dõi **nhiệt độ cao nhất**, xem có tụt xung bất thường / tự tắt / treo không |
| Công cụ | HWiNFO64 hoặc HWMonitor để log nhiệt · tải bằng Cinebench chạy lặp hoặc AIDA64 |
| Bằng chứng | Ảnh biểu đồ nhiệt + số nhiệt độ max |
| ❓ Cần chốt | **Chạy bao lâu?** Đề xuất tối thiểu **30 phút**; nhiều nơi tân trang chuyên nghiệp chạy burn-in dài hơn nhiều. Kỹ thuật chốt theo thực tế xưởng |
| Liên kết trạm 2 | Nhiệt độ ở trạm 9 chính là thứ **chứng minh** việc tra keo ở trạm 2 có tác dụng |

### Trạm 10 — Cài Win, driver, QC cuối
| | |
|---|---|
| Làm gì | **Xoá sạch dữ liệu chủ cũ** → cài Windows sạch → cài đủ driver → kiểm tra Device Manager không còn dấu chấm than → chạy lại 1 lượt nhanh trạm 5–8 |
| Bằng chứng | Ảnh Device Manager sạch |
| Kết thúc | Dán **mã phiếu test** lên máy, lưu phiếu lớp B |
| ⚠️ Không được viết | Không hứa "Windows bản quyền" trừ khi shop thật sự mua key — chưa có fact nào về việc này |

---

## 3. Thang phân hạng ngoại hình (đề xuất)

Web đang dùng một câu duy nhất cho mọi máy: *"Likenew 99% cam kết nguyên zin chưa qua sửa chữa"*.
Câu đó **đã bão hoà** — ai cũng viết, khách không còn tin. Một thang 3 bậc trung thực bán tốt hơn
một câu "99%" dùng cho tất cả.

| Hạng | Mô tả đề xuất | Content được nói |
|---|---|---|
| **A** | Gần như không dấu sử dụng, không xước thấy được ở khoảng cách dùng bình thường | "Ngoại hình đẹp, gần như không dấu sử dụng" |
| **B** | Có vài xước nhỏ / mờ cạnh, không móp, không nứt | "Có vài vết xước nhỏ dùng thường — đã chụp ảnh thật trong bài" |
| **C** | Xước rõ, móp nhẹ, vẫn nguyên bản lề và khung | "Ngoại hình có dấu sử dụng rõ — đổi lại giá tốt hơn" |

> ❓ Cần chủ shop chốt: có muốn công khai phân hạng này lên web/bài đăng không?
> Nếu có → đây là thứ **không đối thủ nào trong bảng so sánh đang làm**.

---

## 4. Lớp B — Phiếu test từng máy (schema đề xuất)

Mỗi máy test xong đẻ ra 1 file. Đây mới là **nguồn fact** mà Gate 1 / Gate 2 truy ngược tới.

```yaml
# 02_products/test-records/<serial>.md
serial: "<Service Tag / Serial>"
product_id: PRD-XXX            # nối về 02_products/products.md
model: "Dell Latitude 5470 i5-6300U | 8GB | 256GB"
tested_by: "<tên kỹ thuật>"
tested_at: 2026-09-XX

ngoai_hinh_hang: A | B | C
ban_le: ok | ro
dau_vet_mo_may: co | khong

preboot_diagnostic: PASS | FAIL
preboot_validation_code: "<mã>"

cau_hinh_khop_web: true | false
ghi_chu_lech: "<nếu false thì lệch chỗ nào>"
do_phan_giai_that: "1366x768" | "1920x1080"

man_hinh_diem_chet: 0
man_hinh_ho_sang: khong | nhe | ro

ban_phim: 100% phim ok
touchpad: ok
loa_mic_webcam: ok

pin_design_capacity_mwh: 0
pin_full_charge_mwh: 0
pin_con_lai_phan_tram: 0        # tự tính
pin_da_thay: true | false

o_cung_health: "Good"
o_cung_gio_chay: 0
o_cung_toc_do_doc_mbps: 0

nhiet_do_max_khi_tai: 0
da_tra_keo: true | false

ket_luan: DAT | THAY_LINH_KIEN | KHONG_BAN
anh_bang_chung: []              # danh sách file ảnh
```

**Quy tắc vàng:** phiếu này là fact về **một chiếc máy có serial**, không phải về model.
Shop có nhiều chiếc cùng model → **mỗi chiếc một phiếu riêng**, pin mỗi chiếc một số.
(Ví dụ cũ dùng lô 17 chiếc Latitude 7480 — lô này đã hết hàng 2026-09-09, nhưng cách làm giữ nguyên.)
❌ Không được lấy phiếu của chiếc này viết cho chiếc kia.

---

## 5. Lớp C — Luật dùng quy trình test trong content

### ✅ Được viết ngay sau khi kỹ thuật ký lớp A
- "Mỗi máy đi qua 10 bước kiểm tra trước khi lên kệ" (nếu chốt đúng 10 trạm)
- Mô tả **từng bước làm gì** — đây chính là nội dung của FB-IDEA-101
- "Máy được test bằng công cụ chẩn đoán của chính hãng, không phải shop tự chấm"
- "Keo tản nhiệt được thay trước khi giao" — **chỉ khi kỹ thuật xác nhận làm cho mọi máy**

### ✅ Được viết khi có phiếu lớp B của đúng máy đó
- "Pin máy này còn 87% so với lúc mới" + ảnh battery report
- "Ổ cứng đã chạy 4.200 giờ, tình trạng Good" + ảnh CrystalDiskInfo
- "Màn hình không điểm chết" + ảnh nền đen

### ❌ Cấm tuyệt đối
| Không được viết | Vì sao |
|---|---|
| "Quy trình test 50 bước", "kiểm tra 100 điểm" | Con số phải khớp quy trình đã ký. Bịa số bước là bịa fact |
| "Máy nào cũng như mới" | Trái với chính thang phân hạng |
| Số pin/ổ cứng của model chung | Fact gắn với **serial**, không gắn với model |
| "Bảo hành 6 tháng" khi `warranty_tag` ghi khác | Đã gặp máy cũ chỉ bảo hành 1 tháng (2 máy Latitude 7480, nay hết hàng) — phải đọc tag từng máy |
| "Test rồi nên không bao giờ hỏng" | Gate 4 chặn: cam kết ngoài `policies.md` |
| Quay video có mặt/dữ liệu chủ máy cũ | Chưa xin phép |

### Gate nào áp dụng
| Gate | Áp dụng ra sao với content CP04 |
|---|---|
| Gate 0 | CP04 hiện **🔒 khoá** trong `content-pillars.md` → phải gỡ khoá ở file đó trước |
| Gate 1 | Mỗi bước nêu trong bài phải truy được về quy trình đã ký |
| Gate 2 | Bài nhắc máy cụ thể → vẫn phải kiểm giá + tồn kho trong ngày đăng |
| Gate 4 | Không được biến "đã test" thành cam kết không hỏng |
| Gate 6 | Bài đầu tiên của CP04 nên để **kỹ thuật ký cùng chủ shop** — vì bài này hứa thay mặt xưởng |

---

## 6. Đường ngắn nhất để gỡ khoá — 7 câu hỏi cho kỹ thuật

Không cần trả lời hết mọi thứ. **Trả lời 7 câu này là CP04 mở được:**

| # | Câu hỏi | Mở khoá được gì |
|---|---|---|
| 1 | Thực tế đang test những bước nào? Bản đề xuất trên **thừa** bước nào, **thiếu** bước nào? | Toàn bộ CP04 |
| 2 | Mỗi máy test hết bao lâu? | Được nói "mỗi máy mất X tiếng" — chi tiết cực đắt cho content |
| 3 | Có tra keo tản nhiệt cho **mọi** máy không, hay chỉ khi cần? | Quyết định viết "mọi máy" hay không |
| 4 | Pin chai bao nhiêu % thì thay? Ổ cứng thế nào thì thay? | Đóng UNVERIFIED #14 |
| 5 | Có công cụ chẩn đoán hãng (Dell F12) đang dùng không? | Trạm 3 — bằng chứng mạnh nhất |
| 6 | **Quay video quy trình được không?** Quay ở đâu, ai xuất hiện được? | FB-IDEA-101 là format **reels** — không quay được thì phải đổi sang format ảnh/carousel |
| 7 | Test xong có ghi lại gì không, hay chỉ nhớ trong đầu? | Quyết định lớp B khả thi hay phải xây từ đầu |

### Rollout đề xuất — đừng test 593 máy
1. **Tuần 1:** kỹ thuật sửa + ký lớp A → chuyển file sang `01_company/facts/quy-trinh-test-may.md`
2. **Tuần 1:** gỡ 🔒 CP04 trong `content-pillars.md`, đổi FB-IDEA-101 `status: blocked → ready`
3. **Tuần 2:** làm phiếu lớp B cho **~10 máy sẽ viết content trong tháng** (ưu tiên máy còn hàng thật), không làm cả catalog
4. **Tuần 2:** quay 1 lần, dùng nhiều lần — quay đủ 10 trạm rồi cắt ra nhiều bài
5. **Tuần 3:** bài CP04 đầu tiên chạy → đo theo `07_analytics/`, so với bài pillar khác

### Rủi ro cần nói thẳng
- ⚠️ **Quy trình công bố rồi thì phải làm thật.** Khách sẽ hỏi "cho em xem phiếu test máy này". Không đưa được là mất uy tín nặng hơn cả việc chưa từng nói.
- ⚠️ Đừng công bố quy trình đẹp hơn thực tế. Thà 6 bước làm thật còn hơn 10 bước làm nửa vời.
- ⚠️ Trạm 7 và 8 sẽ **lộ ra máy xấu**. Đó là tính năng, không phải lỗi — nhưng chủ shop cần biết trước và đồng ý.

---

## Nguồn tham khảo
- Dell — Chạy chẩn đoán tích hợp ePSA / SupportAssist (F12 → Diagnostics), mã lỗi + validation code:
  https://www.dell.com/support/kbdoc/en-us/000181163/
- Dell — Bảng mã lỗi ePSA/PSA: https://www.dell.com/support/kbdoc/en-us/000181162/
- ThinkPro — 9 bước test laptop, kèm tên công cụ: https://thinkpro.vn/noi-dung/cach-test-laptop
- Thế Giới Di Động — 10 cách kiểm tra laptop cũ: https://www.thegioididong.com/tin-tuc/cach-kiem-tra-laptop-cu-1372295
- LaptopEx — Quy trình QC cho laptop refurbished: https://www.laptopex.com/quality-control-processes-for-refurbished-laptop/
- Wisetek — Vai trò của quality testing trong đồ điện tử tân trang: https://www.wisetekmarket.com/blogs/wisetek-market-news/the-role-of-quality-testing-in-refurbished-electronics

> Các nguồn trên là **tham khảo cách làm của ngành**, không phải quy trình của Laptop Thịnh Vượng.
> Chỉ khi kỹ thuật xác nhận từng bước thì mới thành fact của shop.
