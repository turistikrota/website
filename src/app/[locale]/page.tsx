import HomeBusinessSection from '~/features/home/HomeBusinessSection'
import HomeCategoryFilterSection from '~/features/home/HomeCategoryFilterSection'
import HomeListingSection from '~/features/home/HomeListingSection'
import HomePopularCentersSection from '~/features/home/HomePopularCentersSection'
import { filterListings } from '~/features/listing/api/listing.api'
import { ListingOrder, ListingSort } from '~/features/listing/types/listing.filter'
import { Layout } from '../layouts/default'

export default async function Home() {
  const listinResult = await filterListings(
    {
      sort: ListingSort.MostRecent,
      order: ListingOrder.DESC,
    },
    1,
    8,
  )
  return (
    <Layout fillSize={false} useEffects={true} className='space-y-10 lg:space-y-28'>
      <HomeCategoryFilterSection />
      <HomePopularCentersSection />
      <HomeListingSection res={listinResult} />
      <HomeBusinessSection />
    </Layout>
  )
}
