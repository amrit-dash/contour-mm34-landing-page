#!/bin/zsh
# Screenshot the page with the Playwright Chromium already installed on this Mac.
# Usage: tools/render.sh out.png [width=1440] [cssHeight=16000] [urlPath="Methods 3-4 Landing Page.dc.html"] [query=""]
# Output is rendered at device scale 0.5, so a 1440x16000 CSS page becomes a 720x8000 PNG.
set -u
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$1"; W="${2:-1440}"; H="${3:-16000}"; P="${4:-Methods 3-4 Landing Page.dc.html}"; Q="${5:-}"
HS="/Users/amrit/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
if ! curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1:8765/ | grep -q 200; then
  (cd "$ROOT" && python3 -m http.server 8765 --bind 127.0.0.1 >/dev/null 2>&1 &)
  sleep 1
fi
ENC=$(python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1]))' "$P")
URL="http://127.0.0.1:8765/${ENC}${Q}"
"$HS" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=0.5 \
  --use-mock-keychain --disable-background-networking --disable-sync --no-first-run --no-default-browser-check \
  --window-size="$W,$H" --virtual-time-budget=20000 --enable-logging=stderr --v=0 \
  --screenshot="$OUT" "$URL" 2>"${OUT%.png}.log" >/dev/null &
PID=$!
for i in $(seq 1 90); do kill -0 $PID 2>/dev/null || break; sleep 1; done
kill $PID 2>/dev/null
grep -E 'Uncaught|TypeError|ReferenceError|SyntaxError' "${OUT%.png}.log" | grep -v 'net::' | head -5
ls -la "$OUT" | awk '{print $5, $9}'
