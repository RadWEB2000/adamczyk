import type { T_Hero } from "@/ts/home-page.types";
import Image from "next/image";
import Link from "next/link";

export default function Hero({content,image,subtitle,title,buttons}:T_Hero){
    return (
        <header className="bg-primary-900 grid grid-cols-12 mb-3 *:row-start-1 min-h-[92vh] text-white">
            <div
                className="z-2 col-start-1 col-end-13 flex flex-col items-start justify-end px-5 pb-10 space-y-5"
            >
                <hgroup
                    className="headings space-y-2"
                >
                    <h1 className="text-primary-100 font-bold text-2xl-plus" >
                        {title}
                    </h1>
                    <h2
                        className="text-secondary text-5xl font-black "
                    >
                        {subtitle}
                    </h2>
                </hgroup>
                <p
                    className="text-sm text-gray-300 text-balance max-w-[60ch] leading-tight"
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
                className="z-1 col-start-1 col-end-13"
            >
                   <Image
                        className="size-full rotate-y-180 grayscale object-cover object-[95%]"
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