/* @ds-bundle: {"format":4,"namespace":"ContourDesignSystem_0483dc","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"SubjectBadge","sourcePath":"components/data-display/SubjectBadge.jsx"},{"name":"Callout","sourcePath":"components/feedback/Callout.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"950293abd0f9","components/buttons/IconButton.jsx":"2338b780524c","components/data-display/Avatar.jsx":"9729358b1538","components/data-display/Badge.jsx":"ef5de52d66e6","components/data-display/Card.jsx":"86c119b3fd55","components/data-display/SubjectBadge.jsx":"e9448e42dcf5","components/feedback/Callout.jsx":"dbc851e1696b","components/forms/Checkbox.jsx":"f8715ded3608","components/forms/Input.jsx":"8e4c5497b604","components/forms/Select.jsx":"052abf7176a3","components/forms/Switch.jsx":"b7ba5835b94a","components/navigation/Tabs.jsx":"7035cfdce4fc","ui_kits/lms/Dashboard.jsx":"fc6a9af3c775","ui_kits/lms/Sidebar.jsx":"b015391fb7d1","ui_kits/lms/SubjectDocument.jsx":"88e2a7e769c6","ui_kits/lms/SubjectSidebar.jsx":"87d8ddd7e919","ui_kits/lms/SubjectTopbar.jsx":"4293906cf3c7","ui_kits/marketing/Hero.jsx":"8537ed62332d","ui_kits/marketing/Nav.jsx":"b726e5101616","ui_kits/marketing/Sections.jsx":"a3c23a718b6e","ui_kits/marketing/Services.jsx":"c5d70f3d2c2a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ContourDesignSystem_0483dc = window.ContourDesignSystem_0483dc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Button — the primary action element.
 * CTAs are Inter Semi Bold, sentence/Title case, rounded capsule.
 * Highlighter is the standout CTA fill (navy text); navy is the
 * solid secondary; outline/ghost for lower emphasis.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  onNavy = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: "14px",
      gap: "6px"
    },
    md: {
      padding: "12px 22px",
      fontSize: "15px",
      gap: "8px"
    },
    lg: {
      padding: "16px 30px",
      fontSize: "17px",
      gap: "10px"
    }
  };
  const palettes = {
    primary: {
      background: "var(--highlighter)",
      color: "var(--navy)",
      border: "2px solid var(--highlighter)"
    },
    secondary: {
      background: "var(--navy)",
      color: "var(--cream)",
      border: "2px solid var(--navy)"
    },
    outline: {
      background: "transparent",
      color: onNavy ? "var(--cream)" : "var(--navy)",
      border: `2px solid ${onNavy ? "var(--border-on-navy)" : "var(--navy)"}`
    },
    ghost: {
      background: "transparent",
      color: onNavy ? "var(--cream)" : "var(--navy)",
      border: "2px solid transparent"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1,
    letterSpacing: "0.005em",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? "100%" : "auto",
    transition: "transform var(--duration-fast) var(--ease-standard), background var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
    ...sizes[size],
    ...palettes[variant],
    ...style
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === "primary" ? {
    background: "var(--highlighter-m)",
    borderColor: "var(--highlighter-m)"
  } : variant === "secondary" ? {
    background: "var(--navy-m)",
    borderColor: "var(--navy-m)"
  } : {
    background: onNavy ? "rgba(255,249,241,0.10)" : "rgba(12,49,102,0.06)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...hoverStyle,
      transform: active && !disabled ? "scale(0.97)" : "scale(1)"
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour IconButton — a square/circular button for a single glyph.
 * Pass an SVG (or any node) as children. Defaults to a circular,
 * subtle control suited to toolbars and nav.
 */
function IconButton({
  children,
  variant = "subtle",
  size = "md",
  onNavy = false,
  round = true,
  disabled = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const d = dims[size];
  const palettes = {
    solid: {
      background: "var(--navy)",
      color: "var(--cream)"
    },
    subtle: {
      background: onNavy ? "rgba(255,249,241,0.10)" : "var(--surface-raised)",
      color: onNavy ? "var(--cream)" : "var(--navy)",
      boxShadow: onNavy ? "none" : "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: onNavy ? "var(--cream)" : "var(--navy)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === "solid" ? {
    background: "var(--navy-m)"
  } : {
    background: onNavy ? "rgba(255,249,241,0.18)" : "var(--cream-m)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: round ? "var(--radius-pill)" : "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--duration-base) var(--ease-standard)",
      ...palettes[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Avatar — a circular identity token. Shows an image when
 * `src` is given, otherwise initials on a navy fill. Used for
 * students, tutors and testimonials.
 */
function Avatar({
  src,
  name = "",
  size = "md",
  tone = "navy",
  style = {},
  ...rest
}) {
  const dims = {
    xs: 28,
    sm: 36,
    md: 44,
    lg: 56,
    xl: 72
  };
  const d = dims[size] || dims.md;
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  const tones = {
    navy: {
      background: "var(--navy)",
      color: "var(--cream)"
    },
    cream: {
      background: "var(--cream-m)",
      color: "var(--navy)"
    },
    blue: {
      background: "var(--subject-ucat)",
      color: "var(--cream)"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: d,
      height: d,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flex: "none",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: d * 0.4,
      letterSpacing: "0.01em",
      ...tones[tone],
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Badge — a small status / category pill.
 * Tones map to semantic + brand colours. Text stays legible
 * (never highlighter/OG-blue as text), so accent tones use a
 * soft tint background with navy text.
 */
function Badge({
  children,
  tone = "navy",
  size = "md",
  style = {},
  ...rest
}) {
  const tones = {
    navy: {
      background: "var(--navy)",
      color: "var(--cream)"
    },
    soft: {
      background: "var(--cream-m)",
      color: "var(--navy)"
    },
    outline: {
      background: "transparent",
      color: "var(--navy)",
      boxShadow: "inset 0 0 0 1.5px var(--border-default)"
    },
    success: {
      background: "rgba(69,161,114,0.16)",
      color: "#256B47"
    },
    warning: {
      background: "rgba(223,153,67,0.18)",
      color: "#8A551A"
    },
    error: {
      background: "rgba(185,60,64,0.14)",
      color: "#8E2D30"
    },
    info: {
      background: "rgba(0,122,255,0.12)",
      color: "var(--og-blue-m)"
    },
    highlight: {
      background: "var(--highlighter)",
      color: "var(--navy)"
    }
  };
  const sizes = {
    sm: {
      fontSize: "11px",
      padding: "3px 9px"
    },
    md: {
      fontSize: "12.5px",
      padding: "4px 11px"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1.2,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Card — the default surface container. Soft rounded
 * corners, warm low shadow, hairline border. `tone` switches
 * between cream-raised (default), navy and charcoal surfaces.
 * `interactive` adds a hover lift.
 */
function Card({
  children,
  tone = "raised",
  padding = "lg",
  interactive = false,
  style = {},
  ...rest
}) {
  const tones = {
    raised: {
      background: "var(--surface-raised)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)"
    },
    flat: {
      background: "var(--cream)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    navy: {
      background: "var(--navy)",
      color: "var(--text-on-navy)",
      border: "1px solid var(--navy-m)",
      boxShadow: "var(--shadow-md)"
    },
    charcoal: {
      background: "var(--charcoal)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--charcoal-m)",
      boxShadow: "var(--shadow-md)"
    }
  };
  const pads = {
    none: "0",
    sm: "16px",
    md: "20px",
    lg: "28px",
    xl: "36px"
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding: pads[padding],
      fontFamily: "var(--font-body)",
      transition: "transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      boxShadow: hover ? "var(--shadow-lg)" : tones[tone].boxShadow,
      cursor: interactive ? "pointer" : "default",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/SubjectBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SUBJECTS = {
  mathematics: {
    label: "Mathematics",
    color: "var(--subject-mathematics)"
  },
  "maths-methods": {
    label: "Maths Methods",
    color: "var(--subject-maths-methods)"
  },
  "specialist-maths": {
    label: "Specialist Maths",
    color: "var(--subject-specialist-maths)"
  },
  biology: {
    label: "Biology",
    color: "var(--subject-biology)"
  },
  chemistry: {
    label: "Chemistry",
    color: "var(--subject-chemistry)"
  },
  physics: {
    label: "Physics",
    color: "var(--subject-physics)"
  },
  "english-language": {
    label: "English Language",
    color: "var(--subject-english-language)"
  },
  "selective-entry": {
    label: "Selective Entry",
    color: "var(--subject-selective-entry)"
  },
  ucat: {
    label: "UCAT",
    color: "var(--subject-ucat)"
  }
};

/**
 * Contour SubjectBadge — labels a piece of content with its subject,
 * using the subject palette. A navy-anchored dot carries the colour;
 * the label text stays navy (per the text-colour rule).
 */
function SubjectBadge({
  subject = "mathematics",
  label,
  size = "md",
  style = {},
  ...rest
}) {
  const meta = SUBJECTS[subject] || SUBJECTS.mathematics;
  const sizes = {
    sm: {
      fontSize: "11.5px",
      padding: "4px 10px 4px 8px",
      dot: 8
    },
    md: {
      fontSize: "13px",
      padding: "5px 13px 5px 10px",
      dot: 10
    }
  };
  const s = sizes[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-medium)",
      color: "var(--navy)",
      background: "var(--surface-raised)",
      boxShadow: "inset 0 0 0 1.5px var(--border-subtle)",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      fontSize: s.fontSize,
      padding: s.padding,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dot,
      height: s.dot,
      borderRadius: "50%",
      background: meta.color,
      flex: "none"
    }
  }), label || meta.label);
}
Object.assign(__ds_scope, { SubjectBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/SubjectBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Callout.jsx
try { (() => {
/**
 * Contour Callout — an inline message block for tips, notes and
 * status. Left accent bar in the tone colour, soft tinted fill,
 * navy/charcoal text (never accent-coloured text).
 */
function Callout({
  children,
  title,
  tone = "info",
  icon = null,
  style = {}
}) {
  const tones = {
    info: {
      bar: "var(--og-blue)",
      bg: "rgba(0,122,255,0.07)"
    },
    success: {
      bar: "var(--subject-biology)",
      bg: "rgba(69,161,114,0.10)"
    },
    warning: {
      bar: "var(--subject-chemistry)",
      bg: "rgba(223,153,67,0.12)"
    },
    error: {
      bar: "var(--subject-specialist-maths)",
      bg: "rgba(185,60,64,0.09)"
    },
    neutral: {
      bar: "var(--navy)",
      bg: "var(--cream-m)"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "note",
    style: {
      display: "flex",
      gap: "12px",
      background: t.bg,
      borderLeft: `4px solid ${t.bar}`,
      borderRadius: "var(--radius-md)",
      padding: "14px 16px",
      fontFamily: "var(--font-body)",
      color: "var(--charcoal)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.bar,
      flex: "none",
      display: "inline-flex",
      marginTop: "1px"
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      color: "var(--navy)",
      marginBottom: "2px",
      fontSize: "15px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      lineHeight: 1.55,
      color: "var(--text-muted)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Callout.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Checkbox — controlled checkbox with a navy fill and
 * cream tick. Label sits to the right, sentence case.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? "cb-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--charcoal)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 21,
      height: 21,
      borderRadius: "7px",
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--navy)" : "var(--surface-raised)",
      border: `1.5px solid ${checked ? "var(--navy)" : "var(--border-default)"}`,
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.2 4.2L19 7",
    stroke: "var(--cream)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Input — text field with optional label, hint and error.
 * Rounded, cream-white fill, navy focus ring (OG blue). Sentence
 * case labels.
 */
function Input({
  label,
  hint,
  error,
  id,
  iconLeft = null,
  size = "md",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const sizes = {
    md: {
      padding: "11px 14px",
      fontSize: "15px"
    },
    lg: {
      padding: "14px 16px",
      fontSize: "16px"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "13.5px",
      fontWeight: "var(--weight-medium)",
      color: "var(--navy)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      background: "var(--surface-raised)",
      border: `1.5px solid ${error ? "var(--status-error)" : focus ? "var(--og-blue)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
      padding: sizes[size].padding
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      border: "none",
      outline: "none",
      background: "transparent",
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: sizes[size].fontSize,
      color: "var(--charcoal)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12.5px",
      color: error ? "var(--status-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Select — a styled native select with a custom chevron.
 * Matches Input styling for a consistent form rhythm.
 */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  size = "md",
  style = {},
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const sizes = {
    md: {
      padding: "11px 38px 11px 14px",
      fontSize: "15px"
    },
    lg: {
      padding: "14px 40px 14px 16px",
      fontSize: "16px"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "13.5px",
      fontWeight: "var(--weight-medium)",
      color: "var(--navy)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      background: "var(--surface-raised)",
      border: `1.5px solid ${error ? "var(--status-error)" : focus ? "var(--og-blue)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      color: "var(--charcoal)",
      fontFamily: "var(--font-body)",
      cursor: "pointer",
      transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
      ...sizes[size]
    }
  }, rest), children || options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const text = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12.5px",
      color: error ? "var(--status-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Contour Switch — a toggle control. Navy track when on; the knob
 * is cream. Optional label to the right.
 */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? "sw-" + label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--charcoal)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      borderRadius: "var(--radius-pill)",
      flex: "none",
      background: checked ? "var(--navy)" : "var(--cream-m)",
      padding: "3px",
      boxSizing: "border-box",
      transition: "background var(--duration-base) var(--ease-standard)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--cream)",
      boxShadow: "var(--shadow-sm)",
      transform: checked ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Contour Tabs — a simple underline tab bar. Controlled via
 * `value`/`onChange` or uncontrolled with `defaultValue`. The
 * active tab is navy with a navy underline; a highlighter accent
 * can be enabled for marketing contexts.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  accent = "navy",
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue || tabs[0] && tabs[0].value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const underline = accent === "highlight" ? "var(--highlighter)" : "var(--navy)";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1.5px solid var(--border-subtle)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, tabs.map(t => {
    const isActive = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => select(t.value),
      style: {
        appearance: "none",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "11px 16px",
        marginBottom: "-1.5px",
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        fontWeight: isActive ? "var(--weight-semibold)" : "var(--weight-medium)",
        color: isActive ? "var(--navy)" : "var(--text-muted)",
        borderBottom: `3px solid ${isActive ? underline : "transparent"}`,
        transition: "color var(--duration-base) var(--ease-standard)",
        display: "inline-flex",
        alignItems: "center",
        gap: "7px"
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        fontWeight: 600,
        background: isActive ? "var(--navy)" : "var(--cream-m)",
        color: isActive ? "var(--cream)" : "var(--text-muted)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 8px"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lms/Dashboard.jsx
try { (() => {
/* LMS — main dashboard content: greeting, progress cards, next class, lessons. */
function LmsDashboard() {
  const {
    Card,
    Button,
    SubjectBadge,
    Badge,
    Tabs,
    Callout,
    Avatar
  } = window.ContourDesignSystem_0483dc;
  const [tab, setTab] = React.useState("upcoming");
  const courses = [{
    subject: "chemistry",
    title: "Unit 3/4 Chemistry",
    pct: 72,
    next: "Redox reactions",
    img: "covers/redox.png"
  }, {
    subject: "specialist-maths",
    title: "Specialist Maths",
    pct: 54,
    next: "Complex numbers",
    img: "covers/complex-numbers.png"
  }, {
    subject: "biology",
    title: "Unit 3/4 Biology",
    pct: 88,
    next: "Gene regulation",
    img: "covers/photosynthesis.png"
  }];
  const lessons = [{
    day: "Mon",
    time: "4:30 PM",
    subject: "chemistry",
    title: "Redox reactions & electrochemistry",
    tutor: "Aisha R.",
    live: true
  }, {
    day: "Tue",
    time: "5:30 PM",
    subject: "specialist-maths",
    title: "Complex numbers: the Argand plane",
    tutor: "Daniel K.",
    live: false
  }, {
    day: "Thu",
    time: "4:30 PM",
    subject: "biology",
    title: "Gene regulation & the trp operon",
    tutor: "Priya N.",
    live: false
  }];
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const Play = () => /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 5v14l12-7z"
  }));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      background: "var(--cream)",
      padding: "30px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "32px",
      letterSpacing: "-0.02em",
      color: "var(--navy)",
      margin: "0 0 6px"
    }
  }, "Welcome back, Leo."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "15.5px",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "You're on track this week \u2014 one class today and two assessments due.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Resume Chemistry")), /*#__PURE__*/React.createElement(Callout, {
    tone: "info",
    title: "Trial exam this Saturday",
    style: {
      marginBottom: "26px"
    }
  }, "Your Chemistry practice exam opens 9:00 AM Sat 21 June and is open for 24 hours."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "20px",
      color: "var(--navy)",
      margin: "0 0 14px",
      letterSpacing: "-0.01em"
    }
  }, "Your courses"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px",
      marginBottom: "30px"
    }
  }, courses.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    interactive: true,
    padding: "none",
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 104,
      background: "var(--cream-m)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/" + c.img,
    alt: "",
    style: {
      height: "92%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(SubjectBadge, {
    subject: c.subject,
    style: {
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "18px",
      color: "var(--navy)",
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)",
      marginBottom: "6px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Course progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--navy)"
    }
  }, c.pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--cream-m)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: c.pct + "%",
      height: "100%",
      background: "var(--navy)",
      borderRadius: "var(--radius-pill)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      color: "var(--text-muted)"
    }
  }, "Next: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--navy)",
      fontWeight: 500
    }
  }, c.next)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: "22px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "upcoming",
      label: "Upcoming classes"
    }, {
      value: "recordings",
      label: "Recordings",
      count: 12
    }],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: "10px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, lessons.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "15px 4px",
      borderBottom: i < lessons.length - 1 ? "1px solid var(--border-subtle)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      width: 48,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "13px",
      color: "var(--navy)"
    }
  }, l.day), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12px",
      color: "var(--text-muted)"
    }
  }, l.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "15px",
      color: "var(--navy)",
      marginBottom: "3px"
    }
  }, l.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(SubjectBadge, {
    subject: l.subject,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      color: "var(--text-muted)"
    }
  }, l.tutor))), l.live ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Play, null)
  }, "Join") : /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, "Details"))))), /*#__PURE__*/React.createElement(Card, {
    tone: "navy",
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "18px",
      color: "var(--cream)",
      margin: 0
    }
  }, "This week's goal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "44px",
      color: "var(--highlighter)",
      lineHeight: 1
    }
  }, "4 / 6"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-on-navy-muted)",
      margin: 0,
      lineHeight: 1.55
    }
  }, "practice sets completed. Two more to hit your weekly target."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "-8px"
    }
  }, ["Aisha R", "Daniel K", "Priya N"].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      marginLeft: i ? -10 : 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm",
    tone: i === 1 ? "blue" : "cream"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-on-navy-muted)",
      marginLeft: "12px"
    }
  }, "Your tutors are here to help")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onNavy: true,
    style: {
      alignSelf: "flex-start"
    }
  }, "Message a tutor"))));
}
window.LmsDashboard = LmsDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lms/Sidebar.jsx
try { (() => {
/* LMS — left sidebar navigation for the student portal. */
function LmsSidebar({
  active,
  setActive
}) {
  const {
    Avatar
  } = window.ContourDesignSystem_0483dc;
  const Icon = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none"
  }, d);
  const icons = {
    home: /*#__PURE__*/React.createElement("path", {
      d: "M4 11l8-6 8 6v8a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1z",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinejoin: "round"
    }),
    courses: /*#__PURE__*/React.createElement("path", {
      d: "M4 5h16v12H4zM4 19h16",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }),
    schedule: /*#__PURE__*/React.createElement("g", {
      stroke: "currentColor",
      strokeWidth: "1.9",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "5",
      width: "16",
      height: "15",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 9h16M9 3v4M15 3v4",
      strokeLinecap: "round"
    })),
    progress: /*#__PURE__*/React.createElement("path", {
      d: "M5 19V10M12 19V5M19 19v-6",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }),
    resources: /*#__PURE__*/React.createElement("path", {
      d: "M5 4h9l5 5v11H5z M14 4v5h5",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinejoin: "round"
    })
  };
  const items = [["home", "Dashboard"], ["courses", "My courses"], ["schedule", "Schedule"], ["progress", "Progress"], ["resources", "Resources"]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: "none",
      background: "var(--navy)",
      color: "var(--cream)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 16px",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/contour-h-cream.svg",
    alt: "Contour",
    style: {
      height: 22,
      margin: "4px 8px 26px"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, items.map(([key, label]) => {
    const on = active === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => setActive(key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        appearance: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        background: on ? "rgba(255,249,241,0.12)" : "transparent",
        color: on ? "var(--cream)" : "var(--text-on-navy-muted)",
        fontFamily: "var(--font-body)",
        fontSize: "15px",
        fontWeight: on ? 600 : 500,
        padding: "11px 14px",
        borderRadius: "var(--radius-md)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      d: icons[key]
    }), label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: "11px",
      padding: "12px 8px",
      borderTop: "1px solid var(--border-on-navy)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Leo Tran",
    size: "md",
    tone: "cream"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "14px"
    }
  }, "Leo Tran"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      color: "var(--text-on-navy-muted)"
    }
  }, "Year 12 \xB7 VCE"))));
}
window.LmsSidebar = LmsSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lms/SubjectDocument.jsx
try { (() => {
/* LMS — Subject Viewer: the workbook document page (brand-refreshed worksheet). */
function SvDocument({
  zoom
}) {
  const {
    SubjectBadge,
    Badge
  } = window.ContourDesignSystem_0483dc;
  const I = window.SvIcon;
  const scale = zoom / 100;
  const Marker = () => /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      marginTop: "3px",
      color: "var(--og-blue)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 7l7 5-7 5V7z",
    fill: "var(--og-blue)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 7l6 5-6 5V7z",
    fill: "var(--navy)"
  })));
  const Bullet = () => /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/contour-mark-navy.svg",
    alt: "",
    style: {
      width: 20,
      height: 20,
      flex: "none",
      marginTop: "2px"
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto",
      background: "var(--cream-m)",
      padding: "44px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 860,
      maxWidth: "100%",
      margin: "0 auto",
      transform: `scale(${scale})`,
      transformOrigin: "top center",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      background: "var(--cream)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--border-subtle)",
      padding: "72px 76px 80px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 6,
      background: "var(--subject-physics)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: "44px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubjectBadge, {
    subject: "physics",
    size: "sm"
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "34px",
      letterSpacing: "-0.02em",
      color: "var(--navy)",
      margin: "16px 0 0",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("mark", {
    style: {
      background: "var(--highlighter)",
      color: "var(--navy)",
      padding: "0.04em 0.18em",
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone"
    }
  }, "GPS satellites"))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "13px",
      color: "var(--navy)",
      background: "color-mix(in srgb, var(--og-blue) 12%, var(--cream))",
      borderRadius: "var(--radius-pill)",
      padding: "8px 14px"
    }
  }, /*#__PURE__*/React.createElement(I, {
    d: "M11 4a7 7 0 105 12 7 7 0 00-5-12zM21 21l-4-4",
    size: 16
  }), " Definition")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "baseline",
      marginBottom: "34px"
    }
  }, /*#__PURE__*/React.createElement(Marker, null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "19px",
      color: "var(--charcoal)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: "var(--navy)"
    }
  }, "GPS stands for:"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      borderBottom: "2px dotted var(--border-strong)",
      minWidth: 360,
      marginLeft: 10,
      transform: "translateY(-2px)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "baseline",
      marginBottom: "34px"
    }
  }, /*#__PURE__*/React.createElement(Marker, null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "19px",
      lineHeight: 1.5,
      color: "var(--charcoal)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: "var(--navy)"
    }
  }, "Purpose:"), " Provides geolocation and time information to a signal receiver anywhere on Earth.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "baseline",
      marginBottom: "22px"
    }
  }, /*#__PURE__*/React.createElement(Marker, null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "21px",
      letterSpacing: "-0.01em",
      color: "var(--navy)",
      flex: 1
    }
  }, "How does it work?")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "22px",
      paddingLeft: "38px",
      marginBottom: "44px"
    }
  }, ["GPS satellites have precision clocks onboard.", "GPS satellites send their time information to users on Earth.", "GPS receivers on Earth calculate their position by measuring the time it takes for signals to travel from multiple satellites."].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Bullet, null), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      lineHeight: 1.5,
      color: "var(--charcoal)",
      flex: 1
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      background: "var(--navy)",
      borderRadius: "var(--radius-lg)",
      padding: "26px 30px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: "none",
      borderRadius: "var(--radius-md)",
      background: "rgba(255,249,241,0.12)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--highlighter)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    d: "M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9 2.6.9-5.5-4-3.9 5.5-.8z",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "16px",
      color: "var(--cream)"
    }
  }, "Why relativity matters here"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "3px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "14.5px",
      lineHeight: 1.5,
      color: "var(--text-on-navy-muted)"
    }
  }, "Without correcting for time dilation, GPS positions would drift by about 10 km per day.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)",
      padding: "18px 0 4px"
    }
  }, "Page 6 of 40 \xB7 Special Relativity II workbook")));
}
window.SvDocument = SvDocument;

/* App shell wiring it all together. */
function SubjectViewerApp() {
  const [activeItem, setActiveItem] = React.useState("wb");
  const [page, setPage] = React.useState(6);
  const [mode, setMode] = React.useState("Continuous");
  const [zoom, setZoom] = React.useState(100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      overflow: "hidden",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement(SvTopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(SvSidebar, {
    activeItem: activeItem,
    setActiveItem: setActiveItem
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(SvToolbar, {
    page: page,
    setPage: setPage,
    pages: 40,
    mode: mode,
    setMode: setMode,
    zoom: zoom,
    setZoom: setZoom
  }), /*#__PURE__*/React.createElement(SvDocument, {
    zoom: zoom
  }))));
}
window.SubjectViewerApp = SubjectViewerApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/SubjectDocument.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lms/SubjectSidebar.jsx
try { (() => {
/* LMS — Subject Viewer: left study-outline sidebar (brand refresh of the workbook viewer). */
function SvIcon({
  d,
  size = 18,
  sw = 1.9
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      flex: "none"
    }
  }, typeof d === "string" ? /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }) : d);
}
window.SvIcon = SvIcon;
const SV_ICONS = {
  chevron: "M6 9l6 6 6-6",
  back: "M15 6l-6 6 6 6",
  doc: /*#__PURE__*/React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.9",
    fill: "none",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h7l5 5v13H6z",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 3v5h5"
  })),
  video: /*#__PURE__*/React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "1.9",
    fill: "none",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 3h7l5 5v13H6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 3v5h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 12.5v4l3.2-2z",
    fill: "currentColor",
    stroke: "none"
  })),
  pin: "M9 4h6l-1 6 3 3H7l3-3-1-6zM12 16v4"
};
window.SV_ICONS = SV_ICONS;
function SvSidebar({
  activeItem,
  setActiveItem
}) {
  const {
    Badge
  } = window.ContourDesignSystem_0483dc;
  const [expanded, setExpanded] = React.useState({
    "3": true,
    "3.2": true
  });
  const toggle = k => setExpanded(e => ({
    ...e,
    [k]: !e[k]
  }));
  const areas = [{
    n: "0",
    title: "Workshops",
    progress: "0/9 complete"
  }, {
    n: "3",
    title: "Special Relativity",
    progress: "0/5 complete",
    active: true,
    subs: [{
      id: "3.1",
      title: "Special Relativity I"
    }, {
      id: "3.2",
      title: "Special Relativity II",
      items: [{
        id: "rec",
        label: "Class Recording (Mastery)",
        icon: "video"
      }, {
        id: "wb",
        label: "Workbook",
        icon: "doc"
      }, {
        id: "hw",
        label: "Homework",
        icon: "doc",
        chips: ["Blank", "Solutions"]
      }]
    }, {
      id: "3.3",
      title: "Special Relativity III"
    }, {
      id: "3.4",
      title: "Special Relativity Revision I"
    }]
  }];
  const numBadge = (n, on) => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "14px",
      background: on ? "var(--navy)" : "var(--cream-m)",
      color: on ? "var(--cream)" : "var(--navy)"
    }
  }, n);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 320,
      flex: "none",
      background: "var(--cream)",
      borderRight: "1px solid var(--border-subtle)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px 8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      appearance: "none",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "15px",
      color: "var(--navy)",
      padding: "8px 10px",
      borderRadius: "var(--radius-pill)"
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    d: SV_ICONS.back,
    size: 18
  }), " Back to dashboard"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-muted)",
      background: "var(--cream-m)"
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    d: SV_ICONS.pin,
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      padding: "14px 22px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      flex: "none",
      borderRadius: "var(--radius-lg)",
      background: "color-mix(in srgb, var(--subject-physics) 38%, var(--cream))",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    d: "M4 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2z",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "23px",
      letterSpacing: "-0.02em",
      color: "var(--navy)",
      margin: 0,
      lineHeight: 1.05
    }
  }, "QCE Year 12 Physics"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)",
      marginTop: "3px",
      letterSpacing: "0.02em"
    }
  }, "QCE-PH34"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)",
      margin: "0 20px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "22px 22px 12px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "17px",
      color: "var(--navy)",
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, "Areas of study"), /*#__PURE__*/React.createElement(Badge, {
    tone: "soft",
    size: "sm"
  }, "3 areas")), /*#__PURE__*/React.createElement("nav", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "0 16px 28px"
    }
  }, areas.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.n,
    style: {
      marginBottom: "4px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(a.n),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "14px",
      appearance: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      background: "transparent",
      padding: "14px 10px",
      borderRadius: "var(--radius-md)"
    }
  }, numBadge(a.n, a.active), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "15.5px",
      color: "var(--navy)"
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      color: "var(--text-muted)",
      marginTop: "1px"
    }
  }, a.progress)), a.subs && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      transform: expanded[a.n] ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    d: SV_ICONS.chevron,
    size: 18
  }))), a.subs && expanded[a.n] && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "10px",
      paddingLeft: "18px",
      borderLeft: "1.5px solid var(--border-subtle)"
    }
  }, a.subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => s.items && toggle(s.id),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      appearance: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      background: "transparent",
      padding: "12px 10px",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "12.5px",
      color: "var(--og-blue-m)",
      background: "color-mix(in srgb, var(--og-blue) 12%, var(--cream))",
      borderRadius: "var(--radius-sm)",
      padding: "2px 7px",
      flex: "none"
    }
  }, s.id), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "14.5px",
      color: "var(--navy)"
    }
  }, s.title), s.items && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      transform: expanded[s.id] ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(SvIcon, {
    d: SV_ICONS.chevron,
    size: 16
  }))), s.items && expanded[s.id] && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cream-m)",
      borderRadius: "var(--radius-lg)",
      padding: "8px",
      margin: "4px 0 12px"
    }
  }, s.items.map(it => {
    const on = activeItem === it.id;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setActiveItem(it.id),
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        appearance: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        background: on ? "var(--cream)" : "transparent",
        boxShadow: on ? "var(--shadow-sm)" : "none",
        padding: "13px 14px",
        borderRadius: "var(--radius-md)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: "none",
        borderRadius: "50%",
        border: `2px solid ${on ? "var(--navy)" : "var(--border-default)"}`,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--navy)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        color: on ? "var(--og-blue-m)" : "var(--text-muted)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(SvIcon, {
      d: SV_ICONS[it.icon],
      size: 19
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-body)",
        fontWeight: on ? 600 : 500,
        fontSize: "14.5px",
        color: on ? "var(--navy)" : "var(--charcoal)"
      }
    }, it.label), on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--highlighter)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--highlighter) 35%, transparent)"
      }
    })), it.chips && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "8px",
        padding: "0 12px 8px 52px"
      }
    }, it.chips.map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "12.5px",
        fontWeight: 500,
        color: "var(--navy)",
        background: "var(--cream-m)",
        borderRadius: "var(--radius-pill)",
        padding: "4px 12px",
        cursor: "pointer"
      }
    }, c))));
  })))))))));
}
window.SvSidebar = SvSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/SubjectSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lms/SubjectTopbar.jsx
try { (() => {
/* LMS — Subject Viewer: global top bar. */
function SvTopBar() {
  const {
    Avatar,
    IconButton
  } = window.ContourDesignSystem_0483dc;
  const I = window.SvIcon;
  const icons = {
    bell: "M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6zM10 21a2 2 0 004 0",
    sun: /*#__PURE__*/React.createElement("g", {
      stroke: "currentColor",
      strokeWidth: "1.9",
      fill: "none",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"
    })),
    help: /*#__PURE__*/React.createElement("g", {
      stroke: "currentColor",
      strokeWidth: "1.9",
      fill: "none",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9.5 9.5a2.5 2.5 0 114 2c-1 .7-1.5 1.2-1.5 2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 17.5h.01"
    }))
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 74,
      flex: "none",
      background: "var(--cream)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: "24px",
      padding: "0 30px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/contour-mark-navy.svg",
    alt: "Contour",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(560px, 100%)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "var(--cream-m)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      padding: "12px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(I, {
    d: "M11 4a7 7 0 105 12 7 7 0 00-5-12zM21 21l-4-4",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--text-muted)"
    }
  }, "Search\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      fontWeight: 600,
      color: "var(--text-muted)",
      background: "var(--cream)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-sm)",
      padding: "2px 7px"
    }
  }, "\u2318 J"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Notifications",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(I, {
    d: icons.bell,
    size: 19
  })), /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Theme",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(I, {
    d: icons.sun,
    size: 19
  })), /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Help",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(I, {
    d: icons.help,
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 26,
      background: "var(--border-default)",
      margin: "0 6px"
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Leo Tran",
    size: "sm",
    tone: "navy"
  })));
}
window.SvTopBar = SvTopBar;

/* Viewer toolbar: breadcrumb + page nav + zoom + view mode. */
function SvToolbar({
  page,
  setPage,
  pages,
  mode,
  setMode,
  zoom,
  setZoom
}) {
  const {
    IconButton
  } = window.ContourDesignSystem_0483dc;
  const I = window.SvIcon;
  const crumb = ["Special Relativity", "3.2 Special Relativity II", "Workbook"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "20px 30px 14px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      appearance: "none",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    d: "M15 6l-6 6 6 6",
    size: 18
  }), " Back"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: "var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-body)",
      fontSize: "15px"
    }
  }, crumb.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(I, {
    d: "M9 6l6 6-6 6",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === crumb.length - 1 ? "var(--navy)" : "var(--text-muted)",
      fontWeight: i === crumb.length - 1 ? 600 : 500
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "24px",
      padding: "4px 30px 20px",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Previous page",
    variant: "ghost",
    size: "sm",
    onClick: () => setPage(Math.max(1, page - 1))
  }, /*#__PURE__*/React.createElement(I, {
    d: "M15 6l-6 6 6 6",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      color: "var(--navy)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 54,
      textAlign: "center",
      fontWeight: 600,
      background: "var(--cream-m)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "9px 14px"
    }
  }, page), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, "/ ", pages)), /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Next page",
    variant: "ghost",
    size: "sm",
    onClick: () => setPage(Math.min(pages, page + 1))
  }, /*#__PURE__*/React.createElement(I, {
    d: "M9 6l6 6-6 6",
    size: 16
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 26,
      background: "var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(I, {
    d: "M11 4a7 7 0 105 12 7 7 0 00-5-12zM21 21l-4-4M8 11h6",
    size: 18
  })), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "50",
    max: "200",
    value: zoom,
    onChange: e => setZoom(+e.target.value),
    style: {
      width: 150,
      accentColor: "var(--navy)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(I, {
    d: "M11 4a7 7 0 105 12 7 7 0 00-5-12zM21 21l-4-4M11 8v6M8 11h6",
    size: 18
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 26,
      background: "var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--cream-m)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-pill)",
      padding: "4px"
    }
  }, ["Continuous", "Single page"].map(m => {
    const on = mode === m;
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      onClick: () => setMode(m),
      style: {
        appearance: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        fontWeight: 600,
        padding: "9px 18px",
        borderRadius: "var(--radius-pill)",
        background: on ? "var(--navy)" : "transparent",
        color: on ? "var(--cream)" : "var(--text-muted)",
        transition: "background var(--duration-base) var(--ease-standard)"
      }
    }, m);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 26,
      background: "var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Fullscreen",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(I, {
    d: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5",
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "Download",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement(I, {
    d: "M12 4v10m0 0l-4-4m4 4l4-4M5 19h14",
    size: 18
  })))));
}
window.SvToolbar = SvToolbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lms/SubjectTopbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* Marketing — hero. Mirrors contour.com.au: "Where future <doctors> meet" with a
   rotating highlighted word (square highlight strike), 10,000+ students subhead. */
function MktHero() {
  const {
    Button
  } = window.ContourDesignSystem_0483dc;
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  const words = ["doctors", "engineers", "lawyers", "scientists", "leaders"];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI(n => (n + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--navy)",
      color: "var(--cream)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "60px 32px 72px",
      display: "grid",
      gridTemplateColumns: "1.12fr 0.88fr",
      gap: "48px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--cream)",
      background: "rgba(255,249,241,0.10)",
      border: "1px solid var(--border-on-navy)",
      borderRadius: "var(--radius-pill)",
      padding: "6px 14px",
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--highlighter)"
    }
  }), "Introducing Contour Intensive \u2014 VCE holiday program"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "60px",
      lineHeight: 1.3,
      letterSpacing: "-0.02em",
      margin: "0 0 24px",
      maxWidth: "13ch"
    }
  }, "Where future", " ", /*#__PURE__*/React.createElement("mark", {
    style: {
      background: "var(--highlighter)",
      color: "var(--navy)",
      padding: "0.06em 0.16em",
      boxDecorationBreak: "clone",
      WebkitBoxDecorationBreak: "clone"
    }
  }, words[i]), " ", "meet"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "19px",
      lineHeight: 1.55,
      color: "var(--text-on-navy-muted)",
      margin: "0 0 30px",
      maxWidth: "44ch"
    }
  }, "High-performance academic tutoring and test preparation, helping 10,000+ students reach their full potential."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Book a free trial"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onNavy: true
  }, "Explore programs")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "34px",
      marginTop: "42px"
    }
  }, [["10,000+", "students taught"], ["1 in 5", "of all 99+ ATARs"], ["3590", "world-record UCAT"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "28px",
      color: "var(--cream)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-on-navy-muted)",
      marginTop: "2px"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "6% 4%",
      background: "var(--navy-m)",
      borderRadius: "var(--radius-2xl)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--cream)",
      borderRadius: "var(--radius-2xl)",
      padding: "26px",
      width: "100%",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/covers/circular-motion.png",
    alt: "Contour Physics workbook \u2014 circular motion",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      color: "var(--navy)",
      fontSize: "17px"
    }
  }, "One week, obligation-free"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      color: "var(--og-blue-m)",
      fontSize: "14px"
    }
  }, "Free trial \u2192"))))));
}
window.MktHero = MktHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
/* Marketing — top navigation. Cream bar, navy wordmark, capsule CTA.
   Mirrors contour.com.au: About / Services / Programs / Locations + Learning Portal + Book a free trial. */
function MktNav() {
  const {
    Button
  } = window.ContourDesignSystem_0483dc;
  const links = ["About", "Services", "Programs", "Locations"];
  const [open, setOpen] = React.useState("Services");
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(255,249,241,0.86)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "14px 32px",
      display: "flex",
      alignItems: "center",
      gap: "28px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/contour-h-navy.svg",
    alt: "Contour",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "2px",
      marginLeft: "8px"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setOpen(l),
    style: {
      appearance: "none",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: "15px",
      fontWeight: open === l ? "var(--weight-semibold)" : "var(--weight-medium)",
      color: open === l ? "var(--navy)" : "var(--text-muted)",
      padding: "8px 12px",
      borderRadius: "var(--radius-pill)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Learning portal"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Book a free trial"))));
}
window.MktNav = MktNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
/* Marketing — trust band, subject offering, testimonial, footer. */
function MktTrust() {
  const items = ["AFR Fast 100 · 2025", "Best Places to Work 2023", "ABA100 Employer of Choice 2025", "AFR Customer Champions", "AFR Fast Starters"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "26px 32px",
      display: "flex",
      alignItems: "center",
      gap: "32px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--text-muted)",
      letterSpacing: "0.04em",
      textTransform: "uppercase"
    }
  }, "As featured in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "28px",
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "15px",
      color: "var(--navy)",
      opacity: 0.5
    }
  }, i)))));
}
window.MktTrust = MktTrust;

/* Subject offering — the Contour curriculum, tagged by subject colour. */
function MktSubjects() {
  const {
    SubjectBadge,
    Card
  } = window.ContourDesignSystem_0483dc;
  const subjects = [{
    s: "maths-methods",
    d: "Functions, calculus and probability, built from the ground up."
  }, {
    s: "chemistry",
    d: "Atomic structure and stoichiometry through to equilibrium."
  }, {
    s: "biology",
    d: "Cells and genetics through to immunity and evolution."
  }, {
    s: "specialist-maths",
    d: "Proofs, complex numbers, vectors and differential equations."
  }, {
    s: "physics",
    d: "Waves, electricity, mechanics, fields and quantum physics."
  }, {
    s: "english-language",
    d: "Metalanguage toolkit and precise analytical writing."
  }, {
    s: "selective-entry",
    d: "Preparation for selective-school entry programs."
  }, {
    s: "ucat",
    d: "Mock testing and progressive skill development from early."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream-m)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "76px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "52ch",
      marginBottom: "36px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "14px",
      color: "var(--og-blue-m)",
      margin: "0 0 12px"
    }
  }, "The Contour offering"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "36px",
      letterSpacing: "-0.02em",
      color: "var(--navy)",
      margin: 0
    }
  }, "Where effort meets excellence."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: "12px 0 0"
    }
  }, "Pay for weekly tutoring, but get an ecosystem of resources and support.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "14px"
    }
  }, subjects.map(({
    s,
    d
  }) => /*#__PURE__*/React.createElement(Card, {
    key: s,
    padding: "md",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement(SubjectBadge, {
    subject: s,
    size: "sm"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13.5px",
      lineHeight: 1.5,
      color: "var(--text-muted)",
      margin: 0
    }
  }, d))))));
}
window.MktSubjects = MktSubjects;
function MktTestimonial() {
  const {
    Avatar
  } = window.ContourDesignSystem_0483dc;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--navy)",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "920px",
      margin: "0 auto",
      padding: "82px 32px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: 1.24,
      letterSpacing: "-0.01em",
      margin: "0 0 28px"
    }
  }, "\"They found the perfect blend between an amiable culture and the determination to push students to the best of their", " ", /*#__PURE__*/React.createElement("mark", {
    style: {
      background: "var(--highlighter)",
      color: "var(--navy)",
      padding: "0.02em 0.14em"
    }
  }, "academic capabilities"), ".\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Joseph Cho",
    size: "lg",
    tone: "cream"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "16px"
    }
  }, "Joseph Cho"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "var(--text-on-navy-muted)"
    }
  }, "Student, Melbourne \xB7 ATAR 99.60")))));
}
window.MktTestimonial = MktTestimonial;
function MktFooter() {
  const {
    Button
  } = window.ContourDesignSystem_0483dc;
  const cols = {
    About: ["Our story", "Our tutors", "Our reviews", "Our results", "Join the team"],
    Programs: ["Education", "Testprep", "Medprep", "All programs", "Locations"],
    Resources: ["Learning portal", "Blog", "Events", "Book a free trial"]
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--charcoal)",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "60px 32px 38px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3, 1fr)",
      gap: "32px",
      paddingBottom: "38px",
      borderBottom: "1px solid var(--charcoal-m)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/contour-h-cream.svg",
    alt: "Contour",
    style: {
      height: 24,
      marginBottom: "18px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      lineHeight: 1.6,
      color: "#B9B9B9",
      margin: "0 0 18px",
      maxWidth: "34ch"
    }
  }, "Empowering students to reach their full potential through the Contour ecosystem."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Book a free trial")), Object.entries(cols).map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "14px",
      marginBottom: "14px"
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      color: "#B9B9B9"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "22px",
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "#9A9A9A"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Contour Education. Melbourne & Queensland, Australia."), /*#__PURE__*/React.createElement("span", null, "Reshaping education, one student at a time."))));
}
window.MktFooter = MktFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Services.jsx
try { (() => {
/* Marketing — three services + the "by students, for students" results band. */
function MktServices() {
  const {
    Card,
    Button
  } = window.ContourDesignSystem_0483dc;
  const services = [{
    logo: "contour-education-h-charcoal.png",
    tag: "Year 7–12",
    title: "Education",
    body: "Small-group tutoring for high-school subjects, building deep understanding term after term.",
    img: "spot/weekly-program.svg"
  }, {
    logo: "contour-testprep-h-charcoal.svg",
    tag: "Entry exams",
    title: "Testprep",
    body: "Selective-school exams, scholarship tests and SAT preparation — short and intensive.",
    img: "spot/special-events.svg"
  }, {
    logo: "contour-medprep-h-charcoal.svg",
    tag: "UCAT · Medicine",
    title: "Medprep",
    body: "Your UCAT and interview preparation partner into medicine and dentistry.",
    img: "spot/dna-strand.svg"
  }];
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "80px 32px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "48ch",
      marginBottom: "44px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "14px",
      color: "var(--og-blue-m)",
      margin: "0 0 12px",
      letterSpacing: "0.02em"
    }
  }, "One brand, three services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      color: "var(--navy)",
      margin: 0
    }
  }, "Reshaping education, one student at a time."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.6,
      color: "var(--text-muted)",
      margin: "14px 0 0"
    }
  }, "Contour ", /*#__PURE__*/React.createElement("i", null, "(noun)"), ": a guiding line that helps reshape something into a clearer, more defined form.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "22px"
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    interactive: true,
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--cream)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-md)",
      height: 132,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      padding: "10px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/" + s.img,
    alt: "",
    style: {
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/" + s.logo,
    alt: s.title,
    style: {
      height: 22,
      alignSelf: "flex-start"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "12.5px",
      fontWeight: 600,
      color: "var(--text-muted)",
      marginBottom: "6px",
      letterSpacing: "0.02em"
    }
  }, s.tag), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "14.5px",
      lineHeight: 1.55,
      color: "var(--text-muted)",
      margin: 0
    }
  }, s.body)), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Arrow, null),
    style: {
      alignSelf: "flex-start",
      paddingLeft: 0
    }
  }, "Learn more"))))));
}
window.MktServices = MktServices;

/* "By students, for students" — real result stats + top scorers. */
function MktResults() {
  const stats = ["1 in 5 of all 99+ ATAR scorers in Victoria are Contour students", "1 in 10 Contour students achieve a top-1% score", "We tutored the world-record UCAT scorer (3590)", "More 99+ ATARs than any single school in Victoria", "AFR Top 100 fastest-growing businesses — four years running", "One third of all 99th-percentile UCAT scorers are Contour students"];
  const scorers = [{
    name: "Chanara",
    score: "99.95",
    school: "Melbourne Girls Grammar"
  }, {
    name: "Mireille",
    score: "99.95",
    school: "Mac.Robertson Girls' High"
  }, {
    name: "Neel",
    score: "99.95",
    school: "Nossal High School",
    dux: true
  }, {
    name: "Lily",
    score: "99.90",
    school: "Bacchus Marsh Grammar",
    dux: true
  }];
  const Check = () => /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      flex: "none",
      marginTop: "1px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.2 4.2L19 7",
    stroke: "var(--highlighter)",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--navy)",
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-wide)",
      margin: "0 auto",
      padding: "76px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "52px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "38px",
      lineHeight: 1.08,
      letterSpacing: "-0.02em",
      margin: "0 0 24px"
    }
  }, "By students, for students."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "14px"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("li", {
    key: s,
    style: {
      display: "flex",
      gap: "12px",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
      lineHeight: 1.5,
      color: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement(Check, null), s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "14px"
    }
  }, scorers.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      background: "var(--navy-m)",
      border: "1px solid var(--border-on-navy)",
      borderRadius: "var(--radius-lg)",
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "34px",
      color: "var(--highlighter)",
      lineHeight: 1
    }
  }, s.score), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: "15px",
      color: "var(--cream)",
      marginTop: "10px"
    }
  }, s.name, s.dux ? " · Dux" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-on-navy-muted)",
      marginTop: "2px"
    }
  }, s.school))))));
}
window.MktResults = MktResults;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SubjectBadge = __ds_scope.SubjectBadge;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
