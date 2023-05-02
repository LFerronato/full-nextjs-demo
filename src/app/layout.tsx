import { interFont, outfitFont } from '@/common/fonts'

import { Header } from './_layout/Header'
import { Footer } from './_layout/Footer'

export const MAX_WIDTH = { maxWidth: '1400px', margin: '0 auto' }

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      data-theme="dark"
      className={`${interFont.className} ${outfitFont.variable}`}
      style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, background: '#0a0a0b' }} />

      <main className="p-rem" style={{ flexGrow: 1, width: '100%', ...MAX_WIDTH }}>
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default GlobalLayout
