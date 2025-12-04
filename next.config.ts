import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: { domains: ["images.unsplash.com", "randomuser.me"] },
};

export default nextConfig;
