import { useEffect, useState } from 'react'

import '../styles/global.css'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import SEO from '../../next-seo.config'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { SetTheme } from '../styles/utils/colors'
import GlobalFonts from '../styles/utils/fonts'
import { Provider } from '../components/ui/provider'

function App({ Component, pageProps }) {
  // Configurações de acessibilidade (fontes e cores)
  const [contrast, setContrast] = useState(0)
  const [fontSize, setFontSize] = useState(0)

  useEffect(() => {
    localStorage.getItem('@contrast') != null
      ? setContrast(localStorage.getItem('@contrast'))
      : setContrast(0)
  }, [contrast])

  useEffect(() => {
    setFontSize(localStorage.getItem('@fontSize'))
    if (fontSize == 1) {
      document.querySelector('html').classList.add('font-large')
    } else {
      document.querySelector('html').classList.remove('font-large')
    }
  }, [fontSize])

  pageProps = {
    ...pageProps,
    contrast: setContrast,
    fontsize: setFontSize
  }

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" href="/img/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="canonical" href="https://poritfolio-projetos.vercel.app" />
          <meta name="application-name" content="Blog" />
          <meta name="description" content="Blog" />
          <meta
            name="google-site-verification"
            content="noz88T41NvGV2_gkHk_9RgQKnNY6NWxL3cI3Irwv3bE"
          />
        </Head>
        <GlobalFonts />
        <Component {...pageProps} />
        <SetTheme activeTheme={contrast} />
        <GlobalStyles />
        <DefaultSeo {...SEO} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
