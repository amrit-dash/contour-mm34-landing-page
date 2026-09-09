#!/usr/bin/env python3
"""Insert a robots noindex meta into the packed page.

GitHub Pages cannot serve custom headers, so site/_headers has no effect
there. This is the only way to keep an internal review build out of search
indexes while it is hosted on Pages. Idempotent; safe to re-run.
"""
import sys, pathlib

META = '<meta name="robots" content="noindex, nofollow, noarchive">'
target = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "site/index.html")
html = target.read_text(encoding="utf-8")

if 'name="robots"' in html:
    print(f"noindex already present in {target}")
    sys.exit(0)

i = html.find("<head>")
if i == -1:
    sys.exit(f"error: no <head> found in {target}")

i += len("<head>")
target.write_text(html[:i] + "\n" + META + html[i:], encoding="utf-8")
print(f"noindex meta inserted into {target}")
