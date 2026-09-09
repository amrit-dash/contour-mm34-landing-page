#!/usr/bin/env python3
"""Pack `Methods 3-4 Landing Page.dc.html` into one self-contained HTML file.

Strategy (mirrors what the Claude Design bundler did):
  * external <script src> / <link href> become data: URLs (kept as external refs so the
    dc-runtime helmet manager treats them exactly as before; no inline-script parsing).
  * asset paths in markup attributes (src/href/poster/url()) become data URIs.
  * asset paths used inside the page script are served through `window.__resources`
    (the page's own R() helper already looks there, keyed by path with non-alnum -> "_").
  * Leaflet comes from tools/vendor (fetched once) so the packed file works offline.

Usage: python3 tools/pack.py [source.dc.html] [output.html]
"""
import base64
import glob
import mimetypes
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "Methods 3-4 Landing Page.dc.html")
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "Contour Methods 3-4 Landing Page.html")

mimetypes.add_type("font/ttf", ".ttf")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("text/css", ".css")


def read_bytes(path):
    with open(path, "rb") as f:
        return f.read()


def read_text(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def b64(data):
    return base64.b64encode(data).decode("ascii")


def data_uri_bytes(data, mime):
    return "data:%s;base64,%s" % (mime, b64(data))


def data_uri(path):
    mime = mimetypes.guess_type(path)[0] or "application/octet-stream"
    return data_uri_bytes(read_bytes(path), mime)


def resolve(rel, base_dir):
    rel = re.sub(r"^\./", "", rel)
    for cand in (os.path.join(base_dir, rel), os.path.join(ROOT, rel)):
        if os.path.isfile(cand):
            return cand
    return None


def inline_css_urls(css, css_dir):
    def rep(m):
        url = m.group(2)
        if url.startswith(("data:", "http", "#")):
            return m.group(0)
        p = resolve(url, css_dir)
        return "url(%s)" % data_uri(p) if p else m.group(0)
    return re.sub(r"url\((['\"]?)([^'\")]+)\1\)", rep, css)


html = read_text(SRC)
missing = []

# 1. stylesheets -> data: URLs (relative url() inside them inlined first)
def rep_link(m):
    href = m.group(1)
    if href.startswith("http"):
        if "leaflet" in href:
            css = read_text(os.path.join(ROOT, "tools/vendor/leaflet.css"))
            return '<link rel="stylesheet" href="%s">' % data_uri_bytes(css.encode(), "text/css")
        return m.group(0)  # Google Fonts stays external (fonts are not vendored)
    p = resolve(href, ROOT)
    if not p:
        missing.append(href)
        return m.group(0)
    css = inline_css_urls(read_text(p), os.path.dirname(p))
    return '<link rel="stylesheet" href="%s">' % data_uri_bytes(css.encode(), "text/css")

html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', rep_link, html)

# 2. scripts -> data: URLs
def rep_script(m):
    src = m.group(1)
    if src.startswith("http"):
        if "leaflet" in src:
            js = read_bytes(os.path.join(ROOT, "tools/vendor/leaflet.js"))
            return '<script src="%s"></script>' % data_uri_bytes(js, "text/javascript")
        return m.group(0)
    p = resolve(src, ROOT)
    if not p:
        missing.append(src)
        return m.group(0)
    return '<script src="%s"></script>' % data_uri_bytes(read_bytes(p), "text/javascript")

html = re.sub(r'<script src="([^"]+)"></script>', rep_script, html)

# 3. asset paths in markup attributes and url()
def rep_attr(m):
    attr, q, path = m.group(1), m.group(2), m.group(3)
    p = resolve(path, ROOT)
    if not p:
        missing.append(path)
        return m.group(0)
    return "%s=%s%s%s" % (attr, q, data_uri(p), q)

html = re.sub(r'\b(src|href|poster)=(["\'])((?:\./)?assets/[^"\']+)\2', rep_attr, html)
html = re.sub(r"url\((['\"]?)((?:\./)?assets/[^'\")]+)\1\)",
              lambda m: "url(%s)" % data_uri(resolve(m.group(2), ROOT)) if resolve(m.group(2), ROOT) else m.group(0),
              html)

# 4. every asset once, for the page script's R() helper
res = {}
for path in sorted(glob.glob(os.path.join(ROOT, "assets", "**", "*.*"), recursive=True)):
    rel = os.path.relpath(path, ROOT).replace(os.sep, "/")
    if rel.endswith((".ttf", ".DS_Store")):
        continue
    key = re.sub(r"[^a-zA-Z0-9]", "_", rel)
    res[key] = data_uri(path)
# Values become blob: URLs at load time. A raw data: URI contains ";base64," and the dc-runtime
# splits inline style strings on ";", which truncates any photo applied as background-image.
res_js = (
    "window.__resources=(function(m){var o={};for(var k in m){var v=m[k];try{var i=v.indexOf(';base64,');"
    "var mime=v.slice(5,i);var bin=atob(v.slice(i+8));var a=new Uint8Array(bin.length);"
    "for(var j=0;j<bin.length;j++)a[j]=bin.charCodeAt(j);o[k]=URL.createObjectURL(new Blob([a],{type:mime}));}"
    "catch(e){o[k]=v;}}return o;})({%s});" % ",".join('"%s":"%s"' % (k, v) for k, v in res.items())
)
html = html.replace("<head>", "<head>\n<script>%s</script>" % res_js, 1)

# inside the page script, route every "assets/..." literal through R() so it resolves from
# window.__resources (a bare relative path would resolve relative to wherever the packed file sits)
def rep_page_script(m):
    js = m.group(2)
    js = re.sub(r'(?<!R\()"((?:\./)?assets/[^"]+)"', lambda mm: 'R("%s")' % mm.group(1), js)
    js = js.replace('img: "assets/" + st[3]', 'img: R("assets/" + st[3])')
    return m.group(1) + js + m.group(3)

html = re.sub(r'(<script type="text/x-dc"[^>]*>)(.*?)(</script>)', rep_page_script, html, flags=re.S)

# 5. ext-resource-dependency meta tags are meaningless once inlined
html = re.sub(r'\s*<meta name="ext-resource-dependency"[^>]*/>', "", html)

with open(OUT, "w", encoding="utf-8") as f:
    f.write(html)

size = os.path.getsize(OUT)
print("packed -> %s (%.1f MB)" % (os.path.basename(OUT), size / 1e6))
if missing:
    print("UNRESOLVED (%d):" % len(missing))
    for m in sorted(set(missing)):
        print("  ", m)
