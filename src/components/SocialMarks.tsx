// lucide-react v1 dropped brand icons, so the three marks are inline SVG.
// 20px glyphs per DESIGN.md §6. Single colour, inherits currentColor.

export function InstagramMark({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XMark({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedInMark({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.4 9.5h5.16V21H2.4zM9.6 9.5h4.95v1.57h.07c.69-1.2 2.37-2.05 4.13-2.05 3.35 0 4.65 2.05 4.65 5.6V21h-5.16v-5.55c0-1.4-.5-2.35-1.75-2.35-1.06 0-1.7.72-1.98 1.41-.1.25-.13.6-.13.95V21H9.6z" />
    </svg>
  );
}

// URLs are the bare profile addresses. The links as shared carried per-share
// tracking — stkn= and utm_source=qr from an Instagram QR share, s=11 from the
// X mobile app — which is not part of the profile address and does not belong
// on every page of the site.
//
// TODO(capricornhub): add the LinkedIn URL. An entry with no URL is filtered
// out below rather than rendered as a dead link, so the icon simply appears
// once the address is there.
const ALL_SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/capricornhubz", Mark: InstagramMark },
  { name: "X", href: "https://x.com/capricornhubz", Mark: XMark },
  { name: "LinkedIn", href: "", Mark: LinkedInMark },
];

export const SOCIALS = ALL_SOCIALS.filter((s) => s.href.startsWith("https://"));
