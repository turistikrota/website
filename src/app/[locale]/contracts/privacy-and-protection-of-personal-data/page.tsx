import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { generateDefaultMetadata } from "~/utils/meta";
import PrivacyAndProtectionContent from "./content/Content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contracts.privacy-and-protection");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").contracts.privacy,
      en: getStaticRoute("en").contracts.privacy,
    },
  });
}

export default function PrivacyAndProtectionPage() {
  return <PrivacyAndProtectionContent />;
}
