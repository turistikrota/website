import HomeCategoryFilterSection from '~/features/home/HomeCategoryFilterSection'
import { Layout } from '../layouts/default'

export default function Home() {
  return (
    <Layout fillSize={false} useEffects={false}>
      <HomeCategoryFilterSection />
    </Layout>
  )
}
