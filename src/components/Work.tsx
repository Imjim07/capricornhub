import Link from "next/link";
import { caseStudies } from "@/data/items";
import Reveal from "@/components/Reveal";

// DESIGN.md §7 — work is never in cards or tiles. §5 — imagery is a
// column-width crop that owns its edges: no border, no radius, no shadow, and
// no green overlay on client work. §6 — name in uppercase label, then a
// one-line descriptor in --ink-muted, left-aligned.
//
// The whole cell is one link to the case study. The image pops on hover
// inside its own box — motion answering a user action, which §1.5 allows.

export default function Work() {
  return (
    <section id="work" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Work
      </h2>

      <div className="work-grid">
        {caseStudies.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Link
              href={"/" + p.slug}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              {/* 16:10 matches the screenshots, so the box never crops them —
                  a fixed height cropped the sides at one column on mobile. */}
              <div className="media media-pop" style={{ aspectRatio: "16 / 10" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image.src} alt={p.image.alt} loading="lazy" />
              </div>

              <p className="label" style={{ marginTop: "var(--s3)" }}>
                {p.title}
              </p>
              <p className="body-copy muted" style={{ marginTop: "var(--s1)" }}>
                {p.summary}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
