/* =====================================================================
   Md Nahid | Social Media Manager Portfolio - site.js (shared on every page)
   1. Site links (edit here)   2. Helpers   3. Icons   4. Header & footer
   5. Link wiring   6. Navigation   7. Scroll reveal   8. Extras
   ===================================================================== */

/* ---------- 1. SITE LINKS - change contact details here only ---------- */
const SITE_LINKS = {
  fiverr: "https://www.fiverr.com/sellers/nahid_sh",
  email: "nahidmarketing007@gmail.com",
  whatsapp: "",   // e.g. "https://wa.me/8801XXXXXXXXX"  (leave empty to hide)
  linkedin: ""    // e.g. "https://www.linkedin.com/in/your-name"  (leave empty to hide)
};
const EMAIL_SUBJECT = "Social media management enquiry";

/* ---------- 2. HELPERS ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ROOT = path back to the site's top folder. Set on <body data-root="../../"> in each page.
const ROOT = document.body.dataset.root || "";
const PAGE = document.body.dataset.page || "home";       // home | skills | portfolio
const IS_FILE = location.protocol === "file:";
window.SITE_ROOT = ROOT;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
window.esc = esc;

/* ---------- 3. ICONS (Lucide-style: 24px grid, 2px rounded stroke) ----------
   To use an icon in HTML:   <i class="ico" data-icon="mail"></i>
   To add an icon: copy its paths from https://lucide.dev and add a line below. */
const ICONS = {
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  "arrow-up": '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "check": '<path d="M20 6 9 17l-5-5"/>',
  "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  /* skills */
  "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "calendar-days": '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  "palette": '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
  "pen-line": '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
  "layout-dashboard": '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  "chart-column": '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  "messages-square": '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
  "search": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  "video": '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  "briefcase": '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>'
};

function icon(name, cls = "icon") {
  const paths = ICONS[name] || "";
  return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + paths + "</svg>";
}
window.icon = icon;

// Fills every <i data-icon="name"> inside root with its SVG.
function hydrateIcons(root = document) {
  $$("[data-icon]", root).forEach((el) => {
    if (el.dataset.done) return;
    const extra = el.dataset.class ? " " + el.dataset.class : "";
    el.innerHTML = icon(el.dataset.icon, "icon" + extra);
    el.dataset.done = "1";
  });
}
window.hydrateIcons = hydrateIcons;

/* ---------- 4. HEADER & FOOTER (one place for every page) ---------- */
// Main navigation. Keep it simple: Home | Skills | Portfolio | About | Contact
const onHome = PAGE === "home";
const NAV = [
  { key: "home",      label: "Home",      href: onHome ? "#home" : ROOT + "index.html" },
  { key: "skills",    label: "Skills",    href: ROOT + "skills/" },
  { key: "portfolio", label: "Portfolio", href: ROOT + "portfolio.html" },
  { key: "about",     label: "About",     href: (onHome ? "" : ROOT + "index.html") + "#about" },
  { key: "contact",   label: "Contact",   href: (onHome ? "" : ROOT + "index.html") + "#contact" }
];

function renderLayout() {
  const header = $("#site-header");
  if (header) {
    const links = NAV.map((n) => {
      const active = n.key === PAGE;
      return '<li><a href="' + n.href + '" data-nav="' + n.key + '"' + (active ? ' class="is-active" aria-current="page"' : "") + ">" + n.label + "</a></li>";
    }).join("");
    header.outerHTML =
      '<header class="site-header" id="top"><div class="nav-shell">' +
        '<a class="logo" href="' + (onHome ? "#home" : ROOT + "index.html") + '" aria-label="Md Nahid - home"><span class="logo-badge">MN</span>Md Nahid<span class="logo-dot">.</span></a>' +
        '<nav class="nav-menu" id="nav-menu" aria-label="Main navigation"><ul>' + links + "</ul>" +
          '<a class="btn btn-primary nav-cta-mobile" href="' + NAV[4].href + '">Let\'s Talk</a></nav>' +
        '<a class="btn btn-primary nav-cta" href="' + NAV[4].href + '">Let\'s Talk ' + icon("arrow-up-right") + "</a>" +
        '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">' +
          '<span class="bars" aria-hidden="true"><span></span><span></span><span></span></span></button>' +
      "</div></header>";
  }

  const footer = $("#site-footer");
  if (footer) {
    footer.outerHTML =
      '<footer class="site-footer"><div class="container footer-grid">' +
        '<div class="footer-brand"><a class="logo" href="' + ROOT + 'index.html"><span class="logo-badge">MN</span>Md Nahid<span class="logo-dot">.</span></a>' +
          '<p class="footer-role">Social Media Manager</p>' +
          '<p class="footer-tag">Helping businesses build a better social media presence.</p></div>' +
        '<nav aria-label="Footer navigation"><h2 class="footer-title">Navigation</h2><ul>' +
          NAV.map((n) => '<li><a href="' + n.href.replace(/^#home$/, ROOT + "index.html") + '">' + n.label + "</a></li>").join("") +
        "</ul></nav>" +
        '<div><h2 class="footer-title">Contact</h2><ul>' +
          '<li><a data-link="fiverr" href="' + NAV[4].href + '" target="_blank" rel="noopener noreferrer">Fiverr Profile</a></li>' +
          '<li><a data-link="email" data-text="email" href="' + NAV[4].href + '"></a></li>' +
        "</ul></div></div>" +
        '<div class="container footer-bottom"><p>&copy; <span id="year">2026</span> Md Nahid. All rights reserved.</p></div></footer>';
  }
}

/* ---------- 5. LINK WIRING ---------- */
function wireLinks(root = document) {
  $$("[data-link]", root).forEach((el) => {
    const key = el.dataset.link;
    const value = SITE_LINKS[key];
    if (!value) return;
    el.href = key === "email" ? "mailto:" + value + "?subject=" + encodeURIComponent(EMAIL_SUBJECT) : value;
  });
  $$("[data-text='email']", root).forEach((el) => { el.textContent = SITE_LINKS.email; });
  // Optional contact items show only when a real link has been provided.
  $$("[data-optional]", root).forEach((el) => { if (SITE_LINKS[el.dataset.optional]) el.hidden = false; });
}
window.wireLinks = wireLinks;

// When the site is opened straight from a folder (file://), "/skills/" has no index page.
// This adds "index.html" so the preview works. Online hosting is unaffected.
function fixFileLinks(root = document) {
  if (!IS_FILE) return;
  $$("a[href]", root).forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || /^(https?:|mailto:|tel:|#)/.test(href)) return;
    const [path, hash] = href.split("#");
    if (path === "" || !path.endsWith("/")) return;
    a.setAttribute("href", path + "index.html" + (hash ? "#" + hash : ""));
  });
}
window.fixFileLinks = fixFileLinks;

/* ---------- 6. NAVIGATION ---------- */
function setupNavigation() {
  const header = $(".site-header");
  const toggle = $(".nav-toggle");
  const menu = $("#nav-menu");
  if (!header || !toggle || !menu) return;

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) { setMenu(false); toggle.focus(); }
  });
  window.addEventListener("resize", () => { if (window.innerWidth > 900) setMenu(false); });

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // On the home page, highlight Home / About / Contact depending on the section in view.
  if (onHome && "IntersectionObserver" in window) {
    const map = { home: $("#home"), about: $("#about"), contact: $("#contact") };
    const setActive = (key) => {
      $$("#nav-menu ul a").forEach((a) => {
        const on = a.dataset.nav === key;
        a.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const key = Object.keys(map).find((k) => map[k] === entry.target);
        if (key) setActive(key);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.values(map).forEach((el) => el && io.observe(el));
  }
}

/* ---------- 7. SCROLL REVEAL (with staggered children) ---------- */
let revealObserver = null;
function initReveal(root = document) {
  // Children of .stagger get a delay based on their position.
  $$(".stagger", root).forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.classList.add("reveal");
      child.style.setProperty("--i", String(Math.min(i, 8)));
    });
  });
  const items = $$(".reveal:not(.is-visible)", root);
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
  }
  items.forEach((el) => revealObserver.observe(el));
}
window.initReveal = initReveal;

/* ---------- 8. EXTRAS (year, back-to-top) ---------- */
function setupExtras() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  const toTop = $("#to-top");
  if (!toTop) return;
  const update = () => { toTop.hidden = window.scrollY < 700; };
  update();
  window.addEventListener("scroll", update, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
}

/* ---------- START ---------- */
renderLayout();
hydrateIcons();
wireLinks();
setupNavigation();
setupExtras();
// Other scripts (skills.js, portfolio.js) render more content, then call:
// hydrateIcons(); wireLinks(); fixFileLinks(); initReveal();
// A final pass runs on window load so nothing is missed.
window.addEventListener("DOMContentLoaded", () => { fixFileLinks(); initReveal(); });
