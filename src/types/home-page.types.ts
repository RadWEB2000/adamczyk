import type { T_ButtonBase } from "@/ts/buttons.types";
import type { T_HomeBlogCard, T_HomeCaseStudyCard, T_HomeServiceCard, T_TestimonialCard } from "@/ts/card.types";

export type T_Hero = {
    title:string;
    subtitle:string;
    content:string;
    buttons:Array<T_ButtonBase>;
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

export type T_Overview = {
    content:string;
}

export type T_About = {
    title:string;
    subtitle:string;
    content:string;
    button:T_ButtonBase;
    badges:Array<string>;
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

export type T_Blog = {
    title:string;
    subtitle:string;
    content:string;
    button:T_ButtonBase;
    cards:Array<T_HomeBlogCard>
}

export type T_CaseStudiesSection = {
    title:string;
    subtitle:string;
    content:string;
}

export type T_CaseStudiesList = {
    cards:Array<T_HomeCaseStudyCard>;
}

export type T_CaseStudies = T_CaseStudiesSection & T_CaseStudiesList & {
    button:T_ButtonBase;
}

export type T_ServicesList = {
    cards:Array<T_HomeServiceCard>;
}

export type T_Services = {
    title:string;
    subtitle:string;
    content:string;
    button:T_ButtonBase;
    cards:Array<T_HomeServiceCard>
}

export type T_Testimonials = {
    cards:Array<T_TestimonialCard>
}