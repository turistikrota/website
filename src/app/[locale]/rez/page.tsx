import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getStaticRoute } from '~/static/page'
import { LayoutProps } from '~/types/base'
import { generateDefaultMetadata } from '~/utils/meta'
import RezFeatureSection from './components/RezFeatureSection'
import RezHeadSection from './components/RezHeadSection'
import RezIntegrationSection from './components/RezIntegrationSection'
import RezPricingSection from './components/RezPricingSection'

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'rez.meta' })
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

export default function Rez() {
  return (
    <>
      <RezHeadSection />
      <RezIntegrationSection />
      <RezFeatureSection />
      <RezPricingSection />
    </>
  )
}
