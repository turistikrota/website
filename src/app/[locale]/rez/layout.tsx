import React from 'react'
import { Layout } from '~/app/layouts/default'

export default function RezLayout({ children }: React.PropsWithChildren) {
  return (
    <Layout fillSize={false} className='space-y-10 lg:space-y-28'>
      {children}
    </Layout>
  )
}
