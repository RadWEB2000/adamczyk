import { ChevronIcon as Chevron, HomeIcon as Home } from "@/assets/svgr";
import Link from "next/link";


function Start() {
    return (
        <Link href="/" className="inline-flex items-center text-neutral-400 hocus:text-neutral-200 transition-colors duration-300 ease-in-out group gap-1.5">
            <Home
                className="size-2 fill-neutral-400 group-hocus:fill-neutral-200 transition-colors duration-300 ease-in-out  lg:size-3.5"
            />
            <span
                className="relative after:content-['']  after:absolute  after:w-full  after:h-px  after:block  after:bg-neutral-50  after:-bottom-0.5  after:left-0  after:origin-left group-hocus:after:scale-x-100 after:scale-x-0 after:duration-300 after:transition-transform  after:ease-in-out text-xs font-ui uppercase lg:text-sm"
            >
                Start
            </span>
        </Link>
    )
}

function Item(){
    return (
        <Link href="#" className="inline-flex items-center text-neutral-400 hocus:text-neutral-200 transition-colors duration-300 ease-in-out group gap-1.5">
            <Chevron
                className="size-2 fill-neutral-400 group-hocus:fill-neutral-200 transition-colors duration-300 ease-in-out  lg:size-3.5"
            />
            <span
                className="relative after:content-['']  after:absolute  after:w-full  after:h-px  after:block  after:bg-neutral-50  after:-bottom-0.5  after:left-0  after:origin-left group-hocus:after:scale-x-100 after:scale-x-0 after:duration-300 after:transition-transform  after:ease-in-out text-xs font-ui uppercase  lg:text-sm"
            >
                Kategoria
            </span>
        </Link>
    )
}

export default function Breadcrumbs(){
    return (
        <menu
            className="flex items-center justify-start flex-wrap gap-2.5"
        >
            <Start/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </menu>
    )
}