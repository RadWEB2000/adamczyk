import { SecondaryLinkButton as SecondaryButton } from "@/utils/buttons"

function Tile(){
    return (
        <li
            className="space-y-1  2xl:space-y-3.5"
        >
            <h3
                className="text-base uppercase font-bold text-brand-100  sm:text-lg-plus  2xl:text-xl-plus  2xl5:text-3xl"
            >Strategia słów kluczowych</h3>
            <p
                className="mb-3 text-xs text-neutral-300 text-balance  sm:text-sm  xl4:text-base  2xl5:text-lg"
            >
                Analiza branży i konkurencji w celu identyfikacji najskuteczniejszych słów kluczowych
            </p>
            <SecondaryButton
                href="#"
                label="Dowiedz się więcej"
                styles="[&>span]:text-xs [&>svg]:size-3 sm:[&>span]:text-sm sm:[&>svg]:size-3.75  2xl:[&>span]:text-base 2xl:[&>svg]:size-5"
                theme="light"
            />
        </li>
    )
}

export default function HomeServiceCard(){
    return (
        <section className="bg-brand-800/45 grid lg:grid-cols-[4fr_5fr] py-10 px-6 gap-7  text-neutral-0 sm:px-8  2xl:p-13 ">
            <article
                className="flex flex-col items-start space-y-4 2xl:space-y-8"
            >
                <hgroup className="headings *:font-heading">
                    <h3
                        className="text-lg font-bold sm:text-xl-plus  xl4:text-2xl 2xl5:text-4xl-plus"
                    >SEO i Optymlizacja treści</h3>
                    <h4
                        className="text-3xl-plus font-extrabold text-accent-300  sm:text-5xl  xl4:text-6xl  2xl5:text-7xl-plus"
                    >Pozycjonowanie stron internetowych</h4>
                </hgroup>
                <p className="text-sm text-balance max-w-[60ch]  xl4:text-lg">
                    Optymalizacja treści to podstawowy element skutecznego marketingu internetowego. Nawet najlepszy tekst bez właściwej optymalizacji może pozostać niewidoczny dla potencjalnych klientów. Dlatego oferujemy kompleksowe usługi SEO copywritingu, aby Twoja treść przyciągała ruch i generowała zyski.
                </p>
                <SecondaryButton
                    href="#"
                    label="Dowiedz się więcej"
                    styles="2xl:[&>span]:text-xl 2xl:[&>svg]:size-6.5"
                    theme="light"
                />
            </article>
            <ul
                className="grid grid-cols-1 gap-8 md:grid-cols-2 "
            >
                <Tile/>
                <Tile/>
                <Tile/>
            </ul>
        </section>        
    )
}