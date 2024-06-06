import { useLocale, useTranslations } from 'next-intl'
import { getStaticRoute } from '~/static/page'

export default function RezAnnouncementBanner() {
  const locale = useLocale()
  const t = useTranslations('home.rez-announcement')
  return (
    <div className='absolute top-2 z-10 mx-auto w-full max-w-[85rem] px-4 pt-16 sm:px-6 lg:px-8'>
      <div className='rounded-lg bg-primary-500 p-4 text-center'>
        <p className='me-2 inline-block text-white'>{t('text')}</p>
        <a
          className='inline-flex items-center gap-x-2 rounded-full border-2 border-white px-3 py-2 text-sm font-semibold text-white hover:border-white/70 hover:text-white/70 disabled:pointer-events-none disabled:opacity-50'
          href={getStaticRoute(locale).rez}
        >
          {t('button')}
          <svg
            className='size-4 flex-shrink-0'
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
            <path d='m9 18 6-6-6-6' />
          </svg>
        </a>
      </div>
    </div>
  )
}
