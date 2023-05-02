import { HTMLAttributes } from 'react'
import { HeaderLink } from './HeaderLink'
import { MAX_WIDTH } from '@/app/layout'
import { cubanoFont } from '@/common/fonts'

export const Header = ({ style, ...rest }: HTMLAttributes<HTMLElement>) => {
  return (
    <header style={{ borderBottom: '1px solid gray', ...style }} {...rest}>
      <nav style={{ padding: '0 1rem', ...MAX_WIDTH }}>
        <ul>
          <li><strong className={cubanoFont.className}>Demonstração NEXT.JS</strong></li>
        </ul>
        <ul style={{ fontSize: '0.7rem' }}>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/samples/strategy-ssr">SSR</HeaderLink>
          <HeaderLink href="/samples/strategy-isr">ISR</HeaderLink>
          <HeaderLink href="/samples/next-image">Image</HeaderLink>
          <HeaderLink href="/samples/middleware">Middleware</HeaderLink>
          <HeaderLink href="/where-are-you-going">404</HeaderLink>
        </ul>
      </nav>
    </header>
  )
}
