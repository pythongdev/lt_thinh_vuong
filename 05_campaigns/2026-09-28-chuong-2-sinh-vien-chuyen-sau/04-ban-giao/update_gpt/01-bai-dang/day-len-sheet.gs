/**
 * Đẩy khối bàn giao lên Google Sheet fanpage — đúng lưới của tab đang chạy.
 *
 * Nguồn: BAN-GIAO-2-TUAN-28-09-11-10.md
 * Sinh bằng tools/ban_giao_to_sheet.py — đừng sửa thẳng file này, sửa file .md rồi sinh lại.
 * Khuôn lưới: 04_content/templates/post-template.md
 *
 * CÁCH CHẠY
 *   1. Mở sheet "Digital Plan - Social Laptop Thịnh Vượng"
 *   2. Tiện ích mở rộng (Extensions) → Apps Script
 *   3. Xoá code mẫu, dán toàn bộ file này vào, Ctrl+S
 *   4. Bấm Run (hàm dayLenSheet) → lần đầu Google hỏi quyền thì Cho phép
 *   5. Script tạo TAB MỚI, không ghi đè tab nào đang có.
 *      Soát xong thì copy khối sang đúng chỗ trong tab lịch tháng.
 *
 * ⚠️ Dòng LINK ẢNH/ KB để trống có chủ ý — chờ thiết kế / người quay điền.
 * ⚠️ STATUS để CHỜ FEEDBACK. Chỉ người phụ trách đổi thành ĐÃ AIR sau khi bài đã đăng thật.
 */

var TEN_TAB = 'SHEET-2-TUAN-28-09-11-10 (AI)';

var NHAN = ["ĐỊNH DẠNG", "TUYẾN ND", "CONTENT", "BRIEF ẢNH", "LINK ẢNH/ KB", "FORMAT", "STATUS"];

var LUOI = [
 [
  "12:15",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật"
 ],
 [
  "",
  "28-09",
  "29-09",
  "30-09",
  "01-10",
  "02-10",
  "03-10",
  "04-10"
 ],
 [
  "ĐỊNH DẠNG",
  "Reels",
  "Bộ ảnh — 7 ảnh",
  "Reels",
  "Reels",
  "Bộ ảnh — 7 ảnh",
  "Reels",
  "post"
 ],
 [
  "TUYẾN ND",
  "Giáo dục",
  "Sản phẩm",
  "Giáo dục",
  "Trust SP / Review SP",
  "Sản phẩm",
  "Sản phẩm",
  "Tương tác"
 ],
 [
  "CONTENT",
  "Tối xem danh sách môn học cùng bố mẹ, bạn đang tính mua laptop đã qua sử dụng.\nNếu bố mẹ hỏi “sao không mua mới?”, mình có thể bắt đầu từ việc cần dùng máy.\nVideo này gợi ý ba điều để cả nhà cùng xem.\n\nGhi tên phần mềm môn học cần dùng. So đúng cấu hình của từng máy và kiểm tra máy trực tiếp. Sau đó đọc thời hạn, phạm vi bảo hành và điều kiện đổi trả.\n\nMáy mới hay đã qua sử dụng đều cần kiểm tra những điều đó. Chưa có đủ thông tin của hai chiếc thì chưa kết luận chiếc nào hơn.\n\nỞ Laptop Thịnh Vượng: bảo hành máy cũ theo từng mẫu; nhóm máy trong bài này có thời hạn 6 tháng cho bo mạch, màn hình, bàn phím, pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi miễn phí theo điều kiện đổi trả. Trả lấy tiền có khấu trừ, khác với đổi máy.\n\nGửi video này cho bố mẹ xem cùng.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Bạn vừa gom ảnh và video thuyết trình của nhóm vào một thư mục.\nNếu muốn giữ các file đó trên laptop, hãy tính cả phần mềm cần cài khi chọn ổ.\nBộ ảnh này để bạn xem đúng bản máy và những chỗ cần kiểm tra.\n\nDell Latitude 5310 2in1: i5-10210U, RAM 16GB, ổ 512GB, màn 13,3 inch FHD cảm ứng, xoay gập. Máy đã qua sử dụng.\nGiá: 9.880.000đ.\n\nỔ SSD là nơi lưu phần mềm và bài học. 512GB là dung lượng ghi theo cấu hình, không phải phần còn trống sau khi cài máy. Mình chưa dùng con số đó để kết luận bạn sẽ lưu đủ bao nhiêu kỳ học.\n\nKhi xem máy, mở thư mục bài của bạn để tính dung lượng cần giữ; thử đọc tài liệu trên màn 13,3 inch và kiểm tra vỏ, bản lề của đúng chiếc sẽ nhận.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nNhắn “5310 i5 16GB 512GB” để mình kiểm tra giá và tình trạng chiếc máy.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Sáng xếp balo đi học, laptop vừa ngăn nhưng còn bộ sạc và quyển vở.\nKhi xem máy, mình thử cả bộ đồ mang theo thay vì chỉ nhìn số inch.\n\nTrong video có ba cỡ màn 13,3, 14 và 15,6 inch đặt cạnh vở A4. Hình này để so trên cùng một mặt bàn, không khẳng định máy nào cũng vừa balo của bạn.\n\nBạn có thể thử lần lượt: đặt máy cạnh đồ học, xếp máy và sạc vào balo, rồi đeo thử. Khóa không vừa thì dừng, đừng ép máy vào.\n\nSau đó mở tài liệu bạn hay dùng để xem chữ có dễ đọc. Máy vừa balo vẫn cần được kiểm tra theo cách bạn học.\n\nLưu video để hôm xem máy mang theo balo và đồ học.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Làm slide nhóm xong, bạn muốn xoay màn để người ngồi đối diện cùng xem.\nVới máy xoay gập, hãy thử thao tác đó rồi quay lại gõ bài.\nVideo này quay đúng bản Latitude 7390 có RAM 16GB.\n\nDell Latitude 7390 2in1: i5-8250U, RAM 16GB, ổ 256GB, màn 13,3 inch cảm ứng. Máy đã qua sử dụng.\nGiá: 8.290.000đ.\n\nRAM là bộ nhớ làm việc khi ứng dụng đang chạy. Có 16GB chưa đủ để kết luận máy chạy phần mềm môn học của bạn thế nào; cần đối chiếu cả tên, phiên bản phần mềm và chip i5 đời 8 của máy.\n\nKhi xem, mở slide mẫu, thử chạm chuyển trang và gõ một đoạn. Kiểm tra cả bản lề, màn và chỗ lưu file còn trống. Video thao tác không phải bài đo tốc độ hay thời lượng pin.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận tên phần mềm và phiên bản bạn cần dùng để mình đối chiếu cấu hình.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Bạn đang đọc tài liệu ở một cửa sổ, gõ bài ở cửa sổ bên cạnh.\nKhi xem laptop, thử đúng cách sắp xếp đó rồi chỉnh cỡ chữ theo mắt mình.\nĐây là bộ ảnh của bản Latitude 7420 vỏ carbon.\n\nMáy dùng i5-1145G7, RAM 16GB, ổ 256GB, màn 14 inch FHD; thuộc nhóm gần như mới.\nGiá: 9.380.000đ.\n\nMàn 14 inch chưa tự trả lời việc bạn có đọc thoải mái hai cửa sổ hay không. RAM 16GB cũng chưa thay cho kiểm tra yêu cầu phần mềm. Trong bộ ảnh có cấu hình và hai cạnh máy để bạn đối chiếu đúng phiên bản.\n\nBản này khác bản có chữ 2in1. Nếu cần cảm ứng hoặc xoay gập, mình cần kiểm tra đúng chiếc trước khi trả lời.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nNhắn “7420 carbon i5 16GB 256GB” để mình kiểm tra giá và tình trạng máy.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Buổi làm slide nhóm, bạn có dùng cảm ứng để chuyển trang hay chủ yếu gõ và kéo chuột?\nCùng một bài, thử thao tác trên hai máy sẽ cho bạn thêm thông tin để so.\nHai bản dưới đây chênh 2.300.000đ.\n\nDell Latitude 7400 2in1 — 10.680.000đ: i7-8665U, RAM 16GB, ổ 512GB, màn 14 inch FHD cảm ứng, xoay gập.\n\nDell Latitude 7420 vỏ nhôm — 12.980.000đ: i7-1185G7, RAM 16GB, ổ 512GB, màn 14 inch FHD. Cảm ứng và xoay gập cần xác minh trên đúng phiên bản.\n\nCả hai thuộc nhóm gần như mới. RAM và dung lượng ổ giống nhau theo cấu hình; tên chip khác nhau. Mình chưa có phép đo để nói chiếc nào xử lý bài của bạn nhanh hơn.\n\nNếu cần cảm ứng, thử trực tiếp trên 7400. Nếu phần mềm môn học là điều bạn quan tâm, đối chiếu yêu cầu của đúng phiên bản phần mềm với cả hai cấu hình. Không dùng mỗi chữ i7 để quyết định.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận phần mềm và việc bạn làm trên máy để mình đối chiếu hai bản.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Chủ nhật, mở lịch học tuần tới: môn nào cần dùng laptop?\nCó bài làm slide, có bài phải cài một phần mềm riêng.\nMình muốn biết bạn đang vướng ở việc nào trước khi nói tới cấu hình.\n\nNếu đã có hướng dẫn môn học, ghi đúng tên phần mềm và phiên bản. Chưa có thì kể việc cần làm, chẳng hạn gõ báo cáo, xử lý bảng số liệu hay dựng video thuyết trình.\n\nTên ngành giúp bắt đầu câu chuyện, nhưng chưa đủ để mình nói bạn phải mua máy RAM bao nhiêu hay có cần đồ họa riêng.\n\nBình luận phần mềm hoặc việc học bạn đang cần làm trên laptop.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong"
 ],
 [
  "BRIEF ẢNH",
  "1. Quay theo KB1: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7400 2in1 i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng.\n3. Chuẩn bị: Sổ ghi môn học và phần mềm mẫu; tờ chính sách A4; hai ghế cạnh quầy. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Sao không mua mới?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "Tỉ lệ 1:1, 1080×1080, 7 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Toàn · góc 45° · đúng máy mở tài liệu mẫu, sổ bài học cạnh bên. Chữ trên ảnh: “Latitude 5310: kiểm tra chỗ lưu bài nhóm”.\n2. Cận · chính diện · tài liệu mẫu trên màn, giữ cỡ chữ thực tế. Chữ trên ảnh: “Mở tài liệu của bạn để thử”.\n3. Cận · từ trên xuống · tay gõ trên bàn phím, không che phím. Chữ trên ảnh: “Thử gõ một đoạn bài”.\n4. Cận · ngang cạnh trái · xoay thân máy để thấy cổng, không cắm nhầm loại. Chữ trên ảnh: “Kiểm tra cổng bạn cần dùng”.\n5. Cận · ngang cạnh phải · tay giữ máy trên mặt bàn. Chữ trên ảnh: “Đối chiếu thiết bị cần nối”.\n6. Cận · chính diện · cấu hình đúng chiếc, che tên tài khoản và mã định danh. Chữ trên ảnh: “Dell Latitude 5310 2in1 i5-10210U · 9.880.000đ”.\n7. Cận · góc xiên · chụp vỏ, mép máy và bản lề của đúng chiếc; giữ nguyên vết dùng nếu có. Chữ trên ảnh: “Xem tình trạng đúng chiếc máy”.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "1. Quay theo KB2: 8 cảnh, 31 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 5310 2in1 i5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng; Dell Latitude 7400 2in1 i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng; Dell Latitude 9520 2in1 i5-1145G7 · RAM 16GB · ổ 256GB · màn 15,6 inch FHD cảm ứng.\n3. Chuẩn bị: Balo; sạc đúng từng máy; vở A4; bàn quay. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Còn chỗ cho sạc không?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "1. Quay theo KB4: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7390 2in1 i5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng.\n3. Chuẩn bị: File slide mẫu tự tạo; sổ phần mềm; nền trắng/đen. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Cần xoay màn xem slide?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "Tỉ lệ 1:1, 1080×1080, 7 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Toàn · góc 45° · đúng máy mở tài liệu mẫu, sổ bài học cạnh bên. Chữ trên ảnh: “Latitude 7420 carbon: mở tài liệu cạnh bài đang gõ”.\n2. Cận · chính diện · tài liệu mẫu trên màn, giữ cỡ chữ thực tế. Chữ trên ảnh: “Mở tài liệu của bạn để thử”.\n3. Cận · từ trên xuống · tay gõ trên bàn phím, không che phím. Chữ trên ảnh: “Thử gõ một đoạn bài”.\n4. Cận · ngang cạnh trái · xoay thân máy để thấy cổng, không cắm nhầm loại. Chữ trên ảnh: “Kiểm tra cổng bạn cần dùng”.\n5. Cận · ngang cạnh phải · tay giữ máy trên mặt bàn. Chữ trên ảnh: “Đối chiếu thiết bị cần nối”.\n6. Cận · chính diện · cấu hình đúng chiếc, che tên tài khoản và mã định danh. Chữ trên ảnh: “Dell Latitude 7420 vỏ carbon i5-1145G7 · 9.380.000đ”.\n7. Cận · góc xiên · chụp vỏ, mép máy và bản lề của đúng chiếc; giữ nguyên vết dùng nếu có. Chữ trên ảnh: “Xem tình trạng đúng chiếc máy”.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "1. Quay theo KB11: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7400 2in1 i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng; Dell Latitude 7420 vỏ nhôm i7-1185G7 · RAM 16GB · ổ 512GB · màn 14 inch FHD.\n3. Chuẩn bị: Cùng file slide mẫu; nhãn giá và cấu hình; sổ phần mềm. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Giá trên hình chỉ theo KB; phải xác minh sáng ngày quay. Hạn dùng dữ liệu 06/10/2026; video dự kiến sau hạn phải cập nhật trước khi sản xuất/đăng.\n6. Ảnh bìa lấy khung đầu của video, chữ: “So máy cho buổi làm slide”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "Tỉ lệ 1:1, 1080×1080, 1 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Trung từ trên xuống: lịch học mẫu, sổ và bút cạnh laptop đóng nắp; không dùng tên trường. Chữ trên ảnh: “Tuần này bạn mở phần mềm nào?”.\n\nĐạo cụ máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD; không lên tên/giá và không chạm màn, không xoay gập.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng."
 ],
 [
  "LINK ẢNH/ KB",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 [
  "FORMAT",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption"
 ],
 [
  "STATUS",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK"
 ],
 [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 [
  "20:30",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật"
 ],
 [
  "",
  "28-09",
  "29-09",
  "30-09",
  "01-10",
  "02-10",
  "03-10",
  "04-10"
 ],
 [
  "ĐỊNH DẠNG",
  "post",
  "post",
  "Reels",
  "post",
  "Reels",
  "",
  ""
 ],
 [
  "TUYẾN ND",
  "Giáo dục",
  "Giáo dục",
  "Trust thương hiệu",
  "Sản phẩm",
  "Giáo dục",
  "",
  ""
 ],
 [
  "CONTENT",
  "Bạn đang mở danh sách môn học để bàn với bố mẹ chuyện mua laptop.\nMới hay đã qua sử dụng, cả nhà vẫn cần biết chiếc máy đó sẽ dùng vào việc gì.\nMình ghi lại ba điều để cùng kiểm tra.\n\n1. Môn học cần phần mềm nào?\nGhi tên và phiên bản trong hướng dẫn môn học, thêm những ứng dụng thường mở cùng lúc. Chưa rõ thì hỏi giảng viên trước; tên ngành chưa đủ để chọn cấu hình.\n\n2. Chiếc máy cụ thể ra sao?\nĐối chiếu cấu hình, mở tài liệu để xem chữ, gõ thử bàn phím. Với máy đã qua sử dụng, kiểm tra thêm màn hình và vỏ. Những bước này không xác nhận toàn bộ lịch sử sửa chữa.\n\n3. Nếu có lỗi thì liên hệ ai?\nHỏi rõ thời hạn, bộ phận được bảo hành và điều kiện đổi trả. Nhóm máy cũ trong loạt bài này bảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, lỗi do nhà sản xuất được đổi miễn phí theo điều kiện. Trả lấy tiền khấu trừ 10% nếu máy lỗi, 20% nếu máy không lỗi.\n\nBạn có thể nói: “Con sẽ so máy theo phần mềm sắp học và thử trực tiếp. Phần chưa rõ thì mình hỏi thêm cửa hàng. Có thể liên hệ 0928939666 hoặc xem máy tại 71 Thiên Hiền, Mỹ Đình 1, Hà Nội.”\n\nGửi bài này cho bố mẹ để cùng xem trước khi mua.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Tối đọc tài liệu, sáng mang laptop lên lớp: nên chọn màn 13,3, 14 hay 15,6 inch?\nCon số inch là kích thước đường chéo màn, chưa nói máy có vừa chỗ học của bạn.\nThử ba việc này trước khi chốt.\n\n1. Mở đúng tài liệu bạn hay đọc.\nDùng cỡ chữ bạn thấy thoải mái. Nếu vừa đọc tài liệu vừa gõ bài, mở hai cửa sổ cạnh nhau rồi thử đọc và chuyển qua lại. Đừng chọn cỡ màn chỉ vì người khác bảo “sinh viên dùng cỡ này là đủ”.\n\n2. Đặt máy cạnh vở và chuột.\nKiểm tra phần bàn còn lại cho tay và đồ học. Màn cùng số inch vẫn có thể khác kích thước thân máy; không mặc định máy nào cũng vừa bàn gấp.\n\n3. Xếp cả máy và sạc vào balo đang dùng.\nKiểm tra ngăn đựng, kéo khóa nhẹ rồi đeo thử. Đừng cố ép khóa nếu máy không vừa.\n\nKhông có một cỡ màn dành cho mọi ngành học. Tài liệu, cách chia cửa sổ và chỗ ngồi của bạn mới giúp kiểm tra được điều đó.\n\nLưu ba bước này để hôm xem máy thử trực tiếp.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Đang ôn thi, nếu laptop tự tắt, bạn cần ghi lại gì để báo kỹ thuật?\nLúc xảy ra lỗi, máy đang mở ứng dụng nào, có cắm sạc không, màn có báo gì không?\nMô tả đúng hiện tượng sẽ giúp hai bên bắt đầu kiểm tra.\n\nVới máy mua tại Laptop Thịnh Vượng, số kỹ thuật là 0825998855, giờ tổng đài 8h–17h30. Chuẩn bị số điện thoại đã mua hàng và thông tin máy.\n\nNhóm máy cũ trong loạt bài này bảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Việc có được bảo hành phải theo lỗi thực tế và điều kiện của máy.\n\nMột số trường hợp bị từ chối: vào nước; rơi vỡ, va đập; đã sửa ở nơi khác; điểm chết màn hình; tự sửa gây lỗi trong BIOS; không báo trong vòng 30 ngày từ khi phát hiện lỗi. Danh sách đầy đủ nằm trong chính sách ở bình luận đầu.\n\nMình chưa thể nói nguyên nhân hay hẹn thời gian sửa chỉ từ biểu hiện máy tự tắt.\n\nLưu bài này để lúc cần có số kỹ thuật.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Bạn đang lập danh sách mua laptop để làm bài nhóm, tổng ngân sách tối đa 9,5 triệu.\nKhoản này đã gồm chuột, túi hoặc đầu chuyển cần mua chưa?\nDưới đây là hai mức giá máy để bạn bắt đầu đối chiếu.\n\nDell Latitude 7390 2in1 — 8.290.000đ: i5-8250U, RAM 16GB, ổ 256GB, màn 13,3 inch cảm ứng; máy đã qua sử dụng. Khi đọc tài liệu và sửa slide, thử cỡ chữ và bàn phím trên đúng máy.\n\nDell Latitude 7420 vỏ carbon — 9.380.000đ: i5-1145G7, RAM 16GB, ổ 256GB, màn 14 inch FHD; nhóm gần như mới. Mở cùng tài liệu để so; cảm ứng và xoay gập của phiên bản này cần kiểm tra riêng, chưa được xác nhận từ tên nguồn.\n\nNếu lấy 9,5 triệu trừ giá máy, phần còn lại lần lượt là 1.210.000đ và 120.000đ. Đây chưa phải tiền phụ kiện đã được báo giá.\n\nCả hai cùng RAM 16GB và ổ 256GB, nhưng không vì thế mà chạy phần mềm giống nhau. Hãy ghi tên phần mềm, phiên bản và những ứng dụng sẽ mở cùng lúc. Không cần tăng ngân sách chỉ vì tên chip khác.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận ngân sách gồm phụ kiện và tên phần mềm bạn cần dùng để mình đối chiếu.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Bạn chuẩn bị nhận một chiếc laptop đã qua sử dụng để gõ bài trên lớp.\nTrước khi thanh toán, dành thời gian thử những chỗ mình sẽ dùng hằng ngày.\nVideo này có ba bước bạn có thể làm cùng người bán.\n\n1. Mở và khép nắp chậm trong phạm vi máy cho phép. Quan sát chỗ lệch, tiếng lạ hoặc màn tự trôi. Đừng cố bẻ qua hành trình của bản lề.\n\n2. Cắm bộ sạc đúng máy, xem trạng thái nhận sạc. Thử cổng bằng thiết bị tương thích; USB không dùng để kiểm tra mọi loại cổng.\n\n3. Gõ các hàng phím, phím cách, Enter và Backspace. Rê touchpad, thử bấm và cuộn trang.\n\nNếu có điều bất thường, ghi lại và hỏi người bán trước khi quyết định. Mấy thao tác này không xác nhận toàn bộ lịch sử sửa chữa hay tình trạng bên trong máy.\n\nLưu video để hôm nhận máy mở ra làm theo.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "",
  ""
 ],
 [
  "BRIEF ẢNH",
  "Tỉ lệ 1:1, 1080×1080, 3 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Trung, góc từ trên xuống: sổ ghi tên phần mềm đặt cạnh laptop; tay chỉ danh sách. Chữ trên ảnh: “Mua máy để học môn nào?”.\n2. Cận chính diện: màn mở tài liệu mẫu, bàn tay đặt trên bàn phím. Chữ trên ảnh: “Mở tài liệu, gõ thử tại chỗ”.\n3. Cận từ trên xuống: tờ chính sách đặt cạnh điện thoại, không hiện cuộc gọi thật. Chữ trên ảnh: “Đọc cả điều kiện đổi trả”.\n\nĐạo cụ máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD; không lên tên/giá và không chạm màn, không xoay gập.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "Tỉ lệ 1:1, 1080×1080, 3 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Toàn, góc cao 45°: ba laptop 13,3 / 14 / 15,6 inch cùng bàn, vở A4 cạnh bên. Chữ trên ảnh: “Chọn màn bằng việc bạn làm”.\n2. Cận chính diện: một tài liệu mẫu và trang soạn bài mở cạnh nhau. Chữ trên ảnh: “Thử đọc và gõ bài”.\n3. Trung ngang: tay xếp laptop, sạc và vở vào balo. Chữ trên ảnh: “Thử cả máy lẫn sạc”.\n\nĐạo cụ máy: Dell Latitude 5310 2in1 i5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng; Dell Latitude 7400 2in1 i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng; Dell Latitude 9520 2in1 i5-1145G7 · RAM 16GB · ổ 256GB · màn 15,6 inch FHD cảm ứng. Không lên tên/giá trong ảnh.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "1. Quay theo KB3: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD.\n3. Chuẩn bị: Sổ ghi biểu hiện lỗi mẫu; thẻ số kỹ thuật; thẻ điều kiện bảo hành. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Máy tự tắt lúc ôn thi?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "Tỉ lệ 1:1, 1080×1080, 4 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Toàn, góc cao 45°: hai máy cùng bàn, sổ ghi ngân sách 9.500.000đ. Chữ trên ảnh: “Ngân sách gồm phụ kiện chưa?”.\n2. Cận chính diện 7390, mở tài liệu mẫu. Chữ trên ảnh: “7390 · 16GB · 256GB · 8.290.000đ”.\n3. Cận chính diện 7420 carbon, mở cùng tài liệu. Chữ trên ảnh: “7420 carbon · 16GB · 256GB · 9.380.000đ”.\n4. Cận từ trên xuống: sổ ghi hai phép trừ, không đặt quà tặng. Chữ trên ảnh: “Còn 1.210.000đ / 120.000đ trước phụ kiện”.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "1. Quay theo KB10: 8 cảnh, 31 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD.\n3. Chuẩn bị: Sạc đúng máy; thiết bị USB tương thích; file soạn thảo trống. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Nhận máy: thử ba chỗ”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "",
  ""
 ],
 [
  "LINK ẢNH/ KB",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 [
  "FORMAT",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "",
  ""
 ],
 [
  "STATUS",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "",
  ""
 ],
 [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 [
  "12:15",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật"
 ],
 [
  "",
  "05-10",
  "06-10",
  "07-10",
  "08-10",
  "09-10",
  "10-10",
  "11-10"
 ],
 [
  "ĐỊNH DẠNG",
  "Reels",
  "Bộ ảnh — 7 ảnh",
  "Reels",
  "Reels",
  "Bộ ảnh — 8 ảnh",
  "Reels",
  "post"
 ],
 [
  "TUYẾN ND",
  "Sản phẩm",
  "Sản phẩm",
  "Sản phẩm",
  "Trust SP / Review SP",
  "Sản phẩm",
  "Sản phẩm",
  "Tương tác"
 ],
 [
  "CONTENT",
  "Bạn đang cộng tiền laptop và đồ cần mang lên lớp vào một danh sách.\nNếu tổng là 9,5 triệu, phần còn lại sau khi mua máy cũng cần tính.\nVideo đặt hai bản dưới đây cạnh nhau.\n\nLatitude 7390 2in1 i5-8250U, RAM 16GB, ổ 256GB, màn 13,3 inch cảm ứng: 8.290.000đ; nhóm đã qua sử dụng.\n\nLatitude 7420 vỏ carbon i5-1145G7, RAM 16GB, ổ 256GB, màn 14 inch FHD: 9.380.000đ; nhóm gần như mới. Cần xác minh riêng cảm ứng và xoay gập nếu bạn cần.\n\nPhần còn lại lần lượt là 1.210.000đ và 120.000đ, chưa trừ phụ kiện. Video không kết luận chiếc nào chạy phần mềm tốt hơn.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận ngân sách gồm phụ kiện và tên phần mềm bạn cần dùng để mình đối chiếu.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Bạn muốn giữ tài liệu và video bài nhóm trên laptop để mở khi không có mạng.\nKhi hỏi máy, ghi cả dung lượng ổ để tránh nhầm hai bản cùng tên.\nBộ ảnh này là Latitude 9410 bản i7, ổ 512GB.\n\nDell Latitude 9410 2in1: i7-10610U, RAM 16GB, ổ 512GB, màn 14 inch FHD; nhóm gần như mới.\nGiá: 13.680.000đ.\n\nỔ SSD là chỗ lưu phần mềm và bài học. 512GB là dung lượng cấu hình; khi xem máy cần kiểm tra phần còn trống và tính các file bạn muốn tải về. Không dùng dung lượng ổ để suy tốc độ xử lý video.\n\nMở một tài liệu mẫu, gõ thử và đối chiếu cấu hình của đúng chiếc. Tên sản phẩm chưa xác nhận cảm ứng, nên mình cần kiểm tra thêm nếu bạn muốn dùng chức năng này.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nNhắn “9410 i7 16GB 512GB” để mình kiểm tra giá và tình trạng máy.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Đang tải video bài nhóm về máy, bạn muốn biết có nên trả thêm cho ổ 512GB.\nMình đặt hai bản Latitude 5300 cạnh nhau để xem đúng khoản chênh.\n\nCùng i7-8665U, RAM 16GB, màn 13,3 inch FHD cảm ứng; đều thuộc nhóm đã qua sử dụng.\nBản ổ 256GB: 8.980.000đ.\nBản ổ 512GB: 9.690.000đ.\nChênh đúng 710.000đ.\n\nỔ là chỗ lưu phần mềm và file. Trước khi chọn, cộng phần mềm cần cài với tài liệu, video bạn sẽ giữ trên máy. File trên mạng được tải về vẫn cần chỗ lưu.\n\nThông số chung giống nhau không có nghĩa hai chiếc có tình trạng vật lý giống nhau. Dung lượng còn trống và khả năng nâng ổ cần kiểm tra riêng.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận phần mềm cần cài và dung lượng file muốn giữ để mình đối chiếu hai bản.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Một bên là tài liệu, bên kia là bài đang gõ: bạn đọc được ở cỡ chữ nào?\nVideo thử cách xếp hai cửa sổ trên Latitude 7420 vỏ carbon.\nKhi xem máy, bạn có thể mở đúng file mình học để thử lại.\n\nBản i5-1145G7, RAM 16GB, ổ 256GB, màn 14 inch FHD; nhóm gần như mới.\nGiá: 9.380.000đ.\n\nRAM là bộ nhớ làm việc; ổ SSD là chỗ lưu phần mềm và tài liệu. Hai con số này chưa đủ để kết luận máy đáp ứng phần mềm môn học. Mình cần tên, phiên bản phần mềm và những ứng dụng bạn mở cùng lúc.\n\nCảm ứng và xoay gập chưa được xác nhận từ tên của bản này. Video chỉ quay mở nắp, bàn phím và màn ở tư thế dùng thông thường.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận tên phần mềm và phiên bản bạn cần dùng để mình đối chiếu cấu hình.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Cả nhóm đang sửa slide, bạn muốn quay màn cho người đối diện đọc.\nThử đổi tư thế máy rồi quay lại gõ để xem cách nào tiện với mình.\nBộ ảnh này chụp Inspiron 7415 ở các bước đó.\n\nDell Inspiron 7415 2in1: Ryzen 7-5700U, RAM 16GB, ổ 512GB, màn 14 inch FHD cảm ứng, xoay gập; nhóm gần như mới.\nGiá: 11.280.000đ.\n\nRAM là bộ nhớ khi chạy ứng dụng, ổ SSD lưu phần mềm và file. Nếu bài nhóm cần phần mềm dựng video hoặc thiết kế, phải đối chiếu đúng phiên bản trước; mình chưa lấy tên Ryzen 7 để hứa tốc độ.\n\nKhi xem máy, thử tài liệu, cảm ứng và bản lề của đúng chiếc. Bộ ảnh không cho biết thời lượng pin hoặc toàn bộ tình trạng máy.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nNhắn “7415 Ryzen 7 16GB 512GB” để mình kiểm tra giá và tình trạng máy.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Bạn thường đọc tài liệu cạnh trang bài đang gõ và muốn thử hai cỡ màn.\nĐặt cùng file lên hai máy trước khi quyết định sẽ dễ đối chiếu hơn.\nHai bản này chênh 1.400.000đ.\n\nDell Latitude 5310 2in1 — 9.880.000đ: i5-10210U, RAM 16GB, ổ 512GB, màn 13,3 inch FHD cảm ứng; nhóm đã qua sử dụng.\n\nDell Inspiron 7415 2in1 — 11.280.000đ: Ryzen 7-5700U, RAM 16GB, ổ 512GB, màn 14 inch FHD cảm ứng; nhóm gần như mới.\n\nCả hai có xoay gập. Màn khác 0,7 inch theo đường chéo; con số này không cho biết máy nào nhẹ hơn hoặc vừa balo hơn.\n\nThử đọc cùng tài liệu, gõ cùng một đoạn và xếp cả máy lẫn sạc vào balo. Tên chip khác nhau cũng chưa cho biết tốc độ chạy phần mềm môn học; phần đó cần đối chiếu riêng.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận phần mềm bạn dùng và lịch mang máy lên lớp để mình đối chiếu hai bản.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Chủ nhật, bạn ghi danh sách đồ cần cho kỳ học: laptop, chuột, túi, có thể thêm đầu chuyển.\nNếu đang đặt ngân sách mua máy, khoản đó đã gồm những món này chưa?\n\nKhông phải ai cũng cần mua thêm tất cả. Bạn có thể ghi những món đã có, rồi tách phần cần hỏi giá.\n\nMình sẽ dựa vào tổng ngân sách bạn muốn giữ và việc học cần làm để đối chiếu. Chưa có báo giá thì chưa cộng đại tiền phụ kiện; chưa biết phần mềm thì chưa chọn máy chỉ theo mức tiền.\n\nBình luận ngân sách tối đa và cho biết đã gồm phụ kiện chưa.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong"
 ],
 [
  "BRIEF ẢNH",
  "1. Quay theo KB5: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7390 2in1 i5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng; Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD.\n3. Chuẩn bị: Hai thẻ cấu hình/giá; sổ ngân sách 9.500.000đ; bút. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Giá trên hình chỉ theo KB; phải xác minh sáng ngày quay. Hạn dùng dữ liệu 06/10/2026; video dự kiến sau hạn phải cập nhật trước khi sản xuất/đăng.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Ngân sách đã gồm phụ kiện?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "Tỉ lệ 1:1, 1080×1080, 7 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Toàn · góc 45° · đúng máy mở tài liệu mẫu, sổ bài học cạnh bên. Chữ trên ảnh: “Latitude 9410 i7 512GB: kiểm tra đúng phiên bản”.\n2. Cận · chính diện · tài liệu mẫu trên màn, giữ cỡ chữ thực tế. Chữ trên ảnh: “Mở tài liệu của bạn để thử”.\n3. Cận · từ trên xuống · tay gõ trên bàn phím, không che phím. Chữ trên ảnh: “Thử gõ một đoạn bài”.\n4. Cận · ngang cạnh trái · xoay thân máy để thấy cổng, không cắm nhầm loại. Chữ trên ảnh: “Kiểm tra cổng bạn cần dùng”.\n5. Cận · ngang cạnh phải · tay giữ máy trên mặt bàn. Chữ trên ảnh: “Đối chiếu thiết bị cần nối”.\n6. Cận · chính diện · cấu hình đúng chiếc, che tên tài khoản và mã định danh. Chữ trên ảnh: “Dell Latitude 9410 2in1 i7-10610U · 13.680.000đ”.\n7. Cận · góc xiên · chụp vỏ, mép máy và bản lề của đúng chiếc; giữ nguyên vết dùng nếu có. Chữ trên ảnh: “Xem tình trạng đúng chiếc máy”.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "1. Quay theo KB6: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 5300 2in1 i7-8665U · RAM 16GB · ổ 256GB và bản ổ 512GB · màn 13,3 inch FHD cảm ứng.\n3. Chuẩn bị: Hai nhãn giá và cấu hình; thư mục bài mẫu; sổ dung lượng. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Giá trên hình chỉ theo KB; phải xác minh sáng ngày quay. Hạn dùng dữ liệu 06/10/2026; video dự kiến sau hạn phải cập nhật trước khi sản xuất/đăng.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Bài nhóm cần bao nhiêu chỗ?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "1. Quay theo KB8: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD.\n3. Chuẩn bị: Tài liệu và trang soạn thảo mẫu; sổ phần mềm. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Hai cửa sổ: đọc được không?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "Tỉ lệ 1:1, 1080×1080, 8 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Toàn · góc 45° · đúng máy mở tài liệu mẫu, sổ bài học cạnh bên. Chữ trên ảnh: “Inspiron 7415: thử đổi tư thế xem slide”.\n2. Cận · chính diện · tài liệu mẫu trên màn, giữ cỡ chữ thực tế. Chữ trên ảnh: “Mở tài liệu của bạn để thử”.\n3. Cận · từ trên xuống · tay gõ trên bàn phím, không che phím. Chữ trên ảnh: “Thử gõ một đoạn bài”.\n4. Cận · ngang cạnh trái · xoay thân máy để thấy cổng, không cắm nhầm loại. Chữ trên ảnh: “Kiểm tra cổng bạn cần dùng”.\n5. Cận · ngang cạnh phải · tay giữ máy trên mặt bàn. Chữ trên ảnh: “Đối chiếu thiết bị cần nối”.\n6. Cận · chính diện · cấu hình đúng chiếc, che tên tài khoản và mã định danh. Chữ trên ảnh: “Dell Inspiron 7415 2in1 Ryzen 7-5700U · 11.280.000đ”.\n7. Cận · góc xiên · chụp vỏ, mép máy và bản lề của đúng chiếc; giữ nguyên vết dùng nếu có. Chữ trên ảnh: “Xem tình trạng đúng chiếc máy”.\n8. Trung · ngang · tay nhân viên đổi tư thế xoay gập của 7415, mở slide tự tạo. Chữ trên ảnh: “Thử tư thế xem slide”.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "1. Quay theo KB13: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 5310 2in1 i5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng; Dell Inspiron 7415 2in1 Ryzen 7-5700U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng.\n3. Chuẩn bị: Cùng file tài liệu; sổ; nhãn giá/cấu hình; balo và sạc đúng từng máy. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Giá trên hình chỉ theo KB; phải xác minh sáng ngày quay. Hạn dùng dữ liệu 06/10/2026; video dự kiến sau hạn phải cập nhật trước khi sản xuất/đăng.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Thử cùng tài liệu trên hai màn”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "Tỉ lệ 1:1, 1080×1080, 1 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Cận từ trên xuống: sổ có ba dòng “Đã có / Cần mua / Cần hỏi giá”, tay ghi “laptop”. Chữ trên ảnh: “Ngân sách đã gồm phụ kiện chưa?”.\n\nĐạo cụ máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD; không lên tên/giá và không chạm màn, không xoay gập.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng."
 ],
 [
  "LINK ẢNH/ KB",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 [
  "FORMAT",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption"
 ],
 [
  "STATUS",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK"
 ],
 [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 [
  "20:30",
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật"
 ],
 [
  "",
  "05-10",
  "06-10",
  "07-10",
  "08-10",
  "09-10",
  "10-10",
  "11-10"
 ],
 [
  "ĐỊNH DẠNG",
  "post",
  "post",
  "Reels",
  "Reels",
  "Reels",
  "",
  ""
 ],
 [
  "TUYẾN ND",
  "Sản phẩm",
  "Trust SP / Review SP",
  "Trust thương hiệu",
  "Giáo dục",
  "Giáo dục",
  "",
  ""
 ],
 [
  "CONTENT",
  "Bạn đang gom video thuyết trình để nộp bài, rồi tính nên lấy laptop ổ 256GB hay 512GB.\nHãy xem những gì cần lưu trên máy trước khi cộng tiền.\nCó hai cặp cấu hình để đối chiếu khoản chênh.\n\nLatitude 5300 2in1 i7-8665U, RAM 16GB, màn 13,3 inch FHD cảm ứng: bản 256GB giá 8.980.000đ; bản 512GB giá 9.690.000đ. Chênh 710.000đ.\n\nLatitude 9410 2in1 i7-10610U, RAM 16GB, màn 14 inch FHD: bản 256GB giá 12.980.000đ; bản 512GB giá 13.680.000đ. Chênh 700.000đ. Cảm ứng và xoay gập của 9410 cần xác minh riêng.\n\nỔ SSD lưu phần mềm và tài liệu. Trong mỗi cặp, dung lượng ghi theo cấu hình tăng từ 256GB lên 512GB; không đồng nghĩa dung lượng trống tăng đúng 256GB trên máy đã cài sẵn.\n\nGhi ba khoản: phần mềm cần cài, thư mục bài cần giữ và file cần dùng khi không có mạng. File để trên dịch vụ lưu trực tuyến vẫn có thể chiếm ổ nếu tải về hoặc đồng bộ.\n\nChưa kiểm tra tổng đó thì mình chưa nói bản 256GB là đủ. Khả năng nâng ổ sau này cũng cần xác minh đúng máy.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nBình luận phần mềm cần cài và dung lượng file muốn giữ để mình đối chiếu hai bản.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Bạn muốn vừa gõ bài, vừa xoay màn để đọc tài liệu cùng nhóm.\nTrước khi chốt máy xoay gập, thử cả hai cách dùng trên đúng chiếc sẽ nhận.\nVới Latitude 7400, mình kiểm tra ba việc này.\n\nBản đang nói tới: Dell Latitude 7400 2in1 i7-8665U, RAM 16GB, ổ 512GB, màn 14 inch FHD cảm ứng; nhóm gần như mới.\nGiá: 10.680.000đ.\n\n1. Mở tài liệu rồi gõ một đoạn. RAM là bộ nhớ khi ứng dụng chạy; 16GB chưa thay cho việc đối chiếu yêu cầu phần mềm với chip i7 đời 8.\n\n2. Chuyển sang tư thế xoay gập bạn định dùng. Chạm thử trên một tài liệu mẫu, quan sát bản lề khi đổi tư thế. Có cảm ứng không tự xác nhận hỗ trợ một loại bút cụ thể.\n\n3. Mở nền trắng, nền đen rồi quan sát từng vùng màn. Nếu có điểm lạ, hỏi người bán kiểm tra thêm. Hai nền màu không đảm bảo phát hiện mọi lỗi.\n\nĐiểm chết màn hình không thuộc bảo hành của cửa hàng, nên phần này cần kiểm tra trước khi nhận máy.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng. Trong 15 ngày đầu, máy lỗi do nhà sản xuất được đổi máy miễn phí theo điều kiện đổi trả.\n\nGiá tham khảo đối chiếu ngày 30/09/2026; giá và tình trạng máy cần kiểm tra lại khi mua.\n\nNhắn “7400 i7 16GB 512GB” để mình kiểm tra giá và tình trạng máy.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Đang làm bài nhóm, Windows gặp lỗi và bạn định mang laptop đi kiểm tra.\nTrước khi cài lại, hãy nói rõ file bài đang nằm ở đâu và đã có bản sao chưa.\nĐừng mặc định cài xong là mọi file vẫn còn.\n\nNếu máy vẫn truy cập được, tạo bản sao của tài liệu cần giữ ở nơi khác và mở thử bản sao. Nếu không vào được máy, báo tình trạng với kỹ thuật trước; mình chưa thể hứa khôi phục được dữ liệu.\n\nMáy mua tại Laptop Thịnh Vượng có dịch vụ cài Windows, cài phần mềm và tra keo tản nhiệt miễn phí trọn đời theo chính sách. Hỗ trợ cài đặt không có nghĩa tặng giấy phép phần mềm trả phí.\n\nSố kỹ thuật: 0825998855, giờ tổng đài 8h–17h30. Đây là dịch vụ hỗ trợ, không kéo dài thời hạn bảo hành phần cứng. Thời gian xử lý cần hỏi theo tình trạng máy.\n\nLưu bài này để trước khi mang máy đi có danh sách cần chuẩn bị.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Đang mở tài liệu trên chiếc laptop định mua, bạn thấy một chấm lạ trên màn.\nHãy kiểm tra thêm trước khi nhận máy.\nVideo này hướng dẫn quan sát màn bằng nền trắng và nền đen.\n\nMở từng nền kín màn, nhìn lần lượt bốn góc và vùng giữa. Nếu có chấm hoặc vệt bất thường, báo người bán kiểm tra trực tiếp. Không tự kết luận mọi chấm nhìn thấy đều là điểm chết.\n\nHai nền màu là bước quan sát ban đầu, không bảo đảm phát hiện hết lỗi hoặc xác nhận toàn bộ chất lượng màn.\n\nTại Laptop Thịnh Vượng, điểm chết màn hình nằm trong trường hợp từ chối bảo hành. Vì vậy cần làm rõ tình trạng trước khi nhận máy, kể cả khi màn hình có thời hạn bảo hành.\n\nVideo quay thao tác trên máy thật tại cửa hàng; không ghép chấm lỗi lên màn.\n\nLưu video để hôm xem máy mở ra kiểm tra từng vùng màn.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "Trước buổi học online, bạn cần hình lên, người khác nghe được và mình nghe được bài.\nKhi xem laptop đã qua sử dụng, thử ba việc đó ngay trên máy.\n\n1. Mở camera, kiểm tra hình trong điều kiện ánh sáng tại chỗ. Nếu không lên hình, kiểm tra nắp che và quyền truy cập trước khi kết luận lỗi.\n\n2. Ghi một câu ngắn rồi nghe lại. Ghi nhận nếu âm thanh mất đoạn hoặc có tiếng lạ; tránh thu cuộc trò chuyện riêng của người khác.\n\n3. Phát một đoạn âm thanh mẫu, tăng âm lượng từ từ. Nếu có tai nghe riêng, thử thêm theo cách bạn sẽ học.\n\nThử riêng camera, mic và loa chưa đảm bảo một buổi học trực tuyến không gián đoạn. Mạng, ứng dụng và quyền truy cập cũng cần kiểm tra trước buổi học.\n\nLưu video để hôm xem máy thử camera, mic và loa.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #laptopthinhvuong",
  "",
  ""
 ],
 [
  "BRIEF ẢNH",
  "Tỉ lệ 1:1, 1080×1080, 4 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Cận góc cao: màn mở thuộc tính thư mục bài mẫu, tay chỉ dung lượng. Chữ trên ảnh: “Bạn cần giữ bao nhiêu file?”.\n2. Toàn góc 45°: hai bản 5300 cùng bàn, nhãn ổ riêng từng máy. Chữ trên ảnh: “256GB: 8.980.000đ · 512GB: 9.690.000đ”.\n3. Toàn góc 45°: hai bản 9410 mở nắp bình thường. Chữ trên ảnh: “256GB: 12.980.000đ · 512GB: 13.680.000đ”.\n4. Cận từ trên xuống: sổ chia ba dòng phần mềm / bài học / file offline. Chữ trên ảnh: “Tính chỗ lưu trước khi chọn ổ”.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "Tỉ lệ 1:1, 1080×1080, 4 ảnh; quay/chụp tại quầy 71 Thiên Hiền. Chỉ dùng máy thật trong danh sách được phép, dữ liệu học mẫu tự tạo.\n\n1. Trung góc 45°: 7400 mở file tài liệu mẫu, tay gõ một đoạn. Chữ trên ảnh: “Thử đọc và gõ bài”.\n2. Cận ngang: tay xoay màn 7400 chậm, giữ máy bằng tay còn lại. Chữ trên ảnh: “Thử tư thế bạn cần dùng”.\n3. Cận chính diện: màn trắng trên đúng máy, không ghép chấm lỗi. Chữ trên ảnh: “Kiểm tra màn trước khi nhận”.\n4. Cận từ trên xuống: nhãn cấu hình đầy đủ đặt cạnh máy. Chữ trên ảnh: “7400 i7 · 16GB · 512GB · 10.680.000đ”.\n\nKhông ghép lỗi giả, không xóa vết dùng, không quay mặt khách. Ảnh có giá ghi nhỏ “Đối chiếu 30/09/2026”; kiểm tra lại giá trước khi đăng.",
  "1. Quay theo KB7: 8 cảnh, 38 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD.\n3. Chuẩn bị: USB của cửa hàng; file bài mẫu; thẻ dịch vụ; thẻ số kỹ thuật. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Bài tập đã sao lưu chưa?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "1. Quay theo KB9: 8 cảnh, 31 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7400 2in1 i7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng.\n3. Chuẩn bị: Hai ảnh nền trắng/đen toàn màn; thẻ ngoại lệ bảo hành. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Thấy chấm lạ trên màn?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "1. Quay theo KB12: 8 cảnh, 31 giây; bảng 5 cột tại `../02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md`.\n2. Dọc 9:16, 1080×1920; tại quầy 71 Thiên Hiền. Máy: Dell Latitude 7420 vỏ carbon i5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD.\n3. Chuẩn bị: Ứng dụng camera và ghi âm sẵn trên máy; clip âm thanh tự tạo; thẻ ba bước. Một nhân viên cầm máy quay, một nhân viên thao tác và đọc voice thu riêng; không quay mặt khách.\n4. Phụ đề khớp nguyên văn voice; chữ trong cột TEXT đặt trong vùng an toàn, tối đa 3 dòng; nhạc không lời có quyền sử dụng dưới giọng đọc.\n5. Không có giá trên hình hoặc trong lời đọc; che giá trên kệ và nhãn máy ở nền.\n6. Ảnh bìa lấy khung đầu của video, chữ: “Đã thử camera, mic, loa?”. Không thêm lời khen hiệu năng hoặc số pin/cân nặng.",
  "",
  ""
 ],
 [
  "LINK ẢNH/ KB",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
 ],
 [
  "FORMAT",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "Post caption",
  "",
  ""
 ],
 [
  "STATUS",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "",
  ""
 ]
];

function dayLenSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var ten = TEN_TAB;                                    // không ghi đè tab đang có
  for (var i = 2; ss.getSheetByName(ten); i++) ten = TEN_TAB + ' v' + i;
  var sh = ss.insertSheet(ten, 0);

  sh.getRange(1, 1, LUOI.length, 8).setValues(LUOI).setWrap(true).setVerticalAlignment('top');

  sh.setColumnWidth(1, 120);
  for (var c = 2; c <= 8; c++) sh.setColumnWidth(c, 340);

  for (var r = 0; r < LUOI.length; r++) {
    var a = LUOI[r][0];
    if (LUOI[r][1] === 'Thứ 2') {                       // dòng thứ trong tuần
      sh.getRange(r + 1, 1, 1, 8).setFontWeight('bold').setBackground('#d9ead3');
    } else if (NHAN.indexOf(a) >= 0) {
      sh.getRange(r + 1, 1).setFontWeight('bold');
      if (a === 'CONTENT') sh.setRowHeight(r + 1, 420);
      if (a === 'BRIEF ẢNH') sh.setRowHeight(r + 1, 300);
    }
  }
  sh.setFrozenColumns(1);

  SpreadsheetApp.getUi().alert(
    'Đã tạo tab "' + ten + '".\n\n' +
    'STATUS = CHỜ FEEDBACK · dòng LINK ẢNH/ KB còn trống cho thiết kế điền.'
  );
}
