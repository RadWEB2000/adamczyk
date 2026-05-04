export function getExtractJsonLd(raw:string){
    const match = raw.match(/<script[^>]*>([\s\S]*?)<\/script>/);
    return match ? match[1] : raw;
}