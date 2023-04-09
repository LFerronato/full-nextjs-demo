import Link from "next/link"
import { useRouter } from "next/router"

export const Header = () => {
  const { push } = useRouter()
  
  return (
    <header style={{ borderBottom: '1px solid gray' }}>
      <nav style={{ padding: '0 1rem' }}>
        <ul>
          <li><strong>Demonstração NEXT.JS</strong></li>
        </ul>
        <ul style={{ fontSize: '0.7rem' }}>
          <li><button style={{ padding: '0.1rem 0.5rem' }} onClick={() => push('/')}>Home</button></li>
          <li><Link href="/samples/strategy-ssr">Sample SSR</Link></li>
          <li><Link href="/samples/strategy-isr">Sample ISR</Link></li>
          <li><Link href="/samples/next-image">Sample Image</Link></li>
        </ul>
      </nav>
    </header >
  )
}
