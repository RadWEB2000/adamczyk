
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
        <div className="bg-brand-700 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px] py-25">
            <section className="page-section-width mx-auto">
                <section
                    className="page-section "
                >
                    <hgroup className="page-section__headings  ">
                        <h2
                        className="page-section__title text-neutral-0"
                            >Proces</h2>
                        <h3
                            className=" page-section__subtitle text-accent-400"
                        >Proces współpracy</h3>
                    </hgroup>
                        <p
                        className="page-section__content text-neutral-200 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                        dangerouslySetInnerHTML={{__html:`<span>Widoczność w internecie stała się jednym z najważniejszych wyznaczników sukcesu dla firm. Agencje SEO i SEM odgrywają w tym obszarze fundamentalną rolę. Pomagają przedsiębiorcom wspinać się coraz wyżej w wynikach wyszukiwania Google, a tym samym zwiększać świadomość marki wśród przedstawicieli konkretnej grupy docelowej i przyciągać nowych klientów.</span>`}}
                    />
                </section>
                <ul className="gap-3 mt-6 grid grid-cols-1 lg1:grid-cols-2 xl4:grid-cols-3 w-fit">
                    {
                        steps.map(({title,description},index) => {
                            const i = index + 1;
                            return (
                                <li
                                    className="grid items-center grid-cols-[80px_1fr]"
                                >
                                    <span
                                        className="bg-brand-800 rounded-tl-full corner-tl-bevel items-center flex justify-center text-center text-brand-50 font-bold text-4xl-plus w-full aspect-square"
                                    >{i < 10 ? `0${i}` : i}</span>
                                    <section
                                        className="p-4"
                                    >
                                        <h4
                                            className="text-accent-500 uppercase leading-none font-extrabold xl4:text-2xl-plus"
                                        >{title}</h4>
                                        <p
                                            className="text-neutral-300 text-balance text-start leading-tight text-sm font-semibold xl4:text-base"
                                        >{description} </p>
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