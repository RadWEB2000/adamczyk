import { ChevronIcon as Chevron, HomeIcon as Home } from "@/assets/svgr";
import { T_BreadcrumbItem, T_Breadcrumbs } from "@/ts/ui.types";
import Link from "next/link";


function Start({href,label}:T_BreadcrumbItem) {
    return (
        <Link href={href} className="inline-flex flex-wrap items-center text-neutral-400 hocus:text-neutral-200 transition-colors duration-300 ease-in-out group gap-1.5">
            <Home
                className="size-2 fill-neutral-400 group-hocus:fill-neutral-200 transition-colors duration-300 ease-in-out  lg:size-3.5"
            />
            <span
                className="relative after:content-['']  after:absolute  after:w-full  after:h-px  after:block  after:bg-neutral-50  after:-bottom-0.5  after:left-0  after:origin-left group-hocus:after:scale-x-100 after:scale-x-0 after:duration-300 after:transition-transform  after:ease-in-out text-xs font-ui uppercase lg:text-sm"
            >
                {label}
            </span>
        </Link>
    )
}

function Item({href,label}:T_BreadcrumbItem){
    return (
        <Link href={href} className="inline-flex flex-wrap items-center text-neutral-400 hocus:text-neutral-200 transition-colors duration-300 ease-in-out group gap-1.5">
            <Chevron
                className="size-2 fill-neutral-400 group-hocus:fill-neutral-200 transition-colors duration-300 ease-in-out  lg:size-3.5"
            />
            <span
                className="relative after:content-['']  after:absolute  after:w-full  after:h-px  after:block  after:bg-neutral-50  after:-bottom-0.5  after:left-0  after:origin-left group-hocus:after:scale-x-100 after:scale-x-0 after:duration-300 after:transition-transform  after:ease-in-out text-xs font-ui uppercase  lg:text-sm"
            >
                {label}
            </span>
        </Link>
    )
}

export default function Breadcrumbs({home,items}:T_Breadcrumbs){
    return (
        <menu
            className="flex items-center justify-start flex-wrap gap-2.5"
        >
            <Start
                href={ home ? home.href : '/'}
                label={home ? home.label : 'Start'}
            />
            {
                items &&
                items.map(({href, label}) => {
                    return (
                        <Item
                            href={href}
                            label={label}
                            key={`breadcrumbs-item-${href}-${label}`}
                        />
                    )
                })
            }
        </menu>
    )
}