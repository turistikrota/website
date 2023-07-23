import { useTranslations } from 'next-intl'
import Alert from '@turistikrota/ui/alert'

export default function MaintenanceAlert() {
  const t = useTranslations('maintaining.page')

  return (
    <Alert type='info'>
      <Alert.Title>{t('title')}</Alert.Title>
      <Alert.Description>{t('description')}</Alert.Description>
    </Alert>
  )
}
