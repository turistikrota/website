'use client'

import MobileHeader from '@turistikrota/ui/headers/mobile'
import AccountHeaderButton from './AccountHeaderButton'
import ModernLogoProvider from './ModernLogo'

type Props = {
  accessTokenIsExists: boolean
  fillSize?: boolean
}

export default function DefaultHeader({ accessTokenIsExists, fillSize = true }: Props) {
  return (
    <>
      <MobileHeader withTopHeader={false} fillSize={fillSize} defaultFixed>
        <MobileHeader.Left>
          <ModernLogoProvider />
        </MobileHeader.Left>
        <MobileHeader.Fill className='hidden md:flex'>{``}</MobileHeader.Fill>
        <MobileHeader.Right>
          <AccountHeaderButton accessTokenIsExists={accessTokenIsExists} />
        </MobileHeader.Right>
      </MobileHeader>
    </>
  )
}
