import { RegularCaseStudyCard as Card} from "@/utils/cards";
import { PrimaryLinkButton as Button} from "@/utils/buttons";
import type { T_CaseStudies } from "@/ts/offer-page.types";

export default function CaseStudies({button,cards,content,subtitle,title}:T_CaseStudies){
    return (
        <div
            className="bg-neutral-700 text-neutral-50 py-20 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-neutral-500),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]"
        >
            <section className="page-section-width mx-auto">
                <div className="page-section xl:grid grid-cols-[4fr_3fr] xl:gap-6">
                    <hgroup className="page-section__headings">
                        <h2 className="page-section__title">
                            {title}
                        </h2>
                        <h3 className="page-section__subtitle text-accent-500">
                            {subtitle}
                        </h3>
                    </hgroup>
                    <p 
                        className="page-section__content text-neutral-200 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                    <Button
                        {...button}
                        styles="w-fit"
                        theme="light"
                    />
                </div>
                {
                    cards &&
                    <ul
                        className="flex flex-col gap-3"
                    >
                        {
                            cards.map(({id,excerpt,image,title,uri}) => {
                                return (
                                    <Card
                                        excerpt={excerpt}
                                        id={id}
                                        image={image}
                                        key={id}
                                        title={title}
                                        uri={uri}
                                    />
                                )
                            })
                        }
                    </ul>
                }
            </section>
        </div>
    )
}