import Link from "next/link";
import { caseStudies } from "@/data/items";
import ZoomableImage from "@/components/ZoomableImage";
import Reveal from "@/components/Reveal";

// DESIGN.md §7 — work is never in cards or tiles. §5 — imagery is a
// column-width crop that owns its edges: no border, no radius, no shadow, and
// no green overlay on client work. §6 — name in uppercase label, then a
// one-line descriptor in --ink-muted, left-aligned.
//
// The image opens a full-size zoom; the name and descriptor go to the case
// study. Both affordances, neither swallowing the other.

export default function Work() {
  return (
    <section id="work" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Work
      </h2>

      <div className="work-grid">
        {caseStudies.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            {/* 16:10 matches the screenshots, so the box never crops them —
                a fixed height cropped the sides once the grid went to one
                column on mobile. */}
            <ZoomableImage
              src={p.image.src}
              alt={p.image.alt}
              className="media"
              style={{ aspectRatio: "16 / 10" }}
            />

            <Link
              href={"/" + p.slug}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
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
