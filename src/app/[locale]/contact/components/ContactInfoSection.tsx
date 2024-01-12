import { useTranslations } from 'next-intl'
import { FC } from 'react'
import KeyValue from '~/components/KeyValue'

const ContactInfoSection: FC = () => {
  const t = useTranslations('contact')
  return (
    <section className='container mx-auto grid grid-cols-2 gap-2 pb-2'>
      <KeyValue label={t('tradeName')} value='Turistik Rota' />
      <KeyValue
        label={t('address')}
        value='Çayiçi mahallesi Sönmez caddesi no:75 iç kapı no:1 Sapanca/Sakarya, Türkiye'
      />
      <KeyValue label={t('kepAddress')} value='samisalih.ibrahimbas@hs01.kep.tr' />
      <KeyValue label={t('taxOffice')} value='Sapanca' />
      <KeyValue label={t('supportEmail')} value='destek@turistikrota.com' />
      <KeyValue label={t('techEmail')} value='tech@turistikrota.com' />
    </section>
  )
}

export default ContactInfoSection
