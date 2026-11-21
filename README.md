# aceecofin-website

Website for **Ace Ecofin Advisors** (aceecofinadvisors.com): a one-page static site built with [Eleventy](https://www.11ty.dev/) and hosted on Netlify. The plan and design system are in [`design/PLAN.md`](design/PLAN.md).

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm start        # http://localhost:8080, reloads on changes
npm run build    # outputs the static site to _site/
npm run check    # content check only
```

The contact form is a Netlify Form, so it only submits on a Netlify deploy (or with `netlify dev`). Locally, submitting it won't work.

## Where things are

| Path | What |
|---|---|
| `content/site.yml` | Firm name, SEO, contact details, menu, section order |
| `content/*.md` | One file per section. Labelled fields at the top, formatted text (bold, italic, links, lists) below the second `---` |
| `src/_includes/` | Page layout (`base.njk`) and one template per section (`sections/`) |
| `src/assets/css/styles.css` | All styles. Colours and sizes are variables at the top |
| `src/assets/img/` | Logo, favicon, social share image |
| `scripts/check-content.js` | Runs before every build: required fields, valid links, allowed formatting, leftover `[placeholders]` |
| `netlify.toml` | Build settings, security headers, `www` redirect |

## Changing text

Edit the relevant file in `content/`. The comment at the top of each file says what it controls. Leave an optional contact field as `""` to hide it.

`[Square brackets]` mark details still to be filled in. They show as warnings locally, and the production build on Netlify **fails** while any remain (`LAUNCH=true` in `netlify.toml`). To try that locally:

```sh
LAUNCH=true npm run check            # macOS / Linux
$env:LAUNCH="true"; npm run check    # Windows PowerShell
```
