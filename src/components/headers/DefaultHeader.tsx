'use client'

import MobileHeader from '@turistikrota/ui/headers/mobile'
import TopHeader from '@turistikrota/ui/headers/top'
import Logo from '@turistikrota/ui/logo'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import { getStaticRoute } from '~/static/page'
import AccountHeaderButton from './AccountHeaderButton'
import HeaderLogo from './HeaderLogo'

type Props = {
  accessTokenIsExists: boolean
}

export default function DefaultHeader({ accessTokenIsExists }: Props) {
  const t = useTranslations('header')
  const locale = useLocale()
  return (
    <>
      <TopHeader>
        <TopHeader.Left>
          <Link
            href={getStaticRoute(locale).owners}
            className='hover:opacity-80 transition-all duration-200 ease-in-out'
          >
            {t('links.owners')}
          </Link>
          <Link
            href={getStaticRoute(locale).places}
            className='hover:opacity-80 transition-all duration-200 ease-in-out'
          >
            {t('links.places')}
          </Link>
        </TopHeader.Left>
        <TopHeader.Right>
          <Link
            href={getStaticRoute(locale).aboutUs}
            className='hover:opacity-80 transition-all duration-200 ease-in-out'
          >
            {t('links.aboutUs')}
          </Link>
        </TopHeader.Right>
      </TopHeader>
      <MobileHeader>
        <MobileHeader.Left>
          <HeaderLogo>
            <Logo width={186} height={30}>
              <Logo.Badge>beta</Logo.Badge>
            </Logo>
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
