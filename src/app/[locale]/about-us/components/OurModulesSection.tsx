import Badge from '@turistikrota/ui/badge'
import Button from '@turistikrota/ui/button'
import Card from '@turistikrota/ui/cards/default'
import Section from '@turistikrota/ui/section/landing'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'
import { getStaticRoute } from '~/static/page'

type Item = {
  key:
    | 'places'
    | 'listing'
    | 'support'
    | 'booking'
    | 'business'
    | 'account'
    | 'payment'
    | 'tech'
    | 'social'
    | 'ad'
    | 'tour'
    | 'ticket'
  icon: React.ReactNode
  link?: (locale: string) => string
  isNotReady?: boolean
}

const Items: Item[] = [
  {
    key: 'places',
    icon: <i className='bx bx-map text-3xl text-primary'></i>,
    link: (locale) => getStaticRoute(locale).places,
  },
  {
    key: 'listing',
    icon: <i className='bx bx-list-check text-3xl text-teal-500'></i>,
    link: (locale) => getStaticRoute(locale).listings,
  },
  {
    key: 'support',
    icon: <i className='bx bx-support text-3xl text-fuchsia-500'></i>,
    link: (locale) => getStaticRoute(locale).support,
  },
  {
    key: 'booking',
    icon: <i className='bx bx-calendar-check text-3xl text-blue-500'></i>,
    link: (locale) => getStaticRoute(locale).bookings,
  },
  {
    key: 'business',
    icon: <i className='bx bx-briefcase-alt text-3xl text-primary'></i>,
    link: (locale) => getStaticRoute(locale).businesses,
  },
  {
    key: 'account',
    icon: <i className='bx bx-user text-3xl text-teal-500'></i>,
    link: (locale) => getStaticRoute(locale).account.details,
  },
  {
    key: 'tech',
    icon: <i className='bx bx-code-alt text-3xl text-blue-500'></i>,
    link: (locale) => getStaticRoute(locale).tech,
  },
  {
    key: 'payment',
    icon: <i className='bx bx-credit-card text-3xl text-fuchsia-500'></i>,
    isNotReady: true,
  },
  {
    key: 'social',
    icon: <i className='bx bx-group text-3xl text-primary'></i>,
    isNotReady: true,
  },
  {
    key: 'ad',
    icon: <i className='bx bxs-megaphone text-3xl text-teal-500'></i>,
    isNotReady: true,
  },
  {
    key: 'tour',
    icon: <i className='bx bx-walk text-3xl text-fuchsia-500'></i>,
    isNotReady: true,
  },
  {
    key: 'ticket',
    icon: <i className='bx bx-bookmark text-3xl text-blue-500'></i>,
    isNotReady: true,
  },
]

const OurModulesSection: FC = () => {
  const t = useTranslations('aboutUs.ourModules')
  const locale = useLocale()

  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3'>
        {Items.map((item, idx) => (
          <Card key={idx} className='relative'>
            {item.isNotReady && (
              <Badge className='absolute right-2 top-2' variant='warning'>
                {t('notReady')}
              </Badge>
            )}
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-primary/10'>{item.icon}</div>
            <h4 className='mb-2 mt-5 text-lg font-medium'>{t(`${item.key}.title`)}</h4>
            <p className='text-slate-500 dark:text-slate-400'>{t(`${item.key}.text`)}</p>
            {item.link && (
              <Link href={item.link(locale)}>
                <Button variant='primary' size='sm' className='mt-1 flex items-center gap-1' block={false}>
                  {t('visit')}
                  <i className='bx bx-right-arrow-alt text-xl'></i>
                </Button>
              </Link>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default OurModulesSection
