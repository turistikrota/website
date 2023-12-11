'use client'

import { useFormik } from 'formik'
import { useLocale, useTranslations } from 'next-intl'
import { FormEvent, useState } from 'react'
import Spin from 'sspin'
import * as Yup from 'yup'
import Alert from '@turistikrota/ui/alert'
import { usePost } from '~/hooks/http/request'
import { Services, apiUrl } from '~/static/api'
import { BaseResponse } from '@turistikrota/ui/types'

export default function WaitlistForm() {
  const t = useTranslations('waitlist')
  const locale = useLocale()
  const [alertVisible, setAlertVisible] = useState<boolean>(true)
  const [result, setResult] = useState<BaseResponse | null>(null)
  const [loading, dispatch, error] = usePost<{ email: string }, BaseResponse>(apiUrl(Services.Soon, '/'), undefined, {
    headers: {
      'Accept-Language': locale,
    },
  })
  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(t('email_invalid')).required(t('email_required')),
    }),
    onSubmit: (values) => {
      dispatch(setResult, null, values)
    },
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.handleSubmit()
  }

  return (
    <Spin loading={loading}>
      <Alert type='primary' show={!loading && alertVisible && error === null && result !== null}>
        <>
          <Alert.Title>{t('messages.success.title')}</Alert.Title>
          <Alert.Description>{t('messages.success.description')}</Alert.Description>
        </>
      </Alert>
      <Alert type='error' show={!loading && alertVisible && error !== null} closable={true} className='mb-2 mt-2'>
        <>
          <Alert.Title>{t('messages.error.title')}</Alert.Title>
          <Alert.Description>{error?.message || t('messages.error.description')}</Alert.Description>
        </>
      </Alert>
      {(loading || !alertVisible || error !== null || result === null) && (
        <form method='POST' onSubmit={onSubmit} className='sm:mx-auto lg:mx-0'>
          <div className='sm:flex'>
            <div className='min-w-0 flex-1'>
              <label htmlFor='email' className='sr-only'>
                {t('email')}
              </label>
              <input
                id='email'
                type='email'
                placeholder={t('enter_email')}
                className='block w-full rounded-md border-0 bg-gray-200 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400'
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                autoComplete='on'
              />
              {form.touched.email && form.errors.email && (
                <div className='text-sm text-red-500'>{form.errors.email}</div>
              )}
            </div>
            <div className='mt-3 sm:ml-3 sm:mt-0'>
              <button
                type='submit'
                className='block w-full rounded-md bg-primary-400 px-4 py-3 font-medium text-white shadow transition duration-200 ease-out hover:bg-primary-300 hover:ease-in focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900'
              >
                {t('join_waitlist')}
              </button>
            </div>
          </div>
        </form>
      )}
    </Spin>
  )
}
