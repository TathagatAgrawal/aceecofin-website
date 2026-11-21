# Ace Ecofin Advisors website: implementation plan

**Source of truth:** [`reference/Firm_Profile.docx`](reference/Firm_Profile.docx). **All headings and text on the site come only from this document.**

Other reference material (in [`reference/`](reference/)):
- [`logo-from-firm-profile.jpg`](reference/logo-from-firm-profile.jpg): the logo taken from the profile. It is only 176×157 px, so a high-resolution or vector original is needed.
- [`Ace_Ecofin_Website_Guide.html`](reference/Ace_Ecofin_Website_Guide.html): **superseded.** Its page design and copy are no longer used. Only its hosting and email setup steps (sections 5–7) still apply.

The site is a simple one-page site at **aceecofinadvisors.com**, hosted on Netlify. A CMS or browser-based editing tool is out of scope.

---

## 1. Goal and audience

| | |
|---|---|
| **What** | A one-page online version of the firm profile: who the firm is, what it offers, and how to get in touch. |
| **Who visits** | Accounting firms abroad looking for bookkeeping and Indian tax support. |
| **What we want them to do** | Email or connect on LinkedIn (the "Contact Us" section). |

---

## 2. Content structure

All text lives in `content/`, separate from the layout. Each section is a Markdown file. The top of each file, between `---` lines, holds labelled fields (headings, lists). Below that is the body, ordinary Markdown paragraphs that can use **bold**, *italic*, links and lists. `content/site.yml` holds settings and contact details. Text is changed by editing these files in the repo.

| File | Content (from the firm profile) |
|---|---|
| `content/site.yml` | Firm name, tagline, contact details (email, LinkedIn), footer line, SEO text, section order |
| `content/about.md` | **About Us**: two paragraphs. The three highlights were removed because they repeated the second paragraph. |
| `content/services.md` | **Services Offered**: Bookkeeping & accounting (5 items plus "Software we work in"), and International taxation: your India desk (intro and two titled lists) |
| `content/contact.md` | **Contact Us** (the profile's "Let's work together", renamed by the owner): labels for Email and LinkedIn |
| `content/notfound.md` | Text for the 404 page (the only page text not from the profile, because the site needs it to work) |

Rules that keep content consistent:
- Body formatting is limited to bold, italic, links and lists. The Markdown renderer has `html: false`, and the content check rejects headings, images or HTML in body text.
- An empty optional contact field (for example LinkedIn) hides that row.
- `scripts/check-content.js` runs before every build. It checks required fields, valid email and URLs, and leftover `[placeholders]`. On Netlify's production build, any placeholder stops the deploy.

---

## 3. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Content | Markdown with YAML front matter in `content/`, plus `site.yml` | Formatted text where it helps, named fields where structure matters |
| Site generator | **Eleventy (11ty) 3.1.8**, Nunjucks templates | Outputs plain static HTML at build time, with no client-side JavaScript |
| Markdown | markdown-it (`html: false`) with `md` and `mdInline` filters | Safe output |
| Styling | One plain CSS file with design tokens | Simple and easy to adjust |
| Fonts | **Playfair Display** (serif, headings), **Inter** (text), from Google Fonts | A serif for headings gives a premium, established feel. Inter keeps body text easy to read. |
| JavaScript | None | |
| Hosting | Netlify linked to this GitHub repo: build `npm run build`, publish `_site/` | Automatic deploys, previews for pull requests, free HTTPS |
| Config | `netlify.toml`: security headers, `www` → apex redirect, `LAUNCH=true` for production | |

### Repository layout
```
aceecofin-website/
├── README.md
├── package.json  eleventy.config.js  netlify.toml
├── design/                      # this plan and reference material (not published)
├── content/                     # all site text
│   ├── site.yml  about.md  services.md  contact.md  notfound.md
├── src/
│   ├── index.njk                # intro, then sections in the order set in site.yml
│   ├── 404.njk  sitemap.njk  robots.njk
│   ├── _data/site.js  _data/copy.js
│   ├── _includes/base.njk  simple-page.njk
│   ├── _includes/sections/about.njk  services.njk  contact.njk
│   └── assets/css/styles.css  assets/img/
└── scripts/check-content.js  load-content.js
```

---

## 4. Design

**One centred column, simple, premium and professional.** It reads like a well-set printed firm profile: serif headings, generous white space, a warm ivory page, deep navy type and a restrained muted-gold accent.

| Element | Treatment |
|---|---|
| Layout | A single column, at most 620px wide (about 70 characters per line), centred, with 28px side padding (22px on phones). No grids, tables, cards, side-by-side blocks, menu bar, coloured bands or full-width lines. |
| Background | Warm ivory (`#FAF8F4`) throughout |
| Header | The logo mark only, centred, linking home |
| Intro | Centred. Firm name as the `h1` in Playfair Display, a short gold rule, then the tagline at 19px in sentence case |
| Section headings (`h2`) | Playfair Display, below a short gold rule: About Us, Services Offered, Contact Us. Sections are separated by white space only (96px, 64px on phones). |
| Services | Service name as an `h3` in serif. The India desk intro is upright at 18px. List titles are navy, semibold and in sentence case. Bullets are thin gold dashes. The software list is a single line below the list. |
| Contact | A small capital label above each value in serif (the email is the main call to action) |
| Footer | "Ace Ecofin Advisors · Accounting · Bookkeeping · Taxation" in plain 14px text, centred |

### Heading scale (always h1 > h2 > h3)
| Level | Font | Size |
|---|---|---|
| `h1` firm name | Playfair Display 600 | `clamp(40px, 6.4vw, 60px)` |
| `h2` section | Playfair Display 600 | `clamp(30px, 4.2vw, 38px)` |
| `h3` service | Playfair Display 600 | `clamp(22px, 2.8vw, 25px)` |
| `h4` list title | Inter 600, sentence case | 17px |
| Body | Inter 400 | 17px, line-height 1.75 |

Headings use standard-height (lining) numerals, so "20+" sits evenly with the text.

### Design tokens (`styles.css`)
| Token | Value | Use |
|---|---|---|
| `--ink` | `#0B1F3A` | Headings, links |
| `--text` | `#26334A` | Body text |
| `--muted` | `#5A6577` | Secondary text (about 5.6:1 on ivory) |
| `--gold` | `#8B6B2E` | Gold marks, list dashes, link hover, focus (about 4.7:1 on ivory) |
| `--gold-soft` | `#CDB88A` | Link underlines (decorative only) |
| `--bg` | `#FAF8F4` | Page |
| `--col` | `620px` | Column width |

### Accessibility
- Text contrast of at least 4.5:1, a skip link, and one `h1` per page followed by `h2`/`h3` in order.
- Visible focus outlines, `prefers-reduced-motion` respected, and link targets at least 44px tall where they act as buttons.

---

## 5. Page content (top to bottom, all from the firm profile)

1. **Ace Ecofin Advisors**: *Bookkeeping & International Taxation Support for Accounting Firms*
2. **About Us**: "Ace Ecofin Advisors is a financial advisory and accounting firm based in Central India…" and "Our team of qualified Chartered Accountants brings more than 20 years of experience…".
3. **Services Offered**
   - *Bookkeeping & accounting*: monthly/quarterly bookkeeping and transaction categorisation; bank, credit card and loan reconciliations; month-end and year-end close, adjusting entries and catch-up; AP/AR, financial statements and management reports; Excel automation and data clean-up. *Software we work in:* QuickBooks Online · Xero · Zoho Books · Excel · Tally Prime.
   - *International taxation: your India desk*: "When your clients have an Indian connection…". **For NRI clients** (4 items) and **For businesses with Indian vendors or operations** (4 items).
4. **Contact Us** (renamed from the profile's "Let's work together"): Email siddharth@aceecofinadvisors.com · LinkedIn (hidden until the URL is supplied). The website link from the profile is left out because visitors are already on the site.
5. **Footer**: Ace Ecofin Advisors · Accounting · Bookkeeping · Taxation

**Removed** (not in the firm profile): the hero banner copy and buttons, trust points, the "How we work" steps, the founder card, the enquiry form and its thank-you page, the menu bar.

---

## 6. Implementation status

| Step | Status |
|---|---|
| Eleventy scaffold, content loading, Markdown filters | Done |
| Content files from the firm profile | Done |
| One-column templates and simple CSS | Done |
| Logo mark (transparent), favicon, touch icon, social share image | Done (from the low-resolution logo) |
| Content check, `netlify.toml`, sitemap, robots, 404 | Done |
| Swap in a high-resolution or SVG logo | Waiting for the original file |
| LinkedIn URL | Waiting |
| QA: W3C validator, Lighthouse, real phone | To do |
| Deploy to Netlify and connect the domain (guide sections 5–7) | **Not started. Only when approved.** |

---

## 7. Still needed from the owner
| Item | Notes |
|---|---|
| Logo original (SVG, or PNG of at least 1000px) | The current one is upscaled from 176px |
| LinkedIn URL | Shown in "Contact Us" once added to `site.yml` |

---

## 8. Definition of done
- [ ] Every heading and piece of text on the page matches the firm profile.
- [ ] One column at every screen width, with no horizontal scrolling at 390px.
- [ ] `LAUNCH=true npm run check` passes.
- [ ] Lighthouse 95+ in all categories.
- [ ] Deployed, with the apex domain and `www` on HTTPS (when approved).
