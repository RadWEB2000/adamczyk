import { PrimaryLinkButton as Button} from "@/utils/buttons";
import { homePageStatic } from "@/static/home-page"
import Image from "next/image";


export default function About(){

    const {content,image,list,subtitle,title,button} = homePageStatic.about;

    return (
        <div className="page-section-width mx-auto my-30 lg:grid grid-cols-[4fr_6fr] gap-4 space-y-4 2xl:items-center lg:space-y-0">
            <Image
                {...image}
                className="better-img max-lg:aspect-3.5/4 object-cover object-top lg:size-full"
                height={image.height || 1026}
                loading="lazy"
                quality={65}
                width={image.width || 768}
            />
            <section
                className="space-y-4 lg:p-3"
            >
                <hgroup className="headings space-y-2 ">
                    <h2
                    className="text-lg font-semibold landscape:sm4:max-md2:text-base sm3:text-xl-plus 2xl:text-4xl-plus  2xl5:text-6xl-plus"
                        >{title}</h2>
                    <h3
                        className=" font-black text-3xl uppercase text-accent-500 landscape:sm4:max-md2:text-3xl sm3:text-4xl-plus lg:text-5xl-plus 2xl:text-7xl  2xl5:text-8xl-plus"
                    >{subtitle}</h3>
                </hgroup>
                <p
                    className="*:block text-xs leading-relaxed *:text-balance landscape:sm4:max-md2:text-xs sm:text-sm  sm3:text-base  lg:text-lg max-w-[65ch]  2xl5:text-2xl-plus"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                {
                    list &&
                    <ul className="flex flex-row flex-wrap space-x-4 space-y-1.5">
                        {
                            list.map(({emoji,title}) => {
                                return (
                                    <li
                                        className="inline-flex gap-1 text-sm font-bold font-ui uppercase sm3:text-lg "
                                        key={`list-${emoji}-${title}`}
                                    >
                                        <i className="not-italic" >{emoji}</i>
                                        <p>{title}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                {
                    button &&
                    <Button
                        href={button.href}
                        label={button.label}
                        theme="dark"
                    />
                }
            </section>
        </div>
    )
}