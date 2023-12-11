import { getRequestConfig } from 'next-intl/server'
import { headers } from 'next/headers'

export default getRequestConfig(async ({ locale }) => {
  const now = headers().get('x-now')
  const timeZone = headers().get('x-time-zone') ?? undefined
  const messages = await getMessages(locale)
  return {
    now: now ? new Date(now) : undefined,
    timeZone,
    messages,
    defaultTranslationValues: {
      globalString: 'Global string',
      highlight: (chunks) => <strong>{chunks}</strong>,
    },
    formats: {
      dateTime: {
        medium: {
          dateStyle: 'medium',
          timeStyle: 'short',
          hour12: false,
        },
      },
    },
    onError() {},
    getMessageFallback({ key, namespace }) {
      return process.env.NODE_ENV === 'production' ? key : `${namespace}:${key}`
    },
  }
})

export const getMessages = async (locale: string) => {
  const fixed = ['en', 'tr'].includes(locale) ? locale : 'tr'
  return (await import(`./messages/${fixed}.json`)).default
}
