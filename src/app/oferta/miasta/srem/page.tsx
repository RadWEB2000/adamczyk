import { RegularHero as Hero} from "@/utils/ui";
import Image from "next/image";


export default function CityPage(){
    return (
        <div>
            <Hero
                content="Pomagam firmom zdobywać widoczność w Google i systemach AI, budować topical authority oraz projektować szybkie strony internetowe zoptymalizowane pod SEO, odpowiedzi generatywne i konwersję. Łączę strategię contentową."
                subtitle="Śrem"
                title="Marketing internetowy Śrem"
            />
            <main className="page-section-width mx-auto my-10">
                <Image
                        alt=""
                        className="aspect-15/5 object-cover object-center"
                        height={768}
                        quality={75}
                        src={'https://portalsremski.pl/news_foto//2025/0407/216378.jpg?20250407103745'}
                        width={1920}
                    />
            </main>
            miasto
        </div>
    )
}