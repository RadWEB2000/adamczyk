import { SecondaryLinkButton } from "@/components/utils/buttons"
import img from "@/img/me/adamczyk-top.webp"
import Image from "next/image"

export default function Author(){
    return (
        <section
            className="bg-linear-120 from-brand-800 to-brand-900 md2:grid md2:grid-cols-[250px_1fr] gap-4 flex flex-col items-center max-md2:py-7  px-3"
        >
            <Image
                alt=""
                className="max-md2:w-full max-md2:aspect-4/3 object-cover object-top md2:size-full  lg:size-62.5"
                height={img.height || 768}
                loading="lazy"
                src={img.src}
                quality={45}
                width={img.width || 768}
            />
            <div
                className="text-neutral-50 flex flex-col justify-center md2:items-start items-center gap-2 py-1  lg:py-3"
            >
                <hgroup
                    className="*:uppercase *:font-heading *:leading-none space-y-1 max-md2:*:text-center"
                >
                    <h3
                        className="text-4xl-plus font-extrabold text-accent-400 lg:text-5xl"
                    >Radosław Adamczyk</h3>
                    <h4
                        className="text-xl font-semibold  lg:text-2xl"
                    >Specjalista SEO</h4>
                </hgroup>
                <p
                    className="text-neutral-300 text-balance text-sm mb-3 max-md2:text-center  lg:text-base"
                >Specjalista SEO i web developer, który łączy strategię widoczności w Google z nowoczesnym developmentem stron internetowych. Pomagam markom skalować ruch organiczny, budować topical authority oraz projektować szybkie serwisy zoptymalizowane pod SEO, AI i konwersję.</p>
                <SecondaryLinkButton
                    href="/o-mnie"
                    label="Poznaj autora"
                    theme="light"
                />
            </div>
        </section>
    )
}