import type { T_ButtonBase } from "@/ts/buttons.types";

type T_CardBase = {
    href: string;
    image: T_ImageBase;
    release: string;
    title: string;
}

export type T_BlogCard = T_CardBase & {
    author:string;
    excerpt:string;
}

export type T_HomeCaseStudyCard = T_CardBase & {
    excerpt:string;
    services:Array<string>;
}

export type T_HomeBlogCard = {
    author:string;
    title:string;
    date:string;
    excerpt:string;
    uri:string;
    image:{
        alt:string;
        src:string;
        srcSet:string;
        title:string;
        sizes:string;
        height:number;
        width:number;
    }
}

export type T_HomeServiceCardTile = {
    title:string;
    uri:string;
    excerpt:string;
}

export type T_HomeServiceCard = {
    title:string;
    subtitle:string;
    content:string;
    button:T_ButtonBase;
    cards:Array<T_HomeServiceCardTile> | null;
}

export type T_TestimonialCard = {
    date:string;
    image:{
        alt:string;
        src:string;
        srcSet:string;
        title:string;
        sizes:string;
        height:number;
        width:number;
    } | null;
    fullname:string;
    company:string;
    opinion:string;
}

export type T_Testimonials = {
    cards:Array<T_TestimonialCard>;
}

export type T_OfferServiceCard = {
    title:string;
    content:string;
    subtitle:string;
    button:T_ButtonBase;
    subservices:Array<{
        id:string;
        title:string;
        uri:string;
    }> | null;
}

export type T_PartnershipBenefitCard = {
    content:string;
    title:string;
    isOpen:boolean;
    onToggle: () => void;
}

export type T_RegularCaseStudyCard = {
    id:string;
    title:string;
    uri:string;
    excerpt:string;
    image: {
        alt:string;
        src:string;
        srcSet:string;
        title:string;
        sizes:string;
        height:number;
        width:number;
    }
}

export type T_RegularCityCard = {
    image:T_ImageBase;
} & T_ButtonBase