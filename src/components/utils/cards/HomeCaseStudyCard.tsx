import Link from "next/link";
import image from "@/img/case-studies/gremi-personal.webp"
import Image from "next/image";

const simple_data = {
    img: {
        alt:'Agencja zatrudnienia z pomorza',
        src:image.src,
    },
    title:'Agencja zatrudnienia tymczasowego',
    content:'Zwiększnie widoczności klienta w Polsce na hasla zwizane z migrantami ze wschodu',
    href:'/case-studies/agencja-zatrudnienia-z-pomorza#seo',
    services:[
        'SEO', 'AEO', 'Strony internetowe'
    ],
    goals: [
        '130+ slow kluczowych w TOP5',
        'rozbudowa strony o Macedonię',
        'Zwiększenie konwersji na stronie'
    ],
    release:'Wrz 2026'
}

export default function HomeCaseStudyCard(){
   const {img,title,content,href,services,goals, release} = simple_data;
    return (
        <Link className="flex flex-col md5:grid grid-cols-[4fr_2fr] w-[min(55rem,75vw)] group gap-3" href="#">
            {
                img &&
                <div
                        className="col-span-full w-full aspect-video object-cover overflow-hidden"
                >
                    <Image
                        {...img}
                        className="size-full object-cover group-hocus:scale-102 duation-200 ease-linear transition-transform"

                        height={678}
                        loading="lazy"
                        quality={56}
                        width={720}
                    />
                </div>
            }
            <section
                className="bg-sky-700/0 text-white block md5:pl-3.5" 
            >
                <h3
                    className="text-xl leading-tight font-heading uppercase font-semibold text-balance text-brand-900 md5:text-3xl-plus xl5:text-4xl group-hocus:text-accent-500 duation-200 ease-linear transition-colors"
                >{title}</h3>
                <p
                    className="text-sm text-balance text-neutral-500 leading-tight mt-2 w-fit bg-rose-500/0 md5:text-base"
                    dangerouslySetInnerHTML={{__html:`<ul class='*:list-disc *:list-inside '><li>Budowa widoczności SEO dla fraz rekrutacyjnych w skali ogólnopolskiej</li>
<li>Skalowanie pozyskiwania leadów SEO dla agencji pracy</li>
<li>Strategia SEO pod kandydatów zza wschodniej granicy</li>
<li>Rozwój widoczności dla rynku pracy tymczasowej</li></ul>`}}
                />
            </section>
            <div
                className="bg-rose-800/0 md5:pr-3.5 flex flex-col items-end justify-between gap-3"
            >
                <p
                    className="uppercase font-ui px-3 py-1 border-brand-500 text-sm md5:text-base border-2 font-semibold w-fit"
                >
                    {release}
                </p>
                <ul
                    className="flex flex-row gap-1 flex-wrap items-center justify-end"
                >
                    {
                        services.map((item) => {
                            return (
                                <li className="bg-brand-700 text-white leading-none px-3 py-1.5 font-bold text-xs md5:text-base uppercase" key={`service-case-study-card-${item}`}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Link>
    )
}