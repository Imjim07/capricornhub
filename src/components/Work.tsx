const projects = [
  {
    name: "Accent Homes",
    type: "Web Platform",
    description: "Luxury short-let booking platform with Paystack payments and Firebase backend.",
    url: "https://accenthomesltd.com",
    color: "#1a1a1a",
  },
  {
    name: "Thanod",
    type: "Fintech Platform",
    description: "Crypto investment and portfolio management platform with email delivery.",
    url: "#",
    color: "#2d4a3e",
  },
  {
    name: "Avalanche Engineering",
    type: "Corporate Site",
    description: "Water treatment and facility management company with Education Hub.",
    url: "#",
    color: "#3d3d3d",
  },
  {
    name: "AKARM",
    type: "Fashion Brand",
    description: "Premium unisex fashion homepage built with Next.js and Sanity CMS.",
    url: "https://akarm.vercel.app",
    color: "#2a2520",
  },
  {
    name: "Aurethium",
    type: "Template Product",
    description: "White-label crypto investment platform with Claude AI chatbot integration.",
    url: "#",
    color: "#1a3a5c",
  },
  {
    name: "CBRE Emergency Form",
    type: "Web Application",
    description: "Multi-department emergency contact system deployed on GitHub Pages.",
    url: "#",
    color: "#4a1a1a",
  },
];

export default function Work() {
  return (
    <section id="work" style={{
      backgroundColor: "#faefe6",
      padding: "8rem 2.5rem",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "4rem",
      }}>
        <div>
          <p style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00423d",
            opacity: 0.6,
            marginBottom: "0.75rem",
          }}>
            Selected Work
          </p>
          <h2 style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "#1a1a1a",
            letterSpacing: "-0.02em",
          }}>
            Projects we are proud of.
          </h2>
        </div>
      </div>

      <div className="grid-3"style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
      }}>
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: p.color,
              borderRadius: "8px",
              padding: "2.5rem",
              textDecoration: "none",
              display: "block",
              aspectRatio: "4/3",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#faefe6",
              opacity: 0.5,
              marginBottom: "0.75rem",
            }}>
              {p.type}
            </p>
            <h3 style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#faefe6",
              marginBottom: "0.75rem",
            }}>
              {p.name}
            </h3>
            <p style={{
              fontSize: "0.8rem",
              lineHeight: 1.6,
              color: "#faefe6",
              opacity: 0.6,
            }}>
              {p.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}