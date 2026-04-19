import { ContactDetails, FirstContact } from "@/views/contact-view";
import {ContactForm as Form} from "@/utils/ui";
import { RegularHero as Hero} from "@/utils/ui";

export default function ContactPage(){
    return (
        <div className="min-h-152 pb-22">
            <Hero
                breadcrumbs={{
                    items:[
                        {
                            href:'/kontakt',
                            label:'Kontakt'
                        }
                    ]
                }}
                subtitle="Kontakt"
                title="Kontakt ze specjalistą SEO"
                content=""
            />
            <main className="page-section-width gap-5 mx-auto my-10 max-xl4:space-y-6 xl4:grid grid-cols-[1fr_550px]">
                <div
                    className="space-y-5"
                >
                    <ContactDetails/>
                    <FirstContact/>
                </div>
                <Form/>
                 <iframe className="w-full col-span-full aspect-16/10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.0686719451087!2d16.879316977140256!3d52.09668177195325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705abdcefa353e9%3A0x66fe79f0d0f3272e!2sDonatowo%2053%2C%2064-020%2C%20Polska!5e0!3m2!1spl!2sit!4v1776363922508!5m2!1spl!2sit" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </main>
        </div>
    )
}