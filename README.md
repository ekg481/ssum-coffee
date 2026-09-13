# ssum coffee — website

A fast, static marketing site for **ssum coffee** (Rowland Heights, CA), built around the
black-and-white dog logo. No build step, no dependencies — open `index.html` and it runs.

## Pages

| File | What's on it |
| --- | --- |
| `index.html` | Hero, story, popular-drink gallery, review preview, hours + location, CTA |
| `menu.html` | Full drink gallery with category filters and a detail sheet per drink |
| `reviews.html` | Rating summary with distribution bars, filterable reviews, "leave a review" form |
| `visit.html` | Address, map card, parking/wifi/dog notes, full hours, good-to-know list |

## Design

- **Theme** — ink (`#14120f`) on paper (`#f7f4ef`) with a single latte accent (`#b98a56`),
  taken from the logo's black-on-white line art. Dark mode is a full token swap, toggled in the
  nav and remembered in `localStorage`.
- **Type** — Fraunces (display) over Plus Jakarta Sans (UI), both with system fallbacks so the
  page still looks right if the font CDN is blocked.
- **Logo** — drawn as SVG, not a bitmap, so it's crisp at any size and recolors with the theme:
  `assets/img/logo.svg` (dog + cup), `assets/img/mark.svg` (head only, for the nav circle),
  `assets/img/favicon.svg`. The same dog appears as the sticker on every drink illustration.

## Built for iPhone first

- `viewport-fit=cover` plus `env(safe-area-inset-*)` padding, so nothing hides behind the
  notch, the home indicator, or a landscape rounded corner.
- An iOS-style frosted **bottom tab bar** under 860px; a normal top nav above it.
- Every layout is fluid (`clamp()`, `auto-fill` grids) rather than fixed breakpoints — verified
  with no horizontal overflow from 320px (SE) through 1440px.
- Form inputs are 16px so iOS Safari doesn't zoom on focus; tap targets are ≥44px;
  `scroll-padding` keeps anchors and focused fields clear of both fixed bars.
- Drinks open in a bottom **sheet** on phones and a centered dialog on desktop.

## Interactions

Scroll reveals, a hover-paused marquee, category filters, the drink detail sheet
(Esc / backdrop / button to close), a live **open / closed** badge computed from the hours data,
animated rating bars, a star picker, copy-address-to-clipboard, and a toast for feedback.
All of it respects `prefers-reduced-motion`.

Reviews submitted through the form are stored in `localStorage` on that device only — nothing is
sent anywhere. They appear at the top of the list marked *your review*, and are folded into the
average and the distribution bars so you can see how the page will look. "Clear mine" removes them.

## Editing the content

Everything an owner needs to change lives in **`assets/js/site-data.js`**:

- `shop` — address, phone, email, Instagram, Maps search string, aggregate rating.
  Values marked `<< EDIT >>` are **placeholders** (street address and phone especially) and must
  be replaced with the real ones before launch.
- `hours` — a 24-hour `open`/`close` per weekday (`17.5` = 5:30 PM). This one array drives the
  hours tables on two pages *and* the live open/closed badge in the nav, footer and map card.
- `drinks` — name, price, category, blurb, description, spec lines, caffeine, and the two colors
  that paint the card gradient and the cup.
- `reviews` — **sample content.** Replace with real, permitted quotes before launch.

Add a drink or a review and every page that lists them updates — nothing is hard-coded in HTML.

## Running it

```sh
# any static server works
npx http-server -p 8080
# or just open index.html
```

Deploys as-is to GitHub Pages, Netlify, Vercel, or any static host.
