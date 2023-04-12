import '@picocss/pico/css/pico.min.css'
import '@/shared/styles/global.css'
import '@/shared/styles/pico-custom-theme.css'

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
