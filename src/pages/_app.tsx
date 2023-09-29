import { Toaster } from 'react-hot-toast'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '~/styles/main.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" sizes="32x32" type="image/svg+xml" href="/favicon-32x32.svg" />
        <link rel="icon" sizes="16x16" type="image/svg+xml" href="/favicon-16x16.svg" />
      </Head>

      <Component {...pageProps} />
      <Toaster />
    </>
  )
}
