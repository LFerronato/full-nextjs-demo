import Link from "next/link"

export const Header = () => {
  return (
    <nav>
      <ul>
        <li><strong>Demonstração NEXT.JS</strong></li>
      </ul>
      <ul>
        <li><Link href="/sample-ssr">Sample SSR</Link></li>
        <li><Link href="/sample-ISG">Sample ISR</Link></li>
        <li><Link href="/sample-image">Sample Image</Link></li>
      </ul>
    </nav>
  )
}
