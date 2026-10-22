# Md Nahid | Social Media Manager Portfolio

A responsive portfolio website built with plain HTML, CSS and JavaScript. No frameworks, no build step, no backend. It is ready for GitHub Pages.

```text
nahid-portfolio/
├── index.html            page content (all sections)
├── style.css             design (colors are at the top)
├── script.js             behavior + your contact links (top of file)
├── portfolio-data.js     your portfolio projects (edit this to add work)
├── tools/import_portfolio.py   optional helper to import many images at once
└── assets/
    ├── favicon.png
    └── images/
        ├── profile.jpg   your photo (About section)
        └── portfolio/    your design images go here
```

## 1. Preview on your computer

Double-click `index.html`, or run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## 2. Add your portfolio designs (do this first)

Your designs are in the Google Drive folder "Nahid's Design". They are not inside this project yet, so the Portfolio section currently shows clearly marked "Add image" placeholders.

**Fast way (all designs at once):**
1. Download the Drive folder and put the images in a new folder named `portfolio-source/` next to `index.html`.
2. Run `pip install pillow`, then `python tools/import_portfolio.py`.
3. It removes duplicates, shrinks images to about 1080 px wide, saves them as `assets/images/portfolio/design-01.jpg`, `design-02.jpg`... and rewrites `portfolio-data.js`.
4. Open `portfolio-data.js` and change titles, categories and descriptions. Do not run the script again afterwards or it will overwrite your edits.

**Manual way (one project):** copy a JPG into `assets/images/portfolio/`, then add a block in `portfolio-data.js`:

```js
{
  title: "Skincare Carousel",
  category: "Carousel Posts",
  image: "assets/images/portfolio/skincare-carousel.jpg",
  alt: "Skincare carousel post design",
  description: "A 5-slide educational carousel.",
  label: "Sample Project",
  url: ""
}
```

- **category**: filter buttons are created automatically from the categories you use. Suggested: Social Media Designs, Carousel Posts, Reels, Content Calendars, Instagram Feed.
- **label**: use "Sample Project" for self-created work. Use "Client Project" only for real client work you may show.
- **url**: optional link to a full project (Behance, Canva, Drive...). Leave `""` for none.
- **Image size**: 4:5 portrait (for example 1080 x 1350 px) looks best. Other shapes are cropped on the card and shown in full when clicked.
- To remove a project, delete its block. To replace an image, overwrite the file with the same name.

## 3. Change links and contact details

Open `script.js` and edit `SITE_LINKS` at the top:

```js
const SITE_LINKS = {
  fiverr: "https://www.fiverr.com/sellers/nahid_sh",
  email: "nahidmarketing007@gmail.com",
  whatsapp: "",   // add a wa.me link to show a WhatsApp item
  linkedin: ""    // add your profile URL to show a LinkedIn item
};
```

Every Fiverr and email button on the page uses these values. WhatsApp and LinkedIn stay hidden until you fill them in.

## 4. Change text

All text is in `index.html`. Each section is wrapped in a comment such as `<!-- SERVICES -->`, so you can edit one section without touching the others. Search for the words you want to change (headline, service names, FAQ answers, etc.).

## 5. Change colors and fonts

Open `style.css`. The first block (`:root`) holds every color:

```css
--color-primary: #B7F51B;    /* lime */
--color-dark-green: #087443;
--color-navy: #172C49;
--color-background: #F4F5EF;
```

Change a value and the whole site updates. `--color-lime-text` is a darker lime used for green text on light backgrounds so it stays readable. The font is Manrope with a system-font fallback (`--font-main`).

## 6. Change images

- Profile photo: replace `assets/images/profile.jpg` (square, about 900 x 900 px).
- Favicon: replace `assets/favicon.png`.
- Keep the same file name, or update the name in `index.html`.

## 7. Publish on GitHub Pages

1. Create a GitHub account and click **New repository**. Name it for example `nahid-portfolio`, keep it **Public**, and create it.
2. Click **Add file > Upload files**. Upload everything inside the project folder (so `index.html` is at the top level of the repository), then **Commit changes**. Do not upload the `portfolio-source/` folder if it contains large originals.
3. Open the repository **Settings > Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, then **Save**.
5. Wait one to two minutes. GitHub shows your site address at the top of the Pages screen.
6. Open that address on your computer and on your phone and check the list below.

### Using nahidofficial.cyou (optional)
In **Settings > Pages > Custom domain**, enter your domain and save, then add the DNS records at your domain registrar exactly as shown in GitHub's current documentation ("Managing a custom domain for your GitHub Pages site"). DNS can take time to update. Enable **Enforce HTTPS** once GitHub allows it. After the domain works, you can add a canonical link and `og:url` to `index.html`.

## 8. Final checklist after publishing

- [ ] The site opens from the GitHub Pages address, and the photo and designs show (no broken images)
- [ ] Menu links scroll to the right sections, and the mobile menu opens and closes
- [ ] Portfolio filters work (if you have two or more categories), "Show More Work" works, and the larger-image view opens and closes
- [ ] "Hire Me on Fiverr" opens your Fiverr profile
- [ ] "Contact Me" and the email link open a new email to your address
- [ ] Projects are labelled truthfully ("Sample Project" or "Client Project")
- [ ] Nothing is cut off on a phone, and there is no sideways scrolling
- [ ] The copyright year in the footer is correct
