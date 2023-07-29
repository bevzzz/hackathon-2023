import Header from '@/components/header/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-slate-50'>
        <Header></Header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
