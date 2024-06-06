import { useTranslations } from 'next-intl'

export default function RezFeatureSection() {
  const t = useTranslations('rez.stats')
  return (
    <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='grid grid-cols-2 gap-6 text-center sm:gap-12 lg:grid-cols-3 lg:gap-8'>
        <div>
          <h4 className='text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-xl'>
            {t('accuracy.title')}
          </h4>
          <p className='mt-2 text-4xl font-bold text-primary-600 sm:mt-3 sm:text-6xl'>99.95%</p>
          <p className='mt-1 text-gray-500 dark:text-neutral-500'>{t('accuracy.description')}</p>
        </div>
        <div>
          <h4 className='text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-xl'>
            {t('registered-businesses.title')}
          </h4>
          <p className='mt-2 text-4xl font-bold text-primary-600 sm:mt-3 sm:text-6xl'>2,000+</p>
          <p className='mt-1 text-gray-500 dark:text-neutral-500'>{t('registered-businesses.description')}</p>
        </div>

        <div>
          <h4 className='text-lg font-semibold text-gray-800 dark:text-neutral-200 sm:text-xl'>
            {t('happy-customers.title')}
          </h4>
          <p className='mt-2 text-4xl font-bold text-primary-600 sm:mt-3 sm:text-6xl'>97%</p>
          <p className='mt-1 text-gray-500 dark:text-neutral-500'>{t('happy-customers.description')}</p>
        </div>
      </div>
    </div>
  )
}
