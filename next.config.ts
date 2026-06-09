import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app folder so Next ignores any
  // stray lockfiles in parent directories (OneDrive sync folders, etc.).
  turbopack: {
    root: __dirname,
  },

  // Static HTML export — produces an `out/` folder that can be uploaded
  // over FTP to any plain web host (Forpsi webhosting / Apache).
  output: "export",

  // Emit `/gdpr` as `gdpr/index.html` (not `gdpr.html`) so Apache serves
  // it directly without rewrite rules.
  trailingSlash: true,

  // No Node image optimizer on a static host — serve images as-is.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
