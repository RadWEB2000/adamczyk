import Link from "next/link";
import img from "@/img/others/winter-holidays.jpg"
import Image from "next/image";
import { CalendarIcon as Calendar, UserIcon as User } from "@/assets/svgr";
import type { T_BlogCard } from "@/ts/card.types";
import moment from "moment";

export default function RegularBlogCard({author,excerpt,href,image,release,title}:T_BlogCard){
    return (
        <Link className="size-full gap-2 group bg-white/0 flex flex-col p-3" href={href}>
            <span className="col-span-full h-[1.15px] w-full flex items-center bg-neutral-400 relative after:content-[''] after:absolute    after:left-0  after:block  after:w-full  after:h-1.25  after:scale-x-0  after:origin-left group-hocus:after:scale-x-100  after:duration-400  after:ease-in-out  after:transition-transform   after:bg-accent-500"/>
            <Image
                alt={image.alt}
                className="w-full aspect-video object-cover"
                height={image.height || 569}
                loading="lazy"
                src={image.src}
                title={image.title}
                width={image.width || 768}
            />
            <section>
                <h3
                    className="font-heading text-lg lg:text-2xl leading-tight text-balance font-bold uppercase group-hocus:text-accent-500"
                >{title}</h3>
                <p
                 className="line-clamp-3 text-neutral-500 text-sm mt-1"
                 dangerouslySetInnerHTML={{__html:excerpt}}
                />
            </section>
            <div
                className="flex flex-row flex-wrap items-end justify-between gap-2 "
            >
                <p
                    className="inline-flex items-center gap-2"
                >
                    <Calendar
                        className="size-3"
                    />
                    <time className="text-xs font-semibold uppercase xl2:text-sm" dateTime={release}>{moment(release).locale('pl-PL').format('DD MMM YYYY')}</time>
                </p>
                <p
                    className="inline-flex items-center gap-2"
                >
                    <User
                        className="size-3 "
                    />
                    <span className="text-xs font-semibold uppercase xl2:text-sm">{author}</span>
                </p>
            </div>
        </Link>
    )
}