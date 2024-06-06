import { useTranslations } from 'next-intl'

export default function RezIntegrationSection() {
  const t = useTranslations('rez.integration')
  return (
    <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
      <div className='grid items-center gap-12 sm:grid-cols-2 lg:grid-cols-4'>
        <div>
          <div className='relative flex h-12 w-12 items-center justify-center rounded-xl bg-white before:absolute before:-inset-px before:-z-[1] before:rounded-xl before:bg-gradient-to-br before:from-primary-600 before:via-transparent before:to-secondary-600 dark:bg-neutral-900'>
            <i className='bx bx-sm bx-calendar h-6 w-6 flex-shrink-0 text-primary-600 dark:text-primary-500'></i>
          </div>
          <div className='mt-5'>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{t('whatsapp.title')}</h3>
            <p className='mt-1 text-gray-600 dark:text-neutral-400'>{t('whatsapp.description')}</p>
          </div>
        </div>
        <div>
          <div className='relative flex h-12 w-12 items-center justify-center rounded-xl bg-white before:absolute before:-inset-px before:-z-[1] before:rounded-xl before:bg-gradient-to-br before:from-primary-600 before:via-transparent before:to-secondary-600 dark:bg-neutral-900'>
            <i className='bx bx-sm bxl-whatsapp h-6 w-6 flex-shrink-0 text-primary-600 dark:text-primary-500'></i>
          </div>
          <div className='mt-5'>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{t('calendar.title')}</h3>
            <p className='mt-1 text-gray-600 dark:text-neutral-400'>{t('calendar.description')}</p>
          </div>
        </div>
        <div>
          <div className='relative flex h-12 w-12 items-center justify-center rounded-xl bg-white before:absolute before:-inset-px before:-z-[1] before:rounded-xl before:bg-gradient-to-br before:from-primary-600 before:via-transparent before:to-secondary-600 dark:bg-neutral-900'>
            <i className='bx bx-sm bxs-bank h-6 w-6 flex-shrink-0 text-primary-600 dark:text-primary-500'></i>
          </div>
          <div className='mt-5'>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{t('custom-pos.title')}</h3>
            <p className='mt-1 text-gray-600 dark:text-neutral-400'>{t('custom-pos.description')}</p>
          </div>
        </div>
        <div>
          <div className='relative flex h-12 w-12 items-center justify-center rounded-xl bg-white before:absolute before:-inset-px before:-z-[1] before:rounded-xl before:bg-gradient-to-br before:from-primary-600 before:via-transparent before:to-secondary-600 dark:bg-neutral-900'>
            <svg
              className='h-6 w-6 flex-shrink-0 text-primary-600 dark:text-primary-500'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z' />
              <path d='M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1' />
            </svg>
          </div>
          <div className='mt-5'>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>{t('social.title')}</h3>
            <p className='mt-1 text-gray-600 dark:text-neutral-400'>{t('social.description')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
