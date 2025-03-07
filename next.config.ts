import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    position: "bottom-right",
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  env: {
    SANITY_API_WRITE_TOKEN: process.env.SANITY_API_WRITE_TOKEN,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
  },
};

export default nextConfig;
