'use client'

import React, { ReactNode } from 'react'

import Analytics from 'components/Analytics'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import WhatsApp from 'components/WhatsApp'
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
          <body className={mainFont.className}>
            <Container>
              <Menu />
              {children}
              <Footer />
              <WhatsApp />
              <Analytics />
            </Container>
          </body>
        </html>
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
