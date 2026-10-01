import type { CaseStudyItem } from "@/data/items";

// A case study is not a purchasable item, so it does not use DETAIL-PAGE.md's
// commerce stack — no price, terms, quantity or option select. It keeps that
// file's layout discipline: 55/45 columns, the one-third drop on the detail
// column, no breadcrumbs, no related items, nothing sticky.

export default function CaseStudy({ item }: { item: CaseStudyItem }) {
  return (
    <div className="detail-grid">
      <div className="detail-image-col">
        <div
          className={
            "detail-media" +
            (item.detail.kind === "image" && item.detail.fit === "contain"
              ? " is-contain"
              : "")
          }
          style={{ cursor: "default" }}
        >
          {item.detail.kind === "wordmark" ? (
            <div className="detail-wordmark">{item.detail.text}</div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.detail.src} alt={item.detail.alt} />
          )}
        </div>
      </div>

      <div className="detail-col">
        <p className="label muted" style={{ marginBottom: "var(--s2)" }}>
          {item.category}
        </p>

        <h1
          style={{
            fontSize: "15px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            lineHeight: 1.2,
          }}
        >
          {item.title}
        </h1>

        <p style={{ marginTop: "40px", fontSize: "14px", lineHeight: 1.6, maxWidth: "48ch" }}>
          {item.summary}
        </p>

        <p className="label muted" style={{ marginTop: "40px", marginBottom: "var(--s2)" }}>
          Scope
        </p>
        <ul style={{ listStyle: "none" }}>
          {item.scope.map((line) => (
            <li key={line} style={{ fontSize: "14px", lineHeight: 1.6 }}>
              {line}
            </li>
          ))}
        </ul>

        <p className="label muted" style={{ marginTop: "32px", marginBottom: "var(--s2)" }}>
          Built with
        </p>
        <p style={{ fontSize: "14px", lineHeight: 1.6 }}>{item.stack.join(", ")}</p>

        {item.liveUrl && (
          <div style={{ marginTop: "40px" }}>
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Visit site
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
