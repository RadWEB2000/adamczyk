import { PrimaryLinkButton } from "@/components/utils/buttons";
import type { T_Services } from "@/ts/home-page.types";
import {ServicesList as List} from "@/views/home-view";


export default function Services({button,cards,content,subtitle,title}:T_Services){

    return (
        <div className="bg-brand-700 my-0 py-40 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-300),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]">
            <div className="w-[min(1850px,85%)] 2xl5:w-[min(2050px,85%)]  bg-blue-700/0 mx-auto">
                <section
                    className="page-section xl:grid grid-cols-[4fr_3fr] xl:gap-6"
                >
                    <hgroup className="page-section__headings  ">
                        <h2
                            className=" page-section__title text-accent-400"
                        >{title}</h2>
                        <h3
                        className="page-section__subtitle text-neutral-0"
                            >{subtitle}</h3>
                    </hgroup>
                     <p
                        className="page-section__content text-neutral-200 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                    <PrimaryLinkButton
                        {...button}
                        styles="w-fit"
                        theme="light"
                    />
                </section>
            </div>
            <span className="block w-full h-0.5 bg-neutral-400 page-section-width mx-auto rounded-full my-4" />
            <List cards={cards}/>
        </div>
    )
}