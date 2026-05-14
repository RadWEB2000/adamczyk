import { HomeBlogCard as Card } from "@/utils/cards";
import { PrimaryLinkButton as Button} from "@/utils/buttons";
import type { T_Blog } from "@/ts/home-page.types";

export default function Blog({button,cards,content,subtitle,title}:T_Blog){
    return (
        <div className="bg-[color-mix(in_srgb,var(--color-neutral-100)_65%,var(--color-neutral-200))] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-neutral-200),transparent_46%)_1px,transparent_1px)] bg-size-[105px_150px] py-20 mb-0">
            <div className="page-section-width page-section mx-auto xl:grid grid-cols-[4fr_3fr] xl:gap-6">
                <hgroup className="page-section__headings">
                    <h2 className="page-section__title">
                        {title}
                    </h2>
                    <h3 className="page-section__subtitle text-accent-500">
                        {subtitle}
                    </h3>
                </hgroup>
                <p 
                    className="page-section__content text-neutral-700 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <Button
                    {...button}
                    styles="w-fit"
                    theme="dark"
                />
            </div>
            {
                cards &&
                <div className="page-section-width mx-auto space-y-3 my-4 col-span-full">
                    {
                        cards.map((card) => {
                            return (
                                <Card
                                    {...card}
                                    key={`blog-card-${card.title}`}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}