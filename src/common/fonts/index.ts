import { Inter, Outfit } from 'next/font/google'
import localFont from 'next/font/local'

export const interFont = Inter({
  subsets: ['latin'],
})

export const cubanoFont = localFont({
  src: './Cubano-Regular.otf',
})
