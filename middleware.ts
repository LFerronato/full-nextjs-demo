import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/samples') {
    return NextResponse.redirect(request.nextUrl.origin + '/samples/next-image')
  }

  // if (request.nextUrl.pathname.startsWith('/samples/middleware/auth-routes/admin-painel')) {
  //   if (!request.cookies.get('token'))
  //     return NextResponse.redirect(request.nextUrl.origin + '/samples/middleware/auth-routes/login')
  // }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // '/samples/middleware/*',
  ],
}
