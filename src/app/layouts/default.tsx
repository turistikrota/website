import CubeEffect from '@turistikrota/ui/design/cube'
import GlassEffect from '@turistikrota/ui/design/glass'
import { cookies } from 'next/headers'
import React from 'react'
import BasicFooter from '~/components/footers/BasicFooter'
import DefaultHeader from '~/components/headers/DefaultHeader'
import { Config } from '~/config'
import CurrentAccountLayout from './current-account'

type Props = {
  withoutFooter?: boolean
  fullHeight?: boolean
  fillSize?: boolean
  useEffects?: boolean
  className?: string
}

export function Layout({
  children,
  fullHeight = false,
  fillSize = true,
  withoutFooter = false,
  useEffects = true,
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
      {useEffects && (
        <>
          <GlassEffect.Fixed />
          <CubeEffect.All />
        </>
      )}
      <main className={className}>{children}</main>
      {!withoutFooter && <BasicFooter></BasicFooter>}
    </CurrentAccountLayout>
  )
}

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return <Layout>{children}</Layout>
}
