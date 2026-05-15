'use client'

import { useState } from "react"
import { ArrowIcon as Arrow } from "@/assets/svgr"
import type { T_FaqItem } from "@/types/ui.types"

export default function FaqItem({answer,id = 'faq-title',question}:T_FaqItem) {

    const [isOpen, toggleIsOpen] = useState<boolean>(true)

    return (
        <div
            className="border-b-2 border-brand-400 h-fit"
        >
            <div
                className="grid grid-cols-[auto_1.3rem] lg:grid-cols-[auto_1.8rem] items-center px-3 py-3 bg-[color-mix(in_srgb,var(--color-brand-50),var(--color-neutral-100))]"
            >
                <label htmlFor={id}>
                <h2
                    className="font-heading upppercase uppercase font-extrabold text-base leading-none md4:text-2xl"
                >{question}</h2>
                </label>
                <button className="w-fit -rotate-90 mr-0 ml-auto data-[expand=true]:rotate-0 transition-transform duration-300 ease-in-out" data-expand={isOpen} id={id} onClick={() => toggleIsOpen(!isOpen)} type="button"  >
                    <Arrow
                        className="size-4 lg:size-7"
                    />
                </button>
            </div>
            <div
                className="grid grid-rows-[0fr] data-[expand=true]:grid-rows-[1fr] overflow-hidden transition-all duration-300 ease-in-out"
                data-expand={isOpen}
            >
                <div className="overflow-hidden">
                    <article
                        className="overflow-hidden space-y-3 p-3 text-xs-plus md4:[&>p]:text-lg [&>p]:leading-relaxed [&>p]:text-balance [&>p]:text-neutral-500"
                        dangerouslySetInnerHTML={{__html:answer}}
                    />
                </div>
            </div>
        </div>
    )
}