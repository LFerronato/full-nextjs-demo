import { Header } from './_/layout/Header'
import { Footer } from './_/layout/Footer'
import { interFont } from '@/shared/styles/fonts'

// import { EasyChangePrimaryColorTheme } from './_/layout/EasyChangePrimaryColorTheme'

export const MAX_WIDTH = { maxWidth: '1400px', margin: '0 auto' }

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={interFont.className} data-theme="dark"
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

      {/* <EasyChangePrimaryColorTheme /> */}

    </div>
  )
}

export default GlobalLayout
