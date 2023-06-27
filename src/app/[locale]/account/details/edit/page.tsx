import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";
import AccountEditDetailProvider from "./components/AccountEditDetailProvider";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, "account.details.edit.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").account.details.edit,
      en: getStaticRoute("en").account.details.edit,
    },
  });
}

export default function EditAccount() {
  return <AccountEditDetailProvider />;
}
