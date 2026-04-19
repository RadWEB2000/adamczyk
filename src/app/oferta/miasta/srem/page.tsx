import { RegularHero as Hero} from "@/utils/ui";
import business from "@/img/me/adamczyk-planowanie-marynarka.webp"
import Image from "next/image";


export default function CityPage(){
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
                        {
                            href:'/oferta/miasta/srem',
                            label:'Śrem'
                        },
                    ]
                }}
                subtitle="Śrem"
                title="Marketing internetowy Śrem"
                content="Pomagam firmom zdobywać widoczność w Google i systemach AI, budować topical authority oraz projektować szybkie strony internetowe zoptymalizowane pod SEO, odpowiedzi generatywne i konwersję. Łączę strategię contentową."
            />
            <main className="page-section-width mx-auto my-10">
                <Image
                        alt=""
                        className="aspect-15/5 object-cover object-center"
                        quality={75}
                        height={768}
                        src={'https://portalsremski.pl/news_foto//2025/0407/216378.jpg?20250407103745'}
                        width={1920}
                    />
            </main>
            miasto
        </div>
    )
}