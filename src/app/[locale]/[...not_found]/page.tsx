import ErrorPage from '@turistikrota/ui/pages/error'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { LayoutProps } from '~/types/base'

export async function generateMetadata({ params: { locale } }: LayoutProps): Promise<Metadata> {
  const t = await getTranslations('notfound')
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
          className='my-4 inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
        >
          {t('button')}
        </Link>
      }
    />
  )
}
