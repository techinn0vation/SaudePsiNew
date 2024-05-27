import Script from 'next/script'
import React from 'react'

const Analytics = () => (
  <>
    <Script
      async
      src='https://www.googletagmanager.com/gtag/js?id=G-L1S6MDPDRK'
    />
    <Script id='google-analytics'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-L1S6MDPDRK');                
      `}
    </Script>
  </>
)

export default Analytics
