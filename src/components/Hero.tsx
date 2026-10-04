// DESIGN.md §3 — display type is one or two words, never a sentence. The full
// positioning line moves to body copy directly beneath it. §7 forbids an
// eyebrow label above a heading, so the studio line sits below.

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "var(--s8)",
      }}
    >
      {/* The headline follows the theme: "We build." on green, "We design."
          on cream. Both are in the markup and CSS shows one, so this stays a
          server component — doing it in JS would mean a flash on load and a
          hydration mismatch, since the theme is applied before React runs.
          The hidden one is display:none, so it is out of the a11y tree. */}
      <h1 className="display" style={{ marginBottom: "var(--s5)" }}>
        <span className="when-dark">We build.</span>
        <span className="when-light">We design.</span>
      </h1>

      <p className="body-copy" style={{ marginBottom: "var(--s3)" }}>
        We build digital products for ambitious brands, web platforms, brand
        identities, and digital assets, crafted with precision for clients who
        mean business.
      </p>

      <p className="label muted" style={{ marginBottom: "var(--s6)" }}>
        Lagos, Nigeria | Digital Studio
      </p>

      <div style={{ display: "flex", gap: "var(--s4)", alignItems: "center", flexWrap: "wrap" }}>
        <a href="/start-a-project" className="btn-glass">
          Start a Project
        </a>
        {/* The secondary action stays a hairline-underlined text link so the
            glass button is the only emphasised control in the view. */}
        <a href="#work" className="text-link">
          See Our Work
        </a>
      </div>
    </section>
  );
}
