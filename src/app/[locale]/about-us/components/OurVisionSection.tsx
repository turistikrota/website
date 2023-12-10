import Card from '@turistikrota/ui/cards/default'
import { useTranslations } from 'next-intl'

type VisionProps = {
  title: string
  text: string
  icon: string
}

const VisionItem = ({ title, text, icon }: VisionProps) => (
  <Card className='relative flex shadow-sm transition-shadow duration-200 hover:shadow-md  dark:shadow-none dark:hover:shadow-none'>
    <div className='absolute left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 transform'>
      <div className='z-20 flex h-12 w-12 items-center justify-center rounded-full bg-secondary'>
        <i className={`bx bx-md text-white ${icon}`}></i>
      </div>
    </div>
    <div className='mt-8 text-center'>
      <h3 className='mb-4 text-xl font-semibold leading-5 text-primary-800 dark:text-primary lg:text-2xl lg:leading-6'>
        {title}
      </h3>
      <p className='mt-2 text-base font-normal leading-6 text-gray-600 dark:text-gray-400'>{text}</p>
    </div>
  </Card>
)

export default function OurVisionSection() {
  const t = useTranslations('aboutUs.ourVision')

  const items: VisionProps[] = [
    {
      icon: 'bx-star',
      title: t('cards.quality.title'),
      text: t('cards.quality.text'),
    },
    {
      icon: 'bx-trophy',
      title: t('cards.experience.title'),
      text: t('cards.experience.text'),
    },
    {
      icon: 'bx-group',
      title: t('cards.social.title'),
      text: t('cards.social.text'),
    },
  ]

  return (
    <section className='container mx-auto my-24 flex flex-col justify-evenly gap-16 px-6 md:gap-10 lg:flex-row'>
      <div className='w-full text-center lg:w-6/12'>
        <h2 className='text-3xl font-bold leading-7 lg:text-4xl lg:leading-9'>{t('title')}</h2>
        <p className='mx-auto mt-6 w-full text-base font-normal leading-6 text-gray-600 dark:text-gray-400 lg:w-10/12 xl:w-9/12'>
          {t('p1')}
        </p>
        <p className='mx-auto mt-10 w-full text-base font-normal leading-6 text-gray-600 dark:text-gray-400 lg:w-10/12 xl:w-9/12'>
          {t('p2')}
        </p>
      </div>
      <div className='w-full lg:w-6/12'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12'>
          {items.map((item, index) => (
            <VisionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
