import Image from "next/image";
import Link from "next/link";
import type { T_RegularCaseStudyCard } from "@/types/card.types";


export default function RegularCaseStudyCard({excerpt,image,title,uri}:T_RegularCaseStudyCard){
    return (
        <Link className="grid grid-cols-[5px_2fr_5fr] gap-1 group lg1:items-center" href={uri} >
            <span 
                className="h-full w-1 relative block bg-neutral-600
                    after:content-['']  after:size-full  after:bg-accent-400   after:scale-y-0 after:absolute  after:origin-bottom group-hocus:after:scale-y-100 after:duration-500  after:ease-in-out after:transition-transform max-lg1:row-start-1 max-lg1:row-end-3
                "
            />
            <Image
                {...image}
                className="max-lg1:w-full max-lg1:aspect-video lg1:size-full object-cover max-lg1:col-start-2 max-lg1:col-end-4 max-lg1:row-start-1"
                loading="lazy"
                quality={65}
            />
            <section
                className="p-3 max-lg1:col-start-2 max-lg1:col-end-4 max-lg1:row-start-2"
            >
                <h3
                    className="text-neutral-50 text-xl-plus  sm2:text-3xl sm4:text-4xl-plus font-heading font-black uppercase text-balance leading-tight group-hocus:text-accent-400 duration-200 ease-in-out transition-colors"
                >{title}</h3>
                <p 
                    className="text-sm sm2:text-base text-neutral-400 text-balance leading-relaxed"
                    dangerouslySetInnerHTML={{__html:excerpt}}
                />
            </section>
        </Link>
    )
}