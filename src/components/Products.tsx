const forSale = [
  {
    name: "Aurethium Template",
    type: "Website Template",
    price: "Contact for pricing",
    description: "Full crypto investment platform. Node.js backend, Supabase, Claude AI chatbot. White-label ready.",
  },
  {
    name: "Brand Identity Pack",
    type: "Logo + Visual System",
    price: "Contact for pricing",
    description: "Logo suite, color palette, typography system, and usage guidelines delivered as a complete brand kit.",
  },
  {
    name: "Custom Web Platform",
    type: "Bespoke Development",
    price: "From ₦150,000",
    description: "Fully custom website built to your brief. E-commerce, booking, dashboard, or marketing site.",
  },
];

export default function Products() {
  return (
    <section id="products" style={{
      backgroundColor: "#f0e8de",
      padding: "8rem 2.5rem",
    }}>
      <p style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00423d",
        opacity: 0.6,
        marginBottom: "1rem",
      }}>
        Products and Services
      </p>

      <h2 style={{
        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
        fontWeight: 800,
        color: "#1a1a1a",
        letterSpacing: "-0.02em",
        marginBottom: "4rem",
      }}>
        Ready when you are.
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
      }}>
        {forSale.map((item) => (
          <div key={item.name} style={{
            backgroundColor: "#faefe6",
            borderRadius: "8px",
            padding: "2.5rem",
            border: "1px solid rgba(0,66,61,0.1)",
          }}>
            <p style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#00423d",
              opacity: 0.6,
              marginBottom: "0.75rem",
            }}>
              {item.type}
            </p>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "0.75rem",
            }}>
              {item.name}
            </h3>
            <p style={{
              fontSize: "0.85rem",
              lineHeight: 1.7,
              color: "#1a1a1a",
              opacity: 0.6,
              marginBottom: "1.5rem",
            }}>
              {item.description}
            </p>
            <p style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#00423d",
            }}>
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}