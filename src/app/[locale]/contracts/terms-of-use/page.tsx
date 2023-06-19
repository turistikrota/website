import { type Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { generateDefaultMetadata } from "~/utils/meta";
import TermsOfUseContent from "./content/Content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contracts.terms-of-use");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").contracts.terms,
      en: getStaticRoute("en").contracts.terms,
    },
  });
}

export default function TermsOfUse() {
  return <TermsOfUseContent />;
}
