import { ListResponse } from '@turistikrota/ui/types'
import { FC } from 'react'
import { ListingListItem } from '../types/listing'

type Props = {
  loading: boolean
  data: ListResponse<ListingListItem>
  isNext: boolean
}

const ListingListSection: FC<Props> = ({ loading, data, isNext }) => {
  return <></>
}

export default ListingListSection
