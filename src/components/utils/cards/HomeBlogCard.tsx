import Image from "next/image";
import Link from "next/link";
import { CalendarIcon as Calendar, UserIcon as User } from "@/assets/svgr";
import moment from "moment";
import type { T_HomeBlogCard } from "@/ts/card.types";

export default function HomeBlogCard({author,date,excerpt,title,uri,image}:T_HomeBlogCard){
    return (
        <Link className="grid md:grid-cols-[3fr_4fr] lg5:grid-cols-[3fr_4fr_2fr] grid-rows-[1.25px_auto] gap-3 group" href={uri}>
            <span className="col-span-full h-[1.15px] w-full flex items-center bg-neutral-400 relative after:content-[''] after:absolute    after:left-0  after:block  after:w-full  after:h-1.25  after:scale-x-0  after:origin-left group-hocus:after:scale-x-100  after:duration-400  after:ease-in-out  after:transition-transform   after:bg-accent-500"/>
            <div className="aspect-video bg-black relative overflow-hidden md:row-start-2 md:row-end-4  lg5:row-end-3">
                <Image
                    {...image}
                    className="size-full object-cover group-hocus:scale-103 duration-200 ease-in-out transition-transform"
                    height={image.height}
                    loading="lazy"
                    quality={65}
                    sizes={image.sizes}
                    width={image.width}
                />
            </div>
            <section
                className="bg-sky-500/0 p-2 md:col-start-2"
            >
                <h3 className="font-heading text-xl leading-tight text-balance font-bold uppercase group-hocus:text-accent-700 duration-200 ease-in-out transition-colors lg2:text-2xl-plus  lg5:text-3xl-plus xl5:text-5xl 2xl:text-5xl-plus">{title}</h3>
                <p 
                    className="text-neutral-500 mt-2 text-xs  lg2:text-sm  line-clamp-3 lg5:text-base"
                    dangerouslySetInnerHTML={{__html:excerpt}}
                />
            </section>
            <div
                className="flex flex-row items-end justify-end gap-2 bg-fuchsia-600/0 md:col-start-2 lg5:col-start-3 lg5:flex-col  lg5:justify-between lg5:p-2"
            >
                <p
                    className="inline-flex items-center gap-2 xl5:hidden"
                >
                    <Calendar
                        className="size-3 lg5:size-5"
                    />
                    <time className="text-xs font-semibold uppercase  lg5:text-base" dateTime={date}>{moment(date).locale('pl-PL').format('DD MMM YYYY')}</time>
                </p>
                <p
                    className="hidden xl5:inline-flex items-center gap-2"
                >
                    <Calendar
                        className="size-3 lg5:size-5"
                    />
                    <time className="text-xs font-semibold uppercase  lg5:text-base" dateTime={date}>{moment(date).locale('pl-PL').format('DD MMMM YYYY')}</time>
                </p>
                <p
                    className="inline-flex items-center gap-2"
                >
                    <User
                        className="size-3 lg5:size-5"
                    />
                    <span className="text-xs font-semibold uppercase  lg5:text-base">{author}</span>
                </p>
            </div>
        </Link>
    )
}