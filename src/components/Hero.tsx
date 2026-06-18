export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      backgroundColor: "#faefe6",
      display: "flex",
      alignItems: "center",
      padding: "0 2.5rem",
      paddingTop: "6rem",
    }}>
      <div style={{ maxWidth: "800px" }}>
        <p style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#00423d",
          marginBottom: "1.5rem",
          opacity: 0.7,
        }}>
          Lagos, Nigeria — Digital Studio
        </p>

        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#1a1a1a",
          marginBottom: "2rem",
        }}>
          We build digital products for ambitious brands.
        </h1>

        <p style={{
          fontSize: "1.1rem",
          fontWeight: 400,
          lineHeight: 1.7,
          color: "#1a1a1a",
          opacity: 0.6,
          maxWidth: "520px",
          marginBottom: "3rem",
        }}>
          Web platforms, brand identities, and digital assets — crafted with precision for clients who mean business.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#work" style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#faefe6",
            backgroundColor: "#00423d",
            padding: "0.85rem 2rem",
            textDecoration: "none",
            borderRadius: "4px",
          }}>
            See Our Work
          </a>
          <a href="#contact" style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "#00423d",
            backgroundColor: "transparent",
            padding: "0.85rem 2rem",
            textDecoration: "none",
            borderRadius: "4px",
            border: "1px solid #00423d",
          }}>
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}