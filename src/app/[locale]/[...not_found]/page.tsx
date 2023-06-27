import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslator } from "next-intl/server";
import Link from "next/link";
import { LayoutProps } from "~/types/base";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, "notfound");
  return {
    title: t("meta.title"),
    robots: {
      index: false,
    },
  };
}

export default function NotFoundPage() {
  const t = useTranslations("notfound");
  return (
    <main className="relative overflow-hidden h-full flex items-center justify-center">
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-secondary-600 dark:text-secondary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {t("title")}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {t("subtitle")}
          </p>
          <Link
            href={"/"}
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            {t("button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
