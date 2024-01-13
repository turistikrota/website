import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getStaticRoute } from '~/static/page'
import { LayoutProps } from '~/types/base'
import { generateDefaultMetadata } from '~/utils/meta'
import CountSection from './components/CountSection'
import OurTeamSection from './components/OurTeamSection'
import OurVisionSection from './components/OurVisionSection'
import TitleSection from './components/TitleSection'
import WhyPerfectSection from './components/WhyPerfectSection'

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'aboutUs.meta' })
  return generateDefaultMetadata(locale, {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    page: {
      tr: getStaticRoute('tr').aboutUs,
      en: getStaticRoute('en').aboutUs,
    },
  })
}

export default function AboutUs() {
  return (
    <>
      <TitleSection />
      <CountSection />
      <OurVisionSection />
      <WhyPerfectSection />
      <OurTeamSection />
    </>
  )
}
