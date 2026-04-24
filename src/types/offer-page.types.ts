import type { T_ButtonBase as Button} from "@/ts/buttons.types";
import type { T_RegularCaseStudyCard as Card, T_RegularCityCard as City, T_PartnershipBenefitCard as Benefit, T_OfferServiceCard as Offer} from "@/ts/card.types";

type Section = {
    title:string;
    subtitle:string;
    content:string;
}

export type T_CaseStudies = Section & {
    button?:Button;
    cards:Array<Card>;
}

export type T_CitiesSection = Section & {
    cards:Array<City>
}

export type T_IndustriesSection = Section & {
    cards:Array<Omit<Section,'subtitle'>>
}

export type T_PartnershipBenefitsTiles = {
    cards:Array<Benefit>;
}

export type T_PartnershipBenefits = T_PartnershipBenefitsTiles & Section & {
    image:T_ImageBase;
}

export type T_Services = {
    services:Array<Offer>
}

export type T_Steps = Section & {
    steps:Array<Omit<Section,'subtitle'>>
}