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
  publicRuntimeConfig: {
    NEXT_PUBLIC_SITE_ACCOUNT_TR_URL: process.env.NEXT_PUBLIC_SITE_ACCOUNT_TR_URL,
    aa: 'bb',
  },
  serverRuntimeConfig: {
    NEXT_PUBLIC_SITE_ACCOUNT_TR_URL: process.env.NEXT_PUBLIC_SITE_ACCOUNT_TR_URL,
    aa: 'bb',
  },
}

module.exports = withNextIntl(withMDX(nextConfig))
