import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app folder so Next ignores any
  // stray lockfiles in parent directories (OneDrive sync folders, etc.).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
