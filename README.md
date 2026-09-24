# Personal Site Template

A dark, fast, opinionated personal-site starter — the scaffold behind a real
site, with all the personal content stripped out and replaced by placeholders.
Clone it, point your AI at [`PROMPT.md`](PROMPT.md), and it will interview you
and fill the site in.

No build-tool lock-in beyond [Eleventy](https://www.11ty.dev/), no CSS
framework, no JavaScript framework. Just templates, one stylesheet, and a few
dozen lines of vanilla JS.

## Quick start

```bash
npm install
npm run serve      # local dev at http://localhost:8080
npm run build      # outputs the static site to _site/
```

Then either edit `src/_data/profile.js` by hand, or — faster — open
[`PROMPT.md`](PROMPT.md), paste it into your AI of choice, and let it walk you
through filling everything in. See [`SETUP.md`](SETUP.md) for the full path
from clone to a deployed site on GitHub Pages.

## What you get

- **Multi-page layout** — home, about, work/projects, writing, connect, plus a
  post layout and a 404 page.
- **One data file** (`src/_data/profile.js`) drives nearly all the copy, so you
  edit content in one place, not across a dozen templates.
- **A design system in one stylesheet** (`src/css/styles.css`) — dark, editorial,
  restrained accent color, elevated cards, a scrolling logo strip.
- **Details that usually get skipped:** content-hash cache-busting, an OG/link
  preview card, reduced-motion-safe scroll animations, and a mobile nav.

## The design decisions (and why)

This started life as a full-color, mono-font "engineer's site" and got
deliberately pulled back. The reasoning is worth stating, because the defaults
here are opinions, not accidents:

- **Flat and editorial, not glassy SaaS.** Sans type, a single restrained accent
  green, hairline dividers instead of boxes everywhere. Confident without being
  loud.
- **Elevated cards only where they earn it** — on the project tiles, not sprinkled
  across the page. One moment of material craft beats ten.
- **Apple "squircle" corners as progressive enhancement.** `corner-shape:
  superellipse(2)` renders true continuous-curvature corners in Chromium and
  degrades to normal rounded corners everywhere else. No JS polyfill — the common
  polyfill masks the element, which clips the card shadows this design relies on.
- **Content-hash cache-busting.** `src/_data/assets.js` hashes the stylesheet,
  the OG image, and the logos; the hash is stamped onto their URLs (`?v=…`) so a
  changed file is refetched immediately while an unchanged one caches hard. This
  is why you never have to tell someone to "hard-refresh."
- **Monochrome logo strip.** Logos are forced to a single gray via a CSS filter
  rather than shipped as pre-colored art, so the row reads as one cohesive unit
  on the dark background.
- **Motion that never strands content.** Scroll-reveal only ever hides-then-shows
  when JavaScript is present *and* the visitor hasn't asked for reduced motion.
  No-JS and reduced-motion visitors see everything immediately.

## License

MIT — see [`LICENSE`](LICENSE). It covers the code only. Anything you add on top
(your words, your images) is yours.
