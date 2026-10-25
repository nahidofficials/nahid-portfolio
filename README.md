# Md Nahid | Social Media Manager Portfolio

Plain HTML, CSS and JavaScript. No frameworks, no build step. Works on GitHub Pages.

```text
nahid-portfolio/
├── index.html              Home (hero, short skills preview, 3-design preview, About, Contact)
├── portfolio.html          All designs (filters + larger view)
├── skills/
│   ├── index.html          Skills overview  ->  /skills/
│   └── <skill-name>/index.html   One page per skill  ->  /skills/content-planning/ ...
├── 404.html                "Page not found" page (GitHub Pages uses it automatically)
├── skills-data.js          ALL skill content (edit text, tools, steps here)
├── portfolio-data.js       Your portfolio projects
├── site.js                 Contact links, menu, icons, header/footer
├── skills.js               Builds skill cards and skill pages from skills-data.js
├── portfolio.js            Portfolio grid, filters, larger-image viewer
├── style.css               Design (colors at the top)
└── assets/
    ├── favicon.png
    └── images/
        ├── profile.jpg     Your photo (home hero)
        └── portfolio/      Your design images
```

## 1. Preview
Double-click `index.html`, or run `python -m http.server 8000` and open `http://localhost:8000`.

## 2. Edit a skill (text, tools, steps)
Open `skills-data.js`. Each skill is one block: `title`, `short`, `intro`, `approach`, `includes`, `workflow`, `tools`, `portfolioCategories`, `cta`. Change the text and save. The overview card and the skill page both update.
Only list tools and services you can genuinely deliver. Check the `tools` lists once, they are starting suggestions.

## 3. Add a new skill
1. Add a new block to `skills-data.js` (copy an existing one, give it a new `slug`).
2. Copy any folder inside `skills/` (for example `skills/copywriting/`) and rename it to the same slug.
3. Inside the copied `index.html`, change `data-skill="..."`, the `<title>`, and the `description` / `og:` text.
The page appears on the Skills overview automatically.

## 4. Show portfolio examples on a skill page
Add a project in `portfolio-data.js` and give it a `category`. In `skills-data.js`, list that category under the skill's `portfolioCategories`. Skills without a match show an editable "Examples coming soon" box.

## 5. Add your portfolio designs
Copy images to `assets/images/portfolio/` and add a block to `portfolio-data.js` (title, category, image, alt, description, label, url).
Use label "Sample Project" for self-created work and "Client Project" only for real client work you may show.
The home page shows the first 3 projects (change `data-limit="3"` in `index.html`). `portfolio.html` shows all.

## 6. Contact links, menu and icons
- Fiverr, email, WhatsApp, LinkedIn: edit `SITE_LINKS` at the top of `site.js`. WhatsApp and LinkedIn stay hidden until filled.
- Menu: edit the `NAV` list in `site.js` (one place, used on every page).
- Icons: Lucide-style SVGs listed in `ICONS` in `site.js`. Copy a new one from https://lucide.dev and set `icon: "name"` in `skills-data.js`.

## 7. Colors and fonts
The first block in `style.css` (`:root`) holds every color (navy, blue, soft backgrounds). Font: Manrope with a system fallback.

## 8. Publish on GitHub Pages
1. Create a public repository and upload everything in this folder (`index.html` must be at the top level).
2. Settings > Pages > Deploy from a branch > `main` / `(root)` > Save.
3. Each skill has its own folder, so `/skills/content-planning/` works when opened directly or refreshed. `404.html` handles wrong links.
4. Custom domain (optional): Settings > Pages > Custom domain, then add the DNS records GitHub shows. After the domain works, you can add a canonical link and `og:url`.
Keep your existing domain settings (including any `CNAME` file) as they are, and do not delete it when uploading.

## 9. Checklist after publishing
- [ ] Photo and designs show (no broken images)
- [ ] Menu works on desktop and mobile; the active menu item is highlighted
- [ ] The Skills page shows 10 cards; every card opens its own page; "Back to all skills" works
- [ ] Open a skill page directly and refresh it (no error)
- [ ] Hire Me on Fiverr and Contact Me open the right place
- [ ] Nothing is cut off on a phone, and there is no sideways scrolling
