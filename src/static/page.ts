import { SiteUrls } from './site'

export type RouteType = {
  aboutUs: string
  contact: string
  places: string
  listings: string
  businesses: string
  account: {
    details: string
    select: string
  }
  auth: {
    default: string
  }
  comingSoon: string
  contracts: {
    terms: string
    privacyNotify: string
    privacy: string
    cookies: string
  }
}

export type Locales = 'en' | 'tr'

const Routes: Record<Locales, RouteType> = {
  tr: {
    aboutUs: '/hakkimizda',
    contact: '/iletisim',
    listings: SiteUrls.listing.tr,
    businesses: `${SiteUrls.businesses.tr}/menu`,
    account: {
      details: `${SiteUrls.account.tr}/menu`,
      select: `${SiteUrls.account.tr}/sec`,
    },
    auth: {
      default: SiteUrls.auth.tr,
    },
    places: SiteUrls.places.tr,
    comingSoon: '/cok-yakinda',
    contracts: {
      terms: '/sozlesmeler/kullanim-kosullari',
      privacyNotify: '/sozlesmeler/gizlilik-bildirimi',
      privacy: '/sozlesmeler/kisisel-verilerin-korunmasi-ve-gizlilik-politikasi',
      cookies: '/sozlesmeler/cerezler',
    },
  },
  en: {
    aboutUs: '/about-us',
    contact: '/contact',
    listings: SiteUrls.listing.en,
    businesses: `${SiteUrls.businesses.en}/menu`,
    account: {
      details: `${SiteUrls.account.en}/menu`,
      select: `${SiteUrls.account.en}/select`,
    },
    auth: {
      default: SiteUrls.auth.en,
    },
    comingSoon: '/coming-soon',
    contracts: {
      terms: '/contracts/terms-of-use',
      privacyNotify: '/contracts/privacy-notice',
      privacy: '/contracts/privacy-and-protection-of-personal-data',
      cookies: '/contracts/cookies',
    },
    places: SiteUrls.places.en,
  },
}

export const getStaticRoute = (locale: string) => {
  if (!['tr', 'en'].includes(locale)) return Routes['tr']
  return Routes[locale as Locales]
}

export const mergeUrlWithLocale = (locale: string, url: string) => `/${locale}${url}`
