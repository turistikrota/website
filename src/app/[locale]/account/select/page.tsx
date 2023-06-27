import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import ConfigurationLayout from "~/app/layouts/configuration";
import AccountSelection from "~/features/account/AccountSelection";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, "account.select.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").account.select,
      en: getStaticRoute("en").account.select,
    },
  });
}

export default function AccountSelect() {
  return (
    <ConfigurationLayout>
      <AccountSelection />
    </ConfigurationLayout>
  );
}
