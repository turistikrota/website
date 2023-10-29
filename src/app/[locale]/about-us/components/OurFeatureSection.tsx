import { useTranslations } from 'next-intl'

export default function OurFeatures() {
  const t = useTranslations('aboutUs.features')
  return (
    <section className='container my-24 px-6 mx-auto'>
      <div className='mb-32 text-center'>
        <h2 className='text-3xl font-bold mb-20'>{t('title')}</h2>

        <div className='grid lg:gap-x-12 lg:grid-cols-3 text-gray-800 dark:text-gray-400'>
          <div className='mb-12 lg:mb-0'>
            <div className='rounded-lg shadow-lg h-full block bg-second'>
              <div className='flex justify-center'>
                <div className='p-4 bg-secondary-600 rounded-full shadow-lg inline-block -mt-8'>
                  <i className='bx bx-md bx-atom text-white w-10 h-10'></i>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-semibold mb-4'>{t('items.network.title')}</h3>
                <p>{t('items.network.text')}</p>
              </div>
            </div>
          </div>

          <div className='mb-12 lg:mb-0'>
            <div className='rounded-lg shadow-lg h-full block bg-second'>
              <div className='flex justify-center'>
                <div className='p-4 bg-secondary-600 rounded-full shadow-lg inline-block -mt-8'>
                  <i className='bx bx-md bx-shield-quarter text-white w-10 h-10'></i>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-semibold mb-4'>{t('items.safe.title')}</h3>
                <p>{t('items.safe.text')}</p>
              </div>
            </div>
          </div>

          <div className=''>
            <div className='rounded-lg shadow-lg h-full block bg-second'>
              <div className='flex justify-center'>
                <div className='p-4 bg-secondary-600 rounded-full shadow-lg inline-block -mt-8'>
                  <i className='bx bx-md bx-world text-white w-10 h-10'></i>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-semibold mb-4'>{t('items.worldwide.title')}</h3>
                <p>{t('items.worldwide.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
