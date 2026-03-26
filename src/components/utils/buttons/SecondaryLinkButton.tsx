import Link from "next/link";
import type { T_SecondaryLinkButton } from "@/ts/buttons.types";

export default function SecondaryLinkButton({href,label,lang,styles,theme,...props}:T_SecondaryLinkButton){
    return (
        <Link
            className={`w-fit flex items-center flex-nowrap gap-1 sm:gap-2 relative after:content-[''] after:absolute  after:-bottom-1  after:left-0  after:w-full  after:h-0.5  after:block after:bg-neutral-100  data-[theme='dark']:after:bg-neutral-950  after:scale-x-0  after:origin-left hocus:after:scale-x-100  after:transition-transform  after:duration-400  after:ease-in-out group select-none ${styles}`}
            data-theme={theme}
            href={href}
            hrefLang={lang}
            {...props}
        >
            <span
                className="font-mono uppercase text-xs sm:text-base font-bold text-neutral-100 data-[theme='dark']:text-neutral-950 "
                 data-theme={theme}
            >
                {label}
            </span>
            <svg
                className="shrink-0 size-4 sm:size-5.5 group-hocus:-rotate-45 duration-200 transition-transform ease-in-out stroke-neutral-100 data-[theme='dark']:stroke-neutral-950"
                data-theme={theme}
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
            </svg>
        </Link>
    )
}