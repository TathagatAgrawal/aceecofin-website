---
name: Ace Ecofin Advisors
description: Bookkeeping & International Taxation Support for Accounting Firms
colors:
  ledger-navy: "#0B1F3A"
  body-slate: "#26334A"
  muted-slate: "#5A6577"
  seal-gold: "#8B6B2E"
  soft-gilt: "#CDB88A"
  ivory-page: "#FAF8F4"
  selection-cream: "#EADFC6"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(40px, 6.4vw, 60px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    fontFeature: "lnum"
  headline:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(30px, 4.2vw, 38px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.005em"
    fontFeature: "lnum"
  title:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(22px, 2.8vw, 25px)"
    fontWeight: 600
    lineHeight: 1.3
    fontFeature: "lnum"
  lead:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  subhead:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12.5px"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  focus: "2px"
spacing:
  gutter: "28px"
  gutter-phone: "22px"
  section: "96px"
  section-phone: "64px"
  column: "620px"
components:
  link-button:
    backgroundColor: "transparent"
    textColor: "{colors.ledger-navy}"
    rounded: "{rounded.none}"
    padding: "10px 26px"
    height: "46px"
  link-button-hover:
    backgroundColor: "{colors.ledger-navy}"
    textColor: "#FFFFFF"
  section-heading:
    textColor: "{colors.ledger-navy}"
    typography: "{typography.headline}"
  tagline:
    textColor: "{colors.body-slate}"
    typography: "{typography.lead}"
  list-group-title:
    textColor: "{colors.ledger-navy}"
    typography: "{typography.subhead}"
  contact-value:
    textColor: "{colors.ledger-navy}"
    typography: "{typography.title}"
---

# Design System: Ace Ecofin Advisors

## Overview

**Creative North Star: "The Bound Firm Profile"**

The site is the firm profile, typeset rather than decorated. It is a single centred column on warm ivory paper. Navy serif headings sit above calm sans-serif text, and four small gold marks are the only ornament: a hairline under the firm name and a short bar above each section heading. White space does the rest of the separating. Authority comes from good proportions and exact type, not from structure drawn on the page.

The page is easy to read first. Body text is 17px with a 1.75 line height, lines run about 70 characters, and sections are 96px apart. Elements feel refined and restrained, with square edges and no shadows, and interaction is shown only by colour. Every fact appears once, in sentence case. Gold stays rare: it marks structure (the four marks and the list dashes) and never fills an area or carries running text.

**Key Characteristics:**
- One centred column at every width, with no grids, cards, tables, bands or menu bar
- Warm ivory page with navy ink and a sparing gold accent
- Playfair Display headings over Inter text, with lining numerals in headings
- No full-width lines: space separates sections, and a short gold bar opens each one
- Sentence case everywhere except one-word labels
- Flat throughout, with no shadows, gradients or rounded containers

## Colors

A paper-and-ink palette: warm ivory ground, navy ink in three strengths, and one muted gold.

### Primary
- **Ledger Navy** (`ledger-navy`): headings, the firm name, list group titles, links and the outline button. It is the voice of the page.

### Secondary
- **Seal Gold** (`seal-gold`): the hairline under the firm name, the bar above each section heading, list dashes, link hover and focus outlines (about 4.7:1 on ivory).
- **Soft Gilt** (`soft-gilt`): link underlines only. It is decorative and must never carry text.

### Neutral
- **Body Slate** (`body-slate`): running text, the tagline and the India desk intro.
- **Muted Slate** (`muted-slate`): the contact label and the footer only (about 5.6:1 on ivory).
- **Ivory Page** (`ivory-page`): the only background, also used as `theme-color`.
- **Selection Cream** (`selection-cream`): text selection highlight only.

### Named Rules
**The Single Accent Rule.** Seal Gold is used for the four gold marks, list dashes, hover and focus. It never appears as a fill, a background or text.

**The One Ground Rule.** The page is Ivory Page from top to bottom. No section gets a coloured band or panel.

## Typography

**Display Font:** Playfair Display (with Georgia, Times New Roman)
**Body Font:** Inter (with system-ui, -apple-system, Segoe UI)

**Character:** A high-contrast editorial serif gives the firm a printed, established voice, and Inter keeps the dense service lists easy to scan. The serif appears only in headings and in the contact email.

### Hierarchy
- **Display** (600, clamp 40–60px, 1.08): the firm name only, centred, followed by a 56px gold hairline.
- **Lead** (400, 19px, 1.55; 17px under 480px): the tagline, centred, in sentence case, balanced across lines and at most 34 characters wide.
- **Headline** (600, clamp 30–38px, 1.15): section headings (About Us, Services Offered, Contact Us), each below a 36×2px gold bar, with 32px below.
- **Title** (600, clamp 22–25px, 1.3): service names. The same serif at 22px (20px on phones) sets the contact email.
- **Body** (400, 17px, 1.75): paragraphs. List items use the same size at a 1.6 line height. The India desk intro is upright at 18px.
- **Subhead** (600, 17px, 1.5): list group titles such as "For NRI clients", in navy and sentence case.
- **Label** (600, 12.5px, 0.12em tracking, uppercase): the one-word contact labels only. The footer is plain 14px sentence case.

### Named Rules
**The Strict Ladder Rule.** At every width h1 is larger than h2, h2 than h3, and h3 than h4. Headings use lining numerals.

**The Sentence Case Rule.** Uppercase tracked text is only for one-word labels. Anything longer is set in sentence case so it reads at a glance.

**The Serif Is for Emphasis Rule.** Playfair Display is never used for running text. Long text is always Inter.

## Layout

There is a single column with a maximum width of 620px (about 70 characters of body text), centred, with 28px side padding (22px below 640px). Sections are separated by 96px of space (64px on phones) and no lines. The masthead (64px logo mark) and the intro are centred. Everything after the intro is left-aligned.

Lists use 26px hanging indents with 12px between items. Service blocks are 56px apart, and group titles have 28px above them. Contact rows stack the label above the value at every width. Headings use balanced wrapping and paragraphs use pretty wrapping, so no single word is left alone on a line. The page never scrolls sideways at 390px.

## Elevation & Depth

The page is completely flat, with no shadows, gradients, blur or borders. Grouping comes only from white space and the type hierarchy.

### Named Rules
**The Printed Page Rule.** If it could not be printed on paper, it does not belong. Nothing lifts, glows or overlaps.

**The Space, Not Lines Rule.** No full-width rules, table borders or dashed lines. If two things need separating, add space. The only drawn marks are the gold hairline under the firm name, the gold bar above each section heading, and the gold list dashes.

## Shapes

Corners are square everywhere (0px). The only rounding is the 2px on focus outlines. The only drawn forms are the 56×1px gold hairline under the firm name, the 36×2px gold bar above section headings, and the 12×1px gold dashes used as list bullets. The hexagonal logo mark is the only non-rectangular shape.

## Components

### Buttons
Refined and restrained. There is one button style, used on the 404 page.
- **Shape:** square corners (0px), 1px Ledger Navy outline, at least 46px tall.
- **Default:** transparent fill, Ledger Navy text, 14px / 600 / 0.1em uppercase Inter, 10px × 26px padding.
- **Hover / Focus:** fills with Ledger Navy and turns the text white over 0.15s. Focus shows the 2px Seal Gold outline at a 4px offset.

### Links
- Ledger Navy text with a 1px Soft Gilt underline offset by 4px. On hover, both text and underline turn Seal Gold (0.15s).

### Section heading
- A 36×2px Seal Gold bar, 20px of space, then the Headline serif, with 32px below it before the content. This bar is the only section marker.

### Service list
- Title serif service name, an optional upright 18px intro in Body Slate, then navy sentence-case subheads over gold-dash lists. The software line sits 24px below the list in body size, with a bold navy label followed by items separated by middle dots.

### Contact details
- A small uppercase Muted Slate label above a 22px serif value (20px on phones). The email address is the page's main call to action and stays a plain underlined link, not a button.

### Navigation
- There is none. The centred logo mark links home, and a skip link (navy fill, white text) appears on focus.

## Do's and Don'ts

### Do:
- **Do** keep every section inside the 620px column, separated by 96px (64px on phones) of space.
- **Do** open each new section with the 36×2px Seal Gold bar above a Playfair Display h2.
- **Do** set labels, titles and the tagline in sentence case; keep uppercase for one-word labels.
- **Do** show each fact once, in the profile's own words.
- **Do** keep text contrast at 4.5:1 or above on Ivory Page, and keep visible Seal Gold focus outlines.
- **Do** respect `prefers-reduced-motion`. The only motion is 0.15s colour transitions and smooth anchor scrolling.

### Don't:
- **Don't** add full-width rules, table borders, dashed lines or ruled lists.
- **Don't** add grids, tables, cards, side-by-side blocks, coloured bands or a menu bar.
- **Don't** use shadows, gradients, rounded corners or filled panels.
- **Don't** use Playfair Display for body text, or let heading sizes fall out of h1 > h2 > h3 > h4 order.
- **Don't** set text in Seal Gold or Soft Gilt, or use gold as a background fill.
- **Don't** use a browser-slanted italic; Inter's italic is not loaded.
- **Don't** add client-side JavaScript for visual effects.
