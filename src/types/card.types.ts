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

export type T_HomeServiceCardTile = {
    button:T_ButtonBase;
    content:string;
    title:string;
}

export type T_HomeServiceCard = {
    cards:Array<T_HomeServiceCardTile>;
    button:T_ButtonBase;
    content:string;
    title:string;
    subtitle:string;
}

export type T_HomeTestimonialCard = {
    company:string;
    content:string;
    fullname:string;
    image:T_ImageBase;
    release:string;
}

export type T_OfferServiceCard = {
    button:T_ButtonBase;
    content:string;
    image:T_ImageBase;
    title:string;
    subservices?:Array<Omit<T_ButtonBase,'lang'>>
    subtitle:string;
}

export type T_PartnershipBenefitCard = {
    content:string;
    isOpen:boolean;
    onToggle: () => void;
    title:string;
}

export type T_RegularCaseStudyCard = {
    content:string;
    image:T_ImageBase;
    href:string;
    title:string;
}

export type T_RegularCityCard = {
    city:string;
    image:T_ImageBase;
} & T_ButtonBase