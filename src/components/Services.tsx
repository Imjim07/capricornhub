const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Custom platforms built for performance. E-commerce, booking systems, dashboards, and marketing sites.",
  },
  {
    number: "02",
    title: "Brand Identity",
    description: "Logo systems, color palettes, and visual language that make your brand impossible to ignore.",
  },
  {
    number: "03",
    title: "Digital Products",
    description: "Ready-made websites and templates built to production standard. Buy, customize, and launch fast.",
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

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "3rem",
      }}>
        {services.map((s) => (
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
    </section>
  );
}