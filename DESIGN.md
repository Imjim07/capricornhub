# DESIGN.md — Capricorn Hub

Agent-readable design system. Read this before generating any UI.
Companion files: `NAVBAR.md`, `HOMEPAGE.md`, `MOBILE-MENU.md`.

**Brand:** Capricorn Hub — solo web development and brand design studio, Lagos.
**Structural reference:** an artist merch storefront (xo.store / theweeknd.com).
Layout behaviour, rhythm and restraint are adapted from it. Palette, typeface
and identity are Capricorn Hub's own. No brand asset from the reference is used.

---

## 1. Principles

1. **Two type sizes, no middle.** Display type is enormous. UI type is small and
   letterspaced. There is almost nothing in between. That tension is the
   identity — do not soften it by adding mid-sized headings.
2. **No chrome.** No cards, no panels, no borders around content, no shadows, no
   border-radius, no gradients, no dividers except deliberate hairlines.
3. **Emptiness is the layout.** Vertical space between blocks is very large —
   often more than the height of the content it separates.
4. **Two colours only.** Deep green and cream. All other colour in the page
   comes from photography and client work. Never add an accent.
5. **Nothing decorative moves.** Motion answers a user action, or it doesn't exist.

---

## 2. Colour

Roles, not swatches. Use the role name everywhere.

| Role | Value | Use |
|---|---|---|
| `--surface` | `#00423D` | Page background. The brand green, used at full strength. |
| `--surface-alt` | `#003A36` | Alternating bands. Difference must be barely perceptible. |
| `--surface-deep` | `#002B27` | Recessed blocks only — footer, modal scrim. Use sparingly. |
| `--surface-invert` | `#FAEFE6` | Cream sections. See §2.1. |
| `--ink` | `#FAEFE6` | All text and icons on green. |
| `--ink-muted` | `rgba(250,239,230,0.62)` | Legal, footer, secondary lines. |
| `--ink-invert` | `#00423D` | Text on cream sections. |
| `--hairline` | `rgba(250,239,230,0.24)` | 1px rules and outlined button borders. |

Cream on deep green measures roughly **10:1** contrast — comfortably above
WCAG AAA for body text. Do not tint the cream down to "soften" it; the muted
role at 62% is the floor.

Rules:
- Exactly one outlined element per view may carry a visible border.
- Never fill a button with solid cream on a green page. The primary CTA is an
  outline. The one exception is §2.1.
- No hover colour shifts on imagery. Hover changes the image, not a tint.
- No third colour. Not for success, not for error, not for a highlight. Use
  weight, position and the hairline to carry state.

### 2.1 The inversion

The reference is black-dominant, and that works because black is a void —
objects float in it. `#00423D` is a *surface*, not a void, so a page that is
green from top to bottom starts to feel like a single flat sheet rather than
depth. Fix it with inversion, not with a third colour:

- Green is the default. Cream is punctuation.
- **At most one cream section per page**, full-bleed, with `--ink-invert` text.
  Use it for the block that must be read carefully — a case study body, a
  pricing table, a long explanation.
- The inversion is the only permitted contrast event on a page. If you have used
  it once, every other section stays green.
- Never invert the navbar or the footer. They stay green throughout.

---

## 3. Typography

**Hanken Grotesk.** One family, full weight range. No second family anywhere —
no serif, no monospace, no display face.

### Display
- Uppercase, weight 900.
- Size: `clamp(3.5rem, 15vw, 16rem)`.
- Tracking: `-0.03em`. Hanken Grotesk carries generous sidebearings, so it needs
  tighter tracking than a condensed grotesque to reach the same density.
- Leading: `0.82`.
- Colour: `--ink`.
- One or two words at a time. Never a sentence.

> **Known deviation:** the reference's display face is a brutal, tightly-fitted
> grotesque. Hanken Grotesk at 900 is rounder and more open — set enormous, it
> reads *confident* rather than *aggressive*. That is the correct trade for a
> studio selling to business owners. Do not attempt to close the gap by
> importing a second display face; hold the single-family rule.

### UI / body
- Sentence case for anything longer than three words. Uppercase only for nav
  items, product/project labels, and button text.
- Size: `13px`–`15px` for labels; `16px` for real body copy.
- Tracking: `+0.1em` on uppercase labels, `0` on sentence-case body.
- Leading: `1.6` body, `1.2` labels.
- Measure: max `68ch`.

> **Deliberate divergence from the reference:** the source site is uppercase
> everywhere. That survives on two-word merch labels and collapses on a
> paragraph. Capricorn Hub pages carry real explanatory copy, so running text is
> sentence case. Uppercase is reserved for the places it earns its keep.

### Labels
- Uppercase, `12px`, tracking `+0.1em`, weight 500.
- No eyebrow labels above headings.

---

## 4. Spacing & layout

- Base unit `8px`. Scale: 8 / 16 / 24 / 40 / 64 / 96 / 160 / 240.
- Page gutters: `40px` desktop, `20px` mobile.
- No centred fixed-width container. Content runs close to the full viewport.
- Section rhythm: `160px`–`240px` between major blocks desktop, `96px` mobile.
- Work grid: 3 columns desktop, 2 tablet, 1 mobile. Column gap `40px`,
  row gap `96px`. Row gap is deliberately much larger than column gap.
- Grid cells have **no background, no border, no padding box**.

---

## 5. Imagery

This is where the recolour bites hardest and needs a standing rule.

The reference floats cutout product photography on black, which works because
almost anything reads cleanly against a void. **Screenshots of websites do not
float on green** — a browser chrome or a white UI screenshot dropped on
`#00423D` looks pasted on, not composed.

So:
- Project imagery sits inside a **full-bleed or column-width crop**, never a
  cutout. Let the image be a rectangle and own its edges.
- No border, no radius, no shadow on the image. The crop edge is the boundary.
- If a screenshot's own background is white, do not mask it — crop into the
  interface so the white becomes a deliberate field rather than an accidental
  halo.
- Do not apply a green duotone or overlay to client work. Show it accurately.

---

## 6. Components

### Outlined button (primary CTA)
```
border: 1px solid var(--hairline);
background: transparent;
color: var(--ink);
padding: 14px 32px;
border-radius: 0;
text-transform: uppercase;
letter-spacing: 0.1em;
font-size: 13px;
font-weight: 500;
```
Hover: border to `rgba(250,239,230,0.6)`. No fill, no lift, no scale.
On a cream section, swap to `--ink-invert` text and a green hairline.

### Select / input row
Full-width row, label left, chevron right, `1px` bottom hairline. No box, no
background, no radius. Focus raises the hairline to full `--ink`.

### Work item
Image (per §5), then beneath it: project name uppercase `12px` tracking `+0.1em`,
then a one-line descriptor in `--ink-muted` sentence case. Left-aligned, not
centred — centred labels belong to a product grid, not a case-study index.

### Footer
- Background `--surface-deep`.
- Left: single row of small links, `24px` spacing, no pipes or dots.
- Right: social icons, `20px` glyphs, aligned to the links' baseline.
- No columns, no newsletter block, no large logo.

---

## 7. Do not

- Do not add a third colour, ever.
- Do not add rounded corners, shadows, or gradients.
- Do not put work inside cards or tiles.
- Do not use uppercase for running text.
- Do not add eyebrow labels above headings.
- Do not add `→` to link or button text.
- Do not invert more than one section per page.
- Do not fade-and-slide-up every section on scroll.
- Do not compress the vertical whitespace to fit more above the fold.
- Do not introduce a mid-sized heading tier between display and UI type.

---

## 8. Sanctioned exceptions

Things that knowingly break a rule above. Nothing belongs here unless it was
decided deliberately — if you are about to add a row, raise it first.

| Where | Breaks | Why |
|---|---|---|
| Pricing tier panels | §1.2 "no cards", §7 "no cards or tiles" | The three tiers sit on filled `--surface` panels inside the cream section, for legibility. Kept minimal: square corners, no shadow, no gradient, no border. Text inside flips to `--ink`. |
| Pricing tier name | §3 labels are `12px` / `+0.1em` | Set at `11px` / `+0.08em` per the product-grid spec. |
| `NodeDivider` (mobile only) | §1.5 "nothing decorative moves", §7 "no third colour" | The logo motif, kept as the page's only decorative motion. The desktop spine was removed. |
| Work screenshots | §5 "screenshots of websites do not float on green" | The three case-study images keep their full browser chrome — tab bar, address bar, window controls. Chosen deliberately: the frame reads as "this is a live site". Crop the top ~11% at the CDN to reverse. |
| Scroll reveals | §1.5 "nothing decorative moves", §7 "do not fade-and-slide-up every section on scroll" | Sections fade and rise 12px once as they enter view (`Reveal`, built on react-intersection-observer). Kept restrained: 600ms, fires once, never on the hero, and removed entirely under `prefers-reduced-motion`. |
| Navbar wordmark | §7 "do not add a third colour" (as drawn) | `public/logo.png` is green with an amber "hub" and is invisible on `--surface`. It is CSS-masked and filled with `--ink`, so the drawn letterforms survive but the mark becomes single colour. A cream two-tone asset would remove the need. |
