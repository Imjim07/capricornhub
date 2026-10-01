"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Dark/light switch. Dark is the default, so an absent stored value means
// dark. The thumb slides and the surface glows; motion answers a user action,
// which §1.5 allows. The glass treatment is a logged §8 exception.
//
// Adapted from the reference to cream and green — the blue glow in the
// original would be a third colour (§1.4, §7).

type Theme = "dark" | "light";

export default function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("ch-theme");
    } catch {
      // Private mode. Fall through to the default.
    }
    setTheme(stored === "light" ? "light" : "dark");
    setReady(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ch-theme", next);
    } catch {
      // Nothing to do — the choice just will not persist.
    }
  }

  const light = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={light}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      onClick={toggle}
      className={"theme-toggle" + (className ? " " + className : "")}
      data-on={light || undefined}
      // Until the stored value is read, both icons render identically in
      // either theme, so there is nothing to mismatch during hydration.
      suppressHydrationWarning
      style={ready ? undefined : { visibility: "hidden" }}
    >
      <span className="theme-toggle-thumb" aria-hidden="true" />
      <span className="theme-toggle-icon is-sun" aria-hidden="true">
        <Sun size={14} strokeWidth={2.2} />
      </span>
      <span className="theme-toggle-icon is-moon" aria-hidden="true">
        <Moon size={14} strokeWidth={2.2} />
      </span>
    </button>
  );
}
