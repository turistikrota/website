import ModernLogo, { LinkComponent } from '@turistikrota/ui/logo/modern'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

const LogoLink: LinkComponent = ({ href, children, target }) => {
  return (
    <Link href={href} target={target}>
      {children}
    </Link>
  )
}

const ModernLogoProvider: FC = () => {
  const t = useTranslations('common')
  return (
    <div className='flex gap-1'>
      <ModernLogo
        LinkComponent={LogoLink}
        items={[
          { text: 'turistik', variant: 'secondary' },
          { text: 'rota', variant: 'primary' },
        ]}
        link={t('sites.main.link')}
        main
        active
      />
      <ModernLogo
        LinkComponent={LogoLink}
        items={[{ text: t('sites.listing.title'), variant: 'primary' }]}
        link={t('sites.listing.link')}
        openNewTab
      />
      <ModernLogo
        LinkComponent={LogoLink}
        items={[{ text: t('sites.places.title'), variant: 'primary' }]}
        link={t('sites.places.link')}
        openNewTab
      />
    </div>
  )
}

export default ModernLogoProvider
