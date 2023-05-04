import "boxicons/css/boxicons.min.css";
import { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getTranslations } from 'next-intl/server';
import Script from "next/script";
import "~/app/globals.css";

type Props = {
  children: React.ReactNode;
}

export async function generateMetadata() : Promise<Metadata> {
  const t = await getTranslations("base");
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    applicationName: "Turistikrota",
    generator: "Turistikrota",
    referrer: "origin-when-cross-origin",
    icons: [
      {
        rel: "icon",
        url: "https://cdn.turistikrota.com/logo/mini.ico",
      },
    ],
    authors: [
      {
        name: "Turistikrota",
        url: "https://turistikrota.com",
      },
    ],
    metadataBase: new URL("https://turistikrota.com"),
    alternates: {
      languages: {
        en: "/en",
        tr: "/tr",
      }
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      }
    },
    viewport: "width=device-width, initial-scale=1",
  }
}

export default async function Root({
  children
}:Props) {
  const locale = useLocale();
  const messages = (await import(`~/messages/${locale}.json`))
  .default;
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
        </NextIntlClientProvider>
        <Script
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-LX3MT1E36B"
        ></Script>
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LX3MT1E36B');
          `}
        </Script>
      </body>
    </html>
  );
}
