// template.tsx re-mounts on every navigation (layout.tsx would not), so the
// enter animation runs each time a route changes. That gives a smooth page
// transition with no library and no experimental flag.
//
// Opacity only, deliberately: a transform here would make this element the
// containing block for position:fixed descendants, and the navbar and the
// mobile menu overlay would jump for the length of the animation.

export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
