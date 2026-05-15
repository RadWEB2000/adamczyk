import Image from "next/image";
import {PartnershipBenefitsTiles as Tiles} from "@/views/offer-view";
import type { T_PartnershipBenefits } from "@/ts/offer-page.types";


export default function PartnershipBenefits({content,image,reasons,subtitle,title}:T_PartnershipBenefits){
    return (
        <div
            className="bg-neutral-200/65 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-neutral-400),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]"
        >
            <div className="md2:grid items-center grid-cols-[6fr_5fr]">
                <section
                    className="px-12 py-24 page-section"
                >
                    <hgroup
                        className="page-section__headings"
                    >
                        <h2
                            className="page-section__title"
                        >{title}</h2>
                        <h3
                            className="page-section__subtitle text-accent-500"
                        >{subtitle}</h3>
                    </hgroup>
                    <p
                        className="page-section__content"
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                    <Tiles reasons={reasons}/>
                </section>
                <div
                    className="relative md2:size-full max-md2:w-full max-md2:aspect-4/3" 
                >
                <Image
                    {...image}
                    className="size-full  absolute object-cover object-center"
                    loading="lazy"
                    quality={65}
                />
                </div>
            </div>
        </div>
    )
}