'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BasicFooter from '../footers/BasicFooter'

const MobileAppLanding: React.FC = () => {
  console.log('mobile app landing works')
  const t = useTranslations('mobile')
  return (
    <>
      <div className='z-10 bg-right pb-14'>
        <div className='container relative mx-auto flex w-full flex-col flex-wrap items-center overflow-hidden px-6 pt-24 md:flex-row md:pt-12'>
          <div className='flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5'>
            <h1 className='slide-in-bottom-h1 my-4 text-center text-3xl font-bold leading-tight text-primary md:text-left md:text-5xl'>
              {t('title')}
            </h1>
            <p className='slide-in-bottom-subtitle mb-8 text-center text-base leading-normal md:text-left md:text-2xl'>
              {t('subtitle')}
            </p>

            <p className='fade-in text-center font-bold text-secondary md:text-left'>{t('download')}</p>
            <small className='pb-8 dark:text-gray-300 md:text-left lg:pb-6'>{t('beta')}</small>
            <div className='fade-in flex w-full justify-center pb-24 md:justify-start lg:pb-0'>
              <Link href={`https://testflight.apple.com/join/2DbHY7wQ`} target='_blank'>
                <Image
                  alt={t('app-store')}
                  src='/images/app-store.svg'
                  className='bounce-top-icons h-12 pr-4'
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={`https://play.google.com/store/apps/details?id=com.turistikrota.app`} target='_blank'>
                <Image
                  alt={t('play-store')}
                  src='/images/play-store.svg'
                  className='bounce-top-icons h-12'
                  width={150}
                  height={50}
                />
              </Link>
            </div>
          </div>

          <div className='w-full overflow-y-hidden py-6 xl:w-3/5'>
            <Image
              alt={t('screenshot')}
              className='slide-in-bottom mx-auto w-5/6'
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
