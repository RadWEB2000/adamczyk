import { PrimaryLinkButton as Button } from "@/utils/buttons";
import { homePageStatic } from "@/data/static/home-page"
import { Breadcrumbs } from "@/utils/ui";

export default function Hero(){
        const {content,image,subtitle,title,buttons} = homePageStatic.hero;
    
    return (
          <header className="bg-brand-950 min-h-[64vh] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-200),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]  text-neutral-200 grid grid-cols-1 *:row-start-1 z-0 relative landscape:sm4:max-md2:grid-cols-5 md:grid-cols-12 2xl5:min-h-[92vh]">
            <section
                className="col-start-1  bg-orange-500/0 z-1 flex flex-col items-start justify-end pb-10 px-9 space-y-5 landscape:sm4:max-md2:col-end-5 landscape:sm4:max-md2:space-y-2 md:col-end-10 md:pr-0 md:pl-13 md:pb-15  2xl:pl-52.5  2xl:pb-[10vh]  2xl:space-y-8"
            >
                <Breadcrumbs/>
                <hgroup
                    className="headings mt-15 space-y-2 *:font-heading"
                >
                    <h1
                        className="text-lg font-semibold landscape:sm4:max-md2:text-base md:text-2xl-plus xl5:text-3xl-plus 2xl:text-4xl-plus  2xl5:text-6xl-plus"
                    >Blog o marketingu internetowym</h1>
                    <h2
                        className=" font-black text-4xl uppercase text-accent-500 landscape:sm4:max-md2:text-3xl md:text-6xl lg:text-7xl-plus xl4:text-9xl-plus  2xl5:text-10xl-plus"
                    >Aktualności</h2>
                </hgroup>
                <p
                    className="text-sm leading-relaxed landscape:sm4:max-md2:text-xs md:text-base  lg:text-lg xl5:text-xl-plus max-w-[65ch]  2xl5:text-2xl-plus"
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            </header>
    )
}