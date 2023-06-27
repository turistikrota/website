import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";
import AccountMenu from "./components/AccountMenu";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, "account.detail.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").account.details.default,
      en: getStaticRoute("en").account.details.default,
    },
  });
}

export default function AccountDetail() {
  return (
    <section className="sm:max-w-md mx-auto min-h-screen h-full flex items-start justify-center">
      <AccountMenu isDetail={false} />
    </section>
  );
}
