// app/api/breadcrumbs/route.ts
import type { NextRequest } from 'next/server';
import { generateBreadcrumbs } from '@/funcs/generateBreadcrumbs'; // Twoja funkcja serwerowa

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get('pathname');
  if (!pathname) {
    return Response.json({ error: 'missing pathname' }, { status: 400 });
  }

  const breadcrumbs = await generateBreadcrumbs(pathname);
  return Response.json(breadcrumbs);
}