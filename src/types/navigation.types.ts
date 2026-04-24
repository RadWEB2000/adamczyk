import type { T_ButtonBase } from "@/ts/buttons.types";

export type T_Brand = T_ButtonBase;

export type T_MenuItemBase = T_ButtonBase;

export type T_MenuItem = T_MenuItemBase & {
    level:"main"|"dropdown";
}

export type T_MenuDropdown = T_MenuItemBase & {
    dropdown:Array<T_MenuItemBase>;
}

export type T_Menu = {
    menu: Array<Optional<T_MenuDropdown,'dropdown'>>;
}

export type T_Navigation = {
    brand:T_Brand;
} & T_Menu;