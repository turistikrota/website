import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { StaticRoutes } from "~/static/pages";
import { generateDefaultMetadata } from "~/utils/meta";
import AccountMenu from "./components/AccountMenu";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("account.detail.meta");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: StaticRoutes.en.AccountProfile,
  });
}

export default function AccountDetail() {
  return (
    <section className="sm:max-w-md mx-auto min-h-screen h-full flex items-start justify-center">
      <AccountMenu isDetail={false} />
    </section>
  );
}
