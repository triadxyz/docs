import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <body className="bg-white antialiased dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
