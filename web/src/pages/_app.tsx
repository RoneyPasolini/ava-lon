import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '../contexts/ThemeContext'
import { SubjectProvider } from '../contexts/SubjectContext'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>AVA-LON</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider>
        <SubjectProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </SubjectProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}
