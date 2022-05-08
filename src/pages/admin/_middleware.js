// import typ{ NextFetchEvent, NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function middleware(req, ev) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  };
  const session = await getSession({ req: requestForNextAuth });
  if (session?.user?.role == 1) {
    return NextResponse.next();
  } else {
    // the user is not logged in, redirect to the sign-in page
    const signInPage = '/auth/login';
    const signInUrl = new URL(signInPage, req.nextUrl.origin);
    signInUrl.searchParams.append('callbackUrl', req.url);
    return NextResponse.redirect(signInUrl);
  }
}