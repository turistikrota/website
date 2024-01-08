import { Metadata } from 'next'
import HomeBusinessSection from '~/features/home/HomeBusinessSection'
import HomeCategoryFilterSection from '~/features/home/HomeCategoryFilterSection'
import HomeListingSection from '~/features/home/HomeListingSection'
import HomePopularCentersSection from '~/features/home/HomePopularCentersSection'
import { filterListings } from '~/features/listing/api/listing.api'
import { Layout } from '../layouts/default'

export const metadata: Metadata = {}

export default async function Home() {
  const listinResult = await filterListings(1, 8)
  return (
    <Layout fillSize={false} className='space-y-10 lg:space-y-28'>
      <HomeCategoryFilterSection />
      <HomePopularCentersSection />
      <HomeListingSection res={listinResult} />
      <HomeBusinessSection />
    </Layout>
  )
}
