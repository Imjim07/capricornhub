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

        <h1 className="display display-fit" style={{ marginBottom: "var(--s4)" }}>
          {service.title}
        </h1>

        <p className="body-copy muted" style={{ marginBottom: "var(--s8)" }}>
          {service.summary}
        </p>

        <div className="product-grid">
          {tiers.map((tier, i) => (
            <div key={tier.slug} className="tier-card">
              <span className="tier-card-id" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="tier-card-body">
                {/* Weight and position carry the recommendation (§2), so the
                    featured tier stays obvious without a third colour. */}
                <p
                  className="label"
                  style={{
                    fontWeight: 900,
                    marginBottom: "var(--s2)",
                    visibility: tier.featured ? "visible" : "hidden",
                  }}
                  aria-hidden={!tier.featured}
                >
                  Most Popular
                </p>

                <p className="tier-card-value">{tier.price.replace(/^from /, "")}</p>

                <p
                  className="label"
                  style={{
                    marginTop: "var(--s2)",
                    fontWeight: tier.featured ? 900 : 500,
                    opacity: 0.7,
                  }}
                >
                  {tier.title}
                </p>

                <div style={{ marginTop: "var(--s4)" }}>
                  <Link href={"/" + tier.slug} className="btn-glass">
                    See more
                  </Link>
                </div>
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
