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
     * Sadece root path (/) için middleware çalıştır
     */
    '/'
  ],
}