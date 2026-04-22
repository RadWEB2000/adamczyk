import type { T_ButtonBase } from "@/ts/buttons.types";
import type { T_BlogCard, T_HomeCaseStudyCard, T_HomeServiceCard, T_HomeTestimonialCard } from "@/ts/card.types";

export type T_Hero = {
    buttons:Array<T_ButtonBase>;
    content:string;
    image:T_ImageBase;
    subtitle:string;
    title:string;
}

export type T_Overview = {
    content:string;
}

export type T_About = {
    button:T_ButtonBase;
    content:string;
    image:T_ImageBase;
    subtitle:string;
    tags:Array<{
        emoji:string;
        title:string;
    }>;
    title:string;
}

export type T_Blog = {
    title:string;
    subtitle:string;
    content:string;
    button:T_ButtonBase;
    cards:Array<T_BlogCard>;
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

export type T_Services = T_ServicesList & {
    title:string;
    subtitle:string;
    content:string;
    button:T_ButtonBase;
}

export type T_Testimonials = {
    cards:Array<T_HomeTestimonialCard>
}