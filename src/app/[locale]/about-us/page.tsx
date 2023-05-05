import { Metadata } from "next"
import { getLocale, getTranslations } from "next-intl/server"
import HeadSection from "./components/HeadSection"
import OurFeatureSection from "./components/OurFeatureSection"
import OurTeamSection from "./components/OurTeamSection"
import OurVisionSection from "./components/OurVisionSection"
import TimelineSection from "./components/TimelineSection"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("aboutUs.meta");
    const locale = getLocale();

    let url : string = "";
    if (locale === "tr") {
        url = "/tr/hakkimizda";
    }else {
        url = "/en/about-us";
    }

    return {
        title: t("title"),
        description: t("description"),
        keywords: t("keywords"),
        alternates: {
            languages: {
                "tr": "/tr/hakkimizda",
                "en": "/en/about-us"
            }
        },
        openGraph: {
            title: t("title"),
            description: t("description"),
            type: "website",
            url: `https://turistikrota.com${url}`,
            images: [
                {
                    url: "https://cdn.turistikrota.com/logo/vertical_500x500.png"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            site: "@turistikrota",
            creator: "@turistikrota",
            title: t("title"),
            description: t("description"),
            images: [
                {
                    url: "https://cdn.turistikrota.com/logo/vertical_500x500.png"
                }
            ],
        }
    };
  }

export default function AboutUs() {
    return <>
        <HeadSection></HeadSection>
        <OurFeatureSection></OurFeatureSection>
        <OurTeamSection></OurTeamSection>
        <TimelineSection></TimelineSection>
        <OurVisionSection></OurVisionSection>
    </>
}