'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { useSizeWithoutHeaderAndTopBar } from '~/hooks/header'
import BasicFooter from '../footers/BasicFooter'

const MobileAppLanding: React.FC = () => {
  const t = useTranslations('mobile')
  const size = useSizeWithoutHeaderAndTopBar()
  return (
    <div
      className='relative'
      style={{
        height: size,
      }}
    >
      <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-primary-200 dark:from-primary-1000 to-secondary-200 dark:to-secondary-1000 opacity-10 dark:opacity-10'></div>
      <div className='pb-14 bg-right z-10'>
        <div className='container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center'>
          <div className='flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden'>
            <h1 className='my-4 text-3xl md:text-5xl text-primary font-bold leading-tight text-center md:text-left slide-in-bottom-h1'>
              {t('title')}
            </h1>
            <p className='leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle'>
              {t('subtitle')}
            </p>

            <p className='text-secondary font-bold pb-8 lg:pb-6 text-center md:text-left fade-in'>{t('download')}</p>
            <div className='flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in'>
              <Image
                alt={t('app-store')}
                src='/images/app-store.svg'
                className='h-12 pr-4 bounce-top-icons'
                width={150}
                height={50}
              />
              <Image
                alt={t('play-store')}
                src='/images/play-store.svg'
                className='h-12 bounce-top-icons'
                width={150}
                height={50}
              />
            </div>
          </div>

          <div className='w-full xl:w-3/5 py-6 overflow-y-hidden'>
            <Image
              alt={t('screenshot')}
              className='w-5/6 mx-auto slide-in-bottom'
              src='/images/mobile-ss.png'
              width={930}
              height={400}
            />
          </div>
        </div>
      </div>
      <BasicFooter />
    </div>
  )
}

export default MobileAppLanding
