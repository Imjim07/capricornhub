"use client";

import { useEffect, useState } from "react";
import type { DetailItem, ItemImage } from "@/data/items";

// DETAIL-PAGE.md. Every value here comes from the typed prop — no copy is
// hardcoded, so the page renders any item.

function toneVar(tone: ItemImage["tone"]) {
  return "var(--" + tone + ")";
}

function Media({ image, className }: { image: ItemImage; className?: string }) {
  if (image.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={image.src} alt={image.alt} className={className} />;
  }
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={className}
      style={{ width: "100%", height: "100%", backgroundColor: toneVar(image.tone) }}
    />
  );
}

export default function ItemDetail({ item }: { item: DetailItem }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [chosen, setChosen] = useState(item.select?.options[0]?.label ?? "");
  const [confirmed, setConfirmed] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const image = item.images[active];

  // The confirmation reverts after 2s. That is the whole feedback.
  useEffect(() => {
    if (!confirmed) return;
    const t = setTimeout(() => setConfirmed(false), 2000);
    return () => clearTimeout(t);
  }, [confirmed]);

  useEffect(() => {
    if (!zoomed) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setZoomed(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed]);

  return (
    <>
      <div className="detail-grid">
        <div className="detail-image-col">
          <button
            type="button"
            className="detail-media"
            onClick={() => setZoomed(true)}
            aria-label={"Zoom " + item.title}
          >
            <Media key={image.id} image={image} className="crossfade" />
          </button>

          {item.images.length > 1 && (
            <div className="thumb-strip">
              {item.images.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  className="thumb"
                  data-active={i === active || undefined}
                  aria-label={img.alt}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                >
                  <Media image={img} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="detail-col">
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

          {/* 3. Terms line — omitted when the item has none. */}
          {item.terms && (
            <p className="muted" style={{ marginTop: "12px", fontSize: "13px" }}>
              {item.terms}
            </p>
          )}

          {/* 4. Action row */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "baseline",
              flexWrap: "wrap",
            }}
          >
            {item.quantity && (
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  fontSize: "14px",
                  marginRight: "24px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "0 16px 0 0",
                    cursor: quantity <= 1 ? "not-allowed" : "pointer",
                    color: quantity <= 1 ? "var(--ink-muted)" : "inherit",
                    fontFamily: "inherit",
                    fontSize: "14px",
                  }}
                >
                  –
                </button>
                <span aria-live="polite">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "0 0 0 16px",
                    cursor: "pointer",
                    color: "inherit",
                    fontFamily: "inherit",
                    fontSize: "14px",
                  }}
                >
                  +
                </button>
              </div>
            )}

            <button
              type="button"
              className="btn-outline"
              onClick={() => setConfirmed(true)}
            >
              {confirmed ? item.action.done : item.action.label}
            </button>
          </div>

          {/* 5. Description */}
          <p
            style={{
              marginTop: "40px",
              fontSize: "14px",
              lineHeight: 1.6,
              maxWidth: "48ch",
            }}
          >
            {item.description}
          </p>

          {/* 6. Availability line — omitted when the item has none. */}
          {item.availability && (
            <p className="muted" style={{ marginTop: "24px", fontSize: "13px" }}>
              {item.availability}
            </p>
          )}

          {/* 7. Option select — omitted when the item has no options. */}
          {item.select && (
            <div style={{ marginTop: "32px" }}>
              <button
                type="button"
                className="select-row"
                aria-expanded={selectOpen}
                onClick={() => setSelectOpen((v) => !v)}
              >
                <span style={{ fontSize: "14px" }}>{chosen || item.select.label}</span>
                <span aria-hidden="true" style={{ fontSize: "14px" }}>
                  {selectOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {selectOpen && (
                <div>
                  {item.select.options.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      className="select-option"
                      data-unavailable={!opt.available || undefined}
                      disabled={!opt.available}
                      onClick={() => {
                        setChosen(opt.label);
                        setSelectOpen(false);
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {zoomed && (
        <div className="zoom-overlay" role="dialog" aria-modal="true" aria-label={item.title}>
          <button
            type="button"
            className="zoom-close label"
            onClick={() => setZoomed(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <div style={{ maxWidth: "min(900px, 100%)", width: "100%", aspectRatio: "4 / 5" }}>
            <Media image={image} />
          </div>
        </div>
      )}
    </>
  );
}
