import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MaintenanceAlert from "~/components/maintenance/MaintenanceAlert";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslations("account.details.security.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").account.details.security,
      en: getStaticRoute("en").account.details.security,
    },
  });
}

export default function SecurityAccount() {
  return (
    <div className="p-4 lg:pl-0 max-w-4xl mx-auto">
      <MaintenanceAlert />
    </div>
  );
}
