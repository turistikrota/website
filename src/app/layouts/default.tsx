import { cookies } from 'next/headers'
import BasicFooter from '~/components/footers/BasicFooter'
import DefaultHeader from '~/components/headers/DefaultHeader'
import { Config } from '~/config'
import CurrentAccountLayout from './current-account'

type Props = {
  children: React.ReactNode
  withoutFooter?: boolean
  fullHeight?: boolean
}

export default function DefaultLayout({ children, fullHeight = false, withoutFooter = false }: Props) {
  const cookie = cookies()
  return (
    <CurrentAccountLayout
      accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}
      isAccountCookieExists={cookie.get(Config.cookies.accountName) !== undefined}
    >
      <DefaultHeader accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}></DefaultHeader>
      <main>{children}</main>
      {!withoutFooter && <BasicFooter></BasicFooter>}
    </CurrentAccountLayout>
  )
}
