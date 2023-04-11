import { HTMLAttributes } from 'react'
import { HeaderLink } from './HeaderLink'
import { MAX_WIDTH } from '@/domains/layout'

export const Header = ({ style, ...rest }: HTMLAttributes<HTMLElement>) => {
  return (
    <header style={{ borderBottom: '1px solid gray', ...style }} {...rest}>
      <nav style={{ padding: '0 1rem', ...MAX_WIDTH }}>
        <ul>
          <li><strong>Demonstração NEXT.JS</strong></li>
        </ul>
        <ul style={{ fontSize: '0.7rem' }}>
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/samples/strategy-ssr">Sample SSR</HeaderLink>
          <HeaderLink href="/samples/strategy-isr">Sample ISR</HeaderLink>
          <HeaderLink href="/samples/next-image">Sample Image</HeaderLink>
          <HeaderLink href="/samples/middleware">Sample Middleware</HeaderLink>
          <HeaderLink href="/onde-vc-ta-querendo-ir">404</HeaderLink>
        </ul>
      </nav>
    </header>
  )
}
