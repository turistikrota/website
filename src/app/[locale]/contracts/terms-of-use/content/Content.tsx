'use client'

import { Props as MDXProps } from '@mdx-js/react/lib'
import ContentLoader from '@turistikrota/ui/loader'
import { useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { ContractContentProps } from '~/components/contract/ContractContent'

const TrContent = dynamic(() => import('./terms-of-use.tr.md'), {
  ssr: false,
  loading: () => <ContentLoader />,
})
const EnContent = dynamic(() => import('./terms-of-use.en.md'), {
  ssr: false,
  loading: () => <ContentLoader />,
})

const Contents: Record<string, React.ComponentType<MDXProps>> = {
  tr: TrContent as React.ComponentType<MDXProps>,
  en: EnContent as React.ComponentType<MDXProps>,
}

export default function TermsOfUseContent() {
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
