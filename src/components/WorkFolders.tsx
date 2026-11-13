"use client";

import { useEffect, useRef, useState } from "react";
import GlassFolder, { type ArtRecipe, type FolderFile } from "@/components/GlassFolder";
import { brandingWork, caseStudies } from "@/data/items";

// Two glass folders: websites in one, branding in the other. Each file is a
// link — websites to their case study, branding to the service page.
//
// GlassFolder takes a pixel width, so each cell measures itself and hands
// the folder its own width, capped so the folders don't grow huge on desktop.

const MAX_WIDTH = 520;

// The back-panel art, drawn in the brand's own green and cream.
const BRAND_ART: ArtRecipe = {
  style: "marble",
  colors: ["#002B27", "#00423D", "#0d5c55", "#003A36", "#8fb3a6", "#FAEFE6", "#ffffff"],
  scale: 0.7,
  warp: 3.4,
  angle: 0.6,
  gloss: 0.45,
  veins: 0.4,
};

const webFiles: FolderFile[] = caseStudies.map((p) => ({
  name: p.title,
  meta: p.category,
  image: p.image.src,
  href: "/" + p.slug,
}));

const brandFiles: FolderFile[] = brandingWork.map((b) => ({
  name: b.title,
  meta: b.meta,
  image: b.image.src,
  href: b.href,
}));

function FolderCell({
  label,
  files,
  seed,
  delay,
}: {
  label: string;
  files: FolderFile[];
  seed: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setWidth(Math.min(MAX_WIDTH, Math.floor(entry.contentRect.width)));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="work-folder">
      {width > 0 ? (
        <GlassFolder
          label={label}
          files={files}
          tone="dark"
          art={BRAND_ART}
          seed={seed}
          action="none"
          width={width}
          appearDelay={delay}
        />
      ) : null}
    </div>
  );
}

export default function WorkFolders() {
  return (
    <div className="work-folders">
      <FolderCell label="Web Development" files={webFiles} seed={3} delay={0} />
      <FolderCell label="Branding" files={brandFiles} seed={11} delay={140} />
    </div>
  );
}
