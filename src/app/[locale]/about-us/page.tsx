import HeadSection from "./components/HeadSection"
import MissionVisionSection from "./components/MissionVisionSection"
import OurFeatureSection from "./components/OurFeatureSection"
import OurMissionSection from "./components/OurMissionSection"
import OurTeamSection from "./components/OurTeamSection"
import OurVisionSection from "./components/OurVisionSection"
import TimelineSection from "./components/TimelineSection"

export default function AboutUs() {
    return <>
        <HeadSection></HeadSection>
        <OurFeatureSection></OurFeatureSection>
        <OurTeamSection></OurTeamSection>
            <TimelineSection></TimelineSection>
            <MissionVisionSection>
                <OurMissionSection></OurMissionSection>
                <OurVisionSection></OurVisionSection>
                </MissionVisionSection>
    </>
}