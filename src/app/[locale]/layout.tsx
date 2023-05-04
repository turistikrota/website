import "boxicons/css/boxicons.min.css";
import { Metadata } from "next";
import { useLocale } from "next-intl";
import { getTranslations } from 'next-intl/server';
import Script from "next/script";
import "~/app/globals.css";
import NotFound from "./not-found";

type Props = {
  children: React.ReactNode;
  params: {locale: string};
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

export default function Root({
  children,
  params
}:Props) {
  const locale = useLocale();

  if (params.locale !== locale) {
    NotFound();
  }
  return (
    <html lang={locale}>
      <body>
        {children}
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
