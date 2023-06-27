import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import MaintenanceAlert from "~/components/maintenance/MaintenanceAlert";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, "account.details.vip.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").account.details.vip,
      en: getStaticRoute("en").account.details.vip,
    },
  });
}

export default function VipAccount() {
  return (
    <div className="p-4 lg:pl-0 max-w-4xl mx-auto">
      <MaintenanceAlert />
    </div>
  );
}
