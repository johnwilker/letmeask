import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-bg-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
