import { SecondaryLinkButton as Button } from "@/utils/buttons"

function Tile(){
    return (
        <li
            className="list-none bg-brand-950 shrink-0 w-full p-7 *:text-balance " 
        >
            <h3
                className="text-accent-500 font-heading text-xl-plus lg5:text-4xl-plus uppercase font-bold"
            >Content marketing</h3>
            <p
                className="text-accent-50 text-sm mb-5 lg5:mb-15 mt-2.5 lg5:mt-5 lg5:text-base line-clamp-5"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis id pariatur laudantium consequuntur accusantium quam beatae est ducimus saepe labore eaque odio nobis consequatur vitae, maiores esse delectus iusto officia?
            </p>
            <Button
                href="/oferta/seo/linkowanie-zewnetrzne"
                label="Sprawdź"
                theme="light"
            />
        </li>
    )
}

export default function ServiceModules(){
    return (
        <div className="bg-accent-50 py-20 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-accent-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]">
            <div className="page-section-width space-y-15 mx-auto">
                <section className="page-section">
                    <hgroup className="page-section__headings">
                        <h2 className="page-section__title">Co robimy</h2>
                        <h3 className="page-section__subtitle text-accent-600">Wyróżnimy Cię wśród innych biznesów z Twojej branży i pokażemy w Internecie z jak najlepszej strony.</h3>
                    </hgroup>
                </section>
                <div className="grid grid-cols-1 gap-2 sm4:grid-cols-2 lg3:grid-cols-3 lg5:grid-cols-4">
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </div>
            </div>
        </div>
    )
}