import { About, Experience } from "@/views/about-view";
import { RegularHero as Hero} from "@/utils/ui";
import { RecommendedArticles } from "@/components/views/post-view";
import { Testimonials } from "@/components/views/home-view";

export default function AboutPage(){
    return (
        <div className="min-h-152 pb-22">
            <Hero
                breadcrumbs={{
                    items:[
                        {
                            href:'/o-mnie',
                            label:'O mnie'
                        }
                    ]
                }}
                subtitle="Buduję widoczność, ruch i sprzedaż w Google"
                title="Radosław Adamczyk — Specjalista SEO"
                content="Zarówno w życiu, jak i w pracy wyróżniają mnie takie cechy jak rzetelność, kreatywność, sumienność i pełne zaangażowanie w to co robię. Do tego lubię kontakt z ludźmi i cenię sobie zarówno tych, którzy przychodzą do mnie z konkretami i wiedzą czego chcą, jak i tych, którzy z tematyką pozycjonowania nie mają nic wspólnego i chętnie darzą mnie swoim zaufaniem w tej kwestii."
            />
            <main className=" my-5">
                <About/>
                <Experience/>
                <Testimonials/>
                <div className="page-section-width mx-auto">
                    <RecommendedArticles/>
                </div>
            </main>
        </div>
    )
}