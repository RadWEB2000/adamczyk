import img from "@/img/case-studies/gremi-personal.webp"
import Image from "next/image"
import Link from "next/link"

function Case(){
    return (
        <Link
            className="w-full"
            href='#'
        >
            <div
                className="w-full aspect-video relative z-0"
            >
                <Image
                    alt=''
                    className="size-full object-cover -z-1"
                    height={img.height || 768}
                    loading="lazy"
                    quality={55}
                    src={img.src}
                    width={img.width || 1920}
                />
                <ul
                    className="absolute z-1 top-5 left-5 flex flex-row flex-wrap gap-2"
                >
                    <li
                        className="bg-brand-500/85 px-5 py-1.5 flex items-center justify-center text-neutral-0 font-bold"
                    >SEO</li>
                    <li
                        className="bg-brand-500/85 px-5 py-1.5 flex items-center justify-center text-neutral-0 font-bold"
                    >SEO</li>
                </ul>
                <ul className="absolute z-1 bottom-5 right-5 flex flex-row flex-wrap gap-2">
                    <li
                        className="bg-accent-100 px-3 py-2.5 leading-none"
                    >
                        +312% ruchu SEO
                    </li>
                    <li
                        className="bg-accent-100 px-3 py-2.5 leading-none"
                    >
                        +312% ruchu SEO
                    </li>
                    <li
                        className="bg-accent-100 px-3 py-2.5 leading-none"
                    >
                        +312% ruchu SEO
                    </li>
                    <li
                        className="bg-accent-100 px-3 py-2.5 leading-none"
                    >
                        +312% ruchu SEO
                    </li>
                </ul>
            </div>
            <div
                className="p-2"
            >
                <hgroup
                    className="headings space-y-2"
                >
                    <h4 className="font-bold text-3xl-plus" >Marketing agencji zatrudnienia</h4>
                    <h3 className="font-semibold text-2xl" >GremiPersonal</h3>
                </hgroup>
            </div>
        </Link>
    )
}

export default function CaseStudies(){
    return (
        <div
            className="bg-rose-500/0 w-screen overflow-x-clip"
        >
            <div className="min-h-56 bg-lime-500/0 page-section-width mx-auto">
                s
                <div className="bg-blue-400/0 grid grid-cols-2 *:shrink-0 gap-2 py-3">
                    <Case/>
                    <Case/>
                    <Case/>
                </div>
            </div>
        </div>
    )
}