type Props = {
  locale: string
}

export default function PwaHead({ locale }: Props) {
  return (
    <>
      <link rel='manifest' href={`/manifests/manifest.${locale}.json`} />
      <meta name='application-name' content='Turistikrota' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#33a6e6' />
      <meta name='apple-mobile-web-app-title' content='Turistikrota' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-config' content='/icons/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#87ceeb' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content='#33a6e6' />

      <link rel='apple-touch-icon' sizes='152x152' href='/manifests/ios/152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/manifests/ios/180.png' />
      <link rel='apple-touch-icon' sizes='167x167' href='/manifests/ios/167.png' />
      <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
      />
    </>
  )
}
