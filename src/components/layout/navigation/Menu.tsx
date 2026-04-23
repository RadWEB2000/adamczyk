'use client'
import { ArrowIcon } from "@/assets/svgr";
import NavigationContext from "@/context/NavigationContext";
import Link from "next/link";
import { useContext, useState } from "react";

type item = {
    label:string;
    href:string;
    level:'main'|'submenu'
}


type t_menu = Array<Omit<item,'level'> & {
    dropdown?:Array<Omit<item,'level'>>
}>

const menu:t_menu = [
    {
        href:'/',
        label:'Start'
    },
    {
        href:'/o-mnie',
        label:'O mnie'
    },
    {
        href:'/oferta',
        label:'Oferta',
        dropdown:[
            {
                href:'/oferta/seo',
                label:'Pozycjonowanie Google'
            },
            {
                href:'/oferta/aeo',
                label:'Pozycjonowanie AI'
            },
            {
                href:'/oferta/strony-internetowe',
                label:'Strony internetowe'
            },
            {
                href:'/oferta/reklamy-ppc',
                label:'Płatne reklamy Google'
            },
            {
                href:'/oferta/automatyzacje-rpa',
                label:'Automatyzacje RPA'
            },
            {
                href:'/oferta/miasta',
                label:'Miasta'
            },
            {
                href:'/oferta/branze',
                label:'Branze'
            }
        ]
    },
    {
        href:'/case-studies',
        label:'Case studies'
    },
    {
        href:'/blog',
        label:'Blog'
    },
    {
        href:'/kontakt',
        label:'Kontakt'
    }
]


function Item({href,label,level}:item){
    const {closeExpandMenu} = useContext(NavigationContext);
    return (
        <Link
            className="uppercase font-ui data-[level=main]:text-xl-plus  data-[level=main]:font-bold  data-[level=main]:text-neutral-200 hocus:data-[level=main]:text-accent-300 data-[level=submenu]:text-base leading-none hocus:data-[level=submenu]:text-accent-200 sm:data-[level=main]:text-2xl-plus sm:data-[level=submenu]:text-xl lg:data-[level=main]:text-base lg:data-[level=submenu]:text-sm lg:data-[level=main]:h-10 flex items-center justify-start w-fit " 
            data-level={level}
            href={href}
            onClick={closeExpandMenu}
        >
            {label}
        </Link>
    )
}

type dropdown = Omit<item,'level'> & {
    dropdown:Array<Omit<item,'level'>>
}

function Dropdown({dropdown,href,label}:dropdown){

    const [isOpenDropdown, toggleIsOpenDropdown] = useState<boolean>(false)

    return (
        <div
            className="relative"
            onMouseEnter={() => toggleIsOpenDropdown(true)}
            onMouseLeave={() => toggleIsOpenDropdown(false)}
        >
            <div
                className="gap-x-3 xl3:h-10 inline-flex items-center "

            >
                <Item
                    href={href}
                    label={label}
                    level="main"
                />
                <button
                    className="group max-lg:size-4.5 lg:size-5 flex items-center justify-center"
                    onClick={() => toggleIsOpenDropdown(!isOpenDropdown)}
                >
                    <ArrowIcon className="size-full fill-neutral-200 group-hocus:text-accent-600 hocus:text-accent-600" />
                </button>
            </div>
            <div
                className="grid grid-rows-[0px] data-[expand=true]:grid-rows-[1fr] lg:bg-brand-900 lg:min-w-52  overflow-hidden transition-all duration-200 ease-in-out lg:absolute lg:[expand=true]:opacity-100 lg:[expand=true]:visible lg:[expand=false]:opacity-0 lg:[expand=false]:invisible xl4:min-w-62"
                data-expand={isOpenDropdown}
            >
                <menu
                    className="flex flex-col gap-4 py-4 lg:p-5.5"
                >
                    {
                        dropdown.map(({href,label}) => {
                            return (
                                <Item
                                    key={`submenu-item-${label}-${href}`}
                                    href={href}
                                    label={label}
                                    level="submenu"
                                />
                            )
                        })
                    }
                </menu>
            </div>
        </div>
    )
}

export default function Menu(){
    return (
        <div
            className="row-start-2 max-lg:col-span-full lg:row-start-1"
        >
            <menu
                className="flex flex-col items-start py-12  h-full max-lg:page-section-width max-lg:mx-auto justify-start overflow-y-scroll no-scrollbar gap-6 sm:py-12 lg:flex-row lg:h-fit lg:w-full lg:py-0 lg:overflow-y-visible lg:justify-end"
            >
                {
                    menu.map(({href,label,dropdown}) => {
                        if(dropdown){
                            return (
                                <Dropdown
                                    key={`menu-item-${label}-${href}`}
                                    dropdown={dropdown}
                                    href={href}
                                    label={label}
                                />
                            )
                        }else{
                            return (
                                <Item
                                    key={`menu-item-${label}-${href}`}
                                    href={href}
                                    label={label}
                                    level="main"
                                />
                            )
                        }
                    })
                }
            </menu>
        </div>
    )
}