'use client'

import NavigationContext from "@/context/NavigationContext"
import { useContext } from "react"


export default function MenuButton(){

    const {isExpandMenu,toggleExpandMenu} = useContext(NavigationContext)

    return (
        <button className="relative flex group items-center cursor-pointer justify-evenly flex-col size-10 " type="button" onClick={toggleExpandMenu} data-expand={isExpandMenu} >
            <span className="block w-full h-0.75 group-hover:bg-accent-400 bg-brand-200 data-[expand=true]:absolute  data-[expand=true]:top-1/2 data-[expand=true]:left-1/2  data-[expand=true]:-translate-1/2 data-[expand=true]:origin-center  data-[expand=true]:rotate-45 duration-200 ease-in-out transition-all" data-expand={isExpandMenu} />
            <span className="block w-full group-hover:bg-accent-400 h-0.75 bg-brand-200 data-[expand=true]:origin-center data-[expand=true]:scale-x-0 scale-x-100 duration-200 ease-in-out transition-all" data-expand={isExpandMenu} />
            <span className="block w-full group-hover:bg-accent-400 h-0.75 bg-brand-200 data-[expand=true]:absolute  data-[expand=true]:top-1/2 data-[expand=true]:origin-center data-[expand=true]:left-1/2  data-[expand=true]:-translate-1/2  data-[expand=true]:-rotate-45 duration-200 ease-in-out transition-all" data-expand={isExpandMenu} />
        </button>
    )
}