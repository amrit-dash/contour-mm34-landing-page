#!/usr/bin/env python3
"""One-shot transform for `Methods 3-4 Landing Page.dc.html`:

1. Remove every sticky `.pstrip` chip and every `.pwrap` wrapper; each chip's label becomes a
   static `.eyebrow` at the top of the section it introduced.
2. Merge the three `#pillar-N` sections into one `#system` section: one sticky journey rail
   (three collapsible groups, 19 steps) and one panel that swaps between the three pillar panels.
3. Side rail: one System dot instead of three pillar dots; FAQ dot points at #faq; progress line.
4. Sections get `thread` (story line) and `dark` (navy background) classes for the new CSS.

Idempotent guard: refuses to run if `#system` already exists.
"""
import re

P = "Methods 3-4 Landing Page.dc.html"
s = open(P, encoding="utf-8").read()
assert '<section id="system"' not in s, "already transformed"
head, js = s.split('<script type="text/x-dc"', 1)


def find_close(src, start, tag):
    """Index just after the close tag balancing the open tag at `start`."""
    open_re = re.compile(r"<" + tag + r"(?=[\s>])")
    close = "</" + tag + ">"
    depth, pos = 0, start
    while True:
        no = open_re.search(src, pos)
        nc = src.find(close, pos)
        assert nc != -1, "unbalanced " + tag
        if no and no.start() < nc:
            depth += 1
            pos = no.end()
        else:
            depth -= 1
            pos = nc + len(close)
        if depth == 0:
            return pos


# ── 0. harvest pillar content before anything moves ─────────────────────────
pillars = []
for n in (1, 2, 3):
    sec_start = head.index('<section id="pillar-%d"' % n)
    sec_end = find_close(head, sec_start, "section")
    sec = head[sec_start:sec_end]
    h2 = re.search(r"<h2[^>]*>(.*?)</h2>", sec, re.S).group(1).strip()
    lead = re.search(r"</h2><p[^>]*>(.*?)</p>", sec, re.S).group(1).strip()
    r0 = sec.index('<div class="jsticky">')
    r1 = find_close(sec, r0, "div")
    rail = sec[r0:r1]
    f0 = rail.index("<sc-for")
    f1 = rail.index("</sc-for>", f0) + len("</sc-for>")
    t0 = sec.index('<div class="tabpanel"')
    t1 = find_close(sec, t0, "div")
    program = ""
    if n == 1:
        g0 = sec.index('<div style="margin-top:56px">')
        g1 = find_close(sec, g0, "div")
        program = sec[g0:g1]
    pillars.append(dict(n=n, h2=h2, lead=lead, steps_for=rail[f0:f1], panel=sec[t0:t1], program=program))

# ── 1. pstrip chips -> eyebrow labels; drop pwrap wrappers ───────────────────
labels = {}
while True:
    m = re.search(r'\n?<div class="pstrip">', head)
    if not m:
        break
    e = find_close(head, m.end() - len('<div class="pstrip">'), "div")
    block = head[m.start():e]
    label = re.search(r"<span[^>]*>([^<]+)</span>", block).group(1).strip()
    nxt = re.search(r'<section id="([^"]+)"', head[e:e + 600])
    if nxt:
        labels[nxt.group(1)] = label
    head = head[:m.start()] + head[e:]

while True:
    m = re.search(r'<div class="pwrap(?: band)?">', head)
    if not m:
        break
    e = find_close(head, m.start(), "div")
    inner = head[m.end():e]
    inner = inner[: inner.rfind("</div>")]
    head = head[:m.start()] + inner + head[e:]

# pillar labels are not needed as eyebrows (they live in the rail groups)
for k in ("pillar-1", "pillar-2", "pillar-3"):
    labels.pop(k, None)

# ── 2. build #system and replace the pillar zone ─────────────────────────────
z0 = head.index('<section id="pillar-1"')
z1 = find_close(head, head.index('<section id="pillar-3"'), "section")

chip = {1: ("var(--navy)", "var(--cream)"), 2: ("var(--og-blue)", "#FFF9F1"), 3: ("var(--highlighter)", "var(--navy)")}
counts = {1: 6, 2: 7, 3: 6}
rail_groups, panels = [], []
for p in pillars:
    n = p["n"]
    bg, fg = chip[n]
    first = "true" if n == 1 else "false"
    rail_groups.append(
        '<span id="pillar-%d" class="sysanchor"></span>\n'
        '<button class="sysgrp {{ sysG%d }}" sc-camel-on-click="{{ sysPick%d }}" aria-expanded="{{ sysA%d }}">\n'
        '  <span class="sysgrp-top"><span class="sysgrp-chip" style="background:%s;color:%s">Pillar %d</span>'
        '<span class="sysgrp-n">%d parts</span><span class="sysgrp-chev" aria-hidden="true">{{ sysC%d }}</span></span>\n'
        '  <span class="sysgrp-name">%s</span>\n'
        '  <span class="sysgrp-lead">%s</span>\n'
        '</button>\n'
        '<sc-if value="{{ sysP%d }}" hint-placeholder-val="{{ %s }}">\n<div class="syssteps">\n%s\n</div>\n</sc-if>\n'
        % (n, n, n, n, bg, fg, n, counts[n], n, p["h2"], p["lead"], n, first, p["steps_for"])
    )
    panels.append('<sc-if value="{{ sysP%d }}" hint-placeholder-val="{{ %s }}">\n%s\n</sc-if>' % (n, first, p["panel"]))

program = pillars[0]["program"].replace('<div style="margin-top:56px">', '<div class="sysprogram" style="margin-top:64px">', 1)

system = '''
<section id="system" data-screen-label="S6 The Contour System · 19 parts" class="sec sys" style="padding-top:12px!important">
  <div class="ctrp" style="max-width:var(--container-max);margin:0 auto;padding:0 clamp(32px,11vw,210px)">
    <div class="pillarg sysg">
      <div class="jsticky sysrail">
        <p class="sysrail-title"><span></span>Your journey · 19 parts</p>
%s
      </div>
      <div class="syspanel">
%s
      </div>
    </div>
%s
  </div>
</section>
''' % ("\n".join(rail_groups), "\n".join(panels), program)
head = head[:z0] + system + head[z1:]

# ── 3. eyebrows + section classes ────────────────────────────────────────────
def patch_section(m):
    tag = m.group(0)
    sid = m.group(1)
    if sid in ("top",):
        return tag
    cls = re.search(r'class="([^"]*)"', tag)
    classes = cls.group(1).split() if cls else []
    if "sec" in classes:
        if sid not in ("story", "system") and "thread" not in classes:
            classes.append("thread")
    # dark = navy background (h2 in cream)
    body = head[m.end():m.end() + 2500]
    h2 = re.search(r"<h2[^>]*>", body)
    if h2 and "var(--cream)" in h2.group(0) and "dark" not in classes:
        classes.append("dark")
    if cls:
        tag = tag.replace(cls.group(0), 'class="%s"' % " ".join(classes))
    elif classes:
        tag = tag[:-1] + ' class="%s">' % " ".join(classes)
    return tag

head = re.sub(r'<section id="([^"]+)"[^>]*>', patch_section, head)

for sid, label in labels.items():
    a = head.find('<section id="%s"' % sid)
    if a == -1:
        continue
    c = re.compile(r'<div class="ctrp"[^>]*>').search(head, a)
    if not c or c.start() > a + 800:
        continue
    head = head[:c.end()] + '\n    <span class="eyebrow">%s</span>' % label + head[c.end():]

# ── 4. side rail ─────────────────────────────────────────────────────────────
for n in (1, 2, 3):
    head, k = re.subn(r'\s*<a href="#pillar-%d" class="raildot".*?</a>' % n, "", head, count=1, flags=re.S)
    assert k == 1, n
head, k = re.subn(r'(<a href="#method" class="raildot" data-ids=")method(")', r"\1method,system\2", head, count=1)
assert k == 1
head, k = re.subn(r'<a href="#final" class="raildot" data-ids="final,faq"', '<a href="#faq" class="raildot" data-ids="final,faq"', head, count=1)
assert k == 1
head, k = re.subn(r'(<nav id="secrail"[^>]*>)', r'\1<span class="prog" aria-hidden="true"></span>', head, count=1)
assert k == 1

# ── 5. CSS ───────────────────────────────────────────────────────────────────
head = "\n".join(l for l in head.split("\n") if ".pstrip" not in l and ".pwrap" not in l)
sys_css = r'''
    /* ── eyebrow chips (former sticky strips) ── */
    .eyebrow{display:inline-flex;align-items:center;gap:9px;font:600 12.5px/1 var(--font-body);color:var(--navy);background:var(--surface-raised);border:1px solid var(--border-subtle);border-radius:999px;padding:8px 13px 8px 11px;margin:0 0 18px;box-shadow:var(--shadow-xs)}
    .eyebrow::before{content:"";width:8px;height:8px;border-radius:2px;background:var(--navy);flex:none}
    .sec.dark .eyebrow{color:var(--cream);background:rgba(255,249,241,.08);border-color:var(--border-on-navy);box-shadow:none}
    .sec.dark .eyebrow::before{background:var(--highlighter)}
    /* ── The Contour System: one rail, three groups, one panel ── */
    .sys .pillarg{grid-template-columns:minmax(300px,380px) minmax(0,1fr);align-items:start}
    .sysrail{position:sticky;top:120px;align-self:start;max-height:calc(100vh - 140px);overflow:auto;scrollbar-width:none;padding-right:6px}
    .sysrail::-webkit-scrollbar{display:none}
    @media (max-width:1100px){.sysrail{position:static;max-height:none}}
    .sysrail-title{display:flex;align-items:center;gap:10px;font:600 13px/1 var(--font-body);color:var(--navy);letter-spacing:.02em;margin:0 0 18px}
    .sysrail-title>span{width:18px;height:3px;background:var(--navy);border-radius:2px}
    .sysanchor{display:block;position:relative;top:-140px;height:0}
    .sysgrp{appearance:none;border:1px solid var(--border-subtle);background:var(--surface-raised);border-radius:var(--radius-lg);cursor:pointer;text-align:left;width:100%;display:flex;flex-direction:column;gap:6px;padding:16px 18px;margin:0 0 12px;font-family:var(--font-body);box-shadow:var(--shadow-xs);transition:box-shadow var(--dur-s) var(--ease),transform var(--dur-s) var(--ease),border-color var(--dur-s) var(--ease)}
    .sysgrp:hover{box-shadow:var(--shadow-md);transform:translateY(-1px)}
    .sysgrp.on{border-color:var(--navy);box-shadow:var(--shadow-sm)}
    .sysgrp-top{display:flex;align-items:center;gap:10px;width:100%}
    .sysgrp-chip{font:700 11px/1 var(--font-body);border-radius:999px;padding:6px 10px;letter-spacing:.02em}
    .sysgrp-n{font:600 12px/1 var(--font-body);color:var(--text-muted)}
    .sysgrp-chev{margin-left:auto;width:26px;height:26px;border-radius:50%;border:1.5px solid var(--border-default);color:var(--navy);display:inline-flex;align-items:center;justify-content:center;font:500 15px/1 var(--font-body)}
    .sysgrp.on .sysgrp-chev{border-color:var(--navy);background:var(--navy);color:var(--cream)}
    .sysgrp-name{font-family:var(--font-display);font-weight:700;font-size:22px;letter-spacing:-0.015em;line-height:1.15;color:var(--navy)}
    .sysgrp-lead{font:400 13.5px/1.5 var(--font-body);color:var(--text-muted);display:none}
    .sysgrp.on .sysgrp-lead{display:block}
    .syssteps{padding:6px 4px 10px 6px;animation:sysIn var(--dur-m) var(--ease) both}
    .syssteps>button{padding-bottom:18px!important;grid-template-columns:72px 1fr!important;gap:14px!important}
    .syssteps>button>span:nth-child(2),.syssteps>button>span:nth-child(2)>span:first-child{width:72px!important;height:72px!important}
    .syssteps>button>span:first-child{left:35.25px!important;top:72px!important}
    .syssteps>button>span:nth-child(3)>span:first-child{font-size:15.5px!important}
    .syssteps>button>span:nth-child(3)>span:last-child{font-size:13px!important}
    @keyframes sysIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
    .syspanel{min-width:0;position:sticky;top:120px;align-self:start}
    @media (max-width:1100px){.syspanel{position:static}}
    .syspanel>*{animation:sysIn var(--dur-m) var(--ease) both}
    .sysprogram .g3,.sysprogram .lvlrow{grid-template-columns:repeat(3,1fr)!important}
    @media (max-width:880px){.sysprogram .g3,.sysprogram .lvlrow{grid-template-columns:1fr!important}}
    #method.sec{padding-bottom:28px!important}
    @media (prefers-reduced-motion:reduce){.syssteps,.syspanel>*{animation:none}}
'''
anchor = "  </style>\n</helmet>"
assert head.count(anchor) == 1, head.count(anchor)
head = head.replace(anchor, sys_css + anchor)

# ── 6. JS ────────────────────────────────────────────────────────────────────
js, k = re.subn(r"railOn: false,\n", "railOn: false,\n    sysP: 1,\n", js, count=1); assert k == 1
old = '''    this.setState({ [key]: i }, () => {
      if (!scroll) return;
      const el = document.getElementById("pillar-" + key.slice(1));
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: "smooth" });'''
new = '''    this.setState({ [key]: i, sysP: Number(key.slice(1)) }, () => {
      if (!scroll) return;
      const el = document.getElementById("system");
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });'''
assert js.count(old) == 1; js = js.replace(old, new)
old = 'pv[key + "prev"] = () => this._pillarGo(key, (cur + n - 1) % n);'
new = 'pv[key + "prev"] = () => { if (cur > 0) this._pillarGo(key, cur - 1); else { const pk = key === "p1" ? "p3" : key === "p2" ? "p1" : "p2"; this._pillarGo(pk, ({ p1: 5, p2: 6, p3: 5 })[pk]); } };'
assert js.count(old) == 1; js = js.replace(old, new)
old = 'pv[key + "next"] = () => this._pillarGo(key, (cur + 1) % n);'
new = ('pv[key + "next"] = () => { if (cur < n - 1) this._pillarGo(key, cur + 1); else this._pillarGo(key === "p1" ? "p2" : key === "p2" ? "p3" : "p1", 0); };\n'
       '      const gn = Number(key.slice(1)), gon = (S.sysP || 1) === gn;\n'
       '      pv["sysP" + gn] = gon; pv["sysG" + gn] = gon ? "on" : ""; pv["sysA" + gn] = gon ? "true" : "false"; pv["sysC" + gn] = gon ? "\\u2212" : "+";\n'
       '      pv["sysPick" + gn] = () => this._pillarGo(key, Math.min(S[key] || 0, n - 1), false);')
assert js.count(old) == 1; js = js.replace(old, new)
old = 'this._tabMap = { classes: ["p1", 0],'
new = 'this._tabMap = { "pillar-1": ["p1", 0], "pillar-2": ["p2", 0], "pillar-3": ["p3", 0], classes: ["p1", 0],'
assert js.count(old) == 1; js = js.replace(old, new)

open(P, "w", encoding="utf-8").write(head + '<script type="text/x-dc"' + js)
print("done. eyebrows:", labels)
