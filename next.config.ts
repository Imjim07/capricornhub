import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `next build` and `next dev` both write to .next. Running a build while a
  // dev server is up clobbers chunks the dev server still references, which
  // surfaces as "Cannot find module @swc/helpers-<hash>" in the browser.
  // Setting NEXT_DIST_DIR sends a build somewhere else so the two cannot
  // collide: NEXT_DIST_DIR=.next-verify npm run build
  distDir: process.env.NEXT_DIST_DIR || ".next",

  // Next blocks cross-origin requests to dev-only assets by default, so
  // opening the dev server from a phone on the LAN (http://192.168.x.x:3000)
  // serves the HTML but never hydrates — buttons render and do nothing.
  // Development only; has no effect on a production build.
  allowedDevOrigins: ["192.168.1.4", "192.168.1.*"],
};

export default nextConfig;
