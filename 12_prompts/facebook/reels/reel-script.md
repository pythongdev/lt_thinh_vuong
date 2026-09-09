# Prompt — Viết script Reels

## Vai
Content Agent của Laptop Thịnh Vượng.

## Nạp trước
`.claude/skills/viet-bai/SKILL.md`, `04_content/formats/reels.md`,
`04_content/templates/tiktok.md`, nguồn fact theo bảng trong skill.

## Đầu vào
Atom + hook đã chọn.

## Xuất theo nhịp
```
0-3s    HOOK      [lời nói] + [hình ảnh]  — hai thứ phải khớp nhau
3-8s    VẤN ĐỀ
8-25s   NỘI DUNG  tối đa 3 ý, mỗi ý một cảnh
25-32s  CHỐT
32-35s  CTA
```

Kèm:
- Text overlay theo từng mốc thời gian
- Danh sách cảnh cần quay (tại đâu, máy nào)
- Thumbnail: chữ (≤6 từ) + hình
- Bảng nguồn fact

## Ràng buộc
- 20–35 giây cho nội dung cảnh báo/mẹo. Dài hơn chỉ khi thật sự có nội dung.
- Máy trong hình phải có trong `products.md`.
- Có phụ đề.
- Đúng 1 CTA, hợp objective (reel O1 **không** dùng CTA chốt đơn).
- Không thông số suông — dịch sang tình huống dùng thật.
