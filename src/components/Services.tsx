const webServices = [
  {
    number: "01",
    title: "Web Development",
    description: "Custom platforms built for performance. E-commerce, booking systems, dashboards, and marketing sites.",
  },
  {
    number: "02",
    title: "Graphic Design",
    description: "Flyers, social media graphics, and monthly design retainers for businesses with ongoing needs.",
  },
  {
    number: "03",
    title: "Digital Products",
    description: "Ready-made websites and templates built to production standard. Buy, customize, and launch fast.",
  },
];

const brandingTiers = [
  {
    name: "Logo",
    price: "from NGN 60,000",
    tagline: "The entry point.",
    items: [
      "2-3 initial concepts",
      "Primary logo + 1-2 lockup variations",
      "PNG, SVG and transparent formats",
      "2 revision rounds",
    ],
  },
  {
    name: "Brand Identity",
    price: "from NGN 150,000",
    tagline: "Everything a business needs to look consistent everywhere.",
    items: [
      "Everything in Logo, plus",
      "Full colour palette with hex codes",
      "Typography selection and pairing",
      "Logo system with mark and icon",
      "Concise brand sheet",
      "2 revision rounds",
    ],
    featured: true,
  },
  {
    name: "Full Brand System",
    price: "from NGN 300,000",
    tagline: "A complete, launch-ready brand.",
    items: [
      "Everything in Brand Identity, plus",
      "Full brand guidelines document",
      "Social media templates",
      "Business stationery",
      "Launch graphics",
      "Quoted per engagement",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      backgroundColor: "#00423d",
      padding: "8rem 2.5rem",
    }}>
      <p style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#faefe6",
        opacity: 0.5,
        marginBottom: "4rem",
      }}>
        What We Do
      </p>

      <div className="grid-3" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "3rem",
        marginBottom: "6rem",
      }}>
        {webServices.map((s) => (
          <div key={s.number} style={{
            borderTop: "1px solid rgba(250,239,230,0.2)",
            paddingTop: "2rem",
          }}>
            <p style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#faefe6",
              opacity: 0.4,
              marginBottom: "1rem",
            }}>
              {s.number}
            </p>
            <h3 style={{
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "#faefe6",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}>
              {s.title}
            </h3>
            <p style={{
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "#faefe6",
              opacity: 0.6,
            }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <p style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#faefe6",
        opacity: 0.5,
        marginBottom: "2rem",
      }}>
        Branding and Identity
      </p>

      <p style={{
        fontSize: "1rem",
        color: "#faefe6",
        opacity: 0.5,
        marginBottom: "3rem",
        fontStyle: "italic",
      }}>
        Visual identity that makes a business look as serious as it is.
      </p>

      <div className="grid-3" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
      }}>
        {brandingTiers.map((tier) => (
          <div key={tier.name} style={{
            backgroundColor: tier.featured ? "#faefe6" : "rgba(250,239,230,0.05)",
            border: tier.featured ? "none" : "1px solid rgba(250,239,230,0.15)",
            borderRadius: "8px",
            padding: "2.5rem",
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1rem",
            }}>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: 800,
                color: tier.featured ? "#00423d" : "#faefe6",
              }}>
                {tier.name}
              </h3>
              <span style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: tier.featured ? "#00423d" : "#faefe6",
                opacity: tier.featured ? 1 : 0.7,
              }}>
                {tier.price}
              </span>
            </div>

            <p style={{
              fontSize: "0.8rem",
              color: tier.featured ? "#00423d" : "#faefe6",
              opacity: 0.6,
              marginBottom: "1.5rem",
              fontStyle: "italic",
            }}>
              {tier.tagline}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {tier.items.map((item) => (
                <p key={item} style={{
                  fontSize: "0.82rem",
                  color: tier.featured ? "#1a1a1a" : "#faefe6",
                  opacity: tier.featured ? 0.8 : 0.6,
                  paddingLeft: "1rem",
                  borderLeft: tier.featured ? "2px solid #00423d" : "2px solid rgba(250,239,230,0.3)",
                }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}