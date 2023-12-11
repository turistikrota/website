'use client'

import MobileHeader from '@turistikrota/ui/headers/mobile'
import TopHeader from '@turistikrota/ui/headers/top'
import Logo from '@turistikrota/ui/logo'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { getStaticRoute } from '~/static/page'
import AccountHeaderButton from './AccountHeaderButton'
import HeaderLogo from './HeaderLogo'

type Props = {
  accessTokenIsExists: boolean
}

export default function DefaultHeader({ accessTokenIsExists }: Props) {
  console.log('default header works')
  const t = useTranslations('header')
  //const locale = useLocale()
  const locale = 'tr'
  return (
    <>
      <TopHeader>
        <TopHeader.Left>
          <Link
            href={getStaticRoute(locale).businesses}
            className='transition-all duration-200 ease-in-out hover:opacity-80'
          >
            {t('links.businesses')}
          </Link>
          <Link
            href={getStaticRoute(locale).places}
            className='transition-all duration-200 ease-in-out hover:opacity-80'
          >
            {t('links.places')}
          </Link>
        </TopHeader.Left>
        <TopHeader.Right>
          <Link
            href={getStaticRoute(locale).aboutUs}
            className='transition-all duration-200 ease-in-out hover:opacity-80'
          >
            {t('links.aboutUs')}
          </Link>
        </TopHeader.Right>
      </TopHeader>
      <MobileHeader withTopHeader>
        <MobileHeader.Left>
          <HeaderLogo>
            <Logo width={186} height={30} />
          </HeaderLogo>
        </MobileHeader.Left>
        <MobileHeader.Fill className='hidden md:flex'>{``}</MobileHeader.Fill>
        <MobileHeader.Right>
          <AccountHeaderButton accessTokenIsExists={accessTokenIsExists} />
        </MobileHeader.Right>
      </MobileHeader>
    </>
  )
}
