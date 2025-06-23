import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "m.media-amazon.com",
      // Add any other domains where your images are hosted
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
