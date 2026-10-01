import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService, tiersFor } from "@/data/items";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Capricorn Hub" };
  return {
    title: service.title + " — Capricorn Hub",
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const tiers = tiersFor(service);

  return (
    <main>

      <section className="section" style={{ paddingTop: "var(--s8)" }}>
        {/* Square, matching the cards on the homepage: the code screenshot is
            ~1:1 and a taller box cropped its line numbers and line ends. */}
        {/* No hover pop and no zoom here: this is the page's own hero, not a
            link, so motion would imply an interaction that does not exist. */}
        <div
          className="media media-center media-edge"
          style={{ aspectRatio: "1 / 1", maxWidth: "480px", marginBottom: "var(--s6)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image.src} alt={service.image.alt} />
        </div>

        <h1 className="display" style={{ marginBottom: "var(--s4)" }}>
          {service.title}
        </h1>

        <p className="body-copy muted" style={{ marginBottom: "var(--s8)" }}>
          {service.summary}
        </p>

        <div className="product-grid">
          {tiers.map((tier) => (
            <div key={tier.slug} className="product-card">
              {/* Weight and position carry the recommendation (DESIGN.md §2). */}
              <p
                className="label"
                style={{
                  marginBottom: "var(--s2)",
                  visibility: tier.featured ? "visible" : "hidden",
                }}
                aria-hidden={!tier.featured}
              >
                Most Popular
              </p>

              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: tier.featured ? 900 : 500,
                  lineHeight: 1.2,
                }}
              >
                {tier.title}
              </p>

              <p style={{ marginTop: "16px", fontSize: "16px", lineHeight: 1.6 }}>
                {tier.price}
              </p>

              <div style={{ marginTop: "var(--s3)" }}>
                <Link href={"/" + tier.slug} className="btn-glass">
                  See more
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="label muted" style={{ marginTop: "var(--s5)" }}>
          Photograph: {service.image.credit}
        </p>
      </section>
    </main>
  );
}
