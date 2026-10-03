// Abstract marks for the tier cards, echoing the reference's geometric
// glyphs. Monochrome and currentColor, so they invert with the card.
// The first is the brand motif: three nodes in a closed triangle.

export default function TierMark({ index }: { index: number }) {
  const common = { width: 52, height: 52, viewBox: "0 0 52 52", "aria-hidden": true as const };

  if (index === 0) {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M26 9 L43 39 L9 39 Z" />
        <circle cx="26" cy="9" r="5" fill="currentColor" stroke="none" />
        <circle cx="43" cy="39" r="5" fill="currentColor" stroke="none" />
        <circle cx="9" cy="39" r="5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="26" cy="26" r="17" />
        <circle cx="26" cy="26" r="7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="currentColor" aria-hidden="true">
      <rect x="6" y="6" width="17" height="17" rx="3" />
      <rect x="29" y="6" width="17" height="17" rx="3" />
      <rect x="6" y="29" width="17" height="17" rx="3" />
      <rect x="29" y="29" width="17" height="17" rx="3" />
    </svg>
  );
}
