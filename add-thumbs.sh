#!/bin/zsh
# Creates thumbnails for any scans/original/page-XX.jpg that don't have one yet.
cd "$(dirname "$0")"
mkdir -p scans/thumbs
for f in scans/original/*.jpg; do
  t="scans/thumbs/$(basename "$f")"
  [[ -f "$t" ]] || { sips -Z 520 "$f" --out "$t" >/dev/null && echo "thumb: $t"; }
done
