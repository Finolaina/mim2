import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // IMPORTANT: Change 'mim2' to your repository name if it differs
  basePath: isProd ? "/mim2" : "",
  assetPrefix: isProd ? "/mim2/" : "",
};

export default nextConfig;
