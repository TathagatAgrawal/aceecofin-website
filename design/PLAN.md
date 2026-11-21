# Ace Ecofin Advisors website: implementation plan

**Sources** (in [`reference/`](reference/)):
1. [`Ace_Ecofin_Website_Guide.html`](reference/Ace_Ecofin_Website_Guide.html): design system, target layout (live preview), draft copy, Netlify hosting, email setup, launch checklist.
2. [`Firm_Profile.docx`](reference/Firm_Profile.docx): the firm's own final profile. **It takes priority over the guide's copy wherever they differ** (see section 5).
3. [`logo-from-firm-profile.jpg`](reference/logo-from-firm-profile.jpg): the logo taken from the profile. It is only 176×157 px, so a high-resolution or vector original is needed (see section 8).

This plan turns those sources into a site at **aceecofinadvisors.com** on Netlify. All text is kept in Markdown content files, separate from the HTML layout. A CMS or browser-based editing tool is **out of scope** for now.

---

## 1. Goal and audience

| | |
|---|---|
| **What** | A single-page marketing site for an India-based firm of Chartered Accountants offering white-label bookkeeping and an "India desk" for international taxation to accounting firms abroad. |
| **Tagline** (from profile) | *Bookkeeping & International Taxation Support for Accounting Firms* |
| **Who visits** | Partners and managers at CPA / accounting firms in the US, UK, Canada, Australia and the UAE. |
| **What we want them to do** | Book a free 30-minute call, or send an enquiry through the contact form. |

---

## 2. Content structure

### 2.1 Approach
All wording, lists, links and contact details live in **Markdown content files**, one per page section. Each file has two parts. The top, between `---` lines, is *front matter*: short labelled fields for headings, buttons, list items, links and numbers. Below it is the *body*: ordinary paragraphs written in Markdown, which can use **bold**, *italic*, links and bullet lists. The layout (HTML templates) and styling (CSS) are kept in separate files. A static site generator, **Eleventy**, combines them into ordinary HTML at build time, so the published site is plain static HTML with no JavaScript, as the guide requires.

Text changes are made by editing these files in the repo, like any other code change. A CMS, an `/admin` editor and editor accounts are **out of scope** for this plan.

### 2.2 What a content file looks like
`content/about.md`:
```markdown
---
# Controls the "Who we are" section of the home page.
eyebrow: Who we are
heading: Qualified Chartered Accountants. 20+ years of experience.
stats:
  - value: 20+ years
    label: Taxation & accounting experience
  - value: Chartered Accountants
    label: Qualified professional team
  - value: Individuals & Corporates
    label: Clients served
show_founder_card: false
---
Ace Ecofin Advisors is a financial advisory and accounting firm based in
**Central India**, offering accounting, bookkeeping and taxation services.

Our team of qualified Chartered Accountants brings more than 20 years of
experience, specialising in taxation and accounting work for individuals
as well as corporates.
```

### 2.3 Why Markdown with front matter, not pure Markdown or pure YAML
| Option | Good | Bad |
|---|---|---|
| Pure YAML (the earlier plan) | Every piece is a clear field | No text formatting. Paragraphs are awkward to write in YAML. |
| Pure Markdown | Natural to write, full formatting | Parts with a set structure (two buttons, three stats, the India desk's two lists, form dropdown options) have to be guessed from headings and list order. One extra heading or a moved bullet silently breaks the layout. |
| **Markdown + front matter (chosen)** | Prose gets formatting. Structured parts stay as named fields. | Two kinds of input in one file. |

Short single-line fields such as service bullets and trust points also allow **inline** Markdown (bold, italic, links) and are rendered with `markdownify` in the templates. A bullet like `**Free** pilot before you commit` therefore works anywhere.

Rules that keep content consistent:
- **Formatting is limited to what suits the design:** bold, italic, links and bullet/numbered lists. Headings, images, tables and raw HTML in the body are turned off: the Markdown renderer has `html: false`, and the content check flags `#` headings in the body. This keeps every section visually consistent.
- External links automatically get `rel="noopener"`. Links to `#contact` and the other sections work as normal.
- Every file starts with a comment saying which part of the page it controls.
- A build check fails the deploy if a required field is empty or a `[bracket]` placeholder is still there when `LAUNCH=true` is set. A typo can't take the live site down: Netlify keeps serving the last good version if a build fails.
- Section order and on/off switches live in `content/site.yml`, and per-section switches live in that section's front matter (for example `show_founder_card: false` in `about.md`), so sections can be hidden without code changes.

### 2.4 Content files

| File | Front matter (fields) | Body (formatted text) |
|---|---|---|
| `content/site.yml` | Firm name, tagline, logo, SEO title and description, contact details (email, phone, LinkedIn, Calendly, location), footer line, section order and switches | none. These are settings only, so it stays YAML. |
| `content/hero.md` | Eyebrow, headline, two buttons, trust points | Subheading |
| `content/services.md` | Heading; Bookkeeping card (title, intro, items); India desk card (title, intro, two titled lists); software chips | Optional note under the cards (for example the "experienced in, not certified" wording) |
| `content/process.md` | Heading, four steps (number, title, text) | Optional intro |
| `content/about.md` | Heading, stats, founder/team card fields and switch | About paragraphs |
| `content/contact.md` | Heading, form labels, dropdown options | Intro text |
| `content/thanks.md`, `content/404.md` | Page title | Message |

---

## 3. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Content | **Markdown with YAML front matter** in `content/` (plus `site.yml` for settings) | Formatted text where it helps, named fields where the layout needs a fixed structure. Readable, with line-by-line diffs. |
| Markdown rendering | **markdown-it** (Eleventy's built-in renderer), `html: false`, with a `markdownify` filter for inline fields | Safe output with no raw HTML from content. |
| Site generator | **Eleventy (11ty) v3**, Nunjucks templates | Small and fast, with no client-side JavaScript. It outputs plain HTML. Runs only at build time. |
| Markup | Semantic **HTML5** templates, one partial per section | Matches the guide's structure. |
| Styling | One **plain CSS** file with design tokens as CSS custom properties | No Tailwind or Sass. Changing a colour or size happens in one place. |
| Fonts | **Space Grotesk** (headings) and **Inter** (body), Google Fonts with `display=swap` | As in the guide. |
| Icons | Inline **SVG** line icons | No icon library, no emoji. |
| JavaScript on the public site | **None** (optionally a few lines for a mobile menu) | The guide asks for no external JS libraries. |
| Forms | **Netlify Forms** (`data-netlify="true"`, honeypot `bot-field`) | The free tier covers 100 submissions a month, with email notifications. |
| Hosting | **Netlify** linked to this GitHub repo. Build `npm run build`, publish `_site/` | Every change to `main` deploys automatically. Pull requests get previews. One-click rollback. Free HTTPS. |
| Config | `netlify.toml`, `package.json` (Node 20+, exact versions pinned) | Reproducible builds, headers, redirects. |
| Quality checks | Content validation script, Lighthouse, W3C validator, axe, manual test at 390px | Free tools, all that this size of site needs. |

### Repository layout
```
aceecofin-website/
├── README.md                    # run, edit and deploy instructions
├── package.json                 # eleventy + scripts (start, build, check)
├── eleventy.config.js
├── netlify.toml
├── design/                      # plan and reference material (not published)
├── content/                     # ← ALL EDITABLE TEXT LIVES HERE
│   ├── site.yml                 # settings and contact details
│   ├── hero.md  services.md  process.md  about.md  contact.md
│   └── thanks.md  404.md
├── src/
│   ├── index.njk                # assembles sections in the order set in site.yml
│   ├── thanks.njk  404.njk  sitemap.xml.njk  robots.txt
│   ├── _includes/
│   │   ├── base.njk             # <head>, header, footer
│   │   └── sections/hero.njk services.njk process.njk about.njk contact.njk
│   └── assets/
│       ├── css/styles.css
│       └── img/logo.svg  favicon.svg  og-image.png
└── scripts/check-content.js     # fails build on missing fields / leftover [brackets]
```

---

## 4. Design

### 4.1 Principles
Calm and professional, with plenty of white space and no stock photos or emoji. The logo and any team or founder photo are the only images.

### 4.2 Colours: decision needed
The guide uses **navy and teal**. The new logo uses **blue and orange** with dark navy lettering. The plan keeps the guide's colour system by default, because it was designed and contrast-checked, and the navy matches the logo's lettering. The logo sits in the header on white, where its colours stand on their own.

The alternative is to retheme to the logo: replace teal with the logo blue for buttons and links, and use orange only for small accents such as icons and rules, never for text, because orange on white is below 4.5:1 contrast. Because colours are design tokens, this is a change to about 5 lines in `styles.css`. Decide before launch.

| Token | Default value | Use |
|---|---|---|
| `--navy` | `#0B1F3A` | Headings, hero, footer, body text |
| `--accent` | `#0F766E` (teal) | Buttons, links, eyebrows |
| `--accent-tint` | `#E3F3F0` | Icon backgrounds |
| `--accent-on-dark` | `#8FD6CC` | Eyebrow and check icons on navy |
| `--bg` / `--surface` | `#F6F7F9` / `#FFFFFF` | Page / cards |
| `--grey` / `--ink-2` | `#44546A` / `#1F2F45` | Secondary / list text |
| `--border` / `--input-border` | `#E3E6EB` / `#B8C2CF` | Borders / fields |
| `--on-navy` / `--navy-line` | `#C9D3E0` / `#22385A` | Text and dividers on navy |
| `--radius-card` / `--radius-btn` | `16px` / `8px` | |
| `--maxw` | `1200px` | Content width |

### 4.3 Typography
| Element | Font | Size (desktop → phone) | Weight |
|---|---|---|---|
| Hero h1 | Space Grotesk | `clamp(40px, 6vw, 60px)`, line-height 1.05 | 700 |
| Section h2 | Space Grotesk | `clamp(32px, 4.5vw, 42px)`, line-height 1.1 | 700 |
| Card h3 | Space Grotesk | 26px | 600 |
| Stat number | Space Grotesk | 40px | 700 |
| Eyebrow | Inter | 14px, uppercase, 0.08em tracking | 600 |
| Body | Inter | 16–20px, line-height 1.6 | 400 |

### 4.4 Layout and components
- Content is centred with a max width of 1200px and 32px side padding (16–20px on phones). Grids use `auto-fit, minmax(…)` and collapse to one column on phones.
- Cards are white with a 1px border and 16px corners. Buttons and inputs are at least 44px tall with 8px corners.
- Components: `.btn` (primary/ghost), `.eyebrow`, `.card`, `.icon-tile`, `.chip`, `.step`, `.trust-list`, **`.stat`** (new, for the About stats row), `.field`.
- Logo: an SVG in the header (about 40px tall) and a reversed or white version in the navy footer.

### 4.5 Accessibility (WCAG 2.2 AA)
- Contrast of at least 4.5:1 for text.
- Landmarks and a skip link.
- Every field has a `<label for>`.
- Decorative SVGs are `aria-hidden`. The logo has the alt text "Ace Ecofin Advisors".
- Visible focus rings.
- `prefers-reduced-motion` is respected.
- Anchor targets get `scroll-margin-top`.

---

## 5. Page content and features (top to bottom)

The starting content comes from the **firm profile**. Where the profile doesn't cover a section, the **guide's copy** fills the gap. ★ marks where the profile changes the guide.

### 5.1 Header
Logo with the firm name (links to top). Links: Services, India Desk, How we work, About. A **"Book a free call"** button goes to `#contact`. The header is sticky. On phones the links wrap under the logo, with a small menu toggle if they look cramped.

### 5.2 Hero (navy), from the guide
- **Eyebrow:** Offshore back office for accounting firms
- **Headline:** Bookkeeping and India tax support, delivered under your firm's name.
- **Subheading:** the guide's text.
- **Buttons:** Book a free 30-minute call · See our services
- **Trust points ★:** Team of qualified Chartered Accountants · White-label: we work under your brand · NDA-backed confidentiality · Free pilot before you commit. "Team of qualified Chartered Accountants" replaces "GST-registered firm in India", because the profile doesn't mention GST registration. Put GST back if it applies.

### 5.3 What we do (`#services`) ★ profile wording
**Bookkeeping & accounting:** *Recurring and catch-up work, done in your software and to your checklists.*
- Monthly / quarterly bookkeeping and transaction categorisation
- Bank, credit card and loan reconciliations
- Month-end and year-end close, adjusting entries, and catch-up of books that are behind
- Accounts payable and receivable, financial statements and management reports
- Excel automation and data clean-up

**International taxation: your India desk** (`#india-desk`): *When your clients have an Indian connection, we handle the Indian side, so you don't have to.*
- *For NRI clients:* One-stop solution for Indian taxation · Double tax treaty (DTAA) relief, foreign tax credits and tax residency documentation (TRC) · Tax on sale of Indian property, shares and mutual funds · Applications for lower or nil TDS deduction
- *For businesses with Indian vendors or operations:* Withholding tax (TDS) on cross-border payments, treaty rates and remittance compliance · GST on cross-border services, including export of services · Transfer pricing documentation · Permanent establishment (PE) risk reviews

**Software we work in ★:** QuickBooks Online · Xero · Zoho Books · Excel · Tally Prime. This drops the guide's [Sage / MYOB] and Dext / Hubdoc. Say "experienced in", never "certified", until a ProAdvisor badge is held.

### 5.4 How we work (`#how`), from the guide
Four steps: Intro call → Free pilot → Onboarding → Ongoing work. The guide's text is unchanged, and [one client file] still needs confirming.

### 5.5 Who we are (`#about`) ★ rewritten from the profile
- **Heading:** the guide's "A small firm. Direct access to the founder." no longer fits a team of CAs. Proposed: *"Qualified Chartered Accountants. 20+ years of experience."* This needs owner sign-off.
- **Body (profile):** Ace Ecofin Advisors is a financial advisory and accounting firm based in Central India, offering accounting, bookkeeping and taxation services. Our team of qualified Chartered Accountants brings more than 20 years of experience, specialising in taxation and accounting work for individuals as well as corporates.
- **Stats row (new, from the profile):** **20+ years**: Taxation & accounting experience · **Chartered Accountants**: Qualified professional team · **Individuals & Corporates**: Clients served
- **Founder/team card:** turned off (`show_founder_card: false`) until a name, photo and qualifications are supplied. It can then be switched on in `about.md`.

### 5.6 Contact (`#contact`) ★ partly filled
- **Heading:** *Let's work together.* (profile) with the guide's intro: "Tell us about your firm and the work you'd like to hand off. We'll reply within one business day."
- **Details:** Email `siddharth@aceecofinadvisors.com` (profile) · LinkedIn [LinkedIn URL] · Phone / WhatsApp, Calendly and the exact city are optional fields. A row is hidden automatically when its field is empty, so there are no visible placeholders at launch. Location shows "Central India".
- **Netlify form:** `name="contact"`, `data-netlify="true"`, honeypot `bot-field`, hidden `form-name`, `action="/thanks/"`. Fields: Your name*, Firm name, Email*, Country, I'm interested in, Message. Dropdown options are editable in `contact.md`. Form notifications go to the email above.

### 5.7 Footer (navy) ★
"Ace Ecofin Advisors · Accounting · Bookkeeping · Taxation" (from the profile's footer) · Central India · © {current year, set automatically} Ace Ecofin Advisors. All rights reserved.

### 5.8 Extras
| Feature | Detail |
|---|---|
| SEO | Title "Ace Ecofin Advisors: Bookkeeping & International Taxation Support for Accounting Firms", meta description, canonical URL, `sitemap.xml`, `robots.txt`, JSON-LD `AccountingService` (name, logo, email, `areaServed`, `address: Central India`). All of it comes from `site.yml`. |
| Social sharing | Open Graph and Twitter tags, plus a 1200×630 `og-image.png` with the logo and tagline. |
| Favicon | Taken from the logo mark (the hexagon "A"): `favicon.svg` and `apple-touch-icon.png`. |
| Thank-you and 404 pages | Same header and footer. Text editable in `thanks.md` / `404.md`. |
| Security headers | `netlify.toml`: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and a CSP allowing self plus Google Fonts. |
| Performance | No JS on the public site, one CSS file, an SVG logo. Target Lighthouse 95+ in all four categories. |
| Redirect | `www` → apex domain (301). |

Out of scope for v1: CMS or browser-based content editing, blog, multi-page services, pricing, cookie-based analytics (use Netlify Analytics or a cookieless tool so there is no cookie banner).

---

## 6. Implementation steps
1. **Scaffold:** `package.json` (Eleventy pinned), `eleventy.config.js` (input `src/`, output `_site/`, YAML support for `site.yml`, a `content` collection loaded from `content/*.md`, a markdown-it instance with `html: false` and `linkify`, and a `markdownify` / `markdownInline` filter), `netlify.toml`, `README.md`.
2. **Content files:** create `site.yml` and the section `.md` files from section 5, with a comment header in each file's front matter.
3. **Tokens and base CSS:** variables, reset, type scale, container, buttons, focus, reduced motion.
4. **Templates:** `base.njk` and one partial per section, built from the guide's preview markup with inline styles converted to classes. Optional rows and sections hide when their field is empty. Check at desktop and 390px after each section.
5. **Logo and icons:** vector logo (from the original file, or traced from the profile image if no original exists), favicon, OG image.
6. **Form:** Netlify attributes, honeypot, `/thanks/`, `autocomplete` attributes.
7. **Validation:** `scripts/check-content.js` runs before the build. It checks required front matter fields, leftover `[brackets]` when `LAUNCH=true`, valid email and URLs, and that bodies contain no `#` headings, images or HTML.
8. **Extras:** meta, OG, JSON-LD, sitemap, robots, 404, headers, redirects.
9. **QA:** W3C validator, Lighthouse, axe, a keyboard-only pass, a real phone, and every anchor link.
10. **Deploy and go live** (only when approved): connect the repo in Netlify (build `npm run build`, publish `_site`), then set up the domain, DNS, HTTPS, form notifications, Zoho mail and Search Console, following guide sections 5–7.

Code work happens on feature branches with pull requests into `main`, so every change gets a Netlify Deploy Preview.

---

## 7. Differences between the guide and the firm profile (resolved above)
| Topic | Guide | Firm profile → site uses |
|---|---|---|
| Who | Small firm, solo founder card | Team of qualified CAs, 20+ years |
| Location | [City], India | Central India |
| GST-registered | Yes (hero, about, footer) | Not mentioned, so removed until confirmed |
| Software | QBO, Xero, Zoho, Sage/MYOB, Dext/Hubdoc, Excel | QBO, Xero, Zoho Books, Excel, **Tally Prime** |
| Service lists | Slightly different wording | Profile wording (section 5.3) |
| Email | [email] | siddharth@aceecofinadvisors.com |
| Stats | None | 20+ years · CAs · Individuals & Corporates |
| Brand | Navy/teal, text-only logo | Blue/orange hexagon logo (colour decision in 4.2) |
| Hero, process, form, free pilot | Present | Not in the profile, so the guide's copy is kept |

---

## 8. Still needed from the owner
| Item | Notes |
|---|---|
| **Logo original** (SVG, AI, EPS or PNG of at least 1000px) | The profile only has a 176×157 JPG |
| Colour decision | Keep navy/teal, or retheme to the logo's blue/orange (section 4.2) |
| GST registration | Confirm, and optionally provide the GSTIN for the footer |
| About heading | Approve the proposed wording, or supply your own |
| LinkedIn URL | Contact section |
| Phone / WhatsApp, Calendly link, exact city | Optional. Rows stay hidden if empty |
| Founder/team names, photos, qualifications | Optional. The card stays off until supplied |
| Free pilot scope ([one client file]) | How we work, step 2 |

---

## 9. Definition of done
- [ ] Matches the guide's layout at desktop and 390px, with content from section 5.
- [ ] All visible text comes from `content/` (no copy hard-coded in templates).
- [ ] No `[brackets]` on the live site, and `npm run check` passes with `LAUNCH=true`.
- [ ] The form submits on the live site and the email notification arrives at siddharth@aceecofinadvisors.com.
- [ ] Lighthouse 95+ in all categories. No axe violations.
- [ ] Apex and `www` both resolve over HTTPS.
- [ ] Guide section 7 launch checklist complete.
