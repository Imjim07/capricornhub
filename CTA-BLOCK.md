# CTA-BLOCK.md — Closing call to action

Standalone spec. Describes the end-of-page conversion block.

> **As used on this site.** The block sits in the right-hand column of the
> Contact section, beside the form. Three parts of the spec are deliberately
> not used here, at the client's instruction: the price line (no figure is
> published), the secondary button, and the proof row. What remains is the
> grid substrate, the heading and one primary action.
>
> Tokens are mapped to the brand palette rather than used literally — see
> **Palette mapping** below — because DESIGN.md §1.4 allows two colours and
> `#0B0B0C` would be a third.

---

## The idea

A dark section with a faint technical grid running edge to edge, a short
two-line promise, the price stated plainly, two large pill actions of unequal
width, and three one-line proofs underneath.

Three things make it work, and all three are unusual:

1. **The price is on the button row.** Most agency CTAs hide it. Putting it
   directly above the action disqualifies the wrong visitor before they book a
   call, which is the entire point.
2. **The buttons are rows, not labels.** Each is far wider than its text, with
   the label pinned left and the icon pinned right. That gap is deliberate — it
   makes them read as destinations rather than controls.
3. **Proof is three fragments, not a paragraph.** Each answers one objection:
   extensibility, dependency, time.

---

## Tokens

| Role | Value | Use |
|---|---|---|
| `--bg` | `#0B0B0C` | Section background. |
| `--grid` | `rgba(255,255,255,0.045)` | Grid hairlines. Must be barely visible. |
| `--cell` | `rgba(255,255,255,0.06)` | Filled grid cells, unlit. |
| `--ink` | `#FFFFFF` | Heading, button labels, the price figure. |
| `--ink-muted` | `rgba(255,255,255,0.58)` | Supporting line, proof row. |
| `--action-primary` | `#FFFFFF` | Primary button fill. |
| `--on-primary` | `#0B0B0C` | Primary button text. |
| `--action-secondary` | `#2A2A2C` | Secondary button fill. |

### Palette mapping

The block inherits the section it sits in rather than painting its own
background, so the grid falls directly on `--surface`.

| Spec token | Here |
|---|---|
| `--bg` | inherited `--surface` |
| `--grid` | `--ink` at 4.5% |
| `--cell` | `--ink` at 6% and 9%, two weights in place of the blue-violet and green tiles |
| `--ink` / `--ink-muted` | the same roles from DESIGN.md §2 |
| `--action-primary` / `--on-primary` | `--ink` fill, `--surface` text |
| `--action-secondary` | unused; there is no secondary button here |

---

## Grid substrate

The grid is the identity of this block. Get it wrong and the section is a
generic dark CTA.

| Property | Value |
|---|---|
| Cell size | `37px` square |
| Lines | `1px` `--grid` |
| Extent | full-bleed, edge to edge, behind everything |
| Position | `absolute`, `inset: 0`, `pointer-events: none`, `z-index: 0` |

Implement as a CSS background, not as DOM elements:
```css
background-image:
  linear-gradient(to right, var(--grid) 1px, transparent 1px),
  linear-gradient(to bottom, var(--grid) 1px, transparent 1px);
background-size: 37px 37px;
```

**Filled cells.** A small number of cells carry a textured tile — a soft noise
gradient, one in blue-violet, one in green. Rules:
- Four to six scattered tiles maximum, all in the section's outer margins,
  never within `80px` of text.
- One contiguous run of eight to twelve filled cells along the **bottom edge**,
  starting from the left. This reads as a progress bar and is the only element
  in the block that implies motion.
- Tiles are `37px` — exactly one cell. A tile that spans cells breaks the
  illusion that the grid is a substrate rather than a background image.
- Tiles do not animate. The bottom run may fill once on scroll-into-view over
  `1.2s` with a `60ms` stagger. Nothing else moves. Disable under
  `prefers-reduced-motion`.

---

## Content block

| Property | Value |
|---|---|
| Max width | `816px` |
| Alignment | horizontally centred in the section |
| Section padding | `120px 0 160px` |
| `z-index` | `1`, above the grid |

### Heading
- `44px`, weight 500, `--ink`, leading `1.14`, tracking `-0.02em`.
- Two lines, broken manually. Left-aligned.
- Sentence case with a full stop. The full stop matters — it makes the line a
  statement rather than a slogan.
- Seven words or fewer. If it needs more, the offer isn't clear enough yet.

### Price line
- Sits `16px` above the button row, **right-aligned to the button row's right
  edge** — not to the heading, not centred.
- `13px`. Supporting clause in `--ink-muted`, the price figure in `--ink`,
  weight 600, same size.
- Pattern: `<three-verb summary>. Starting at <figure>.`
- One line. If it wraps, cut words, not the price.

### Button row
- `40px` below the heading. Flex row, `8px` gap.
- **Unequal widths are deliberate.** Primary roughly `478px`, secondary roughly
  `332px` — about 59/41. Do not equalise them; the imbalance is what signals
  which action is intended.
- Both: height `65px`, `border-radius: 999px`, no border, no shadow.

**Primary**
```
background: var(--action-primary);
color: var(--on-primary);
padding: 0 28px;
display: flex; align-items: center; justify-content: space-between;
font-size: 17px; font-weight: 500;
```
Label left, arrow glyph right, pushed apart by `space-between`.

> This reverses the "no `→` on buttons" rule in `DESIGN.md`, and the reversal is
> justified: there, the arrow would be glued to the label as decoration. Here it
> is a separate element anchored to the opposite edge, so it functions as a
> direction marker for a wide row. The rule is about arrows used as ornament,
> not arrows used as structure.

**Secondary**
```
background: var(--action-secondary);
color: var(--ink);
padding: 0 28px;
display: flex; align-items: center;
font-size: 17px; font-weight: 500;
```
Label left, **no icon**. The absent arrow is how the hierarchy reads at a glance.

Hover, both: brightness `0.92` on the fill. No lift, no scale, no arrow slide.

### Proof row
- `40px` below the buttons. Flex row, `32px` gap, left-aligned.
- Exactly three items. Each: `14px` icon, `8px` gap, `12px` label in
  `--ink-muted`.
- Each answers a different objection. Do not use three variations of the same
  reassurance.
- Icons are line glyphs at `1.5px` stroke. No filled icons, no emoji, no colour.

---

## Responsive

- Below `820px`: content block takes `24px` page gutters.
- Heading drops to `clamp(2rem, 8vw, 2.75rem)`, keeps its two-line break.
- Buttons stack full-width, primary first, `10px` gap. **Keep the
  label-left/arrow-right split** — it works better at full width than it does on
  desktop.
- Price line moves to **left-aligned** above the buttons, since there is no
  longer a right edge to align to.
- Proof row stacks to three rows, `12px` gap. Do not drop items to save space —
  they are the reason the visitor believes the heading.
- Grid cell size drops to `28px`; bottom run shortens to six cells.

---

## Accessibility

- `--ink-muted` at `12px` on `--bg` is near the legibility floor. If the proof
  row is tested and fails, raise the opacity rather than the size — the size is
  structural.
- The arrow is decorative: `aria-hidden`, with the button's name carried by its
  label.
- Grid and tiles are presentational: `aria-hidden`, `pointer-events: none`.
- Focus: `2px` `--ink` outline, `3px` offset. The pill radius must not clip it.

---

## Do not

- Do not centre the heading or the buttons.
- Do not equalise the two button widths.
- Do not add an arrow to the secondary button.
- Do not add a third button or a bare text link beside them.
- Do not animate the tiles on a loop.
- Do not let a tile span more than one grid cell.
- Do not add a form, an email field, or a calendar embed inline — both buttons
  go somewhere.
- Do not replace the three proofs with a sentence.
- Do not remove the price to "reduce friction". See below.

---

## The price is the hard part

Everything above is layout and takes an afternoon. The decision this block
actually forces is whether you will publish a number.

The pattern only works if the figure is one you hold. A visitor who reads
"starting at X", books a call, and is quoted 2X does not experience a
negotiation — they experience a bait and switch, and they tell people. So the
published figure has to be your real floor, including the jobs you take on a
slow month.

Before using this block, reconcile three numbers: your stated entry tier, the
lowest figure you have actually invoiced, and the figure you would put on this
page. If those three don't agree, the CTA isn't the problem to solve first —
the pricing is, and shipping a confident price block over an unsettled floor
will cost you more trust than hiding the price ever did.

Currency note: the reference figure is in USD for a market that sustains it. If
this block is used for a different market, the figure must be that market's real
number, not a conversion. A converted price is almost always either implausible
or insulting.
