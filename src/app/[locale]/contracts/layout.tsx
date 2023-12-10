import DefaultLayout from '~/app/layouts/default'

export default function ContractLayout({ children }: React.PropsWithChildren) {
  return (
    <DefaultLayout>
      <section className='contract-page mx-auto max-w-7xl p-4'>{children}</section>
    </DefaultLayout>
  )
}
