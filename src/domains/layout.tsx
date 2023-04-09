import { Inter } from 'next/font/google'
import { Header } from './_/Header'
import { Footer } from './_/Footer'

const inter = Inter({ subsets: ['latin'] })

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={inter.className} data-theme="dark"
      style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <Header />

      <main style={{ height: '100%' }}>
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default GlobalLayout
