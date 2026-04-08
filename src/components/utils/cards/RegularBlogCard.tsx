import Link from "next/link";
import img from "@/img/others/winter-holidays.jpg"
import Image from "next/image";
import { CalendarIcon as Calendar, UserIcon as User } from "@/assets/svgr";

export default function RegularBlogCard(){
    return (
        <Link className="size-full gap-2 group bg-white/0 flex flex-col p-3" href="/blog/post">
            <span className="col-span-full h-[1.15px] w-full flex items-center bg-neutral-400 relative after:content-[''] after:absolute    after:left-0  after:block  after:w-full  after:h-1.25  after:scale-x-0  after:origin-left group-hocus:after:scale-x-100  after:duration-400  after:ease-in-out  after:transition-transform   after:bg-accent-500"/>
            <Image
                alt="Zdjęcie przedstawiające zimowe krajobrazy"
                className="w-full aspect-video object-cover"
                height={img.height || 569}
                loading="lazy"
                src={img}
                width={img.width || 768}
            />
            <section>
                <h3
                    className="font-heading text-2xl leading-tight text-balance font-bold uppercase group-hocus:text-accent-500"
                >How to choose the right manufacturing partner for your business</h3>
                <p
                 className="line-clamp-3 text-neutral-500 text-sm mt-1"
                >Prowizje na Allegro rosną, Amazon walczy o polskich sprzedawców, a Google coraz częściej odpowiada na pytania klientów, zanim ci klikną w jakikolwiek link. Czy w takim otoczeniu budowanie własnego sklepu i inwestycja w SEO wciąż mają sens? Dane z ostatnich miesięcy dają dość jednoznaczną odpowiedź – tak, choć pod pewnymi warunkami.</p>
            </section>
            <div
                className="flex flex-row items-end justify-between gap-2 "
            >
                <p
                    className="inline-flex items-center gap-2"
                >
                    <Calendar
                        className="size-3"
                    />
                    <time className="text-sm font-semibold uppercase" dateTime="2023-10-10">10 paź 2023</time>
                </p>
                <p
                    className="inline-flex items-center gap-2"
                >
                    <User
                        className="size-3 "
                    />
                    <span className="text-sm font-semibold uppercase">Radosław Adamczyk</span>
                </p>
            </div>
        </Link>
    )
}