import Image from "next/image";
import type { T_About } from "@/ts/home-page.types";

export default function About({content,image,list,subtitle,title,button}:T_About){
    return (
        <div
            className="flex flex-col-reverse w-[min(1700px,85%)] mx-auto gap-5 "
        >
            <Image
                {...image}
                height={image.height || 1020}
                width={image.width || 1920}
            />
            <section
                className="space-y-7"
            >
                <hgroup className="headings space-y-2.5">
                    <h2 className="text-content-light font-semibold" >{title}</h2>
                    <h3 className="text-2xl-plus font-extrabold text-brand" >{subtitle}</h3>
                </hgroup>
                <p
                    className="text-sm *:block text-content-muted-light"
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
        </div>
    )
}