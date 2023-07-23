'use client'

import { Provider, useDispatch } from 'react-redux'

import { useLocale } from 'next-intl'
import { PropsWithChildren, useEffect } from 'react'
import { onStartClient } from '~/features/account/account.store'
import { setLocale } from '~/features/config/config.store'
import store from './store'

function ConfigProvider({ children }: PropsWithChildren) {
  const locale = useLocale()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLocale(locale))
  }, [locale])

  useEffect(() => {
    if (typeof window === 'undefined') return
    onStartClient(dispatch)
  }, [])
  return <>{children}</>
}

export default function ReduxProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ConfigProvider>{children}</ConfigProvider>
    </Provider>
  )
}
