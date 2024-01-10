import { Locales } from '@turistikrota/ui'
import Footer from '@turistikrota/ui/footer'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Paths } from '~/i18n.config'
import { I18nLink } from '~/navigation'
import { getStaticRoute } from '~/static/page'
import { SiteUrls } from '~/static/site'

type LinkItemProps = {
  title: string
  icon?: string
  href: string
  hideText?: boolean
  withI18n?: boolean
}

const LinkItem: FC<LinkItemProps> = ({ title, icon, href, hideText, withI18n }) => {
  if (withI18n)
    return (
      <I18nLink
        href={href as any}
        title={title}
        className={`text-gray-600 duration-200 hover:brightness-125 dark:text-gray-300 ${
          icon ? 'flex w-fit items-center gap-2' : ''
        }`}
        target='_blank'
      >
        <i className={`bx bx-sm ${icon}`}></i>
        {!hideText && title}
      </I18nLink>
    )
  return (
    <Link
      href={href}
      title={title}
      className={`text-gray-600 duration-200 hover:brightness-125 dark:text-gray-300 ${
        icon ? 'flex w-fit items-center gap-2' : ''
      }`}
      target='_blank'
    >
      <i className={`bx bx-sm ${icon}`}></i>
      {!hideText && title}
    </Link>
  )
}

const MagicFooter: FC = () => {
  const t = useTranslations('footer')
  const locale = useLocale()
  return (
    <Footer>
      <Footer.Grid>
        <Footer.Grid.Col title={t('grid.sites.title')}>
          <Footer.Grid.Col.Item>
            <LinkItem href={SiteUrls.places[locale as Locales]} title={t('grid.sites.places')} />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href={SiteUrls.listing[locale as Locales]} title={t('grid.sites.listing')} />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href={SiteUrls.businesses[locale as Locales]} title={t('grid.sites.business')} />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href={SiteUrls.account[locale as Locales]} title={t('grid.sites.account')} />
          </Footer.Grid.Col.Item>
        </Footer.Grid.Col>
        <Footer.Grid.Col title={t('grid.company.title')}>
          <Footer.Grid.Col.Item>
            <LinkItem href={getStaticRoute(locale).aboutUs} title={t('grid.company.about-us')} withI18n />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href={'mailto:tech@turistikrota.com'} title={t('grid.company.contact-us')} />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem
              href={'https://linkedin.com/company/turistikrota/people'}
              title={t('grid.company.meet-the-team')}
            />
          </Footer.Grid.Col.Item>
        </Footer.Grid.Col>
        <Footer.Grid.Col title={t('grid.social.title')}>
          <Footer.Grid.Col.Item>
            <LinkItem href='https://x.com/turistikrota' title='Twitter' icon='bxl-twitter' />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href='https://instagram.com/turistikrota' title='Instagram' icon='bxl-instagram' />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href='https://linkedin.com/company/turistikrota' title='LinkedIn' icon='bxl-linkedin' />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href='https://github.com/turistikrota' title='GitHub' icon='bxl-github' />
          </Footer.Grid.Col.Item>
        </Footer.Grid.Col>
        <Footer.Grid.Col title={t('grid.downloads.title')}>
          <Footer.Grid.Col.Item>
            <Link href={`https://testflight.apple.com/join/2DbHY7wQ`} target='_blank' className='flex w-fit'>
              <Image
                alt={'App Store'}
                src='/images/app-store.svg'
                className='bounce-top-icons h-12 pr-4'
                width={150}
                height={30}
              />
            </Link>
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <Link
              href={`https://play.google.com/store/apps/details?id=com.turistikrota.app`}
              target='_blank'
              className='flex w-fit'
            >
              <Image
                alt={'Play Store'}
                src='/images/play-store.svg'
                className='bounce-top-icons h-12'
                width={150}
                height={30}
              />
            </Link>
          </Footer.Grid.Col.Item>
        </Footer.Grid.Col>
      </Footer.Grid>

      <Footer.Mobile>
        <div className='flex gap-2'>
          <LinkItem href='https://x.com/turistikrota' title='Twitter' icon='bxl-twitter' hideText />
          <LinkItem href='https://instagram.com/turistikrota' title='Instagram' icon='bxl-instagram' hideText />
          <LinkItem href='https://linkedin.com/company/turistikrota' title='LinkedIn' icon='bxl-linkedin' hideText />
          <LinkItem href='https://github.com/turistikrota' title='GitHub' icon='bxl-github' hideText />
        </div>
        <div className='flex gap-2'>
          <Link href={`https://testflight.apple.com/join/2DbHY7wQ`} target='_blank' className='flex w-fit'>
            <Image
              alt={'App Store'}
              src='/images/app-store.svg'
              className='bounce-top-icons h-12 pr-4'
              width={150}
              height={30}
            />
          </Link>
          <Link
            href={`https://play.google.com/store/apps/details?id=com.turistikrota.app`}
            target='_blank'
            className='flex w-fit'
          >
            <Image
              alt={'Play Store'}
              src='/images/play-store.svg'
              className='bounce-top-icons h-12'
              width={150}
              height={30}
            />
          </Link>
        </div>
      </Footer.Mobile>

      <Footer.Copyright>
        <Footer.Copyright.Item>
          © {new Date().getFullYear()} {t('copyright')}
        </Footer.Copyright.Item>
        <Footer.Copyright.Item>
          <I18nLink className='duration-200 hover:brightness-125' href={Paths.contracts.termsOfUse}>
            {t('terms')}
          </I18nLink>
          &bull;
          <I18nLink
            className='duration-200 hover:brightness-125'
            href={Paths.contracts.privacyAndProtectionOfPersonalData}
          >
            {t('privacy-policy')}
          </I18nLink>
          &bull;
          <I18nLink className='duration-200 hover:brightness-125' href={Paths.contracts.cookies}>
            {t('cookies')}
          </I18nLink>
        </Footer.Copyright.Item>
      </Footer.Copyright>
    </Footer>
  )
}

export default MagicFooter
