import { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "./components/WaitlistForm";

export async function generateMetadata(): Promise<Metadata> {
  return {};
}

export default async function Home() {
  const t = await getTranslations("waitlist");
  const locale = useLocale();
  const messages = (await import(`~/messages/${locale}.json`))
  .default;
  // @ts-ignore
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <div>
                      <span className="text-secondary-400 dark:text-secondary-500">
                        {t('title1')}
                      </span>
                      <span className="text-primary-200 dark:text-primary-300">
                        {t('title2')}
                      </span>
                    </div>
                    <span className="block">
                      {t('subtitle')}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {t('description')}
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <NextIntlClientProvider locale={locale} messages={messages}>
                    <WaitlistForm />
                    </NextIntlClientProvider>
                  </div>
                </div>
              </div>
              <div className="mt-12 hidden lg:flex justify-center">
                <Image
                  src={t('img')}
                  alt={t('img_alt')}
                  width={300}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center space-x-6">
            <Link
              href="https://twitter.com/turistikrota"
              title="Turistikrota Twitter"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Twitter</span>
              <i className="bx bx-sm bxl-twitter"></i>
            </Link>
            <Link
              href="https://instagram.com/turistikrota"
              title="Turistikrota Instagram"
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
            >
              <span className="sr-only">Instagram</span>
              <i className="bx bx-sm bxl-instagram"></i>
            </Link>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            © {new Date().getFullYear()} {t('copyright')}
          </p>
        </div>
      </footer>
    </>
  );
}
