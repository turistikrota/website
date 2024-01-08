'use client'

import ContentLoader from '@turistikrota/ui/loader'
import type { MDXProps } from 'mdx/types'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { ContractContentProps } from '~/components/contract/ContractContent'

const TrContent = dynamic(() => import('./privacy-and-policy.tr.md'), {
  ssr: false,
  loading: () => <ContentLoader />,
})
const EnContent = dynamic(() => import('./privacy-and-policy.en.md'), {
  ssr: false,
  loading: () => <ContentLoader />,
})

const Contents: Record<string, React.ComponentType<MDXProps>> = {
  tr: TrContent,
  en: EnContent,
}

export default function PrivacyAndProtectionContent() {
  const locale = useLocale()
  const ContractContent = Contents[locale]
  return (
    <ContractContent
      components={{
        ...ContractContentProps.components,
      }}
    />
  )
}
