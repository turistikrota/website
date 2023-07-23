import ErrorPage from '@turistikrota/ui/pages/error'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslator } from 'next-intl/server'
import Link from 'next/link'
import { LayoutProps } from '~/types/base'

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, 'notfound')
  return {
    title: t('meta.title'),
    robots: {
      index: false,
    },
  }
}

export default function NotFoundPage() {
  const t = useTranslations('notfound')
  return (
    <ErrorPage
      code={404}
      title={t('title')}
      subtitle={t('subtitle')}
      button={
        <Link
          href={'/'}
          className='inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4'
        >
          {t('button')}
        </Link>
      }
    />
  )
}
