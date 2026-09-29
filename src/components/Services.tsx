import Link from "next/link";
import { services } from "@/data/items";

// Two services, each led by a photograph. The tiers that sit under each one
// live on its own page at /services/<slug> — see DETAIL-PAGE.md.
// DESIGN.md §5 — the image is a crop that owns its edges: no border, no
// radius, no shadow, no overlay.

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Services
      </h2>

      <div className="col-2">
        {services.map((service) => (
          <div key={service.slug}>
            <Link
              href={"/services/" + service.slug}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              {/* Both service photographs are portrait, so the box is too.
                  A landscape crop cut the tote bag and the tile stack in half. */}
              <div
                className="media media-center"
                style={{ aspectRatio: "4 / 5", maxWidth: "360px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={service.image.src} alt={service.image.alt} loading="lazy" />
              </div>

              <p className="label" style={{ marginTop: "var(--s3)" }}>
                {service.title}
              </p>

              <p className="body-copy muted" style={{ marginTop: "var(--s2)" }}>
                {service.summary}
              </p>
            </Link>

            <Link
              href={"/services/" + service.slug}
              className="text-link"
              style={{ marginTop: "var(--s3)" }}
            >
              See more
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
