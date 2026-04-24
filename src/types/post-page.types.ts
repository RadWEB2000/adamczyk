import type { T_Breadcrumbs } from "@/ts/ui.types";
import type { T_BlogCard } from "@/ts/card.types";

export type T_Author = {
    fullname:string;
    occupation:string;
    image:T_ImageBase;
    bio:string;
}

export type T_Hero = {
    breadcrumbs:T_Breadcrumbs;
    title:string;
    excerpt:string;
    readingTime:number;
    release:string;
    image:T_ImageBase;
}

export type T_RecommendedArticles = {
    title:string;
    cards:Array<T_BlogCard>;
}