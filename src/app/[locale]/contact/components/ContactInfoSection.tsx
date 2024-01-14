import KeyValue from '@turistikrota/ui/key-value'
import LandingSection from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

const ContactInfoSection: FC = () => {
  const t = useTranslations('contact')
  return (
    <LandingSection>
      <LandingSection.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-14 grid grid-cols-2 gap-2 pb-2'>
        <KeyValue label={t('tradeName')} value='Turistik Rota' />
        <KeyValue label={t('companyName')} value='Sami Salih İbrahimbaş' />
        <KeyValue
          label={t('address')}
          value='Çayiçi mahallesi Sönmez caddesi no:75 iç kapı no:1 Sapanca/Sakarya, Türkiye'
        />
        <KeyValue label={t('kepAddress')} value='samisalih.ibrahimbas@hs01.kep.tr' />
        <KeyValue label={t('supportEmail')} value='support@turistikrota.com' />
        <KeyValue label={t('techEmail')} value='tech@turistikrota.com' />
      </div>
    </LandingSection>
  )
}

export default ContactInfoSection
