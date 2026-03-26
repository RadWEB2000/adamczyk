import { CoreStar, FlowStar, SignalStar } from "@/assets/svgr";
import { PrimaryLinkButton } from "@/components/utils/buttons";
import {ServicesList as List} from "@/views/home-view";


export default function Services(){


    return (
        <div className="bg-brand-700 my-0 py-40 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]">
            <div className="w-[min(1850px,85%)] 2xl5:w-[min(2050px,85%)]  bg-blue-700/0 mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] relative z-0">
                <section
                    className="space-y-7 z-1  row-start-1 bg-sky-500/0"
                >
                    <hgroup className="headings space-y-2 ">
                        <h3
                        className="text-lg font-semibold landscape:sm4:max-md2:text-base sm3:text-xl-plus 2xl:text-4xl-plus  2xl5:text-6xl text-neutral-0"
                            >Oferta freelancera SEO</h3>
                        <h2
                            className=" font-black text-3xl uppercase text-accent-400 landscape:sm4:max-md2:text-3xl sm3:text-4xl-plus lg:text-5xl-plus 2xl:text-7xl  2xl5:text-8xl-plus"
                        >Zarabiaj z nami – poszerz swoje portfolio o SEO i SEM!</h2>
                    </hgroup>
                     <p
                        className="*:block text-xs leading-relaxed *:text-balance landscape:sm4:max-md2:text-xs sm:text-sm  sm3:text-base  lg:text-lg max-w-[65ch]  2xl5:text-2xl-plus text-neutral-200"
                        dangerouslySetInnerHTML={{__html:`<span>Widoczność w internecie stała się jednym z najważniejszych wyznaczników sukcesu dla firm. Agencje SEO i SEM odgrywają w tym obszarze fundamentalną rolę. Pomagają przedsiębiorcom wspinać się coraz wyżej w wynikach wyszukiwania Google, a tym samym zwiększać świadomość marki wśród przedstawicieli konkretnej grupy docelowej i przyciągać nowych klientów.</span><br/><span>Poniżej odpowiadamy na najczęściej pojawiające się pytania w kontekście tego rodzaju agencji. Wyjaśniamy różnice pomiędzy SEM i SEO, omawiamy zakres usług, a także podpowiadamy, jak rozpocząć kariery w tych dynamicznie rozwijających się branżach. Sprawdzamy również, jakich kosztów muszą się spodziewać firmy chcące wypromować swój biznes w internecie.</span>`}}
                    />
                    <PrimaryLinkButton
                        href="#"
                        label="Oferta freelancera"
                        theme="light"
                    />
                </section>
                <SignalStar className="w-full fill-brand-400 mr-auto -z-1 col-start-1 row-start-1 max-lg:absolute max-lg:mx-auto max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-1/2 max-lg:opacity-32 lg:col-start-2"/>
            </div>
            <span className="block w-full h-0.5 bg-neutral-400 page-section-width mx-auto rounded-full my-4" />
            <List/>
           
        </div>
    )
}