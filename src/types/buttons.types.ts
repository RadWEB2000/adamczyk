import type { LinkProps } from "next/link";

export type T_LinkButton = {
    label:string;
    lang?:string;
    styles?:string;
    
} & LinkProps;


