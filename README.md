![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)
![Status](https://img.shields.io/badge/Actively%20Maintained-brightgreen)

# The Ledger — Blog Website

A multi-page blog frontend built with HTML, CSS, and vanilla JavaScript —
no framework, no build step. Every part of the site, from layout to
interactivity, is hand-built to demonstrate core frontend fundamentals:
semantic markup, responsive design, DOM manipulation, and SEO-conscious
page structure.

**Live site:** [the-ledger-blogs.pages.dev](https://the-ledger-blogs.pages.dev/)

---

## Overview

The Ledger is a content-driven blog site focused on clean typography, a
calm editorial layout, and fast, dependency-free performance. It's built
to be lightweight by design — static HTML pages enhanced with vanilla
JavaScript for interactivity, with no framework overhead.

---

## Features

- Dynamic post feed rendered from a single JavaScript data source
  (`js/posts.js`), keeping post content and layout logic cleanly separated
- Automatic reading-time calculation based on actual article word count
- Client-side topic filtering from the sidebar navigation
- Responsive mobile navigation with a dedicated menu toggle
- Semantic HTML5 structure (`<header>`, `<main>`, `<section>`,
  `<aside>`, `<footer>`, `<article>`) for clarity and accessibility
- Structured data (JSON-LD) support for enhanced search result display
- Editorial typography system using Fraunces and Inter from Google Fonts

---

## Tech Stack

| Layer | Tools |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, Flexbox, media queries) |
| Behavior | Vanilla JavaScript (ES6) |
| Fonts | Google Fonts |
| Hosting | Cloudflare Pages |
| Version Control | Git / GitHub |

---

## Project Structure

the-ledger-blogs/
├── Blog Images/ # Featured images used in individual posts
├── Blogs/ # Individual blog post pages
├── js/
│ ├── posts.js # Post data source
│ └── main.js # Rendering, filtering, and navigation logic
├── index.html # Homepage feed and layout
└── README.md

---

## Roadmap

Planned improvements as the project continues to evolve:

- [ ] Expand structured data (JSON-LD) coverage across all posts
- [ ] Add Open Graph metadata for richer social sharing previews
- [ ] Consolidate styling into a shared stylesheet for easier theming
- [ ] Extend dynamic rendering and reading-time logic to individual post pages
- [ ] Add on-site search
- [ ] Continued accessibility improvements (ARIA labeling, keyboard navigation)
- [ ] Dark mode support

---

## Running Locally

No build tools or dependencies required.

```bash
git clone https://github.com/build-with-paras/the-ledger-blogs.git
cd the-ledger-blogs
```

Open `index.html` directly in a browser, or serve locally:

```bash
npx serve .
```

---

## Author

**Paras**
[GitHub](https://github.com/build-with-paras)