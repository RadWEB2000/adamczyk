export type T_About = {
    image:T_ImageBase;
    title:string;
    subtitle:string;
    content:string;
}

export type T_Experience = {
    title:string;
    content:string;
    brands:Array<T_ImageBase>;
}