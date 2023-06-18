import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import ConfigurationLayout from "~/app/layouts/configuration";
import AccountSelection from "~/features/account/AccountSelection";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("account.select.meta");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: "/account/select",
  });
}

export default function AccountSelect() {
  return (
    <ConfigurationLayout>
      <AccountSelection />
    </ConfigurationLayout>
  );
}
