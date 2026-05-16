import { headers } from "next/headers";
import { getBreadcrumbs } from "@/data/queries/getBreadcrumbs";

function convertToUri(pathname:string):string{
    let path = pathname;
    if (pathname.startsWith('http')) {
        try {
            path = new URL(pathname).pathname;
        } catch {
            path = pathname;
        }
    }
    path = path.split('?')[0].split('#')[0];
    return '/' + path.replace(/^\/|\/$/g, '');
}
export async function generateBreadcrumbs() {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || 
                    headersList.get('next-url') ||
                    headersList.get('x-url') ||
                    headersList.get('referer');
    if(!pathname) return [];
    const uri = convertToUri(pathname);
    const segments = uri.split('/').filter(Boolean);
    const breadcrumbs: Array<{href:string;label:string}> = [];
    let currentPath = '';
    for (const segment of segments) {
        currentPath += '/' + segment;
        try {
            const data = await getBreadcrumbs(currentPath);
            breadcrumbs.push({href:currentPath,label:data.label});
        } catch {
            const label = segment.replace(/-/g, " ");
            breadcrumbs.push({href:currentPath,label});
        }
    }
    console.log(breadcrumbs)
    return breadcrumbs;
}   