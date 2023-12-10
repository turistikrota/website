import { type Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getStaticRoute } from '~/static/page'
import { LayoutProps } from '~/types/base'
import { generateDefaultMetadata } from '~/utils/meta'
import TermsOfUseContent from './content/Content'

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations('contracts.terms-of-use')
  return generateDefaultMetadata(locale, {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    page: {
      tr: getStaticRoute('tr').contracts.terms,
      en: getStaticRoute('en').contracts.terms,
    },
  })
}

export default function TermsOfUse() {
  return <TermsOfUseContent />
}
