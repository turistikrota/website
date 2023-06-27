import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";
import HeadSection from "./components/HeadSection";
import OurFeatureSection from "./components/OurFeatureSection";
import OurTeamSection from "./components/OurTeamSection";
import OurVisionSection from "./components/OurVisionSection";
import TimelineSection from "./components/TimelineSection";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslations("aboutUs.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").aboutUs,
      en: getStaticRoute("en").aboutUs,
    },
  });
}

export default function AboutUs() {
  return (
    <>
      <HeadSection></HeadSection>
      <OurFeatureSection></OurFeatureSection>
      <OurTeamSection></OurTeamSection>
      <TimelineSection></TimelineSection>
      <OurVisionSection></OurVisionSection>
    </>
  );
}
