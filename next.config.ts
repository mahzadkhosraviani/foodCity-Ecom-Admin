import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: `${process.env.API_PROTOCOL}` as "http" | "https",
        hostname: `${process.env.API_HOSTNAME}`!,
      },
    ],
  },
};

export default nextConfig;
