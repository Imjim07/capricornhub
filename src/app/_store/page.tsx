export default function StorePage() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#faefe6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "1.5rem",
      padding: "2rem",
    }}>
      <p style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#00423d",
        opacity: 0.6,
      }}>
        Coming Soon
      </p>
      <h1 style={{
        fontSize: "clamp(2rem, 5vw, 4rem)",
        fontWeight: 800,
        color: "#1a1a1a",
        letterSpacing: "-0.02em",
        textAlign: "center",
      }}>
        The Capricorn Store
      </h1>
      <p style={{
        fontSize: "0.95rem",
        color: "#1a1a1a",
        opacity: 0.5,
        maxWidth: "400px",
        textAlign: "center",
        lineHeight: 1.7,
      }}>
        Laptops, workstation gear, frames, and accessories. Crypto payments accepted. Coming soon.
      </p>
      <a href="/" style={{
        marginTop: "1rem",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "#faefe6",
        backgroundColor: "#00423d",
        padding: "0.75rem 2rem",
        textDecoration: "none",
        borderRadius: "4px",
      }}>
        Back to Studio
      </a>
    </main>
  );
}