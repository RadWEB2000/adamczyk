import type { T_ButtonBase } from "@/ts/buttons.types";

export type T_ServiceModule = {
    title:string;
    content:string;
    button:T_ButtonBase;
}

export type T_ServiceModules = {
    title:string;
    subtitle:string;
    cards:Array<T_ServiceModule>;
}

export type T_WhyChooseTile = {
    title:string;
    content:string;
}

export type T_WhyChoose = {
    title:string;
    subtitle:string;
    content:string;
    cards:Array<T_WhyChooseTile>;
}