"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

// CTA-BLOCK.md, in the right-hand column of the Contact section.
//
// Three parts of the spec are deliberately absent, per instruction: the price
// line, the secondary button and the proof row. What is left is the grid
// substrate, the two-line heading and one primary action.
//
// Tokens map to the brand palette rather than the spec's literal hexes —
// #0B0B0C would be a third colour under DESIGN.md §1.4. The block paints no
// background of its own, so the grid falls directly on --surface.

// Scattered tiles, in cell coordinates [column, row from top]. Kept to the
// outer margins and clear of the text, per the spec.
// Confined to the top two rows. The block's top padding is four cells plus a
// little, so the lowest tile clears the heading by just over the 80px the
// spec requires. Lower rows would sit inside the text.
const SCATTER: [number, number, "a" | "b"][] = [
  [0, 0, "a"],
  [3, 1, "b"],
  [7, 0, "b"],
  [11, 1, "a"],
];

// The contiguous run along the bottom edge, starting from the left. This is
// the only thing in the block that implies motion.
const RUN_LENGTH = 10;

export default function CtaBlock() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-60px 0px" });

  return (
    <div className="cta-block" ref={ref}>
      <div className="cta-grid" aria-hidden="true" />

      <div className="cta-tiles" aria-hidden="true">
        {SCATTER.map(([c, r, weight]) => (
          <span
            key={"s" + c + "-" + r}
            className={"cta-tile is-" + weight}
            style={{ left: "calc(var(--cta-cell) * " + c + ")", top: "calc(var(--cta-cell) * " + r + ")" }}
          />
        ))}

        {Array.from({ length: RUN_LENGTH }, (_, i) => (
          <span
            key={"r" + i}
            className={"cta-tile is-run" + (inView ? " is-lit" : "")}
            style={{
              left: "calc(var(--cta-cell) * " + i + ")",
              bottom: 0,
              transitionDelay: i * 60 + "ms",
            }}
          />
        ))}
      </div>

      <div className="cta-content">
        <h3 className="cta-heading">
          Your website is
          <br />
          in good hands.
        </h3>

        <Link href="/start-a-project" className="cta-primary">
          <span>Start a Project</span>
          {/* Anchored to the opposite edge, so it is a direction marker for a
              wide row rather than ornament glued to the label — the reversal
              CTA-BLOCK.md argues for against DESIGN.md §7. */}
          <span aria-hidden="true" className="cta-arrow">
            &#8594;
          </span>
        </Link>
      </div>
    </div>
  );
}
