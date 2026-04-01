import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedDevOrigins: ['15.15.15.176'],
  },
};

export default nextConfig;
