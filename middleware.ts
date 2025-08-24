import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Ana sayfaya gelen ziyaretçileri /anasayfa'ya yönlendir
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/anasayfa', request.url))
  }
  
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
     * - sitemap.xml, robots.txt (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon|sitemap|robots).*)',
  ],
}