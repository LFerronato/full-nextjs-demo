import { Inter } from 'next/font/google'
import { Header } from './_/Header'

const inter = Inter({ subsets: ['latin'] })

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={inter.className} data-theme="dark">
      <header>
        <Header />
      </header>

      <main>
        {children}
      </main>

      <footer>
        footer
      </footer>
    </div>
  )
}

export default GlobalLayout
