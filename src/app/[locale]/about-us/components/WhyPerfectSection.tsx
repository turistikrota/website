import Card from '@turistikrota/ui/cards/default'
import Section from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

type Item = {
  key: 'social' | 'safe' | 'worldwide'
  icon: string
  variant: Variant
}

type Variant = 'fuchsia' | 'teal' | 'blue'

type Design = {
  card: string
  title: string
  text: string
  icon: string
  iconProvider: string
}

const Variants: Record<Variant, Design> = {
  fuchsia: {
    card: 'bg-fuchsia-500 bg-opacity-5 backdrop-blur-3xl border border-fuchsia-500 border-opacity-50 hover:shadow-fuchsia-100 dark:hover:shadow-fuchsia-900',
    title: 'text-fuchsia-600 dark:text-fuchsia-400',
    text: 'text-fuchsia-500 dark:text-fuchsia-300 dark:opacity-80',
    icon: 'text-fuchsia-600 dark:text-fuchsia-200 bg-fuchsia-500 bg-opacity-5 backdrop-blur-3xl shadow-fuchsia-500 dark:shadow-fuchsia-400',
    iconProvider: 'bg-fuchsia-50 dark:bg-fuchsia-900',
  },
  teal: {
    card: 'bg-teal-500 bg-opacity-5 backdrop-blur-3xl border border-teal-500 border-opacity-50 hover:shadow-teal-100 dark:hover:shadow-teal-900',
    title: 'text-teal-600 dark:text-teal-400',
    text: 'text-teal-500 dark:text-teal-300 dark:opacity-80',
    icon: 'text-teal-600 dark:text-teal-200 bg-teal-500 bg-opacity-5 backdrop-blur-3xl shadow-teal-500 dark:shadow-teal-400',
    iconProvider: 'bg-teal-50 dark:bg-teal-900',
  },
  blue: {
    card: 'bg-blue-500 bg-opacity-5 backdrop-blur-3xl border border-blue-500 border-opacity-50 hover:shadow-blue-100 dark:hover:shadow-blue-900',
    title: 'text-blue-600 dark:text-blue-400',
    text: 'text-blue-500 dark:text-blue-300 dark:opacity-80',
    icon: 'text-blue-600 dark:text-blue-200 bg-blue-500 bg-opacity-5 backdrop-blur-3xl shadow-blue-500 dark:shadow-blue-400',
    iconProvider: 'bg-blue-50 dark:bg-blue-900',
  },
}

const Items: Item[] = [
  {
    key: 'social',
    icon: 'bx-group',
    variant: 'fuchsia',
  },
  {
    key: 'safe',
    icon: 'bx-shield-quarter',
    variant: 'teal',
  },
  {
    key: 'worldwide',
    icon: 'bx-world',
    variant: 'blue',
  },
]

const WhyPerfectSection: FC = () => {
  const t = useTranslations('aboutUs.whyPerfect')
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-14 grid gap-5 gap-y-8 md:grid-cols-4 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-0'>
        {Items.map((item, idx) => (
          <Card
            key={idx}
            className={`h-full transition-shadow duration-200 hover:shadow-md ${Variants[item.variant].card}`}
          >
            <div className='relative flex justify-center'>
              <div
                className={`absolute -top-8  inline-block h-14 w-14 rounded-full ${
                  Variants[item.variant].iconProvider
                }`}
              ></div>
              <div
                className={`-mt-8 flex h-14 w-14 items-center justify-center rounded-full shadow-sm ${
                  Variants[item.variant].icon
                }`}
              >
                <i className={`bx bx-md ${item.icon}`}></i>
              </div>
            </div>
            <div className='p-2'>
              <h3 className={`mb-2 text-lg font-semibold ${Variants[item.variant].title}`}>{t(`${item.key}.title`)}</h3>
              <p className={Variants[item.variant].text}>{t(`${item.key}.text`)}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default WhyPerfectSection
