import MobileAppLanding from '~/components/mobile/MobileAppLanding'
import { Layout } from '../../layouts/default'

export default function MobileAppView() {
  return (
    <Layout withoutFooter fullHeight>
      <MobileAppLanding></MobileAppLanding>
    </Layout>
  )
}
