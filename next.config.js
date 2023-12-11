const withNextIntl = require('next-intl/plugin')('./src/i18n.tsx')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  transpilePackages: ['next-intl', '@pqina/pintura', '@pqina/react-pintura'],
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 's3.turistikrota.com',
      },
      {
        hostname: 'avatar.turistikrota.com',
      },
    ],
  },
}

module.exports = withNextIntl(withMDX(nextConfig))
