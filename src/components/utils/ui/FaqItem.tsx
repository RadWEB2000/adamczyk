'use client'

import { ArrowIcon as Arrow } from "@/assets/svgr"
import { useState } from "react"

export default function FaqItem() {

    const [isOpen, toggleIsOpen] = useState<boolean>(true)

    return (
        <div
            className="border-b-2 border-brand-400 h-fit"
        >
            <div
                className="grid grid-cols-[auto_1.3rem] lg:grid-cols-[auto_1.8rem] items-center px-3 py-3 bg-[color-mix(in_srgb,var(--color-brand-50),var(--color-neutral-100))]"
            >
                <label htmlFor="faq-title">
                <h2
                    className="font-heading upppercase uppercase font-extrabold text-base leading-none md4:text-2xl"
                >Jakie są korzyści z korzystania z Twoich usług?</h2>
                </label>
                <button className="w-fit -rotate-90 mr-0 ml-auto data-[expand=true]:rotate-0 transition-transform duration-300 ease-in-out" onClick={() => toggleIsOpen(!isOpen)} type="button" data-expand={isOpen} id="faq-title" >
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
                    >
                        <p>
                            Korzystanie z naszych usług przynosi wiele korzyści, takich jak zwiększenie widoczności w wyszukiwarkach, poprawa pozycji w wynikach wyszukiwania, zwiększenie ruchu na stronie internetowej oraz wzrost konwersji. Nasze strategie SEO są dostosowane do indywidualnych potrzeb klienta, co pozwala osiągnąć najlepsze rezultaty.
                        </p>
                        <h3
                            className="text-sm md4:text-2xl font-bold"
                        >
                            Poprawa widoczności w wyszukiwarkach
                        </h3>
                        <p>
                            Dzięki naszym usługom, Twoja firma może zyskać przewagę konkurencyjną, dotrzeć do większej liczby potencjalnych klientów oraz zwiększyć swoją obecność online. Nasz zespół ekspertów SEO pracuje nad optymalizacją strony internetowej, tworzeniem wartościowych treści oraz budowaniem linków, co przekłada się na długoterminowy sukces Twojej firmy w internecie.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    )
}