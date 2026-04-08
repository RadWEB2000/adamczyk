import Link from "next/link";
import featured_img from "@/img/others/skytower-cleaners.jpg"
import Image from "next/image";
import { CalendarIcon as Calendar, UserIcon as User } from "@/assets/svgr";

export default function HomeBlogCard(){
    return (
        <Link className="grid md:grid-cols-[3fr_4fr] lg5:grid-cols-[3fr_4fr_2fr] grid-rows-[1.25px_auto] gap-3 group" href="#">
            <span className="col-span-full h-[1.15px] w-full flex items-center bg-neutral-400 relative after:content-[''] after:absolute    after:left-0  after:block  after:w-full  after:h-1.25  after:scale-x-0  after:origin-left group-hocus:after:scale-x-100  after:duration-400  after:ease-in-out  after:transition-transform   after:bg-accent-500"/>
            <div className="aspect-video bg-black relative overflow-hidden md:row-start-2 md:row-end-4  lg5:row-end-3">
                <Image
                    alt="zdjecie"
                    height={569}
                    className="size-full object-cover group-hocus:scale-103 duration-200 ease-in-out transition-transform"
                    loading="lazy"
                    src={featured_img}
                    quality={55}
                    width={768}
                />
            </div>
            <section
                className="bg-sky-500/0 p-2 md:col-start-2"
            >
                <h3 className="font-heading text-xl leading-tight text-balance font-bold uppercase group-hocus:text-accent-700 duration-200 ease-in-out transition-colors lg2:text-2xl-plus  lg5:text-3xl-plus xl5:text-5xl">How to choose the right manufacturing partner for your business</h3>
                <p className="text-neutral-500 mt-2 text-xs  lg2:text-sm  line-clamp-4 lg5:text-base ">Discover the key factors to consider when selecting a manufacturing partner, including expertise, reliability, and communication...</p>
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
                    <time className="text-xs font-semibold uppercase  lg5:text-base" dateTime="2023-10-10">10 paź 2023</time>
                </p>
                <p
                    className="hidden xl5:inline-flex items-center gap-2"
                >
                    <Calendar
                        className="size-3 lg5:size-5"
                    />
                    <time className="text-xs font-semibold uppercase  lg5:text-base" dateTime="2023-10-10">10 padziernik 2023</time>
                </p>
                <p
                    className="inline-flex items-center gap-2"
                >
                    <User
                        className="size-3 lg5:size-5"
                    />
                    <span className="text-xs font-semibold uppercase  lg5:text-base">Radosław Adamczyk</span>
                </p>
            </div>
        </Link>
    )
}