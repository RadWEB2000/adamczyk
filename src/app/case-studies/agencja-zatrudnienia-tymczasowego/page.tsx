import { Author } from "@/views/post-view";
import { Faq, TableOfContents } from "@/utils/ui";
import { Hero, Section } from "@/views/case-study-view";

export default function CaseStudyPage(){
    return (
        <div className="min-h-152 pb-22">
            <Hero/>
            <main className="page-section-width mx-auto mt-15 mb-10 xl:grid gap-3 grid-cols-[300px_1fr]">
                <aside className="bg-neutral-200/45 px-5 py-2 row-start-1 row-end-3">
                    <TableOfContents/>
                </aside>
                <article
                    className="space-y-5"
                >
                    <Section/>
                    <Section/>
                    <Section/>
                    <Section/>
                </article>
                <div className="col-start-2 space-y-2">
                    <Faq/>
                    <Author/>
                </div>
            </main>
            case study
        </div>
    )
}