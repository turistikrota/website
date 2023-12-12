import Section from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import type { CenterItem } from '~/components/cards/center/CenterCard'
import CenterCard from '~/components/cards/center/CenterCard'

const items: CenterItem[] = [
  {
    name: 'Büyükada',
    description: 'buyukada',
    coordinates: [40.84977, 29.1149],
    imageUrl: 'https://s3.turistikrota.com/places/buyukada-istanbul-un-en-buyuk-prens-adasi-70b04e27.webp',
  },
  {
    name: 'Sapanca',
    description: 'sapanca',
    coordinates: [40.69115, 30.2274],
    imageUrl: 'https://s3.turistikrota.com/img/025d5dda-589f-4468-bd93-36992f2cb860.jpg',
  },
  {
    name: 'Odunpazarı',
    description: 'odunpazari',
    coordinates: [39.76516, 30.52137],
    imageUrl: 'https://s3.turistikrota.com/places/odunpazari-evleri-eskisehir-in-osmanli-incisi-6864a239.webp',
  },
  {
    name: 'Şile',
    description: 'sile',
    coordinates: [41.17777, 29.61622],
    imageUrl: 'https://s3.turistikrota.com/places/sile-feneri-istanbul-un-tarihi-simgesi-7a2ae6ab.webp',
  },
  {
    name: 'Kartepe',
    description: 'kartepe',
    coordinates: [40.73245, 30.16266],
    imageUrl: 'https://s3.turistikrota.com/places/f9040082-42dd-4991-a24b-cd76e91d38bf.webp',
  },
  {
    name: 'Karasu',
    description: 'karasu',
    coordinates: [41.11026, 30.69284],
    imageUrl: 'https://s3.turistikrota.com/places/31b3dbde-4573-4854-833a-d27bc0b0c581.webp',
  },
  {
    name: 'Bebek',
    description: 'bebek',
    coordinates: [41.07769, 29.04403],
    imageUrl: 'https://s3.turistikrota.com/places/bebek-sahili-istanbul-un-luks-kiyi-seridi-8295d848.webp',
  },
  {
    name: 'more',
    description: 'more',
    coordinates: [0, 0],
    imageUrl: 'https://s3.turistikrota.com/places/c5608c5d-8272-4009-b29c-49f33683780a.webp',
  },
]

const HomePopularCentersSection: FC = () => {
  const t = useTranslations('home.centers')
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-8 grid grid-cols-12 gap-4'>
        {items.map((item, index) => (
          <CenterCard key={index} {...item} name={item.name === 'more' ? t('button') : item.name} />
        ))}
      </div>
    </Section>
  )
}

export default HomePopularCentersSection
