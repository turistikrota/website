import { Locales } from '@turistikrota/ui/types'

export enum Sites {
  Auth = 'auth',
  Places = 'places',
  Listing = 'listing',
  Business = 'businesses',
  Support = 'support',
  Booking = 'booking',
  Tech = 'tech',
  Help = 'help',
  Account = 'account',
}

type SiteUrl = {
  [key in Locales]: string
}

export const SiteUrls: Record<Sites, SiteUrl> = {
  [Sites.Auth]: {
    tr: process.env.NEXT_PUBLIC_SITE_AUTH_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_AUTH_EN_URL!,
  },
  [Sites.Listing]: {
    tr: process.env.NEXT_PUBLIC_SITE_LISTING_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_LISTING_EN_URL!,
  },
  [Sites.Account]: {
    tr: process.env.NEXT_PUBLIC_SITE_ACCOUNT_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_ACCOUNT_EN_URL!,
  },
  [Sites.Places]: {
    tr: process.env.NEXT_PUBLIC_SITE_PLACES_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_PLACES_EN_URL!,
  },
  [Sites.Business]: {
    tr: process.env.NEXT_PUBLIC_SITE_BUSINESS_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_BUSINESS_EN_URL!,
  },
  [Sites.Support]: {
    tr: process.env.NEXT_PUBLIC_SITE_SUPPORT_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_SUPPORT_EN_URL!,
  },
  [Sites.Booking]: {
    tr: process.env.NEXT_PUBLIC_SITE_BOOKING_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_BOOKING_EN_URL!,
  },
  [Sites.Tech]: {
    tr: process.env.NEXT_PUBLIC_SITE_TECH_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_TECH_EN_URL!,
  },
  [Sites.Help]: {
    tr: process.env.NEXT_PUBLIC_SITE_HELP_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_HELP_EN_URL!,
  },
}
