import MobileAppLanding from '~/components/mobile/MobileAppLanding'
import DefaultLayout from '../layouts/default'

type Props = {
  params: {
    locale: string
  }
}

export default function Home({ params: { locale } }: Props) {
  return (
    <DefaultLayout withoutFooter fullHeight>
      <MobileAppLanding></MobileAppLanding>
    </DefaultLayout>
  )
}
