import Link from "next/link";

const data:Array<toc> = [
       {
        level: 2,
        href: "#wstep",
        title: "Wstęp"
    },
    {
        level: 2,
        href: "#dlaczego-ten-temat-jest-wazny",
        title: "Dlaczego ten temat jest dziś ważny"
    },
    {
        level: 2,
        href: "#najwazniejsze-zmiany-w-2026",
        title: "Najważniejsze zmiany w 2026 roku"
    },
    {
        level: 3,
        href: "#wplyw-ai-overviews",
        title: "Wpływ AI Overviews"
    },
    {
        level: 3,
        href: "#zmiany-w-intencji-uzytkownikow",
        title: "Zmiany w intencji użytkowników"
    },
    {
        level: 2,
        href: "#jak-przygotowac-strone",
        title: "Jak przygotować stronę krok po kroku"
    },
    {
        level: 3,
        href: "#audyt-techniczny",
        title: "Audyt techniczny"
    },
    {
        level: 3,
        href: "#struktura-informacji",
        title: "Struktura informacji"
    },
    {
        level: 6,
        href: "#optymalizacja-tresci",
        title: "Optymalizacja treści"
    },
    {
        level: 3,
        href: "#linkowanie-i-autorytet",
        title: "Linkowanie i autorytet"
    },
    {
        level: 2,
        href: "#najczestsze-bledy",
        title: "Najczęstsze błędy"
    },
    {
        level: 3,
        href: "#duplikacja-tresci",
        title: "Duplikacja treści"
    },
    {
        level: 5,
        href: "#brak-topical-authority",
        title: "Brak topical authority"
    },
    {
        level: 2,
        href: "#case-study",
        title: "Mini case study"
    },
    {
        level: 4,
        href: "#faq",
        title: "FAQ"
    },
    {
        level: 2,
        href: "#podsumowanie-i-rekomendacje",
        title: "Podsumowanie i rekomendacje"
    }
]

type toc = {
    level:1|2|3|4|5|6;
    href:string;
    title:string;
}

export default function TableOfContents(){
    return (
        <div
            className="space-y-4 sticky top-28 self-start py-5 px-4"
        >
            <h3
                className="text-xl font-extrabold font-heading uppercase"
            >Spis treści</h3>
            <menu
                className="flex flex-col gap-0.5"
            >
                {
                    data.map(({href,level,title}) => {
                        return (
                            <Link
                                className="inline-flex gap-2  items-center text-xs-plus text-balance uppercase text-neutral-500 before:content-[''] before:size-1.5 before:bg-black duration-200 transition-colors ease-in-out  before:duration-200  before:transition-colors  before:ease-in-out hocus:text-accent-400  hocus:before:bg-accent-400"
                                href={href}
                                key={`toc-item-${level}-${title}-${href}`}
                            >
                                {title}
                            </Link>
                        )
                    })
                }
            </menu>
        </div>
    )
}