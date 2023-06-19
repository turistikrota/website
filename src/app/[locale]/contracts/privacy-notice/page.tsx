import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { generateDefaultMetadata } from "~/utils/meta";
import PrivacyNoticeContent from "./content/Content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contracts.privacy-notification");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").contracts.privacyNotify,
      en: getStaticRoute("en").contracts.privacyNotify,
    },
  });
}

export default function PrivacyNoticePage() {
  return <PrivacyNoticeContent />;
}
