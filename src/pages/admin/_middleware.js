// import typ{ NextFetchEvent, NextRequest } from 'next/server';
import { getSession, signOut } from 'next-auth/react';
import { NextResponse } from 'next/server';

export async function middleware(req, ev) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get('cookie'),
    },
  };
  const session = await getSession({ req: requestForNextAuth });
  const timestamp = new Date().getTime();
  const expire = new Date(session?.expires);
  const expiresIn = expire.getTime() - timestamp;
  // console.log(expiresIn);
  if (session?.user?.role == 1) {
    return NextResponse.next();
  } else {
    // the user is not logged in, redirect to the sign-in page
    const signInPage = '/auth/logout';
    const signInUrl = new URL(signInPage, req.nextUrl.origin);
    signInUrl.searchParams.append('callbackUrl', req.url);
    return NextResponse.redirect(signInUrl);
  }
}