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

export type T_About = {
    title:string;
    subtitle:string;
    image:T_ImageBase;
    content:string;
    button?:{
        label:string;
        href:string;
    };
    list:Array<{
        emoji:string;
        title:string;
    }>
}

export type T_Overview = {
    content:string;
}

export interface I_HomePage_Static {
    hero:T_Hero;
    about:T_About;
    overview:string;
    offer:{
        
    }
}