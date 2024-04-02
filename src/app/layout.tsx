import React, { ReactNode } from 'react'

import { Layout } from 'components/Layout'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <Layout>{children}</Layout>
}
