'use client'

import { Props as MDXProps } from '@mdx-js/react/lib'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { ContractContentProps } from '~/components/contract/ContractContent'
import ContentLoader from '@turistikrota/ui/loader'

const TrContent = dynamic(() => import('./privacy-notice.tr.md'), {
  ssr: false,
  loading: () => <ContentLoader />,
})
const EnContent = dynamic(() => import('./privacy-notice.en.md'), {
  ssr: false,
  loading: () => <ContentLoader />,
})

const Contents: Record<string, React.ComponentType<MDXProps>> = {
  tr: TrContent as React.ComponentType<MDXProps>,
  en: EnContent as React.ComponentType<MDXProps>,
}

export default function PrivacyNoticeContent() {
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
