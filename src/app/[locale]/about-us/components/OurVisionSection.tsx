import Card from '@turistikrota/ui/cards/default'
import Section from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'

type Item = {
  key: 'vision' | 'mission' | 'values'
  icon: React.ReactNode
}

const Items: Item[] = [
  {
    key: 'vision',
    icon: <i className='bx bx-show text-3xl text-primary'></i>,
  },
  {
    key: 'mission',
    icon: <i className='bx bx-target-lock text-3xl text-teal-500'></i>,
  },
  {
    key: 'values',
    icon: <i className='bx bx-award text-3xl text-fuchsia-500'></i>,
  },
]

export default function OurVisionSection() {
  const t = useTranslations('aboutUs.ourVision')

  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {Items.map((item, idx) => (
          <Card key={idx}>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-primary/10'>{item.icon}</div>
            <h4 className='mb-2 mt-5 text-lg font-medium'>{t(`${item.key}.title`)}</h4>
            <p className='text-slate-500 dark:text-slate-400'>{t(`${item.key}.text`)}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
