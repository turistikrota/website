import BasicFooter from '~/components/footers/BasicFooter'
import DefaultHeader from '~/components/headers/DefaultHeader'
import CurrentAccountLayout from './current-account'
import { cookies } from 'next/headers'
import { Config } from '~/config'

type Props = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
  const cookie = cookies()
  return (
    <CurrentAccountLayout
      accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}
      isAccountCookieExists={cookie.get(Config.cookies.accountName) !== undefined}
    >
      <DefaultHeader accessTokenIsExists={cookie.get(Config.cookies.accessToken) !== undefined}></DefaultHeader>
      <main>{children}</main>
      <BasicFooter></BasicFooter>
    </CurrentAccountLayout>
  )
}
