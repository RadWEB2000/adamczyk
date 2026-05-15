import type { T_Steps } from "@/ts/offer-page.types";


export default function Steps({content,steps,subtitle,title}:T_Steps){
    return (
        <div className="bg-brand-700 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px] py-25">
            <section className="page-section-width mx-auto">
                <section
                    className="page-section "
                >
                    <hgroup className="page-section__headings  ">
                        <h2
                        className="page-section__title text-neutral-0"
                            >{title}</h2>
                        <h3
                            className=" page-section__subtitle text-accent-400"
                        >{subtitle}</h3>
                    </hgroup>
                        <p
                        className="page-section__content text-neutral-200 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                </section>
                <ul className="gap-3 mt-6 grid grid-cols-1 lg1:grid-cols-2 xl4:grid-cols-3 w-fit">
                    {
                        steps.map(({content,title},index) => {
                            const i = index + 1;
                            return (
                                <li
                                    className="grid items-center grid-cols-[80px_1fr]"
                                    key={`offer-steps-${title}`}
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
                                        >{content} </p>
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