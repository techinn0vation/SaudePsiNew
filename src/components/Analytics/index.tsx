import React from 'react'

const Analytics = () => (
  <>
    <script
      async
      src='https://www.googletagmanager.com/gtag/js?id=G-N576E27H19'
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
    page_path: window.location.pathname,
  })
  `
      }}
    />
  </>
)

export default Analytics
