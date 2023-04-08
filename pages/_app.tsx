import '@picocss/pico/css/pico.min.css'

import { useConfigNextApp } from '@/shared/hooks/useConfigNextApp'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { head, Layout } = useConfigNextApp({ Component })

  return (
    <>
      {head}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
