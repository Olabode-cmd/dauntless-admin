// import typ{ NextFetchEvent, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
    const { origin } = req.nextUrl;
    const session = await getToken({ req, secret: process.env.SECRET })
    if (!session) {
        return NextResponse.redirect("/soon")
    }

    if (url.includes("/auth/login") && session) return NextResponse.redirect("/")
   
    return NextResponse.next()
}