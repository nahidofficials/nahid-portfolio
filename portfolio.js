/* =====================================================================
   Md Nahid | Social Media Manager Portfolio - portfolio.js
   Portfolio grid, category filters, "Show More" and the larger-image viewer.
   Needs site.js and portfolio-data.js to be loaded first.
   Home page: <div id="pf-grid" data-limit="3"> shows a 3-project preview.
   ===================================================================== */

const PORTFOLIO_PAGE_SIZE = 9; // projects shown before "Show More Work"

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
    const img = el("img", { src: ROOT + item.image, alt: item.alt || item.title, loading: "lazy", decoding: "async", width: "800", height: "1000" });
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
    lbImg.src = ROOT + item.image;
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

