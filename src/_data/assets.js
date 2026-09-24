// Build-time content hashes for cache-busting.
// Each asset's `?v=` changes only when the file's bytes change, so browsers and
// link-preview crawlers refetch after a real change and cache aggressively otherwise.
const fs = require("fs");
const crypto = require("crypto");

function hash(path) {
  try {
    const buf = fs.readFileSync(path);
    return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 8);
  } catch (err) {
    // Fall back to a build-time value so a missing file never breaks the build.
    return Date.now().toString(36);
  }
}

// One hash across all logo files: changes whenever any logo's bytes change,
// so swapping a logo (same filename) can't serve stale cached bytes.
function hashMany(paths) {
  const h = crypto.createHash("sha256");
  paths.forEach(function (p) {
    try { h.update(fs.readFileSync(p)); } catch (err) { /* skip missing */ }
  });
  return h.digest("hex").slice(0, 8);
}

module.exports = {
  cssHash: hash("src/css/styles.css"),
  ogHash: hash("src/img/og-card.png"),
  logosHash: hashMany([
    "src/img/logos/henkel.svg",
    "src/img/logos/american-university.png",
    "src/img/logos/advantage.png",
    "src/img/logos/amazon.png",
    "src/img/logos/heineken.png",
    "src/img/logos/arkansas-tech.png",
  ]),
  aboutHash: hashMany([
    "src/img/ryan-bowlin.jpg",
    "src/img/family.jpg",
    "src/img/hobbies.jpg",
    "src/img/spheres.jpg",
  ]),
};
