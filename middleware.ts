import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const cookie = request.cookies.has("quiz-session");
    console.log(request.url + " [Middleware]")
    if (!cookie && !request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/((?!api|register|script|_next/static|_next/image|.*\\.png$).*)'],
}