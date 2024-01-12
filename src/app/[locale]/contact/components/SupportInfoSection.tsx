import { Locales } from '@turistikrota/ui'
import Alert from '@turistikrota/ui/alert'
import Button from '@turistikrota/ui/button'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'
import { SiteUrls } from '~/static/site'

const SupportInfoSection: FC = () => {
  const t = useTranslations('contact.info')
  const locale = useLocale()
  return (
    <section className='container mx-auto py-2'>
      <Alert type='info' showIcon>
        <Alert.Title>{t('title')}</Alert.Title>
        <Alert.Description>
          {t('description')}
          <Link href={SiteUrls.support[locale as Locales]}>
            <Button variant='primary' size='sm' block={false} className='mt-2 flex items-center justify-center gap-1'>
              <i className='bx bx-link-external text-md' />
              {t('button')}
            </Button>
          </Link>
        </Alert.Description>
      </Alert>
    </section>
  )
}

export default SupportInfoSection
