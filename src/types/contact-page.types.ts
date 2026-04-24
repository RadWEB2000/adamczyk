import type { T_ButtonBase } from "@/ts/buttons.types";

export type T_Socials = {
    title:string;
    items:Array<{
        social:Array<{
            type:T_SocialTypes;
            href:Url;
            title:string;
        }>;
    }>

}

export type T_ContactDetails = {
    image:T_ImageBase;
    socials:T_Socials;
    title:string;
    subtitle:string;
    phone:T_ButtonBase;
    mail:T_ButtonBase;
    adress:string;
}

type T_Section = {
    title:string;
    items:Array<string>;
}

export type T_FirstContact = {
    contact:T_Section;
    collaboration:T_Section;
}