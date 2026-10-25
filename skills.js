/* =====================================================================
   Md Nahid | Social Media Manager Portfolio - skills.js
   Builds the skill cards and skill pages from skills-data.js.
   Needs site.js and skills-data.js to be loaded first.
   1. Helpers   2. Home preview   3. Skills overview   4. Skill page
   ===================================================================== */

const ALL_SKILLS = Array.isArray(window.SKILLS) ? window.SKILLS : [];
const skillUrl = (slug) => ROOT + "skills/" + slug + "/";

/* ---------- 2. HOME PREVIEW (only a few compact cards) ---------- */
(function homePreview() {
  const mount = $("#skills-preview");
  if (!mount) return;
  mount.innerHTML = ALL_SKILLS.filter((s) => s.featured).map((s) =>
    '<a class="cap-card" href="' + skillUrl(s.slug) + '">' +
      '<span class="ico-box">' + icon(s.icon) + "</span>" +
      "<h3>" + esc(s.title) + "</h3>" +
      "<p>" + esc(s.short) + "</p>" +
      '<span class="more">Learn more ' + icon("arrow-right") + "</span>" +
    "</a>"
  ).join("");
})();

/* ---------- 3. SKILLS OVERVIEW (/skills/) ---------- */
(function overview() {
  const mount = $("#skills-grid");
  if (!mount) return;
  mount.innerHTML = ALL_SKILLS.map((s) =>
    '<a class="sk-card" href="' + skillUrl(s.slug) + '">' +
      '<span class="sk-top"><span class="ico-box">' + icon(s.icon) + '</span><span class="sk-num">' + esc(s.number) + "</span></span>" +
      "<h3>" + esc(s.title) + "</h3>" +
      "<p>" + esc(s.short) + "</p>" +
      '<span class="more">View skill ' + icon("arrow-right") + "</span>" +
    "</a>"
  ).join("");
})();

/* ---------- 4. SKILL PAGE (/skills/<slug>/) ---------- */
(function skillPage() {
  const mount = $("#skill-root");
  if (!mount) return;

  const slug = mount.dataset.skill;
  const index = ALL_SKILLS.findIndex((s) => s.slug === slug);
  const s = ALL_SKILLS[index];
  if (!s) {
    mount.innerHTML = '<div class="container section"><p class="noscript-msg">This skill page was not found. <a href="' + ROOT + 'skills/">Back to all skills</a></p></div>';
    return;
  }

  // Keep the browser tab and description in sync with the data file.
  document.title = s.title + " | Md Nahid - Social Media Manager";
  const meta = $('meta[name="description"]');
  if (meta && s.metaDescription) meta.setAttribute("content", s.metaDescription);

  const prev = ALL_SKILLS[index - 1];
  const next = ALL_SKILLS[index + 1];
  const contactHref = ROOT + "index.html#contact";

  // Portfolio examples: projects whose category matches this skill, or an editable placeholder.
  const items = (Array.isArray(window.PORTFOLIO_ITEMS) ? window.PORTFOLIO_ITEMS : [])
    .filter((p) => (s.portfolioCategories || []).includes(p.category)).slice(0, 3);
  const examples = items.length
    ? items.map((p) =>
        '<a class="mini-card" href="' + ROOT + 'portfolio.html">' +
          '<span class="mini-thumb"><img src="' + ROOT + esc(p.image) + '" alt="' + esc(p.alt || p.title) + '" loading="lazy" decoding="async" width="800" height="1000"></span>' +
          '<span class="mini-body"><small>' + esc(p.label || p.category) + "</small><h3>" + esc(p.title) + "</h3></span>" +
        "</a>").join("")
    : '<div class="placeholder-box"><strong>Examples coming soon</strong>Sample work for this skill will appear here. ' +
      'Add a project in <code>portfolio-data.js</code> with a matching category to show it.</div>';

  mount.innerHTML =
    '<section class="banner is-left" aria-labelledby="sk-title"><div class="container">' +
      '<p class="crumbs" aria-label="Breadcrumb"><a href="' + ROOT + 'index.html">Home</a>' + icon("chevron-right") +
        '<a href="' + ROOT + 'skills/">Skills</a>' + icon("chevron-right") + '<span aria-current="page">' + esc(s.title) + "</span></p>" +
      '<div class="sk-hero">' +
        '<span class="ico-box">' + icon(s.icon) + "</span>" +
        "<div>" +
          '<span class="sk-num">SKILL ' + esc(s.number) + "</span>" +
          '<h1 id="sk-title">' + esc(s.title) + "</h1>" +
          '<p class="intro">' + esc(s.intro) + "</p>" +
          '<div class="btn-row">' +
            '<a class="btn btn-light" href="' + contactHref + '">' + esc(s.cta || "Discuss Your Project") + " " + icon("arrow-up-right") + "</a>" +
            '<a class="btn btn-ghost-light" href="' + ROOT + 'skills/">' + icon("arrow-left", "icon icon-back") + " All Skills</a>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div></section>" +

    '<section class="section" aria-labelledby="inc-title"><div class="container two-col">' +
      '<div class="reveal"><h2 id="inc-title">What This Skill Includes</h2>' +
        '<p class="lead-text">The main tasks I can help you with in this area.</p></div>' +
      '<ul class="check-grid stagger">' +
        s.includes.map((t) => '<li><span class="tick">' + icon("check") + "</span><span>" + esc(t) + "</span></li>").join("") +
      "</ul>" +
    "</div></section>" +

    '<section class="section section-soft" aria-labelledby="app-title"><div class="container">' +
      '<div class="approach-card reveal"><h2 id="app-title">My Approach</h2><p>' + esc(s.approach) + "</p></div>" +
    "</div></section>" +

    '<section class="section" aria-labelledby="flow-title"><div class="container">' +
      '<div class="section-head center reveal"><h2 id="flow-title">My <span class="hl">Workflow</span></h2>' +
        '<p class="section-sub">A simple process from start to finish.</p></div>' +
      '<ol class="flow stagger">' +
        s.workflow.map((w) => '<li class="flow-step"><h3>' + esc(w.title) + "</h3><p>" + esc(w.text) + "</p></li>").join("") +
      "</ol>" +
    "</div></section>" +

    '<section class="section section-soft" aria-labelledby="ex-title"><div class="container">' +
      '<div class="section-head center reveal"><h2 id="ex-title">Portfolio <span class="hl">Examples</span></h2>' +
        '<p class="section-sub">Selected work related to this skill.</p></div>' +
      '<div class="mini-grid stagger">' + examples + "</div>" +
      '<div class="section-foot"><a class="btn btn-outline" href="' + ROOT + 'portfolio.html">See All My Designs ' + icon("arrow-right", "icon icon-go") + "</a></div>" +
    "</div></section>" +

    '<section class="section" aria-labelledby="tools-title"><div class="container">' +
      '<div class="section-head center reveal"><h2 id="tools-title">Tools I <span class="hl">Use</span></h2></div>' +
      '<ul class="tool-list stagger" style="justify-content:center">' +
        (s.tools || []).map((t) => "<li>" + esc(t) + "</li>").join("") +
      "</ul>" +
    "</div></section>" +

    '<section class="section section-soft"><div class="container">' +
      '<div class="cta-band reveal"><h2>Let\'s talk about your project</h2>' +
        "<p>Tell me what you need and I will suggest a practical way forward.</p>" +
        '<div class="btn-row btn-row-center"><a class="btn btn-light btn-lg" href="' + contactHref + '">' + esc(s.cta || "Discuss Your Project") + " " + icon("arrow-up-right") + "</a></div>" +
      "</div>" +
      '<div class="pager">' +
        '<a class="back-link" href="' + ROOT + 'skills/">' + icon("arrow-left", "icon icon-back") + " Back to all skills</a>" +
        '<div class="pager-links">' +
          (prev ? '<a href="' + skillUrl(prev.slug) + '">' + icon("chevron-left") + " Previous</a>" : "") +
          (next ? '<a href="' + skillUrl(next.slug) + '">Next ' + icon("chevron-right") + "</a>" : "") +
        "</div>" +
      "</div>" +
    "</div></section>";

  // Broken-image fallback for example thumbnails.
  $$(".mini-card img", mount).forEach((img) => {
    img.addEventListener("error", () => img.closest(".mini-card").classList.add("is-empty"));
  });
})();
