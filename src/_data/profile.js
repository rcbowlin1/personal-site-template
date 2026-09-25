// profile.js — the single source of truth for almost all site copy.
// Edit the values here (or let your AI fill them via PROMPT.md). Every page reads
// from this file, so you change content in one place, not across templates.

module.exports = {
  // --- Identity -------------------------------------------------------------
  brand: {
    name: "Your Name",                       // shows in the header wordmark + footer
    // Small uppercase label above the homepage headline:
    eyebrow: "Your Role · Your Field",
    // The single boldest true thing you'd lead with:
    headline: "A one-line headline about what you do.",
    // 2–3 sentences expanding on the headline:
    lede: "A short paragraph that says who you are and what you're about. Keep it plain and confident — a couple of sentences, no hype.",
    portrait: "/img/placeholder-portrait.svg", // headshot/avatar (About page)
  },

  // Tagline used on the OG / link-preview card:
  ogTagline: "What you do, in one short line.",

  // --- Navigation -----------------------------------------------------------
  // Top-nav links. `cta` styles a link as the filled accent pill; `outline` as
  // the outlined pill. Drop items you don't want.
  nav: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about/" },
    { label: "Work", url: "/work/" },
    { label: "Writing", url: "/writing/" },
    { label: "Connect", url: "/connect/", cta: true },
  ],

  // Homepage hero buttons:
  heroActions: [
    { label: "About me", url: "/about/" },
    { label: "Get in touch", url: "/connect/", ghost: true },
  ],

  // --- Work / proof ---------------------------------------------------------
  // Short "shipped & supported" list — title + one line each.
  proof: [
    { title: "A thing you shipped", url: "", note: "One line on what it was and your role in it." },
    { title: "Another thing", url: "", note: "One line. Link is optional — leave url empty to render plain text." },
    { title: "A third thing", url: "", note: "Describe the thinking if you can't share specifics." },
  ],

  // "Projects & deep dives" — the elevated cards. `tag` is the little pill.
  projects: [
    { title: "A project or deep dive", url: "/work/example/", tag: "Project", note: "One line teasing the story or the build." },
    { title: "Another one", url: "/work/example/", tag: "Build", note: "What it is and why it's interesting." },
  ],

  // --- About ----------------------------------------------------------------
  // Each row is a section with optional image. First row can be your intro.
  about: {
    heading: "About",
    rows: [
      { heading: "", body: "Your opening paragraph — a dozen years of doing X, the through-line, how you got here. A little personality is good.", image: "/img/placeholder-portrait.svg" },
      { heading: "Home base", body: "Where you live and where you're from.", image: "/img/placeholder-portrait.svg" },
      { heading: "Off the clock", body: "What you do for fun.", image: "/img/placeholder-portrait.svg" },
      { heading: "What I'm working on", body: "What's got your attention right now.", image: "/img/placeholder-portrait.svg" },
    ],
  },

  // --- Experience (optional logo strip) -------------------------------------
  // Places you've worked or studied. Leave the array empty to hide the strip.
  // Add your own logo images to src/img/logos/ and point `logo` at them.
  experience: [
    { name: "Company or School", logo: "/img/logos/placeholder-logo.svg", sub: "Years · Role", bullets: ["A line about what you did there.", "Another line."] },
    { name: "Another Place", logo: "/img/logos/placeholder-logo.svg", sub: "Years · Role", bullets: ["What you did."] },
    { name: "A Third", logo: "/img/logos/placeholder-logo.svg", sub: "Education", bullets: ["Degree or focus."] },
  ],

  // --- Connect --------------------------------------------------------------
  // Reasons to reach out. `subject` prefills the email subject line.
  connectIntro: "A few ways we might talk. Pick whatever fits — or just say hi.",
  connect: [
    { heading: "Work together", body: "A warm one-liner about the kind of thing you'd want to hear about.", subject: "Let's talk" },
    { heading: "Trade ideas", body: "Another reason someone might reach out.", subject: "An idea" },
    { heading: "Feedback", body: "Invite people to tell you what you got wrong.", subject: "Feedback" },
  ],

  // --- Footer / links -------------------------------------------------------
  email: "you@example.com",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-handle/" },
    { label: "GitHub", url: "https://github.com/your-handle" },
  ],
  // Optional small print in the footer (set to "" to hide):
  footerNote: "",

  // --- Assistant (optional "ask" chat widget) -------------------------------
  // A small, curated chat helper in the corner. It is CLIENT-SIDE ONLY — no
  // backend, no language model, no API key, nothing to run up a bill. It answers
  // the questions in `qa` below (shown as clickable chips + matched on free text)
  // and gives an honest fallback for anything else. Set enabled:false to remove it.
  // Let your AI fill the qa[] answers for you via PROMPT.md.
  assistant: {
    enabled: true,
    name: "Sidekick",                        // your helper/mascot's name
    avatar: "/img/assistant-avatar.svg",     // swap for your own image (square looks best)
    subtitle: "still learning as the site grows",
    greeting: "Hi — I'm your site's helper. I'm still learning, so I know a few things well (and I'll say when I don't). Ask me one:",
    fallback: "That one I'm still learning. Try one of these, or reach out on the Connect page.",
    // Each entry: q = the chip label / question, keywords = words to match free-text
    // input on, a = the answer (plain text; simple <a href> links are fine).
    qa: [
      { q: "Who are you?", keywords: ["who", "you", "about", "role", "do"], a: "A one-line intro to who you are and what you do. (Edit this in profile.js.)" },
      { q: "What have you built?", keywords: ["built", "build", "ship", "project", "work", "made"], a: "Name a highlight or two and point to your <a href=\"/work/\">Work</a> page." },
      { q: "What do you write about?", keywords: ["write", "writing", "post", "blog", "thought", "read"], a: "Say what you write about and link the <a href=\"/writing/\">Writing</a> page." },
      { q: "How do I reach you?", keywords: ["reach", "contact", "email", "connect", "hire", "talk", "message"], a: "Email is easiest, or use the <a href=\"/connect/\">Connect</a> page." },
      { q: "Are you a real AI?", keywords: ["real", "ai", "how do you work", "model", "chatbot", "curated", "llm"], a: "Honest answer: I'm a curated helper, not a live model. I answer a set list of questions well and admit what I don't know." },
    ],
  },
};
