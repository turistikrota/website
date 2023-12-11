import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { getStaticRoute } from '~/static/page'
import { LayoutProps } from '~/types/base'
import { generateDefaultMetadata } from '~/utils/meta'
import PrivacyAndProtectionContent from './content/Content'

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contracts.privacy-and-protection' })
  return generateDefaultMetadata(locale, {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    page: {
      tr: getStaticRoute('tr').contracts.privacy,
      en: getStaticRoute('en').contracts.privacy,
    },
  })
}

export default function PrivacyAndProtectionPage() {
  return <PrivacyAndProtectionContent />
}
