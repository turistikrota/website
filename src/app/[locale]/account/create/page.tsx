import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import ConfigurationLayout from "~/app/layouts/configuration";
import AccountCreateForm from "~/features/account/AccountCreateForm";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("account.create.meta");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: "/account/create",
  });
}

export default function AccountCreate() {
  return (
    <ConfigurationLayout>
      <AccountCreateForm />
    </ConfigurationLayout>
  );
}
