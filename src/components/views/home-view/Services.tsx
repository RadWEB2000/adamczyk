import { CoreStar, FlowStar, SignalStar } from "@/assets/svgr";
import { PrimaryLinkButton } from "@/components/utils/buttons";
import {ServicesList as List} from "@/views/home-view";


export default function Services(){


    return (
        <div className="bg-brand-700 my-0 py-40 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]">
            <div className="w-[min(1850px,85%)] 2xl5:w-[min(2050px,85%)]  bg-blue-700/0 mx-auto">
                <section
                    className="page-section xl:grid grid-cols-[4fr_3fr] xl:gap-6"
                >
                    <hgroup className="page-section__headings  ">
                        <h3
                        className="page-section__title text-neutral-0"
                            >Oferta freelancera SEO</h3>
                        <h2
                            className=" page-section__subtitle text-accent-400"
                        >Zarabiaj z nami – poszerz swoje portfolio o SEO i SEM!</h2>
                    </hgroup>
                     <p
                        className="page-section__content text-neutral-200 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                        dangerouslySetInnerHTML={{__html:`<span>Widoczność w internecie stała się jednym z najważniejszych wyznaczników sukcesu dla firm. Agencje SEO i SEM odgrywają w tym obszarze fundamentalną rolę. Pomagają przedsiębiorcom wspinać się coraz wyżej w wynikach wyszukiwania Google, a tym samym zwiększać świadomość marki wśród przedstawicieli konkretnej grupy docelowej i przyciągać nowych klientów.</span><br/><span>Poniżej odpowiadamy na najczęściej pojawiające się pytania w kontekście tego rodzaju agencji. Wyjaśniamy różnice pomiędzy SEM i SEO, omawiamy zakres usług, a także podpowiadamy, jak rozpocząć kariery w tych dynamicznie rozwijających się branżach. Sprawdzamy również, jakich kosztów muszą się spodziewać firmy chcące wypromować swój biznes w internecie.</span>`}}
                    />
                    <PrimaryLinkButton
                        href="#"
                        label="Oferta freelancera"
                        styles="w-fit"
                        theme="light"
                    />
                </section>
            </div>
            <span className="block w-full h-0.5 bg-neutral-400 page-section-width mx-auto rounded-full my-4" />
            <List/>
           
        </div>
    )
}