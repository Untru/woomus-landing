import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/woomus-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
