'use client'

import MobileHeader from '@turistikrota/ui/headers/mobile'
import { setDefaultImageSrc, useImageSrc } from '@turistikrota/ui/hooks/image'
import UserName from '@turistikrota/ui/username'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Config } from '~/config'
import { AccountListItem } from '~/features/account/account.types'
import { getStaticRoute } from '~/static/page'
import { RootState } from '~/store/store'

setDefaultImageSrc(Config.cdn.notFound)

type Props = {
  accessTokenIsExists: boolean
}

const ProfileButton = ({ account }: { account: AccountListItem }) => {
  const { src, onError } = useImageSrc(account.avatarUrl)
  const t = useTranslations('header.button')
  const locale = useLocale()
  return (
    <Link href={getStaticRoute(locale).account.details} aria-label={t('profile')} title={t('profile')}>
      <div className='group relative flex flex-row items-center justify-center gap-x-1 rounded-md bg-second transition-all duration-200 ease-in-out hover:brightness-105 md:pl-1 md:pr-3'>
        <div className='flex h-9 w-9 flex-col items-end justify-center rounded-full md:h-12 md:w-12 md:items-center'>
          <MobileHeader.Avatar>
            <Image
              src={src}
              onError={onError}
              className='h-full rounded-md object-cover'
              width={48}
              height={48}
              alt={account.fullName}
              title={account.fullName}
            />
          </MobileHeader.Avatar>
        </div>
        <div className='hidden flex-col items-start justify-center md:flex'>
          <UserName>{account.userName}</UserName>
        </div>
      </div>
    </Link>
  )
}

const LoginButton = () => {
  const t = useTranslations('header.button')
  const locale = useLocale()
  return (
    <Link href={getStaticRoute(locale).auth.default}>
      <MobileHeader.Button ariaLabel={t('login')} title={t('login')}>
        <i className='bx bx-user'></i>
      </MobileHeader.Button>
    </Link>
  )
}

const LoadingButton = () => {
  const t = useTranslations('header.button')
  return (
    <MobileHeader.Button ariaLabel={t('loading')} title={t('loading')}>
      <i className='bx bx-loader-alt bx-spin'></i>
    </MobileHeader.Button>
  )
}

const SelectProfileButton = () => {
  const t = useTranslations('header')
  const locale = useLocale()
  return (
    <Link
      href={getStaticRoute(locale).account.select}
      className='rounded-md px-3 py-3 transition-colors duration-200 ease-in-out hover:bg-second dark:hover:bg-third'
      aria-label={t('links.selectAccount')}
      title={t('links.selectAccount')}
    >
      {t('links.selectAccount')}
    </Link>
  )
}

export default function AccountHeaderButton({ accessTokenIsExists }: Props) {
  const isLoading = useSelector((state: RootState) => state.account.loading)
  const account = useSelector((state: RootState) => state.account.currentAccount)

  if (isLoading) return <LoadingButton />
  if (accessTokenIsExists && account === null) return <SelectProfileButton />
  if (account === null) return <LoginButton />
  return <ProfileButton account={account} />
}
