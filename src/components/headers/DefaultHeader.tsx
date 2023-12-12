'use client'

import MobileHeader from '@turistikrota/ui/headers/mobile'
import Logo from '@turistikrota/ui/logo'
import { useLocale, useTranslations } from 'next-intl'
import AccountHeaderButton from './AccountHeaderButton'
import HeaderLogo from './HeaderLogo'

type Props = {
  accessTokenIsExists: boolean
  fillSize?: boolean
}

export default function DefaultHeader({ accessTokenIsExists, fillSize = true }: Props) {
  const t = useTranslations('header')
  const locale = useLocale()
  return (
    <>
      <MobileHeader withTopHeader={false} fillSize={fillSize} defaultFixed>
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
