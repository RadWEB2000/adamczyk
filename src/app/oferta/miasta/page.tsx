import { RegularHero as Hero} from "@/utils/ui";

export default function CitiesPage(){
    return (
        <div>
            <Hero
                breadcrumbs={{
                    items:[
                        {
                            href:'/oferta',
                            label:'Oferta'
                        },
                        {
                            href:'/oferta/miasta',
                            label:'Miasta'
                        },
                    ]
                }}
                subtitle="Miasta"
                title="Miasta"
                content="Pomagam firmom zdobywać widoczność w Google i systemach AI, budować topical authority oraz projektować szybkie strony internetowe zoptymalizowane pod SEO, odpowiedzi generatywne i konwersję. Łączę strategię contentową."
            />
            <main className="page-section-width mx-auto my-10">
                <h3>A</h3>
                <ul
                    className="flex items-center justify-start flex-wrap gap-4"
                >
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                    <li>
                        <h4>Andrychów</h4>
                    </li>
                </ul>
            </main>
            strona ze spisem miast
        </div>
    )
}