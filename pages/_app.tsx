import '@picocss/pico/css/pico.min.css'
import '@/common/styles/global.css'
import '@/common/styles/pico-custom-theme.css'
import '@/common/styles/custom-quick-classes.css'

import { useConfigNextApp } from '@/common/hooks/useConfigNextApp'

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
