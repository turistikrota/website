import { Coordinates } from '@turistikrota/ui/types'

enum ListingOrder {
  ASC = 'asc',
  DESC = 'desc',
}

enum ListingSort {
  MostRecent = 'most_recent',
  Nearest = 'nearest',
  Price = 'price',
}

type ListingFilterPrice = {
  min?: number
  max?: number
}

type ListingFilterValidation = {
  adult?: number
  kid?: number
  baby?: number
  family?: boolean
  pet?: boolean
  smoke?: boolean
  alcohol?: boolean
  party?: boolean
  unmarried?: boolean
  guest?: boolean
}

type ListingFilterFeature = {
  categoryInputUUID: string
  value: string
}

export type ListingFilter = {
  query?: string
  price?: ListingFilterPrice
  validation?: ListingFilterValidation
  coordinates?: Coordinates
  categories?: string[]
  features?: ListingFilterFeature[]
  distance?: number
  start_date?: string
  end_date?: string
  sort?: ListingSort
  order?: ListingOrder
}
