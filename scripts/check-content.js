// Content check: runs before every build (npm run build / npm start).
// Errors stop the build. [bracket] placeholders are warnings, or errors when LAUNCH=true.
import { loadSite, loadSections } from "./load-content.js";

const LAUNCH = /^(1|true|yes)$/i.test(process.env.LAUNCH || "");
const errors = [];
const warnings = [];

let site, copy;
try {
  site = loadSite();
  copy = loadSections();
} catch (e) {
  console.error(`✖ Could not read content files: ${e.message}`);
  process.exit(1);
}

const get = (obj, p) => p.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
const isBlank = (v) => v == null || (typeof v === "string" && v.trim() === "") || (Array.isArray(v) && v.length === 0);

// Required fields per file.
const REQUIRED = {
  "site.yml": [site, ["name", "url", "location", "seo.title", "seo.description", "contact.email", "logo.mark", "menu", "menu_button.label", "sections"]],
  "hero.md": [copy.hero, ["heading", "body", "buttons"]],
  "services.md": [copy.services, ["heading", "cards"]],
  "process.md": [copy.process, ["heading", "steps"]],
  "about.md": [copy.about, ["heading", "body"]],
  "contact.md": [copy.contact, ["heading", "body", "form.submit", "form.countries", "form.services"]],
  "thanks.md": [copy.thanks, ["heading", "body"]],
  "notfound.md": [copy.notfound, ["heading", "body"]],
};
for (const [file, [obj, fields]] of Object.entries(REQUIRED)) {
  if (!obj) { errors.push(`${file}: file is missing`); continue; }
  for (const f of fields) if (isBlank(get(obj, f))) errors.push(`${file}: "${f}" is required`);
}

// Every section listed in site.yml must have a file and a template.
const known = ["hero", "services", "process", "about", "contact"];
for (const s of site.sections || []) {
  if (!known.includes(s)) errors.push(`site.yml: unknown section "${s}" (use one of: ${known.join(", ")})`);
}

// Formats.
const email = get(site, "contact.email");
if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push(`site.yml: contact.email "${email}" is not a valid email`);
for (const f of ["url", "contact.linkedin", "contact.calendly"]) {
  const v = get(site, f);
  if (v && !/^https:\/\/\S+$/.test(v)) errors.push(`site.yml: "${f}" must be a full https:// address`);
}

// Card lists in services.md.
(copy.services?.cards || []).forEach((c, i) => {
  if (isBlank(c.title)) errors.push(`services.md: card ${i + 1} needs a title`);
  if (isBlank(c.items) && isBlank(c.groups)) errors.push(`services.md: card ${i + 1} needs "items" or "groups"`);
});

// Body text: keep formatting to bold, italic, links and lists.
for (const [name, s] of Object.entries(copy)) {
  const lines = (s.body || "").split("\n");
  lines.forEach((line, i) => {
    const where = `${s._file}: body line ${i + 1}`;
    if (/^\s{0,3}#{1,6}\s/.test(line)) errors.push(`${where}: headings aren't allowed in body text (use **bold** instead)`);
    if (/!\[[^\]]*\]\(/.test(line)) errors.push(`${where}: images aren't allowed in body text`);
    if (/<\/?[a-z][\s\S]*?>/i.test(line)) errors.push(`${where}: HTML isn't allowed in body text`);
  });
}

// Leftover [placeholders] (ignores Markdown links like [text](url)).
const placeholder = /\[[^\]\n]+\](?!\()/g;
function scan(value, where) {
  if (typeof value === "string") {
    const m = value.match(placeholder);
    if (m) warnings.push(`${where}: placeholder ${m.join(", ")}`);
  } else if (Array.isArray(value)) value.forEach((v, i) => scan(v, `${where}[${i}]`));
  else if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) scan(v, `${where}.${k}`);
}
scan(site, "site.yml");
for (const s of Object.values(copy)) {
  // Hidden founder card placeholders don't reach the page.
  const visible = { ...s };
  if (visible.founder && !visible.founder.show) delete visible.founder;
  delete visible._file;
  scan(visible, s._file);
}

for (const w of warnings) console.warn(`${LAUNCH ? "✖" : "⚠"} ${w}`);
for (const e of errors) console.error(`✖ ${e}`);
const fail = errors.length > 0 || (LAUNCH && warnings.length > 0);
if (fail) {
  console.error(`\nContent check failed (${errors.length} error(s)${LAUNCH ? `, ${warnings.length} placeholder(s)` : ""}).`);
  process.exit(1);
}
console.log(`✓ Content check passed${warnings.length ? ` with ${warnings.length} placeholder warning(s)` : ""}.`);
