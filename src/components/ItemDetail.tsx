"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import type { DetailItem } from "@/data/items";

// A package page. DETAIL-PAGE.md's layout is built around a product
// photograph, and a service tier has none — the placeholder blocks it left
// behind were painted --surface on a --surface page, so the page read as an
// empty outline with nothing in it.
//
// The image column now carries what the package actually includes, which is
// the thing a buyer came to read. The right column keeps DETAIL-PAGE.md's
// stack order: title, price, terms, action, description. The thumbnail strip,
// zoom and quantity stepper are gone; none had anything to act on.

export default function ItemDetail({ item }: { item: DetailItem }) {
  const [confirmed, setConfirmed] = useState(false);

  // The confirmation reverts after 2s. That is the whole feedback.
  useEffect(() => {
    if (!confirmed) return;
    const t = setTimeout(() => setConfirmed(false), 2000);
    return () => clearTimeout(t);
  }, [confirmed]);

  return (
    <div className="detail-grid">
      <div className="detail-includes">
        <p className="label muted" style={{ marginBottom: "var(--s4)" }}>
          What&rsquo;s included
        </p>

        <ul style={{ listStyle: "none" }}>
          {item.features.map((feature) => (
            <li
              key={feature}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--s2)",
                paddingBottom: "var(--s3)",
                marginBottom: "var(--s3)",
                borderBottom: "1px solid var(--hairline)",
              }}
            >
              <Check
                size={15}
                strokeWidth={2.2}
                aria-hidden="true"
                style={{ flexShrink: 0, marginTop: "5px" }}
              />
              <span style={{ fontSize: "16px", lineHeight: 1.6 }}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="detail-col detail-col-top">
        {/* 1. Title */}
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

        {/* 2. Price */}
        <p style={{ marginTop: "24px", fontSize: "15px", fontWeight: 600 }}>
          {item.price}
        </p>

        {/* 3. Terms — omitted when the item has none. */}
        {item.terms && (
          <p className="muted" style={{ marginTop: "12px", fontSize: "13px" }}>
            {item.terms}
          </p>
        )}

        {/* 4. Action */}
        <div style={{ marginTop: "40px" }}>
          <button type="button" className="btn-glass" onClick={() => setConfirmed(true)}>
            {confirmed ? item.action.done : item.action.label}
          </button>
        </div>

        {/* 5. Description */}
        <p style={{ marginTop: "40px", fontSize: "14px", lineHeight: 1.6, maxWidth: "48ch" }}>
          {item.description}
        </p>

        {/* 6. Availability — omitted when the item has none. */}
        {item.availability && (
          <p className="muted" style={{ marginTop: "24px", fontSize: "13px" }}>
            {item.availability}
          </p>
        )}
      </div>
    </div>
  );
}
