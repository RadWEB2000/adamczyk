'use client'

import { ArrowIcon } from "@/assets/svgr"
import { useState } from "react"

type T_Term = {
    term:string;
      type?:'primary'|
    'secondary'
}

function Term({term,type}:T_Term){
    const id = `term-${term.toLowerCase().replace(/\s+/g, '-')}`;
    return (
        <label className="w-fit cursor-pointer "  htmlFor={id}>
            <input className="hidden peer" type="checkbox" name={id} id={id} />
            <span
                className="uppercase text-sm font-semibold data-[variant=secondary]:bg-neutral-600 data-[variant=secondary]:text-neutral-100 data-[variant=secondary]:px-2.5 data-[variant=secondary]:py-1 data-[variant=secondary]:text-xs duration-50 ease-in-out transition-colors data-[variant=secondary]:hover:bg-neutral-700 data-[variant=primary]:text-neutral-600 data-[variant=primary]:hover:text-neutral-500 data-[variant=secondary]:peer-checked:bg-accent-500 data-[variant=secondary]:peer-checked:hover:bg-accent-700 data-[variant=primary]:peer-checked:text-accent-500 data-[variant=primary]:peer-checked:hover:text-accent-700"
                data-variant={type}
            >
                {term}
            </span>
        </label>
    )
}

type T_FilterTerms = {
    title:string;
    terms:Array<string>;
    type?:'primary'|
    'secondary'
}

export default function FilterTerms({title = 'Filtruj', terms, type}:T_FilterTerms){

    const [isExpand,toggleIsExpand] = useState<boolean>(false)

    const id = `filter-box-${title.toLowerCase().replace(/\s+/g, '-')}`;

    return (
        <div>
            <div
                className="inline-flex justify-between w-full"
            >
                <label htmlFor={id}>
                    <h4 
                        className="text-lg cursor-pointer select-none font-extrabold font-heading uppercase"
                    >{title}</h4>
                </label>
                <button className="w-fit -rotate-90 mr-0 ml-auto data-[expand=true]:rotate-0 transition-transform duration-300 ease-in-out" data-expand={isExpand} type="button" onClick={() => toggleIsExpand(!isExpand)} id={id}>
                    <ArrowIcon className="size-4" />
                </button>
            </div>
            <div
                className="grid grid-rows-[0fr] data-[expand=true]:grid-rows-[1fr] overflow-hidden transition-all duration-300 ease-in-out"
                data-expand={isExpand}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col data-[variant=secondary]:flex-row flex-wrap gap-0.5 py-2 px-3 max-h-56 overflow-scroll" data-variant={type}>
                        {
                            [...terms].sort((a, b) => a.localeCompare(b, "pl")).map((item) => {
                                return <Term term={item} type={type} key={`filter-term-${item}`} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}