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
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-intl", "@pqina/pintura", "@pqina/react-pintura"],
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
    domains: [
      "s3.turistikrota.com",
      "avatar.turistikrota.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = withPwa(withNextIntl(withMDX(nextConfig)));
