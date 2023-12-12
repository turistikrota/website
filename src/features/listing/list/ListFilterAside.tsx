import { ListResponse } from '@turistikrota/ui/types'
import { FC } from 'react'
import { ListingListItem } from '../types/listing'

type Props = {
  loading: boolean
  data: ListResponse<ListingListItem>
}

const ListFilterAside: FC<Props> = () => {
  return <></>
}
