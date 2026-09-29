import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next blocks cross-origin requests to dev-only assets by default, so
  // opening the dev server from a phone on the LAN (http://192.168.x.x:3000)
  // serves the HTML but never hydrates — buttons render and do nothing.
  // Development only; has no effect on a production build.
  allowedDevOrigins: ["192.168.1.4", "192.168.1.*"],
};

export default nextConfig;
