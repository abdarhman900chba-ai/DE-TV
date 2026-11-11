// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // إذا كان الرابط يبدأ بـ /de مسبقاً، أو خاص بملفات النظام، دعه يمر فوراً دون تعديل
  if (
    pathname.startsWith('/de') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // إعادة توجيه الرابط الأساسي ليصبح تحت مسار /de بـلُطف
  const url = request.nextUrl.clone();
  url.pathname = `/de${pathname === '/' ? '' : pathname}`;
  
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};