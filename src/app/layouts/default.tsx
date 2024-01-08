import { cookies } from 'next/headers'
import React from 'react'
import MagicFooter from '~/components/footers/MagicFooter'
import DefaultHeader from '~/components/headers/DefaultHeader'
import { Config } from '~/config'
import CurrentAccountLayout from './current-account'

type Props = {
  withoutFooter?: boolean
  fullHeight?: boolean
  fillSize?: boolean
  className?: string
}

export function Layout({
  children,
  fullHeight = false,
  fillSize = true,
  withoutFooter = false,
  className,
}: React.PropsWithChildren<Props>) {
  const cookie = cookies()
  return (
    <CurrentAccountLayout
      accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}
      accountCookie={cookie.get(Config.cookies.accountName)?.value ?? ''}
    >
      <DefaultHeader
        fillSize={fillSize}
        accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}
      ></DefaultHeader>
      <main className={className}>{children}</main>
      {!withoutFooter && <MagicFooter />}
    </CurrentAccountLayout>
  )
}

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return <Layout>{children}</Layout>
}
