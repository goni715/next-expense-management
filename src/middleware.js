import {NextResponse} from "next/server";
import {cookies} from "next/headers";

export function middleware(req) {
    const path = req.nextUrl.pathname
    //console.log(path)

    const token = cookies().get('token')?.value || '';


    const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'


    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail'
    ]
}