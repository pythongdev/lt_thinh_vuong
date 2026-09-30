# Tự tải bộ update_gpt lên Google Drive

Trên Terminal của Mac, chạy:

```bash
cd /Users/monghoaivu/Desktop/code/laptoptv_ai_content_system
brew install rclone
python3 tools/upload_update_gpt.py
```

Nếu đã có rclone, bỏ dòng `brew install rclone`. Nếu chưa có Homebrew, cài rclone theo [hướng dẫn chính thức](https://rclone.org/install/) rồi chạy lệnh Python.

Lần đầu, trình duyệt mở để bạn đăng nhập Google và cấp quyền. Chọn tài khoản có quyền ghi vào [thư mục chiến dịch](https://drive.google.com/drive/folders/1wbJJaGa7YhwX13XPFD9vX6eP2_NboQNB). Script dùng quyền `drive` để truy cập thư mục đã tồn tại. Token nằm trong `~/.config/laptoptv-upload/rclone.conf`, ngoài repository; không gửi file này cho người khác.

Script kiểm tra toàn bộ file theo manifest, tạo thư mục con có ngày giờ và mã riêng, tải đủ các file bàn giao rồi so khớp dữ liệu. Không xóa hoặc ghi đè bản cũ. File Excel giữ nguyên định dạng; trên Drive chọn mở bằng Google Sheets. Script không tự chuyển thành Google Sheets và không tạo liên kết công khai; thư mục mới thừa hưởng quyền chia sẻ từ thư mục cha.

Sau khi xong, Terminal in link và ghi `04-ban-giao/update_gpt/UPLOAD-RESULT.json`. File này là kết quả upload mới nhất; README/manifest trong bộ soạn thảo vẫn ghi trạng thái tại thời điểm bàn giao.

Kiểm tra file trước, không cần đăng nhập hoặc cài rclone:

```bash
python3 tools/upload_update_gpt.py --dry-run
```

Đổi tài khoản hoặc đăng nhập lại khi token hết hiệu lực:

```bash
python3 tools/upload_update_gpt.py --reconnect
```

Nếu upload bị ngắt, chạy lại sẽ tạo thư mục mới. Nếu báo file khác manifest, cần soát thay đổi và cập nhật manifest trước khi upload; script không bỏ qua kiểm tra đó.

Tham khảo: [cấu hình Google Drive](https://rclone.org/drive/), [tạo cấu hình](https://rclone.org/commands/rclone_config_create/), [kiểm tra file sau tải](https://rclone.org/commands/rclone_check/).
