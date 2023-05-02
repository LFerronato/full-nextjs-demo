import { HTMLAttributes } from 'react'

export const Footer = ({ style, ...rest }: HTMLAttributes<HTMLElement>) => {
  return (
    <footer style={{ background: '#222', textAlign: 'center', padding: '0.2rem', fontSize: '0.5rem', ...style }} {...rest}>
      this page is under development - <a href="https://github.com/LFerronato/full-nextjs-demo" target="_blank">See code on GitHub</a>
    </footer>
  )
}
