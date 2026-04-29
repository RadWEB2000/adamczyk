import Image from "next/image";
import { Breadcrumbs } from "@/utils/ui";
import { CalendarIcon, ClockIcon } from "@/assets/svgr";
import type { T_Hero } from "@/ts/post-page.types";
import moment from 'moment';



export default function Hero({breadcrumbs,excerpt,image,readingTime,release,title}:T_Hero){
    return (
        <header
            className="bg-brand-950 min-h-[64vh] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-brand-200),transparent_86%)_1px,transparent_1px)] bg-size-[105px_150px]  text-neutral-200 mb-17"
        >
            <section
                className="page-section-width mx-auto flex flex-col pt-32"
            >
            <Breadcrumbs
                items={breadcrumbs.items}
            />
            <h1 className="mt-8 mb-3 text-balance font-black font-heading leading-none text-accent-500 uppercase text-3xl sm:text-4xl-plus md:text-6xl lg:text-7xl-plus xl4:text-9xl-plus 2xl5:text-10xl-plus">{title}</h1>
            <strong
                className="text-sm sm:text-base leading-relaxed max-w-[85ch] text-balance"
                dangerouslySetInnerHTML={{__html:excerpt}}
           />
            <span
                className="h-0.5 w-full block bg-brand-300 my-5"
            />
            <div
                className="flex items-center justify-end gap-4"
            >
                <p
                    className="inline-flex space-x-1.5"
                >
                    <ClockIcon
                        className="size-4 fill-brand-200 sm:size-5"
                    />
                    <span
                        className="font-ui text-xs uppercase leading-none my-auto text-brand-200 sm:text-sm"
                    >
                        {readingTime}
                    </span>
                </p>
                <p
                    className="inline-flex space-x-1.5"
                >
                    <CalendarIcon
                        className="size-4 fill-brand-200 sm:size-5"
                    />
                    <time
                        className="font-ui text-xs uppercase leading-none my-auto text-brand-200 sm:text-sm"
                        dateTime={release}
                    >
                        {moment(release).locale('pl-PL').format('DD MMMM YYYY')}
                    </time>
                </p>
            </div>
            <Image
                alt={image.alt}
                className="aspect-16/7 object-cover w-full top-12 -mb-12 mt-7"
                height={image.height || 768}
                loading="eager"
                priority
                title={image.title}
                src={image.src}
                width={image.width || 1920}
                quality={75}
            />
            </section>
        </header>
    )
}