import { useTranslations } from 'next-intl'
import { FC } from 'react'

type Props = {
  description?: string
  className?: string
}

const NoResultFound: FC<Props> = ({ description, className }) => {
  const t = useTranslations('common.noResult')
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 text-gray-600 dark:text-gray-200 ${
        className ? className : ''
      }`}
    >
      <i className='bx bx-2xl bx-search-alt'></i>
      <h1 className='mb-2 text-center text-2xl font-bold'>{t('title')}</h1>
      <p className='mb-2 text-center text-lg text-gray-700 dark:text-gray-300'>
        {description ? description : t('description')}
      </p>
    </div>
  )
}

export default NoResultFound
