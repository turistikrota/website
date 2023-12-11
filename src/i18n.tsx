import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  messages: await getMessages(locale),
}))

export const getMessages = async (locale: string) => {
  const fixed = ['en', 'tr'].includes(locale) ? locale : 'tr'
  return (await import(`./messages/${fixed}.json`)).default
}
