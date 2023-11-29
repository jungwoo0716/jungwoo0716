import Link from 'next/link'
import Script from 'next/script';

const Header = () => {
  <Script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1067668052326016"
    crossOrigin="anonymous"
  />

  return (    
    <div>
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Always With Tech
      </Link>
      .
    </h2>
    <header>        
        <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1067668052326016"
        crossOrigin="anonymous"
      />
    </header>
    </div>
    
  )
}

export default Header
