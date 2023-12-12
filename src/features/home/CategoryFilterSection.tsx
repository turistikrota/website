'use client'

import Button from '@turistikrota/ui/button'
import Input from '@turistikrota/ui/form/input'
import Select from '@turistikrota/ui/form/select'
import { useIsDesktop } from '@turistikrota/ui/hooks/dom'
import { useLocale, useTranslations } from 'next-intl'
import { FC, useState } from 'react'
import { getStaticRoute } from '~/static/page'

enum Category {
  Listing = 'listing',
  Place = 'place',
}

const CategoryFilterSection: FC = () => {
  const t = useTranslations('home.category-filter')
  const locale = useLocale()
  const isDesktop = useIsDesktop()
  const [category, setCategory] = useState<Category>(Category.Listing)
  const [startDate, setStartDate] = useState<string | undefined>(undefined)
  const [endDate, setEndDate] = useState<string | undefined>(undefined)
  const [word, setWord] = useState<string>('')

  const onClick = () => {
    if (category === Category.Place) {
      window.open(getStaticRoute(locale).places + `${word ? `?q=${word}` : ''}`, '_blank')
    }
    // listing not yet implemented
  }
  return (
    <div className='z-10 mb-10 flex w-full flex-col gap-4 rounded-md bg-second p-4 backdrop-blur-xs md:mb-44 md:max-w-4xl md:flex-row'>
      <div className='grid grow grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-3'>
          <Select
            label={t('category')}
            name='category'
            onChange={(e) => {
              setCategory(e.target.value as Category)
              setStartDate(undefined)
              setEndDate(undefined)
              setWord('')
            }}
          >
            <option value={Category.Listing}>{t(Category.Listing)}</option>
            <option value={Category.Place}>{t(Category.Place)}</option>
          </Select>
        </div>
        {category === Category.Listing && (
          <div className='col-span-12 flex w-full gap-x-4 md:col-span-9'>
            <div className='w-full'>
              <Input
                name='startDate'
                type='date'
                min={new Date().toISOString().split('T')[0]}
                max={endDate}
                autoComplete='off'
                label={t('start-date')}
                ariaLabel={t('start-date')}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <i className='bx bx-arrow-to-right text-2xl text-gray-700 dark:text-gray-300' />
            </div>
            <div className='w-full'>
              <Input
                name='endDate'
                type='date'
                min={startDate}
                autoComplete='off'
                label={t('end-date')}
                ariaLabel={t('end-date')}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        )}
        {category === Category.Place && (
          <div className='col-span-12 md:col-span-9'>
            <Input label={t('word')} name='word' onChange={(e) => setWord(e.target.value)} />
          </div>
        )}
      </div>
      <div className='flex min-w-fit items-center'>
        <Button
          variant='primary'
          className='flex items-center justify-center gap-2'
          block={!isDesktop}
          onClick={onClick}
        >
          <i className='bx bx-search-alt-2 text-lg'></i>
          {t(category === Category.Listing ? 'search' : 'explore')}
        </Button>
      </div>
    </div>
  )
}

export default CategoryFilterSection
