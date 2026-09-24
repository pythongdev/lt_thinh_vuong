/**
 * Đẩy khối bàn giao lên Google Sheet fanpage — đúng lưới của tab đang chạy.
 *
 * Nguồn: BAN-GIAO-TUAN-28-09-04-10.md
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

var TEN_TAB = 'SHEET-TUAN-28-09-04-10 (AI)';

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
  "Reels",
  "Reels",
  "Reels",
  "Reels",
  "",
  ""
 ],
 [
  "TUYẾN ND",
  "Giáo dục",
  "Giáo dục",
  "Sản phẩm",
  "Sản phẩm",
  "Trust SP / Review SP",
  "",
  ""
 ],
 [
  "CONTENT",
  "Bố mẹ không phản đối chiếc máy. Bố mẹ phản đối chữ \"cũ\".\n\nBa câu bố mẹ hay hỏi nhất khi nghe con nói muốn mua laptop cũ — và cả ba đều là câu hỏi đúng, nên đừng gạt đi.\n\n❓ \"Người ta dùng hỏng rồi mới bán?\"\nCâu này không cãi được bằng lời. Nên đừng cãi — đổi sang thứ kiểm được: bật máy xem cấu hình thật, mở ảnh trắng rồi ảnh đen kín màn để soi màn hình, gõ hết một lượt bàn phím, cắm thử từng cổng. Làm ngay tại quầy, trước khi trả tiền.\n\n❓ \"Hỏng thì ai sửa?\"\nĐây là câu quan trọng nhất. Hỏi bốn câu, và bắt người bán nói thành số: bảo hành bao lâu, bảo hành những bộ phận nào, pin được bảo hành riêng bao lâu, đổi trả trong bao nhiêu ngày.\nBên mình trả lời sẵn: máy cũ và likenew bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng; trong 15 ngày đổi sang máy khác miễn phí.\n\n❓ \"Sao không mua mới cho chắc?\"\nMua mới cũng là một lựa chọn đúng. Cùng một số tiền, máy mới cho bạn đời chip mới hơn và bảo hành dài hơn; máy doanh nhân đã qua sử dụng thường cho bạn nhiều RAM và ổ cứng lớn hơn. Bên mình bán máy cũ nên câu này có lợi cho mình — bạn cứ trừ hao mà nghe.\n\nCách gọn nhất để bố mẹ yên tâm: đi cùng nhau đến xem máy. Mười phút ở cửa hàng nói được nhiều hơn một buổi tranh luận ở nhà.\n\n👉 Gửi video này cho bố mẹ xem cùng.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #muamaydautien #laptopthinhvuong",
  "Cái bàn gấp trong giảng đường rộng chừng một quyển vở. Bạn đã tính chuyện đó chưa?\n\nMàn to hơn không phải màn tốt hơn — nó là màn cần nhiều chỗ hơn.\n\n📐 13 – 13,3 inch: đặt vừa bàn gấp giảng đường, bỏ vừa những chiếc balo nhỏ. Đổi lại, xếp hai cửa sổ cạnh nhau để vừa đọc vừa gõ sẽ chật.\n\n📐 14 inch: cỡ ở giữa, và là cỡ phổ biến nhất ở dòng máy doanh nhân. Vẫn bỏ balo đi học hằng ngày, mà hai cửa sổ cạnh nhau thì đỡ chật hơn 13 inch.\n\n📐 15,6 inch: nhìn bảng biểu và làm slide dễ nhất vì có nhiều chỗ nhất. Đổi lại, chiếm nhiều mặt bàn hơn, và không phải chiếc balo nào cũng bỏ vừa.\n\nHai câu tự hỏi là ra: một tuần bạn mang máy ra khỏi nhà mấy buổi, và bạn có hay mở hai cửa sổ cạnh nhau không.\n\nHàng bên mình đang có cả ba cỡ, nên mình không lái bạn về cỡ nào. Chọn sai cỡ thì máy cấu hình tốt cỡ nào bạn cũng để nó ở nhà.\n\nMột mẹo cuối: hôm ghé cửa hàng, mang theo đúng cái balo bạn đang dùng. Thử cho máy vào rồi kéo khoá — chuyện đó không đoán được qua ảnh.\n\n👉 Comment ngành bạn học + một tuần mang máy đi mấy buổi, mình nói nên nhắm cỡ nào.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #kinhnghiemmualaptop #chonlaptop #laptopthinhvuong",
  "Chưa tới 10 triệu. Nhiều bạn nghĩ tầm này là phải chịu RAM 8GB.\n\nNói thẳng trước, kẻo xem hết lại thấy bên mình giấu: hạ ngân sách xuống dưới 10 triệu, thứ bạn phải nhường là ĐỜI CHIP và DUNG LƯỢNG Ổ CỨNG. Thứ bạn giữ được là RAM.\n\n🔹 Dell Latitude 7390 2in1 — 8.290.000đ\ni5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ\nÍt tiền nhất trong ba chiếc mà vẫn đủ 16GB RAM. Điểm yếu: đời chip cũ nhất, ổ 256GB.\n\n🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ\ni5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD\nĐời chip mới nhất và màn rộng nhất. Điểm yếu: chiếc này KHÔNG có màn cảm ứng, không xoay gập được. Ổ vẫn 256GB.\n\n🔹 Dell Latitude 5310 2in1 — 9.880.000đ\ni5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch cảm ứng, xoay gập 360 độ\nỔ cứng lớn nhất — gấp đôi hai chiếc kia. Điểm yếu: đắt nhất trong ba chiếc.\n\nCả ba đều là máy đã qua sử dụng, thuộc dòng doanh nhân của Dell. Bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Comment ngân sách chính xác của bạn + ngành đang học, mình gợi ý chiếc nào trong ba chiếc này.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong",
  "Hai chiếc trong video giống hệt nhau. Cùng con chip, cùng 16GB RAM. Khác đúng một thứ: ổ cứng.\n\nDell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập\nBản ổ 256GB: 8.980.000đ\nBản ổ 512GB: 9.690.000đ\n→ chênh 710.000đ\n\n❌ KHI NÀO 256GB LÀ ĐỦ, ĐỪNG THÊM TIỀN\n• Bạn để tài liệu trên Google Drive hoặc OneDrive, máy chỉ giữ bản đang làm.\n• Bạn học khối kinh tế, văn phòng — chủ yếu Word, Excel, PowerPoint, học online.\n• Ảnh và video bạn để trên điện thoại, không đổ vào máy.\n• Bạn có sẵn một ổ cứng di động, hoặc sẵn sàng mua một cái sau này.\n\n✅ KHI NÀO NÊN THÊM 700 NGHÌN\n• Ngành bạn học phải cài phần mềm chuyên ngành nặng.\n• Bạn quay và dựng video, kể cả chỉ để làm bài tập nhóm.\n• Bạn tải phim, tải khoá học về xem offline.\n• Bạn biết tính mình: không thích dọn file.\n\nVà đây là phần quan trọng nhất: đừng tính là \"thêm 700 nghìn để có thêm 256GB\". Hãy tính xem 700 nghìn đó, nếu không dùng cho ổ cứng, bạn mua được gì cho việc học.\n\nMột điều cần biết trước khi quyết: bên mình chưa kiểm khe cắm ổ cứng của từng máy, nên mình KHÔNG hứa là sau này nâng ổ lên được.\n\n👉 Comment ngành bạn học, mình nói bạn nên lấy bản 256GB hay 512GB.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong",
  "Màn hình thì có bảo hành. Nhưng ĐIỂM CHẾT trên màn thì không — bên mình ghi rõ trong chính sách.\n\nNên trước khi trả tiền, bạn phải tự soi. Mất đúng 20 giây:\n\nMở một ảnh trắng kín màn hình. Rồi mở một ảnh đen kín màn hình. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.\n\nMáy xoay gập thì soi thêm hai thứ:\n• Xoay màn chậm hết một vòng 360 độ, nghe xem có tiếng lạ không. Thả tay ở nửa đường — màn phải đứng yên, trôi xuống là bản lề đã rơ.\n• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem có chỗ nào mất nét không.\n\nChiếc trong video: DELL LATITUDE 7400 2IN1 — 10.680.000đ\ni7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ. Máy likenew, dòng doanh nhân của Dell.\n\nBảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows — miễn phí trọn đời.\n\nSoi cửa hàng nào cũng được. Soi bên mình cũng được. Kiểm kỹ đi, không ai giục bạn đâu.\n\n👉 Nhắn tin mình kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  "",
  ""
 ],
 [
  "BRIEF ẢNH",
  "• Quay dọc 9:16 · 1080×1920 · quay tại quầy tư vấn 71 Thiên Hiền. Thời lượng 38 giây, 6 cảnh.\n• Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB1.\n• Máy quay: một máy bất kỳ trong danh sách 36 máy được viết. Quầy kê hai ghế cùng phía bàn, dựng đúng cảnh phụ huynh đi cùng con.\n• Cảnh chính là cảnh 4 — bốn câu phải hỏi hiện thành chữ trên màn, dành nhiều đất nhất.\n• Voice thật, phụ đề bắt buộc. Ánh sáng đều, không đèn màu, không hiệu ứng chuyển cảnh.\n• ⛔ Không ghi giá · không ghi tên máy lên video · không dựng cảnh người bán chỉ tay thuyết phục · không nói hộ suy nghĩ của bố mẹ theo kiểu chê bai.",
  "• Quay dọc 9:16 · 1080×1920 · quay tại 71 Thiên Hiền. Thời lượng 34 giây, 6 cảnh.\n• Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB2.\n• Máy quay: ba máy cỡ 13,3 inch · 14 inch · 15,6 inch trong danh sách 36 máy, đặt cùng một mặt bàn, cùng khung, cùng khoảng cách ống kính — không ghép hình.\n• Đạo cụ bắt buộc: một quyển vở A4 làm mốc so sánh và một chiếc balo đi học thật để quay cảnh cho máy vào kéo khoá.\n• Voice thật, phụ đề bắt buộc.\n• ⛔ Không ghi giá · không ghi tên máy · không nói và không ghi cân nặng máy (shop chưa cân máy nào — `UNVERIFIED.md` #14).",
  "• Quay dọc 9:16 · 1080×1920 · quay tại 71 Thiên Hiền. Thời lượng 36 giây, 6 cảnh.\n• Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB3.\n• Máy quay: đúng ba máy Dell Latitude 7390 2in1 16GB · Latitude 7420 vỏ carbon · Latitude 5310 2in1, đặt cùng một mặt bàn.\n• Giá chỉ hiện ở chữ trên màn, người nói không đọc giá.\n• ⚠️ Sáng ngày quay gọi 0928939666 xác minh lại cả 3 giá và máy còn hay hết.\n• ⛔ Không quay chiếc 7420 vỏ carbon ở thế gập xoay hay chạm tay lên màn — tên sản phẩm của máy này không có cảm ứng (luật #13).\n• ⛔ Không nói \"còn hàng\" / \"còn mấy máy\" · không nói \"giá tốt nhất\" · không ghép ảnh máy lấy trên mạng.",
  "• Quay dọc 9:16 · 1080×1920 · quay tại 71 Thiên Hiền. Thời lượng 33 giây, 6 cảnh.\n• Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB4.\n• Máy quay: hai chiếc Dell Latitude 5300 2in1 — bản ổ 256GB và bản ổ 512GB — đặt cạnh nhau trong cùng một khung.\n• Điểm mạnh của hình là hai máy trông giống hệt nhau: đừng đổi góc máy quay giữa hai chiếc.\n• Cảnh chính là cảnh 5 — tờ giấy ghi 700.000đ đặt giữa hai máy.\n• ⚠️ Sáng ngày quay gọi 0928939666 xác minh lại cả 2 giá (bài mất lý lẽ nếu khoảng chênh đổi).\n• ⛔ Không hứa nâng ổ cứng về sau · không nói \"còn hàng\" · không nói bản 512GB đáng mua hơn.",
  "• Quay dọc 9:16 · 1080×1920 · quay tại quầy 71 Thiên Hiền. Thời lượng 36 giây, 6 cảnh.\n• Kịch bản đầy đủ 5 cột: `04-ban-giao/02-reel/KICH-BAN-VIDEO-TUAN-28-09-04-10.md` mục KB5.\n• Máy quay: Dell Latitude 7400 2in1 i7-8665U · 16GB · 512GB.\n• Phòng tắt bớt đèn, không để đèn trần hắt lên mặt kính màn. Quay màn chính diện tránh vân moiré.\n• Cảnh 4: sau khi thả tay khỏi màn phải giữ khung đủ 3 giây — cắt sớm là hỏng cảnh chứng minh.\n• ⚠️ Sáng ngày quay gọi 0928939666 xác minh giá và máy còn hay hết.\n• ⛔ Không dàn dựng máy có điểm chết rồi quay · không chèn ảnh điểm chết lấy trên mạng · không nói \"còn hàng\" · không hứa bảo hành điểm chết. Màn sạch thì nói rõ \"màn này sạch\".",
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
  "post",
  "post",
  "post",
  "",
  ""
 ],
 [
  "TUYẾN ND",
  "Giáo dục",
  "Giáo dục",
  "Sản phẩm",
  "Sản phẩm",
  "Trust SP / Review SP",
  "",
  ""
 ],
 [
  "CONTENT",
  "Bạn chốt được máy rồi. Giờ mới đến phần khó: thuyết phục bố mẹ.\n\nBa câu bố mẹ hay hỏi nhất. Cả ba đều là câu hỏi đúng, nên đừng gạt đi — trả lời thẳng thì dễ hơn nhiều.\n\n❓ \"Người ta dùng hỏng rồi mới bán, con mua về làm gì?\"\n\nKhông ai chứng minh được điều ngược lại bằng lời nói. Nên đừng tranh luận — hãy đổi sang chuyện kiểm được:\n\nBật máy lên xem cấu hình thật, mở ảnh trắng rồi ảnh đen kín màn để soi màn hình, gõ thử hết một lượt bàn phím, cắm thử từng cổng. Làm ngay tại quầy, trước khi trả tiền.\n\nMáy tốt thì chịu được soi. Máy không tốt thì lộ ra ở phút thứ ba.\n\n❓ \"Hỏng thì ai sửa? Mua mới có bảo hành chứ cũ thì ai lo?\"\n\nĐây là câu quan trọng nhất, và nó có câu trả lời cụ thể được — nếu bạn hỏi cho đủ.\n\nHỏi bốn câu, và bắt người bán nói thành số:\n• Bảo hành bao lâu?\n• Bảo hành những bộ phận nào?\n• Pin được bảo hành riêng bao lâu?\n• Đổi trả trong bao nhiêu ngày?\n\nBên mình trả lời sẵn: máy cũ và likenew bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng; trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows — miễn phí trọn đời.\n\nChỗ nào trả lời vòng vo bốn câu này thì đó mới là chỗ đáng lo, không phải chữ \"cũ\".\n\n❓ \"Sao không mua mới cho chắc?\"\n\nMua mới cũng là một lựa chọn đúng. Chỉ cần biết mình đang đổi gì lấy gì:\n\nCùng một số tiền, máy mới cho bạn đời chip mới hơn và thời gian bảo hành dài hơn. Máy doanh nhân đã qua sử dụng cùng tầm tiền thường cho bạn nhiều RAM và ổ cứng lớn hơn.\n\nKhông có bên nào thắng hẳn. Có bên nào phù hợp hơn với việc bạn sắp làm hằng ngày thôi.\n\nBên mình bán máy cũ, nên câu trên là câu có lợi cho mình — mình nói trước để bạn cứ trừ hao mà đọc.\n\nCách gọn nhất để bố mẹ yên tâm: đi cùng nhau đến xem máy. Nhìn thấy cửa hàng, bật thử máy, hỏi trực tiếp — mười phút ở đó nói được nhiều hơn một buổi tranh luận ở nhà.\n\n👉 Gửi bài này cho bố mẹ, hoặc lưu lại để hôm nói chuyện có cái mở ra.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopcu #laptopsinhvien #kinhnghiemmualaptop #muamaydautien #laptopthinhvuong",
  "Trước khi so cấu hình, có một thứ quyết định bạn có mang máy đi học thật hay để nó ở nhà: cỡ màn hình.\n\nCái bàn gấp trong giảng đường rộng chừng một quyển vở. Cái bàn trong quán cà phê còn phải chia cho cốc nước. Máy to hơn không phải máy tốt hơn — nó là máy cần nhiều chỗ hơn.\n\nBa cỡ thường gặp, và ai nên chọn cỡ nào:\n\n📐 13 – 13,3 INCH\nĐặt vừa lên bàn gấp trong giảng đường, bỏ vừa những chiếc balo nhỏ.\nĐánh đổi: ở cùng độ phân giải Full HD, màn nhỏ hơn thì chữ và bảng biểu hiện ra nhỏ hơn. Xếp hai cửa sổ cạnh nhau để vừa đọc tài liệu vừa gõ sẽ chật.\nHợp với: bạn di chuyển nhiều, học ở giảng đường và thư viện cả ngày, chủ yếu gõ văn bản và đọc.\n\n📐 14 INCH\nCỡ ở giữa, và là cỡ phổ biến nhất ở dòng máy doanh nhân.\nVẫn bỏ được balo đi học hằng ngày, mà xếp hai cửa sổ cạnh nhau thì đỡ chật hơn 13 inch.\nHợp với: phần lớn các bạn — học khối kinh tế, văn phòng, làm slide, Excel nhiều sheet.\n\n📐 15,6 INCH\nNhìn bảng biểu và làm slide dễ nhất trong ba cỡ, vì có nhiều chỗ nhất.\nĐánh đổi: chiếm nhiều mặt bàn hơn, và không phải chiếc balo nào cũng bỏ vừa — đo trước cái balo bạn đang dùng.\nHợp với: bạn học ở nhà hoặc ở phòng trọ là chính, mỗi tuần chỉ mang máy đi vài buổi.\n\nCách chọn gọn nhất, hỏi mình hai câu:\n\n1️⃣ Một tuần bạn mang máy ra khỏi nhà bao nhiêu buổi?\nNhiều buổi thì nghiêng về 13 – 14 inch. Ít buổi thì 15,6 inch không thành vấn đề.\n\n2️⃣ Bạn có thường xuyên mở hai cửa sổ cạnh nhau không?\nCó thì đừng xuống 13 inch. Không thì 13 inch tiết kiệm chỗ hơn hẳn.\n\nHàng bên mình đang có cả ba cỡ, nên bài này mình không lái bạn về cỡ nào. Chọn sai cỡ thì máy cấu hình tốt cỡ nào bạn cũng để nó ở nhà.\n\nMột mẹo cuối: hôm ghé cửa hàng, mang theo đúng cái balo bạn đang dùng. Thử cho máy vào rồi kéo khoá. Chuyện đó không đoán được qua ảnh.\n\n👉 Comment ngành bạn học + một tuần mang máy đi mấy buổi, mình nói nên nhắm cỡ nào.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #kinhnghiemmualaptop #chonlaptop #laptopthinhvuong",
  "Chưa tới 10 triệu. Nhiều bạn nghĩ tầm này là phải chấp nhận RAM 8GB và ổ cứng bé.\n\nMình mở đúng bảng hàng đang có ra cho bạn xem, kèm chỗ dở của từng máy.\n\nNói thẳng trước một điều, kẻo đọc hết bài lại thấy bên mình giấu: hạ ngân sách từ 13 triệu xuống dưới 10 triệu, thứ bạn phải nhường là ĐỜI CHIP và DUNG LƯỢNG Ổ CỨNG. Thứ bạn giữ được là RAM.\n\nBa chiếc đáng cân nhắc ở tầm này:\n\n🔹 Dell Latitude 7390 2in1 — 8.290.000đ\ni5-8250U · RAM 16GB · ổ 256GB · màn 13,3 inch cảm ứng, xoay gập 360 độ\nÍt tiền nhất trong ba chiếc mà vẫn đủ 16GB RAM.\nĐiểm yếu: đời chip cũ nhất trong ba chiếc, và ổ 256GB.\n\n🔹 Dell Latitude 7420 [vỏ carbon] — 9.380.000đ\ni5-1145G7 · RAM 16GB · ổ 256GB · màn 14 inch FHD\nĐời chip mới nhất trong ba chiếc, và màn 14 inch rộng hơn.\nĐiểm yếu: chiếc này KHÔNG có màn cảm ứng và không xoay gập được. Ổ vẫn 256GB.\n\n🔹 Dell Latitude 5310 2in1 — 9.880.000đ\ni5-10210U · RAM 16GB · ổ 512GB · màn 13,3 inch FHD cảm ứng, xoay gập 360 độ\nỔ cứng lớn nhất trong ba chiếc — gấp đôi hai chiếc kia.\nĐiểm yếu: đắt nhất trong ba chiếc, và màn 13,3 inch chật hơn 14 inch khi xếp hai cửa sổ cạnh nhau.\n\nĐọc ba chiếc trên theo cách này thì dễ chọn hơn:\n\n• Muốn tiết kiệm nhất mà vẫn 16GB → chiếc 8.290.000đ\n• Muốn đời chip mới nhất và màn rộng nhất → chiếc 9.380.000đ\n• Muốn ổ cứng lớn, đỡ phải dọn file → chiếc 9.880.000đ\n\nCả ba đều là máy đã qua sử dụng, thuộc dòng doanh nhân của Dell. Bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí. Vệ sinh máy, tra keo tản nhiệt, cài Windows — miễn phí trọn đời.\n\nMột câu thật nữa: ở tầm dưới 10 triệu, đừng nhắm máy trạm màn 15,6 inch có card đồ hoạ rời. Nhóm đó ở tầm tiền cao hơn, và nó cũng không làm ra để mang lên giảng đường mỗi ngày.\n\n👉 Comment ngân sách chính xác của bạn + ngành đang học, mình gợi ý chiếc nào trong ba chiếc này.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptopduoi10trieu #laptopthinhvuong",
  "Cùng một chiếc máy, cùng con chip, cùng 16GB RAM — bản ổ 512GB đắt hơn bản 256GB khoảng 700 nghìn.\n\nĐáng không? Mình trả lời cả hai chiều, và nói chiều \"đừng thêm tiền\" trước.\n\nTrước tiên, đây là hai cặp máy thật đang bán bên mình, để bạn thấy khoảng chênh này không phải mình bịa ra:\n\n🔹 Dell Latitude 5300 2in1 — i7-8665U · 16GB · màn 13,3 inch FHD cảm ứng, xoay gập\nBản ổ 256GB: 8.980.000đ\nBản ổ 512GB: 9.690.000đ\n→ chênh 710.000đ\n\n🔹 Dell Latitude 9410 2in1 — i7-10610U · 16GB · màn 14 inch FHD\nBản ổ 256GB: 12.980.000đ\nBản ổ 512GB: 13.680.000đ\n→ chênh 700.000đ\n\nHai cặp ở hai tầm tiền cách nhau 4 triệu mà cùng ra khoảng 700 nghìn. Nên con số này khá ổn định để bạn lấy làm mốc.\n\n❌ KHI NÀO 256GB LÀ ĐỦ, ĐỪNG THÊM TIỀN\n\n• Bạn để tài liệu trên Google Drive hoặc OneDrive, máy chỉ giữ bản đang làm.\n• Bạn học khối kinh tế, văn phòng — chủ yếu Word, Excel, PowerPoint, học online.\n• Ảnh và video bạn để trên điện thoại, không đổ vào máy.\n• Bạn có sẵn một ổ cứng di động, hoặc sẵn sàng mua một cái sau này.\n\nTrong cả bốn trường hợp trên, 700 nghìn đó nên để dành cho thứ khác.\n\n✅ KHI NÀO NÊN THÊM 700 NGHÌN\n\n• Ngành bạn học phải cài phần mềm chuyên ngành nặng — kỹ thuật, kiến trúc, thiết kế, dựng phim.\n• Bạn quay và dựng video, kể cả chỉ để làm bài tập nhóm.\n• Bạn tải phim, tải khoá học về xem offline.\n• Bạn biết tính mình: không thích dọn file, không thích nhìn thanh dung lượng đỏ.\n\nGạch đầu dòng cuối là gạch thật nhất. Ổ cứng chật không làm máy hỏng — nó làm bạn mệt. Mỗi lần cài thêm một thứ lại phải xoá một thứ khác.\n\n⚠️ VÀ ĐÂY LÀ PHẦN QUAN TRỌNG NHẤT\n\nĐừng tính là \"thêm 700 nghìn để có thêm 256GB\". Hãy tính là: 700 nghìn đó, nếu không dùng cho ổ cứng, bạn mua được gì cho việc học?\n\nĐó mới là câu so sánh đúng. Và câu trả lời khác nhau với từng người — nên không có đáp án chung.\n\nMột điều cần biết trước khi quyết: bên mình chưa kiểm khe cắm ổ cứng của từng máy, nên mình KHÔNG hứa là sau này nâng ổ lên được. Cứ coi như dung lượng bạn chọn hôm nay là dung lượng bạn sống cùng.\n\nCả bốn máy trên đều là máy đã qua sử dụng. Bảo hành 6 tháng cho bo mạch, màn hình và bàn phím; pin 3 tháng. Trong 15 ngày đổi sang máy khác miễn phí.\n\n👉 Comment ngành bạn học, mình nói bạn nên lấy bản 256GB hay 512GB.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #ocung #laptopthinhvuong",
  "Chiếc này bên mình có sẵn nhiều nhất trong nhóm máy xoay gập. Nên thay vì kể ưu điểm, mình nói ba điều nên biết trước khi xuống tiền — trong đó có một điểm yếu và một giới hạn của bảo hành.\n\nDELL LATITUDE 7400 2IN1\ni7-8665U · RAM 16GB · ổ 512GB · màn 14 inch FHD cảm ứng, xoay gập 360 độ\nMáy likenew, dòng doanh nhân của Dell.\nGiá 10.680.000đ\n\n1️⃣ ĐỜI CHIP LÀ CHỖ DỞ NHẤT — MÌNH NÓI TRƯỚC\n\nCon chip của chiếc này thuộc đời cũ hơn những máy xoay gập khác bên mình đang có ở tầm 11–15 triệu. Đây là chỗ bạn nhường để lấy được 16GB RAM và ổ 512GB ở tầm 10 triệu.\n\nNếu bạn học ngành phải chạy phần mềm nặng, hoặc bạn muốn máy đời mới nhất trong tầm tiền, thì chiếc này không phải chiếc của bạn — mình nói thẳng như vậy.\n\nCòn nếu bạn dùng Word, Excel, PowerPoint, học online, mở nhiều tab cùng lúc, thì 16GB RAM và ổ 512GB là hai thứ bạn chạm vào mỗi ngày, còn đời chip thì không.\n\n2️⃣ XOAY GẬP KHÔNG PHẢI ĐỂ CHO ĐẸP — NHƯNG CŨNG KHÔNG PHẢI AI CŨNG CẦN\n\nMàn hình lật hẳn 360 độ ra sau thành mặt phẳng. Ba việc nó làm được thật:\n\n• Đặt lên đùi trong giảng đường, đọc tài liệu, lật trang bằng ngón tay, không vướng bàn phím.\n• Dựng hình chữ A trên bàn chật — quán cà phê, thư viện — vẫn xem video và họp online được.\n• Zoom bảng Excel bằng hai ngón như dùng điện thoại.\n\nNói thật: nếu bạn chỉ gõ văn bản và chưa bao giờ thấy thiếu màn cảm ứng, thì đây không phải lý do để bạn chọn máy này. Hãy chọn nó vì RAM và ổ cứng.\n\nCòn nếu bạn hay ghi chú, hay vẽ sơ đồ — thì đến ngồi thử. Máy không kèm bút cảm ứng, bạn dùng ngón tay.\n\n3️⃣ ĐIỀU BẮT BUỘC SOI TẠI QUẦY — VÌ NÓ KHÔNG THUỘC DIỆN BẢO HÀNH\n\nPhần này cửa hàng nào cũng ngại đăng. Mình đăng trước.\n\nBảo hành của bên mình gồm bo mạch, màn hình và bàn phím — 6 tháng. Pin 3 tháng.\n\nNhưng ĐIỂM CHẾT trên màn hình thì KHÔNG thuộc diện bảo hành.\n\nNghĩa là: màn hình có bảo hành, mà điểm chết thì không. Nên bạn phải tự soi, ngay tại quầy, trước khi trả tiền. Cách soi mất đúng 20 giây:\n\nMở một ảnh trắng kín màn hình. Rồi mở một ảnh đen kín màn hình. Điểm chết, vệt sọc, chỗ ám màu lộ ra hết.\n\nVà vì đây là máy xoay gập, soi thêm hai thứ nữa:\n• Xoay màn chậm hết một vòng 360 độ, nghe xem có tiếng lạ không. Thả tay ở nửa đường xem màn có tự trôi xuống không.\n• Vẽ một đường liền bằng ngón tay qua bốn góc và giữa màn, xem có chỗ nào mất nét không.\n\nSoi cửa hàng nào cũng được. Soi bên mình cũng được. Kiểm kỹ đi, không ai giục bạn đâu — và nếu về nhà đổi ý, bạn còn 15 ngày để đổi sang máy khác miễn phí.\n\nĐI KÈM MÁY\n• Bảo hành 6 tháng cho bo mạch, màn hình, bàn phím. Pin 3 tháng.\n• 15 ngày đổi sang máy khác miễn phí.\n• Vệ sinh máy, tra keo tản nhiệt, cài Windows, cài phần mềm — miễn phí trọn đời.\n• Giao hàng toàn quốc 3–5 ngày làm việc, nhận máy được kiểm tra.\n\n👉 Nhắn tin mình kiểm tra máy còn không.\n______________________\n📍 LAPTOP THỊNH VƯỢNG\n☎️ Mua hàng: 0928939666 (8h–20h30)\n🔧 Bảo hành – kỹ thuật: 0825998855 (8h–17h30)\n🌐 https://laptoptv.vn\n🏠 71 Thiên Hiền, Mỹ Đình 1, Nam Từ Liêm, Hà Nội\n\n#laptopsinhvien #laptopcu #delllatitude #laptop2in1 #laptopthinhvuong",
  "",
  ""
 ],
 [
  "BRIEF ẢNH",
  "Tỉ lệ 1:1 · 1 ảnh · 1080×1080px, dưới 1MB.\n\nBối cảnh: quầy tư vấn thật ở 71 Thiên Hiền, có hai người ngồi cùng phía bàn — dựng đúng cảnh\nphụ huynh đi cùng con đến xem máy. Máy mở nắp trên bàn, thấy rõ màn hình đang bật.\nNền là cửa hàng thật, không phông dựng, không ảnh stock.\n\nText trên ảnh, tối đa 3 dòng:\n`3 CÂU BỐ MẸ HAY HỎI` / `khi bạn nói muốn mua laptop cũ` / `và cách trả lời`\n\nLogo Thịnh Vượng góc trái trên.\n\n⛔ Không ghi giá lên ảnh. Không ghi tên máy. Không ghi \"ưu đãi\", \"giảm giá\".\n⛔ Không dựng cảnh người bán đang chỉ tay thuyết phục — bài này không bán.",
  "Tỉ lệ 1:1 · 1 ảnh · 1080×1080px, dưới 1MB. Ảnh máy thật tại shop, không ảnh stock.\n\nBố cục: ba máy mở nắp xếp cạnh nhau trên cùng một mặt bàn, theo thứ tự nhỏ → to\n(13.3 inch · 14 inch · 15,6 inch), chụp chính diện từ trên xuống một góc nhẹ để thấy rõ\nchênh lệch kích cỡ thật. Đây là toàn bộ giá trị của ảnh — ba máy phải cùng khung, cùng khoảng\ncách ống kính, không ghép ảnh.\n\nMẹo làm chênh lệch dễ thấy: đặt một quyển vở A4 cùng trong khung làm mốc so sánh.\n\nText trên ảnh, tối đa 3 dòng:\n`13 · 14 · 15,6 INCH` / `Cỡ nào mang đi học được?` / `Đo bằng cái balo của bạn`\n\nLogo Thịnh Vượng góc trái trên. Nền trung tính, đủ sáng.\n\n⛔ Không ghi giá. Không ghi tên máy trên ảnh — bài này không bán máy nào.\n⛔ Không ghi cân nặng máy lên ảnh — shop chưa cân máy nào.\n⛔ Không ghi \"ưu đãi\", \"giảm giá\", \"số lượng có hạn\".",
  "Tỉ lệ 1:1 · 3 ảnh, 1080×1080px, dưới 1MB mỗi ảnh. Ảnh máy thật chụp tại shop, không ảnh stock.\n\nMỗi máy một ảnh, mở nắp, nền trung tính thống nhất cả bộ, máy chiếm khoảng 60% khung.\nThứ tự ảnh đúng thứ tự trong caption (8.29 → 9.38 → 9.88 triệu).\n\nText trên mỗi ảnh, tối đa 3 dòng:\n• Ảnh 1: `LATITUDE 7390 2IN1` / `16GB RAM · 256GB · 13,3 inch` / `Ít tiền nhất mà vẫn 16GB`\n• Ảnh 2: `LATITUDE 7420 VỎ CARBON` / `16GB RAM · 256GB · 14 inch` / `Đời chip mới nhất`\n• Ảnh 3: `LATITUDE 5310 2IN1` / `16GB RAM · 512GB · 13,3 inch` / `Ổ cứng lớn nhất`\n\nLogo Thịnh Vượng góc trái trên mọi ảnh.\n\n⚠️ Ảnh chiếc 7420 vỏ carbon không được chụp ở thế gập xoay hay cảm ứng — tên sản phẩm của máy\nnày không ghi cảm ứng (xem mục 12). Chụp đúng thế mở nắp thường.\n\n⛔ Không ghi giá lên ảnh — giá chỉ nằm trong caption.\n⛔ Không ghi \"còn X máy\", \"sắp hết\", \"số lượng có hạn\", \"giảm giá\", \"ưu đãi\".",
  "Tỉ lệ 1:1 · 2 ảnh, 1080×1080px, dưới 1MB mỗi ảnh. Ảnh máy thật tại shop, không ảnh stock.\n\nẢnh 1 — cặp Latitude 5300 2in1. Hai máy cùng dòng đặt cạnh nhau, mở nắp, cùng một khung.\nĐiểm mạnh của ảnh: hai máy trông giống nhau hoàn toàn — đó chính là thông điệp.\nText: `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 710.000đ`\n\nẢnh 2 — cặp Latitude 9410 2in1. Cùng bố cục.\nText: `CÙNG MỘT CHIẾC MÁY` / `256GB — 512GB` / `chênh 700.000đ`\n\nNếu shop không xếp được hai máy cùng dòng cạnh nhau: chụp một máy, kèm ảnh chụp màn hình cửa sổ\ndung lượng ổ đĩa của bản 256GB và bản 512GB đặt cạnh nhau. Vẫn giữ được ý.\n\nLogo Thịnh Vượng góc trái trên. Nền trung tính thống nhất cả hai ảnh.\n\n⚠️ Cặp Latitude 9410 không được chụp ở thế cảm ứng (không chạm ngón tay lên màn, không cảnh\nvẽ/viết trên màn) — tên sản phẩm của cả hai bản 9410 không ghi \"Cảm ứng\" (xem mục 12).\n\n⛔ Không ghi \"còn X máy\", \"sắp hết\", \"giảm giá\", \"ưu đãi\".\n⛔ Không ghi con số dung lượng trống còn lại sau khi cài Windows — shop chưa đo.",
  "Tỉ lệ 1:1 · 5 ảnh, 1080×1080px, dưới 1MB mỗi ảnh. Ảnh máy thật chụp tại 71 Thiên Hiền,\nkhông ảnh stock, không ảnh marketing của hãng.\n\nẢnh — Nội dung — Text trên ảnh (tối đa 3 dòng)\n1 — Máy mở nắp, góc tổng thể, thấy rõ tình trạng vỏ — `DELL LATITUDE 7400 2IN1` / `16GB RAM · 512GB · 14 inch` / `Bảo hành 6 tháng`\n2 — Máy gập phẳng 360 độ thành mặt bảng, đặt trên đùi hoặc trên bàn — `Gập phẳng để đọc tài liệu`\n3 — Máy dựng hình chữ A trên một mặt bàn hẹp — `Bàn chật vẫn dùng được`\n4 — Ảnh đen kín màn hình đang bật trên máy — cảnh soi điểm chết — `Điểm chết KHÔNG thuộc diện bảo hành` / `Soi tại quầy, 20 giây`\n5 — Close-up bàn phím hoặc cạnh máy, đủ sáng — *(không cần text)*\n\nẢnh 4 là ảnh quan trọng nhất của bộ — nó là thứ phân biệt bài này với mọi bài review khác.\nChụp thật, màn đang hiển thị ảnh đen toàn khung, phòng đủ sáng để thấy đây là màn đang bật.\n\n⚠️ Nếu máy có vết xước → cho thấy (`04_content/formats/post.md`: đây là điểm tạo tin cậy).\n⛔ Không cho bút cảm ứng vào khung hình — máy này không kèm bút (`policies.md` § quà tặng:\nchỉ Inspiron 13-7391 bản 512GB có bút).\n⛔ Không ghi giá lên ảnh — giá chỉ nằm trong caption.\n⛔ Không ghi \"còn X máy\", \"sắp hết\", \"số lượng có hạn\", \"giảm giá\", \"ưu đãi\".",
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
