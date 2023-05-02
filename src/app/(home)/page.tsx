import { cubanoFont } from '@/common/fonts'

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={cubanoFont.className} style={{ margin: '4rem 0', fontSize: '3rem' }}>Hey dev! 🚀</h1>

      <p>Estratégia de renderização padrão: <b>SSG</b> (Static Site Generation) - at build-time</p>

      <hr style={{ margin: '2rem 0' }} />

      <pre style={{ textAlign: 'left' }}>
        {`
          $ npm run build

          Route (pages)                                                                 Size     First Load JS
          ┌ ○ /                                                                         1.43 kB        78.5 kB
          ├   /_app                                                                     0 B            74.8 kB
          ├ ○ /404                                                                      1.25 kB        81.9 kB
          ├ λ /api/hello                                                                0 B            74.8 kB
          ├ ○ /samples/next-image                                                       2.88 kB        79.9 kB
          ├ ○ /samples/strategy-isr                                                     1.48 kB        78.5 kB
          ├ ● /samples/strategy-isr/github-dash/[username] (ISR: 30 Seconds) (7163 ms)  1.97 kB          79 kB
          ├   └ css/642fa8de1a6c1849.css                                                1.13 kB
          ├   └ /samples/strategy-isr/github-dash/vercel (7163 ms)
          ├ ○ /samples/strategy-ssr                                                     1.8 kB         82.4 kB
          └ λ /samples/strategy-ssr/[name]                                              1.8 kB         82.4 kB
          + First Load JS shared by all                                                 84.9 kB
            ├ chunks/framework-2c79e2a64abdb08b.js                                      45.2 kB
            ├ chunks/main-57106ad51f243321.js                                           27.3 kB
            ├ chunks/pages/_app-3d83e83188859648.js                                     666 B
            ├ chunks/webpack-8c1a3e2c33c26bcf.js                                        1.62 kB
            └ css/e932be39fee0ea08.css                                                  10.1 kB

          ƒ Middleware                                                                  21.4 kB

          λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
          ○  (Static)  automatically rendered as static HTML (uses no initial props)
          ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
             (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
        `}
      </pre>
    </div>
  )
}

export default HomePage
