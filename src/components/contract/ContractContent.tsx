import { Props } from '@mdx-js/react/lib'

export const ContractContentProps: Props = {
  components: {
    h1: ({ children }) => <h1 className='mb-3 text-center text-2xl font-bold'>{children}</h1>,
    h2: ({ children }) => (
      <h2
        className='my-3 text-xl font-bold text-gray-900 dark:text-gray-200
            '
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className='mb-1 text-lg font-bold text-gray-800 dark:text-gray-300'>{children}</h3>,
    h4: ({ children }) => <h4 className='text-base font-bold'>{children}</h4>,
    h5: ({ children }) => <h5 className='text-base font-bold'>{children}</h5>,
    h6: ({ children }) => <h6 className='text-base font-bold'>{children}</h6>,
    p: ({ children }) => <p className='text-base text-gray-700 dark:text-gray-400'>{children}</p>,
    a: ({ children, href }) => (
      <a className='text-base' href={href}>
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className='text-base'>{children}</ul>,
  },
}
