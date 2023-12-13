import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('====================================');
    console.log('JJ');
    console.log('====================================');
    const cookieStore = cookies();
    const { value } = cookieStore.get('isLogedin');
    console.log('====================================');
    console.log(value);
    console.log('====================================');
    if (value === 'true') {
        return NextResponse.redirect(new URL('/lllool', request.url));
    } else {
        return NextResponse.redirect(new URL('/', request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
};
