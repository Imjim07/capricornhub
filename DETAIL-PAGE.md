# DETAIL-PAGE.md — Item detail view

Read `DESIGN.md` first. This file describes the view reached by tapping an item
in the grid — a product, a listing, a property, a service tier.

## The idea

One large image and a short right-hand column of facts. No tabs, no accordions,
no reviews, no related items, no trust badges. Everything the buyer needs is
visible at once, and the page ends.

The restraint is the sell. A page with nothing to hide doesn't need persuasion
furniture around it.

## Structure

```
┌──────────────────────────────────────────────────────────────────┐
│ [ navbar ]                                                       │
│                                                                  │
│                                                                  │
│    ┌─────────────────────┐        TITLE                          │
│    │                     │        ₦price                         │
│    │                     │        financing / terms line         │
│    │      main image     │                                       │
│    │                     │        –  1  +   [ PRIMARY ACTION ]   │
│    │                     │                                       │
│    │                     │        Description, 3–5 lines.        │
│    └─────────────────────┘                                       │
│                                    Availability line             │
│    [▪][▫]  thumbnails                                            │
│                                    Option select            ⌄    │
│                                    ──────────────────────────    │
│                                                                  │
│ [ footer ]                                                       │
└──────────────────────────────────────────────────────────────────┘
```

## Layout

| Property | Value |
|---|---|
| Columns | 55% / 45%, no gap element — the whitespace is the gap |
| Image column | full column width, 64px internal inset on all sides |
| Detail column | starts at roughly one third down the image, not at its top |
| Detail column inset | 0 left within its column — text aligns to the column edge |
| Detail column max width | 420px |
| Top padding | 120px below the navbar |
| Bottom padding | 160px before the footer |

The detail column's vertical offset is the single most important measurement
here. Top-aligning it to the image makes the page look like a template. The
drop is what makes it feel composed.

Below 900px: single column. Image first, full-bleed edge to edge, thumbnails
beneath it, then the detail stack with 40px page gutters.

## Detail stack — order and spec

Render in exactly this order. Do not reorder, do not add.

1. **Title** — uppercase, 15px, weight 600, tracking `+0.06em`, `--ink`.
2. **Price** — 15px, weight 600, `--ink`. 24px above.
3. **Terms line** — sentence case, 13px, `--ink-muted`. Payment plan, delivery
   terms, or engagement terms. 12px above. Omit if not applicable — do not
   substitute filler.
4. **Action row** — 40px above. Quantity stepper inline to the left of the
   primary action button, sharing a baseline.
5. **Description** — sentence case, 14px, leading 1.6, `--ink`, max 48ch. 40px
   above. Three to five lines. Facts only — material, spec, scope, what's
   included. No marketing adjectives.
6. **Availability line** — sentence case, 13px, `--ink-muted`. 24px above.
7. **Option select** — 32px above. Full-width row, current value left, chevron
   right, 1px bottom hairline. No box, no background, no radius.

## Components

### Quantity stepper

Plain glyphs: `– 1 +`. No boxes, no borders. 16px horizontal padding between
each. Font size 14px. Disabled state is `--ink-muted`, not hidden. Omit this
row entirely on non-quantity items (a service tier, a property).

### Primary action

The outlined button from DESIGN.md §6. Sits 24px right of the stepper. Label is
the literal action and keeps its name through the flow — "Add to cart" produces
"Added", "Request quote" produces "Quote requested".

### Thumbnail strip

- Below the main image, left-aligned to the image's inset edge, 40px above.
- 70px squares, 12px gap.
- Active thumbnail: `1px solid var(--ink)`. Inactive: no border at all.
- Click swaps the main image via a 200ms opacity crossfade. No slide.
- Two to five thumbnails. Beyond five, this strip stops working — use a
  vertical rail on the image's left instead.

### Option select — open state

Opens as a plain stacked list directly beneath the row, pushing content down.
Not a dropdown overlay, not a modal, not a native select on desktop. Each
option is a full-width row, 44px tall, 1px bottom hairline, left-aligned label.
Unavailable options render at `--ink-muted` with a strikethrough — present but
clearly out.

## Behaviour

- Page scrolls normally. Nothing is sticky. Not the image, not the detail
  column, not a mobile buy bar.
- Image zoom on click: full-screen overlay at `--surface`, image centred, ✕
  top-left. Fade in 220ms. No magnifier lens on hover, no pan-on-hover.
- Adding to cart does not open a drawer or navigate away. The cart glyph in the
  navbar increments and the button label changes to the past-tense confirmation
  for 2s. That is the whole feedback.
- Errors state what happened and what to do, in the interface's voice. Never
  "Oops!". Never a toast that disappears before it can be read.

## Motion

One user-triggered crossfade for image swaps, one fade for the zoom overlay.
That is the complete motion inventory for this page. No entrance animation on
load, no scroll reveal, no hover lift. Respect `prefers-reduced-motion` by
dropping both to instant.

## Do not

- Do not add breadcrumbs.
- Do not add a "you may also like" or "related items" section.
- Do not add reviews, star ratings, or a review count.
- Do not add tabs or accordions for description / shipping / returns — if the
  information matters it is in the stack, and if it doesn't it isn't on the page.
- Do not add trust badges, payment-logo rows, or security seals.
- Do not add a stock-level counter or urgency messaging.
- Do not add a wishlist or share control.
- Do not make the detail column sticky.
- Do not top-align the detail column to the image.
