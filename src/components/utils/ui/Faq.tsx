import type { T_Faq } from "@/types/ui.types";
import {FaqItem as Item} from "@/utils/ui";

export default function Faq({questions,title = 'Pytania i odpowiedzi'}:T_Faq){
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
                        {title}
                    </h2>
                </hgroup>
            </article>
            {
                questions &&
                <div className="flex flex-col gap-1.5 mt-4">
                    {
                        questions.map((question) => {
                            return (
                                <Item
                                    {...question}
                                    key={`faq-question-${question.id}`}
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}