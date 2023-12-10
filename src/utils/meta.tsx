import { Metadata } from 'next'
import { Locales, mergeUrlWithLocale } from '~/static/page'

type Options = {
  title: string
  description: string
  keywords: string
  page: {
    tr: string
    en: string
  }
}

export const generateDefaultMetadata = (locale: string, opts: Options): Metadata => {
  return {
    title: opts.title + ' | Turistik Rota',
    description: opts.description,
    keywords: opts.keywords,
    alternates: {
      languages: {
        tr: mergeUrlWithLocale('tr', opts.page.tr),
        en: mergeUrlWithLocale('en', opts.page.en),
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      type: 'website',
      url: `https://turistikrota.com/${locale}${opts.page[locale as Locales]}`,
      images: [
        {
          url: 'https://s3.turistikrota.com/logo/vertical_500x500.png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@turistikrota',
      creator: '@turistikrota',
      title: opts.title,
      description: opts.description,
      images: [
        {
          url: 'https://s3.turistikrota.com/logo/vertical_500x500.png',
        },
      ],
    },
  }
}
