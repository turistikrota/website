'use client'

import debounce from '@turistikrota/ui/utils/debounce'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AccountStorage, removeAccount, setAccount, setIsLoading } from '~/features/account/account.store'
import { isAccountListItem } from '~/features/account/account.types'
import { httpClient } from '~/http/client'
import { Services, apiUrl } from '~/static/api'

type Props = {
  accountCookie: string
  accessTokenIsExists: boolean
}

export default function CurrentAccountLayout({
  children,
  accountCookie,
  accessTokenIsExists,
}: React.PropsWithChildren<Props>) {
  const dispatch = useDispatch()

  useEffect(() => {
    debouncedFetcher(accountCookie)
  }, [accountCookie])

  const debouncedFetcher = debounce((accountCookie) => {
    if (typeof window === 'undefined') return
    const item = localStorage.getItem(AccountStorage.CurrentAccount)
    if (accessTokenIsExists && (!accountCookie || !!item)) {
      try {
        const account = JSON.parse(item || '{}')
        if (isAccountListItem(account) && accountCookie === account.userName) return
      } catch (e) {
        return
      }
    }
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
  }, 50)

  return <>{children}</>
}
