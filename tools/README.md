# Lấy dữ liệu Facebook Page — hướng dẫn

Mục đích: kéo bài đăng cũ + số liệu hiệu quả của page **Laptop Thịnh Vượng** về máy,
để AI phân tích xem kiểu content nào thật sự ra đơn, rồi viết bài mới theo đúng kiểu đó.

Đây là cách chính thống của Meta (Graph API), **không phải scraping**, và
**không cần đưa mật khẩu cho ai**. Token có thể thu hồi bất cứ lúc nào.

---

## Bước 1 — Lấy Page Access Token (khoảng 5 phút)

1. Vào https://developers.facebook.com/tools/explorer/
2. Đăng nhập bằng tài khoản Facebook **đang quản trị page** Laptop Thịnh Vượng.
3. Góc phải, mục **Meta App**: chọn app có sẵn, hoặc bấm *Create New App* →
   chọn loại **Business** → đặt tên gì cũng được (vd: "LTV Content Tool").
4. Mục **User or Page**: chọn **Get User Access Token**.
5. Ở ô **Permissions**, thêm 3 quyền sau:
   - `pages_show_list`
   - `pages_read_engagement`
   - `read_insights`
6. Bấm **Generate Access Token** → Facebook hỏi xác nhận → chọn đúng page → **Continue**.
7. Copy chuỗi token trong ô Access Token (bắt đầu bằng `EAA...`).

> Token này mặc định sống ~1–2 giờ. Đủ để chạy script. Cần dùng lâu dài thì
> đổi sang long-lived token — làm sau cũng được.

## Bước 2 — Chạy script

Mở Terminal tại thư mục dự án:

```bash
export FB_PAGE_TOKEN="EAA...dán_token_vào_đây..."
python3 tools/fb_fetch.py
```

Script tự tìm page bạn quản trị. Nếu bạn quản trị nhiều page, nó sẽ in ra danh sách
để bạn chọn, khi đó chạy thêm:

```bash
export FB_PAGE_ID="số_id_page"
python3 tools/fb_fetch.py
```

## Bước 3 — Kết quả

| File | Nội dung |
|---|---|
| `07_analytics/fb_posts.md` | Bảng xếp hạng bài theo tương tác + toàn văn 10 bài tốt nhất |
| `07_analytics/fb_posts_raw.json` | Dữ liệu thô để phân tích sâu |

Sau đó mở Claude Code và nói:
> "Phân tích `07_analytics/fb_posts.md`, rút ra công thức content đang hiệu quả"

---

## Bảo mật
- **Không commit token** vào git. Chỉ để trong biến môi trường như hướng dẫn trên.
- Thu hồi token bất cứ lúc nào tại
  https://www.facebook.com/settings?tab=business_tools
- Token chỉ có quyền **đọc** (3 quyền ở trên không cho phép đăng bài hay xóa gì cả).

## Nếu gặp lỗi

| Thông báo | Xử lý |
|---|---|
| `Thiếu FB_PAGE_TOKEN` | Chưa chạy dòng `export`. Chạy lại bước 2. |
| `Graph API lỗi (190)` | Token hết hạn → tạo lại ở bước 1. |
| `Token không quản lý page nào` | Tài khoản chưa phải admin page, hoặc thiếu quyền `pages_show_list`. |
| Cột Reach toàn `—` | Thiếu quyền `read_insights`, hoặc app chưa được duyệt. Bài + tương tác vẫn lấy được bình thường. |

---

## Không muốn làm token?

Cách nhanh hơn nhưng thủ công: mở **Meta Business Suite → Nội dung → Bài viết**,
chọn khoảng thời gian, bấm **Xuất dữ liệu** ra file CSV, rồi để file đó vào
`07_analytics/` và bảo tôi đọc. Hoặc đơn giản nhất: copy caption vài bài chạy tốt
dán thẳng vào chat.
