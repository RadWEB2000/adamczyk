import { T_SecondaryLinkButton } from "@/ts/buttons.types";

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