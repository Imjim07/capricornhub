import Link from "next/link";
import { services } from "@/data/items";
import Reveal from "@/components/Reveal";

// Two services, each led by an image. The tiers under each one live on its
// own page at /services/<slug>.
//
// The image and the text are one link to that page; the image pops on hover
// inside its own box. media-edge puts a hairline round it, because the tote
// photograph's own background is --surface and would otherwise have no edge.

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Services
      </h2>

      <div className="col-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 80}>
            <Link
              href={"/services/" + service.slug}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                className="media media-center media-edge media-pop"
                style={{ aspectRatio: "1 / 1", maxWidth: "360px" }}
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
              className="btn-glass"
              style={{ marginTop: "var(--s3)" }}
            >
              See more
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
