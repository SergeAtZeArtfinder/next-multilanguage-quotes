import { appWithTranslation } from 'next-i18next'

import type { AppProps } from 'next/app'

import Navigation from '@/components/Navigation'
import '@/styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
