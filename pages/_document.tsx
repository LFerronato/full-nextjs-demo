import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body
        style={{
          backgroundImage: 'url("/grid.svg")',
          backgroundRepeat: 'repeat',
          backgroundColor: '#0a0a0b',
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
