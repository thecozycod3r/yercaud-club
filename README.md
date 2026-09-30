# Yercaud Club

A responsive React website built from the supplied club photographs, logo, and tariff card dated 2 September 2026.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:5173. To create the production site, run `npm run build`. The generated `dist` directory can be hosted on any static web host. `npm run preview` previews that production build.

## Features

- Club introduction, chamber tariffs, dining, sports, affiliations and contact information.
- Member/guest rate selector, dining category buttons, sticky facility navigation and expandable sports rates.
- Photo gallery with native modal focus management and Escape-to-close.
- Local PDF download, self-hosted fonts, optimized WebP photographs.
- Mobile navigation, system dark mode and reduced-motion support.

## Content

All rates, phone information, founding year and affiliations come from the supplied PDF. The menu displays selected dishes and links to the complete original PDF. Photographs are the supplied club images. Editorial descriptions are written for this site. No fictional testimonials, booking availability, or reservations are presented.

Contact links dial +91 4281 222212. There is no booking backend, payment processing or enquiry submission service. The club should confirm prices and guest eligibility before publication. GitHub Pages deployment is configured through the repository workflow.

Edit `src/main.jsx` for content and `src/styles.css` for design. Assets are in `public`. Source photographs are preserved in the original Downloads folder.

## Validation

Production build and browser checks cover navigation, menu switching and facility navigation, guest charges, all 18 affiliations, gallery navigation, PDF availability, dark mode, and overflow at 375, 390, 768, 1024 and 1440 pixels. Visual previews and the Lighthouse audit are stored under `checks/`.

## Additional pages and research

- `/affiliated-clubs/`: searchable directory of all 18 clubs, verified external website links, and visiting-member rates.
- `/facilities/`: all eight user-confirmed facilities, direct section links, sports tariffs, photographs and dining menu.
- Both pages are emitted as real HTML entry points, so static hosts can resolve their directories directly.
- See `RESEARCH.md` for reference websites, public mentions, source decisions, and image licensing. The homepage’s Yercaud Lake photograph is licensed separately under CC BY-SA 2.0 and visibly attributed.

## Responsive redesign

The current design includes a photo-led homepage, a shared sticky header, native mobile navigation dialog with focus management, safe-area-aware mobile action bar, sticky horizontal facility links, expandable sports tariffs, location filtering, a swipeable mobile gallery and responsive WebP image sizes. It preserves the three existing routes and section deep links.

Validation covers 320px through 1440px viewports, light/dark themes, reduced motion, navigation, tariff disclosures, club search/filter/reset, and gallery keyboard controls.

## LLM-readable content

`public/llms.txt` is served at `/llms.txt`, with concise Markdown companions at `/index.md`, `/facilities/index.md`, and `/affiliated-clubs/index.md`. Every HTML entry point links to its Markdown companion and the root llms.txt. Links are origin-relative so no deployment hostname is invented. Update these content files when changing published facilities, affiliations, contacts, or rates. They follow the format documented at https://llmstxt.org/.

## GitHub Pages deployment

Repository: https://github.com/thecozycod3r/yercaud-club

Site: https://thecozycod3r.github.io/yercaud-club/

Pushes to `main` run `.github/workflows/deploy.yml`. The production build uses `VITE_BASE_PATH=/yercaud-club/`. Internal links, responsive images, PDF URLs, and Markdown links are resolved beneath that path. Local development continues to use `/`.

The billiards photograph is an illustrative Unsplash stock image with visible attribution; see its adjacent license file and `RESEARCH.md`.

## Prerendering and search

`npm run build` renders every page to static HTML (`src/entry-server.jsx` + `scripts/prerender.mjs`), and the browser hydrates it (`src/main.jsx`). Crawlers, WhatsApp/social link previews and no-JS visitors see full content. Page content lives in `src/App.jsx`.

Each page carries a canonical URL and Open Graph tags (`public/images/og.jpg`, 1200×630). The homepage has `SportsClub` JSON-LD with address, phone, email and founding year. `public/sitemap.xml` is referenced from `robots.txt`. These use the GitHub Pages URL; update them if the club moves to its own domain.
