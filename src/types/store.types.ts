export type T_MenuContext = {
    isOpenMenu:boolean;
    closeMenu:() => void;
    toggleMenu: () => void;
    closeAllDropdowns:() => void;
}