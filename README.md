# Ma's Health Record (Kana Saha)

A private, offline web app with a timeline of Ma's stroke and the follow-up care, built from the scanned reports.

**Open it:** double-click `index.html` (or run `open index.html`). No internet or server is needed.

## Folder layout
- `index.html`: the app
- `data/health-data.js`: ALL content (timeline, reports, explanations, medicines, labs, diet, questions, progress log)
- `scans/original/page-01.jpg … page-42.jpg`: copies of the CamScanner pages (originals are still in Downloads)
- `scans/thumbs/`: small previews (`./add-thumbs.sh` regenerates them)
- `notes-extraction.md`: raw page-by-page transcription notes

## Page map (scan → document)
| Pages | Document |
|---|---|
| 1–2 | BSH Dhaka emergency discharge + CT brain (5 Apr 2026) |
| 3–4 | BSH MRI brain + MRA (5–6 Apr) |
| 5–11 | CMC Vellore neurology discharge summary (1–5 Jun) |
| 12–13 | CMC FibroScan (4 Jun) |
| 14–19, 40 | CMC DEXA bone density (2 Jun) |
| 20–21 | BSH echo (6 Apr) |
| 22–26 | BSH blood and urine tests (5 Apr) |
| 27–28 | BSH abdominal ultrasound (6 Apr) |
| 29–35 | CMC diet booklet (3 Jun) |
| 36 | BSH ECG (6 Apr) |
| 37 | CMC ECG (30 May) |
| 38 | CMC abdominal ultrasound (2 Jun) |
| 39 | CMC carotid Doppler (2 Jun) |
| 41–42 | CMC echo (2 Jun) |

## Adding new reports
1. Copy the scan into `scans/original/` with the next number (`page-43.jpg`, …).
2. Run `./add-thumbs.sh`.
3. Add a `documents` entry and a `timeline` entry in `data/health-data.js` (or ask Claude to do it).

## Medicine guide
`data/med-guide.js` holds the Medicine guide tab: benefits, side effects, missed or stopped doses. Every point comes from an NHS or MedlinePlus leaflet (checked 15 Nov 2026), with a source link. If a medicine changes, update this file and cite an official leaflet. Never fill gaps from memory.
