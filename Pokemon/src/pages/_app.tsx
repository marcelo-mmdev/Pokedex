import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ThemeST } from '../styles/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ThemeST}>
      <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
