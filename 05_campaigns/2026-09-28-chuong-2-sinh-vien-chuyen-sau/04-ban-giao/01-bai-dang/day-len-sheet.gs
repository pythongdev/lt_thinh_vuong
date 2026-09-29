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
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 5310 2in1 — 8 ảnh",
  "Reels",
  "Reels",
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7420 vỏ carbon — 7 ảnh",
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7390 2in1 16GB — 8 ảnh",
  ""
 ],
 [
  "TUYẾN ND",
  "Giáo dục",
  "Sản phẩm",
  "Giáo dục",
  "Trust SP / Review SP",
  "Sản phẩm",
  "Sản phẩm",
  ""
 ],
 [
  "CONTENT",
  "Tối gọi về nhà: \"Con định mua laptop cũ.\" Đầu dây bên kia im mất mấy giây.\n\nBố mẹ không lo cái máy. Bố mẹ lo chữ \"cũ\". Lo vậy là đúng, nên đừng cãi. Trả lời bằng 3 thứ này:\n\n❓ \"Người ta dùng hỏng rồi mới bán?\"\nĐừng nói bằng miệng. Ra quầy bật máy: mở ảnh trắng kín màn, rồi ảnh đen. Gõ hết một lượt bàn phím. Cắm thử từng cổng. Soi xong mới trả tiền.\n\n❓ \"Hỏng thì ai sửa?\"\nHỏi người bán 4 câu, bắt trả lời bằng số: bảo hành bao lâu, bảo hành những gì, pin bao lâu, đổi máy trong mấy ngày.\nBên mình: máy cũ và likenew bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n❓ \"Sao không mua mới cho chắc?\"\nMua mới cũng được, không sai. Cùng số tiền, máy mới thì chip mới hơn, bảo hành dài hơn. Máy doanh nhân đã qua sử dụng thì RAM với ổ cứng nhiều hơn. Shop mình bán máy cũ nên câu này hơi có lợi cho mình — nghe bớt đi một nửa cũng được.\n\nMười phút đi xem máy cùng nhau đỡ hơn một tiếng cãi nhau qua điện thoại.\n\n👉 Gửi video này cho bố mẹ xem cùng.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #muamaydautien #laptopthinhvuong",
  "Năm nhất chưa sao. Lên năm ba, tài liệu, ảnh chụp bảng, video thuyết trình nhóm dồn lại — ổ bé là ngồi xoá bớt.\n\nChiếc này ổ 512GB.\n\n💻 Dell Latitude 5310 2in1\ni5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ\nMáy cũ, dòng doanh nhân của Dell.\n💰 9.880.000đ\n\nMáy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  "Bàn gấp giảng đường rộng đúng một quyển vở. Máy bạn định mua có đặt vừa không?\n\nMàn to hơn không có nghĩa là tốt hơn. Nó chỉ tốn chỗ hơn.\n\n📐 13 – 13,3 inch: vừa bàn gấp, vừa balo nhỏ. Mở hai cửa sổ cạnh nhau thì chật.\n📐 14 inch: cỡ giữa, vẫn nhét balo đi học được, hai cửa sổ đỡ chật hơn.\n📐 15,6 inch: nhìn bảng biểu rộng nhất. Nhưng chiếm gần hết bàn, balo nhỏ không vừa.\n\nTự hỏi 2 câu: một tuần mang máy ra khỏi phòng mấy buổi, và có hay mở hai cửa sổ cạnh nhau không.\n\nHôm ghé cửa hàng, đeo theo đúng cái balo đang đi học, nhét máy vào kéo khoá thử.\n\n👉 Comment ngành bạn học + một tuần mang máy đi mấy buổi, mình nói nên nhắm cỡ nào.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #kinhnghiemmualaptop #chonlaptop #laptopthinhvuong",
  "Chiếc này mình nói chỗ dở trước: chip đời 8. Cùng tiền, máy mới có chip đời mới hơn.\n\nĐổi lại được gì thì xem hết video rồi tự quyết nhé.\n\n💻 Dell Latitude 7390 2in1\ni5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ\nMáy cũ, dòng doanh nhân của Dell.\n💰 8.290.000đ\n\n✅ Hợp với bạn nếu:\n• Học khối kinh tế, xã hội — Word, Excel, slide, học online\n• Hay mang máy lên giảng đường, thư viện\n• Bàn phòng trọ chật, cần dựng máy chữ A xem bài giảng\n\n❌ Không hợp nếu:\n• Ngành bạn phải cài phần mềm chuyên ngành nặng\n• Bạn cần ổ to để chứa video, phim — máy này ổ 256GB\n• Bạn cần màn to để mở hai cửa sổ cạnh nhau cả ngày\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n⚠️ Bên mình có hai bản 7390 2in1: bản 8GB và bản 16GB. Video này là bản 16GB.\n\n👉 Comment ngành bạn học + số tiền đang có, mình nói chiếc này hợp với bạn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #reviewlaptop #laptopthinhvuong",
  "Bên trái tài liệu, bên phải bài đang gõ. Màn 14 inch mở hai cửa sổ cạnh nhau đỡ chật hơn 13 inch.\n\n💻 Dell Latitude 7420 [vỏ carbon]\ni5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD\nMáy likenew, dòng doanh nhân của Dell.\n💰 9.380.000đ\n\nNói rõ: chiếc này KHÔNG cảm ứng, không xoay gập. Bên mình có bản 7420 2in1 vỏ carbon riêng, giá khác — nhắn tin ghi đúng tên để khỏi nhầm.\n\nMáy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptopthinhvuong",
  "Hôm thứ 5 mình review chiếc này bằng video. Hôm nay là ảnh thật, đủ góc — kể cả chỗ trầy.\n\n💻 Dell Latitude 7390 2in1\ni5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ\nMáy cũ, dòng doanh nhân của Dell.\n💰 8.290.000đ\n\nBên mình có 2 bản 7390 2in1. Chiếc trong ảnh là bản 16GB RAM — nhắn tin nhớ ghi \"16GB\" để khỏi nhầm.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  ""
 ],
 [
  "BRIEF ẢNH",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB1 — 6 cảnh, 38 giây.\n• Quay dọc 9:16 · 1080×1920 · quầy tư vấn 71 Thiên Hiền · máy quay đặt chân máy.\n• Máy: Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB, bật nguồn sẵn, desktop có sẵn 1 file ảnh trắng + 1 file ảnh đen kín màn.\n• Đạo cụ: 2 ghế kê cùng phía bàn · 1 tờ A5 in 3 dòng \"6 tháng bo mạch · màn hình · bàn phím / Pin 3 tháng / 15 ngày đổi máy\" · 1 cáp USB.\n• Voice: nhân viên bán hàng đọc, thu riêng sau khi quay. Phụ đề bắt buộc.\n• ⛔ Không giá · không tên máy trên hình · không quay mặt người · không cảnh người bán chỉ tay · không câu chê bố mẹ.",
  "Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45°, ngang mặt bàn — Máy mở nắp, màn bật hình nền Windows — `LATITUDE 5310 2IN1` / `RAM 16GB · Ổ 512GB` / `13,3 inch cảm ứng`\n2 — Trung · chính diện — Màn bật ảnh trắng kín màn — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Nắp lưng đóng, thấy logo Dell — —\n7 — Cận — Vết xước / mòn thật trên máy — `Vết dùng thật của máy này`\n8 — Trung · chéo — Màn dựng chữ A trên bàn học có vở, bút — —\n\n• Máy không có vết xước → bỏ ảnh 7 và xoá dòng \"Máy đã qua sử dụng nên có vết dùng…\" trong caption.\n• ⛔ Không ảnh stock, không ảnh máy khác cùng dòng · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\" · không bút cảm ứng trong khung · không chữ \"nguyên zin\" (máy Cũ).",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB2 — 6 cảnh, 34 giây.\n• Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền · máy quay đặt chân máy, góc từ trên xuống nghiêng 30°.\n• Máy: Dell Latitude 5310 2in1 i5-10210U 16GB 512GB (13,3 inch) · Dell Latitude 7400 2in1 i7-8665U 16GB 512GB (14 inch) · Dell Latitude 9520 2in1 i5-1145G7 16GB 256GB (15,6 inch).\n• Đạo cụ: 1 quyển vở A4 · 1 balo đi học cỡ thường (loại sinh viên hay đeo, không chọn balo laptop to).\n• Voice: nhân viên đọc, thu riêng. Phụ đề bắt buộc.\n• ⛔ Không giá · không tên máy trên hình · không nói, không ghi cân nặng.",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB4 — 12 cảnh, 56 giây.\n• Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền.\n• Máy: Dell Latitude 7390 2in1 i5-8250U · 16GB · 256GB — không lấy nhầm bản 8GB.\n• Đạo cụ: bàn học dựng chật (~50cm, vở, bút, dây sạc) · 1 quyển vở A4 · tờ A5 bảo hành · 1 cáp sạc, 1 USB · desktop có sẵn file ảnh trắng, ảnh đen, 1 bài giảng video, 1 file Word, 5–6 tab trình duyệt.\n• Voice: nhân viên bán hàng đọc. Phụ đề bắt buộc.\n• ⛔ Không giá trên hình, không đọc giá · không chữ \"FHD\" (tên máy không có) · không \"nguyên zin\" · không \"bản lề chắc\", \"cảm ứng nhạy\", \"pin cả ngày\", \"mượt\" · không bút cảm ứng.",
  "Bộ 7 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45°, ngang mặt bàn — Máy mở nắp, màn bật hình nền Windows — `LATITUDE 7420 VỎ CARBON` / `RAM 16GB · Ổ 256GB` / `14 inch · không cảm ứng`\n2 — Trung · chính diện — Màn mở hai cửa sổ cạnh nhau: PDF bên trái, Word bên phải — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Nắp lưng đóng, thấy vân carbon và logo Dell — —\n7 — Cận — Vết xước / mòn thật trên máy — `Vết dùng thật của máy này`\n\n• Máy không có vết xước → bỏ ảnh 7 và xoá dòng \"Máy đã qua sử dụng nên có vết dùng…\" trong caption.\n• ⛔ Không chụp thế xoay gập, không tay chạm màn · không lấy nhầm bản 7420 2in1 vỏ carbon (10.980.000đ) · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\" · không ảnh stock.",
  "Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc đã quay video thứ 5.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45°, ngang mặt bàn — Máy mở nắp, màn bật hình nền Windows — `LATITUDE 7390 2IN1` / `RAM 16GB · Ổ 256GB` / `13,3 inch cảm ứng`\n2 — Trung · chính diện — Màn bật ảnh trắng kín màn — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Nắp lưng đóng, thấy logo Dell — —\n7 — Cận — Vết xước / mòn thật trên máy — `Vết dùng thật của máy này`\n8 — Trung · chéo — Màn gập phẳng 360° đặt trên bàn học — —\n\n• Máy không có vết xước → bỏ ảnh 7 và đổi câu mở caption thành \"Hôm nay là ảnh thật, đủ góc.\"\n• ⛔ Không chữ \"FHD\" (tên máy không có) · không lấy nhầm bản 8GB · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\" · không \"nguyên zin\" (máy Cũ) · không bút cảm ứng.",
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
  "Post caption",
  ""
 ],
 [
  "STATUS",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
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
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 5300 2in1 (bản 256GB + bản 512GB) — 8 ảnh",
  "",
  ""
 ],
 [
  "TUYẾN ND",
  "Giáo dục",
  "Giáo dục",
  "Trust thương hiệu",
  "Sản phẩm",
  "Sản phẩm",
  "",
  ""
 ],
 [
  "CONTENT",
  "Chọn được máy rồi. Giờ tới phần khó hơn: gọi điện xin bố mẹ.\n\n\"Con định mua laptop cũ.\" Vừa nói xong là nghe ba câu này. Cả ba đều hỏi đúng, nên đừng gạt đi.\n\n❓ \"Người ta dùng hỏng rồi mới bán, con mua về làm gì?\"\n\nCâu này cãi bằng miệng không được. Đổi sang thứ soi được:\n• Bật máy, xem cấu hình thật.\n• Mở ảnh trắng kín màn, rồi ảnh đen kín màn — soi màn hình.\n• Gõ hết một lượt bàn phím.\n• Cắm thử từng cổng.\nLàm ngay tại quầy, soi xong thấy ổn mới trả tiền.\n\n❓ \"Hỏng thì ai sửa? Mua mới còn có bảo hành, cũ thì ai lo?\"\n\nHỏi người bán đúng 4 câu, bắt họ trả lời bằng số:\n• Bảo hành bao lâu?\n• Bảo hành những bộ phận nào?\n• Pin bảo hành riêng bao lâu?\n• Đổi máy trong mấy ngày?\n\nBên mình trả lời luôn: máy cũ và likenew bảo hành 6 tháng cho bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows thì miễn phí trọn đời.\n\nChỗ nào trả lời vòng vo 4 câu này mới đáng lo, chứ không phải chữ \"cũ\".\n\n❓ \"Sao không mua mới cho chắc?\"\n\nMua mới cũng được, không sai. Có điều cùng một số tiền:\n• Máy mới: chip đời mới hơn, bảo hành dài hơn.\n• Máy doanh nhân đã qua sử dụng: thường RAM nhiều hơn, ổ cứng to hơn.\nBạn học gì, ngày nào cũng dùng máy làm gì thì chọn theo cái đó.\n\nShop mình bán máy cũ nên câu trên hơi có lợi cho mình đấy — bạn với bố mẹ nghe bớt đi một nửa cũng được.\n\nCách nhanh nhất để bố mẹ yên tâm: đi xem máy cùng nhau. Nhìn thấy cửa hàng, tự tay bật máy, hỏi thẳng người bán. Mười phút ở đó đỡ hơn một tiếng cãi nhau qua điện thoại.\n\n👉 Gửi bài này cho bố mẹ, hoặc lưu lại để hôm gọi về nhà có cái mở ra.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #muamaydautien #laptopthinhvuong",
  "Bàn gấp trong giảng đường rộng đúng một quyển vở. Bạn đo cái máy định mua chưa?\n\nMàn to hơn không có nghĩa là tốt hơn. Nó chỉ tốn chỗ hơn.\n\n📐 13 – 13,3 INCH\nĐặt vừa bàn gấp giảng đường, bỏ vừa balo nhỏ.\nChỗ dở: cùng độ phân giải Full HD thì chữ, bảng biểu nhỏ hơn. Mở hai cửa sổ cạnh nhau — bên này tài liệu, bên kia bài đang gõ — là chật.\nHợp với ai: cả ngày chạy giữa giảng đường với thư viện, chủ yếu gõ bài và đọc.\n\n📐 14 INCH\nCỡ ở giữa, cũng là cỡ hay gặp nhất ở dòng máy doanh nhân.\nVẫn bỏ balo đi học hằng ngày được, mở hai cửa sổ cạnh nhau đỡ chật hơn 13 inch.\nHợp với ai: đa số các bạn — khối kinh tế, làm slide, Excel nhiều sheet.\n\n📐 15,6 INCH\nNhìn bảng biểu, làm slide rộng nhất trong ba cỡ.\nChỗ dở: chiếm gần hết mặt bàn, không phải balo nào cũng bỏ vừa.\nHợp với ai: học ở phòng trọ là chính, một tuần mang máy đi vài buổi.\n\nTự hỏi mình 2 câu là ra:\n\n1️⃣ Một tuần mang máy ra khỏi phòng mấy buổi?\nNhiều buổi → 13 hoặc 14 inch. Ít buổi → 15,6 inch cũng không sao.\n\n2️⃣ Có hay mở hai cửa sổ cạnh nhau không?\nCó → đừng xuống 13 inch. Không → 13 inch gọn hơn hẳn.\n\nShop mình có cả ba cỡ, nên bài này không lái bạn về cỡ nào. Mua nhầm cỡ là máy nằm ở phòng trọ, không đi học cùng bạn.\n\nHôm ghé cửa hàng, đeo theo đúng cái balo đang đi học. Cho máy vào, kéo khoá thử. Cái này nhìn ảnh không đoán được.\n\n👉 Comment ngành bạn học + một tuần mang máy đi mấy buổi, mình nói nên nhắm cỡ nào.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #kinhnghiemmualaptop #chonlaptop #laptopthinhvuong",
  "Máy tự tắt đúng tuần thi. Việc đầu tiên không phải lên nhóm lớp hỏi — mà là biết máy mình còn được bảo hành cái gì.\n\nMáy cũ và likenew bên mình:\n✅ 6 tháng cho bo mạch, màn hình, bàn phím\n✅ Pin 3 tháng — pin là đồ hao mòn nên ngắn hơn\n✅ Trong 15 ngày đổi sang máy khác miễn phí\n✅ Vệ sinh máy, tra keo tản nhiệt, cài Windows, cài phần mềm — miễn phí trọn đời\n\nKhông bảo hành — nói trước cho rõ:\n❌ Vào nước\n❌ Rơi vỡ, va đập\n❌ Điểm chết trên màn hình\n❌ Đã mang đi sửa chỗ khác, hoặc tự sửa trong BIOS\n❌ Có lỗi mà không báo trong vòng 30 ngày\n\nThấy máy lạ là gọi luôn số kỹ thuật: 0825998855 (8h–17h30). Đừng để dồn tới cuối kỳ.\n\n👉 Lưu bài này lại. Mua máy ở đâu cũng hỏi đúng mấy dòng này.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #baohanhlaptop #laptopthinhvuong",
  "Ví có đúng 9 triệu rưỡi — tiền làm thêm cả hè cộng bố mẹ gửi thêm. Mua được gì?\n\nNói trước chỗ thiệt: dưới 10 triệu thì chip đời cũ hơn, ổ cứng bé hơn. Còn RAM vẫn giữ được 16GB — học Meet, mở Word, chục tab tài liệu cùng lúc.\n\nBa chiếc bên mình đang bán ở tầm này, kèm chỗ dở của từng chiếc:\n\n🔹 Dell Latitude 7390 2in1 — 8.290.000đ\ni5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ\nÍt tiền nhất trong ba chiếc.\nChỗ dở: chip đời cũ nhất trong ba chiếc, ổ 256GB.\n\n🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ\ni5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD\nChip đời mới nhất, màn 14 inch rộng nhất trong ba chiếc.\nChỗ dở: KHÔNG cảm ứng, không xoay gập. Ổ vẫn 256GB.\n\n🔹 Dell Latitude 5310 2in1 — 9.880.000đ\ni5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ\nỔ to nhất, gấp đôi hai chiếc kia.\nChỗ dở: đắt nhất trong ba chiếc, màn 13,3 inch mở hai cửa sổ cạnh nhau hơi chật.\n\nChọn nhanh:\n• Muốn giữ lại nhiều tiền nhất → chiếc 8.290.000đ\n• Muốn chip mới, màn rộng → chiếc 9.380.000đ\n• Lười dọn file → chiếc 9.880.000đ\n\nCả ba là máy đã qua sử dụng, dòng doanh nhân của Dell. Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh, tra keo tản nhiệt, cài Windows miễn phí trọn đời.\n\nNói thêm: dưới 10 triệu thì đừng nhắm máy 15,6 inch có card đồ hoạ rời. Nhóm đó ở tầm tiền cao hơn, và cũng không làm ra để mang lên giảng đường mỗi ngày.\n\n👉 Comment số tiền đang có + ngành học, mình gợi ý chiếc nào trong ba chiếc.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong",
  "Hai chiếc giống hệt nhau. Cùng chip i7, cùng 16GB RAM. Khác đúng cái ổ.\n\n💻 Dell Latitude 5300 2in1\ni7-8665U · RAM 16GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ\nMáy cũ, dòng doanh nhân của Dell.\n💰 Bản ổ 256GB: 8.980.000đ\n💰 Bản ổ 512GB: 9.690.000đ\n\nTài liệu để hết trên Drive → bản 256GB là đủ.\nHay quay dựng video bài nhóm, tải phim về xem → nghĩ tới bản 512GB.\n\nBên mình chưa kiểm khe cắm ổ từng máy, nên không hứa sau này nâng ổ lên được.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  "",
  ""
 ],
 [
  "BRIEF ẢNH",
  "1 ảnh · 1:1 · 1080×1080px · dưới 1MB · chụp tại quầy tư vấn 71 Thiên Hiền.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Toàn · chéo 45°, ngang tầm mắt người ngồi — Hai ghế trống kê cùng phía bàn, laptop mở nắp giữa bàn, màn đang bật; kệ máy phía sau để mờ — `BỐ MẸ LO CHỮ \"CŨ\"` / `3 câu hay hỏi` / `và cách trả lời`\n\n• Chữ đặt ở hai phần ba trên của ảnh. Logo Thịnh Vượng góc trái trên.\n• ⛔ Không người trong khung · không giá · không tên máy · không giá dán trên kệ lọt khung · không \"ưu đãi\", \"giảm giá\".",
  "1 ảnh · 1:1 · 1080×1080px · dưới 1MB · chụp tại 71 Thiên Hiền · nền trung tính, đủ sáng.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Toàn · từ trên xuống, nghiêng 30° — Ba máy mở nắp xếp cạnh nhau từ nhỏ đến to: Latitude 5310 2in1 (13,3 inch) · Latitude 7400 2in1 i7 (14 inch) · Latitude 9520 2in1 (15,6 inch); một quyển vở A4 đặt sát máy 13,3 inch — `13 · 14 · 15,6 INCH` / `Cỡ nào mang đi học được?` / `Đo bằng cái balo của bạn`\n\n• Ba máy cùng khung, cùng khoảng cách ống kính, không ghép ảnh. Logo Thịnh Vượng góc trái trên.\n• ⛔ Không giá · không tên máy trên ảnh · không cân nặng · không \"ưu đãi\", \"giảm giá\", \"số lượng có hạn\".",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB3 — 9 cảnh, 42 giây.\n• Quay dọc 9:16 · 1080×1920 · cảnh 1 ở bàn học dựng tại shop, cảnh 2–9 ở quầy 71 Thiên Hiền.\n• Máy: bất kỳ máy nào trong danh sách 36 (không lên tên, không lên giá).\n• Đạo cụ: tờ A5 in \"6 tháng bo mạch · màn hình · bàn phím / Pin 3 tháng\" · cốc nước · tua vít · điện thoại mở sẵn màn quay số 0825998855 · vở, bút, dây sạc cho cảnh bàn học.\n• Voice: nhân viên kỹ thuật hoặc bán hàng đọc. Phụ đề bắt buộc.\n• ⛔ Không đổ nước lên máy · không dùng máy vỡ thật hay đập máy · không dựng điểm chết giả · không gọi cảnh là \"quy trình test\" · không nói \"bảo hành 12 tháng\", \"1 đổi 1\", \"hoàn tiền 100%\".",
  "3 ảnh · 1:1 · 1080×1080px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · cùng một nền trung tính cho cả bộ · máy chiếm khoảng 60% khung · logo Thịnh Vượng góc trái trên mọi ảnh.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45° — Latitude 7390 2in1 16GB mở nắp, màn bật — `LATITUDE 7390 2IN1` / `RAM 16GB · Ổ 256GB · 13,3 inch` / `Ít tiền nhất trong 3 máy`\n2 — Trung · chéo 45° — Latitude 7420 vỏ carbon mở nắp thường, màn bật — `LATITUDE 7420 VỎ CARBON` / `RAM 16GB · Ổ 256GB · 14 inch` / `Chip đời mới nhất trong 3 máy`\n3 — Trung · chéo 45° — Latitude 5310 2in1 mở nắp, màn bật — `LATITUDE 5310 2IN1` / `RAM 16GB · Ổ 512GB · 13,3 inch` / `Ổ to nhất trong 3 máy`\n\n• Thứ tự ảnh đúng thứ tự trong caption.\n• ⛔ Ảnh 2 không chụp thế xoay gập, không tay chạm màn (tên máy không có cảm ứng) · không giá trên ảnh · không \"còn X máy\", \"sắp hết\", \"giảm giá\", \"ưu đãi\".",
  "Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · dán giấy nhớ \"256\" / \"512\" dưới đáy từng máy để khỏi lẫn khi chụp (không lọt khung).\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chính diện — Hai máy mở nắp đặt sát nhau cùng khung, màn bật — `LATITUDE 5300 2IN1` / `256GB — 512GB` / `Cùng máy · khác ổ`\n2 — Trung · chính diện — Bản 256GB: màn bật ảnh trắng kín màn — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad bản 256GB — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Hai nắp lưng đóng đặt cạnh nhau, thấy logo Dell — —\n7 — Cận — Vết xước / mòn thật — mỗi máy 1 ảnh nếu có (7a · 7b) — `Vết dùng thật của máy này`\n8 — Trung · chéo — Bản 512GB dựng chữ A trên bàn học có vở, bút — —\n\n• Máy nào không có vết xước → bỏ ảnh 7 của máy đó.\n• ⛔ Không chụp cửa sổ dung lượng ổ còn trống · không hứa nâng ổ · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\" · không chữ \"nguyên zin\" (máy Cũ) · không bút cảm ứng.",
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
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 9410 2in1 i7 512GB — 7 ảnh",
  "Reels",
  "Reels",
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Inspiron 7415 2in1 — 8 ảnh",
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7400 2in1 i5 16GB 256GB — 8 ảnh",
  ""
 ],
 [
  "TUYẾN ND",
  "Sản phẩm",
  "Sản phẩm",
  "Sản phẩm",
  "Trust SP / Review SP",
  "Sản phẩm",
  "Sản phẩm",
  ""
 ],
 [
  "CONTENT",
  "Ví có đúng 9 triệu rưỡi. Nhiều bạn nghĩ tầm này là phải chịu RAM 8GB.\n\nThiệt chỗ nào nói trước: chip đời cũ hơn, ổ bé hơn. Còn RAM vẫn 16GB.\n\n🔹 Dell Latitude 7390 2in1 — 8.290.000đ\ni5-8250U · RAM 16GB · ổ 256GB · 13,3 inch cảm ứng, xoay gập\nChỗ dở: chip đời cũ nhất trong ba chiếc, ổ 256GB.\n\n🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ\ni5-1145G7 · RAM 16GB · ổ 256GB · 14 inch FHD\nChỗ dở: KHÔNG cảm ứng, không xoay gập.\n\n🔹 Dell Latitude 5310 2in1 — 9.880.000đ\ni5-10210U · RAM 16GB · ổ 512GB · 13,3 inch FHD cảm ứng, xoay gập\nChỗ dở: đắt nhất trong ba chiếc.\n\nCả ba là máy đã qua sử dụng. Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Comment số tiền đang có + ngành học, mình gợi ý chiếc nào.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong",
  "File bài tập nặng, ảnh chụp mô hình, video thuyết trình — ổ bé là tuần nào cũng phải ngồi dọn.\n\n💻 Dell Latitude 9410 2in1\ni7-10610U · RAM 16GB · ổ 512GB · màn 14 inch FHD\nMáy likenew, dòng doanh nhân của Dell.\n💰 13.680.000đ\n\nBên mình có 3 bản 9410 2in1 (i5 256GB · i7 256GB · i7 512GB). Chiếc trong ảnh là bản i7 512GB — nhắn tin nhớ ghi đủ để khỏi nhầm giá.\n\nTên máy trên web không ghi cảm ứng, nên mình không hứa cảm ứng và bộ ảnh này không chụp chạm màn.\n\nMáy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptopthinhvuong",
  "Hai chiếc trong video giống hệt nhau. Cùng chip, cùng 16GB RAM. Khác đúng cái ổ.\n\nDell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập\nBản ổ 256GB: 8.980.000đ\nBản ổ 512GB: 9.690.000đ\n→ chênh 710.000đ\n\n❌ ĐỪNG THÊM TIỀN NẾU\n• Tài liệu để trên Drive, máy chỉ giữ bài đang làm.\n• Học khối kinh tế, văn phòng — Word, Excel, slide, học online.\n• Ảnh, video để trong điện thoại.\n\n✅ NÊN THÊM NẾU\n• Ngành phải cài phần mềm nặng.\n• Hay dựng video bài nhóm.\n• Hay tải phim, khoá học về xem offline.\n\n700 nghìn là mấy tuần tiền ăn. Nếu không dồn vào ổ, nó mua được gì cho việc học?\n\nBên mình chưa kiểm khe cắm ổ từng máy, nên không hứa sau này nâng ổ lên được.\n\n👉 Comment ngành bạn học, mình nói nên lấy bản 256GB hay 512GB.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong",
  "Chiếc này nói trước: không cảm ứng, không xoay gập. Ai cần ghi chú bằng tay trên màn thì lướt qua được rồi.\n\nCòn lại thì xem nó có gì.\n\n💻 Dell Latitude 7420 [vỏ carbon]\ni5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD\nMáy likenew, dòng doanh nhân của Dell.\n💰 9.380.000đ\n\n✅ Hợp với bạn nếu:\n• Muốn chip đời 11 mà ví dưới 10 triệu\n• Hay mở hai cửa sổ cạnh nhau — tài liệu một bên, bài gõ một bên\n• Học văn phòng, kinh tế, không cần cảm ứng\n\n❌ Không hợp nếu:\n• Cần viết, vẽ, ghi chú trên màn\n• Cần ổ to — máy này ổ 256GB\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n⚠️ Bên mình có cả bản 7420 2in1 vỏ carbon, giá khác. Video này là bản thường, không 2in1.\n\n👉 Comment ngành bạn học + số tiền đang có, mình nói chiếc này hợp với bạn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #reviewlaptop #laptopthinhvuong",
  "Làm slide thuyết trình nhóm, bốn đứa chụm đầu vào một cái màn. Gập ngược màn ra sau, cả nhóm cùng xem.\n\n💻 Dell Inspiron 7415 2in1\nRyzen 7-5700U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ\nMáy likenew.\n💰 11.280.000đ\n\nMáy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #dellinspiron #laptop2in1 #laptopthinhvuong",
  "Thích chiếc 7400 2in1 hôm thứ 3 mà ví thiếu 1,4 triệu? Có bản này.\n\nCùng thân máy xoay gập, cùng màn 14 inch cảm ứng, cùng 16GB RAM. Khác chip và ổ.\n\n💻 Dell Latitude 7400 2in1\ni5-8365U · RAM 16GB · ổ 256GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ\nMáy likenew, dòng doanh nhân của Dell.\n💰 9.280.000đ\n\nBản i7 · 16GB · 512GB: 10.680.000đ. Chênh 1.400.000đ — đổi lại chip i5 và ổ 256GB.\n\nBên mình có 3 bản 7400 2in1. Nhắn tin nhớ ghi \"i5 16GB 256GB\" để khỏi nhầm.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  ""
 ],
 [
  "BRIEF ẢNH",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB5 — 6 cảnh, 37 giây. Video so sánh (loại D) — giá được hiện thành chữ trên màn.\n• Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền · ba máy cùng một mặt bàn.\n• Máy: Latitude 7390 2in1 i5-8250U 16GB 256GB · Latitude 7420 vỏ carbon i5-1145G7 16GB 256GB (bản thường) · Latitude 5310 2in1 i5-10210U 16GB 512GB.\n• Sáng ngày quay: gọi 0928939666 xác minh 3 giá + máy còn hay hết. Không đăng lại video sau hạn dùng ghi ở dòng tiêu đề.\n• Voice: nhân viên bán hàng đọc, không đọc giá. Phụ đề bắt buộc.\n• ⛔ Không xoay gập / chạm màn chiếc 7420 · không \"còn hàng\", \"giá tốt nhất\" · không ghép ảnh máy trên mạng.",
  "Bộ 7 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45°, ngang mặt bàn — Máy mở nắp, màn bật hình nền Windows — `LATITUDE 9410 2IN1` / `i7 · RAM 16GB · Ổ 512GB` / `14 inch`\n2 — Trung · chính diện — Màn bật ảnh trắng kín màn — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Nắp lưng đóng, thấy logo Dell — —\n7 — Cận — Vết xước / mòn thật trên máy — `Vết dùng thật của máy này`\n\n• Máy không có vết xước → bỏ ảnh 7 và xoá dòng \"Máy đã qua sử dụng nên có vết dùng…\" trong caption.\n• ⛔ Không chụp thế xoay gập, không tay chạm màn · không lấy nhầm bản i5 hay bản i7 256GB · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\" · không ảnh stock.",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB6 — 6 cảnh, 35 giây. Video so sánh hai máy (loại D) — giá được hiện thành chữ trên màn.\n• Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền · máy quay đặt chân máy, không đổi góc suốt video.\n• Máy: hai chiếc Dell Latitude 5300 2in1 i7-8665U 16GB — bản 256GB và bản 512GB.\n• Đạo cụ: mẩu giấy trắng viết tay \"700.000đ\" · desktop bản 256GB mở sẵn thư mục Google Drive, bản 512GB mở sẵn thư mục video.\n• Sáng ngày quay: gọi 0928939666 xác minh cả 2 giá. Không đăng lại video sau hạn dùng ghi ở dòng tiêu đề.\n• ⛔ Không hứa nâng ổ · không \"còn hàng\" · không nói bản 512GB đáng mua hơn.",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB8 — 12 cảnh, 55 giây.\n• Quay dọc 9:16 · 1080×1920 · tại 71 Thiên Hiền.\n• Máy: Dell Latitude 7420 [vỏ carbon] i5-1145G7 · 16GB · 256GB — bản thường, không lấy nhầm bản 2in1 (10.980.000đ).\n• Đạo cụ: 1 quyển vở A4 · tờ A5 bảo hành · 1 cáp sạc, 1 USB · desktop có sẵn 1 file PDF, 1 file Word, file ảnh trắng, ảnh đen.\n• Voice: nhân viên bán hàng đọc. Phụ đề bắt buộc.\n• ⛔ Không giá trên hình, không đọc giá · ngón tay không chạm màn, không xoay màn quá 180° · không \"mượt\", \"pin cả ngày\", \"nhẹ\".",
  "Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45°, ngang mặt bàn — Máy mở nắp, màn bật hình nền Windows — `INSPIRON 7415 2IN1` / `RAM 16GB · Ổ 512GB` / `14 inch cảm ứng`\n2 — Trung · chính diện — Màn bật ảnh trắng kín màn — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Nắp lưng đóng, thấy logo Dell — —\n7 — Cận — Vết xước / mòn thật trên máy — `Vết dùng thật của máy này`\n8 — Trung · ngang tầm mắt — Màn gập ngược dựng chữ A, màn mở một slide, 3 bàn tay đặt quanh mép bàn (không thấy mặt) — —\n\n• Máy không có vết xước → bỏ ảnh 7 và xoá dòng \"Máy đã qua sử dụng nên có vết dùng…\" trong caption.\n• ⛔ Không viết \"dòng doanh nhân\" (Inspiron không phải dòng Latitude) · không bút cảm ứng · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\" · không mặt người chưa xin phép.",
  "Bộ 8 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45°, ngang mặt bàn — Máy mở nắp, màn bật hình nền Windows — `LATITUDE 7400 2IN1` / `i5 · RAM 16GB · Ổ 256GB` / `14 inch cảm ứng`\n2 — Trung · chính diện — Màn bật ảnh trắng kín màn — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Nắp lưng đóng, thấy logo Dell — —\n7 — Cận — Vết xước / mòn thật trên máy — `Vết dùng thật của máy này`\n8 — Trung · từ trên xuống — Máy gập phẳng 360°, màn mở một file PDF — —\n\n• Máy không có vết xước → bỏ ảnh 7.\n• ⚠️ Tag web của máy này ghi ổ 512GB — sai so với tên. Viết theo tên: 256GB (luật #13). Trước khi chụp mở `This PC` kiểm ổ; thấy 512GB thì dừng, báo người viết.\n• ⛔ Không lấy nhầm bản i5 8GB hay bản i7 · không bút cảm ứng · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\".",
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
  "Post caption",
  ""
 ],
 [
  "STATUS",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
  "CHỜ FEEDBACK",
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
  "Bộ ảnh — Bộ hình ảnh sản phẩm Dell Latitude 7420 vỏ nhôm — 7 ảnh",
  "",
  ""
 ],
 [
  "TUYẾN ND",
  "Sản phẩm",
  "Trust SP / Review SP",
  "Trust thương hiệu",
  "Trust SP / Review SP",
  "Sản phẩm",
  "",
  ""
 ],
 [
  "CONTENT",
  "700 nghìn là mấy tuần tiền ăn đấy. Bỏ ra để ổ to gấp đôi thì có đáng không?\n\nCùng một chiếc máy, cùng chip, cùng 16GB RAM — bản ổ 512GB đắt hơn bản 256GB khoảng 700 nghìn. Hai cặp đang bán bên mình:\n\n🔹 Dell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập\nBản ổ 256GB: 8.980.000đ\nBản ổ 512GB: 9.690.000đ\n→ chênh 710.000đ\n\n🔹 Dell Latitude 9410 2in1 — i7-10610U · 16GB · màn 14 inch FHD\nBản ổ 256GB: 12.980.000đ\nBản ổ 512GB: 13.680.000đ\n→ chênh 700.000đ\n\nHai tầm tiền cách nhau 4 triệu mà cùng chênh khoảng 700 nghìn.\n\nNói trường hợp không đáng trước nhé.\n\n❌ 256GB LÀ ĐỦ, ĐỪNG THÊM TIỀN NẾU:\n• Tài liệu để trên Google Drive, OneDrive — máy chỉ giữ bài đang làm.\n• Học khối kinh tế, văn phòng — chủ yếu Word, Excel, PowerPoint, học online.\n• Ảnh, video để trong điện thoại, không đổ vào máy.\n• Có sẵn ổ cứng rời, hoặc định mua một cái sau.\n\n✅ NÊN THÊM 700 NGHÌN NẾU:\n• Ngành phải cài phần mềm chuyên ngành nặng — kỹ thuật, kiến trúc, thiết kế, dựng phim.\n• Hay quay dựng video, kể cả video thuyết trình nhóm.\n• Hay tải phim, tải khoá học về xem offline.\n• Biết tính mình lười dọn file, nhìn thanh dung lượng đỏ là khó chịu.\n\nỔ chật không làm hỏng máy. Nó làm bạn mệt: cài thêm một thứ là phải xoá một thứ.\n\nĐừng nghĩ \"thêm 700 nghìn được thêm 256GB\". Nghĩ xem 700 nghìn đó, nếu không dồn vào ổ, mua được gì cho việc học. Mỗi người một đáp án.\n\nBên mình chưa kiểm khe cắm ổ từng máy, nên không hứa sau này nâng ổ lên được. Ổ chọn hôm nay là ổ bạn dùng luôn.\n\nCả bốn máy là máy đã qua sử dụng. Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Comment ngành bạn học, mình nói nên lấy bản 256GB hay 512GB.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong",
  "Tối trước hôm đi xem máy, lưu bài này lại. Ba điều về chiếc Latitude 7400 2in1 — có một chỗ dở và một thứ bảo hành không lo.\n\nDELL LATITUDE 7400 2IN1\ni7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ\nMáy likenew, dòng doanh nhân của Dell.\nGiá 10.680.000đ\n\n1️⃣ CHỖ DỞ: ĐỜI CHIP\n\nChip chiếc này đời cũ hơn mấy máy xoay gập khác bên mình ở tầm 11–15 triệu. Đổi lại, ở tầm 10 triệu bạn có RAM 16GB với ổ 512GB.\n\nNgành phải chạy phần mềm nặng, hoặc muốn chip đời mới nhất trong tầm tiền → chiếc này không phải chiếc của bạn.\n\nCòn ngày nào cũng Word, Excel, slide, học online, mở chục tab → RAM với ổ là thứ bạn đụng tới hằng ngày, đời chip thì ít hơn.\n\n2️⃣ XOAY GẬP: CÓ NGƯỜI CẦN, CÓ NGƯỜI KHÔNG\n\nMàn lật hẳn 360 độ ra sau. Ba lúc dùng tới:\n• Ngồi giảng đường, gập phẳng đặt lên đùi đọc tài liệu, lật trang bằng ngón tay.\n• Bàn thư viện, quán cà phê chật — dựng chữ A xem bài giảng, họp nhóm online.\n• Bảng Excel to — zoom bằng hai ngón như điện thoại.\n\nChỉ gõ bài, chưa bao giờ thấy thiếu cảm ứng? Thì đừng chọn máy này vì xoay gập. Chọn vì RAM và ổ.\n\nHay ghi chú, vẽ sơ đồ thì ra ngồi thử. Máy không kèm bút, bạn dùng ngón tay.\n\n3️⃣ ĐIỂM CHẾT MÀN HÌNH: KHÔNG BẢO HÀNH\n\nBảo hành bên mình: bo mạch, màn hình, bàn phím 6 tháng. Pin 3 tháng.\nNhưng điểm chết trên màn thì không nằm trong bảo hành.\n\nNên soi ngay tại quầy, trước khi trả tiền. Mất 20 giây:\n• Mở ảnh trắng kín màn, rồi ảnh đen kín màn. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.\n• Xoay màn chậm hết 360 độ, nghe có tiếng lạ không. Thả tay giữa chừng xem màn có tự trôi xuống không.\n• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem chỗ nào không ăn.\n\nSoi ở cửa hàng nào cũng được, bên mình cũng vậy. Cứ soi kỹ, không ai giục. Về nhà đổi ý thì còn 15 ngày đổi sang máy khác miễn phí.\n\nĐI KÈM MÁY\n• Bảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng.\n• 15 ngày đổi sang máy khác miễn phí.\n• Vệ sinh máy, tra keo tản nhiệt, cài Windows, cài phần mềm — miễn phí trọn đời.\n• Giao hàng toàn quốc 3–5 ngày làm việc, nhận máy được kiểm tra.\n\n⚠️ Bên mình có 3 bản 7400 2in1. Chiếc này là bản i7 · 16GB · 512GB.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  "Đêm trước hạn nộp bài, Windows báo lỗi, máy không vào được. Chuyện này không hiếm đâu.\n\nMáy mua ở bên mình thì ba việc này miễn phí trọn đời:\n🔧 Cài lại Windows, cài phần mềm\n🔧 Vệ sinh máy\n🔧 Tra keo tản nhiệt\n\nCần thì gọi số kỹ thuật trước: 0825998855 (8h–17h30).\n\nNói rõ để khỏi hiểu nhầm: đây là dịch vụ kèm theo máy, không phải bảo hành. Bảo hành máy cũ và likenew vẫn là 6 tháng bo mạch, màn hình, bàn phím; pin 3 tháng.\n\n👉 Lưu bài này lại để lúc cần có số gọi.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #caiwin #vesinhlaptop #laptopthinhvuong",
  "Màn hình có bảo hành. Nhưng điểm chết trên màn thì không — chính sách bên mình ghi rõ.\n\nNên trước khi trả tiền, tự soi. Mất 20 giây:\n\nMở một ảnh trắng kín màn. Rồi một ảnh đen kín màn. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.\n\nMáy xoay gập thì soi thêm hai thứ:\n• Xoay màn chậm hết 360 độ, nghe có tiếng lạ không. Thả tay giữa chừng — màn phải đứng yên.\n• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem chỗ nào không ăn.\n\nChiếc trong video: Dell Latitude 7400 2in1 — 10.680.000đ\ni7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ. Máy likenew, dòng doanh nhân của Dell.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\nSoi ở cửa hàng nào cũng được, bên mình cũng vậy. Cứ soi kỹ, không ai giục.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  "Không cần cảm ứng, không cần xoay gập. Chỉ cần chip đời mới, RAM 16GB, ổ 512GB để khỏi ngồi dọn file.\n\n💻 Dell Latitude 7420 [vỏ nhôm]\ni7-1185G7 · RAM 16GB · ổ 512GB · màn 14 inch FHD\nMáy likenew, dòng doanh nhân của Dell.\n💰 12.980.000đ\n\nChiếc này KHÔNG cảm ứng, không xoay gập — bộ ảnh chụp đúng thế mở nắp thường.\n\nMáy đã qua sử dụng nên có vết dùng — ảnh 7 chụp đúng chỗ đó.\n\nBảo hành 6 tháng bo mạch, màn hình, bàn phím. Pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Nhắn tin để shop kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptopthinhvuong",
  "",
  ""
 ],
 [
  "BRIEF ẢNH",
  "2 ảnh · 1:1 · 1080×1080px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · cùng một nền trung tính · logo Thịnh Vượng góc trái trên.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chính diện — Hai chiếc Latitude 5300 2in1 (256GB, 512GB) mở nắp đặt sát nhau cùng khung — `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 710.000đ`\n2 — Trung · chính diện, cùng bố cục ảnh 1 — Hai chiếc Latitude 9410 2in1 i7 (256GB, 512GB) mở nắp đặt sát nhau — `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 700.000đ`\n\n• Không xếp được hai máy cùng dòng cạnh nhau → chụp một máy, ghép cạnh ảnh chụp cửa sổ Properties của ổ C bản 256GB và bản 512GB.\n• ⛔ Ảnh 2 không tay chạm màn, không thế xoay gập (tên 9410 không có cảm ứng) · không ghi số dung lượng còn trống · không giá trên ảnh · không \"còn X máy\", \"giảm giá\", \"ưu đãi\".",
  "5 ảnh · 1:1 · 1080×1080px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · logo Thịnh Vượng góc trái trên mọi ảnh · không ảnh stock, không ảnh của hãng.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45° — Máy mở nắp, thấy rõ tình trạng vỏ — `DELL LATITUDE 7400 2IN1` / `RAM 16GB · Ổ 512GB · 14 inch` / `Bảo hành 6 tháng`\n2 — Trung · từ trên xuống — Máy gập phẳng 360° đặt trên đùi hoặc mặt bàn, màn mở một file PDF — `Gập phẳng đọc tài liệu`\n3 — Trung · chéo — Máy dựng chữ A trên mặt bàn hẹp — `Bàn chật vẫn dùng được`\n4 — Trung · chính diện — Màn bật ảnh đen kín màn, phòng đủ sáng để thấy máy đang bật — `Điểm chết KHÔNG được bảo hành` / `Soi tại quầy, 20 giây`\n5 — Cận · từ trên xuống — Bàn phím — —\n\n• Máy có vết xước → thêm ảnh 6 cận vết xước, chữ `Vết dùng thật của máy này`.\n• ⛔ Không bút cảm ứng trong khung · không giá trên ảnh · không \"còn X máy\", \"sắp hết\", \"giảm giá\", \"ưu đãi\".",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB7 — 8 cảnh, 36 giây.\n• Quay dọc 9:16 · 1080×1920 · tại bàn kỹ thuật 71 Thiên Hiền.\n• Máy: một máy trong danh sách 36 đang chờ vệ sinh (không lên tên, không lên giá).\n• Đạo cụ: tua vít · chổi quét bụi · tuýp keo tản nhiệt · USB cài Windows · điện thoại mở sẵn màn quay số 0825998855.\n• Người làm: kỹ thuật viên thật, chỉ quay tay. Voice: kỹ thuật viên hoặc nhân viên bán hàng đọc.\n• ⛔ Không nói máy sẽ mát hơn, nhanh hơn sau khi vệ sinh · không nói thời gian làm xong · không gọi là \"quy trình test\" · không hứa \"sửa miễn phí\", \"bảo hành lỗi phần mềm\".",
  "• Kịch bản 5 cột: `02-reel/KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md` mục KB9 — 6 cảnh, 36 giây.\n• Quay dọc 9:16 · 1080×1920 · quầy 71 Thiên Hiền · tắt bớt đèn trần, quay màn chính diện để tránh vân moiré.\n• Máy: Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB · desktop có sẵn file ảnh trắng, ảnh đen.\n• Voice: nhân viên bán hàng đọc. Phụ đề bắt buộc.\n• ⛔ Không giá trên hình (video không phải loại so sánh) · không dựng máy có điểm chết · không chèn ảnh điểm chết trên mạng · không \"còn hàng\" · không hứa bảo hành điểm chết. Màn sạch thì nói rõ \"màn này sạch\".",
  "Bộ 7 ảnh · 4:5 · 1080×1350px · dưới 1MB mỗi ảnh · chụp tại 71 Thiên Hiền · nền tấm xám nhạt, đèn đều hai bên · logo Thịnh Vượng góc trái trên mọi ảnh · chụp đúng chiếc máy sẽ giao cho khách.\n\nẢnh — Khung · góc — Chụp gì — Chữ trên ảnh\n1 — Trung · chéo 45°, ngang mặt bàn — Máy mở nắp, màn bật hình nền Windows — `LATITUDE 7420 VỎ NHÔM` / `i7 · RAM 16GB · Ổ 512GB` / `14 inch · không cảm ứng`\n2 — Trung · chính diện — Màn bật ảnh trắng kín màn — —\n3 — Cận · từ trên xuống — Bàn phím + touchpad — —\n4 — Cận · ngang — Cạnh trái, thấy rõ các cổng — —\n5 — Cận · ngang — Cạnh phải, thấy rõ các cổng — —\n6 — Trung · chéo — Nắp lưng nhôm đóng, thấy logo Dell — —\n7 — Cận — Vết xước / mòn thật trên máy — `Vết dùng thật của máy này`\n\n• Máy không có vết xước → bỏ ảnh 7 và xoá dòng \"Máy đã qua sử dụng nên có vết dùng…\" trong caption.\n• ⛔ Không chụp thế xoay gập, không tay chạm màn · không lấy nhầm bản vỏ carbon · không giá trên ảnh · không \"còn hàng\", \"còn X máy\", \"giảm giá\", \"ưu đãi\".",
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
