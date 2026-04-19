import { RegularCityCard as City} from "@/utils/cards";
import city from "@/img/others/brooklyn.webp"

export default function CitiesSection(){
    return (
        <div
            className="page-section-width mx-auto my-10"
        >
            <section className="page-section xl:grid xl:grid-cols-2 items-center mb-6">
                <hgroup className="page-section__headings">
                    <h2 className="page-section__title">Pozycjonowanie w Twoim mieście</h2>
                    <h3 className="page-section__subtitle text-accent-500">Zobacz, w jakich miastach jesteśmy!</h3>
                </hgroup>
                <p className="page-section__content">W Performance Media ustalamy kurs na konkretne cele biznesowe. Wytyczamy i realizujemy strategie mediowe, dążąc do zwiększania świadomości oraz efektywności. Dostarczamy mierzalne rezultaty, które wpływają na wzrost Twojego biznesu.</p>
            </section>
            <ul
                className="marquee-mask flex items-center flex-row flex-nowrap justify-start overflow-x-clip gap-1"
            >
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
                <City
                    city="Warszawa"
                    href="/oferta/warszawa"
                    image={{
                        alt:'Warszawa - Oferta SEO / SEM', 
                        src:city.src,
                        title:'Warszawa - Usługi SEO',
                        height:512,
                        width:512
                    }}
                />
            </ul>
        </div>
    )
}