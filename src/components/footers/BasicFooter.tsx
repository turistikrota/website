import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function BasicFooter() {
  const t = useTranslations('footer')
  return (
    <footer>
      <div className='overflow-hidden px-4 py-12 sm:px-6 lg:px-8'>
        <div className='mt-8 flex justify-center space-x-6'>
          <Link
            href='https://twitter.com/turistikrota'
            title='Turistikrota Twitter'
            className='text-gray-400 hover:text-gray-500'
            target='_blank'
          >
            <span className='sr-only'>Twitter</span>
            <i className='bx bx-sm bxl-twitter'></i>
          </Link>
          <Link
            href='https://instagram.com/turistikrota'
            title='Turistikrota Instagram'
            className='text-gray-400 hover:text-gray-500'
            target='_blank'
          >
            <span className='sr-only'>Instagram</span>
            <i className='bx bx-sm bxl-instagram'></i>
          </Link>
          <Link
            href='https://linkedin.com/company/turistikrota'
            title='Turistikrota LinkedIn'
            className='text-gray-400 hover:text-gray-500'
            target='_blank'
          >
            <span className='sr-only'>LinkedIn</span>
            <i className='bx bx-sm bxl-linkedin'></i>
          </Link>
          <Link
            href='https://github.com/turistikrota'
            title='Turistikrota GitHub'
            className='text-gray-400 hover:text-gray-500'
            target='_blank'
          >
            <span className='sr-only'>GitHub</span>
            <i className='bx bx-sm bxl-github'></i>
          </Link>
        </div>
        <p className='mt-8 text-center text-base text-gray-600 dark:text-gray-400'>
          © {new Date().getFullYear()} {t('copyright')}
        </p>
      </div>
    </footer>
  )
}
