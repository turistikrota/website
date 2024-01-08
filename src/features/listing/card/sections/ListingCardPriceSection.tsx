import { useLocale, useTranslations } from 'next-intl'
import { FC, PropsWithChildren } from 'react'
import { useDayJS } from '~/hooks/dayjs'
import { useLocalizedFormatter } from '~/hooks/pricing'
import { ListingPrice } from '../../types/listing'

type DayJS = ReturnType<typeof useDayJS>

type Section = FC<PropsWithChildren<Props>> & {
  Row: FC<PriceRowProps>
}

type Props = {
  prices: ListingPrice[]
  withComission?: boolean
  startDate?: string
  endDate?: string
}

type PriceRange = {
  notAvailable?: boolean
  min?: number
  max?: number
}

const calcMinMaxPrice = (prices: ListingPrice[]): PriceRange => {
  const pricesSorted = prices.sort((a, b) => a.price - b.price)
  if (pricesSorted.length === 0) return { notAvailable: true, min: 0 }
  if (pricesSorted.length === 1) return { min: pricesSorted[0].price, max: pricesSorted[0].price }
  return { min: pricesSorted[0].price, max: pricesSorted[pricesSorted.length - 1].price }
}

type RangeRendererProps = {
  min?: number
  max?: number
  notAvailable?: boolean
}

type PriceRowProps = {
  label: string
  text: string
  bold?: boolean
}

const DataRow: FC<PriceRowProps> = ({ label, text, bold }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='text-sm text-gray-600 dark:text-gray-400'>{label}</div>
      <div className={`text-gray-900 dark:text-gray-100 ${bold ? 'text-xl font-bold' : 'text-lg font-semibold'}`}>
        {text}
      </div>
    </div>
  )
}

const RangeRenderer: FC<RangeRendererProps> = ({ min, max, notAvailable }) => {
  const t = useTranslations('home.listing')
  const localizedFormatter = useLocalizedFormatter()
  if (notAvailable || !min)
    return (
      <div className='w-full text-center text-sm font-bold text-red-600 dark:text-red-400'>
        {t('price.not-available')}
      </div>
    )
  return (
    <div className='flex w-full flex-col gap-1'>
      <DataRow label={t('price.min')} text={localizedFormatter.format(min)} />
      {max && <DataRow label={t('price.max')} text={localizedFormatter.format(max)} />}
      <div className='text-center text-sm text-gray-600 dark:text-gray-400'>{t('price.filterForStrict')}</div>
    </div>
  )
}

const ListingCardPriceRange: FC<Props> = ({ prices }) => {
  const { min, max, notAvailable } = calcMinMaxPrice(prices)
  return <RangeRenderer min={min!} max={max!} notAvailable={notAvailable!} />
}

const ListingCardPriceSection: Section = ({ prices, withComission, startDate, endDate, children }) => {
  const locale = useLocale()
  const dayjs = useDayJS(locale)
  return (
    <div className='col-span-12 flex items-center justify-start gap-2'>
      <ListingCardPriceRange prices={prices} />
    </div>
  )
}

ListingCardPriceSection.Row = DataRow

export default ListingCardPriceSection
