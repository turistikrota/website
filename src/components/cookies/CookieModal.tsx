'use client'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Paths } from '~/i18n.config'
import { I18nLink } from '~/navigation'

const CookieModal: FC = () => {
  const t = useTranslations('cookies')

  const onAccept = () => {
    document.cookie = 'cookie-consent=true; max-age=31536000; path=/; samesite=strict; secure'
    removeCookieModal()
  }

  const onReject = () => {
    document.cookie = 'cookie-consent=false; max-age=31536000; path=/; samesite=strict; secure'
    removeCookieModal()
  }

  const onClose = () => {
    onAccept()
    removeCookieModal()
  }

  const removeCookieModal = () => {
    const cookieModal = document.getElementById('cookie-modal')
    if (cookieModal) {
      cookieModal.remove()
    }
  }

  return (
    <section
      id='cookie-modal'
      className='fixed bottom-4 left-1/2 z-501 mx-auto w-11/12 max-w-md -translate-x-1/2 transform rounded-md bg-primary bg-opacity-80 p-2 backdrop-blur-lg md:left-4 md:translate-x-0'
    >
      <h2 className='text-lg font-semibold text-gray-800 dark:text-white'>{t('title')}</h2>

      <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
        {t('subtitle')}
        <I18nLink
          href={Paths.contracts.cookies}
          className='font-medium text-gray-700 underline transition-colors duration-300 hover:text-blue-500 dark:text-white dark:hover:text-blue-400'
        >
          {t('link')}
        </I18nLink>
      </p>

      <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>{t('info')}</p>

      <div className='mt-2 grid shrink-0 grid-cols-2 gap-2'>
        <button
          onClick={onAccept}
          className='rounded-md bg-default px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 focus:outline-none'
        >
          {t('accept')}
        </button>

        <button
          onClick={onReject}
          className='rounded-md bg-white px-4 py-2.5 text-xs font-medium text-gray-800 transition-colors duration-300 focus:outline-none'
        >
          {t('reject')}
        </button>

        <button
          onClick={onClose}
          className='col-span-2 rounded-md bg-white px-4 py-2.5 text-xs font-medium text-black transition-colors duration-300 focus:outline-none'
        >
          {t('close')}
        </button>
      </div>
    </section>
  )
}

export default CookieModal
