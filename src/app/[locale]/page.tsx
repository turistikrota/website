import HomeBusinessSection from '~/features/home/HomeBusinessSection'
import HomeCategoryFilterSection from '~/features/home/HomeCategoryFilterSection'
import HomePopularCentersSection from '~/features/home/HomePopularCentersSection'
import { Layout } from '../layouts/default'

export default function Home() {
  return (
    <Layout fillSize={false} useEffects={true} className='space-y-10 lg:space-y-28'>
      <HomeCategoryFilterSection />
      <HomePopularCentersSection />
      <HomeBusinessSection />
    </Layout>
  )
}
