import '@turistikrota/fonts/verdana.css'
import '@turistikrota/ui/assets/config.css'
import '@turistikrota/ui/assets/default.css'
import 'boxicons/css/boxicons.min.css'
import { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Arimo } from 'next/font/google'
import { cookies, headers } from 'next/headers'
import Script from 'next/script'
import { userAgent } from 'next/server'
import 'sspin/dist/index.css'
import '~/app/globals.css'
import CookieModal from '~/components/cookies/CookieModal'
import PwaHead from '~/components/pwa/PwaHead'
import { getMessages } from '~/i18n'
import ReduxProvider from '~/store/provider'
import { LayoutProps } from '~/types/base'

type Props = LayoutProps

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'base' })
  const cookie = cookies().get('cookie-consent')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    applicationName: 'Turistikrota',
    generator: 'Turistikrota',
    referrer: 'origin-when-cross-origin',
    icons: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
    authors: [
      {
        name: 'Turistikrota',
        url: 'https://turistikrota.com',
      },
    ],
    metadataBase: new URL('https://turistikrota.com'),
    alternates: {
      languages: {
        en: '/en',
        tr: '/tr',
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      url: 'https://turistikrota.com',
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
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: 'https://s3.turistikrota.com/logo/vertical_500x500.png',
        },
      ],
    },
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  colorScheme: 'light dark',
}

const arimo = Arimo({
  subsets: ['latin-ext'],
  display: 'swap',
  preload: true,
})

export default async function Root({ params: { locale }, children }: React.PropsWithChildren<Props>) {
  const messages = await getMessages(locale)
  if (!['en', 'tr'].includes(locale)) {
    unstable_setRequestLocale('tr')
  }
  const { device } = userAgent({ headers: headers() })
  const consent = cookies().get('cookie-consent')
  return (
    <html lang={locale} className={arimo.className}>
      <head>
        <meta httpEquiv='Permissions-Policy' content='interest-cohort=()' />
        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />
        {device.type === 'mobile' && (
          <link
            rel='preload'
            as='image'
            href='https://s3.turistikrota.com/building/maldives.jpg'
            fetchPriority='high'
          />
        )}
        {device.type !== 'mobile' && (
          <link
            rel='preload'
            as='image'
            href='https://s3.turistikrota.com/building/villa-landspace.jpg'
            fetchPriority='high'
          />
        )}
        <PwaHead locale={locale} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>{children}</ReduxProvider>
          {consent?.value !== 'true' && <CookieModal />}
        </NextIntlClientProvider>
        <Script async={true} src='https://www.googletagmanager.com/gtag/js?id=G-LX3MT1E36B'></Script>
        <Script id='google-analytics-config' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LX3MT1E36B');
          `}
        </Script>
      </body>
    </html>
  )
}
