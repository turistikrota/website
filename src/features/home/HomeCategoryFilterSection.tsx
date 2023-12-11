'use client'

import { FC } from 'react'
import CategoryFilterSection from './CategoryFilterSection'

const HomeCategoryFilterSection: FC = () => {
  return (
    <section className='relative flex h-screen flex-col items-center justify-center gap-8 p-4 lg:p-0'>
      <div
        className='absolute left-0 top-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat opacity-50'
        style={{
          backgroundImage: 'url(/building/forest-villa.jpg)',
        }}
      ></div>
      <div className='z-10'>
        <h1 className='text-center text-4xl font-semibold text-white'>
          Gerçek turizm deneyimi turistikrota ile yaşanır
        </h1>
      </div>
      <CategoryFilterSection />
    </section>
  )
}

export default HomeCategoryFilterSection
