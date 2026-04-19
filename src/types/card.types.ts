import { T_SecondaryLinkButton } from "@/ts/buttons.types";
import { LinkProps } from "next/link";

export type T_RegularCityCard = {
    city:string;
    image:T_ImageBase;
    href:string;
} & Omit<LinkProps,'href'>

export type T_PartnershipBenefitCard = {
    title:string;
    content:string;
    onToggle: () => void;
    isOpen:boolean;
}

export type T_OfferServiceCard = {
    title:string;
    subtitle:string;
    content:string;
    button:Pick<T_SecondaryLinkButton,'href'|'label'>;
    subservices?:Array<{
        label:string;
        href:string;
    }>
    image:T_ImageBase;
}