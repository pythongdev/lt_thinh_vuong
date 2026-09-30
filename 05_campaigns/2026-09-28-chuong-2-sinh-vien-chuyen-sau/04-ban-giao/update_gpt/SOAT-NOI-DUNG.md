# Soát nội dung — UPDATE GPT · 30/09/2026

## Phạm vi và kết quả

- 24 nội dung viết lại, 13 reel có đủ 104 cảnh; giữ số bài, số KB và vị trí lịch cũ để đối chiếu.
- Xuất đúng 4 khối bài đăng, mỗi khối 9 dòng × 8 cột; CSV ngang có 24 dòng nội dung. Kịch bản có đúng 5 cột, 13 dòng tiêu đề, 104 dòng cảnh.
- Kiểm tra bằng parser hiện có: không thiếu trường, không trùng ô lịch; STATUS đều CHỜ FEEDBACK. Bình luận đầu được tách khỏi BRIEF ẢNH.
- Đã kiểm tra timecode liên tục; mỗi kịch bản 31 hoặc 38 giây, mỗi cảnh 3–5 giây, lời thoại không quá 3 đơn vị cách trắng/giây. Đây là kiểm đếm bản viết, chưa phải đo giọng đọc thực tế.
- Chưa quay/chụp máy; chưa có phản hồi người đọc, chưa có số đo hiệu quả và chưa duyệt phát hành bản mới. Không tự xác nhận đã qua toàn bộ 7 gate.

## Các sửa đổi có ảnh hưởng nội dung

| Vấn đề bản cũ | Cách sửa bản này |
|---|---|
| Mặc định sinh viên cần xin tiền hoặc thuyết phục bố mẹ | Chỉ bài 1–2 dùng nhánh gia đình; còn lại theo việc học, không suy nguồn tiền |
| Ngân sách 9,5 triệu nhưng gợi ý máy 9,88 triệu | Bài 8/12 và KB5 chỉ so hai máy 8.290.000đ và 9.380.000đ; tính phần còn lại trước phụ kiện |
| Chênh 710.000đ nhưng gọi 700 nghìn | Bài 16/KB6 dùng 710.000đ; bài 13 phân biệt hai cặp 710.000đ và 700.000đ |
| Khẳng định “không cảm ứng” từ việc tên nguồn không ghi | Chuyển thành cần xác minh đúng phiên bản; không quay cảm ứng/xoay gập ở 7420 và 9410 |
| Chọn cấu hình từ tên ngành hoặc hứa chạy nhiều tab | Hỏi phần mềm, phiên bản và ứng dụng mở cùng lúc; không hứa tốc độ |
| Màn 13 inch chắc chắn vừa balo/bàn hoặc 14 inch hợp đa số | Hướng dẫn thử tài liệu, chỗ đặt máy và cả máy lẫn sạc |
| “20 giây thấy hết lỗi màn” | Chỉ hướng dẫn quan sát ban đầu, không bảo đảm phát hiện mọi lỗi; bài 19/KB9 chuyển sang lưu hướng dẫn |
| Review có kết luận dùng tốt khi chưa đo | Thay bằng thao tác khách tự thử trên đúng phiên bản; nói rõ chưa đo hiệu năng |
| Bốn việc trong video học online | KB12 giữ camera, mic, loa; bỏ phần cấu hình sang nội dung khác |
| Ảnh mặc định máy có vết dùng ở ảnh 7 | Yêu cầu chụp tình trạng thật; chưa chụp thì chưa khẳng định vết |
| Kế thừa trạng thái duyệt của bản trước | Bản mới CHỜ FEEDBACK; yêu cầu tải Drive chỉ để xem, không tự phát hành |

Kho khách thật vẫn trống: giữ tuyến K (Dạy khách tự kiểm tra máy cũ) và G (So sánh hai máy) tại các khung thay Feedback/Khách tại cửa hàng. Không tạo lời khách hàng giả.

## Nguồn dùng để viết

Ba hướng dẫn `03_customers/sinh_vien/` hiệu chỉnh ngày 30/09; lớp giọng `03_customers/ngon-ngu-theo-persona.md`; format post và reel trong `04_content/templates/`; `04_content/formats/reels.md`; nghiên cứu video ngắn trong `16_research/`. Ví dụ trong nghiên cứu chỉ là gợi ý biên tập, không phải lời khách hoặc kết quả kiểm máy.

Nguồn máy: `02_products/36-may-duoc-viet-2026-09-29.csv`, đọc cấu hình từ cột name, bảo hành từ warranty_tag. Mọi máy dưới đây có tag 6 Tháng. Đã mở các trang sản phẩm và đối chiếu giá hiển thị ngày 30/09/2026; dữ liệu web có thể là bản lưu từ những ngày khác, không xác nhận tồn kho trong ngày.

| ID | Tên sản phẩm nguồn | Giá (đ) | Link đối chiếu |
|---|---|---|---|
| 44712862 | Laptop cũ Dell Latitude 7390 2in1 Core i5-8250U · 16GB · 256GB · 13.3 inch Cảm ứng | 8,290,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-7390-2in1-ca-m-u-ng-core-i5-8250u-16gb-256gb-man-hinh-13-3-inch-xoay-ga-p-360) |
| 58753475 | Laptop cũ Dell Latitude 5300 2in1 Core i7-8665U · 16GB · 256GB · 13.3 inch FHD Cảm ứng | 8,980,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-256gb-13-3-inch-fhd-cam-ung) |
| 50452813 | [Like New] Dell Latitude 7420 [Vỏ Carbon] Core i5-1145G7 · 16GB · 256GB · 14.0 inch FHD | 9,380,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-7420-core-i5-1145g7-16gb-256gb-14-0-inch-fhd) |
| 44712828 | Laptop cũ Dell Latitude 5300 2in1 Core i7-8665U · 16GB · 512GB · 13.3 inch FHD Cảm ứng | 9,690,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-5300-2in1-core-i7-8665u-16gb-512gb-13-3-inch-fhd-cam-ung) |
| 44712848 | Laptop cũ Dell Latitude 5310 2in1 Core i5-10210U · 16GB · 512GB · 13.3 inch FHD Cảm ứng | 9,880,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-5310-2in1-cam-ung-core-i5-10210u-16gb-512gb-man-hinh-13-3-inch-fhd-cam-ung) |
| 44712980 | [Like New] Dell Latitude 7400 2in1 Core i7-8665U · 16GB · 512GB · Intel UHD Graphics · 14inch FHD Cảm ứng | 10,680,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-7400-2in1-cam-ung-core-i7-8665u-ram-16gb-ssd-512gb-intel-uhd-graphic-14inch-cam-ung) |
| 54982391 | [LikeNew] Dell Inspiron 7415 2in1  Ryzen 7- 5700U · 16GB · 512GB · 14 inch FHD Cảm ứng | 11,280,000 | [Trang sản phẩm](https://laptoptv.vn/likenew-dell-inspiron-7415-2in1-ryzen-7-5700u-16gb-512gb-14-inch-fhd-cam-ung) |
| 44713056 | [Like New] Dell Latitude 9410 2in1 Core i7-10610U ·  16GB · 256GB · 14 inch FHD | 12,980,000 | [Trang sản phẩm](https://laptoptv.vn/dell-latitude-9410-2in1-core-i7-10610u-16gb-256gb-man-hinh-14-inch-fhd) |
| 53868016 | [Like New] Dell Latitude 7420 [Vỏ nhôm] Core i7-1185G7 · 16GB · 512GB · 14.0 inch FHD | 12,980,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-7420-vo-nhom-core-i7-1185g7-16gb-512gb-14-0-inch-fhd) |
| 55213984 | [Like New] Dell Latitude 9410 2in1 Core i7-10610U ·  16GB · 512GB · 14 inch FHD | 13,680,000 | [Trang sản phẩm](https://laptoptv.vn/laptop-cu-dell-latitude-9410-2in1-core-i7-10610u-16gb-512gb-14-inch-fhd) |

Đạo cụ bổ sung KB2/bài 4: Latitude 9520 2in1 i5-1145G7, RAM 16GB, ổ 256GB, màn 15,6 inch FHD cảm ứng — ID 44712669 trong cùng CSV. Không công bố giá hoặc bán mẫu này trong bản viết lại.

## Chính sách: ghi nhận khác biệt giữa web và repo

Đối chiếu [trang chính sách của cửa hàng](https://laptoptv.vn/chinh-sach-doi-tra-san-pham-thinh-vuong) ngày 30/09/2026 với `01_company/facts/policies.md`:

- Trang web ghi thêm RAM, ổ cứng, sạc vào phạm vi 6 tháng; bản mới giữ các bộ phận đã được nguồn nội bộ chốt, không tuyên bố đó là toàn bộ phạm vi. Cần người phụ trách cập nhật nguồn chuẩn trước khi mở rộng claim.
- Điều kiện đổi miễn phí được viết rõ lỗi do nhà sản xuất; trả lấy tiền tách riêng khấu trừ 10%/20%. Có đường dẫn tới điều kiện đầy đủ trong bình luận đầu của bài chính sách.
- Trang web còn nêu tem bảo hành, đốm trắng/kẻ sọc và các ngoại lệ khác. Bài 6 dùng nhãn “một số”, không trình bày danh sách rút gọn như toàn bộ chính sách.
- Dịch vụ cài Windows, phần mềm, tra keo được đối chiếu; không hứa bản quyền trả phí hoặc khôi phục dữ liệu.
- Trang sản phẩm có banner quà tặng, trả góp, freeship khác nguồn nội bộ. Không dùng các banner này để mở khóa claim đang bị chặn trong repo.

## Điều kiện sản xuất và phát hành

Danh sách trắng mới nhất trong repo có hạn **06/10/2026**. Việc đọc giá web ngày 30/09 không gia hạn danh sách. Bài có sản phẩm sau hạn: 16, 18, 20, 22; video có giá sau hạn: KB6, KB13. Phải soát lại danh sách/giá/tình trạng trước khi đăng các nội dung đó. Các máy làm đạo cụ sau hạn cũng phải được kiểm tra còn thuộc danh sách được phép.

Bài ngày 28–29/09 giữ vị trí cũ để so bản; không tự ghi ngày đăng bù mới. Người phụ trách cập nhật lịch thực tế khi phát hành.

## Drive

Người dùng đã yêu cầu tải bản mới lên Drive để xem. Quyền thực hiện tác vụ đã có, không cần hỏi lại “ok” cho upload bản xem. Tuy nhiên Google Drive chưa được cài/kết nối trong phiên làm việc; đã đề xuất kết nối, chưa có công cụ upload được xác nhận. **Chưa upload, chưa có link bản mới.**

Đích theo README cũ: thư mục chương 2 [trên Drive](https://drive.google.com/drive/folders/1wbJJaGa7YhwX13XPFD9vX6eP2_NboQNB). Khi kết nối, tạo thư mục con `2026-09-30 · update_gpt — CHỜ FEEDBACK`, tải hai workbook và các file Markdown. Có thêm 6 CSV trong `drive_ready/` để giữ cách chia 4 lịch + 2 phần KB như bản Drive cũ. Không ghi đè thư mục cũ, không tự chia sẻ công khai.
