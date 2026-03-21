export type T_Hero = {
    image:T_ImageBase;
    title:string;
    subtitle:string;
    content:string;
    buttons?:Array<{
        label:string;
        href:string;
    }>
}


export interface I_HomePage_Static {
    hero:T_Hero;
}