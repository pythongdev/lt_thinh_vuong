#!/usr/bin/env python3
"""Sinh bản đẩy sheet KỊCH BẢN VIDEO từ 1 file KICH-BAN-VIDEO-*.md trong 04-ban-giao/.

Đọc file KICH-BAN-VIDEO-*.md (bản người đọc) → sinh 2 file cùng thư mục:

  <tên>.csv            đúng 5 cột của sheet KB, có dòng tiêu đề từng kịch bản
  day-len-kb-sheet.gs  Apps Script: dán vào sheet KB, Run, script tạo tab mới,
                       điền, merge dòng tiêu đề, bật xuống dòng

Cách dùng:
    python3 tools/kich_ban_to_sheet.py 05_campaigns/<chiến-dịch>/04-ban-giao/KICH-BAN-VIDEO-<tuần>.md

Script KHÔNG ghi lên Google Sheet và KHÔNG upload Drive — đó là việc sau khi
người dùng nói "ok" (luật #8, #18: Gate 6 phải có người ký).

Khuôn file .md: 04_content/templates/reel_template/kich-ban-video-sheet.md
  - mỗi kịch bản là một mục "## KB<n> · ..."
  - bên trong có 1 khối ``` chứa đúng dòng tiêu đề merge
  - theo sau là bảng 5 cột STT | BỐI CẢNH | NỘI DỤNG - VOICE | TEXT MÀN HÌNH | NOTE
"""

import csv
import json
import re
import sys
from pathlib import Path

# Header lấy y nguyên từ tab gid=1727303797 — "TEXT  MÀN HÌNH" có HAI dấu cách
COLS = ["STT", "BỐI CẢNH", "NỘI DỤNG - VOICE", "TEXT  MÀN HÌNH", "NOTE"]


def parse(md: str) -> list[dict]:
    """Tách file thành danh sách kịch bản: {'title': str, 'scenes': [[5 ô], ...]}."""
    parts = re.split(r'^## KB(\d+) · ', md, flags=re.M)
    scripts = []
    for i in range(1, len(parts), 2):
        num, body = int(parts[i]), parts[i + 1]

        fence = re.search(r'```\n(.*?)\n```', body, flags=re.S)
        if not fence:
            sys.exit(f"KB{num}: thiếu khối ``` chứa dòng tiêu đề merge")
        title = " ".join(fence.group(1).split())

        scenes = []
        for line in body.split("\n"):
            s = line.strip()
            if not (s.startswith("|") and s.endswith("|")):
                continue
            cells = [c.strip() for c in s[1:-1].split("|")]
            if len(cells) != 5:
                continue
            if cells[0] in ("STT", "---") or re.fullmatch(r'[-: ]*', cells[0]):
                continue
            scenes.append(cells)

        if not scenes:
            sys.exit(f"KB{num}: không tìm thấy dòng cảnh nào trong bảng 5 cột")
        scripts.append({"n": num, "title": title, "scenes": scenes})
    return scripts


def check(scripts: list[dict]) -> None:
    """Cảnh báo những lỗi hay gặp. In ra stderr, không chặn."""
    warn = []
    for s in scripts:
        stt = [c[0] for c in s["scenes"]]
        if stt != [str(i + 1) for i in range(len(stt))]:
            warn.append(f"KB{s['n']}: STT không đếm liền từ 1 → {stt}")
        if not re.match(r'^Kịch bản \d+:', s["title"]):
            warn.append(f"KB{s['n']}: dòng tiêu đề không mở đầu bằng 'Kịch bản <N>:'")
        if not re.search(r'không mẫu|có mẫu', s["title"], re.I):
            warn.append(f"KB{s['n']}: dòng tiêu đề thiếu 'có mẫu' / 'không mẫu'")
        if not re.search(r'voice|nhạc', s["title"], re.I):
            warn.append(f"KB{s['n']}: dòng tiêu đề thiếu phần voice thật / voice AI / nhạc")
        for c in s["scenes"]:
            if not c[1]:
                warn.append(f"KB{s['n']} cảnh {c[0]}: ô BỐI CẢNH trống")
    for w in warn:
        print("⚠️  " + w, file=sys.stderr)


def write_csv(path: Path, scripts: list[dict]) -> None:
    rows = [COLS]
    for s in scripts:
        rows.append([s["title"], "", "", "", ""])   # dòng tiêu đề — merge trong sheet
        rows += s["scenes"]
    with path.open("w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f).writerows(rows)


def write_gs(path: Path, scripts: list[dict], src_name: str, tab: str) -> None:
    rows = [COLS]
    titles = []                                     # số dòng cần merge (1-based)
    for s in scripts:
        titles.append(len(rows) + 1)
        rows.append([s["title"], "", "", "", ""])
        rows += s["scenes"]

    body = f"""/**
 * Đẩy kịch bản video lên sheet KB — sinh tự động từ {src_name}
 * KHÔNG sửa file này. Sửa file .md rồi chạy lại:
 *   python3 tools/kich_ban_to_sheet.py <đường dẫn .md>
 *
 * Cách chạy: mở sheet KB → Tiện ích mở rộng → Apps Script → dán → Run dayLenKB
 * Script TẠO TAB MỚI, không ghi đè tab nào đang có.
 */
function dayLenKB() {{
  var TAB  = {json.dumps(tab, ensure_ascii=False)};
  var ROWS = {json.dumps(rows, ensure_ascii=False, indent=2)};
  var TITLE_ROWS = {json.dumps(titles)};

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (ss.getSheetByName(TAB)) {{
    throw new Error('Tab "' + TAB + '" đã có rồi. Đổi tên tab cũ hoặc sửa biến TAB.');
  }}
  var sh = ss.insertSheet(TAB);

  sh.getRange(1, 1, ROWS.length, {len(COLS)}).setValues(ROWS);

  // dòng tiêu đề mỗi kịch bản: merge hết 5 cột, in đậm, nền nhạt
  TITLE_ROWS.forEach(function (r) {{
    var range = sh.getRange(r, 1, 1, {len(COLS)});
    range.merge().setFontWeight('bold').setBackground('#e8eaed').setWrap(true);
  }});

  sh.getRange(1, 1, 1, {len(COLS)}).setFontWeight('bold').setBackground('#d9d9d9');
  sh.setFrozenRows(1);
  sh.getRange(1, 1, ROWS.length, {len(COLS)}).setVerticalAlignment('top').setWrap(true);
  sh.setColumnWidth(1, 45);
  sh.setColumnWidth(2, 320);
  sh.setColumnWidth(3, 360);
  sh.setColumnWidth(4, 260);
  sh.setColumnWidth(5, 260);

  SpreadsheetApp.getUi().alert(
    'Xong. Đã tạo tab "' + TAB + '" với ' + TITLE_ROWS.length + ' kịch bản.\\n\\n' +
    'Việc còn phải tự làm:\\n' +
    '· Đánh lại số "Kịch bản <N>" theo số đang chạy trong tab đích\\n' +
    '· Soát lại rồi copy khối sang đúng chỗ'
  );
}}
"""
    path.write_text(body, encoding="utf-8")


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1]).resolve()
    md = src.read_text(encoding="utf-8")

    scripts = parse(md)
    if not scripts:
        sys.exit("Không tìm thấy mục '## KB<n> · ...' nào trong file.")
    check(scripts)

    tuan = re.sub(r'^KICH-BAN-VIDEO-TUAN-', '', src.stem)
    tab = f"KB TUAN {tuan[::-1].replace('-', '.', 1)[::-1]} (AI)"[:99]

    csv_path = src.with_suffix(".csv")
    gs_path = src.parent / "day-len-kb-sheet.gs"
    write_csv(csv_path, scripts)
    write_gs(gs_path, scripts, src.name, tab)

    def show(path: Path) -> str:
        """Đường dẫn gọn so với thư mục đang đứng — file ngoài repo thì in nguyên."""
        try:
            return str(path.relative_to(Path.cwd()))
        except ValueError:
            return str(path)

    n = sum(len(s["scenes"]) for s in scripts)
    print(f"✅ {len(scripts)} kịch bản · {n} cảnh")
    print(f"   {show(csv_path)}")
    print(f"   {show(gs_path)}   → tab đích: {tab}")
    print("⬜ Chưa ghi gì lên sheet, chưa upload Drive — chờ Gate 6 (luật #18).")


if __name__ == "__main__":
    main()
