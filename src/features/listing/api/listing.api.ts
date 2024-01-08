import { ListResponse } from '@turistikrota/ui/types'
import { httpClient } from '~/http/client'
import { Services, apiUrl } from '~/static/api'
import { ListingListItem } from '../types/listing'

export const filterListings = async (page = 1, limit = 10): Promise<ListResponse<ListingListItem>> => {
  const res = await httpClient
    .post(apiUrl(Services.Listing, `/filter?page=${page}&limit=${limit}`), {})
    .catch((err) => {
      return { data: undefined }
    })
  return res.data ? res.data : { list: [] }
}
