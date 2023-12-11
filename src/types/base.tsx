export type BaseProps = {
  children: React.ReactNode
}

export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'vip'

export type LayoutProps = {
  params: {
    locale: string
  }
}

export type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'gray'
  | 'gray-text'
  | 'transparent'
  | 'opacity'
  | 'vip'
