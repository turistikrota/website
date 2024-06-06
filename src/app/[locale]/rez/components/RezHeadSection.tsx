import { useTranslations } from 'next-intl'

export default function RezHeadSection() {
  const t = useTranslations('rez.head')
  return (
    <section className='relative mt-40 flex min-h-screen flex-col items-center justify-center gap-8 p-4 lg:p-0'>
      <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='mx-auto mb-8 max-w-2xl text-center lg:mb-14'>
          <h2 className='text-3xl font-bold text-gray-800 dark:text-neutral-200 lg:text-4xl'>{t('title')}</h2>
          <p className='mt-3 text-gray-800 dark:text-neutral-200'>{t('subtitle')}</p>
        </div>
        <div className='mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8'>
          <div className='col-span-4 hidden md:col-span-3 md:block'>
            <img className='rounded-xl' src='/images/left.png' alt='Image Description' />
          </div>
          <div className='col-span-4 md:col-span-3'>
            <img className='rounded-xl' src='/images/left2.png' alt='Image Description' />
          </div>

          <div className='col-span-4 md:col-span-3'>
            <img className='rounded-xl' src='/images/right-1.png' alt='Image Description' />
          </div>

          <div className='col-span-4 md:col-span-3'>
            <img className='rounded-xl' src='/images/right.png' alt='Image Description' />
          </div>
        </div>
      </div>
    </section>
  )
}
