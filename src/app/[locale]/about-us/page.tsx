import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { StaticRoutes } from "~/static/pages";
import { generateDefaultMetadata } from "~/utils/meta";
import HeadSection from "./components/HeadSection";
import OurFeatureSection from "./components/OurFeatureSection";
import OurTeamSection from "./components/OurTeamSection";
import OurVisionSection from "./components/OurVisionSection";
import TimelineSection from "./components/TimelineSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aboutUs.meta");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: StaticRoutes.en.AboutUs,
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
