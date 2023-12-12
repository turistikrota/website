import { Coordinates } from '@turistikrota/ui/types'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import CenterCardButton from './client'

export type CenterItem = {
  name: string
  description: 'buyukada' | 'sapanca' | 'odunpazari' | 'sile' | 'kartepe' | 'karasu' | 'bebek' | 'more'
  coordinates: Coordinates
  imageUrl: string
}

const CenterCard: FC<CenterItem> = ({ name, description, coordinates, imageUrl }) => {
  const t = useTranslations('home.centers.descriptions')
  return (
    <div className='group relative col-span-12 flex h-96 items-end justify-center rounded-md md:col-span-6 lg:col-span-3'>
      <div
        className='group absolute left-0 top-0 h-full w-full rounded-md bg-sky-50 bg-cover bg-center bg-no-repeat brightness-90 md:bg-center'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='absolute left-0 top-0 h-full w-full rounded-md bg-gradient-to-b from-transparent via-transparent to-[#121212] group-hover:via-0%'></div>
      <div className='absolute left-0 top-0 hidden h-full w-full flex-col items-center justify-center gap-4 p-4 opacity-0 transition-all duration-200 group-hover:flex group-hover:animate-fade-in group-hover:opacity-100'>
        <h3 className='text-center text-2xl font-semibold text-white'>{name}</h3>
        <p className='text-center text-white opacity-90'>{t(description)}</p>
        <div className='flex justify-center'>
          <CenterCardButton coordinates={coordinates} />
        </div>
      </div>
      <div className='z-10 flex h-full w-full items-end justify-center gap-4 p-4 group-hover:hidden group-hover:animate-fade-out'>
        <h3 className='text-center text-2xl font-semibold text-white'>{name}</h3>
      </div>
    </div>
  )
}

export default CenterCard
