import { T_RegularHero } from "@/ts/ui.types"
import { Breadcrumbs } from "@/utils/ui";

export default function RegularHero({breadcrumbs,subtitle,title,content}:T_RegularHero){
    return (
        <header className="bg-brand-950 min-h-[54vh] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-200),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]  text-neutral-200 grid grid-cols-1 *:row-start-1 z-0 relative landscape:sm4:max-md2:grid-cols-5">
            <section
                className="col-start-1   z-1 flex flex-col items-start justify-end pb-10 px-9 space-y-5 landscape:sm4:max-md2:col-end-5 bg-sky-500/0 landscape:sm4:max-md2:space-y-2 md:col-end-10 md:px-13 md:pb-15  2xl:px-52.5  2xl:pb-[10vh]  2xl:space-y-8 pt-25 xl4:grid grid-cols-[4fr_3fr]"
            >
                <div
                    className="bg-fuchsia-500/0 mb-auto mt-0"
                >
                    <Breadcrumbs {...breadcrumbs} />
                    <hgroup
                        className="headings mt-4 space-y-2 *:font-heading"
                    >
                        <h1
                            className="text-lg font-semibold landscape:sm4:max-md2:text-base md:text-2xl-plus xl5:text-3xl-plus 2xl:text-4xl-plus  2xl5:text-6xl-plus"
                        >{title}</h1>
                        <h2
                            className=" font-black text-4xl uppercase text-accent-500 block landscape:sm4:max-md2:text-3xl md:text-6xl lg:text-7xl-plus xl4:text-8xl-plus  2xl5:text-10xl-plus"
                        >{subtitle}</h2>
                    </hgroup>
                </div>
                {
                    content &&
                    <p
                        className="text-sm bg-green-600/0 leading-relaxed text-balance landscape:sm4:max-md2:text-xs md:text-base  lg:text-lg xl5:text-xl-plus  mt-auto mb-0 2xl5:text-2xl-plus w-full"
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                }
            </section>
        </header>
    )
}