import {FaqItem as Item} from "@/utils/ui";

export default function Faq(){
    return (
        <div
            className=""
        >
            <article
                className="page-section"
            >
                <hgroup
                    className="page-section__headings"
                >
                    <h2
                        className="page-section__subtitle"
                    >
                        Pytania i odpowiedzi
                    </h2>
                </hgroup>
            </article>
            <div className="flex flex-col gap-1.5 mt-4">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    )
}