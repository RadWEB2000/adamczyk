import { PatternLines, PatternShapes } from "@/assets/svgr";
import type { T_Hero } from "@/ts/home-page.types";
import Image from "next/image";
import Link from "next/link";

export default function Hero({content,image,subtitle,title,buttons}:T_Hero){
    return (
        <header className="bg-neutral-950 grid grid-cols-12 mb-3 *:row-start-1 min-h-[92vh] text-content-dark relative md5:min-h-[96vh] z-0"
       
        >
            <PatternLines
                className="absolute bottom-0 right-0 w-full rotate-y-180 -z-1 opacity-25"
            />
            <div
                className="z-2 col-start-1 col-end-13 flex flex-col items-start justify-end px-[6vw] pb-[9vh] space-y-5 landscape:max-md5:col-end-10 md2:px-0  md2:pl-[5vw]  md2:col-end-11 md5:col-end-10  2xl:space-y-8"
            >
                <hgroup
                    className="headings space-y-2 2xl:space-y-4"
                >
                    <h1 className="text-primary-100 font-bold text-2xl-plus  landscape:max-md:text-lg  landscape:max-md5:text-2xl  md2:text-3xl-plus 2xl:text-4xl-plus 2xl5:text-6xl-plus" >
                        {title}
                    </h1>
                    <h2
                        className="text-secondary text-5xl-plus font-black text-tangerline-300 landscape:max-md:text-3xl-plus landscape:max-md5:text-5xl  md2:text-6xl-plus xl1:text-8xl-plus 2xl:text-9xl-plus 2xl5:text-11xl"
                    >
                        {subtitle}
                    </h2>
                </hgroup>
                <p
                    className="text-base text-content-muted-dark text-balance max-w-[60ch] leading-tight  landscape:max-md5:text-sm  md2:text-lg xl1:text-xl  xl1:leading-snug 2xl:text-xl-plus 2xl5:text-3xl  2xl5:leading-relaxed"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                {
                    buttons &&
                    <div
                        className="flex flex-row flex-wrap gap-1.5 *:shrink-0"
                    >
                        {
                            buttons.map(({label,href}) => {
                                return (
                                    <Link href={href} key={`${label}-${href}`} >
                                        {label}
                                    </Link>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <div
                className="z-1 col-start-1 col-end-13 absolute bottom-0 right-0 w-full h-full  landscape:max-md5:col-start-8  flex items-end  md2:col-start-1  md5:col-start-6 xl1:col-start-7 2xl:col-start-8"
            >
                   <Image
                        className="rotate-y-180 grayscale object-cover object-[95%] better-img mask-alpha mask-r-to-neutral-900 mask-l-from-20 h-screen  md2:object-right  "
                        height={image.height || 1020}
                        loading="eager"
                        priority
                        quality={75}
                        width={image.width || 1920}
                        {...image}
                    />
            </div>
        </header>
    )
}