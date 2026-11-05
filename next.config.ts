import type { NextConfig } from "next";

// Static export: deploys anywhere (Vercel, Netlify, GitHub Pages, cPanel).
// For GitHub Pages under a sub-path, set NEXT_PUBLIC_BASE_PATH=/repo-name
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
