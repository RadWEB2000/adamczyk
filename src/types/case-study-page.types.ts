
export type T_Hero = {
    title:string;
    subtitle:string;
    excerpt:string;
    badges:Array<string>;
    image:T_ImageBase;
}

export type T_Section = {
    title:string;
    subtitle:string;
    content:string;
    media?:{
        image:T_ImageBase;
        description?:string;
    }
}