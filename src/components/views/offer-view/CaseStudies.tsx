import { RegularCaseStudyCard as Card} from "@/utils/cards";
import { PrimaryLinkButton as Button} from "@/utils/buttons";

export default function CaseStudies(){
    return (
        <div
            className="bg-neutral-700 text-neutral-50 py-20 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-neutral-500),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]"
        >
            <section className="page-section-width mx-auto">
                <div className="page-section xl:grid grid-cols-[4fr_3fr] xl:gap-6">
                    <hgroup className="page-section__headings">
                        <h2 className="page-section__title">
                            Case Studies
                        </h2>
                        <h3 className="page-section__subtitle text-accent-500">
                            Co zrealizowalem? Jakie mam sukcesy?
                        </h3>
                    </hgroup>
                    <p 
                        className="page-section__content text-neutral-200 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                        dangerouslySetInnerHTML={{__html:`<p>W tej sekcji znajdziesz wybrane case studies z mojej pracy. Opisuję w nich wyzwania, które napotkałem, strategie, które zastosowałem, oraz rezultaty, które osiągnąłem. Każde case study to szczegółowa analiza konkretnego projektu, pokazująca moje podejście do rozwiązywania problemów i osiągania celów biznesowych.</p><p><p>Zapraszam do zapoznania się z moimi sukcesami i doświadczeniem, które zdobyłem podczas realizacji różnorodnych projektów SEO. Mam nadzieję, że te case studies pomogą Ci lepiej zrozumieć, jak mogę przyczynić się do sukcesu Twojej firmy.</p>`}}
                    />
                    <Button
                        href="/case-studies"
                        label="Wszystkie sukcesy"
                        theme="light"
                        styles="w-fit"
                    />
                </div>
                <ul
                    className="flex flex-col gap-3"
                >
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
            </section>
        </div>
    )
}