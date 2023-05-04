const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.turistikrota.com"]
  },
  rewrites() {
    return [
      {
        source: '/tr/hakkimizda',
        destination: '/tr/about-us'
      }
    ]
  },
};

module.exports = withNextIntl(nextConfig)
