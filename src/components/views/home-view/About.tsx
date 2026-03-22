import Image from "next/image";
import type { T_About } from "@/ts/home-page.types";

export default function About({content,image,list,subtitle,title,button}:T_About){
    return (
        <div
            className="flex flex-col-reverse w-[min(1700px,85%)] mx-auto gap-5 lg:grid lg:grid-cols-[2fr_3fr] lg:items-center  2xl:gap-12  2xl5:w-[min(1900px,85%)]"
        >
            <Image
                className="max-sm4:aspect-4/3 object-cover lg:aspect-5/6.5"
                {...image}
                height={image.height || 1020}
                width={image.width || 1920}
            />
            <section
                className="space-y-4"
            >
                <hgroup className="headings space-y-2.5">
                    <h2 className="text-content-light font-semibold text-lg  sm1:text-xl-plus sm4:text-3xl 2xl:text-5xl 2xl5:text-5xl-plus" >{title}</h2>
                    <h3 className="text-3xl-plus font-extrabold text-brand sm1:text-4xl-plus  sm4:text-5xl-plus  2xl:text-8xl 2xl5:text-9xl" >{subtitle}</h3>
                </hgroup>
                <p
                    className="text-sm *:block text-neutral-600 text-balance sm4:text-base 2xl:text-lg 2xl5:text-xl"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <ul
                    className="flex flex-row flex-wrap space-x-3 space-y-1.5 2xl:space-x-5 2xl:mt-10"
                >
                    {
                        list.map(({emoji,title}) => {
                            return (
                                <li
                                    className="inline-flex shrink-0 gap-1 text-sm uppercase text-neutral-800 font-semibold sm4:text-base 2xl:text-2xl 2xl:gap-2  2xl5:text-3xl"
                                    key={`${emoji}-${title}`}
                                >
                                    <i
                                        className="not-italic"
                                    >{emoji}</i>
                                    <p>{title}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </div>
    )
}