import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import MaintenanceAlert from "~/components/maintenance/MaintenanceAlert";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("account.details.notifications.meta");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: "/account/details/notifications",
  });
}

export default function NotificationsAccount() {
  return (
    <div className="p-4">
      <MaintenanceAlert />
    </div>
  );
}
