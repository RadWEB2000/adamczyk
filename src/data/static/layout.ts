import type { T_Navigation } from "@/ts/navigation.types"
import type { T_Footer } from "@/ts/footer.types";

type t_layout = {
    navigation:T_Navigation;
    footer:T_Footer;
}

export const layout:t_layout = {
    navigation:{
        brand:{
            href:'/',
            label:'AdamczykTOP',
            lang:'pl-PL'
        },
        menu:[
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
    },
    footer:{
        author:{
            author:`Radosław Adamczyk &copy; ${new Date().getFullYear()}`,
            policies:[
                {
                    href:'/polityka-prywatnosci',
                    label:'Polityka prywatności'
                },
                {
                    href:'/polityka-cookies',
                    label:'Polityka Cookies'
                },
            ],
            socials:[
                {
                    href:'https://www.facebook.com/radoslaw.adamczyk.2000',
                    label:'Radosław Adamczyk',
                    name:'facebook',
                    lang:'pl-PL'
                },
                {
                    href:'https://github.com/RadWEB2000',
                    label:'RadWEB2000',
                    name:'github',
                    lang:'pl-PL'
                },
                {
                    href:'https://www.instagram.com/radoslaw.adamczyk.2000/',
                    label:'radoslaw.adamczyk.2000',
                    name:'instagram',
                    lang:'pl-PL'
                },
                {
                    href:'https://www.linkedin.com/in/rados%C5%82aw-adamczyk-853948195/',
                    label:'Radosław Adamczyk',
                    name:'linkedin',
                    lang:'pl-PL'
                },
                {
                    href:'https://www.youtube.com/@radweb-programowanieiseo2410',
                    label:'RadWEB - Programowanie i SEO',
                    name:'youtube',
                    lang:'pl-PL'
                },
                {
                    href:'https://medium.com/@radoslaw.adamczyk2000',
                    label:'Radosław Adamczyk',
                    name:'medium',
                    lang:'pl-PL'
                },
            ]
        },
        brand:'Adamczyk.TOP',
        menu:[
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
    }
}