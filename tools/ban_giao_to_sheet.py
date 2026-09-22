#!/usr/bin/env python3
"""Sinh bản đẩy Google Sheet từ 1 file bàn giao trong 04-ban-giao/.

Đọc file BAN-GIAO-*.md (bản người đọc) → sinh 3 file cùng thư mục:

  <tên>-doc.csv     cột A = tên trường, cột B.. = từng bài  (đúng layout sheet)
  <tên>-ngang.csv   1 bài = 1 dòng, 10 cột                  (để lọc / soát)
  day-len-sheet.gs  Apps Script: dán vào sheet, Run, script tạo tab mới và điền

Cách dùng:
    python3 tools/ban_giao_to_sheet.py 05_campaigns/<chiến-dịch>/04-ban-giao/BAN-GIAO-<tuần>.md

Script KHÔNG ghi lên Google Sheet — connector hiện tại chỉ đọc. Nó chỉ sinh bản xuất
để người phụ trách đẩy lên (luật #18: local trước, sheet sau; Gate 6 phải có người ký).

File .md phải theo khuôn của 04_content/templates/fanpage-sheet.md mục 1:
mỗi bài là một mục "## <số> · ...", bên trong có bảng 10 trường, khối **CONTENT:**
bọc trong ``` và khối **BRIEF ẢNH...:** ở đầu dòng.
"""

import csv
import json
import re
import sys
from pathlib import Path

FIELDS = ["DATE & TIME", "STT", "ĐỊNH DẠNG", "TUYẾN ND", "TITLE",
          "CONTENT", "BRIEF ẢNH", "LINK ẢNH", "FORMAT", "STATUS"]

# Trường người đẩy tự điền — file .md để trống có chủ ý
FROM_SHEET = {"STT", "LINK ẢNH"}


def parse(md: str) -> list[dict]:
    """Tách file bàn giao thành danh sách bài, mỗi bài là dict 10 trường."""
    parts = re.split(r'^## (\d+) · ', md, flags=re.M)
    posts = []
    for i in range(1, len(parts), 2):
        num, body = int(parts[i]), parts[i + 1]
        table = dict(re.findall(r'^\| \*\*(.+?)\*\* \| (.+?) \|$', body, flags=re.M))

        content = re.search(r'\*\*CONTENT:\*\*\n```\n(.*?)\n```', body, flags=re.S)
        brief = re.search(r'^\*\*BRIEF ẢNH[^\n]*:\*\*\n(.*?)(?=\n---\n|\Z)', body, flags=re.S | re.M)

        post = {k: "" if k in FROM_SHEET else table.get(k, "").strip() for k in FIELDS}
        post["CONTENT"] = content.group(1) if content else ""
        post["BRIEF ẢNH"] = tidy(brief.group(1).strip()) if brief else ""
        post["_n"] = num
        posts.append(post)
    return posts


def tidy(block: str) -> str:
    """Gỡ cú pháp markdown khỏi khối brief để đọc được trong 1 ô sheet."""
    out = []
    for line in block.split("\n"):
        s = line.rstrip()
        if re.match(r'^\|[\s\-|:]+\|$', s):            # dòng kẻ của bảng → bỏ
            continue
        if s.startswith("|") and s.endswith("|"):      # hàng bảng → nối bằng gạch
            s = " — ".join(c for c in (c.strip() for c in s.strip("|").split("|")) if c)
        s = re.sub(r'\*\*(.+?)\*\*', r'\1', s)
        s = re.sub(r'^- ', '• ', s)
        out.append(s)
    return "\n".join(out).strip()


def check(posts: list[dict], md: str) -> None:
    """Chặn sinh file hỏng — thà dừng còn hơn đẩy khối thiếu lên sheet."""
    if not posts:
        sys.exit("✗ Không tìm thấy bài nào. File có đúng khuôn '## <số> · ...' không?")
    for p in posts:
        n = p["_n"]
        for k in FIELDS:
            if k in FROM_SHEET:
                continue
            if not p[k]:
                sys.exit(f"✗ Bài {n}: thiếu trường {k}")
        if p["CONTENT"] not in md:
            sys.exit(f"✗ Bài {n}: CONTENT không khớp nguyên văn file .md")
        if "```" in p["BRIEF ẢNH"]:
            sys.exit(f"✗ Bài {n}: khối BRIEF ẢNH nuốt nhầm phần caption")
        if p["STATUS"] != "CHỜ FEEDBACK":
            sys.exit(f"✗ Bài {n}: STATUS phải là 'CHỜ FEEDBACK', đang là '{p['STATUS']}'")


def write_csv(path: Path, rows: list[list[str]]) -> None:
    with path.open("w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f, quoting=csv.QUOTE_ALL).writerows(rows)


def write_gs(path: Path, posts: list[dict], src_name: str, tab: str) -> None:
    data = [[p[k] for k in FIELDS] for p in posts]
    path.write_text(GS_TEMPLATE % {
        "src": src_name,
        "tab": tab,
        "fields": json.dumps(FIELDS, ensure_ascii=False),
        "data": json.dumps(data, ensure_ascii=False, indent=1),
        "content_row": FIELDS.index("CONTENT") + 1,
        "brief_row": FIELDS.index("BRIEF ẢNH") + 1,
    }, encoding="utf-8")


GS_TEMPLATE = """/**
 * Đẩy khối bàn giao lên Google Sheet fanpage.
 *
 * Nguồn: %(src)s
 * Sinh bằng tools/ban_giao_to_sheet.py — đừng sửa thẳng file này, sửa file .md rồi sinh lại.
 *
 * CÁCH CHẠY
 *   1. Mở sheet "Digital Plan - Social Laptop Thịnh Vượng"
 *   2. Tiện ích mở rộng (Extensions) → Apps Script
 *   3. Xoá code mẫu, dán toàn bộ file này vào, Ctrl+S
 *   4. Bấm Run (hàm dayLenSheet) → lần đầu Google hỏi quyền thì Cho phép
 *   5. Script tạo TAB MỚI, không ghi đè tab nào đang có.
 *      Soát xong thì copy khối sang đúng chỗ trong tab lịch tháng.
 *
 * ⚠️ Cột STT và LINK ẢNH để trống có chủ ý:
 *    STT phải nối tiếp số POST đang chạy trong sheet · LINK ẢNH chờ thiết kế điền.
 * ⚠️ STATUS để CHỜ FEEDBACK. Chỉ người phụ trách đổi thành ĐÃ AIR sau khi bài đã đăng thật.
 */

var TEN_TAB = '%(tab)s';

var TRUONG = %(fields)s;

var DU_LIEU = %(data)s;

function dayLenSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var ten = TEN_TAB;                                    // không ghi đè tab đang có
  for (var i = 2; ss.getSheetByName(ten); i++) ten = TEN_TAB + ' v' + i;
  var sh = ss.insertSheet(ten, 0);

  var bang = [];                                        // cột A = tên trường, B.. = từng bài
  for (var r = 0; r < TRUONG.length; r++) {
    var dong = [TRUONG[r]];
    for (var c = 0; c < DU_LIEU.length; c++) dong.push(DU_LIEU[c][r]);
    bang.push(dong);
  }
  sh.getRange(1, 1, bang.length, bang[0].length).setValues(bang);

  sh.getRange(1, 1, TRUONG.length, 1).setFontWeight('bold');
  sh.setColumnWidth(1, 120);
  for (var c = 2; c <= DU_LIEU.length + 1; c++) sh.setColumnWidth(c, 340);
  sh.getRange(1, 1, TRUONG.length, DU_LIEU.length + 1).setWrap(true).setVerticalAlignment('top');
  sh.setFrozenColumns(1);
  sh.setRowHeight(%(content_row)d, 420);
  sh.setRowHeight(%(brief_row)d, 300);

  SpreadsheetApp.getUi().alert(
    'Đã tạo tab "' + ten + '" với ' + DU_LIEU.length + ' nội dung.\\n\\n' +
    'STATUS = CHỜ FEEDBACK. Cột STT còn trống — đánh tiếp theo số POST đang chạy trong sheet.'
  );
}
"""


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1]).resolve()
    md = src.read_text(encoding="utf-8")

    posts = parse(md)
    check(posts, md)

    stem = src.stem.replace("BAN-GIAO-", "SHEET-")
    # SHEET-TUAN-05-11-10 → "TUAN 05-11.10 (AI)" (ngày đầu – ngày cuối . tháng)
    tuan = re.match(r'^SHEET-TUAN-(\d{2})-(\d{2})-(\d{2})$', stem)
    tab = f"TUAN {tuan[1]}-{tuan[2]}.{tuan[3]} (AI)" if tuan else f"{stem} (AI)"

    doc = src.parent / f"{stem}-doc.csv"
    ngang = src.parent / f"{stem}-ngang.csv"
    gs = src.parent / "day-len-sheet.gs"

    write_csv(doc, [[k] + [p[k] for p in posts] for k in FIELDS])
    write_csv(ngang, [FIELDS] + [[p[k] for k in FIELDS] for p in posts])
    write_gs(gs, posts, src.name, tab)

    print(f"✓ {len(posts)} bài — tab sẽ tạo: {tab}")
    for p in posts:
        print(f"  {p['_n']:>2}. {p['DATE & TIME']} · {p['ĐỊNH DẠNG']:<7} · {p['TUYẾN ND']}")
    for f in (doc, ngang, gs):
        print(f"→ {f.relative_to(Path.cwd()) if f.is_relative_to(Path.cwd()) else f}")
    print("\n⚠️ Chưa ghi gì lên Google Sheet — connector chỉ đọc. Xem README trong 04-ban-giao/.")


if __name__ == "__main__":
    main()
