import { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Arimo } from "next/font/google";
import { cookies } from "next/headers";
import Script from "next/script";
import "~/app/globals.css";
import { ToastListProvider, ToastProvider } from "~/components/toast/Toast";
import AuthProvider from "~/features/auth/AuthProvider";
import ReduxProvider from "~/store/provider";

type Props = {
  children: React.ReactNode;
  token: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("base");
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"),
    applicationName: "Turistikrota",
    generator: "Turistikrota",
    referrer: "origin-when-cross-origin",
    icons: [
      {
        rel: "icon",
        url: "/favicon.ico",
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
      },
    },
    colorScheme: "light dark",
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
      title: t("meta.title"),
      description: t("meta.description"),
      type: "website",
      url: "https://turistikrota.com",
      images: [
        {
          url: "https://cdn.turistikrota.com/logo/vertical_500x500.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@turistikrota",
      creator: "@turistikrota",
      title: t("meta.title"),
      description: t("meta.description"),
      images: [
        {
          url: "https://cdn.turistikrota.com/logo/vertical_500x500.png",
        },
      ],
    },
    viewport: "width=device-width, initial-scale=1",
  };
}

const arimo = Arimo({
  subsets: ["latin-ext"],
  display: "swap",
  preload: true,
});

export default async function Root({ children }: Props) {
  const locale = useLocale();
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  const messages = (await import(`~/messages/${locale}.json`)).default;
  return (
    <html lang={locale} className={arimo.className}>
      <head>
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      </head>
      <body suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <ToastListProvider>
              <ToastProvider>
                <AuthProvider token={token?.value ?? ""}>
                  {children}
                </AuthProvider>
              </ToastProvider>
            </ToastListProvider>
          </ReduxProvider>
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
