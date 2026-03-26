import { SecondaryLinkButton as SecondaryButton } from "@/utils/buttons"

function Service(){
    return (
        <section className="odd:bg-neutral-600 even:bg-neutral-500 grid grid-cols-[4fr_5fr] p-15 gap-7 rounded text-neutral-0">
            <article
                className="flex flex-col items-start space-y-8"
            >
                <hgroup className="headings *:font-heading">
                    <h3
                        className="text-2xl font-bold"
                    >SEO i Optymlizacja treści</h3>
                    <h4
                        className="text-4xl-plus font-extrabold"
                    >Pozycjonowanie stron internetowych</h4>
                </hgroup>
                <p className="text-base text-balance max-w-[60ch]">
                    Optymalizacja treści to podstawowy element skutecznego marketingu internetowego. Nawet najlepszy tekst bez właściwej optymalizacji może pozostać niewidoczny dla potencjalnych klientów. Dlatego oferujemy kompleksowe usługi SEO copywritingu, aby Twoja treść przyciągała ruch i generowała zyski.
                </p>
                <SecondaryButton
                    href="#"
                    label="Dowiedz się więcej"
                    theme="light"
                />
            </article>
            <ul
                className="grid grid-cols-2 gap-3"
            >
                <li
                    className="space-y-1"
                >
                    <h3
                        className="text-2xl uppercase font-bold"
                    >Strategia słów kluczowych</h3>
                    <p
                        className="mb-7 text-sm"
                    >
                        Analiza branży i konkurencji w celu identyfikacji najskuteczniejszych słów kluczowych
                    </p>
                    <SecondaryButton
                        href="#"
                        label="Dowiedz się więcej"
                        theme="dark"
                    />
                </li>
                <li
                    className="space-y-1"
                >
                    <h3
                        className="text-2xl uppercase font-bold"
                    >Strategia słów kluczowych</h3>
                    <p
                        className="mb-7 text-sm"
                    >
                        Analiza branży i konkurencji w celu identyfikacji najskuteczniejszych słów kluczowych
                    </p>
                    <SecondaryButton
                        href="#"
                        label="Dowiedz się więcej"
                        theme="dark"
                    />
                </li>
                <li
                    className="space-y-1"
                >
                    <h3
                        className="text-2xl uppercase font-bold"
                    >Strategia słów kluczowych</h3>
                    <p
                        className="mb-7 text-sm"
                    >
                        Analiza branży i konkurencji w celu identyfikacji najskuteczniejszych słów kluczowych
                    </p>
                    <SecondaryButton
                        href="#"
                        label="Dowiedz się więcej"
                        theme="dark"
                    />
                </li>
            </ul>
        </section>
    )
}

export default function Services(){
    return (
        <div className="bg-neutral-800 my-0 py-40 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]">
            <div className="w-[min(1850px,85%)] 2xl5:w-[min(2050px,85%)] minh-256 bg-blue-700 mx-auto">
                a
            </div>
            <span className="block w-full h-0.5 bg-neutral-400 page-section-width mx-auto rounded-full my-4" />
            <div className="w-[min(1850px,85%)] 2xl5:w-[min(2050px,85%)] minh-256 bg-blue-700/0 mx-auto space-y-3">
                <Service/>
                <Service/>
                <Service/>
                <Service/>
            </div>
            <span className="block w-full h-0.5 bg-neutral-400 page-section-width mx-auto rounded-full my-4" />
            <div className="w-[min(1850px,85%)] 2xl5:w-[min(2050px,85%)] minh-256 bg-blue-700 mx-auto">
                a
            </div>
        </div>
    )
}