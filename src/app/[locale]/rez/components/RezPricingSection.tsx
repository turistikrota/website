import { useTranslations } from 'next-intl'
import { FC } from 'react'

type ServiceProps = {
  title: string
  available?: boolean
}

const Service: FC<ServiceProps> = ({ title, available = false }) => {
  return (
    <li className='flex space-x-3'>
      <span
        className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
          available
            ? 'bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500'
            : 'bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500'
        } `}
      >
        {available ? (
          <svg
            className='h-3.5 w-3.5 flex-shrink-0'
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
            <polyline points='20 6 9 17 4 12' />
          </svg>
        ) : (
          <svg
            className='h-3.5 w-3.5 flex-shrink-0'
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
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
          </svg>
        )}
      </span>
      <span className='text-gray-800 dark:text-neutral-200'>{title}</span>
    </li>
  )
}

export default function RezPricingSection() {
  const t = useTranslations('rez.pricing')
  return (
    <div className='overflow-hidden pb-20'>
      <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='mx-auto mb-8 max-w-2xl text-center lg:mb-14'>
          <h2 className='text-3xl font-bold text-gray-800 dark:text-neutral-200 lg:text-4xl'>{t('title')}</h2>
        </div>
        <div className='relative xl:mx-auto xl:w-10/12'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8'>
            <div>
              <div className='relative z-10 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 md:p-10'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-neutral-200'>{t('starter.title')}</h3>
                <div className='text-sm text-gray-500 dark:text-neutral-500'>{t('starter.description')}</div>

                <div className='mt-5'>
                  <span className='text-6xl font-bold text-gray-800 dark:text-neutral-200'>$49</span>
                  <span className='text-lg font-bold text-gray-800 dark:text-neutral-200'>.00</span>
                  <span className='ms-3 text-gray-500 dark:text-neutral-500'>{t('per-action')}</span>
                </div>

                <div className='mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0'>
                  <ul className='space-y-2 text-sm sm:text-base'>
                    <Service title={t('services.limitless-users')} available />
                    <Service title={t('services.whatsapp')} available />
                    <Service title={t('services.airbnb')} available />
                    <Service title={t('services.calendar')} available />
                  </ul>
                  <ul className='space-y-2 text-sm sm:text-base'>
                    <Service title={t('services.custom-pos')} />
                    <Service title={t('services.custom-reports')} />
                    <Service title={t('services.limitless-booking')} />
                    <Service title={t('services.api-access')} />
                  </ul>
                </div>

                <div className='mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0'>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-500 dark:text-neutral-500'>{t('pay-as-you-go')}</p>
                  </div>

                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                    >
                      {t('start-free')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className='relative z-10 rounded-xl border bg-white p-5 shadow-xl shadow-gray-200 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-gray-900/20 md:p-10'>
                <h3 className='text-xl font-bold text-gray-800 dark:text-neutral-200'>{t('business.title')}</h3>
                <div className='text-sm text-gray-500 dark:text-neutral-500'>{t('business.description')}</div>
                <span className='absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-neutral-800'>
                  {t('most-popular')}
                </span>

                <div className='mt-5'>
                  <span className='text-6xl font-bold text-gray-800 dark:text-neutral-200'>$99</span>
                  <span className='text-lg font-bold text-gray-800 dark:text-neutral-200'>.00</span>
                  <span className='ms-3 text-gray-500 dark:text-neutral-500'>{t('per-action')}</span>
                </div>

                <div className='mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0'>
                  <ul className='space-y-2 text-sm sm:text-base'>
                    <Service title={t('services.limitless-users')} available />
                    <Service title={t('services.whatsapp')} available />
                    <Service title={t('services.airbnb')} available />
                    <Service title={t('services.calendar')} available />
                  </ul>
                  <ul className='space-y-2 text-sm sm:text-base'>
                    <Service title={t('services.custom-pos')} available />
                    <Service title={t('services.custom-reports')} available />
                    <Service title={t('services.limitless-booking')} available />
                    <Service title={t('services.api-access')} available />
                  </ul>
                </div>

                <div className='mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0'>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-500 dark:text-neutral-500'>{t('pay-as-you-go')}</p>
                  </div>

                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50'
                    >
                      {t('start-free')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute end-0 top-0 hidden translate-x-16 translate-y-16 md:block'>
            <svg
              className='h-auto w-16 text-orange-500'
              width='121'
              height='135'
              viewBox='0 0 121 135'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164'
                stroke='currentColor'
                stroke-width='10'
                stroke-linecap='round'
              />
              <path
                d='M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5'
                stroke='currentColor'
                stroke-width='10'
                stroke-linecap='round'
              />
              <path
                d='M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874'
                stroke='currentColor'
                stroke-width='10'
                stroke-linecap='round'
              />
            </svg>
          </div>
          <div className='absolute bottom-0 start-0 hidden -translate-x-16 translate-y-16 md:block'>
            <svg
              className='h-auto w-56 text-cyan-500'
              width='347'
              height='188'
              viewBox='0 0 347 188'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426'
                stroke='currentColor'
                stroke-width='7'
                stroke-linecap='round'
              />
            </svg>
          </div>
        </div>

        <div className='mt-7 text-center'>
          <p className='text-xs text-gray-400'>{t('info')}</p>
        </div>
      </div>
    </div>
  )
}
