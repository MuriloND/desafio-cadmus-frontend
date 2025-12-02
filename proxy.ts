import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const token = request.cookies.get('cadmus.token')?.value

  const { pathname } = request.nextUrl

  const isPublicRoute = pathname === '/login' || pathname === '/'
  const isPrivateRoute = pathname.startsWith('/dashboard')

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!token && isPrivateRoute) {
    // TODO: deletar o cookie se ele existir mas for inválido
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Corresponde a todos os caminhos de solicitação, exceto:
     * 1. /api/ (rotas de API)
     * 2. /_next/ (arquivos estáticos do Next.js)
     * 3. /_static (arquivos estáticos dentro da pasta public)
     * 4. arquivos com extensão (ex: favicon.ico, vercel.svg, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}