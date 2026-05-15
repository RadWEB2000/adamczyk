import { PrimaryLinkButton as Button} from "@/utils/buttons";
import Image from "next/image";
import type { T_About } from "@/ts/home-page.types";


export default function About({badges,button,content,image,subtitle,title}:T_About){

    // const {content,image,list,subtitle,title,button} = homePageStatic.about;

    return (
        <div className="page-section-width mx-auto my-30 lg:grid grid-cols-[4fr_6fr] gap-4 space-y-4 2xl:items-center lg:space-y-0">
            <Image
                {...image}
                className="better-img max-lg:aspect-3.5/4 object-cover object-top lg:size-full"
                loading="lazy"
                quality={65}
            />
            <section
                className="page-section"
            >
                <hgroup className="page-section__headings">
                    <h2
                    className="page-section__title"
                        >{title}</h2>
                    <h3
                        className="page-section__subtitle text-accent-500"
                    >{subtitle}</h3>
                </hgroup>
                <p
                    className="page-section__content text-neutral-700 "
                    dangerouslySetInnerHTML={{__html:content}}
                />
                {
                    badges &&
                    <ul className="flex flex-row flex-wrap space-x-4 space-y-1.5 xl5:mt-4">
                        {
                            badges.map((badge:string) => {
                                return (
                                    <li
                                        className="inline-flex gap-1 text-sm font-bold font-ui uppercase sm3:text-lg xl5:text-xl"
                                        key={`list-${badge}`}
                                    >
                                        {badge}
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