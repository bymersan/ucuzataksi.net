import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // /anasayfa'ya gelen ziyaretçileri ana sayfaya yönlendir
  if (request.nextUrl.pathname === '/anasayfa') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * /anasayfa path'i için middleware çalıştır
     */
    '/anasayfa'
  ],
}