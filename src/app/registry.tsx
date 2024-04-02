import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode
}) {
  // Create the stylesheet instance only once with lazy initial state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  // Callback to handle styles during server inserted HTML
  const handleServerInsertedHTML = () => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  }

  // Return the styles for server-side rendered components
  useServerInsertedHTML(handleServerInsertedHTML)

  // If running on the client, no need for SSR styles, just render children
  if (typeof window !== 'undefined') {
    return <>{children}</>
  }

  // On the server, manage the stylesheet with StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}
