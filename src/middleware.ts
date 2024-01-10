import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales, pathnames } from './i18n.config'

export default createMiddleware({
  locales: locales,
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: localePrefix,
  pathnames: pathnames,
})

export const config = {
  matcher: ['/', '/(tr|en)/:path*', '/((?!api|_next/static|public|_next/image|favicon.ico).*)/:path*'],
}
