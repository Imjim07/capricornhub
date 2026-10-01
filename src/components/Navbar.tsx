"use client";

import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu, { type MenuLink } from "@/components/MobileMenu";

// DESIGN.md §2.1 — the navbar is never inverted. It stays green throughout.
// The wordmark is set as type: the drawn logo is green with an amber "hub",
// which is invisible on green and would break §7's two-colour rule.

// Root-relative so they resolve from /[slug] pages too, not just the homepage.
const links: MenuLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/store", label: "Store" },
];

// MOBILE-MENU.md forbids a CTA button inside the menu, so "Start a Project"
// becomes a plain Contact band. Four bands is the stated maximum.
const menuLinks: MenuLink[] = [...links, { href: "/#contact", label: "Contact" }];

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
        <a href="/#contact" className="btn-outline">
          Start a Project
        </a>
      </div>

      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="mobile-menu-btn"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={MENU_ID}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--ink)",
          padding: 0,
        }}
      >
        <Menu size={20} />
      </button>

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
