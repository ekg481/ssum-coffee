# ssum coffee — website

A fast, static marketing site for **ssum coffee** — 1841 W Lincoln Ave, Ste A, Anaheim, CA —
built around the black-and-white dog sticker. No build step, no dependencies, no third-party
requests: open `index.html` and it runs.

## Pages

| File | What's on it |
| --- | --- |
| `index.html` | Hero, story, popular-drink gallery, review preview, hours + location, CTA |
| `menu.html` | All 21 drinks with category filters and a detail sheet per drink |
| `reviews.html` | Rating summary with distribution bars, filterable reviews, "leave a review" form |
| `visit.html` | Address, map card, visit notes, full hours, good-to-know list |

## Design

- **Strictly black and white.** Ink `#0e0e0d` on paper `#f6f6f4`, and nothing else — the drink
  gallery works off a five-step greyscale ramp (`cream → light → mid → dark → espresso`) instead
  of colour, stars and rating bars are ink, and the open/closed dot is solid when open and hollow
  when shut rather than green/red. A test asserts no non-greyscale pixel colour survives in the
  CSS. Dark mode is a full token swap, toggled in the nav and remembered in `localStorage`.
- **Type** — Fraunces for editorial headlines, Plus Jakarta Sans for UI, and the shop's own
  handwriting for everything menu-facing: **Patrick Hand** on drink names, prices, badges, filter
  chips and the detail sheet, **Gochi Hand** for the ssum wordmark. All four are **self-hosted**
  in `assets/fonts/` (~210KB, latin subset) — no Google Fonts call, so the handwriting shows up
  even on a network that blocks the CDN.
- **Logo** — traced from a magnified crop of the cup sticker rather than drawn from memory:
  the open curly silhouette carrying crown and both ears, the two cheek lines that separate face
  from ears, round dot eyes, the nose and `w` mouth, the straw, the solid cup with its white band,
  and the paw hooking around it. `assets/img/mark.svg` = `logo.svg`, plus `assets/img/favicon.svg`.
  It strokes in `currentColor`, so it inverts with the theme for free.
  The hero pairs it with the hand-lettered `ssum` to reproduce the full sticker; drink cards carry
  a purpose-drawn 28px version of the face, since the traced one turns to mud at that size.

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

Scroll reveals, a hover-paused marquee, category filters built from the menu data, the drink detail sheet
(Esc / backdrop / button to close), a live **open / closed** badge computed from the hours data,
animated rating bars, a star picker, copy-address-to-clipboard, and a toast for feedback.
All of it respects `prefers-reduced-motion`.

Reviews submitted through the form are stored in `localStorage` on that device only — nothing is
sent anywhere. They appear at the top of the list marked *your review*, and are folded into the
average and the distribution bars so you can see how the page will look. "Clear mine" removes them.

## Editing the content

Everything an owner needs to change lives in **`assets/js/site-data.js`**:

- `shop` — address, phone, Instagram, Maps search string, aggregate rating. Address and phone are
  the real ones; `email` is still a `<< EDIT >>` placeholder.
- `hours` — a 24-hour `open`/`close` per weekday (`17.5` = 5:30 PM). Currently 7–5 every day;
  **`<< CONFIRM >>`** this against your real schedule. This one array drives the hours tables on
  two pages *and* the live open/closed badge in the nav, footer and map card.
- `drinks` — **names and prices are transcribed from the menu board photo.** The one-line blurbs
  and longer descriptions are drafts written to sound like the shop — read them and correct
  anything that isn't how you actually make the drink. `shade` picks the card's greyscale tone.
- `cats`, `addOns` — the category filters and the `+$1.00` add-on line, also off the board.
- `visitNotes`, `goodToKnow` — the parking / sitting-in / dog notes and the visit-page list.
  Marked `<< CONFIRM >>`: they read plausibly but nobody has verified them.
- `reviews` — **sample content.** Replace with real, permitted quotes before launch.

Add a drink or a review and every page that lists them updates — nothing is hard-coded in HTML.

## Running it

```sh
# any static server works
npx http-server -p 8080
# or just open index.html
```

Deploys as-is to GitHub Pages, Netlify, Vercel, or any static host.
