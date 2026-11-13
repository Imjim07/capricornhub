import WorkFolders from "@/components/WorkFolders";

// The Work section is two glass folders, Web Development and Branding.
// Click or tap a folder to open it; the files fan out and each one links to
// its project. This is a deliberate exception to DESIGN.md §1, §5 and §7
// (no cards, no chrome, no decorative motion), asked for by the client.

export default function Work() {
  return (
    <section id="work" className="section">
      <h2 className="display" style={{ marginBottom: "var(--s7)" }}>
        Work
      </h2>

      <WorkFolders />
    </section>
  );
}
