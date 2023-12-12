import Button from '@turistikrota/ui/button'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'
import { getStaticRoute } from '~/static/page'

const HomeBusinessSection: FC = () => {
  const t = useTranslations('home.business')
  const locale = useLocale()
  return (
    <section className='container mx-auto p-4 xl:p-0'>
      <div
        className='grid grid-cols-12 rounded-md bg-cover bg-center bg-no-repeat px-10 py-20'
        style={{
          backgroundImage: 'url(https://s3.turistikrota.com/site/banners/business.jpg)',
        }}
      >
        <div className='col-span-12 md:col-span-6 lg:col-span-4'>
          <h1 className='text-center text-4xl font-semibold text-white md:text-left'>{t('title')}</h1>
          <p className='mb-4 mt-2 text-center text-white md:text-left'>{t('subtitle')}</p>
          <Link href={getStaticRoute(locale).businesses}>
            <Button className='flex items-center justify-center gap-2'>
              <i className='bx bx-link-external text-lg'></i>
              {t('button')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeBusinessSection
