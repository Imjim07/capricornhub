"use client";

import { useEffect, useState } from "react";

// The full-screen zoom from DETAIL-PAGE.md, reusable anywhere an image should
// open at full size: overlay at --surface, image centred, ✕ top-left, 220ms
// fade, escape to close, instant under prefers-reduced-motion.

export default function ZoomableImage({
  src,
  alt,
  className,
  style,
  imgStyle,
}: {
  src: string;
  alt: string;
  /** Classes for the thumbnail box, e.g. "media media-center". */
  className?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-label={"View " + alt + " full size"}
        // No `border` reset here: an inline border would beat .media-edge.
        // .media already sets border: 0 for the default case.
        style={{ padding: 0, background: "transparent", cursor: "zoom-in", ...style }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" style={imgStyle} />
      </button>

      {open && (
        <div className="zoom-overlay" role="dialog" aria-modal="true" aria-label={alt}>
          <button
            type="button"
            className="zoom-close label"
            onClick={() => setOpen(false)}
            aria-label="Close"
            autoFocus
          >
            <span aria-hidden="true">✕</span>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}
