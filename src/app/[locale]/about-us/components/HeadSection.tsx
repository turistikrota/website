import { useTranslations } from 'next-intl'

export default function HeadSection() {
  const t = useTranslations('aboutUs.head')
  return (
    <section className='container mx-auto my-24 px-6'>
      <div className='mb-32 text-center text-gray-800 dark:text-gray-400'>
        <div className='flex justify-center'>
          <div className='max-w-[800px]'>
            <h2 className='mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
              {t('title')} <br />
              <span className='text-primary-600 dark:text-primary-400'>{t('subtitle')}</span>
            </h2>
            <p className='text-lg text-gray-500 dark:text-gray-400'>{t('text')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
