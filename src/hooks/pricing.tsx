import { useLocale } from 'next-intl'

export const useLocalizedFormatter = (): Intl.NumberFormat => {
  const locale = useLocale()
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}