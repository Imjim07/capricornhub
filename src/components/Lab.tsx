export default function Lab() {
  return (
    <section id="lab" style={{
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
        marginBottom: "1rem",
      }}>
        The Lab
      </p>

      <h2 style={{
        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
        fontWeight: 800,
        color: "#faefe6",
        letterSpacing: "-0.02em",
        marginBottom: "1.5rem",
      }}>
        What we are building next.
      </h2>

      <p style={{
        fontSize: "1rem",
        lineHeight: 1.7,
        color: "#faefe6",
        opacity: 0.6,
        maxWidth: "520px",
        marginBottom: "4rem",
      }}>
        Beyond client work, we explore hardware and embedded systems. Arduino and Raspberry Pi projects coming soon.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        maxWidth: "700px",
      }}>
        {["Arduino Projects", "Raspberry Pi Builds"].map((item) => (
          <div key={item} style={{
            border: "1px solid rgba(250,239,230,0.2)",
            borderRadius: "8px",
            padding: "2rem",
          }}>
            <p style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#faefe6",
              opacity: 0.4,
              marginBottom: "0.75rem",
            }}>
              Coming Soon
            </p>
            <h3 style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#faefe6",
            }}>
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}