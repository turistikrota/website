import { useTranslations } from 'next-intl'

export default function HeadSection() {
  const t = useTranslations('aboutUs.head')
  return (
    <section className='container my-24 px-6 mx-auto'>
      <div className='mb-32 text-gray-800 dark:text-gray-400 text-center'>
        <div className='flex justify-center'>
          <div className='max-w-[800px]'>
            <h2 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
              {t('title')} <br />
              <span className='text-primary-600 dark:text-primary-400'>{t('subtitle')}</span>
            </h2>
            <p className='text-gray-500 dark:text-gray-400 text-lg'>{t('text')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
