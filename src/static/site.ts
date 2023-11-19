import { Locales } from '@turistikrota/ui/types'

export enum Sites {
  Account = 'account',
  Auth = 'auth',
  Places = 'places',
  Business = 'businesses',
}

type SiteUrl = {
  [key in Locales]: string
}

export const SiteUrls: Record<Sites, SiteUrl> = {
  [Sites.Account]: {
    tr: process.env.NEXT_PUBLIC_SITE_ACCOUNT_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_ACCOUNT_EN_URL!,
  },
  [Sites.Auth]: {
    tr: process.env.NEXT_PUBLIC_SITE_AUTH_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_AUTH_EN_URL!,
  },
  [Sites.Places]: {
    tr: process.env.NEXT_PUBLIC_SITE_PLACES_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_PLACES_EN_URL!,
  },
  [Sites.Business]: {
    tr: process.env.NEXT_PUBLIC_SITE_BUSINESS_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_BUSINESS_EN_URL!,
  },
}
