import '@turistikrota/ui/assets/config.css'
import '@turistikrota/ui/assets/default.css'
import CubeEffect from '@turistikrota/ui/design/cube'
import GlassEffect from '@turistikrota/ui/design/glass'
import '@turistikrota/ui/fonts/verdana.css'
import 'boxicons/css/boxicons.min.css'
import { Metadata, Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Arimo } from 'next/font/google'
import Script from 'next/script'
import 'sspin/dist/index.css'
import '~/app/globals.css'
import PwaHead from '~/components/pwa/PwaHead'
import ReduxProvider from '~/store/provider'
import { LayoutProps } from '~/types/base'

type Props = LayoutProps

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations('base')
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
  const messages = (await import(`~/messages/${locale}.json`)).default
  return (
    <html lang={locale} className={arimo.className}>
      <head>
        <meta httpEquiv='Permissions-Policy' content='interest-cohort=()' />
        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />
        <PwaHead locale={locale} />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <GlassEffect.Fixed />
            <CubeEffect.All />
            {children}
          </ReduxProvider>
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
