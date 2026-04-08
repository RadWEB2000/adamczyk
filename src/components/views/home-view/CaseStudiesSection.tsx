
export default function CaseStudiesSection(){
    return (
        <section
            className="page-section-width page-section mx-auto xl:grid grid-cols-[4fr_3fr] xl:gap-6 "
        >
                <hgroup className="page-section__headings">
                    <h2 className="page-section__title">
                        Case Studies
                    </h2>
                    <h3 className="page-section__subtitle text-accent-500">
                        Co zrealizowalem? Jakie mam sukcesy?
                    </h3>
                </hgroup>
                <p 
                    className="page-section__content text-neutral-700"
                    dangerouslySetInnerHTML={{__html:`<p>W tej sekcji znajdziesz wybrane case studies z mojej pracy. Opisuję w nich wyzwania, które napotkałem, strategie, które zastosowałem, oraz rezultaty, które osiągnąłem. Każde case study to szczegółowa analiza konkretnego projektu, pokazująca moje podejście do rozwiązywania problemów i osiągania celów biznesowych.</p><p><p>Zapraszam do zapoznania się z moimi sukcesami i doświadczeniem, które zdobyłem podczas realizacji różnorodnych projektów SEO. Mam nadzieję, że te case studies pomogą Ci lepiej zrozumieć, jak mogę przyczynić się do sukcesu Twojej firmy.</p>`}}
                />
        </section>
    )
}