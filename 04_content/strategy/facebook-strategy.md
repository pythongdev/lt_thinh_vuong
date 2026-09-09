# Facebook Strategy — Laptop Thịnh Vượng

> Kênh chính của shop. File này nói **cách Facebook được dùng**, không phải cách viết bài
> (cách viết nằm ở `04_content/templates/` và `04_content/formats/`).

---

## 1. Vai trò của từng surface

| Surface | Dùng để | Objective chính | Tần suất đề xuất |
|---|---|---|---|
| Reels | Tiếp cận người chưa biết shop | O1, O2 | 3–4/tuần |
| Post ảnh đơn | Sản phẩm cụ thể, offer | O5 | 2/tuần |
| Carousel / album | So sánh, hướng dẫn nhiều bước | O2, O4 | 1/tuần |
| Story | Nhắc hàng mới, hậu trường, hỏi đáp nhanh | O3, O5 | hằng ngày |
| Comment (bài của mình) | Trả lời + đẩy tương tác | O4 | mọi bài |
| Nhóm Facebook | Tư vấn, không spam bán | O2, O3 | ⚠️ cần kiểm tra luật từng nhóm trước |
| Ads / Retargeting | Khuếch đại bài đã chứng minh hiệu quả | O4, O5 | ⚠️ chưa có ngân sách xác nhận |

> ⚠️ Ads và Groups **chưa được kích hoạt** trong hệ thống: chưa có xác nhận ngân sách quảng cáo
> và chưa có danh sách nhóm được phép đăng. Ghi vào `01_company/facts/UNVERIFIED.md` khi cần dùng.

---

## 2. Nguyên tắc riêng của Facebook

1. **Hook nằm ở 1–2 dòng đầu.** Facebook cắt phần còn lại sau "Xem thêm".
2. **Không để giá ở dòng đầu.** Giá ở dòng đầu biến bài thành quảng cáo, reach tụt.
3. **Comment đầu tiên là của mình.** Đặt link/địa chỉ/thông tin phụ ở đó, không nhét vào bài.
4. **Trả lời comment trong 60 phút đầu.** Đây là lúc bài đang được phân phối.
5. **Một CTA duy nhất.** "Inbox hoặc gọi hoặc ghé shop" = không có CTA nào.
6. **Reels dưới 35 giây** cho nội dung cảnh báo/mẹo; dài hơn chỉ khi có nội dung thật để nói.
7. **Không nêu tên đối thủ** trong bài, trong comment, trong reply inbox.

---

## 3. Lịch đăng đề xuất

| Thứ | Sáng | Chiều/tối |
|---|---|---|
| T2 | Reels CP08 (sai lầm) | Story hàng mới |
| T3 | Post CP01 (tư vấn ngân sách) | Story hỏi đáp |
| T4 | Reels CP02 (kiến thức) | — |
| T5 | Carousel CP03 (so sánh) | Story hậu trường |
| T6 | Post CP05 (review máy) | Story |
| T7 | Reels CP07/CP09 | Post CP10 (hàng có sẵn) |
| CN | Nghỉ hoặc CP06 (chuyện khách) | — |

> Khung giờ cụ thể **chưa xác minh** — cần lấy từ Page Insights (`tools/fb_fetch.py`)
> sau 2 tuần dữ liệu rồi cập nhật lại bảng này.

---

## 4. Quy tắc CTA theo objective

| Objective | CTA được phép | CTA cấm |
|---|---|---|
| O1 | "Lưu lại để lúc cần", "Theo dõi trang" | Inbox chốt đơn |
| O2 | "Comment tình huống của bạn" | Báo giá |
| O3 | "Ghé 71 Thiên Hiền xem máy trực tiếp" | Hứa cam kết ngoài `policies.md` |
| O4 | "Comment ngân sách + ngành học/nghề" | "Chốt ngay hôm nay" |
| O5 | "Inbox mình kiểm tra máy còn không", "Gọi 0928939666" | Hứa còn hàng khi chưa kiểm tra |

---

## 5. Đo lường

Mỗi bài Facebook được ghi vào `07_analytics/content-performance.md` sau 24h / 72h / 7 ngày.
Chỉ số theo funnel: xem `07_analytics/metrics.md`.

Dữ liệu kéo về bằng `tools/fb_fetch.py` (Graph API) — xem `tools/README.md`.
