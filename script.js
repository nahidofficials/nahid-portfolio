/* =====================================================================
   Md Nahid | Social Media Manager Portfolio - script.js
   1. Site links (edit here)   2. Helpers   3. Link wiring   4. Navigation
   5. Scroll reveal   6. Portfolio (filter, load more, lightbox)
   7. Footer year & back-to-top
   ===================================================================== */

/* ---------- 1. SITE LINKS - change contact details here only ---------- */
const SITE_LINKS = {
  fiverr: "https://www.fiverr.com/sellers/nahid_sh",
  email: "nahidmarketing007@gmail.com",
  whatsapp: "",   // e.g. "https://wa.me/8801XXXXXXXXX"  (leave empty to hide)
  linkedin: ""    // e.g. "https://www.linkedin.com/in/your-name"  (leave empty to hide)
};
const EMAIL_SUBJECT = "Social media management enquiry";
const PORTFOLIO_PAGE_SIZE = 9; // projects shown before "Show More Work"

/* ---------- 2. HELPERS ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- 3. LINK WIRING ---------- */
(function wireLinks() {
  $$("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const value = SITE_LINKS[key];
    if (!value) return;
    el.href = key === "email"
      ? "mailto:" + value + "?subject=" + encodeURIComponent(EMAIL_SUBJECT)
      : value;
  });
  $$("[data-text='email']").forEach((el) => { el.textContent = SITE_LINKS.email; });

  // Show optional contact items only when a real link has been provided.
  $$("[data-optional]").forEach((el) => {
    if (SITE_LINKS[el.dataset.optional]) el.hidden = false;
  });
})();

/* ---------- 4. NAVIGATION ---------- */
(function navigation() {
  const header = $(".site-header");
  const toggle = $(".nav-toggle");
  const menu = $("#nav-menu");

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

  // Highlight the menu link of the section currently in view.
  const links = $$("#nav-menu ul a");
  const map = new Map();
  links.forEach((a) => {
    const target = $(a.getAttribute("href"));
    if (target) map.set(target, a);
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          map.get(entry.target).classList.add("is-active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, section) => io.observe(section));
  }
})();

/* ---------- 5. SCROLL REVEAL ---------- */
(function reveal() {
  const items = $$(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
})();

/* ---------- 6. PORTFOLIO ---------- */
(function portfolio() {
  const items = Array.isArray(window.PORTFOLIO_ITEMS) ? window.PORTFOLIO_ITEMS : [];
  const grid = $("#pf-grid");
  const filterBox = $("#pf-filters");
  const moreBtn = $("#pf-more");
  const lightbox = $("#lightbox");
  if (!grid) return;

  const ALL = "All Work";
  let activeCategory = ALL;
  // Homepage preview: <div id="pf-grid" data-limit="3"> shows only the first 3 projects (no filters, no "Show More").
  const previewLimit = Number(grid.dataset.limit) || 0;
  let visibleCount = PORTFOLIO_PAGE_SIZE;
  let lbIndex = 0;
  let lastFocus = null;

  const preferredOrder = ["Social Media Designs", "Carousel Posts", "Reels", "Content Calendars", "Instagram Feed"];
  const used = Array.from(new Set(items.map((i) => i.category).filter(Boolean)));
  const categories = [ALL].concat(
    used.sort((a, b) => {
      const ia = preferredOrder.indexOf(a), ib = preferredOrder.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b);
    })
  );

  const filtered = () => items.filter((i) => activeCategory === ALL || i.category === activeCategory);

  function el(tag, props = {}, children = []) {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    });
    children.forEach((c) => node.appendChild(c));
    return node;
  }

  function buildFilters() {
    filterBox.textContent = "";
    // A single category makes filters pointless, so hide the bar until there are two or more.
    if (previewLimit || categories.length <= 2) { filterBox.hidden = true; return; }
    categories.forEach((cat) => {
      const btn = el("button", { class: "filter-btn", type: "button", text: cat, "aria-pressed": String(cat === activeCategory) });
      btn.addEventListener("click", () => {
        activeCategory = cat;
        visibleCount = PORTFOLIO_PAGE_SIZE;
        $$(".filter-btn", filterBox).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        render();
      });
      filterBox.appendChild(btn);
    });
  }

  function card(item, indexInFiltered) {
    const img = el("img", { src: item.image, alt: item.alt || item.title, loading: "lazy", decoding: "async", width: "800", height: "1000" });
    const empty = el("span", { class: "pf-empty" }, [
      el("span", { text: "Add image" }),
      el("small", { text: item.image })
    ]);
    const thumb = el("button", { class: "pf-thumb", type: "button", "aria-label": "View larger: " + item.title }, [
      img, empty, el("span", { class: "pf-zoom", text: "View larger" })
    ]);

    const meta = el("div", { class: "pf-meta" }, [el("span", { text: item.category })]);
    if (item.label) meta.appendChild(el("span", { class: "pf-label", text: item.label }));

    const body = el("div", { class: "pf-body" }, [meta, el("h3", { text: item.title })]);
    if (item.description) body.appendChild(el("p", { text: item.description }));
    if (item.url) {
      const link = el("a", { class: "pf-link", href: item.url, target: "_blank", rel: "noopener noreferrer", text: "View Project" });
      body.appendChild(link);
    }

    const article = el("article", { class: "pf-card" }, [thumb, body]);
    img.addEventListener("error", () => article.classList.add("is-empty"));
    thumb.addEventListener("click", () => openLightbox(indexInFiltered));
    return article;
  }

  function render() {
    const list = filtered();
    grid.textContent = "";
    if (!list.length) {
      grid.appendChild(el("p", { class: "pf-note", text: "No projects in this category yet." }));
    }
    list.slice(0, previewLimit || visibleCount).forEach((item, i) => grid.appendChild(card(item, i)));
    moreBtn.hidden = previewLimit ? true : list.length <= visibleCount;
  }

  moreBtn.addEventListener("click", () => {
    visibleCount += PORTFOLIO_PAGE_SIZE;
    render();
  });

  /* ----- Lightbox (native <dialog>: Esc closes, focus stays inside) ----- */
  const lbImg = $("#lb-img");
  const lbMissing = $("#lb-missing");

  function showLightbox() {
    const list = filtered();
    const item = list[lbIndex];
    if (!item) return;
    lbMissing.hidden = true;
    lbImg.hidden = false;
    lbImg.onerror = () => { lbImg.hidden = true; lbMissing.hidden = false; };
    lbImg.src = item.image;
    lbImg.alt = item.alt || item.title;
    $("#lb-cat").textContent = item.category + (item.label ? " · " + item.label : "");
    $("#lb-title").textContent = item.title;
    $("#lb-desc").textContent = item.description || "";
    const single = list.length < 2;
    $(".lb-prev", lightbox).hidden = single;
    $(".lb-next", lightbox).hidden = single;
  }

  function openLightbox(index) {
    lastFocus = document.activeElement;
    lbIndex = index;
    showLightbox();
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
  }

  function step(dir) {
    const total = filtered().length;
    lbIndex = (lbIndex + dir + total) % total;
    showLightbox();
  }

  $(".lb-close", lightbox).addEventListener("click", () => lightbox.close());
  $(".lb-prev", lightbox).addEventListener("click", () => step(-1));
  $(".lb-next", lightbox).addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); }); // click on backdrop
  lightbox.addEventListener("close", () => { if (lastFocus) lastFocus.focus(); });
  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  buildFilters();
  render();
})();

/* ---------- 7. FOOTER YEAR & BACK-TO-TOP ---------- */
(function extras() {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  const toTop = $("#to-top");
  if (!toTop) return;
  const update = () => { toTop.hidden = window.scrollY < 700; };
  update();
  window.addEventListener("scroll", update, { passive: true });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
})();
