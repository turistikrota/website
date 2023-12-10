import DefaultLayout from '~/app/layouts/default'

export default function ContractLayout({ children }: React.PropsWithChildren) {
  return (
    <DefaultLayout>
      <section className='contract-page p-4 mx-auto max-w-7xl'>{children}</section>
    </DefaultLayout>
  )
}
