import Image from "next/image";
import img from "@/img/testimonials/aleksandra-sniezek.jpg"
import { LinkedInIcon as LinkedIn, QuoteIcon as Quote} from "@/assets/svgr";
export default function HomeTestimonialCard(){
    return (
        <li
            className="bg-rose-300/0 w-full  list-none p-1 "
        >
            <Quote
                className="size-17 fill-accent-100"
            />
            <p
                className="leading-relaxed text-neutral-50 text-lg p-3 font-extrabold font-heading  md3:text-xl-plus lg3:text-2xl-plus xl5:text-5xl"
            >
                    Współpraca z Lumo to czysta przyjemność. Zespół jest nie tylko profesjonalny, ale także niezwykle zaangażowany w każdy projekt. Dzięki ich strategiom SEO, nasza widoczność w sieci znacznie wzrosła, co przełożyło się na większy ruch i konwersje. Polecam Lumo każdemu, kto szuka skutecznego partnera do rozwoju swojej obecności online.
            </p>
            <span className="block w-full h-0.5 bg-neutral-50/25 my-3" />
            <div className="grid grid-cols-[2fr_5fr] items-center justify-start gap-1 md1:grid-cols-[7rem_1fr] md3:grid-cols-[7rem_4fr_1fr]  md3:grid-rows-1">
                <Image
                    alt="Paweł Bartoń - Expert SEO - Agencja Lumo by Performance Media "
                    className="w-full object-cover aspect-square rounded-full md1:row-start-1 md1:row-end-3  md3:row-end-2"
                    src={img.src}
                    width={img.width || 1024}
                    height={img.height || 764}
                    quality={85}
                    loading="lazy"
                />
                <hgroup 
                    className="*:leading-none *:text-balance space-y-0.5 ml-3 md1:row-start-1 md1:col-start-2"
                >
                    <h3 className="text-lg uppercase font-bold  md3:text-2xl lg3:text-4xl xl5:text-5xl-plus text-accent-300">Katarzyna Irena Politowska</h3>
                    <h4 className="text-sm text-neutral-300 md3:text-base xl5:text-lg-plus">Ekspert SEO - Agencja Lumo by Perfomance Media</h4>
                </hgroup>
                <div
                    className="max-md1:col-span-full flex items-center gap-3 flex-row justify-end  md1:row-start-2 md1:col-start-2  md3:row-start-1  md3:col-start-3  md3:flex-col md3:items-end  md3:justify-between "
                >
                    <LinkedIn
                        className="size-6 fill-accent-50 lg3:size-9"
                    />
                    <time className="text-lg text-accent-50 leading-none lg3:text-xl" dateTime="2024-02-02">24/02/2024</time>
                </div>
            </div>
        </li>
    )
}