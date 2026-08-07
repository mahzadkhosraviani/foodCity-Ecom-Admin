import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: process.env.API_PROTOCOL as "http" | "https",
        hostname: process.env.API_HOSTNAME!,
      },
    ],
  },
};

export default nextConfig;
