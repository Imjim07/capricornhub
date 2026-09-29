// DESIGN.md §7 — the two "coming soon" items were bordered, rounded boxes.
// They are now hairline-topped columns with no box.

const experiments = ["Arduino Projects", "Raspberry Pi Builds"];

export default function Lab() {
  return (
    <section id="lab" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s5)" }}>
        The Lab
      </h2>

      <p className="body-copy muted" style={{ marginBottom: "var(--s7)" }}>
        Beyond client work, we explore hardware and embedded systems. Arduino
        and Raspberry Pi projects coming soon.
      </p>

      <div className="col-2" style={{ maxWidth: "700px" }}>
        {experiments.map((item) => (
          <div
            key={item}
            style={{
              borderTop: "1px solid var(--hairline)",
              paddingTop: "var(--s3)",
            }}
          >
            <p className="label muted" style={{ marginBottom: "var(--s2)" }}>
              Coming Soon
            </p>
            <p className="label">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
