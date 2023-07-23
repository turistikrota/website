'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AccountStorage, removeAccount, setAccount, setIsLoading } from '~/features/account/account.store'
import { isAccountListItem } from '~/features/account/account.types'
import { httpClient } from '~/http/client'
import { Services, apiUrl } from '~/static/api'

type Props = {
  isAccountCookieExists: boolean
  accessTokenIsExists: boolean
}

export default function CurrentAccountLayout({
  children,
  isAccountCookieExists,
  accessTokenIsExists,
}: React.PropsWithChildren<Props>) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window === 'undefined') return
    const item = localStorage.getItem(AccountStorage.CurrentAccount)
    if (accessTokenIsExists && (!isAccountCookieExists || !!item)) return
    dispatch(setIsLoading(true))
    httpClient
      .get(apiUrl(Services.Account, '/selected'))
      .then((res) => {
        if (isAccountListItem(res.data)) {
          dispatch(setAccount(res.data))
        }
      })
      .catch(() => {
        dispatch(removeAccount())
      })
      .finally(() => {
        dispatch(setIsLoading(false))
      })
  }, [isAccountCookieExists])

  return <>{children}</>
}
