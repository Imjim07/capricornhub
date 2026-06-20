const projects = [
  {
    name: "Accent Homes",
    type: "Web Platform",
    description: "Luxury short-let booking platform with Paystack payments and Firebase backend.",
    url: "https://accenthomesltd.com",
    color: "#1a1a1a",
    display: "screenshot",
    previewUrl: "https://accenthomesltd.com",
  },
  {
    name: "Thanod",
    type: "Fintech Platform",
    description: "Crypto investment and portfolio management platform with email delivery.",
    url: "#",
    color: "#050508",
    display: "palette",
    palette: ["#050508", "#2563eb", "#60a5fa", "#09090f"],
  },
  {
    name: "Avalanche Engineering",
    type: "Corporate Site",
    description: "Water treatment and facility management company with Education Hub.",
    url: "https://avalanche-engs.com",
    color: "#1e3a8a",
    display: "screenshot",
previewUrl: "https://avalanche-engs.com",
  },
  {
    name: "AKARM",
    type: "Fashion Brand",
    description: "Premium unisex fashion homepage built with Next.js and Sanity CMS.",
    url: "https://akarm.vercel.app",
    color: "#2a2520",
    display: "screenshot",
    previewUrl: "https://akarm.vercel.app",
  },
  {
    name: "Aurethium",
    type: "Template Product",
    description: "White-label crypto investment platform with Claude AI chatbot integration.",
    url: "#",
    color: "#050508",
    display: "palette",
    palette: ["#f59e0b", "#d97706", "#050508"],
  },
  {
    name: "CBRE Emergency Form",
    type: "Web Application",
    description: "Multi-department emergency contact system deployed on GitHub Pages.",
    url: "#",
    color: "#00423d",
    display: "pattern",
  },
];

function ProjectCard({ project }: { project: any }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: project.color,
        borderRadius: "8px",
        overflow: "hidden",
        textDecoration: "none",
        display: "block",
      }}
    >
      {project.display === "screenshot" && (
        <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
          <img
            src={"https://api.microlink.io?url=" + project.previewUrl + "&screenshot=true&meta=false&embed=screenshot.url"}
            alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      )}

      {project.display === "palette" && (
        <div style={{ display: "flex", height: "80px" }}>
          {project.palette.map((color: string) => (
            <div key={color} style={{ flex: 1, backgroundColor: color }} />
          ))}
        </div>
      )}

      {project.display === "pattern" && (
        <div style={{
          height: "80px",
          backgroundColor: project.color,
          backgroundImage: "radial-gradient(circle at 20px 20px, rgba(255,255,255,0.05) 2px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      )}

      <div style={{ padding: "1.5rem" }}>
        <p style={{
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#faefe6",
          opacity: 0.5,
          marginBottom: "0.5rem",
        }}>
          {project.type}
        </p>
        <h3 style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#faefe6",
          marginBottom: "0.5rem",
        }}>
          {project.name}
        </h3>
        <p style={{
          fontSize: "0.8rem",
          lineHeight: 1.6,
          color: "#faefe6",
          opacity: 0.6,
        }}>
          {project.description}
        </p>
      </div>
    </a>
  );
}

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

      <div className="grid-3" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
      }}>
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}