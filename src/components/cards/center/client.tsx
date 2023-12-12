'use client'

import Button from '@turistikrota/ui/button'
import { Coordinates } from '@turistikrota/ui/types'
import { useLocale, useTranslations } from 'next-intl'
import { FC } from 'react'
import { getStaticRoute } from '~/static/page'

type Props = {
  coordinates: Coordinates
}

const CenterCardButton: FC<Props> = ({ coordinates }) => {
  const t = useTranslations('home.centers')
  const locale = useLocale()

  const onClick = () => {
    let q = ''
    if (coordinates[0] !== 0 && coordinates[1] !== 0) {
      q = `?lat=${coordinates[0]}&lng=${coordinates[1]}`
    }
    window.open(`${getStaticRoute(locale).places}${q}`, '_blank')
  }

  return (
    <Button onClick={onClick} block={false} className='flex items-center justify-center gap-2'>
      <i className='bx bx-link-external text-lg'></i>
      {t('detail-button')}
    </Button>
  )
}

export default CenterCardButton
