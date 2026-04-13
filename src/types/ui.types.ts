import type { ReactNode } from "react"

export type T_MarqueeWrapper = {
    children:ReactNode;
    speed?:number;
    gap?:number;
    direction?:"left"|"right";
    pauseOnHover?:boolean;
    styles?:string;
}

export type T_BreadcrumbItem = {
    label:string;
    href:string;
}

export type T_Breadcrumbs = {
    home?:T_BreadcrumbItem;
    items:Array<T_BreadcrumbItem>;
}

export type T_RegularHero = {
    breadcrumbs:T_Breadcrumbs;
    title:string;
    subtitle:string;
    content?:string;
}