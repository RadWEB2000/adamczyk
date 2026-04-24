import { T_ButtonBase } from "./buttons.types";

export type T_Socials = {
    socials:Array<{
        name:T_SocialTypes;
    } & T_ButtonBase>
}

export type T_Policy = T_ButtonBase;

export type T_Author = {
    policies:Array<T_Policy>;
    author:string;
} & T_Socials;

export type T_Brand = {
    brand:string;
}

export type T_Menu = {
    menu:Array<{
        title:string;
        items:Array<{
            label:string;
            href:string;
        }>
    }>
}

export type T_Footer ={
    author:T_Author;
} & T_Brand & T_Menu;