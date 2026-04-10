import { Breadcrumbs } from "@/utils/ui";
import study from "@/img/case-studies/gremi-personal.webp";
import Image from "next/image";
import { PrimaryLinkButton } from "@/components/utils/buttons";

export default function Hero(){
    return (
        <header className="bg-brand-950 mb-17 min-h-[67vh] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-200),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]  text-neutral-200 lg5:grid grid-cols-[4fr_3fr] pt-30 px-14">
            <section
                className="pb-5 lg5:pb-15"
            >
                <Breadcrumbs/>
                <hgroup
                    className="headings space-y-2 *:font-heading mt-10"
                >
                    <h1
                        className="text-lg font-semibold landscape:sm4:max-md2:text-base md:text-2xl-plus xl5:text-3xl-plus 2xl:text-4xl-plus  2xl5:text-6xl-plus"
                    >Agencja zatrudnienia tymczasowego</h1>
                    <h2 className="font-black text-accent-500 uppercase text-5xl  xl4:text-7xl-plus">
                        Pozycjonowanie strony agencji zatrudnienia tymczasowego
                    </h2>
                </hgroup>
                <p className="leading-relaxed text-base text-balance max-w-[75ch] mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti doloremque explicabo? Cumque doloribus hic facere tempore magnam voluptate magni tenetur. Earum corporis commodi consequuntur? Nesciunt consequuntur architecto fugiat sequi.
                </p>
                <PrimaryLinkButton
                    href="/oferta/seo"
                    label="Powtórz ten sukces"
                    theme="light"
                />
            </section>
            <div className="lg5:mt-auto lg5:-mb-12 w-full lg5:space-y-3">
                <ul className="grid grid-cols-1 md3:grid-cols-2 xl:-ml-8 mb-5">
                    <li className="list-disc list-inside  font-ui font-bold text-lime-400">120+ wyświetleń w ciągu roku</li>
                    <li className="list-disc list-inside font-ui font-bold text-lime-400">120+ wyświetleń w ciągu roku</li>
                </ul>
                <Image
                    alt="Agencja zatrudnienia tymczasowego"
                    className=" w-full aspect-video object-cover object-center"
                    height={study.height || 768}
                    loading="eager"
                    priority
                    src={study.src}
                    width={study.width || 1920}
                />
            </div>
        </header>
    )
}