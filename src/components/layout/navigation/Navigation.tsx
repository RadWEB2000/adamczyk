'use client'
import { MenuButton } from "@/utils/buttons";
import {Brand, Menu} from "@/layout/navigation";
import { useContext } from "react";
import NavigationContext from "@/context/NavigationContext";

export default function Navigation(){

    const {isExpandMenu,isScrolled} = useContext(NavigationContext)

    return (
        <nav className="bg-transparent fixed top-0 left-0 w-full z-99999 text-neutral-400 px-4 grid grid-rows-[4rem_0] data-[expand=true]:grid-rows-[4rem_calc(100vh-4rem)] overflow-hidden grid-cols-3 data-[expand=true]:bg-brand-950 transition-all duration-200 ease-in-out sm:grid-rows-[6rem_0] sm:data-[expand=true]:grid-rows-[6rem_calc(100vh-6rem)] lg:grid-cols-[2fr_4fr] h-fit lg:data-[expand=true]:grid-rows-[5.5rem] data-[expand=false]:grid-rows-[5.5rem] lg:items-center lg:px-10 lg:overflow-visible xl4:px-8.75 data-[scrolled=true]:bg-brand-950!" data-expand={isExpandMenu} data-scrolled={isScrolled}>
            <Brand/>
            <Menu/>
            <div
                className="items-center justify-end flex bg-green-300 col-start-3 col-end-4 row-start-1 lg:hidden"
            >
                <MenuButton/>
            </div>
        </nav>
    )
}