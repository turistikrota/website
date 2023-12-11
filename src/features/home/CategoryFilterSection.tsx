'use client'

import Button from '@turistikrota/ui/button'
import Input from '@turistikrota/ui/form/input'
import Select from '@turistikrota/ui/form/select'
import { useIsDesktop } from '@turistikrota/ui/hooks/dom'
import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

enum Category {
  Listing = 'listing',
  Place = 'place',
}

const CategoryFilterSection: FC = () => {
  const t = useTranslations('home.category-filter')
  const isDesktop = useIsDesktop()
  const [category, setCategory] = useState<Category>(Category.Listing)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [word, setWord] = useState<string>('')
  return (
    <div className='z-10 mb-10 flex w-full flex-col gap-4 rounded-md bg-white/20 p-4 backdrop-blur-xs md:mb-44 md:max-w-4xl md:flex-row'>
      <div className='grid grow grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-4'>
          <Select
            label={t('category')}
            name='category'
            onChange={(e) => {
              setCategory(e.target.value as Category)
            }}
          >
            <option value={Category.Listing}>{t(Category.Listing)}</option>
            <option value={Category.Place}>{t(Category.Place)}</option>
          </Select>
        </div>
        {category === Category.Listing && (
          <>
            <div className='col-span-6'></div>
          </>
        )}
        {category === Category.Place && (
          <div className='col-span-12 md:col-span-8'>
            <Input label={t('word')} name='word' onChange={(e) => setWord(e.target.value)} />
          </div>
        )}
      </div>
      <div className='flex min-w-fit items-center'>
        <Button variant='primary' className='flex items-center justify-center gap-2' block={!isDesktop}>
          <i className='bx bx-search-alt-2 text-lg'></i>
          {t(category === Category.Listing ? 'search' : 'explore')}
        </Button>
      </div>
    </div>
  )
}

export default CategoryFilterSection
