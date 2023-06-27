import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ConfigurationLayout from "~/app/layouts/configuration";
import AccountCreateForm from "~/features/account/AccountCreateForm";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslations("account.create.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").account.create,
      en: getStaticRoute("en").account.create,
    },
  });
}

export default function AccountCreate() {
  return (
    <ConfigurationLayout>
      <AccountCreateForm />
    </ConfigurationLayout>
  );
}
