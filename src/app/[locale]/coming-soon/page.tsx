import { getTranslator } from 'next-intl/server'
import { LayoutProps } from '~/types/base'
import WaitlistForm from '../components/WaitlistForm'
import Image from 'next/image'

export default async function ComingSoon({ params: { locale } }: LayoutProps) {
  const t = await getTranslator(locale, 'waitlist')
  return (
    <>
      <div className='relative overflow-hidden'>
        <div className='pb-14 mt-32 md:mt-0 lg:overflow-hidden lg:pb-24'>
          <div className='mx-auto max-w-5xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left'>
                <div className='py-16 px-6'>
                  <h1 className='mt-4 text-4xl font-bold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
                    <div>
                      <span className='text-secondary-400 dark:text-secondary-500'>{t('title1')}</span>
                      &nbsp;
                      <span className='text-primary-400 dark:text-primary-300'>{t('title2')}</span>
                    </div>
                    <span className='block'>{t('subtitle')}</span>
                  </h1>
                  <p className='mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    {t('description')}
                  </p>
                  <div className='mt-10 sm:mt-12'>
                    <WaitlistForm />
                  </div>
                </div>
              </div>
              <div className='mt-12 hidden lg:flex justify-center'>
                <Image src={t('img')} alt={t('img_alt')} width={300} height={200} priority={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
