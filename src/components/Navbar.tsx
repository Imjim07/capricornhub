"use client";

import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu, { type MenuLink } from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";

// DESIGN.md §2.1 — the navbar is never inverted. It takes --surface, so it
// follows the theme rather than being pinned to green.
//
// The wordmark is public/logo.png, CSS-masked and filled with --ink: the file
// is green with an amber "hub" and would be invisible on the dark surface.

// Root-relative so they resolve from /[slug] pages too, not just the homepage.
const links: MenuLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  // Store commented out. The route is shelved too: src/app/store was renamed
  // to src/app/_store, which Next treats as a private folder and does not
  // route, so /store now 404s rather than sitting there unlinked.
  // { href: "/store", label: "Store" },
];

// "Start a Project" is its own page now rather than a CTA that scrolls to a
// form, so it belongs in the menu as an ordinary destination band. That also
// settles the earlier tension with MOBILE-MENU.md, which forbids a CTA button
// inside the overlay but not a link. Three bands, under the stated maximum.
const menuLinks: MenuLink[] = [
  ...links,
  { href: "/start-a-project", label: "Start a Project" },
];

const MENU_ID = "mobile-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--surface)",
        borderBottom: "1px solid var(--hairline)",
        padding: "var(--s3) var(--gutter)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/" aria-label="Capricorn Hub — home" style={{ display: "block" }}>
        <span className="navbar-logo" role="img" aria-label="Capricorn Hub" />
      </a>

      <div
        className="desktop-nav"
        style={{ display: "flex", gap: "var(--s4)", alignItems: "center" }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="label-ui"
            style={{ color: "var(--ink-muted)", textDecoration: "none" }}
          >
            {l.label}
          </a>
        ))}
        <a href="/start-a-project" className="btn-glass">
          Start a Project
        </a>
        <ThemeToggle />
      </div>

      {/* The toggle sits beside the hamburger rather than inside the overlay:
          MOBILE-MENU.md forbids extra controls in the menu. */}
      <div className="mobile-controls">
        <ThemeToggle />
        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls={MENU_ID}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--ink)",
            padding: 0,
            display: "inline-flex",
          }}
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <MobileMenu
          id={MENU_ID}
          links={menuLinks}
          onClose={() => setOpen(false)}
          returnFocusTo={triggerRef}
        />
      )}
    </nav>
  );
}
