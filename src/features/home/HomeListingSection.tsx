import Button from '@turistikrota/ui/button'
import LandingSection from '@turistikrota/ui/section/landing'
import { ListResponse } from '@turistikrota/ui/types'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'
import NoResultFound from '~/components/cards/NoResultFound'
import { Locales } from '~/static/page'
import { SiteUrls } from '~/static/site'
import ListingListCard from '../listing/card/ListingListCard'
import { ListingListItem } from '../listing/types/listing'

type Props = {
  res: ListResponse<ListingListItem>
}

const HomeListingSection: FC<Props> = ({ res }) => {
  const t = useTranslations('home.listing')
  const locale = useLocale()
  return (
    <LandingSection>
      <div className='flex flex-col justify-between md:flex-row'>
        <LandingSection.Head title={t('title')} subtitle={t('subtitle')} className='text-center md:text-left' />
        <div className='my-3 flex items-start justify-center md:my-5 md:justify-end'>
          <Link href={SiteUrls.listing[locale as Locales]} target='_blank'>
            <Button block={false} className='flex items-center justify-center gap-2'>
              <i className='bx bx-link-external text-lg' />
              {t('button')}
            </Button>
          </Link>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-12 gap-2'>
        {res.list.length === 0 && <NoResultFound description={t('no-result')} className='col-span-12' />}
        {res.list.length > 0 && res.list.map((li, index) => <ListingListCard key={index} {...li} />)}
      </div>
    </LandingSection>
  )
}

export default HomeListingSection
