import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";
import PrivacyNoticeContent from "./content/Content";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, "contracts.privacy-notification");
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
