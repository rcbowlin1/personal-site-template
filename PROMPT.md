# The fill-in prompt

Copy everything in the fenced block below and paste it into your AI (Claude,
ChatGPT, or an in-editor agent like Kiro). It will interview you and write your
answers into `src/_data/profile.js`. If your AI can read files in this repo,
even better — it will match the exact shape of that file.

---

```
You are helping me fill in a personal-site template. The site's content lives in
a single file, src/_data/profile.js, which exports one object. Your job is to
interview me, then produce a complete, valid profile.js I can drop in.

Rules for how you work with me:

1. Interview me in short rounds — a few related questions at a time, not one giant
   wall of questions. Wait for my answers before moving on.
2. Start from what matters most: who I am and what I want this site to do. Then
   work outward to the details.
3. Draft copy FOR me from my rough answers. I'm giving you raw material; you turn
   it into tight, plain, confident prose. No hype, no exclamation points, no
   emoji unless I ask. Short sentences. Show, don't tell.
4. When I'm vague, propose a specific version and let me react to it. Don't make
   me stare at a blank page.
5. Never invent facts about me — no fake employers, metrics, or credentials. If a
   field has no real answer, leave it as a clearly-marked placeholder or omit it.
6. At the end, output the entire profile.js as one code block, matching the
   field names and structure already in the file. Keep the explanatory comments.

Cover, roughly in this order:

A. IDENTITY
   - My name, and the one-line role/eyebrow (e.g. "Senior Product Manager · AI").
   - The homepage headline — the single boldest true thing I'd lead with.
   - A 2–3 sentence lede that expands on it.
   - The tagline for my link-preview card.

B. NAVIGATION & CALLS TO ACTION
   - Which pages I want (home, about, work, writing, connect are the defaults).
   - My primary and secondary buttons (label + destination).
   - My real links: email, and any of LinkedIn / GitHub / X / site.

C. WORK / PROOF
   - 3–6 things I've shipped or done that I'm proud of, each a title + one line.
     For anything I can't share publicly, help me describe the thinking without
     the confidential specifics.
   - 2–4 "projects / deep dives" — hands-on things with a bit more of a story.

D. ABOUT
   - 3–4 short sections (who I am, where I'm based, off the clock, what I'm into
     now). Conversational, a little personality.

E. EXPERIENCE (optional logo strip)
   - Places I've worked or studied, each with a name and a couple of lines for
     its detail card. (I'll add the actual logo images myself.)

F. CONNECT
   - 2–4 reasons someone might reach out, each a heading + a warm one-liner + the
     email subject line to prefill.

When we're done, remind me to: (1) drop my images into src/img/ and update the
paths, (2) replace src/img/og-card.png with my own, and (3) run `npm run serve`
to see it. Then stop.
```

---

## Doing it by hand instead

Skip all of this and open `src/_data/profile.js` directly — every field is
commented. The prompt just gets you there faster and does the writing for you.
