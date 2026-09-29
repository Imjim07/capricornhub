import Link from "next/link";
import { caseStudies } from "@/data/items";

// DESIGN.md §7 — work is never in cards or tiles. §5 — imagery is a
// column-width crop that owns its edges: no border, no radius, no shadow, and
// no green overlay on client work. §6 — name in uppercase label, then a
// one-line descriptor in --ink-muted, left-aligned.

export default function Work() {
  return (
    <section id="work" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Work
      </h2>

      <div className="work-grid">
        {caseStudies.map((p) => (
          <Link
            key={p.slug}
            href={"/" + p.slug}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div className="media" style={{ height: "260px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"https://api.microlink.io?url=" + p.previewUrl + "&screenshot=true&meta=false&embed=screenshot.url"}
                alt={p.title}
                loading="lazy"
              />
            </div>
            <p className="label" style={{ marginTop: "var(--s3)" }}>
              {p.title}
            </p>
            <p className="body-copy muted" style={{ marginTop: "var(--s1)" }}>
              {p.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
