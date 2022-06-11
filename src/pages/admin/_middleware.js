// import typ{ NextFetchEvent, NextRequest } from 'next/server';
import { getSession, signOut } from 'next-auth/react';
import { NextResponse } from 'next/server';
import {nextLocalStorage} from '../api/lib/service'

export async function middleware(req, ev) {
const data = nextLocalStorage()?.getItem('tokenExpires')
  if (data) {
      console.log(data)
    return NextResponse.next();
  } else {
    // the user is not logged in, redirect to the sign-in page
    const signInPage = '/auth/logout';
    const signInUrl = new URL(signInPage, req.nextUrl.origin);
    signInUrl.searchParams.append('callbackUrl', req.url);
    return NextResponse.redirect(signInUrl);
  }
}