"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = ["hero", "services", "work", "products", "lab", "contact"];
const GREEN = "#00423d";
const CREAM = "#faefe6";
const AMBER = "#d97706";
const NODE_SIZE = 10;
const LINE_HEIGHT = 48;

export default function NodeSpine() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState<number[]>(new Array(SECTIONS.length).fill(0));
  const [reducedMotion, setReducedMotion] = useState(false);
  const rafRef = useRef<number>(0);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    function update() {
      const positions = SECTIONS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { top: 0, progress: 0 };
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        const progress = Math.min(1, Math.max(0, (windowH - rect.top) / (windowH + rect.height)));
        return { top: rect.top, progress };
      });

      const active = positions.reduce((closest, pos, i) => {
        return Math.abs(pos.top - window.innerHeight * 0.4) < Math.abs(positions[closest].top - window.innerHeight * 0.4) ? i : closest;
      }, 0);

      setActiveIndex(active);
      setScrollProgress(positions.map(p => p.progress));
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const darkSections = [1, 3];

  const nodeColor = (i: number) => {
    const isDark = darkSections.includes(i);
    if (i === activeIndex) return AMBER;
    if (scrollProgress[i] > 0.5) return isDark ? CREAM : GREEN;
    return isDark ? "rgba(250,239,230,0.3)" : "rgba(0,66,61,0.3)";
  };

  const nodeScale = (i: number) => {
    return i === activeIndex ? 1 : 0.7;
  };

  return (
    <div
      className="node-spine"
      style={{
        position: "fixed",
        left: "16px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {SECTIONS.map((id, i) => {
        const isDark = darkSections.includes(i);
        const lineColor = isDark ? CREAM : GREEN;
        const lineProgress = reducedMotion ? 1 : Math.min(1, Math.max(0, (scrollProgress[i] - 0.3) / 0.4));

        return (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
              aria-label={"Go to " + id}
              style={{
                width: NODE_SIZE + "px",
                height: NODE_SIZE + "px",
                borderRadius: "50%",
                backgroundColor: nodeColor(i),
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: reducedMotion ? "none" : "background-color 250ms ease, transform 250ms ease",
                transform: "scale(" + nodeScale(i) + ")",
                willChange: "transform, background-color",
              }}
            />

            {i < SECTIONS.length - 1 && (
              <svg
                width="2"
                height={LINE_HEIGHT}
                style={{ display: "block", overflow: "visible" }}
              >
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2={LINE_HEIGHT}
                  stroke={lineColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.15"
                />
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2={LINE_HEIGHT}
                  stroke={lineColor}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={LINE_HEIGHT}
                  strokeDashoffset={reducedMotion ? 0 : LINE_HEIGHT * (1 - lineProgress)}
                  opacity="0.7"
                  style={{
                    transition: reducedMotion ? "none" : "stroke-dashoffset 0.1s linear",
                    willChange: "stroke-dashoffset",
                  }}
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}