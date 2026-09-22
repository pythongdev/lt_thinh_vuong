/**
 * Đẩy kịch bản video lên sheet KB — sinh tự động từ KICH-BAN-VIDEO-TUAN-05-11-10.md
 * KHÔNG sửa file này. Sửa file .md rồi chạy lại:
 *   python3 tools/kich_ban_to_sheet.py <đường dẫn .md>
 *
 * Cách chạy: mở sheet KB → Tiện ích mở rộng → Apps Script → dán → Run dayLenKB
 * Script TẠO TAB MỚI, không ghi đè tab nào đang có.
 */
function dayLenKB() {
  var TAB  = "KB TUAN 05-11.10 (AI)";
  var ROWS = [
  [
    "STT",
    "BỐI CẢNH",
    "NỘI DỤNG - VOICE",
    "TEXT  MÀN HÌNH",
    "NOTE"
  ],
  [
    "Kịch bản 1: Gập màn ra sau để làm gì - không mẫu - không voice, để tiếng bản lề thật + nhạc nền nhẹ · Thời lượng 35 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền · Máy quay: Dell XPS 9310 2in1 bản 256GB hoặc Dell Latitude 9430 2in1 bản i7 16GB · Ánh sáng đều, không đèn màu, không hiệu ứng chuyển cảnh bay lượn · Phụ đề bắt buộc · ⛔ Không ghi giá, không ghi tên máy lên video, không quay màn đang chạy phần mềm để ngụ ý tốc độ, không dùng ảnh/video của hãng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Cận bàn tay gập màn từ 90 độ ra sau 360 độ, quay chậm. Bàn làm việc thật có cốc cà phê và sổ, không dọn sạch trơn",
    "Nhạc không có lời · để tiếng bản lề thật",
    "Cái này để làm gì?",
    "0–3s (HOOK) · 3 giây đầu quyết định cả video"
  ],
  [
    "2",
    "Tư thế 1 — ngồi bàn, máy mở bình thường, tay gõ phím",
    "Nhạc không có lời",
    "Ngồi bàn mình: như mọi cái laptop khác.",
    "3–9s"
  ],
  [
    "3",
    "Tư thế 2 — gập chữ A, bàn phím úp xuống, chỉ còn màn dựng đứng",
    "Nhạc không có lời",
    "Bàn họp chật: bỏ bàn phím xuống, màn vẫn đứng.",
    "9–16s"
  ],
  [
    "4",
    "Tư thế 3 — gập phẳng, cầm hai tay như máy tính bảng, vuốt cuộn tài liệu. Nền là cửa hàng, thấy kệ máy phía sau",
    "Nhạc không có lời",
    "Đọc tài liệu dài: cầm như cái máy tính bảng, vuốt bằng tay.",
    "16–23s"
  ],
  [
    "5",
    "Tư thế 4 — bàn có hai ghế đối diện, có người thứ hai ngồi bên kia. Đặt máy xuống, xoay màn về phía người đối diện, người kia ký bằng ngón tay lên màn",
    "Nhạc không có lời",
    "Đưa qua bàn cho khách xem. Ký luôn trên màn.",
    "23–30s · CẢNH CHÍNH — dành nhiều đất nhất"
  ],
  [
    "6",
    "Bốn tư thế cắt nhanh liên tiếp, dừng ở tư thế 4",
    "Nhạc không có lời",
    "Một cái máy, bốn cách đặt. Chỗ nào ngồi cũng làm việc được.",
    "30–35s (CHỐT)"
  ],
  [
    "Kịch bản 2: 30 giây soi màn hình - không mẫu - voice thật · Thời lượng 32 giây · Quay dọc 9:16 1080x1920 tại quầy 71 Thiên Hiền · Máy quay: một máy trong danh sách 36 máy được viết · Phòng tắt bớt đèn, không để đèn trần hắt lên mặt kính màn · Quay màn chính diện tránh vân moiré · Không cần mặt người nói, bàn tay + màn hình là đủ · Phụ đề bắt buộc · ⛔ Không nêu tên máy, không dàn dựng máy có điểm chết rồi quay, không chèn ảnh điểm chết lấy trên mạng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Màn hình máy trắng toát chiếm hết khung, phòng tối",
    "Nhạc không có lời · chữ chạy lên",
    "Cái này bên mình không bảo hành.",
    "0–3s (HOOK)"
  ],
  [
    "2",
    "Lùi ra thấy cả máy đặt trên quầy, tay mở ảnh trắng toàn màn hình",
    "\"Điểm chết trên màn. Bên mình ghi rõ trong chính sách: không nằm trong diện bảo hành.\"",
    "",
    "3–9s · nói phần bất lợi trước, không cắt"
  ],
  [
    "3",
    "Cận màn trắng, ống kính rà chậm từ góc trái trên sang phải dưới",
    "\"Ảnh trắng kín màn. Rà mắt từ góc này sang góc kia. Điểm đen lạ sẽ lộ ra.\"",
    "",
    "9–17s · máy quay đi chậm và đều, đủ để người xem tin là đang soi thật"
  ],
  [
    "4",
    "Đổi sang ảnh đen kín màn, rà lại",
    "\"Rồi đổi sang ảnh đen. Lần này tìm điểm sáng. Hai lượt là đủ.\"",
    "",
    "17–24s"
  ],
  [
    "5",
    "Lùi ra, thấy người cầm máy trên quầy",
    "\"Làm ngay lúc máy còn nằm trước mặt bạn. Không phải lúc mang về nhà.\"",
    "",
    "24–29s"
  ],
  [
    "6",
    "Dừng ở màn đen, chữ lớn",
    "Nhạc không có lời",
    "Soi xong vẫn chưa yên tâm? Còn 15 ngày: máy lỗi thì đổi máy khác.",
    "29–32s (CHỐT) · nếu không tìm được máy lỗi thật thì quay màn sạch và nói rõ \"màn này sạch\", không giả vờ tìm ra lỗi"
  ],
  [
    "Kịch bản 3: 3 động tác thử bản lề - không mẫu - voice thật · Thời lượng 30 giây · Quay dọc 9:16 1080x1920 tại quầy 71 Thiên Hiền · Máy quay: một máy gập xoay trong danh sách 36 máy được viết · Đặt máy ngang tầm mắt người xem, quay từ bên hông để thấy rõ khớp bản lề · Nền yên tĩnh, thu được tiếng bản lề · Phụ đề bắt buộc, thêm dòng \"bật tiếng để nghe bản lề\" · ⛔ Không nêu tên máy, không ghi giá, không quay máy bản lề hỏng rồi nói đó là máy shop đang bán, không dùng video của hãng hay video tải trên mạng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Thả tay khỏi màn đang mở khoảng 120 độ, màn trôi xuống từ từ",
    "Nhạc không có lời",
    "Cái này là đã rơ rồi.",
    "0–3s (HOOK) · không có máy lỗi thật thì giữ tay cho màn hạ xuống và ghi rõ chữ \"minh hoạ\" trên màn"
  ],
  [
    "2",
    "Toàn cảnh máy gập xoay trên quầy",
    "\"Máy gập xoay, bản lề phải đi hết 360 độ. Nó chịu lực nhiều hơn bản lề máy thường. Nên thử ba động tác.\"",
    "",
    "3–8s"
  ],
  [
    "3",
    "Động tác 1 — tay xoay màn thật chậm từ đóng tới gập hẳn ra sau, quay cận khớp bản lề",
    "\"Một: xoay chậm hết hành trình. Nghe có lạo xạo không, có chỗ nào khựng không.\"",
    "",
    "8–15s · để tiếng thật, tốc độ thật, không tua nhanh · KHÔNG đè nhạc lên đoạn này"
  ],
  [
    "4",
    "Động tác 2 — dừng màn ở khoảng 100 độ, thả hai tay ra, giữ khung hình 3 giây",
    "\"Hai: thả tay giữa chừng. Màn phải đứng yên. Trôi xuống là rơ.\"",
    "",
    "15–22s · giữ đủ 3 giây sau khi thả tay, cắt sớm là hỏng cảnh chứng minh"
  ],
  [
    "5",
    "Động tác 3 — gập phẳng 360 độ, ngón tay bấm mấy phím, màn không phản ứng",
    "\"Ba: gập hẳn ra sau. Bàn phím phải tự khoá.\"",
    "",
    "22–27s"
  ],
  [
    "6",
    "Dừng ở máy đã gập phẳng, chữ lớn",
    "Nhạc không có lời",
    "Ba động tác. Mười lăm giây. Làm trước khi trả tiền, không phải sau.",
    "27–30s (CHỐT)"
  ],
  [
    "Kịch bản 4: Hai chiếc 17 triệu đặt cạnh nhau - không mẫu - voice thật · Thời lượng 40 giây · Quay dọc 9:16 1080x1920 tại 71 Thiên Hiền · Hai máy thật trên cùng một bàn, cùng một nguồn sáng · Bố cục cố định: Asus Vivobook S 14 bên trái, Dell XPS 9310 2in1 bên phải, không đảo suốt cả video · Máy quay đặt ngang tầm bàn, không quay từ trên xuống · Phụ đề bắt buộc · ⛔ Không đọc giá trong 3 giây đầu, không quay cận màn OLED để người xem so màu, không quay màn chạy phần mềm để ngụ ý tốc độ, không ghi \"giảm giá\" \"ưu đãi\" \"sốc\" lên video, không dùng ảnh/video của hãng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Hai máy mở sẵn cạnh nhau, chính diện, cùng ánh sáng",
    "Nhạc không có lời",
    "Cùng 17 triệu. Chọn bên nào?",
    "0–3s (HOOK) · ⛔ không đọc giá ở đoạn này"
  ],
  [
    "2",
    "Lia chậm sang máy bên TRÁI — Asus Vivobook S 14. Chữ hiện dần các gạch đầu dòng",
    "\"Bên trái: máy mới 100%. RAM 16GB, ổ 512GB, màn 14 inch OLED. Bảo hành 12 tháng.\"",
    "16.980.000đ",
    "3–11s · giá hiện bằng chữ trên màn ở giây 8"
  ],
  [
    "3",
    "Lia chậm sang máy bên PHẢI — Dell XPS 9310 2in1 bản ổ 256GB",
    "\"Bên phải: máy likenew, dòng cao cấp của Dell. RAM 16GB, ổ 256GB, màn 13 inch cảm ứng. Bảo hành 6 tháng.\"",
    "17.980.000đ",
    "11–19s · giá hiện ở giây 16 · bảo hành 6 tháng bo mạch – màn hình – bàn phím, pin 3 tháng"
  ],
  [
    "4",
    "Cảnh quyết định — tay gập màn chiếc bên phải ra sau 360 độ, xoay qua phía người đối diện",
    "\"Và nó làm được việc này. Chiếc bên trái thì không.\"",
    "",
    "19–26s · CẢNH CHÍNH — quay đủ chậm để thấy hết hành trình"
  ],
  [
    "5",
    "Về lại hai máy cạnh nhau, chữ hiện",
    "Nhạc không có lời",
    "Nói trước: chiếc bên phải dùng chip đời cũ hơn. Ổ cũng nhỏ hơn. Bảo hành ngắn hơn.",
    "26–33s · phần bất lợi bắt buộc phải có, không cắt"
  ],
  [
    "6",
    "Giữ khung hai máy, chữ lớn",
    "Nhạc không có lời",
    "Không chiếc nào thắng. Có chiếc hợp với cách bạn làm việc hơn thôi.",
    "33–40s (CHỐT)"
  ],
  [
    "Kịch bản 5: Vệ sinh và tra keo miễn phí trọn đời - không mẫu - voice thật · Thời lượng 42 giây · Quay dọc 9:16 1080x1920 tại quầy kỹ thuật thật 71 Thiên Hiền · Quay thô là đúng: không đèn studio, không găng tay trắng tinh, bàn kỹ thuật thật có tuốc nơ vít khay ốc vết xước · BẮT BUỘC có kỹ thuật viên thật trong khung hình, ít nhất là bàn tay và một lần thấy người · Cảnh cuối phải thấy biển hiệu hoặc mặt tiền 71 Thiên Hiền · Để tiếng thao tác thật, không dùng nhạc dồn dập · Phụ đề bắt buộc · ⛔ Không quay máy đang bán rồi để người xem hiểu là máy shop bẩn — quay máy khách mang đến bảo dưỡng và nói rõ trong phụ đề, không hiện nhiệt độ hay số đo trước sau, không ghi giá, không ghi tên máy, không dùng video tải trên mạng",
    "",
    "",
    "",
    ""
  ],
  [
    "1",
    "Tay kỹ thuật tháo ốc, nhấc nắp lưng máy ra, lộ quạt và khe tản nhiệt đóng bụi",
    "Nhạc không có lời",
    "Chỗ máy cũ chậm dần nằm ở đây.",
    "0–4s (HOOK)"
  ],
  [
    "2",
    "Cận cảnh quạt và khe thoát gió đóng bụi thành mảng",
    "\"Bụi đóng ở quạt và khe thoát gió. Và lớp keo tản nhiệt trên con chip — dùng lâu thì nó khô đi.\"",
    "",
    "4–12s · cảnh thuyết phục nhất, cận phải rõ"
  ],
  [
    "3",
    "Lau sạch quạt, thổi bụi khỏi khe tản nhiệt",
    "\"Vệ sinh quạt, thông khe.\"",
    "",
    "12–20s"
  ],
  [
    "4",
    "Lau lớp keo cũ, tra lớp keo mới lên chip, lắp tản nhiệt về",
    "\"Lau keo cũ, tra lớp keo mới. Đây là phần mất công nhất.\"",
    "",
    "20–28s"
  ],
  [
    "5",
    "Lắp nắp lưng, bật máy lên, đưa lại cho khách",
    "Nhạc không có lời",
    "Vệ sinh, tra keo, cài Windows, cài phần mềm — miễn phí trọn đời cho máy mua tại shop. Không giới hạn số lần.",
    "28–36s"
  ],
  [
    "6",
    "Lùi ra thấy quầy kỹ thuật và biển hiệu cửa hàng",
    "Nhạc không có lời",
    "71 Thiên Hiền, Mỹ Đình 1. Máy nóng thì cứ mang ra.",
    "36–42s (CHỐT)"
  ]
];
  var TITLE_ROWS = [2, 9, 16, 23, 30];

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
