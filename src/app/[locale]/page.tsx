import HomeBusinessSection from '~/features/home/HomeBusinessSection'
import HomeCategoryFilterSection from '~/features/home/HomeCategoryFilterSection'
import { Layout } from '../layouts/default'

export default function Home() {
  return (
    <Layout fillSize={false} useEffects={false} className='space-y-28'>
      <HomeCategoryFilterSection />
      <HomeBusinessSection />
    </Layout>
  )
}
