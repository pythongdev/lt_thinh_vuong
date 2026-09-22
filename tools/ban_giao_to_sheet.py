#!/usr/bin/env python3
"""Sinh bản đẩy Google Sheet từ 1 file bàn giao trong 04-ban-giao/.

Đọc file BAN-GIAO-*.md (bản người đọc) → sinh 3 file cùng thư mục:

  <tên>-luoi.csv    ĐÚNG LƯỚI SHEET: 9 dòng × 8 cột, 1 khối = 1 tuần
  <tên>-ngang.csv   1 bài = 1 dòng                          (chỉ để lọc / soát)
  day-len-sheet.gs  Apps Script: dán vào sheet, Run, script tạo tab mới và vẽ lưới

Cách dùng:
    python3 tools/ban_giao_to_sheet.py 05_campaigns/<chiến-dịch>/04-ban-giao/BAN-GIAO-<tuần>.md

Khuôn lưới lấy nguyên văn từ tab đang chạy của sheet fanpage (T9.2026, đọc 2026-09-22):

    (ô A: khung giờ) | Thứ 2 | Thứ 3 | Thứ 4 | Thứ 5 | Thứ 6 | Thứ 7 | Chủ Nhật
    (trống)          | 05-10 | 06-10 | ...
    ĐỊNH DẠNG        | ...
    TUYẾN ND         | ...
    CONTENT          | ...
    BRIEF ẢNH        | ...
    LINK ẢNH/ KB     | ...
    FORMAT           | ...
    STATUS           | ...

Không có dòng STT / TITLE / DATE & TIME trên sheet — tab đang chạy đã bỏ.
Đặc tả đầy đủ: 04_content/templates/post-template.md

Script KHÔNG ghi lên Google Sheet — connector hiện tại chỉ đọc. Nó chỉ sinh bản xuất
để người phụ trách đẩy lên (luật #18: local trước, sheet sau; Gate 6 phải có người ký).
"""

import csv
import datetime as dt
import json
import re
import sys
from pathlib import Path

# 7 nhãn ở cột A, đúng thứ tự dòng trên sheet
SHEET_ROWS = ["ĐỊNH DẠNG", "TUYẾN ND", "CONTENT", "BRIEF ẢNH",
              "LINK ẢNH/ KB", "FORMAT", "STATUS"]

# Trường người đẩy / thiết kế tự điền — file .md để trống có chủ ý
FROM_SHEET = {"LINK ẢNH/ KB"}

# Chỉ sống trong file .md, không thành dòng trên sheet
MD_ONLY = ["DATE & TIME"]

THU = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"]

PLACEHOLDER = re.compile(r'^\*\(.*\)\*$')       # "*(để trống — chưa quay)*" → ô rỗng


def parse(md: str, year: int) -> list[dict]:
    """Tách file bàn giao thành danh sách bài."""
    parts = re.split(r'^## (\d+) · ', md, flags=re.M)
    posts = []
    for i in range(1, len(parts), 2):
        num, body = int(parts[i]), parts[i + 1]
        table = dict(re.findall(r'^\| \*\*(.+?)\*\* \| (.+?) \|$', body, flags=re.M))
        table = {k.strip(): ("" if PLACEHOLDER.match(v.strip()) else v.strip())
                 for k, v in table.items()}
        table.setdefault("LINK ẢNH/ KB", table.get("LINK ẢNH", ""))

        content = re.search(r'\*\*CONTENT:\*\*\n```\n(.*?)\n```', body, flags=re.S)
        brief = re.search(r'^\*\*BRIEF ẢNH[^\n]*:\*\*\n(.*?)(?=\n---\n|\Z)', body, flags=re.S | re.M)

        post = {k: "" if k in FROM_SHEET else table.get(k, "") for k in SHEET_ROWS}
        post["DATE & TIME"] = table.get("DATE & TIME", "")
        post["CONTENT"] = content.group(1) if content else ""
        post["BRIEF ẢNH"] = tidy(brief.group(1).strip()) if brief else ""
        post["_n"] = num
        post.update(split_date(post["DATE & TIME"], num, year))
        posts.append(post)
    return posts


def split_date(raw: str, n: int, year: int) -> dict:
    """'05-10 (Thứ 2) · 12:15' → ngày thật + cột thứ mấy + khung giờ."""
    m = re.match(r'^\s*(\d{2})[-/](\d{2})\s*\((Thứ [2-7]|Chủ [Nn]hật)\)\s*(?:·\s*(\d{1,2}:\d{2}))?',
                 raw)
    if not m:
        sys.exit(f"✗ Bài {n}: 'DATE & TIME' phải dạng '05-10 (Thứ 2) · 12:15', đang là '{raw}'")
    day, month, thu, gio = m[1], m[2], m[3].replace("nhật", "Nhật"), m[4] or ""
    try:
        date = dt.date(year, int(month), int(day))
    except ValueError:
        sys.exit(f"✗ Bài {n}: ngày {day}-{month}-{year} không có thật")
    if THU[date.weekday()] != thu:
        sys.exit(f"✗ Bài {n}: {day}-{month}-{year} là {THU[date.weekday()]}, "
                 f"file .md ghi {thu}")
    return {"_date": date, "_col": date.weekday(), "_gio": gio}


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
    cho = {}
    for p in posts:
        n = p["_n"]
        for k in SHEET_ROWS + MD_ONLY:
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
        if "|" in p["CONTENT"]:
            sys.exit(f"✗ Bài {n}: ô CONTENT có ký tự '|' — vỡ cột khi nhập CSV")
        key = (p["_date"], p["_gio"])                  # 1 ngày 1 khung giờ = 1 ô
        if key in cho:
            sys.exit(f"✗ Bài {n} và bài {cho[key]} trùng ô {p['_date']} {p['_gio']}. "
                     f"Đặt khung giờ khác nhau — xem post-template.md mục 1.")
        cho[key] = n


def blocks(posts: list[dict]) -> list[dict]:
    """Xếp bài thành các khối tuần. 1 tuần nhiều khung giờ → 1 khối / khung giờ."""
    out = {}
    for p in posts:
        tuan = p["_date"] - dt.timedelta(days=p["_col"])      # thứ 2 của tuần đó
        out.setdefault((tuan, p["_gio"]), {})[p["_col"]] = p
    return [{"tuan": tuan, "gio": gio, "o": o}
            for (tuan, gio), o in sorted(out.items(), key=lambda kv: kv[0])]


def luoi(bl: list[dict]) -> list[list[str]]:
    """Dựng đúng lưới sheet: 9 dòng / khối, chừa 1 dòng trống giữa 2 khối."""
    rows = []
    for b in bl:
        rows.append([b["gio"]] + THU)
        rows.append([""] + [(b["tuan"] + dt.timedelta(days=c)).strftime("%d-%m")
                            for c in range(7)])
        for nhan in SHEET_ROWS:
            rows.append([nhan] + [b["o"][c][nhan] if c in b["o"] else "" for c in range(7)])
        rows.append([""] * 8)
    return rows[:-1]


def write_csv(path: Path, rows: list[list[str]]) -> None:
    with path.open("w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f, quoting=csv.QUOTE_ALL).writerows(rows)


def write_gs(path: Path, rows: list[list[str]], src_name: str, tab: str) -> None:
    path.write_text(GS_TEMPLATE % {
        "src": src_name,
        "tab": tab,
        "luoi": json.dumps(rows, ensure_ascii=False, indent=1),
        "nhan": json.dumps(SHEET_ROWS, ensure_ascii=False),
    }, encoding="utf-8")


GS_TEMPLATE = """/**
 * Đẩy khối bàn giao lên Google Sheet fanpage — đúng lưới của tab đang chạy.
 *
 * Nguồn: %(src)s
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

var TEN_TAB = '%(tab)s';

var NHAN = %(nhan)s;

var LUOI = %(luoi)s;

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
    'Đã tạo tab "' + ten + '".\\n\\n' +
    'STATUS = CHỜ FEEDBACK · dòng LINK ẢNH/ KB còn trống cho thiết kế điền.'
  );
}
"""


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    src = Path(sys.argv[1]).resolve()
    md = src.read_text(encoding="utf-8")

    nam = re.search(r'/(\d{4})-\d{2}-\d{2}-', str(src))     # năm lấy từ tên thư mục chiến dịch
    year = int(nam[1]) if nam else dt.date.today().year

    posts = parse(md, year)
    check(posts, md)
    bl = blocks(posts)
    rows = luoi(bl)

    stem = src.stem.replace("BAN-GIAO-", "SHEET-")
    # SHEET-TUAN-05-11-10 → "TUAN 05-11.10 (AI)" (ngày đầu – ngày cuối . tháng)
    tuan = re.match(r'^SHEET-TUAN-(\d{2})-(\d{2})-(\d{2})$', stem)
    tab = f"TUAN {tuan[1]}-{tuan[2]}.{tuan[3]} (AI)" if tuan else f"{stem} (AI)"

    f_luoi = src.parent / f"{stem}-luoi.csv"
    f_ngang = src.parent / f"{stem}-ngang.csv"
    f_gs = src.parent / "day-len-sheet.gs"

    write_csv(f_luoi, rows)
    write_csv(f_ngang, [MD_ONLY + SHEET_ROWS] +
              [[p[k] for k in MD_ONLY + SHEET_ROWS] for p in posts])
    write_gs(f_gs, rows, src.name, tab)

    print(f"✓ {len(posts)} bài · {len(bl)} khối · tab sẽ tạo: {tab}")
    for b in bl:
        print(f"  tuần {b['tuan']:%d-%m}" + (f" · {b['gio']}" if b["gio"] else "") +
              f" — {len(b['o'])} nội dung")
        for c in sorted(b["o"]):
            p = b["o"][c]
            print(f"      {THU[c]:<9} {p['_date']:%d-%m}  {p['ĐỊNH DẠNG']:<7} · {p['TUYẾN ND']}")
    for f in (f_luoi, f_ngang, f_gs):
        print(f"→ {f.relative_to(Path.cwd()) if f.is_relative_to(Path.cwd()) else f}")
    print("\n⚠️ Chưa ghi gì lên Google Sheet — connector chỉ đọc. Xem README trong 04-ban-giao/.")


if __name__ == "__main__":
    main()
