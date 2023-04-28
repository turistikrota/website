import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "~/app/[lang]/components/WaitlistForm";
import { getDictionary } from "~/get-dictionary";
import { Locale } from "~/i18n-config";

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.waitlist.meta.title,
    description: dictionary.waitlist.meta.description,
    keywords: dictionary.waitlist.meta.keywords,
    applicationName: "Turistikrota",
    generator: "Turistikrota",
    referrer: "origin-when-cross-origin",
    icons: [
      {
        rel: "icon",
        url: "https://cdn.turistikrota.com/default-logo-vertical.ico",
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
  };
}

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
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
                        {dictionary.waitlist.title1}
                      </span>
                      <span className="text-primary-200 dark:text-primary-300">
                        {dictionary.waitlist.title2}
                      </span>
                    </div>
                    <span className="block">
                      {dictionary.waitlist.subtitle}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    {dictionary.waitlist.description}
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <WaitlistForm
                      label={dictionary.waitlist.email}
                      placeholder={dictionary.waitlist.enter_email}
                      submit={dictionary.waitlist.join_waitlist}
                      emailInvalid={dictionary.waitlist.email_invalid}
                      emailRequired={dictionary.waitlist.email_required}
                      error={dictionary.waitlist.messages.error}
                      success={dictionary.waitlist.messages.success}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 hidden lg:block">
                <Image
                  src={dictionary.waitlist.img}
                  alt={dictionary.waitlist.img_alt}
                  width={500}
                  height={500}
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
            © {new Date().getFullYear()} {dictionary.copyright.text}
          </p>
        </div>
      </footer>
    </>
  );
}
