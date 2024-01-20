import { Locales } from '@turistikrota/ui'
import Footer from '@turistikrota/ui/footer'
import { useLocale, useTranslations } from 'next-intl'
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
  noNewTab?: boolean
}

type StoreCardProps = {
  link: string
  icon: string
  title: string
  text: string
}

const StoreCard: FC<StoreCardProps> = ({ link, icon, title, text }) => {
  return (
    <Link
      href={link}
      target='_blank'
      className='flex w-full min-w-max items-center gap-2 rounded-md border p-2 sm:w-48'
    >
      <div className='flex w-10 min-w-max items-center justify-center'>
        <i className={`bx bx-sm ${icon}`}></i>
      </div>
      <div className='flex w-full flex-col'>
        <span className='text-md font-semibold'>{title}</span>
        <span className='text-sm'>{text}</span>
      </div>
    </Link>
  )
}

const LinkItem: FC<LinkItemProps> = ({ title, icon, href, hideText, withI18n, noNewTab }) => {
  if (withI18n)
    return (
      <I18nLink
        href={href as any}
        title={title}
        className={`text-gray-600 duration-200 hover:brightness-125 dark:text-gray-300 ${
          icon ? 'flex w-fit items-center gap-2' : ''
        }`}
        target={noNewTab ? undefined : '_blank'}
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
          <Footer.Grid.Col.Item>
            <LinkItem href={'https://tech.turistikrota.com'} title={t('grid.company.tech-team')} />
          </Footer.Grid.Col.Item>
        </Footer.Grid.Col>
        <Footer.Grid.Col title={t('grid.company.title')}>
          <Footer.Grid.Col.Item>
            <LinkItem href={getStaticRoute(locale).aboutUs} title={t('grid.company.about-us')} withI18n noNewTab />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href={getStaticRoute(locale).support} title={t('grid.company.support')} withI18n />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href={getStaticRoute(locale).help} title={t('grid.company.help')} />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <LinkItem href={getStaticRoute(locale).contact} title={t('grid.company.contact-us')} withI18n noNewTab />
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
            <StoreCard
              link='https://testflight.apple.com/join/2DbHY7wQ'
              title={t('apps.appstore')}
              text={t('apps.download')}
              icon='bxl-apple'
            />
          </Footer.Grid.Col.Item>
          <Footer.Grid.Col.Item>
            <StoreCard
              link='https://play.google.com/store/apps/details?id=com.turistikrota.app'
              title={t('apps.playstore')}
              text={t('apps.download')}
              icon='bxl-play-store'
            />
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
          <StoreCard
            link='https://testflight.apple.com/join/2DbHY7wQ'
            title={t('apps.appstore')}
            text={t('apps.download')}
            icon='bxl-apple'
          />
          <StoreCard
            link='https://play.google.com/store/apps/details?id=com.turistikrota.app'
            title={t('apps.playstore')}
            text={t('apps.download')}
            icon='bxl-play-store'
          />
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
