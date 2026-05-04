import { getSEO } from "@/data/queries/getSEO";
import { getExtractJsonLd } from "@/funcs/getExtractJsonLd";
import type { Metadata } from "next";

export async function generateSEO(uri:string): Promise<{ metadata: Metadata; structuredData: string }>{
    const {meta,og} = await getSEO({uri:'/'});
    return {
        metadata: {
            title:meta.title,
            description:meta.description,
            robots:meta.robots,
            assets:'https://cms.adamczyk.top',
            generator:'Next.js',
            applicationName:'AdamczykTOP',
            authors:[
                {
                    name:'Radosław Adamczyk',
                    url:'https://adamczyk.top/o-mnie'
                }
            ],
            verification:{
                google:'teUxF4GoWvz8pKBQtWSPemc6SEfXPzOy3N4-NUP_8Hs',
            },
            openGraph:{
                ...og
            }
        },
        structuredData: getExtractJsonLd(meta.structuredData)
    }
}