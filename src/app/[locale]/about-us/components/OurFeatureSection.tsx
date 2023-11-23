import Card from '@turistikrota/ui/cards/default'
import { useTranslations } from 'next-intl'

type Item = {
  title: string
  text: string
  icon: string
}

const Items: Item[] = [
  {
    title: 'items.network.title',
    text: 'items.network.text',
    icon: 'bx-atom',
  },
  {
    title: 'items.safe.title',
    text: 'items.safe.text',
    icon: 'bx-shield-quarter',
  },
  {
    title: 'items.worldwide.title',
    text: 'items.worldwide.text',
    icon: 'bx-world',
  },
]

export default function OurFeatures() {
  const t = useTranslations('aboutUs.features')
  return (
    <section className='container my-24 px-6 mx-auto'>
      <div className='mb-32 text-center'>
        <h2 className='text-3xl font-bold mb-20'>{t('title')}</h2>

        <div className='grid lg:gap-x-4 lg:grid-cols-3 gap-y-8 lg:gap-y-0 text-gray-800 dark:text-gray-400'>
          {Items.map((item, idx) => (
            <Card
              key={idx}
              className='h-full transition-shadow duration-200 shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-none'
            >
              <div className='flex justify-center'>
                <div className='p-4 bg-secondary-600 rounded-full shadow-lg inline-block -mt-8'>
                  <i className={`bx bx-md text-white w-10 h-10 ${item.icon}`}></i>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-lg font-semibold mb-4'>{t(item.title as any)}</h3>
                <p>{t(item.text as any)}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
