import type { I_HomePage_Static } from "@/ts/home-page.types";
import me_lumo from "@/img/me/r-adamczyk-lumo.webp"
import me_krk from "@/img/me/krak-2.webp"

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
    },
    about:{
        image:{
            alt:'Radosław Adamczyk - specjalista SEO i AI SEO',
            src:me_krk.src,
            title:'Specjalista SEO Poznań, Śrem, Kościan',
            height:me_krk.height,
            width:me_krk.width
        },
        button:{
            label:'Poznajmy się!',
            href:'/o-mnie'
        },
        content:`<span>Nazywam się Radosław Adamczyk i zajmuję się pozycjonowaniem stron internetowych oraz optymalizacją widoczności w wyszukiwarkach. Pomagam firmom zdobywać klientów z internetu poprzez strategie SEO, content marketing i automatyzację działań marketingowych.</span> <br/><span>Specjalizuję się w SEO oraz optymalizacji pod wyszukiwarki oparte o sztuczną inteligencję (AI Search). Dzięki połączeniu marketingu, analityki i programowania tworzę strategie, które nie tylko zwiększają widoczność w Google, ale przede wszystkim generują realny ruch i zapytania od klientów.</span>`,
        list:[
            {
                emoji:'🔎',
                title:'SEO'
            },
            {
                emoji:'🤖',
                title:'AI SEO'
            },
            {
                emoji:'⚙',
                title:'Automatyzacje'
            },
            {
                emoji:'💻',
                title:'Strony interentowe'
            },
        ],
        subtitle:`Specjalista SEO, który łączy marketing z programowaniem`,
        title:`Radosław Adamczyk – specjalista SEO i AI SEO`
    },
}