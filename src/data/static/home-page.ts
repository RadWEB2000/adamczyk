import me_lumo from "@/img/me/r-adamczyk-lumo.webp"
import me_krk from "@/img/me/krak-2.webp"

export const homePageStatic =  {
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
    overview:`Ucieknij od konwencji w copywritingu i postaw na teksty, które naprawdę przyciągają klientów. Sprawdź ile mogą zdziałać słowa!`,
    offer:{
        button:{
            href:'/oferta',
            label:'Sprawdź moje usługi'
        },
        content:`Pomagam firmom rozwijać sprzedaż i widoczność w internecie poprzez nowoczesne strategie marketingowe oparte na danych, technologii i realnych wynikach. Łączę SEO, sztuczną inteligencję, tworzenie stron internetowych oraz kampanie reklamowe, aby budować skuteczne systemy pozyskiwania klientów.<br/><br/>Moje usługi obejmują zarówno audyty i optymalizację istniejących projektów, jak i budowę kompletnych strategii marketingowych od podstaw. Dzięki połączeniu marketingu, analityki i programowania tworzę rozwiązania, które zwiększają widoczność w wyszukiwarkach, poprawiają konwersję i pomagają firmom zdobywać klientów z internetu.`,
        subtitle:`Kompleksowe rozwiązania marketingu internetowego`,
        title:'Usługi SEO, AI SEO i marketingu online',
        services:[
            {
                title:`SEO`,
                subtitle:`Pozycjonowanie stron internetowych`,
                content:`Kompleksowe działania SEO zwiększające widoczność Twojej strony w Google. Od audytu technicznego i strategii słów kluczowych po optymalizację treści i link building – wszystko po to, aby Twoja strona zdobywała stabilny ruch i generowała klientów.`,
                subservices:[
                    {
                        label:'Audyt SEO strony',
                        uri:`#`
                    },
                    {
                        label:'Optymalizacja techniczna SEO',
                        uri:`#`
                    },
                    {
                        label:'Strategia słów kluczowych',
                        uri:`#`
                    },
                    {
                        label:'Link building',
                        uri:`#`
                    }
                ]
            },
            {
                title:`AI SEO`,
                subtitle:`Widoczność w wyszukiwarkach AI`,
                content:`Optymalizuję treści i strukturę strony pod systemy AI takie jak ChatGPT, Perplexity czy Gemini. Dzięki temu Twoja marka może pojawiać się w odpowiedziach generowanych przez sztuczną inteligencję i zdobywać nowych klientów z AI Search.`,
                subservices:[
                    {
                        label:'Audyt widoczności w AI',
                        uri:`#`
                    },
                    {
                        label:'Optymalizacja treści pod AI Search',
                        uri:`#`
                    },
                    {
                        label:'Strukturyzacja treści pod LLM',
                        uri:`#`
                    },
                    {
                        label:'Widoczność w ChatGPT i Perplexity',
                        uri:`#`
                    }
                ]
            },
            {
                title:`Strony internetowe`,
                subtitle:`Projektowanie i tworzenie stron`,
                content:`Projektuję i tworzę szybkie, nowoczesne strony internetowe zoptymalizowane pod SEO i konwersję. Strony są przygotowane tak, aby dobrze wyglądały, szybko się ładowały i skutecznie pozyskiwały klientów.`,
                subservices:[
                    {
                        label:'Projektowanie UX/UI',
                        uri:`#`
                    },
                    {
                        label:'Tworzenie stron firmowych',
                        uri:`#`
                    },
                    {
                        label:'Strony WordPress',
                        uri:`#`
                    },
                    {
                        label:'Optymalizacja szybkości strony',
                        uri:`#`
                    }
                ]
            },
            {
                title:`PPC`,
                subtitle:`Kampanie reklamowe Google Ads`,
                content:`Prowadzę kampanie reklamowe w Google Ads, które szybko generują ruch i klientów. Optymalizuję budżety, reklamy i landing pages, aby maksymalizować wyniki i zwrot z inwestycji.`,
                subservices:[
                    {
                        label:'Audyt kampanii Google Ads',
                        uri:`#`
                    },
                    {
                        label:'Kampanie w wyszukiwarce',
                        uri:`#`
                    },
                    {
                        label:'Performance Max',
                        uri:`#`
                    },
                    {
                        label:'Optymalizacja kampanii reklamowych',
                        uri:`#`
                    }
                ]
           },
           {
                title:`Automatyzacje`,
                subtitle:`Automatyzacje procesów biznesowych (RPA)`,
                content:`Tworzę automatyzacje procesów biznesowych, które eliminują ręczną pracę i przyspieszają działanie firmy. Dzięki integracji systemów, automatycznemu przetwarzaniu danych i robotom programowym możesz oszczędzać czas, redukować koszty i skalować swój biznes.`,
                subservices:[
                    {
                        label:'Automatyzacja procesów biznesowych',
                        uri:`#`
                    },
                    {
                        label:'Integracje systemów i API',
                        uri:`#`
                    },
                    {
                        label:'Automatyzacja marketingu',
                        uri:`#`
                    },
                    {
                        label:'Automatyzacja raportowania i danych',
                        uri:`#`
                    }
                ]
            }
        ]
    }
}