'use client'

import Button from '@turistikrota/ui/button'
import Input from '@turistikrota/ui/form/input'
import Textarea from '@turistikrota/ui/form/textarea'
import LandingSection from '@turistikrota/ui/section/landing'
import ErrorText from '@turistikrota/ui/text/error'
import { ToastListProvider, ToastProvider, useToast } from '@turistikrota/ui/toast'
import { parseApiError } from '@turistikrota/ui/utils/response'
import { useFormik } from 'formik'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import Spin from 'sspin'
import * as Yup from 'yup'
import { httpClient } from '~/http/client'
import { Services, apiUrl } from '~/static/api'

const ContactForm = () => {
  const t = useTranslations('contact.form')
  const locale = useLocale()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const toast = useToast()
  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      subject: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      subject: Yup.string().required(t('subject_required')),
      email: Yup.string().email(t('email_invalid')).required(t('email_required')),
      message: Yup.string().required(t('message_required')),
    }),
    onSubmit: (values) => {
      console.log('eben')
      setLoading(true)
      httpClient
        .post(apiUrl(Services.Support, '/contact'), values, {
          headers: {
            'Accept-Language': locale,
          },
        })
        .then((res) => {
          setLoading(false)
          toast.success(t('success'))
          form.resetForm()
        })
        .catch((err: any) => {
          parseApiError({
            error: err?.response?.data,
            form,
            toast,
          })
        })
        .finally(() => {
          setLoading(false)
        })
    },
  })
  return (
    <LandingSection>
      <LandingSection.Head title={t('title')} subtitle={t('subtitle')} />
      <Spin loading={loading}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className='mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-2'
        >
          <Input
            label={t('subject')}
            name='subject'
            type='text'
            value={form.values.subject}
            error={form.errors.subject}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <Input
            label={t('email')}
            name='email'
            type='email'
            value={form.values.email}
            error={form.errors.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <Textarea
            label={t('message')}
            name='message'
            value={form.values.message}
            error={form.errors.message}
            onChange={form.handleChange}
          />
          <ErrorText>{error}</ErrorText>
          <Button htmlType='submit' className='mt-2'>
            {t('send')}
          </Button>
        </form>
      </Spin>
    </LandingSection>
  )
}

export default function ContactFormSection() {
  return (
    <ToastListProvider>
      <ToastProvider>
        <ContactForm />
      </ToastProvider>
    </ToastListProvider>
  )
}
