'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BasicFooter from '../footers/BasicFooter'

const MobileAppLanding: React.FC = () => {
  const t = useTranslations('mobile')
  return (
    <>
      <div className='pb-14 bg-right z-10'>
        <div className='container relative w-full pt-24 md:pt-12 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center overflow-hidden'>
          <div className='flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden'>
            <h1 className='my-4 text-3xl md:text-5xl text-primary font-bold leading-tight text-center md:text-left slide-in-bottom-h1'>
              {t('title')}
            </h1>
            <p className='leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle'>
              {t('subtitle')}
            </p>

            <p className='text-secondary font-bold text-center md:text-left fade-in'>{t('download')}</p>
            <small className='dark:text-gray-300 pb-8 md:text-left lg:pb-6'>{t('beta')}</small>
            <div className='flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in'>
              <Link href={`https://testflight.apple.com/join/2DbHY7wQ`} target='_blank'>
                <Image
                  alt={t('app-store')}
                  src='/images/app-store.svg'
                  className='h-12 pr-4 bounce-top-icons'
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={`https://play.google.com/store/apps/details?id=com.turistikrota.app`} target='_blank'>
                <Image
                  alt={t('play-store')}
                  src='/images/play-store.svg'
                  className='h-12 bounce-top-icons'
                  width={150}
                  height={50}
                />
              </Link>
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
    </>
  )
}

export default MobileAppLanding
