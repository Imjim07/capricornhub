// Shared typography for the legal pages. DESIGN.md §1.1 — two type sizes, no
// middle: section headings sit at label scale above 16px body copy, and body
// text holds the 68ch measure from §3.

export function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="label" style={{ marginTop: "var(--s6)", marginBottom: "var(--s3)" }}>
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "16px", lineHeight: 1.6, maxWidth: "68ch", marginBottom: "var(--s3)" }}>
      {children}
    </p>
  );
}

export function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ listStyle: "none", maxWidth: "68ch", marginBottom: "var(--s3)" }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: "16px", lineHeight: 1.6, paddingBottom: "var(--s1)" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
