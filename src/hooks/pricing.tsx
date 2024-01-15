import { useLocale } from 'next-intl'
import { Currency } from '~/features/listing/types/listing'

export const useLocalizedFormatter = (currency: Currency = Currency.USD): Intl.NumberFormat => {
  const locale = useLocale()
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency ? currency : Currency.USD,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}
