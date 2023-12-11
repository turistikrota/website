import MobileAppLanding from '~/components/mobile/MobileAppLanding'
import { Layout } from '../layouts/default'

type Props = {
  params: {
    locale: string
  }
}

export default function Home({ params: { locale } }: Props) {
  console.log('page works')
  return (
    <Layout withoutFooter fullHeight>
      <MobileAppLanding></MobileAppLanding>
    </Layout>
  )
}
