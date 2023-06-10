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
  headers: async () => {
    return [
      {
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, max-age=0, must-revalidate",
          },
        ],

        source: "/:path*",
      },
      {
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],

        source:
          "/:path(.+\\.(?:ico|png|svg|jpg|jpeg|gif|webp|json|js|css|mp3|mp4|ttf|ttc|otf|woff|woff2)$)",
      },
      {
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, max-age=0, must-revalidate",
          },
        ],

        source: "/_next/data/:path*",
      },
      {
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-cache, no-store, max-age=0, must-revalidate",
          },
        ],

        source: "/_next/:path(.+\\.(?:json)$)",
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
