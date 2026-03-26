import { PrimaryLinkButton as Button } from "@/utils/buttons";
import { homePageStatic } from "@/data/static/home-page"
import Image from "next/image";

export default function Hero(){
    const {content,image,subtitle,title,buttons} = homePageStatic.hero;

    return(
         <header className="bg-brand-950 min-h-[97vh] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-200),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]  text-neutral-200 grid grid-cols-1 *:row-start-1 z-0 relative landscape:sm4:max-md2:grid-cols-5 md:grid-cols-12 2xl5:min-h-[92vh]">
            <section
                className="col-start-1  bg-orange-500/0 z-1 flex flex-col items-start justify-end pb-10 px-9 space-y-5 landscape:sm4:max-md2:col-end-5 landscape:sm4:max-md2:space-y-2 md:col-end-10 md:pr-0 md:pl-13 md:pb-15  2xl:pl-52.5  2xl:pb-[10vh]  2xl:space-y-8"
            >
                <hgroup
                    className="headings space-y-2 *:font-heading"
                >
                    <h1
                        className="text-lg font-semibold landscape:sm4:max-md2:text-base md:text-2xl-plus 2xl:text-4xl-plus  2xl5:text-6xl-plus"
                    >{title}</h1>
                    <h2
                        className=" font-black text-4xl uppercase text-accent-500 landscape:sm4:max-md2:text-3xl md:text-6xl lg:text-7xl-plus 2xl:text-9xl  2xl5:text-10xl-plus"
                    >{subtitle}</h2>
                </hgroup>
                <p
                    className="text-sm leading-relaxed landscape:sm4:max-md2:text-xs md:text-base  lg:text-lg max-w-[65ch]  2xl5:text-2xl-plus"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <div className="flex flex-row flex-wrap gap-1 md:gap-3  2xl5:gap-6">
                    {
                        buttons?.map(({href,label}) => {
                            return (
                                <Button
                                    href={href}
                                    key={`hero-button-${label}-${href}`}
                                    label={label}
                                    theme="light"
                                />
                            )
                        })
                    }
                </div>
            </section>
            <div
                   className="col-start-1 bg-pink-500/0 relative -z-1 landscape:sm4:max-md2:col-start-4 landscape:sm4:max-md2:col-end-6 md:col-start-6 md:col-end-13 lg:col-start-8"
            >
                <Image
                    className="h-screen absolute bottom-0 right-0 object-cover rotate-y-180 grayscale object-[115%] mask-r-from-0% mask-r-to-80%  better-img md:object-[70%]  lg:mask-r-from-45%  lg:mask-r-to-90%  2xl:mask-r-from-55%  2xl:mask-r-to-100%"
                    {...image}
                    height={image.height || 1026}
                    loading="eager"
                    priority
                    quality={65}
                    width={image.width || 768}
                />
            </div>
         </header>
    )
}