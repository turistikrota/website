const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.turistikrota.com"]
  }
};

module.exports = withNextIntl(nextConfig)
