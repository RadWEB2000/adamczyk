import type { ReactNode } from "react"

export type T_MarqueeWrapper = {
    children:ReactNode;
    speed?:number;
    gap?:number;
    direction?:"left"|"right";
    pauseOnHover?:boolean;
    styles?:string;
}