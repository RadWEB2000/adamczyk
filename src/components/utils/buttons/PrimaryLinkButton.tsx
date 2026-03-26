import type { T_PrimaryLinkButton } from "@/ts/buttons.types";
import Link from "next/link";

export default function PrimaryLinkButton({href,label,lang,styles,theme,...props}:T_PrimaryLinkButton){
    return ( 
    <Link
        className={`group relative inline-block cursor-pointer px-0.5 text-sm font-bold uppercase transition-all duration-150 ease-in-out focus:outline-none active:scale-97 `}
        href={href}
        hrefLang={lang}
        {...props}
    >
      {/* top border */}
      <span className="pointer-events-none absolute left-0 right-0 top-0 h-[calc(50%-5px)] border border-neutral-500 border-b-0 transition-all duration-150 group-active:left-0.75 group-active:right-0.75 group-active:top-0.75 data-[theme='dark']:border-neutral-900  2xl5:border-3  2xl5:border-b-0" 
      
        data-theme={theme}
      
      />

      {/* bottom border */}
      <span className="pointer-events-none absolute bottom-0 left-0 right-0 h-[calc(50%-5px)] border border-neutral-500 border-t-0 transition-all duration-150 group-active:left-0.75 group-active:right-0.75 group-active:bottom-0.75 data-[theme='dark']:border-neutral-900 2xl5:border-3  2xl5:border-t-0"  
        data-theme={theme}
      
      />

      {/* inner */}
      <span className="relative block overflow-hidden px-3.5 py-2 shadow-[inset_0_0_0_1px_transparent] md:px-5 md:py-3  2xl:px-10  2xl:py-4  2xl5:px-10.5  2xl5:py-4.25">
        {/* corner TL */}
        <span className="absolute left-0 top-0 h-0.5 w-0.5 " />

        {/* corner BR */}

        {/* sliding bg */}
        <span className="absolute -bottom-px -left-2 top-0 w-0 -skew-x-15 bg-accent-300 data-[theme='dark']:bg-accent-400  transition-all duration-200 group-hover:w-[calc(100%+15px)]" data-theme={theme}  />

        {/* text */}
        <span className="relative z-10 transition-colors duration-200 text-neutral-50 group-hover:text-neutral-950 data-[theme='dark']:text-neutral-900 md:text-base  2xl:text-xl  2xl5:text-2xl-plus" data-theme={theme} >
          {label}
        </span>
      </span>
    </Link>
    )
}