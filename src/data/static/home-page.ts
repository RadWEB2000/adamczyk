import type { I_HomePage_Static } from "@/ts/home-page.types";
import me_lumo from "@/img/me/r-adamczyk-lumo.webp"

export const homePageStatic:I_HomePage_Static =  {
    hero : {
        image: {
            alt: "Radosław Adamczyk – specjalista SEO i developer",
            src: me_lumo.src,
            title: "Radosław Adamczyk",
            width:me_lumo.width,
            height:me_lumo.height
        },
        title : "SEO • AI SEO • Automatyzacje • Strony • PPC",
        subtitle : "Pozycjonowanie SEO i AI, które realnie zwiększa ruch i klientów.",
        content : "Pomagam firmom zdobywać widoczność w Google i systemach AI. Tworzę strategie SEO, buduję automatyzacje marketingowe oraz projektuję szybkie strony internetowe zoptymalizowane pod wyszukiwarki i konwersję.",
        buttons : [
            {
                label : "Sprawdź ofertę",
                href : "/oferta"
            },
            {
                label : "Poznaj realizacje",
                href : "/case-studies"
            }
        ],
     
    }
}