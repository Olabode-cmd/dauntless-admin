// import typ{ NextFetchEvent, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const session = await getToken({ req, secret: process.env.SECRET })
    if (session && session?.user?.role == 1) {
        console.log('i worked')
        return NextResponse.next();
    }
    // the user is not logged in, redirect to the sign-in page
    const signInPage = '/auth/logout';
    const signInUrl = new URL(signInPage, req.nextUrl.origin);
    signInUrl.searchParams.append('callbackUrl', req.url);
    console.log('admin is not for you')
return NextResponse.redirect(signInUrl);

}