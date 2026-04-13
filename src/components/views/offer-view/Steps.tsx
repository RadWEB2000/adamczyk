
const steps:Array<{title:string;description:string}> = [
    {
        title:'Rozmowa wstępna z klientem',
        description:'Poznajemy potrzeby, cele i specyfikę projektu.'
    },
    {
        title:'Analiza i audyt',
        description:'Oceniam stan obecny: czy to SEO, kampanii, czy strony.'
    },
    {
        title:'Plan strategii',
        description:'Przygotowujemy dopasowany plan działań na podstawie analizy.'
    },
    {
        title:'Konsultacja strategii',
        description:'Omawiamy plan z klientem, dopasowujemy ostatnie szczegóły.'
    },
    {
        title:'Działania startowe',
        description:'Pierwsze kroki wdrożeniowe – techniczne, contentowe lub kampanijne.'
    },
    {
        title:'Wdrozenie pełnej strategii',
        description:'Realizacja działań na pełną skalę.'
    },
    {
        title:'Monitorowanie i optymalizacja',
        description:'Na bieżąco śledzę efekty i doskonalimy działania'
    },
    {
        title:'Raportowanie wyników',
        description:'Przedstawiamy klientowi efekty i dalsze rekomendacje.'
    },
    {
        title:'Długofalowa współpraca',
        description:'Długofalowa współpraca i sukces projektu!'
    },
]

export default function Steps(){
    return (
        <div className="bg-brand-700 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px] py-15">
            <section className="page-section-width mx-auto">
                <h2
                    className="page-section__subtitle text-center mb-15 text-accent-400"
                >Proces współpracy</h2>
                <ul className="grid lg:grid-cols-2 xl:grid-cols-3 items-center gap-2">
                    {
                        steps.map(({title,description},index) => {
                            const i = index + 1;
                            return (
                                <li
                                    className="grid grid-cols-[90px_1fr] even:bg-brand-200/45 odd:bg-brand-100/15 items-center text-brand-50 py-3 "
                                >
                                    <span
                                        className="flex items-center justify-center text-4xl aspect-square font-black"
                                    >{i < 10 ? `0${i}` : i}</span>
                                    <section
                                        className="*:text-balance pr-4"
                                    >
                                        <h3
                                            className="text-2xl font-heading font-extrabold uppercase"
                                        >{title}</h3>
                                        <p
                                            className="text-sm "
                                        >{description}</p>
                                    </section>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}