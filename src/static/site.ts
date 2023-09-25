import { Locales } from '@turistikrota/ui/types'

export enum Sites {
  Account = 'account',
  Auth = 'auth',
  Places = 'places',
  Owner = 'owners',
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
  [Sites.Owner]: {
    tr: process.env.NEXT_PUBLIC_SITE_OWNER_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_OWNER_EN_URL!,
  },
}
