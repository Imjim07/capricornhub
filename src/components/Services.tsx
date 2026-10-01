import Link from "next/link";
import { services } from "@/data/items";
import ZoomableImage from "@/components/ZoomableImage";
import Reveal from "@/components/Reveal";

// Two services, each led by an image. The tiers under each one live on its
// own page at /services/<slug>.
//
// media-edge puts a hairline round the image: the tote photograph's own
// background is --surface, so without an edge it has no visible boundary.

export default function Services() {
  return (
    <section id="services" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Services
      </h2>

      <div className="col-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 80}>
            <ZoomableImage
              src={service.image.src}
              alt={service.image.alt}
              className="media media-center media-edge"
              style={{ aspectRatio: "1 / 1", maxWidth: "360px" }}
            />

            <Link
              href={"/services/" + service.slug}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}
