import { cubanoFont } from '@/shared/styles/fonts'

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className={cubanoFont.className} style={{ margin: '4rem 0', fontSize: '3rem' }}>Hey dev! 🚀</h1>

      <p>Estratégia de renderização padrão: <b>SSG</b> (Static Site Generation) - at build-time</p>

      <pre style={{ textAlign: 'left' }}>
        {`
          $ npm run build

          Route (pages)                                     Size
          ┌ ○ /                                             1.17 kB
          ├ ○ /404                                          1.25 kB
          ├ λ /api/hello                                    0 B
          ├ ○ /samples/next-image                           2.88 kB
          └ λ /samples/strategy-ssr/[name]                  1.8 kB
          + First Load JS shared by all                     85.3 kB

          λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
          ○  (Static)  automatically rendered as static HTML (uses no initial props)
        `}
      </pre>
    </div>
  )
}

export default HomePage
