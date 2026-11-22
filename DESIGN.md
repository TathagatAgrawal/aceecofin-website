---
name: Ace Ecofin Advisors
description: Bookkeeping & International Taxation Support for Accounting Firms
colors:
  logo-blue: "#24549A"
  logo-blue-deep: "#1D4580"
  ink-text: "#1C2A42"
  muted-slate: "#566278"
  logo-orange: "#E08A2E"
  orange-deep: "#A85A12"
  orange-soft: "#F0C08A"
  blue-white: "#F8FAFD"
  selection-peach: "#FBE3C8"
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
  button-primary:
    backgroundColor: "{colors.logo-blue}"
    textColor: "#FFFFFF"
    typography: "{typography.subhead}"
    rounded: "{rounded.none}"
    padding: "12px 30px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.logo-blue-deep}"
    textColor: "#FFFFFF"
  link-button:
    backgroundColor: "transparent"
    textColor: "{colors.logo-blue}"
    rounded: "{rounded.none}"
    padding: "10px 26px"
    height: "46px"
  link-button-hover:
    backgroundColor: "{colors.logo-blue}"
    textColor: "#FFFFFF"
  section-heading:
    textColor: "{colors.logo-blue}"
    typography: "{typography.headline}"
  tagline:
    textColor: "{colors.ink-text}"
    typography: "{typography.lead}"
  list-group-title:
    textColor: "{colors.logo-blue}"
    typography: "{typography.subhead}"
  contact-value:
    textColor: "{colors.logo-blue}"
    typography: "{typography.title}"
---

# Design System: Ace Ecofin Advisors

## Overview

**Creative North Star: "The Bound Firm Profile"**

The site is the firm profile, typeset rather than decorated. It is a single centred column on warm a near-white page tinted with the logo's blue. Serif headings in the logo's cobalt blue sit above blue-black sans-serif text, and four small marks in the logo's amber orange are the only ornament: a rule under the firm name and a short bar above each section heading. White space does the rest of the separating. Authority comes from good proportions and exact type, not from structure drawn on the page.

The page is easy to read first. Body text is 17px with a 1.75 line height, lines run about 70 characters, and sections are 96px apart. Elements feel refined and restrained, with square edges and no shadows, and interaction is shown only by colour. Every fact appears once, in sentence case. Orange stays rare: it marks structure (the four marks and the list dashes) and never fills an area or carries text. A single filled blue button under the tagline jumps to Contact Us.

**Key Characteristics:**
- One centred column at every width, with no grids, cards, tables, bands or menu bar
- Colours taken from the logo: cobalt blue for headings, links and the button, amber orange for marks
- Playfair Display headings over Inter text, with lining numerals in headings
- No full-width lines: space separates sections, and a short orange bar opens each one
- Sentence case everywhere except one-word labels
- Flat throughout, with no shadows, gradients or rounded containers

## Colors

The palette is the logo's: cobalt blue and amber orange on white. Orange is too light to read as text (2.6:1), so it only draws marks, and a deeper orange handles hover and focus.

### Primary
- **Logo Blue** (`logo-blue`): headings, the firm name, list group titles, the software label, links, the Contact Us button and the 404 outline button (7.2:1 on the page). It is the voice of the page.
- **Logo Blue Deep** (`logo-blue-deep`): the Contact Us button on hover.

### Secondary
- **Logo Orange** (`logo-orange`): the 56×2px rule under the firm name, the 36×2px bar above each section heading, and the list dashes. Marks only, never text.
- **Orange Deep** (`orange-deep`): link hover and the focus outline (4.9:1 on the page).
- **Orange Soft** (`orange-soft`): link underlines only. Decorative; it never carries text.

### Neutral
- **Ink Text** (`ink-text`): running text, the tagline and the India desk intro (13.8:1), and the skip link background.
- **Muted Slate** (`muted-slate`): the contact label and the footer only (5.9:1).
- **Blue White** (`blue-white`): the only background, also used as `theme-color`. White with a trace of the logo's blue.
- **Selection Peach** (`selection-peach`): text selection highlight only.

### Named Rules
**The Logo Palette Rule.** Every colour on the page comes from the logo's blue and orange, or a lighter or deeper step of them. No third hue.

**The Orange Is for Marks Rule.** Logo Orange draws the four marks and the list dashes. It never appears as text, a fill or a background; use Orange Deep where orange must be read.

**The One Ground Rule.** The page is Blue White from top to bottom. No section gets a coloured band or panel.

## Typography

**Display Font:** Playfair Display (with Georgia, Times New Roman)
**Body Font:** Inter (with system-ui, -apple-system, Segoe UI)

**Character:** A high-contrast editorial serif gives the firm a printed, established voice, and Inter keeps the dense service lists easy to scan. The serif appears only in headings and in the contact email.

### Hierarchy
- **Display** (600, clamp 40–60px, 1.08): the firm name only, centred, followed by a 56×2px orange rule.
- **Lead** (400, 19px, 1.55; 17px under 480px): the tagline, centred, in sentence case, balanced across lines and at most 34 characters wide.
- **Headline** (600, clamp 30–38px, 1.15): section headings (About Us, Services Offered, Contact Us), each below a 36×2px orange bar, with 32px below.
- **Title** (600, clamp 22–25px, 1.3): service names. The same serif at 22px (20px on phones) sets the contact email.
- **Body** (400, 17px, 1.75): paragraphs. List items use the same size at a 1.6 line height. The India desk intro is upright at 18px.
- **Subhead** (600, 17px, 1.5): list group titles such as "For NRI clients", in Logo Blue and sentence case.
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

**The Space, Not Lines Rule.** No full-width rules, table borders or dashed lines. If two things need separating, add space. The only drawn marks are the orange rule under the firm name, the orange bar above each section heading, and the orange list dashes.

## Shapes

Corners are square everywhere (0px). The only rounding is the 2px on focus outlines. The only drawn forms are the 56×2px orange rule under the firm name, the 36×2px orange bar above section headings, and the 12×2px orange dashes used as list bullets. The hexagonal logo mark is the only non-rectangular shape.

## Components

### Buttons
Refined and restrained, with square corners (0px).
- **Primary (Contact Us):** the one filled button, centred 32px under the tagline. It links to the Contact Us section and uses that section's heading as its label. Logo Blue fill, white 16px / 600 Inter in sentence case, 12px × 30px padding, at least 48px tall. On hover it deepens to Logo Blue Deep over 0.15s.
- **Outline (404 page):** 1px Logo Blue outline, Logo Blue 14px / 600 / 0.1em uppercase text, 10px × 26px padding, at least 46px tall. On hover it fills with Logo Blue and the text turns white.
- **Focus:** every button and link shows a 2px Orange Deep outline at a 4px offset.

### Links
- Logo Blue text with a 1px Orange Soft underline offset by 4px. On hover, both text and underline turn Orange Deep (0.15s).

### Section heading
- A 36×2px Logo Orange bar, 20px of space, then the Headline serif, with 32px below it before the content. This bar is the only section marker.

### Service list
- Title serif service name, an optional upright 18px intro in Ink Text, then Logo Blue sentence-case subheads over orange-dash lists. The software line sits 24px below the list in body size, with a bold Logo Blue label followed by items separated by middle dots.

### Contact details
- A small uppercase Muted Slate label above a 22px serif value (20px on phones). The email address is the page's main call to action. The Contact Us button at the top only leads here; the address itself stays a plain underlined link.

### Navigation
- There is no menu. The centred logo mark links home, the Contact Us button jumps to the contact section, and a skip link (Ink Text fill, white text) appears on focus.

## Do's and Don'ts

### Do:
- **Do** keep every section inside the 620px column, separated by 96px (64px on phones) of space.
- **Do** open each new section with the 36×2px Logo Orange bar above a Playfair Display h2.
- **Do** take every colour from the logo's blue and orange.
- **Do** set labels, titles and the tagline in sentence case; keep uppercase for one-word labels.
- **Do** show each fact once, in the profile's own words.
- **Do** keep text contrast at 4.5:1 or above on Blue White, and keep visible Orange Deep focus outlines.
- **Do** respect `prefers-reduced-motion`. The only motion is 0.15s colour transitions and smooth anchor scrolling.

### Don't:
- **Don't** add full-width rules, table borders, dashed lines or ruled lists.
- **Don't** add grids, tables, cards, side-by-side blocks, coloured bands or a menu bar.
- **Don't** use shadows, gradients, rounded corners or filled panels.
- **Don't** use Playfair Display for body text, or let heading sizes fall out of h1 > h2 > h3 > h4 order.
- **Don't** set text in Logo Orange or Orange Soft, or use orange as a background fill.
- **Don't** add a second filled button; Contact Us is the only one.
- **Don't** use a browser-slanted italic; Inter's italic is not loaded.
- **Don't** add client-side JavaScript for visual effects.
