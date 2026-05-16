// lib/breadcrumbs.ts
import { getBreadcrumbs } from '@/data/queries/getBreadcrumbs';

export async function generateBreadcrumbs(pathname: string) {
  if (!pathname || pathname === '/') return [];

  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: { href: string; label: string }[] = [];
  let currentPath = '';

  for (const segment of segments) {
    currentPath += '/' + segment;
    try {
      const data = await getBreadcrumbs(currentPath);
      breadcrumbs.push({ href: currentPath, label: data.label });
    } catch {
      const label = segment.replace(/-/g, ' ');
      breadcrumbs.push({ href: currentPath, label });
    }
  }
  return breadcrumbs;
}