# MOBILE-MENU.md — Fullscreen hamburger menu

Read `DESIGN.md` first. This file only describes the opened mobile menu.

---

## The idea

The menu is a full-viewport `--surface` screen divided into a small number of very
tall horizontal bands — one per link — with small, quiet, letterspaced type
centred in each. The drama comes entirely from the size of the empty bands
against the smallness of the words.

Three to four items maximum. This pattern breaks completely with six.

---

## Structure

```
┌────────────────────────────┐
│ ✕                          │  ← close, top-left
├────────────────────────────┤
│                            │
│           HOME             │  band 1  (--surface)
│                            │
├────────────────────────────┤
│                            │
│           TOUR             │  band 2  (--surface-alt)
│                            │
├────────────────────────────┤
│                            │
│          STORE             │  band 3  (--surface)
│                            │
├────────────────────────────┤
│      ⬡ ⬡ ⬡ ⬡ ⬡ ⬡          │  ← social row, centred
└────────────────────────────┘
```

---

## Specification

| Property | Value |
|---|---|
| Overlay | `position: fixed`, inset 0, `100dvh`, `z-index: 100` |
| Background | `--surface` |
| Bands | flex column, each `flex: 1` — bands divide the available height equally |
| Band alternation | odd bands `--surface`, even bands `--surface-alt` |
| Band separator | **none** — no borders, no rules. The tonal shift alone divides them |
| Label alignment | centred horizontally **and** vertically within its band |
| Label size | `14px` |
| Label case | uppercase |
| Label tracking | `+0.18em` — noticeably wider than the navbar's `+0.1em` |
| Label weight | 300 |
| Label colour | `--ink` |
| Close glyph | `✕`, `20px`, top-left, `20px` from both edges, hit area `44×44px` |
| Social row | centred, `20px` glyphs, `24px` gap, `40px` above the safe-area bottom |

Use `100dvh`, not `100vh`, or mobile browser chrome will crop the last band.

---

## Behaviour

- **Open:** overlay fades `0 → 1` over `220ms`, `ease-out`. The bands do **not**
  slide, stagger, or scale. One fade, everything at once.
- **Close:** same fade, `180ms`.
- **Trigger:** the hamburger glyph in the navbar becomes the `✕` in place —
  same position, cross-fade between glyphs.
- **Tap target:** the whole band is the link, not just the text. This is the
  main reason the bands are so tall.
- **Tap feedback:** band background lifts to `rgba(255,255,255,0.04)` on
  `:active` only. No hover state — this is a touch surface.
- **Scroll lock:** set `overflow: hidden` on the body while open.
- **Escape / back:** closes the menu.
- **Focus trap:** focus moves to the close button on open, is trapped within the
  overlay, and returns to the hamburger on close.
- **Reduced motion:** no fade — the overlay appears instantly.

---

## Accessibility

- Overlay is `role="dialog"` `aria-modal="true"`.
- Hamburger button carries `aria-expanded` and `aria-controls`.
- The close button has an accessible label — the `✕` glyph alone is not a name.
- Bands must remain tappable at `44px` minimum even if the item count grows.

---

## Do not

- Do not add a logo inside the menu.
- Do not add dividing lines between bands.
- Do not stagger the links in one at a time.
- Do not slide the panel in from the side — it fades in place.
- Do not add a search field, a language switcher, or a CTA button inside it.
- Do not exceed four items. If you need more, this is the wrong pattern.
- Do not use `100vh`.
