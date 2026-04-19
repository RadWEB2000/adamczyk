import Image from "next/image";
import img from "@/img/me/r-adamczyk-semiforest.webp"
import {PartnershipBenefitsTiles as Tiles} from "@/views/offer-view";


export default function PartnershipBenefits(){
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
                        >Dlaczego warto ze mną współpracować?</h2>
                        <h3
                            className="page-section__subtitle text-accent-500"
                        >Współpraca ze specjalistą</h3>
                    </hgroup>
                    <p
                        className="page-section__content"
                    >
                        Na tak konkurencyjnym i nasyconym przekazem reklamowym rynku jak współczesny, dla budowania stabilnych i rentownych przedsiębiorstw niezbędne są m.in. widoczność w wyszukiwarce Google oraz zdobycie zaufania konsumentów. 
                    </p>
                    <Tiles/>
                </section>
                <div
                    className="relative md2:size-full max-md2:w-full max-md2:aspect-4/3" 
                >
                <Image
                    alt="Dlaczego warto współpracować ze specjalistą SEO?"
                    className="size-full  absolute object-cover object-top"
                    height={img.height || 1024}
                    loading="lazy"
                    src={img.src}
                    width={img.width || 1920}
                />
                </div>
            </div>
        </div>
    )
}