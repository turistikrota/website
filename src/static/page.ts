import { SiteUrls } from './site'

export type RouteType = {
  aboutUs: string
  places: string
  owners: string
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
  }
}

export type Locales = 'en' | 'tr'

const Routes: Record<Locales, RouteType> = {
  tr: {
    aboutUs: '/hakkimizda',
    owners: `${SiteUrls.owners.tr}/detay/menu`,
    account: {
      details: `${SiteUrls.account.tr}/detay/menu`,
      select: SiteUrls.account.tr,
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
    },
  },
  en: {
    aboutUs: '/about-us',
    owners: `${SiteUrls.owners.en}/detail/menu`,
    account: {
      details: `${SiteUrls.account.en}/detail/menu`,
      select: SiteUrls.account.en,
    },
    auth: {
      default: SiteUrls.auth.en,
    },
    comingSoon: '/coming-soon',
    contracts: {
      terms: '/contracts/terms-of-use',
      privacyNotify: '/contracts/privacy-notice',
      privacy: '/contracts/privacy-and-protection-of-personal-data',
    },
    places: SiteUrls.places.en,
  },
}

export const getStaticRoute = (locale: string) => {
  return Routes[locale as Locales]
}

export const mergeUrlWithLocale = (locale: string, url: string) => `/${locale}${url}`
