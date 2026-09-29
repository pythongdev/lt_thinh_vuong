/**
 * Đẩy kịch bản video lên sheet KB — sinh tự động từ KICH-BAN-VIDEO-2-TUAN-28-09-11-10.md
 * KHÔNG sửa file này. Sửa file .md rồi chạy lại:
 *   python3 tools/kich_ban_to_sheet.py <đường dẫn .md>
 *
 * Cách chạy: mở sheet KB → Tiện ích mở rộng → Apps Script → dán → Run dayLenKB
 * Script TẠO TAB MỚI, không ghi đè tab nào đang có.
 */
function dayLenKB() {
  var TAB  = "KB TUAN KICH-BAN-VIDEO-2-TUAN-28-09-11.10 (AI)";
  var ROWS = [
  [
    "STT",
    "BỐI CẢNH",
    "NỘI DỤNG - VOICE",
    "TEXT  MÀN HÌNH",
    "NOTE"
  ],
  [
    "Kịch bản 1: Bố mẹ lo chữ \"cũ\" - không mẫu - voice thật (nhân viên bán hàng đọc, thu riêng) · 38 giây · Quay dọc 9:16 1080x1920 tại quầy tư vấn 71 Thiên Hiền, máy quay đặt chân máy · Máy: Dell Latitude 7400 2in1 i7-8665U 16GB 512GB, bật sẵn, desktop có file ảnh trắng + ảnh đen kín màn · Đạo cụ: 2 ghế kê cùng phía bàn · tờ A5 in \"6 tháng bo mạch · màn hình · bàn phím / Pin 3 tháng / 15 ngày đổi máy\" · 1 cáp USB · Phụ đề bắt buộc · ⛔ Không giá, không tên máy trên hình, không quay mặt người, không cảnh người bán chỉ tay, không câu chê bố mẹ",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận · ngang mặt quầy · hai ghế trống cùng phía bàn, laptop mở nắp giữa bàn, màn đang bật",
    "\"Gọi về nhà bảo mua máy cũ. Bố mẹ im luôn.\"",
    "Bố mẹ lo chữ \"cũ\"",
    "0–4s · khung tĩnh, không người trong khung"
  ],
  [
    "2",
    "Trung · chéo 45° · tay người bán mở nắp máy, bấm nút nguồn",
    "\"Câu một: dùng hỏng rồi mới bán? Đừng cãi. Soi luôn.\"",
    "1 · Dùng hỏng rồi mới bán?",
    "4–9s · chỉ thấy tay"
  ],
  [
    "3",
    "Cận · chính diện màn · cắt 4 nhịp: ảnh trắng kín màn · ảnh đen kín màn · tay gõ một lượt hàng phím · tay cắm cáp USB vào cổng trái rồi cổng phải",
    "\"Ảnh trắng, ảnh đen. Gõ hết bàn phím. Cắm từng cổng.\"",
    "Soi xong mới trả tiền",
    "9–16s · mỗi nhịp 1,5–2 giây, cắt thẳng, không hiệu ứng"
  ],
  [
    "4",
    "Trung · chính diện · máy trên quầy, 4 dòng chữ hiện lần lượt bên phải khung",
    "\"Câu hai: hỏng thì ai sửa? Hỏi bốn câu, bắt trả lời bằng số.\"",
    "2 · Bảo hành bao lâu? · Bảo hành cái gì? · Pin bao lâu? · Đổi máy mấy ngày?",
    "16–24s · khung tĩnh 8 giây để 4 dòng hiện đủ"
  ],
  [
    "5",
    "Cận · từ trên xuống · tay đặt tờ A5 bảo hành xuống mặt quầy, rút tay ra",
    "\"Bên mình: sáu tháng bo mạch, màn hình, bàn phím. Pin ba tháng. Mười lăm ngày đổi máy.\"",
    "6 tháng bo mạch · màn · phím / Pin 3 tháng / 15 ngày đổi máy",
    "24–31s · giữ khung tờ giấy 6 giây sau khi rút tay"
  ],
  [
    "6",
    "Toàn · lùi ra thấy hai ghế và máy giữa bàn",
    "\"Câu ba: sao không mua mới? Cũng được. Rủ bố mẹ ra xem cùng rồi quyết.\"",
    "Gửi video này cho bố mẹ",
    "31–38s · ⛔ không thêm lời mời nhắn tin"
  ],
  [
    "Kịch bản 2: Cỡ nào nhét vừa balo - không mẫu - voice thật (nhân viên bán hàng đọc, thu riêng) · 34 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền, máy quay đặt chân máy góc từ trên xuống nghiêng 30° · Máy: Dell Latitude 5310 2in1 i5-10210U 16GB 512GB (13,3 inch) · Dell Latitude 7400 2in1 i7-8665U 16GB 512GB (14 inch) · Dell Latitude 9520 2in1 i5-1145G7 16GB 256GB (15,6 inch) · Đạo cụ: 1 quyển vở A4 · 1 balo đi học cỡ thường (không dùng balo laptop cỡ to) · Phụ đề bắt buộc · ⛔ Không giá, không tên máy trên hình, không nói và không ghi cân nặng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Toàn · từ trên xuống nghiêng 30° · ba máy mở nắp xếp nhỏ → to trên cùng mặt bàn, vở A4 đặt cạnh máy 13,3 inch",
    "\"Màn to hơn chưa chắc tốt hơn. Chỉ tốn chỗ hơn.\"",
    "Màn to hơn ≠ tốt hơn",
    "0–4s · ba máy cùng khung, không ghép hình"
  ],
  [
    "2",
    "Trung · cùng góc · tay đặt vở A4 sát cạnh máy 13,3 inch",
    "\"Mười ba inch: vừa bàn gấp giảng đường. Mở hai cửa sổ thì chật.\"",
    "13,3 inch — vừa bàn gấp",
    "4–11s"
  ],
  [
    "3",
    "Trung · cùng góc · máy 14 inch, màn mở hai cửa sổ cạnh nhau",
    "\"Mười bốn inch: cỡ giữa. Vẫn nhét balo đi học được.\"",
    "14 inch — cỡ giữa",
    "11–18s · giữ khung 3 giây sau khi hai cửa sổ hiện đủ"
  ],
  [
    "4",
    "Trung · cùng góc · máy 15,6 inch chiếm gần hết chiều ngang bàn",
    "\"Mười lăm phẩy sáu: nhìn bảng dễ nhất. Nhưng chiếm hết bàn, balo nhỏ khó vừa.\"",
    "15,6 inch — tốn bàn nhất",
    "18–25s"
  ],
  [
    "5",
    "Cận · ngang · tay cho máy 14 inch vào balo, kéo khoá, quay cận chỗ khoá kéo",
    "\"Hôm đi xem máy, đeo đúng cái balo đi học. Nhét thử, kéo khoá.\"",
    "Mang đúng balo của bạn",
    "25–31s · kéo khoá không vừa thì giữ nguyên cảnh đó, không đổi balo"
  ],
  [
    "6",
    "Toàn · ba máy lại cùng khung, tay rút máy ở giữa ra",
    "\"Mua nhầm cỡ là máy nằm ở phòng trọ.\"",
    "Comment ngành học + mấy buổi mang máy",
    "31–34s"
  ],
  [
    "Kịch bản 3: Máy dở chứng tuần thi, gọi ai - không mẫu - voice thật (nhân viên kỹ thuật hoặc bán hàng đọc) · 42 giây · Quay dọc 9:16 1080x1920 · Cảnh 1 ở góc bàn học dựng tại shop (bàn ~50cm, vở, bút, dây sạc), cảnh 2–9 ở quầy 71 Thiên Hiền · Máy: bất kỳ máy nào trong danh sách 36, không lên tên · Đạo cụ: tờ A5 in \"6 tháng bo mạch · màn hình · bàn phím / Pin 3 tháng\" · cốc nước · tua vít · điện thoại mở sẵn màn quay số 0825998855 · desktop có file ảnh trắng · Phụ đề bắt buộc · ⛔ Không đổ nước lên máy, không dùng máy vỡ thật hay đập máy, không dựng điểm chết giả, không gọi là \"quy trình test\", không nói \"bảo hành 12 tháng\", \"1 đổi 1\", \"hoàn tiền 100%\"",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận · từ trên xuống · bàn học chật: vở mở, bút, dây sạc, laptop mở nắp màn đen",
    "\"Máy tự tắt đúng tuần thi. Gọi ai bây giờ?\"",
    "Máy dở chứng tuần thi?",
    "0–4s · màn tắt thật, không hiệu ứng"
  ],
  [
    "2",
    "Cận · từ trên xuống · tay đặt tờ A5 bảo hành xuống quầy",
    "\"Máy cũ, likenew bên mình: sáu tháng bo mạch, màn hình, bàn phím.\"",
    "6 tháng · bo mạch · màn hình · bàn phím",
    "4–10s"
  ],
  [
    "3",
    "Cận · cùng góc · ngón tay chỉ dòng thứ hai trên tờ giấy",
    "\"Pin riêng ba tháng. Pin là đồ hao mòn nên ngắn hơn.\"",
    "Pin 3 tháng",
    "10–15s"
  ],
  [
    "4",
    "Trung · chính diện · cốc nước đặt cạnh laptop trên quầy",
    "\"Không bảo hành: một, vào nước.\"",
    "Không bảo hành: vào nước",
    "15–19s · ⛔ không đổ nước"
  ],
  [
    "5",
    "Cận · tay đặt laptop đóng nắp xuống quầy thật nhẹ",
    "\"Hai, rơi vỡ, va đập.\"",
    "Rơi vỡ · va đập",
    "19–22s · ⛔ không thả rơi máy"
  ],
  [
    "6",
    "Cận · chính diện · màn bật ảnh trắng kín màn, ngón tay chỉ vào góc màn",
    "\"Ba, điểm chết trên màn.\"",
    "Điểm chết màn hình",
    "22–25s · màn sạch thì chỉ vào góc màn trắng, không dựng điểm chết"
  ],
  [
    "7",
    "Cận · từ trên xuống · tay đặt tua vít xuống cạnh máy",
    "\"Bốn, máy đã mang đi sửa chỗ khác.\"",
    "Đã sửa ở nơi khác",
    "25–28s"
  ],
  [
    "8",
    "Cận · ngang · tay cầm điện thoại, màn điện thoại hiện số 0825998855",
    "\"Thấy lỗi thì báo ngay. Quá ba mươi ngày không báo là mất bảo hành.\"",
    "Có lỗi: báo trong 30 ngày",
    "28–35s"
  ],
  [
    "9",
    "Cận · từ trên xuống · tờ A5 bảo hành và điện thoại đặt cạnh nhau",
    "\"Số kỹ thuật: không tám hai năm, chín chín tám, tám năm năm. Tám giờ tới năm rưỡi chiều. Lưu video lại nhé.\"",
    "Kỹ thuật – bảo hành / 0825998855 / 8h–17h30",
    "35–42s · giữ khung 6 giây"
  ],
  [
    "Kịch bản 4: Review Latitude 7390 2in1 16GB - không mẫu - voice thật (nhân viên bán hàng đọc) · 56 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền · Máy: Dell Latitude 7390 2in1 i5-8250U 16GB 256GB 13,3 inch cảm ứng — bản 16GB, không lấy bản 8GB · Đạo cụ: góc bàn học dựng chật (~50cm, vở, bút, dây sạc) · 1 quyển vở A4 · tờ A5 bảo hành · 1 cáp sạc, 1 USB · desktop mở sẵn 1 video bài giảng, 1 file Word, 5–6 tab trình duyệt, file ảnh trắng, ảnh đen · Phụ đề bắt buộc · ⛔ Không giá trên hình, không đọc giá, không chữ \"FHD\", không \"nguyên zin\", không \"bản lề chắc\", \"cảm ứng nhạy\", \"pin cả ngày\", \"mượt\", không bút cảm ứng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận · chính diện màn · cửa sổ Settings → About, ngón tay chỉ dòng tên chip",
    "\"Chiếc này nói chỗ dở trước: chip đời tám, đời cũ.\"",
    "Chỗ dở: chip đời 8",
    "0–4s · lấy nét vào chữ trên màn · màn hiện chip khác i5-8250U → dừng quay, báo người viết"
  ],
  [
    "2",
    "Cận · cùng màn, ngón tay chỉ dòng RAM 16.0 GB",
    "\"Đổi lại: RAM mười sáu GB.\"",
    "RAM 16GB",
    "4–8s"
  ],
  [
    "3",
    "Trung · chính diện · màn mở bài giảng video + Word + vài tab, tay bấm chuyển qua lại",
    "\"Vừa xem bài giảng, vừa mở Word, vừa chục tab tài liệu.\"",
    "Bài giảng + Word + 10 tab",
    "8–14s · ⛔ không đồng hồ đếm giây, không nói \"mượt\""
  ],
  [
    "4",
    "Toàn · chéo 45° · máy đóng nắp đặt cạnh quyển vở A4",
    "\"Máy mười ba inch, dòng doanh nhân của Dell. Máy cũ, có vết dùng.\"",
    "Latitude 7390 2in1 · i5-8250U · 16GB · 256GB",
    "14–19s"
  ],
  [
    "5",
    "Cận · ngang · tay mở nắp rồi xoay màn chậm từ 90° ra sau 360°",
    "\"Màn xoay gập ba trăm sáu mươi độ, có cảm ứng.\"",
    "Xoay gập 360° · cảm ứng",
    "19–25s"
  ],
  [
    "6",
    "Trung · chéo · máy dựng chữ A trên góc bàn học chật, màn đang chạy bài giảng",
    "\"Bàn phòng trọ chật thì dựng thế này xem bài giảng.\"",
    "Bàn chật: dựng chữ A",
    "25–30s"
  ],
  [
    "7",
    "Cận · từ trên xuống · tay gõ một đoạn văn trên bàn phím",
    "\"Bàn phím thì ra shop tự gõ một đoạn cho quen tay.\"",
    "",
    "30–34s"
  ],
  [
    "8",
    "Cận · ngang · cạnh trái rồi cạnh phải, tay cắm cáp sạc và USB",
    "\"Cổng hai bên. Cắm thử đúng dây bạn hay dùng.\"",
    "",
    "34–38s"
  ],
  [
    "9",
    "Cận · chính diện · màn ảnh trắng rồi ảnh đen, máy quay rà chậm từ góc trái trên sang phải dưới",
    "\"Hôm xem máy, soi ảnh trắng, ảnh đen cho kỹ.\"",
    "Soi ảnh trắng · ảnh đen",
    "38–42s · màn sạch thì nói thêm \"màn máy này sạch\""
  ],
  [
    "10",
    "Trung · chính diện · máy mở nắp trên bàn học, chữ hai dòng hiện bên phải",
    "\"Hợp với bạn học Word, Excel, slide, học online, hay mang máy đi.\"",
    "Hợp: Word · Excel · slide · học online",
    "42–47s"
  ],
  [
    "11",
    "Trung · cùng khung, chữ đổi",
    "\"Không hợp nếu ngành cài phần mềm nặng, hay cần ổ to. Ổ máy này hai trăm năm sáu.\"",
    "Không hợp: phần mềm nặng · cần ổ to",
    "47–52s"
  ],
  [
    "12",
    "Cận · từ trên xuống · tờ A5 bảo hành đặt cạnh máy",
    "\"Bảo hành sáu tháng bo mạch, màn, phím. Pin ba tháng. Comment ngành học với số tiền đang có nhé.\"",
    "6 tháng bo mạch · màn · phím / Pin 3 tháng / Comment ngành học + số tiền",
    "52–56s · giữ khung 4 giây"
  ],
  [
    "Kịch bản 5: Có đúng 9 triệu rưỡi - không mẫu - voice thật (nhân viên bán hàng đọc, không đọc giá) · 37 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền, ba máy cùng một mặt bàn · Máy: Dell Latitude 7390 2in1 i5-8250U 16GB 256GB · Dell Latitude 7420 vỏ carbon i5-1145G7 16GB 256GB (bản thường, không 2in1) · Dell Latitude 5310 2in1 i5-10210U 16GB 512GB · Đạo cụ: tờ A5 bảo hành · desktop chiếc 5310 mở sẵn một thư mục nhiều file · Giá trên hình: xác minh 0928939666 sáng ngày quay · HẠN DÙNG VIDEO: 2026-10-11 (hết tuần 2 — người dùng xác nhận giá 2026-09-28) — không đăng lại sau hạn · Phụ đề bắt buộc · ⛔ Không xoay gập, không chạm màn chiếc 7420, không \"còn hàng\", \"giá tốt nhất\", không ghép ảnh máy trên mạng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Toàn · ngang mặt bàn · ba máy mở nắp cạnh nhau, máy quay lia ngang chậm qua cả ba",
    "\"Ví có đúng chín triệu rưỡi. Nhiều bạn nghĩ tầm này chịu RAM tám GB.\"",
    "Có đúng 9 triệu rưỡi?",
    "0–4s · lia một lượt, không quay lại"
  ],
  [
    "2",
    "Toàn · khung tĩnh ba máy, chữ hiện hai dòng",
    "\"Thiệt chỗ nào nói trước: chip đời cũ hơn, ổ bé hơn. Còn RAM vẫn mười sáu.\"",
    "Thiệt: đời chip · ổ cứng / Giữ: RAM 16GB",
    "4–11s"
  ],
  [
    "3",
    "Cận · chéo · máy thứ nhất, tay xoay màn từ 90° ra sau 360°",
    "\"Chiếc ít tiền nhất. RAM mười sáu, ổ hai trăm năm sáu, màn xoay gập.\"",
    "Latitude 7390 2in1 · i5-8250U · 16GB · 256GB · 8.290.000đ",
    "11–18s"
  ],
  [
    "4",
    "Cận · chéo · máy thứ hai mở nắp thường, tay đặt lên bàn phím",
    "\"Chiếc chip mới nhất, màn mười bốn rộng hơn. Không cảm ứng, không xoay gập.\"",
    "Latitude 7420 vỏ carbon · i5-1145G7 · 16GB · 256GB · 9.380.000đ",
    "18–25s · ⛔ không xoay màn, không chạm màn"
  ],
  [
    "5",
    "Cận · chính diện · máy thứ ba, tay mở một thư mục nhiều file",
    "\"Chiếc ổ to nhất, năm trăm mười hai. Cũng đắt nhất trong ba.\"",
    "Latitude 5310 2in1 · i5-10210U · 16GB · 512GB · 9.880.000đ",
    "25–31s"
  ],
  [
    "6",
    "Toàn · ba máy cùng khung, tay đặt tờ A5 bảo hành trước ba máy",
    "\"Cả ba đã qua sử dụng. Bảo hành sáu tháng bo mạch, màn, phím. Pin ba tháng.\"",
    "Comment số tiền + ngành học",
    "31–37s"
  ],
  [
    "Kịch bản 6: 700 nghìn đó mua được gì - không mẫu - voice thật (nhân viên bán hàng đọc) · 35 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền, máy quay đặt chân máy, không đổi góc suốt video · Máy: hai chiếc Dell Latitude 5300 2in1 i7-8665U 16GB — bản 256GB (đặt bên trái) và bản 512GB (bên phải) · Đạo cụ: mẩu giấy trắng viết tay \"700.000đ\" · bản 256GB mở sẵn thư mục Google Drive, bản 512GB mở sẵn thư mục video · Giá trên hình: xác minh 0928939666 sáng ngày quay · HẠN DÙNG VIDEO: 2026-10-11 (hết tuần 2 — người dùng xác nhận giá 2026-09-28) — không đăng lại sau hạn · Phụ đề bắt buộc · ⛔ Không hứa nâng ổ, không \"còn hàng\", không nói bản 512GB đáng mua hơn",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Trung · chính diện · hai máy mở nắp đặt sát nhau cùng khung",
    "\"Hai chiếc giống hệt. Chênh bảy trăm mười nghìn.\"",
    "Giống hệt — chênh 710.000đ",
    "0–4s"
  ],
  [
    "2",
    "Trung · cùng góc · tay chỉ lần lượt máy trái rồi máy phải",
    "\"Cùng chip, cùng mười sáu GB RAM. Khác đúng cái ổ.\"",
    "256GB — 8.980.000đ · 512GB — 9.690.000đ",
    "4–10s · chữ giá đặt ngay trên từng máy"
  ],
  [
    "3",
    "Cận · chính diện · màn bản 256GB đang mở thư mục Google Drive",
    "\"Tài liệu để Drive, học kinh tế, ảnh để điện thoại: hai trăm năm sáu là đủ.\"",
    "Đừng thêm tiền nếu…",
    "10–17s · quay cảnh này trước cảnh 4, không đảo"
  ],
  [
    "4",
    "Cận · chính diện · màn bản 512GB đang mở thư mục video bài nhóm",
    "\"Cài phần mềm nặng, dựng video, tải phim xem offline: nghĩ tới bản to.\"",
    "Nên thêm nếu…",
    "17–24s"
  ],
  [
    "5",
    "Cận · từ trên xuống · tay đặt mẩu giấy \"700.000đ\" giữa hai máy, rút tay ra",
    "\"Bảy trăm nghìn là mấy tuần tiền ăn. Không dồn vào ổ thì mua được gì?\"",
    "700.000đ — mua được gì khác?",
    "24–30s · giữ khung 3 giây sau khi rút tay"
  ],
  [
    "6",
    "Trung · cùng góc cảnh 1 · hai tay gập hai nắp cùng lúc",
    "\"Bên mình chưa kiểm khe ổ từng máy, nên không hứa nâng ổ sau này.\"",
    "Comment ngành học, mình chọn giúp",
    "30–35s"
  ],
  [
    "Kịch bản 7: Cài lại Windows mùa thi - không mẫu - voice thật (kỹ thuật viên hoặc nhân viên bán hàng đọc) · 36 giây · Quay dọc 9:16 1080x1920 tại bàn kỹ thuật 71 Thiên Hiền · Máy: một máy trong danh sách 36 đang chờ vệ sinh, không lên tên, không lên giá · Người làm: kỹ thuật viên thật, chỉ quay tay · Đạo cụ: tua vít · chổi quét bụi · tuýp keo tản nhiệt · USB cài Windows · điện thoại mở sẵn màn quay số 0825998855 · Phụ đề bắt buộc · ⛔ Không nói máy mát hơn, nhanh hơn sau khi vệ sinh, không nói thời gian làm xong, không gọi là \"quy trình test\", không hứa \"sửa miễn phí\"",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận · chính diện · màn laptop đang ở màn hình cài đặt Windows",
    "\"Windows lỗi đúng đêm trước hạn nộp bài?\"",
    "Windows lỗi tuần nộp bài?",
    "0–4s"
  ],
  [
    "2",
    "Trung · từ trên xuống · bàn kỹ thuật: tua vít, chổi, tuýp keo xếp cạnh laptop lật úp",
    "\"Máy mua ở bên mình, ba việc này miễn phí trọn đời.\"",
    "Miễn phí trọn đời · máy mua tại shop",
    "4–9s"
  ],
  [
    "3",
    "Cận · chính diện · tay cắm USB cài Windows, bấm Next trên màn cài đặt",
    "\"Một: cài lại Windows, cài phần mềm.\"",
    "1 · Cài Windows · cài phần mềm",
    "9–14s"
  ],
  [
    "4",
    "Cận · từ trên xuống · tay tháo ốc nắp đáy, nhấc nắp ra",
    "\"Hai: mở máy vệ sinh.\"",
    "2 · Vệ sinh máy",
    "14–18s"
  ],
  [
    "5",
    "Cận · sát quạt · chổi quét bụi khỏi cánh quạt",
    "\"Quét sạch bụi quạt.\"",
    "",
    "18–21s"
  ],
  [
    "6",
    "Cận · sát chip · tay tra keo tản nhiệt",
    "\"Ba: tra keo tản nhiệt.\"",
    "3 · Tra keo tản nhiệt",
    "21–26s"
  ],
  [
    "7",
    "Cận · ngang · điện thoại hiện số 0825998855 đặt cạnh máy",
    "\"Cần thì gọi số kỹ thuật trước.\"",
    "Kỹ thuật: 0825998855 / 8h–17h30",
    "26–32s · giữ khung 5 giây"
  ],
  [
    "8",
    "Toàn · bàn kỹ thuật, máy đã lắp lại nắp",
    "\"Lưu video lại, lúc cần có số mà gọi.\"",
    "Lưu lại để lúc cần",
    "32–36s"
  ],
  [
    "Kịch bản 8: Review Latitude 7420 vỏ carbon - không mẫu - voice thật (nhân viên bán hàng đọc) · 55 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền · Máy: Dell Latitude 7420 [vỏ carbon] i5-1145G7 16GB 256GB 14 inch FHD — bản thường, không lấy nhầm bản 2in1 · Đạo cụ: 1 quyển vở A4 · tờ A5 bảo hành · 1 cáp sạc, 1 USB · desktop mở sẵn 1 file PDF, 1 file Word, file ảnh trắng, ảnh đen · Phụ đề bắt buộc · ⛔ Không giá trên hình, không đọc giá, ngón tay không chạm màn, không xoay màn quá 180°, không \"mượt\", \"pin cả ngày\", \"nhẹ\"",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận · chính diện · ngón tay đưa về phía màn, dừng cách màn 2cm rồi rụt lại",
    "\"Chiếc này nói trước: không cảm ứng, không xoay gập.\"",
    "Không cảm ứng · không xoay gập",
    "0–4s · ⛔ ngón tay không chạm màn"
  ],
  [
    "2",
    "Cận · chính diện · Settings → About, tay chỉ dòng tên chip",
    "\"Đổi lại: chip đời mười một.\"",
    "Chip i5 đời 11",
    "4–8s · màn hiện chip khác i5-1145G7 → dừng quay, báo người viết"
  ],
  [
    "3",
    "Cận · cùng màn, tay chỉ dòng RAM",
    "\"RAM mười sáu GB, ổ hai trăm năm sáu.\"",
    "RAM 16GB · Ổ 256GB",
    "8–12s"
  ],
  [
    "4",
    "Toàn · chéo 45° · máy đóng nắp cạnh quyển vở A4, thấy vân carbon trên nắp",
    "\"Màn mười bốn inch, vỏ carbon. Máy likenew, dòng doanh nhân.\"",
    "Latitude 7420 vỏ carbon · i5-1145G7 · 16GB · 256GB",
    "12–17s"
  ],
  [
    "5",
    "Trung · chính diện · màn mở hai cửa sổ cạnh nhau: PDF bên trái, Word bên phải",
    "\"Mười bốn inch mở hai cửa sổ cạnh nhau, đỡ chật hơn mười ba.\"",
    "Hai cửa sổ cạnh nhau",
    "17–23s"
  ],
  [
    "6",
    "Cận · từ trên xuống · tay gõ một đoạn văn",
    "\"Bàn phím thì ra shop tự gõ một đoạn cho quen tay.\"",
    "",
    "23–27s"
  ],
  [
    "7",
    "Cận · ngang · cạnh trái rồi cạnh phải, tay cắm cáp sạc và USB",
    "\"Cổng hai bên. Cắm thử đúng dây bạn hay dùng.\"",
    "",
    "27–31s"
  ],
  [
    "8",
    "Cận · chính diện · màn ảnh trắng rồi ảnh đen, máy quay rà chậm",
    "\"Hôm xem máy, soi ảnh trắng, ảnh đen cho kỹ.\"",
    "Soi ảnh trắng · ảnh đen",
    "31–35s · màn sạch thì nói thêm \"màn máy này sạch\""
  ],
  [
    "9",
    "Trung · chính diện · máy mở nắp trên bàn, chữ hai dòng hiện bên phải",
    "\"Hợp nếu học văn phòng, kinh tế, hay mở hai cửa sổ, không cần cảm ứng.\"",
    "Hợp: 2 cửa sổ · không cần cảm ứng",
    "35–41s"
  ],
  [
    "10",
    "Trung · cùng khung, chữ đổi",
    "\"Không hợp nếu cần ghi chú bằng tay trên màn, hay cần ổ to.\"",
    "Không hợp: cần cảm ứng · cần ổ to",
    "41–46s"
  ],
  [
    "11",
    "Cận · từ trên xuống · tờ A5 bảo hành đặt cạnh máy",
    "\"Bảo hành sáu tháng bo mạch, màn, phím. Pin ba tháng.\"",
    "6 tháng bo mạch · màn · phím / Pin 3 tháng",
    "46–51s · giữ khung 4 giây"
  ],
  [
    "12",
    "Toàn · máy mở nắp trên quầy",
    "\"Comment ngành học với số tiền đang có, mình nói hợp không.\"",
    "Comment ngành học + số tiền",
    "51–55s"
  ],
  [
    "Kịch bản 9: 20 giây soi điểm chết - không mẫu - voice thật (nhân viên bán hàng đọc) · 36 giây · Quay dọc 9:16 1080x1920 tại quầy 71 Thiên Hiền · Tắt bớt đèn trần, quay màn chính diện tránh vân moiré · Máy: Dell Latitude 7400 2in1 i7-8665U 16GB 512GB 14 inch FHD cảm ứng, desktop có file ảnh trắng, ảnh đen · Phụ đề bắt buộc · ⛔ Không giá trên hình (video không phải loại so sánh), không dựng máy có điểm chết, không chèn ảnh điểm chết trên mạng, không \"còn hàng\", không hứa bảo hành điểm chết",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận · chính diện · màn đen kín chiếm hết khung, phòng tối",
    "\"Cái này bên mình không bảo hành.\"",
    "Điểm chết màn hình: KHÔNG bảo hành",
    "0–4s"
  ],
  [
    "2",
    "Trung · chính diện · lùi ra thấy cả máy trên quầy, tay mở ảnh trắng toàn màn",
    "\"Màn hình có bảo hành. Điểm chết thì không. Nên tự soi tại quầy.\"",
    "",
    "4–11s · không cắt giữa câu"
  ],
  [
    "3",
    "Cận · chính diện · màn trắng, máy quay rà chậm từ góc trái trên sang phải dưới, rồi đổi ảnh đen rà lại",
    "\"Ảnh trắng kín màn. Rồi ảnh đen. Điểm chết, vệt sọc, chỗ ám màu lộ hết. Mất hai mươi giây.\"",
    "Ảnh trắng → ảnh đen",
    "11–19s · máy quay đi chậm, đều · màn sạch thì nói \"màn này sạch\""
  ],
  [
    "4",
    "Trung · ngang · tay xoay màn chậm hết 360°, rồi đưa về khoảng 100° và thả tay",
    "\"Máy xoay gập thì soi thêm. Xoay chậm hết vòng, nghe tiếng lạ. Thả tay giữa chừng, màn phải đứng yên.\"",
    "Thả tay — màn phải đứng yên",
    "19–27s · giữ khung 3 giây sau khi thả tay"
  ],
  [
    "5",
    "Cận · chính diện · ngón tay vẽ một đường liền qua bốn góc và giữa màn",
    "\"Vẽ một đường qua bốn góc với giữa màn. Xem chỗ nào không ăn.\"",
    "",
    "27–32s"
  ],
  [
    "6",
    "Trung · chéo · máy gập phẳng 360° trên quầy",
    "\"Soi ở đâu cũng được. Về nhà đổi ý thì còn mười lăm ngày đổi máy khác.\"",
    "Nhắn tin, shop kiểm tra máy còn không",
    "32–36s"
  ],
  [
    "Kịch bản 10: Mua lại máy anh chị khoá trên - soi 3 chỗ - không mẫu - voice thật (nhân viên bán hàng đọc, thu riêng) · 35 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền, bàn học dựng (mặt bàn gỗ, 2 quyển vở, bút, cốc nước) · Máy: Dell Latitude 7420 [vỏ carbon] i5-1145G7 16GB 256GB 14 inch FHD (bản thường, không 2in1), bật sẵn, desktop mở 1 file Word trắng · Đạo cụ: sạc của máy · 1 USB · Chỉ quay tay · Phụ đề bắt buộc · ⛔ Không tên máy, không giá trên hình, không xoay gập, không chạm màn, không gọi là \"quy trình test của shop\", không nói bản lề có bảo hành, không nói shop khác bán máy lỗi",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Trung · từ trên xuống · laptop gập nắp giữa bàn học, hai tay đặt hai bên máy",
    "\"Anh khoá trên bán lại laptop, để rẻ. Khoan chuyển khoản đã.\"",
    "Mua lại máy anh chị khoá trên?",
    "0–4s · chỉ thấy tay"
  ],
  [
    "2",
    "Cận · ngang mặt bàn · tay mở nắp, gập lại, mở lại, làm 3 lần",
    "\"Một: bản lề. Mở gập vài lần. Nghe có tiếng kêu lạ không, nắp có lắc không.\"",
    "1 · Bản lề",
    "4–10s · thu tiếng bản lề thật, không nhạc đè"
  ],
  [
    "3",
    "Cận · ngang · tay mở nắp tới khoảng 100° rồi thả tay",
    "\"Mở tới giữa, thả tay. Màn phải đứng yên.\"",
    "Thả tay — màn đứng yên",
    "10–14s · giữ khung 3 giây sau khi thả tay · ⛔ không mở nắp quá góc thường"
  ],
  [
    "4",
    "Cận · ngang · tay cắm sạc vào cổng sạc, máy quay lia lên góc phải dưới màn thấy biểu tượng pin đang sạc",
    "\"Hai: sạc. Cắm vào phải hiện đang sạc. Rút ra cắm lại vài lần.\"",
    "2 · Sạc và cổng",
    "14–20s"
  ],
  [
    "5",
    "Cận · ngang · tay cắm USB lần lượt vào từng cổng, mỗi lần màn hiện thông báo nhận thiết bị",
    "\"Cắm USB từng cổng. Máy nhận hết mới được.\"",
    "Cắm từng cổng",
    "20–25s · cổng nào không nhận → dừng quay, báo người viết"
  ],
  [
    "6",
    "Cận · từ trên xuống · tay gõ một lượt các hàng phím trong file Word, rồi rê touchpad khắp mặt, bấm chuột trái, chuột phải",
    "\"Ba: gõ đủ từng hàng phím. Rê touchpad khắp mặt, bấm cả hai bên.\"",
    "3 · Bàn phím + touchpad",
    "25–31s · chữ gõ hiện rõ trên màn"
  ],
  [
    "7",
    "Toàn · chéo 45° · máy mở nắp trên bàn học, tay rút ra khỏi khung",
    "\"Mua ở đâu cũng soi được, kể cả ở bên mình. Lưu lại nhé.\"",
    "Lưu lại — hôm đi xem máy mở ra làm theo",
    "31–35s"
  ],
  [
    "Kịch bản 11: Thêm 2,3 triệu - chip mới hay màn xoay - không mẫu - voice thật (nhân viên bán hàng đọc, không đọc giá) · 44 giây · Quay dọc 9:16 1080x1920 tại quầy 71 Thiên Hiền, máy quay đặt chân máy · Máy: Dell Latitude 7400 2in1 i7-8665U 16GB 512GB 14 inch FHD cảm ứng (đặt bên trái) · Dell Latitude 7420 [vỏ nhôm] i7-1185G7 16GB 512GB 14 inch FHD (bên phải, bản thường, không 2in1) · Hai máy bật sẵn, mở cùng một file slide · Đạo cụ: tờ A5 bảo hành · Giá trên hình: gọi 0928939666 xác minh cả 2 giá sáng ngày quay, hai máy có mặt ở shop cùng lúc · HẠN DÙNG VIDEO: 2026-10-06 (hạn danh sách 36, soát lại 2026-09-29) — không đăng lại sau hạn · Phụ đề bắt buộc · ⛔ Không xoay, không chạm màn chiếc 7420, không \"còn hàng\", không \"máy này ngon hơn\", không nói chip đời 11 nhanh hơn bao nhiêu, không bút cảm ứng, không ghép ảnh máy trên mạng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Toàn · ngang mặt quầy · hai máy mở nắp cạnh nhau, cùng mở một file slide",
    "\"Cùng RAM, cùng ổ, cùng mười bốn inch. Chênh hai triệu ba.\"",
    "Latitude 7400 2in1 — 10.680.000đ · Latitude 7420 vỏ nhôm — 12.980.000đ",
    "0–5s · chữ giá đặt ngay trên từng máy"
  ],
  [
    "2",
    "Cận · chéo · chiếc 7400 2in1, ngón tay chạm màn lật sang slide kế tiếp",
    "\"Chiếc bên trái: màn cảm ứng. Chạm là lật slide.\"",
    "7400 2in1: màn cảm ứng",
    "5–10s"
  ],
  [
    "3",
    "Trung · ngang · tay xoay màn chiếc 7400 ra sau thành chữ A, mặt màn quay về máy quay",
    "\"Xoay gập ba trăm sáu mươi độ. Dựng chữ A cho cả nhóm xem.\"",
    "Xoay gập 360°",
    "10–15s"
  ],
  [
    "4",
    "Cận · chéo · chiếc 7420 vỏ nhôm, ngón tay dừng cách màn khoảng 2cm rồi rút lại",
    "\"Chiếc bên phải: không cảm ứng, không xoay gập. Nói trước.\"",
    "7420 vỏ nhôm: KHÔNG cảm ứng",
    "15–20s · ⛔ không chạm màn, không mở nắp quá góc thường"
  ],
  [
    "5",
    "Cận · chính diện · màn chiếc 7420 mở Settings → System → About, ngón tay chỉ dòng tên chip",
    "\"Đổi lại, chip i7 đời mười một. Chiếc kia i7 đời tám.\"",
    "Chip: đời 11 — đời 8",
    "20–26s · tên chip trên màn khác i7-1185G7 → dừng quay, báo người viết"
  ],
  [
    "6",
    "Trung · chính diện · khung tĩnh hai máy",
    "\"Nói luôn: cả hai chip đều cũ hơn máy mới cùng giá.\"",
    "Chip đời cũ hơn máy mới cùng giá. Nói trước.",
    "26–30s · giữ chữ ít nhất 3 giây"
  ],
  [
    "7",
    "Cận · từ trên xuống · tay đặt tờ A5 bảo hành giữa hai máy, rút tay ra",
    "\"Cả hai likenew. Sáu tháng bo mạch, màn, phím. Pin ba tháng.\"",
    "Cùng bảo hành 6 tháng · pin 3 tháng",
    "30–35s"
  ],
  [
    "8",
    "Trung · cùng góc cảnh 1 · tay đặt lên chiếc trái, rồi chiếc phải",
    "\"Hay chạm màn, lật màn cho nhóm xem: bên trái. Chỉ gõ, muốn chip mới: bên phải.\"",
    "Chạm, lật màn → 7400 2in1 · Chỉ gõ → 7420 vỏ nhôm",
    "35–41s"
  ],
  [
    "9",
    "Toàn · ngang · quầy, hai máy trong khung",
    "\"Comment ngành bạn học, mình chỉ nên lấy chiếc nào.\"",
    "Comment ngành học — mình chỉ máy",
    "41–44s"
  ],
  [
    "Kịch bản 12: Học online - soi webcam, mic, loa, cấu hình - không mẫu - voice thật (nhân viên bán hàng đọc, thu riêng) · 38 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền, bàn học dựng (vở, bút, tai nghe để cạnh) · Máy: Dell Latitude 7420 [vỏ carbon] i5-1145G7 16GB 256GB 14 inch FHD (bản thường, không 2in1), bật sẵn · Đạo cụ: desktop mở sẵn ứng dụng Camera, ứng dụng ghi âm, 1 video không có nhạc bản quyền, cửa sổ Settings → System → About, cửa sổ This PC · Chỉ quay tay và màn hình · Phụ đề bắt buộc · ⛔ Không tên máy, không giá trên hình, không quay mặt người qua webcam (hướng webcam vào quyển vở), không xoay gập, không chạm màn, không gọi là \"quy trình test của shop\", không nói shop khác bán máy lỗi",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận · chính diện màn · cửa sổ Camera đang mở, webcam hướng vào quyển vở mở trên bàn",
    "\"Tám giờ học online. Bật cam lên mà màn đen là toang.\"",
    "Học online — soi 4 chỗ này",
    "0–4s"
  ],
  [
    "2",
    "Cận · chính diện · cửa sổ Camera, tay đưa quyển vở lại gần rồi ra xa webcam",
    "\"Một: webcam. Mở Camera. Hình lên, không nhoè, không sọc.\"",
    "1 · Webcam",
    "4–10s · ⛔ không quay mặt người · máy không có webcam → dừng quay, báo người viết"
  ],
  [
    "3",
    "Cận · chéo · màn ứng dụng ghi âm, tay bấm ghi, người đọc ngoài khung nói một câu, tay bấm nghe lại",
    "\"Hai: mic. Ghi âm một câu, nghe lại. Rõ, không rè.\"",
    "2 · Mic",
    "10–17s · thu tiếng phát lại từ loa máy thật"
  ],
  [
    "4",
    "Cận · ngang · video đang phát, tay bấm phím tăng âm lượng từng nấc",
    "\"Ba: loa. Vặn to dần. Hai bên cùng kêu, không rè.\"",
    "3 · Loa",
    "17–22s · ⛔ không dùng video có nhạc bản quyền"
  ],
  [
    "5",
    "Cận · chính diện · cửa sổ Settings → System → About, ngón tay chỉ dòng tên chip rồi dòng RAM",
    "\"Bốn: cấu hình. Vào About xem chip, xem RAM.\"",
    "4 · Cấu hình đúng lời bán?",
    "22–28s · tên chip trên màn khác i5-1145G7 → dừng quay, báo người viết"
  ],
  [
    "6",
    "Cận · chính diện · cửa sổ This PC, ngón tay chỉ dung lượng ổ",
    "\"Mở This PC xem ổ. Số hơi thấp hơn là bình thường. Lệch hẳn thì hỏi lại.\"",
    "Người bán nói gì — màn phải ra đúng vậy",
    "28–34s"
  ],
  [
    "7",
    "Toàn · chéo 45° · máy trên bàn học, tay gập nắp",
    "\"Mua ở đâu cũng soi được, kể cả ở bên mình. Lưu lại nhé.\"",
    "Lưu lại — hôm đi xem máy mở ra làm theo",
    "34–38s"
  ],
  [
    "Kịch bản 13: Thêm 1,4 triệu - lên 14 inch, đổi chip - không mẫu - voice thật (nhân viên bán hàng đọc, không đọc giá) · 46 giây · Quay dọc 9:16 1080x1920 tại quầy 71 Thiên Hiền, máy quay đặt chân máy · Máy: Dell Latitude 5310 2in1 i5-10210U 16GB 512GB 13.3 inch FHD cảm ứng (đặt bên trái) · Dell Inspiron 7415 2in1 Ryzen 7-5700U 16GB 512GB 14 inch FHD cảm ứng (bên phải) · Hai máy bật sẵn, mỗi máy mở một trang tài liệu bên trái và một file Word bên phải · Đạo cụ: 1 quyển vở A4 · tờ A5 bảo hành · Giá trên hình: gọi 0928939666 xác minh cả 2 giá sáng ngày quay, hai máy có mặt ở shop cùng lúc · HẠN DÙNG VIDEO: 2026-10-11 (hết tuần 2 — người dùng xác nhận giá 2026-09-28) — không đăng lại sau hạn · Phụ đề bắt buộc · ⛔ Không \"nguyên zin\" (5310 là máy Cũ), không \"dòng doanh nhân\" cho Inspiron, không cân nặng, không số giờ pin, không \"còn hàng\", không \"máy này ngon hơn\", không bút cảm ứng, không ghép ảnh máy trên mạng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Toàn · ngang mặt quầy · hai máy mở nắp cạnh nhau",
    "\"Cùng xoay gập, cùng cảm ứng, RAM mười sáu, ổ năm trăm mười hai. Chênh một triệu tư.\"",
    "Latitude 5310 2in1 — 9.880.000đ · Inspiron 7415 2in1 — 11.280.000đ",
    "0–6s · chữ giá đặt ngay trên từng máy"
  ],
  [
    "2",
    "Trung · từ trên xuống · hai máy gập nắp đặt sát nhau, quyển vở A4 đặt ngay dưới",
    "\"Khác thứ nhất: màn. Mười ba phẩy ba với mười bốn.\"",
    "Màn 13,3 inch — 14 inch",
    "6–12s · hai máy thẳng hàng mép trên"
  ],
  [
    "3",
    "Cận · chính diện · màn chiếc 5310 mở tài liệu một bên, Word một bên; cắt sang màn chiếc 7415 cùng khung",
    "\"Mở hai cửa sổ cạnh nhau. Màn mười bốn rộng hơn chút.\"",
    "Hai cửa sổ cạnh nhau",
    "12–18s · quay 5310 trước, 7415 sau, cùng khoảng cách máy quay"
  ],
  [
    "4",
    "Cận · chính diện · màn Settings → System → About chiếc 5310, ngón tay chỉ tên chip; cắt sang chiếc 7415",
    "\"Khác thứ hai: chip. Bên trái Intel i5 đời mười. Bên phải AMD Ryzen 7.\"",
    "Chip: i5-10210U — Ryzen 7-5700U",
    "18–25s · tên chip trên màn khác tên máy → dừng quay, báo người viết"
  ],
  [
    "5",
    "Trung · chính diện · khung tĩnh hai máy",
    "\"Nói trước: cả hai chip đều cũ hơn máy mới cùng giá.\"",
    "Chip đời cũ hơn máy mới cùng giá. Nói trước.",
    "25–29s · giữ chữ ít nhất 3 giây"
  ],
  [
    "6",
    "Cận · lần lượt nắp lưng chiếc 5310 rồi chiếc 7415, dừng ở chỗ có vết dùng",
    "\"Tên trên web: bên trái máy cũ, bên phải likenew. Vết dùng thì soi tận mắt.\"",
    "Máy cũ — Likenew",
    "29–34s · quay đúng vết thật, không che · máy không có vết → quay nắp lưng thường"
  ],
  [
    "7",
    "Cận · từ trên xuống · tay đặt tờ A5 bảo hành giữa hai máy, rút tay ra",
    "\"Bảo hành như nhau. Sáu tháng bo mạch, màn, phím. Pin ba tháng.\"",
    "Cùng bảo hành 6 tháng · pin 3 tháng",
    "34–38s"
  ],
  [
    "8",
    "Trung · cùng góc cảnh 1 · tay đặt lên chiếc trái, rồi chiếc phải",
    "\"Lên giảng đường mỗi ngày, bàn chật: bên trái. Ngồi trọ nhiều, mở hai cửa sổ: bên phải.\"",
    "Mang đi học mỗi ngày → 5310 · Ngồi trọ, hai cửa sổ → 7415",
    "38–43s"
  ],
  [
    "9",
    "Toàn · ngang · quầy, hai máy trong khung",
    "\"Comment ngành bạn học, mình chỉ nên lấy chiếc nào.\"",
    "Comment ngành học — mình chỉ máy",
    "43–46s"
  ]
];
  var TITLE_ROWS = [2, 9, 16, 26, 39, 46, 53, 62, 75, 82, 90, 100, 108];

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss.getSheetByName(TAB)) {
    throw new Error('Tab "' + TAB + '" đã có rồi. Đổi tên tab cũ hoặc sửa biến TAB.');
  }
  var sh = ss.insertSheet(TAB);

  sh.getRange(1, 1, ROWS.length, 5).setValues(ROWS);

  // dòng tiêu đề mỗi kịch bản: merge hết 5 cột, in đậm, nền nhạt
  TITLE_ROWS.forEach(function (r) {
    var range = sh.getRange(r, 1, 1, 5);
    range.merge().setFontWeight('bold').setBackground('#e8eaed').setWrap(true);
  });

  sh.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#d9d9d9');
  sh.setFrozenRows(1);
  sh.getRange(1, 1, ROWS.length, 5).setVerticalAlignment('top').setWrap(true);
  sh.setColumnWidth(1, 45);
  sh.setColumnWidth(2, 320);
  sh.setColumnWidth(3, 360);
  sh.setColumnWidth(4, 260);
  sh.setColumnWidth(5, 260);

  SpreadsheetApp.getUi().alert(
    'Xong. Đã tạo tab "' + TAB + '" với ' + TITLE_ROWS.length + ' kịch bản.\n\n' +
    'Việc còn phải tự làm:\n' +
    '· Đánh lại số "Kịch bản <N>" theo số đang chạy trong tab đích\n' +
    '· Soát lại rồi copy khối sang đúng chỗ'
  );
}
