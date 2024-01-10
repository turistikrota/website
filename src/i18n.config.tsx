import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'tr'] as const

export const pathnames = {
  '/': {
    en: '/en',
    tr: '/tr',
  },
  '/contracts/privacy-notice': {
    en: '/contracts/privacy-notice',
    tr: '/sozlesmeler/gizlilik-bildirimi',
  },
  '/contracts/terms-of-use': {
    en: '/contracts/terms-of-use',
    tr: '/sozlesmeler/kullanim-kosullari',
  },
  '/contracts/cookies': {
    en: '/contracts/cookies',
    tr: '/sozlesmeler/cerezler',
  },
  '/contracts/privacy-and-protection-of-personal-data': {
    en: '/contracts/privacy-and-protection-of-personal-data',
    tr: '/sozlesmeler/kisisel-verilerin-korunmasi-ve-gizlilik-politikasi',
  },
  '/about-us': {
    en: '/about-us',
    tr: '/hakkimizda',
  },
} satisfies Pathnames<typeof locales>

type IPathName = {
  pathname: keyof typeof pathnames
}

type IPath = {
  root: IPathName
  contracts: {
    privacyNotice: IPathName
    termsOfUse: IPathName
    privacyAndProtectionOfPersonalData: IPathName
    cookies: IPathName
  }
  aboutUs: IPathName
}

export const Paths: IPath = {
  root: {
    pathname: '/',
  },
  contracts: {
    privacyNotice: {
      pathname: '/contracts/privacy-notice',
    },
    termsOfUse: {
      pathname: '/contracts/terms-of-use',
    },
    privacyAndProtectionOfPersonalData: {
      pathname: '/contracts/privacy-and-protection-of-personal-data',
    },
    cookies: {
      pathname: '/contracts/cookies',
    },
  },
  aboutUs: {
    pathname: '/about-us',
  },
}

export const localePrefix = 'always'

export type AppPathnames = keyof typeof pathnames
