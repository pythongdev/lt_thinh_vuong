#!/usr/bin/env python3
"""Upload the reviewed update_gpt package with rclone; no Python dependencies."""

import argparse
from datetime import datetime
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import uuid


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "05_campaigns/2026-09-28-chuong-2-sinh-vien-chuyen-sau/04-ban-giao/update_gpt"
CONFIG = Path.home() / ".config/laptoptv-upload/rclone.conf"
REMOTE = "laptoptv_upload"


def run(args, capture=False):
    # Arguments are passed directly, without invoking a shell.
    result = subprocess.run(args, text=True, capture_output=capture)
    if result.returncode:
        if capture and result.stderr:
            print(result.stderr, file=sys.stderr)
        raise RuntimeError("Lệnh thất bại; chưa xác nhận upload hoàn tất.")
    return result.stdout if capture else None


def package_files(source, manifest):
    files = []
    for item in manifest["files"]:
        relative = Path(item["path"])
        path = source / relative
        if relative.is_absolute() or ".." in relative.parts or path.is_symlink():
            raise ValueError(f"Đường dẫn không hợp lệ: {relative}")
        path.resolve().relative_to(source.resolve())
        if not path.is_file():
            raise ValueError(f"Thiếu file: {relative}")
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        if digest != item["sha256"]:
            raise ValueError(f"File đã đổi so với manifest: {relative}. Cần soát và cập nhật manifest trước khi tải.")
        files.append(relative)
    if not files or len(files) != len(set(files)):
        raise ValueError("Manifest trống hoặc lặp đường dẫn.")
    return files


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true", help="Chỉ kiểm tra file; không đăng nhập, không gọi Drive.")
    parser.add_argument("--reconnect", action="store_true", help="Đăng nhập lại Google cho cấu hình riêng của script.")
    args = parser.parse_args()
    manifest = json.loads((SOURCE / "UPLOAD-MANIFEST.json").read_text())
    files = package_files(SOURCE, manifest)
    parent = manifest["target_parent_id"]
    folder_name = manifest["target_folder_name"] + " · " + datetime.now().strftime("%Y%m%d-%H%M%S") + "-" + uuid.uuid4().hex[:8]
    print(f"Đã kiểm tra SHA-256 của {len(files)} file.", flush=True)
    print(f"Thư mục cha: https://drive.google.com/drive/folders/{parent}", flush=True)
    print(f"Thư mục mới: {folder_name}", flush=True)
    if args.dry_run:
        print("DRY RUN: không đăng nhập, không upload.")
        return
    rclone = shutil.which("rclone")
    if not rclone:
        raise RuntimeError("Chưa có rclone. Trên Mac chạy: brew install rclone\nRồi chạy lại script này.")
    CONFIG.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
    os.umask(0o077)
    base = [rclone, "--config", str(CONFIG)]
    remotes = run(base + ["listremotes"], capture=True).splitlines()
    if REMOTE + ":" not in remotes:
        print("Trình duyệt sẽ mở: đăng nhập tài khoản có quyền ghi vào thư mục chiến dịch.", flush=True)
        print("rclone yêu cầu quyền Drive để truy cập thư mục đã có; script chỉ tải vào thư mục mới bên trong đích trên.", flush=True)
        run(base + ["config", "create", REMOTE, "drive", "scope", "drive",
                    "root_folder_id", parent, "config_is_local", "true", "--no-output"])
    elif args.reconnect:
        run(base + ["config", "reconnect", REMOTE + ":"])
    if CONFIG.exists():
        CONFIG.chmod(0o600)
    # Pin the destination even if someone edited the dedicated remote config.
    drive = base + ["--drive-root-folder-id", parent]
    run(drive + ["lsjson", REMOTE + ":", "--stat"], capture=True)
    destination = REMOTE + ":" + folder_name
    # A unique destination also makes reruns safe: no previous version is overwritten.
    run(drive + ["mkdir", destination])
    with tempfile.TemporaryDirectory(prefix="laptoptv-upload-") as tmp:
        staged = Path(tmp)
        for relative in files:
            target = staged / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(SOURCE / relative, target)
        # Verify the snapshot too, to catch edits made while copying it.
        package_files(staged, manifest)
        run(drive + ["copy", str(staged), destination, "--immutable", "--progress"])
        run(drive + ["check", str(staged), destination, "--one-way"])
    info = json.loads(run(drive + ["lsjson", destination, "--stat"], capture=True))
    folder_id = info.get("ID")
    if not folder_id:
        raise RuntimeError("Đã kiểm tra file tải lên, nhưng chưa lấy được ID thư mục. Xem thư mục cha trên Drive.")
    link = f"https://drive.google.com/drive/folders/{folder_id}"
    result = {"status": "UPLOADED_AND_CHECKED", "uploaded_at": datetime.now().astimezone().isoformat(),
              "folder_url": link, "folder_id": folder_id, "folder_name": folder_name,
              "files": manifest["files"], "verification": "rclone check --one-way"}
    (SOURCE / "UPLOAD-RESULT.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n")
    print(f"\nĐÃ TẢI VÀ KIỂM TRA {len(files)} FILE:\n{link}")
    print(f"Link đã lưu tại: {SOURCE / 'UPLOAD-RESULT.json'}")
    print("Mở hai file .xlsx trên Drive bằng Google Sheets để xem nội dung. Quyền chia sẻ giữ theo thư mục cha.")
    print("README trong gói là bản ghi lúc soạn; trạng thái upload mới nhất nằm trong UPLOAD-RESULT.json ở máy bạn.")


if __name__ == "__main__":
    try:
        main()
    except (RuntimeError, ValueError, OSError, KeyError) as exc:
        print(f"Lỗi: {exc}", file=sys.stderr)
        sys.exit(1)
    except KeyboardInterrupt:
        print("\nĐã dừng. Nếu đang tải, thư mục mới có thể chưa đủ file; chạy lại sẽ tạo bản mới.", file=sys.stderr)
        sys.exit(130)
