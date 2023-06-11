const router = require("./router.config");
const withNextIntl = require("next-intl/plugin")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-intl"],
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return router;
  },
  images: {
    domains: ["cdn.turistikrota.com", "mdbootstrap.com"],
  },
};

module.exports = withNextIntl(nextConfig);
