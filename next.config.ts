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
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} as NextConfig;

export default nextConfig;
