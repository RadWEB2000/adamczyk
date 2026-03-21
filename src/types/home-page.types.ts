import type { ImageProps } from "next/image";
import type { ReactNode } from "react";

export type T_Hero = {
    title:string;
    subtitle:string;
    description:string;
    image:Pick<ImageProps,'src'|'alt'|'title'>;
    buttons:Array<{
        label:string;
        uri:string;
    }>
}

export type T_About = { 
    title:string;
    subtitle:string;
    image:Pick<ImageProps,'src'|'alt'|'title'>;   
    content:string;
    button:{
        label:string;
        href:string;
    };
    list:Array<{
        emoji:string;
        title:string;
    }>
}


export type T_StatisticsTile = {
    title:string;
    value:number;
    additionalValue?:string;
}

export type T_Statistics = {
    tiles:Array<T_StatisticsTile>
}

export type T_OfferCard = {
    title:string;
    subtitle:string;
    content:string;
    subservices:Array<{
        label:string;
        uri:string;
    }>
}

export type T_Offer = {
    title:string;
    subtitle:string;
    content:string;
    button:{
        label:string;
        href:string;
    };
    services?:Array<T_OfferCard>
}