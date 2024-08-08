import { NextRequest, NextResponse } from 'next/server';

import { env } from './config';
import { getUrl } from './lib/getUrl';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(`${env.COOKIE_AUTH_PREFIX}.session-token`);
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL(getUrl('/dashboard/home')));
  }

  if (pathname.includes('/dashboard') && !token) {
    return NextResponse.redirect(new URL(getUrl('/auth/sign-in')));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
