export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#1a1a1a",
      padding: "4rem 2.5rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: "2rem",
    }}>
      <div>
        <p style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          color: "#faefe6",
          marginBottom: "0.5rem",
        }}>
          Capricorn Hub
        </p>
        <p style={{
          fontSize: "0.8rem",
          color: "#faefe6",
          opacity: 0.4,
          lineHeight: 1.7,
        }}>
          Lagos, Nigeria
          <br />
          capricornhubmanagement@gmail.com
        </p>
      </div>

      <div style={{ display: "flex", gap: "2rem" }}>
        <a href="#work" style={{ fontSize: "0.8rem", color: "#faefe6", opacity: 0.4, textDecoration: "none" }}>Work</a>
        <a href="#services" style={{ fontSize: "0.8rem", color: "#faefe6", opacity: 0.4, textDecoration: "none" }}>Services</a>
        <a href="#products" style={{ fontSize: "0.8rem", color: "#faefe6", opacity: 0.4, textDecoration: "none" }}>Products</a>
        <a href="#contact" style={{ fontSize: "0.8rem", color: "#faefe6", opacity: 0.4, textDecoration: "none" }}>Contact</a>
      </div>

      <p style={{
        fontSize: "0.75rem",
        color: "#faefe6",
        opacity: 0.3,
      }}>
        2026 Capricorn Hub. All rights reserved.
      </p>
    </footer>
  );
}