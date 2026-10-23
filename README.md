# Lifeline Education Consultancy Website

Responsive single-page website for Lifeline Education Consultancy (Nedumangad, Kerala) — B.Tech credit transfer, admission guidance and academic counselling.

## Getting Started

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
```

### Build for Production

```bash
npm run build      # outputs to build/
npm run preview    # serve the production build locally
```

Everything in `public/` (favicons, `robots.txt`, `sitemap.xml`, `_redirects`) is copied into `build/` as-is.

## Project Structure

```
index.html                  SEO meta tags, structured data, fonts
src/
├── main.jsx                Entry: Google Analytics + style load order
├── App.jsx                 Page layout — sections in order
├── config/
│   └── site.js             Phone, WhatsApp, email, address, GA ID, Google Form IDs
├── data/
│   └── content.js          Lists shown on the page: services, steps, FAQs, team, footer links…
├── lib/
│   └── submitEnquiry.js    Sends the contact form to Google Forms
├── hooks/
│   ├── useRevealOnScroll.js   Fade sections in as they scroll into view
│   ├── useActiveSection.js    Highlight the nav link for the section on screen
│   ├── useScrollProgress.js   Navbar shadow + reading-progress bar
│   └── useCardSpotlight.js    Pointer-following glow on cards
├── components/
│   ├── layout/             Navbar, Footer, FloatingButtons (each with its .css)
│   ├── sections/           Hero, StatsBar, Services, StudentProblems, Process,
│   │                       WhyUs, About, FAQ, CTABanner, Contact + ContactForm
│   └── ui/                 Logo, SectionHead, CountUp
├── styles/
│   ├── index.css           Imports tokens → base → ui
│   ├── tokens.css          Colours, shadows, fonts (CSS variables)
│   ├── base.css            Reset, layout (.container, .section), headings
│   ├── ui.css              Buttons, cards, tiles, tags, form fields
│   └── motion.css          Scroll/entrance animations, reduced-motion (loaded last)
└── assets/                 Logo image
```

## Common Edits

| To change… | Edit |
| --- | --- |
| Phone, WhatsApp, email, Instagram, address | `src/config/site.js` |
| Services, FAQs, process steps, team, stats | `src/data/content.js` |
| Headings and paragraphs of a section | `src/components/sections/<Section>.jsx` |
| Brand colours or fonts | `src/styles/tokens.css` |
| Look of one section | `src/components/sections/<Section>.css` |
| Contact form destination | `GOOGLE_FORM` in `src/config/site.js` |

## Tech Stack
- React 18 + Vite
- Plain CSS — global styles in `src/styles/`, component styles next to each component
- Google Fonts (Montserrat + Nunito)
- IntersectionObserver for scroll animations; all motion respects `prefers-reduced-motion`
