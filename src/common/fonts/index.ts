import { Inter, Outfit } from 'next/font/google'
import localFont from 'next/font/local'

export const cubanoFont = localFont({
  src: './Cubano-Regular.otf',
})

export const interFont = Inter({
  subsets: ['latin'],
})

export const outfitFont = Outfit({
  weight: ['500'],
  subsets: ['latin'],
  variable: '--font-numeric',
})
