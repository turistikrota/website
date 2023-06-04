const withNextIntl = require("next-intl/plugin")();
const rewrites = require("./router.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = withNextIntl(nextConfig);
