import { useTranslations } from 'next-intl'

export default function TimelineSection() {
  const t = useTranslations('aboutUs.timeline')

  return (
    <section className='container mx-auto my-24 px-6'>
      <div className='relative mt-24'>
        <h2 className='mb-12 text-center text-3xl font-bold'>{t('title')}</h2>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8'>
          <div className='flex w-full items-center justify-center'>
            <div className='z-20 flex h-12 w-12 items-center justify-center rounded-full bg-secondary'>
              <i className='bx bx-sm bx-flag text-white'></i>
            </div>
          </div>

          <div className='flex w-full items-center justify-center'>
            <div className='z-20 flex h-12 w-12 items-center justify-center rounded-full bg-secondary'>
              <i className='bx bx-sm bx-clipboard text-white'></i>
            </div>
          </div>

          <div className='flex w-full items-center justify-center'>
            <div className='z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-secondary sm:flex'>
              <i className='bx bx-sm bxs-devices text-white'></i>
            </div>
          </div>
        </div>
        <hr className='absolute top-2/4 z-10 w-full bg-gray-200 dark:bg-gray-500' />
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8'>
        <div>
          <h3 className='mt-6 text-center text-xl font-semibold leading-5 text-primary-800 dark:text-primary lg:text-2xl lg:leading-6'>
            {t('founding.title')}
          </h3>
          <p className='mt-6 text-center text-base font-normal leading-6 text-gray-600 dark:text-gray-400'>
            {t('founding.text')}
          </p>
        </div>
        <div>
          <h3 className='mt-6 text-center text-xl font-semibold leading-5 text-primary-800 dark:text-primary lg:text-2xl lg:leading-6'>
            {t('development.title')}
          </h3>
          <p className='mt-6 text-center text-base font-normal leading-6 text-gray-600 dark:text-gray-400'>
            {t('development.text')}
          </p>
        </div>
        <div className='hidden sm:block'>
          <h3 className='mt-6 text-center text-xl font-semibold leading-5 text-primary-800 dark:text-primary lg:text-2xl lg:leading-6'>
            {t('launch.title')}
          </h3>
          <p className='mt-6 text-center text-base font-normal leading-6 text-gray-600 dark:text-gray-400'>
            {t('launch.text')}
          </p>
        </div>
      </div>
      <div className='relative mt-8 block sm:hidden'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8'>
          <div className='flex w-full items-center justify-center'>
            <div className='z-20 flex h-12 w-12 items-center justify-center rounded-full bg-secondary sm:hidden'>
              <i className='bx bx-sm bxs-devices text-white'></i>
            </div>
          </div>
        </div>
        <hr className='absolute -top-1/4 z-10 w-full bg-gray-200 dark:bg-gray-500' />
      </div>
      <div className='grid grid-cols-2 gap-4 sm:hidden sm:grid-cols-3 sm:gap-8'>
        <div>
          <h3 className='mt-6 text-center text-xl font-semibold leading-5 text-primary-800 dark:text-primary lg:text-2xl lg:leading-6'>
            {t('launch.title')}
          </h3>
          <p className='mt-6 text-center text-base font-normal leading-6 text-gray-600 dark:text-gray-400'>
            {t('launch.text')}
          </p>
        </div>
      </div>
    </section>
  )
}
