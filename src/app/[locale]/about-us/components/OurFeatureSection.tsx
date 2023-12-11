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
    <section className='container mx-auto my-24 px-6'>
      <div className='mb-32 text-center'>
        <h2 className='mb-20 text-3xl font-bold'>{t('title')}</h2>

        <div className='grid gap-y-8 text-gray-800 dark:text-gray-400 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-0'>
          {Items.map((item, idx) => (
            <Card
              key={idx}
              className='h-full shadow-sm transition-shadow duration-200 hover:shadow-md dark:shadow-none dark:hover:shadow-none'
            >
              <div className='flex justify-center'>
                <div className='-mt-8 inline-block rounded-full bg-secondary-600 p-4 shadow-lg'>
                  <i className={`bx bx-md h-10 w-10 text-white ${item.icon}`}></i>
                </div>
              </div>
              <div className='p-6'>
                <h3 className='mb-4 text-lg font-semibold'>{t(item.title as any)}</h3>
                <p>{t(item.text as any)}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
