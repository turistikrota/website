const withNextIntl = require("next-intl/plugin")();
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
const withPwa = require("next-pwa")({
  dest: "public",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-intl"],
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ["cdn.turistikrota.com"],
  },
  headers: () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

module.exports = withPwa(withNextIntl(withMDX(nextConfig)));
