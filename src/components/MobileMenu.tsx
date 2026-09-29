"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SOCIALS } from "@/components/SocialMarks";

// MOBILE-MENU.md. Fades in place — no slide, no stagger, no dividing lines.
// The whole band is the tap target, which is why the bands are so tall.

export type MenuLink = { href: string; label: string };

const FOCUSABLE = 'a[href], button:not([disabled])';

export default function MobileMenu({
  id,
  links,
  onClose,
  returnFocusTo,
}: {
  id: string;
  links: MenuLink[];
  onClose: () => void;
  returnFocusTo: React.RefObject<HTMLButtonElement | null>;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [closing, setClosing] = useState(false);

  // Set once on mount; the media query cannot change mid-interaction here.
  const reducedRef = useRef(false);
  const poppingRef = useRef(false);

  const requestClose = useCallback(() => {
    // Unwind the history entry pushed on open; popstate finishes the close.
    if (!poppingRef.current && typeof window !== "undefined") {
      poppingRef.current = true;
      window.history.back();
      return;
    }
    if (reducedRef.current) {
      onClose();
      return;
    }
    setClosing(true);
    window.setTimeout(onClose, 180);
  }, [onClose]);

  // Reduced motion, scroll lock, initial focus, and focus return on close.
  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const toReturn = returnFocusTo.current;
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      toReturn?.focus();
    };
  }, [returnFocusTo]);

  // Back button closes the menu.
  useEffect(() => {
    window.history.pushState({ chMenu: true }, "");

    function onPop() {
      poppingRef.current = true;
      if (reducedRef.current) {
        onClose();
        return;
      }
      setClosing(true);
      window.setTimeout(onClose, 180);
    }

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [onClose]);

  // Escape closes; Tab is trapped inside the overlay.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        requestClose();
        return;
      }
      if (e.key !== "Tab") return;

      const nodes = overlayRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [requestClose]);

  return (
    <div
      id={id}
      ref={overlayRef}
      className="menu-overlay"
      data-closing={closing || undefined}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <button
        ref={closeRef}
        type="button"
        className="menu-close"
        onClick={requestClose}
        aria-label="Close menu"
      >
        <span aria-hidden="true">✕</span>
      </button>

      <div className="menu-bands">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="menu-band"
            onClick={() => onClose()}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="menu-socials">
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
  );
}
