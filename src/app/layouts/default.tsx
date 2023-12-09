import { cookies } from 'next/headers'
import React from 'react'
import BasicFooter from '~/components/footers/BasicFooter'
import DefaultHeader from '~/components/headers/DefaultHeader'
import { Config } from '~/config'
import CurrentAccountLayout from './current-account'

type Props = {
  withoutFooter?: boolean
  fullHeight?: boolean
}

export function Layout({ children, fullHeight = false, withoutFooter = false }: React.PropsWithChildren<Props>) {
  const cookie = cookies()
  return (
    <CurrentAccountLayout
      accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}
      accountCookie={cookie.get(Config.cookies.accountName)?.value ?? ''}
    >
      <DefaultHeader accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}></DefaultHeader>
      <main>{children}</main>
      {!withoutFooter && <BasicFooter></BasicFooter>}
    </CurrentAccountLayout>
  )
}

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return <Layout>{children}</Layout>
}
