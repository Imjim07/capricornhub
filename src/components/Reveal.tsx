"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Scroll reveal. This is a deliberate deviation from DESIGN.md §1.5 and §7 —
// see the §8 exceptions table. Kept as restrained as the rule it breaks: a
// short opacity rise with a few pixels of travel, once, never repeating, and
// removed entirely under prefers-reduced-motion.

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  /** Milliseconds, for staggering siblings. */
  delay?: number;
  as?: "div" | "section";
}) {
  const [reduced, setReduced] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-40px 0px" });

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const shown = reduced || inView;

  return (
    <Tag
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(12px)",
        transition: reduced
          ? "none"
          : "opacity 600ms ease-out " + delay + "ms, transform 600ms ease-out " + delay + "ms",
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
