import { i18n } from "~/i18n-config";
import "~/app/globals.css";
import "boxicons/css/boxicons.min.css";
import Script from "next/script";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
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
