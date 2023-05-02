import NextLink from 'next/link'

type LinkProps = Parameters<typeof NextLink>[0]
const Link = ({ style, ...rest }: LinkProps) => (
  <NextLink
    style={{ padding: '2rem 0.5rem', backgroundColor: 'var(--primary-focus)', borderRadius: '8px', ...style }}
    {...rest}
  />
)

export const MiddlewarePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>

      <h1>Exemplos sobre o uso do Middleware</h1>

      <div className="grid">

        <Link href="/samples/middleware/auth-routes/login">
          Auth routes
        </Link>

        <Link href="/samples/middleware/mobile" aria-disabled>
          Redirect Mobile
        </Link>

        <Link href="/samples/middleware/geolocation" aria-disabled>
          Redirect Geolocalização
        </Link>

      </div>
    </div>
  )
}

export default MiddlewarePage
