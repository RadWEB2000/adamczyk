import type { LinkProps } from "next/link";

export type T_LinkButtonBase = {
    label:string;
    lang?:string;
    styles?:string;
    
} & LinkProps;

export type T_PrimaryLinkButton = T_LinkButtonBase & {
    theme: 'dark' | 'light'
}

export type T_SecondaryLinkButton =  T_LinkButtonBase & {
    theme: 'dark' | 'light'
}

