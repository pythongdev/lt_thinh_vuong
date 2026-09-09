# Verification Gates

> Triết lý không đổi: **không có fact → không publish**, và **AI không tự đăng content thương mại**.
> Bản này mở rộng từ 5 gate lên 7: thêm Gate 0 (chiến lược, chặn từ đầu) và Gate 5 (chất lượng gói).
> Gate 1–4 và Human Approval giữ nguyên nội dung cũ, chỉ chi tiết hoá.

---

## Gate 0 — Strategy Check
**Chặn trước khi tốn công viết.**

- [ ] Đúng 1 persona (P1–P5)
- [ ] Đúng 1 journey stage (J0–J7)
- [ ] Đúng 1 objective (O1–O5)
- [ ] Đúng 1 pillar (CP01–CP10)
- [ ] Ô tương ứng trong `04_content/strategy/content-matrix.md` không bị ✗ hoặc 🔒
- [ ] Nối ngược được lên một business goal (`content-strategy.md` mục 2)
- [ ] `problem` khác `angle`

Chịu trách nhiệm: Strategy Agent (03).

## Gate 1 — Fact Check
**Không có fact → không publish.**

- [ ] Mọi con số truy được về file nguồn
- [ ] Có bảng: mỗi claim ↔ file nguồn
- [ ] Không claim nào ở trạng thái đoán
- [ ] Claim chưa truy được nguồn → đã đánh dấu `⚠️ NEEDS_VERIFICATION`

Chịu trách nhiệm: Fact-check Agent (08).

## Gate 2 — Commercial Check
**Giá, stock, warranty, promotion phải khớp nguồn chuẩn.**

- [ ] Giá khớp trang nguồn, kiểm tra **trong ngày đăng**
- [ ] Tồn kho kiểm tra trong ngày đăng — sản phẩm hết hàng thì không đăng bài bán
- [ ] Bảo hành đúng `policies.md`: máy cũ **6 tháng** main/màn/phím, pin **3 tháng**, máy mới 12 tháng
- [ ] `verified_at` không quá 7 ngày, nếu quá thì đã mở lại trang nguồn
- [ ] Không hứa trả góp / freeship / COD / thời gian giao hàng chưa xác minh
- [ ] Không dùng thông số đang mâu thuẫn (xem ghi chú trong `products.md`)

Chịu trách nhiệm: Fact-check Agent (08).

## Gate 3 — Brand Check
**Đúng tone và positioning.**

- [ ] Tên đúng: **Laptop Thịnh Vượng** (TV = Thịnh Vượng, không phải tivi)
- [ ] Giọng: tư vấn thật, dễ hiểu, không phóng đại
- [ ] Nói bằng tình huống đời thực, không liệt kê thông số suông
- [ ] Định vị đúng: minh bạch tình trạng + hậu mãi, không phải "rẻ nhất"
- [ ] Đúng ngôn ngữ của persona đã chọn
- [ ] Đúng 1 CTA, hợp objective

Chịu trách nhiệm: Brand Agent (09).

## Gate 4 — Safety / Claim Check
**Không có claim gây hiểu nhầm hoặc không có bằng chứng.**

- [ ] Không xếp hạng: "số 1", "rẻ nhất", "uy tín nhất", "bảo hành dài nhất"
- [ ] Không "chính hãng" cho máy cũ → "nguyên zin", "likenew"
- [ ] Không cam kết ngoài `policies.md`
- [ ] **Không nêu tên đối thủ**, không ám chỉ nơi khác bán máy kém
- [ ] Không khan hiếm giả: "chỉ hôm nay", "còn 1 máy cuối" khi không có fact
- [ ] Không hù dọa sai sự thật
- [ ] Chuyện khách hàng: có thật + đã xin phép

Chịu trách nhiệm: Brand Agent (09).

## Gate 5 — Content Quality
**Gói có dùng được không.**

- [ ] Đủ 12 thành phần bắt buộc của Content Package (`04_content/content-package.md`)
- [ ] Hook khớp nội dung bài
- [ ] Có 3 hook thay thế, khác pattern nhau
- [ ] Thông số đã dịch thành lợi ích đời thực
- [ ] Có measurement plan: chỉ số nào quyết định thành/bại
- [ ] Có 5 câu trả lời comment thường gặp (với bài O4/O5)
- [ ] Tiếng Việt tự nhiên, không sáo rỗng

Chịu trách nhiệm: Content Agent (06) + orchestrator.

## Gate 6 — Human Approval
**Content thương mại quan trọng phải được người có trách nhiệm duyệt.**

- [ ] Người duyệt đã đọc **toàn bộ** bài, không chỉ lướt
- [ ] `risk: high` (có giá / tồn kho / cam kết / chuyện khách) → chủ shop hoặc người phụ trách bán hàng ký
- [ ] Đã ghi `approved_by` + `approved_at` vào header file

**AI không có quyền bỏ qua gate này.** Không có chữ ký → không đăng.

---

## Luật chung

| | |
|---|---|
| Thứ tự | Gate chạy theo thứ tự 0 → 6. Không nhảy cóc. |
| Khi fail | Trả về **đúng agent gây lỗi**, không quay lại đầu dây chuyền. |
| Ghi lại | Lý do fail giữ lại ở cuối file — đó là dữ liệu học. |
| Lỗi lặp | Cùng một lỗi 3 lần → sửa vào file luật (template/format/prompt), không sửa từng bài. |
| Gấp | Bận tới đâu cũng **không được bỏ Gate 1, 2, 4, 6**. |
