import type { LinkProps } from "next/link";

// MENU 
export type T_MenuItem_Base = {
    label:string;
    lang?:string;
    href:string;
    props?:Omit<LinkProps , 'href'>
}

export type T_MenuItem = {
    isDropdown?:boolean;
} & T_MenuItem_Base;

export type T_MenuItem_Dropdown = {
    item:T_MenuItem_Base;
    submenu:Array<T_MenuItem_Base>;
}



export type T_Menu_Static = Array<{
    label:string;
    href:string;
    submenu?:Array<{
        label:string;
        href:string;    
    }>
}>

export type T_Menu = {
    menu:T_Menu_Static;
} 
//  SEARCH


// LANGUAGE 



//  NAVIGATION 

type NavigationStates = {
    isOpenMenu?:boolean;
    isScrolled?:boolean;
}

export type T_Navigation = {
    isOpen:boolean;
    isScrolled:boolean;
    closeMenu:() => void;
}

// BRAND

export type T_Brand = {
    label:string;
    link?:Omit<LinkProps,'href'>;
} 
