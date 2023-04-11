import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type HeaderLinkProps = PropsWithChildren & LinkProps

export const HeaderLink = ({ children, ...linkProps }: HeaderLinkProps) => {
  const { route } = useRouter()
  const isCurrentRoute = route === linkProps.href

  return (
    <li>
      <Link
        style={{
          textDecoration: !isCurrentRoute ? undefined : 'underline',
          fontWeight: !isCurrentRoute ? undefined : 'bold',
          fontFamily: 'monospace',
        }}
        {...linkProps}
      >{children}</Link>
    </li>
  )
}
