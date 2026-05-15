import type { T_ButtonBase} from "@/ts/buttons.types";
import type { T_RegularCityCard as City, T_PartnershipBenefitCard, T_RegularCaseStudyCard} from "@/ts/card.types";

type Section = {
    title:string;
    subtitle:string;
    content:string;
}

export type T_CaseStudies = {
    title:string;
    content:string;
    subtitle:string;
    button:T_ButtonBase;
    cards:Array<T_RegularCaseStudyCard> | null
}

export type T_CitiesSection = Section & {
    cards:Array<City>
}

export type T_IndustriesSection = {
    title:string;
    content:string;
    subtitle:string;
    cards:Array<{
        title:string;
        content:string;
        button:T_ButtonBase | null;
    }>
}

export type T_PartnershipBenefitsTiles = {
   reasons: Array<Omit<T_PartnershipBenefitCard,'isOpen'|'onToggle'>>
}

export type T_PartnershipBenefits =  T_PartnershipBenefitsTiles & {
    title:string;
    content:string;
    subtitle:string;
    image: {
        alt:string;
        src:string;
        srcSet:string;
        title:string;
        sizes:string;
        height:number;
        width:number;
    };
    reasons: Array<{
        title:string;
        content:string;
    }>
}

export type T_Services = {
    services:Array<{
        title:string;
        content:string;
        subtitle:string;
        button:T_ButtonBase;
        subservices:Array<{
            id:string;
            title:string;
            uri:string;
        }> | null;
    }>
}

export type T_Step = {
    title:string;
    content:string;    
}

export type T_Steps = {
    title:string;
    content:string;
    subtitle:string;
    steps:Array<T_Step>
}