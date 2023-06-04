import nextIntlPlugin from "next-intl/plugin";
import rewrites from "./router.config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  runtime: "edge",
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.turistikrota.com", "mdbootstrap.com"],
  },
  rewrites() {
    return rewrites;
  },
};

export default nextIntlPlugin()(nextConfig);
