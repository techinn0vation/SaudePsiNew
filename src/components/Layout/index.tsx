'use client'

// import Script from 'next/script'
import React, { ReactNode } from 'react'

import Analytics from 'components/Analytics'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import { ThemeProvider } from 'styled-components'

import { Container } from './styles'

import StyledComponentsRegistry from 'app/registry'
import { mainFont } from 'styles/FontConfig'
import { GlobalStyle } from 'styles/global'
import { theme } from 'themes/themes'
interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <html lang='pt-pt'>
          {/* <head>
            <Script
              async
              src='https://www.googletagmanager.com/gtag/js?id=G-L1S6MDPDRK'
            />
            <Script id='google-analytics'>
              {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'G-L1S6MDPDRK');                `}
            </Script>
          </head> */}
          <body className={mainFont.className}>
            <Container>
              <Menu />
              {children}
              <Footer />
              <Analytics />
            </Container>
          </body>
        </html>
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
