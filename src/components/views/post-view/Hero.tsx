import Image from "next/image";
import img from "@/img/others/farm.jpg"
import { Breadcrumbs } from "@/utils/ui";
import { CalendarIcon, ClockIcon } from "@/assets/svgr";
export default function Hero(){
    return (
        <header
            className="bg-brand-950 min-h-[64vh] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-200),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]  text-neutral-200 mb-14"
        >
            <section
                className="page-section-width mx-auto flex flex-col pt-32"
            >
            <Breadcrumbs/>
            <h1 className="mt-8 mb-3 font-black font-heading leading-none text-accent-500 uppercase text-3xl sm:text-4xl-plus md:text-6xl lg:text-7xl-plus xl4:text-9xl-plus 2xl5:text-10xl-plus">Marketplace vs własny sklep – czy w 2026 roku opłaca się jeszcze walczyć o ruch SEO?</h1>
            <strong
                className="text-sm sm:text-base leading-relaxed max-w-[85ch] text-balance"
            >Prowizje na Allegro rosną, Amazon walczy o polskich sprzedawców, a Google coraz częściej odpowiada na pytania klientów, zanim ci klikną w jakikolwiek link. Czy w takim otoczeniu budowanie własnego sklepu i inwestycja w SEO wciąż mają sens? Dane z ostatnich miesięcy dają dość jednoznaczną odpowiedź – tak, choć pod pewnymi warunkami.</strong>
            <span
                className="h-0.5 w-full block bg-brand-300 my-5"
            />
            <div
                className="flex items-center justify-end gap-4"
            >
                <p
                    className="inline-flex space-x-1.5"
                >
                    <ClockIcon
                        className="size-4 fill-brand-200 sm:size-5"
                    />
                    <span
                        className="font-ui text-xs uppercase leading-none my-auto text-brand-200 sm:text-sm"
                    >
                        21 min
                    </span>
                </p>
                <p
                    className="inline-flex space-x-1.5"
                >
                    <CalendarIcon
                        className="size-4 fill-brand-200 sm:size-5"
                    />
                    <span
                        className="font-ui text-xs uppercase leading-none my-auto text-brand-200 sm:text-sm"
                    >
                        21 października 2025
                    </span>
                </p>
            </div>
            <Image
                alt=""
                className="aspect-16/7 object-cover w-full top-12 -mb-12 mt-7"
                height={img.height || 768}
                loading="eager"
                priority
                src={img.src}
                width={img.width || 1920}
                quality={75}
            />
            </section>
        </header>
    )
}