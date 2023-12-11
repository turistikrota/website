import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'
import * as config from './i18n.config'

export const {
  Link: I18nLink,
  redirect,
  usePathname,
  useRouter,
} = createLocalizedPathnamesNavigation({
  locales: config.locales,
  pathnames: config.pathnames,
  localePrefix: config.localePrefix,
})
