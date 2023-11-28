import { AppProps } from 'next/app'
import '../styles/index.css'
import * as gtag from '../lib/gtags';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {

  gtag.useGtag();

  return (
    <div>
  <Component {...pageProps} /> 
  
  {process.env.NODE_ENV !== 'development' && (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )}
  </div>
  )
}
