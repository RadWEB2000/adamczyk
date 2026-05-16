import type { T_BlogCard } from "@/ts/card.types";

export type T_Author = {
    fullname:string;
    occupation:string;
    image:T_ImageBase;
    bio:string;
}

export type T_Hero = {
    title:string;
    excerpt:string;
    readingTime:string;
    release:string;
    image:T_ImageBase;
}

export type T_RecommendedArticles = {
    title:string;
    cards:Array<T_BlogCard>;
}