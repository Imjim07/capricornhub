import { SOCIALS } from "@/components/SocialMarks";

// DESIGN.md §6 — background --surface-deep. Left: a single row of small links
// at 24px spacing, no pipes or dots. Right: 20px social glyphs on the links'
// baseline. No columns, no newsletter block, no large logo.
// §2.1 — the footer is never inverted.

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--surface-deep)",
        padding: "var(--s6) var(--gutter)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "var(--s4)",
        }}
      >
        <div style={{ display: "flex", gap: "var(--s3)", flexWrap: "wrap" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label muted"
              style={{ textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "var(--s3)", alignItems: "center" }}>
          {SOCIALS.map(({ name, href, Mark }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Mark />
            </a>
          ))}
        </div>
      </div>

      <p className="label muted" style={{ marginTop: "var(--s5)" }}>
        2026 Capricorn Hub | Lagos, Nigeria
      </p>
    </footer>
  );
}
