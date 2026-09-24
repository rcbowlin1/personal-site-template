# Setup — from clone to a live site

Takes about 20 minutes, most of it hands-off while your AI does the writing.

## 1. Get the code

Either click **"Use this template"** on GitHub (creates your own copy), or:

```bash
git clone <your-copy-url> my-site
cd my-site
npm install
npm run serve
```

Open http://localhost:8080 — you'll see the site running with placeholder
content. Leave `serve` running; it live-reloads as you edit.

## 2. Fill it in (the fast way)

Open [`PROMPT.md`](PROMPT.md), copy the whole thing, and paste it into Claude,
ChatGPT, or an in-editor agent like Kiro. It will interview you — name, role,
the work you want to show, your links — and write the answers into
`src/_data/profile.js`. Review what it wrote; edit anything that doesn't sound
like you.

Prefer to do it by hand? Open `src/_data/profile.js` — every field has a comment
explaining what it is. Change the values, save, watch the browser reload.

## 3. Add your images

Drop your files into `src/img/` and update the paths in `profile.js`. The slots
that need an image:

- `brand.portrait` — a headshot or avatar (About page).
- `about.rows[].image` — one photo per About section (optional).
- The OG/link-preview card at `src/img/og-card.png` — replace the placeholder
  with your own 1200×630 image, or delete it and generate one from `og-card.html`.
- `experience[].logo` — logos for the places you've been (optional; the strip
  hides itself if you leave `experience` empty).

The template ships with placeholder art only. Nothing here is anyone else's to
reuse — bring your own.

## 4. Deploy to GitHub Pages (free)

1. Push your repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub
   Actions**.
3. Add `.github/workflows/deploy.yml` (a standard Eleventy → Pages workflow;
   the `SETUP` section of the docs links one), or use any static host — the
   build output is just the `_site/` folder.
4. For a user site at `https://<username>.github.io`, name the repo
   `<username>.github.io`. For a project site, any repo name works.

## 5. Make it yours

- Accent color, fonts, spacing: the top of `src/css/styles.css` (`:root`).
- Which pages exist: add or delete the `.njk` files in `src/`.
- Writing/blog posts: drop markdown files in `src/posts/` (see the sample).

That's it. The whole point is that the structure is done, so you can spend your
time on what you actually want to say.
