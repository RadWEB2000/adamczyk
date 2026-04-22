import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react"
import type { T_ButtonBase } from "@/ts/buttons.types";

export type T_MarqueeWrapper = {
    children:ReactNode;
    speed?:number;
    gap?:number;
    direction?:"left"|"right";
    pauseOnHover?:boolean;
    styles?:string;
}







// ui

export type T_BreadcrumbItem = Omit<T_ButtonBase,'lang'>;

export type T_Breadcrumbs = {
    home?:T_BreadcrumbItem;
    items:Array<T_BreadcrumbItem>;
}

export type T_ContactFormField = {
    label:string;
    field:InputHTMLAttributes<HTMLInputElement>;
}

export type T_ContactFormCheckbox = {
    title: string;
    items: Array<{
        id: string;
        label: string;
        name: string;
        value: string;
    }>;
}

export type T_ContactFormConstent = {
    id:string;
    content:string;
}

export type T_ContactFormMessage = {
    label:string;
    field: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export type T_ContactForm = {
    fullname:T_ContactFormField;
    email:T_ContactFormField;
    phone:T_ContactFormField;
    website:T_ContactFormField;
    subject:T_ContactFormField;
    checkbox:T_ContactFormCheckbox;
    message:T_ContactFormMessage;
    constent:T_ContactFormConstent;
    button:string;
}

export type T_FaqItem = {
    title:string;
    content:string;
}

export type T_Faq = {
    title:string;
    items:Array<T_FaqItem>;
}

export type T_Term = {
    term:string;
    type?:"primary"|"secondary";
}

export type T_FilterTerms = {
    title:string;
    terms:string;
    type?:"primary"|"secondary";
}

export type T_RegularHero = {
    breadcrumbs:T_Breadcrumbs;
    title:string;
    subtitle:string;
    content?:string;
    button?:T_ButtonBase;
}

type SortCheckbox = {
    label:string;
    id:string;
}

export type T_SortTerms = {
    title:string;
    acs:SortCheckbox;
    dsc:SortCheckbox;
}

export type T_TableOfContentsItem = T_ButtonBase;

export type T_TableOfContents = {
    title:string;
    items:Array<T_TableOfContentsItem>;
}