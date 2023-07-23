'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import { getStaticRoute } from '~/static/page'
import Logo from '../logo/logo'
import AccountHeaderButton from './AccountHeaderButton'
import MobileHeader from '@turistikrota/ui/headers/mobile'
import TopHeader from '@turistikrota/ui/headers/top'
import HeaderLogo from './HeaderLogo'

type Props = {
  accessTokenIsExists: boolean
}

export default function DefaultHeader({ accessTokenIsExists }: Props) {
  const t = useTranslations('header')
  const locale = useLocale()
  return (
    <>
      <TopHeader className='hidden md:flex'>
        <TopHeader.Left>{t('left.promotion')}</TopHeader.Left>
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
