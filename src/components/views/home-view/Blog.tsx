import { HomeBlogCard as Card } from "@/utils/cards";
import { PrimaryLinkButton as Button} from "@/utils/buttons";

export default function Blog(){
    return (
        <div className="bg-[color-mix(in_srgb,var(--color-neutral-100)_65%,var(--color-neutral-200))] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-neutral-200),transparent_46%)_1px,transparent_1px)] bg-size-[105px_150px] py-20 mb-0">
            <div className="page-section-width page-section mx-auto xl:grid grid-cols-[4fr_3fr] xl:gap-6">
                <hgroup className="page-section__headings">
                    <h2 className="page-section__title">
                        Case Studies
                    </h2>
                    <h3 className="page-section__subtitle text-accent-500">
                        Co zrealizowalem? Jakie mam sukcesy?
                    </h3>
                </hgroup>
                <p 
                    className="page-section__content text-neutral-700 xl:row-start-1 xl:row-end-3 xl:col-start-2"
                    dangerouslySetInnerHTML={{__html:`<p>W tej sekcji znajdziesz wybrane case studies z mojej pracy. Opisuję w nich wyzwania, które napotkałem, strategie, które zastosowałem, oraz rezultaty, które osiągnąłem. Każde case study to szczegółowa analiza konkretnego projektu, pokazująca moje podejście do rozwiązywania problemów i osiągania celów biznesowych.</p><p><p>Zapraszam do zapoznania się z moimi sukcesami i doświadczeniem, które zdobyłem podczas realizacji różnorodnych projektów SEO. Mam nadzieję, że te case studies pomogą Ci lepiej zrozumieć, jak mogę przyczynić się do sukcesu Twojej firmy.</p>`}}
                />
                <Button
                    href="/case-studies"
                    label="Wszystkie sukcesy"
                    theme="dark"
                    styles="w-fit"
                />
            </div>
            <div className="page-section-width mx-auto space-y-3 my-4 col-span-full">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}