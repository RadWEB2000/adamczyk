import Link from "next/link";

type t_menu = Array<{
    title:string;
    items:Array<{
        label:string;
        href:string;
    }>
}>

const menu:t_menu = [
    {
        title:'Start',
        items:[
            {
                href:'/',
                label:'Start'
            },
            {
                href:'/oferta',
                label:'Oferta'
            },
            {
                href:'/o-mnie',
                label:'O mnie'
            },
            {
                href:'/blog',
                label:'Wiedza'
            },
            {
                href:'/slownik',
                label:'Pojęcia'
            },
            {
                href:'/case-studies',
                label:'Realizacje'
            },
            {
                href:'/kontakt',
                label:'Kontakt'
            },
        ],
    },
    {
        title:'Widoczność w Google',
        items:[
            {
                href:'/oferta/seo',
                label:'Pozycjonowanie SEO'
            },
            {
                href:'/oferta/seo/link-building',
                label:'Link building'
            },
            {
                href:'/oferta/seo/content-marketing',
                label:'Content marketing'
            },
            {
                href:'/oferta/seo/optymalizacje-seo',
                label:'Optymalizacje SEO'
            },
            {
                href:'/oferta/seo/wizytowka-firmy-google',
                label:'Wizytówka firmy Google'
            },
            {
                href:'/oferta/seo/audyty-seo',
                label:'Audyty SEO'
            },
            {
                href:'/oferta/seo/analiza-konkurencji',
                label:'Analiza konkurencji'
            },
        ],
    },
    {
        title:'Widoczność AI',
        items:[
            {
                href:'/oferta/aeo',
                label:'Pozycjonowanie AI'
            },
            {
                href:'/oferta/aeo/widocznosc-w-odpowiedziach-google',
                label:'Widoczność w opowiedzaich Google'
            },
            {
                href:'/oferta/aeo/tworzenie-tresci-pod-ai',
                label:'Tworzenie treści pod AI'
            },
            {
                href:'/oferta/aeo/budowa-rozpoznawalnosci-firmy-ai',
                label:'Budowa rozponawalności firmy w AI'
            },
            {
                href:'/oferta/aeo/ai-branding',
                label:'Budowa marki w AI'
            },
            {
                href:'/oferta/aeo/topical-authority',
                label:'Budowanie ekssperckości'
            },
            {
                href:'/oferta/aeo/monitoring-ai',
                label:'Analiza widoczności AI'
            }
        ]
    },
    {
        title:'Strony internetowe',
        items:[
            {
                href:'/oferta/strony-internetowe',
                label:'Strony interenetowe'
            },
            {
                href:'/oferta/strony-internetowe/dla-firm',
                label:'Strony dla firm'
            },
            {
                href:'/oferta/strony-internetowe/e-commerce',
                label:'Sklepy internetowe'
            },
            {
                href:'/oferta/strony-internetowe/landing-page',
                label:'Strony sprzedazowe'
            },
            {
                href:'/oferta/strony-internetowe/opieka-techniczna',
                label:'Opieka techniczna'
            },
            {
                href:'/oferta/strony-internetowe/poprawki-i-zmiany',
                label:'Poprawki i zmiany na stronie'
            },
            {
                href:'/oferta/strony-internetowe/staly-monitoring',
                label:'Stały monitoring'
            },
         
        ],
    },
    {
        title:'Reklamy PPC',
        items:[
            {
                href:'/oferta/reklamy-ppc',
                label:'Reklamy PPC'
            },
            {
                href:'/oferta/reklamy-ppc/google',
                label:'Reklamy Google'
            },
            {
                href:'/oferta/reklamy-ppc/meta',
                label:'Reklamy Meta'
            },
            {
                href:'/oferta/reklamy-ppc/meta/instagram',
                label:'Reklamy Instagram'
            },
            {
                href:'/oferta/reklamy-ppc/meta/facebook',
                label:'Reklamy Facebook'
            },
            {
                href:'/oferta/reklamy-ppc/remarketing',
                label:'Remarketing'
            },
            {
                href:'/oferta/reklamy-ppc/lead-generation',
                label:'Generowanie leadów'
            },
        ]
    },
    {
        title:'Automatyzajce',
        items:[
            {
                href:'/oferta/automatyzacje-rpa',
                label:'Automatyzacje RPA'
            },
            {
                href:'/oferta/automatyzacje-rpa/oszczednosc-czasu',
                label:'Oszczędność czasu'
            },
            {
                href:'/oferta/automatyzacje-rpa/integracje',
                label:'Integracje'
            },
            {
                href:'/oferta/automatyzacje-rpa/rozwoj-i-utrzymanie',
                label:'Rozwój i utrzymanie'
            },
            {
                href:'/oferta/automatyzacje-rpa/generowanie-raportow',
                label:'Generowanie raportów'
            },
            {
                href:'/oferta/automatyzacje-rpa/monitorowanie-procesow',
                label:'Monitorowanie procesów'
            },
            {
                href:'/oferta/automatyzacje-rpa/obnizanie-kosztow',
                label:'Obnianie kosztów'
            },
        ]
    }
]


export default function Menu(){
    return (
        <menu
                className="grid grid-cols-2 page-section-width mx-auto gap-4 my-6"
            >
                {
                    menu.map(({title,items}) => {
                        return (
                            <div>
                                <h4
                                    className="text-xl-plus font-heading uppercase font-extrabold"
                                >{title}</h4>
                                <span className="w-full h-px block my-3  bg-brand-400" />
                                <ul
                                    className="flex flex-col"
                                >
                                    {
                                        items.map(({href,label}) => {
                                            return (
                                                <Link
                                                    className="block uppercase text-neutral-400 transition-colors duration-200 ease-linear hocus:text-neutral-50"
                                                    href={href}
                                                    hrefLang="pl-PL"
                                                    key={`footer-menu-item-${href}-${label}`}
                                                >
                                                    {label}
                                                </Link>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </menu>
    )
}