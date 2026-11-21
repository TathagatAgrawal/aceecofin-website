# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Accounting firms abroad that want to hand off bookkeeping and the Indian tax side of their clients. The partner or manager evaluating the firm is checking whether Ace Ecofin is competent, qualified and easy to reach before sending an email. No country is targeted: keep wording market-neutral, with no US-, UK- or other region-specific terms or spellings singled out.

## Product Purpose

A one-page online version of the Ace Ecofin Advisors firm profile at aceecofinadvisors.com: who the firm is, what it offers, and how to get in touch. Success is a visiting firm emailing (siddharth@aceecofinadvisors.com) or connecting on LinkedIn from the Contact Us section.

## Positioning

Ace Ecofin is CA-led and also offers an India desk. Qualified Chartered Accountants with 20+ years in taxation and accounting do the bookkeeping, and the same team handles the Indian side of a firm's clients: NRI taxation, DTAA relief and TRCs, TDS and withholding on cross-border payments, GST on export of services, transfer pricing and PE reviews. A plain offshore bookkeeping provider cannot honestly claim both.

## Operating Context

- Visitors usually arrive from a direct link, the firm profile, LinkedIn or a search, and decide quickly whether to make contact.
- Bookkeeping is done in QuickBooks Online, Xero, Zoho Books, Excel and Tally Prime.
- The firm is based in Central India and serves individuals and corporates.

## Capabilities and Constraints

- **Content source:** every heading and piece of text comes only from `design/reference/Firm_Profile.docx`. The one exception is the 404 page text. The owner renamed "Let's work together" to "Contact Us". Ask before adding or changing factual copy.
- **Scope:** one page with About Us, Services Offered and Contact Us, plus a footer. There is no enquiry form, CMS, menu bar or client-side JavaScript.
- **Stack (existing):** Eleventy 3 with Nunjucks templates, Markdown and YAML content in `content/`, one CSS file, and hosting on Netlify. `scripts/check-content.js` limits body formatting to bold, italic, links and lists, and blocks the production build while any `[placeholder]` remains.
- **Pending from the owner:** a high-resolution or SVG logo (the current one is upscaled from 176px) and the LinkedIn URL (the row stays hidden until it is supplied).
- **Not done:** deploying to Netlify and connecting the domain need explicit approval.

## Brand Commitments

- The name is "Ace Ecofin Advisors". The tagline is "Bookkeeping & International Taxation Support for Accounting Firms". The footer descriptor is "Accounting · Bookkeeping · Taxation".
- The hexagon logo mark comes from the firm profile (`src/assets/img/logo-mark.png`, source `design/reference/logo-from-firm-profile.jpg`).
- The owner wants the site to feel premium, professional and established.

## Evidence on Hand

- Firm profile facts: 20+ years of taxation and accounting experience, a qualified Chartered Accountant team, and clients that include individuals and corporates.
- **Pending:** the owner says further proof exists (for example client names, testimonials, credentials or case studies) but it is not ready to share. Until the owner supplies it, never invent or add testimonials, client names, logos, membership numbers, statistics or case studies.

## Product Principles

1. **The firm profile is the content.** The site presents the profile faithfully and adds no new claims.
2. **Lead with both halves of the offer.** Show CA-qualified bookkeeping and the India desk together, because the combination is the differentiator.
3. **Contact without friction.** Email is the main action. Nothing should stand between a convinced visitor and the address.
4. **Credibility through restraint.** A small expert firm earns trust through accuracy and care, not volume or sales language.

## Accessibility & Inclusion

Text contrast of at least 4.5:1, a skip link, one `h1` followed by `h2`/`h3` in order, visible focus outlines, support for `prefers-reduced-motion`, no horizontal scrolling at 390px, and a target of Lighthouse 95+ in every category.
