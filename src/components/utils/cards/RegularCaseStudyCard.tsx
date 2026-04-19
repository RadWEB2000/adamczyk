import Image from "next/image";
import Link from "next/link";
import img from "@/img/case-studies/gremi-personal.webp"


export default function RegularCaseStudyCard(){
    return (
        <Link className="grid grid-cols-[5px_2fr_5fr] gap-1 group lg1:items-center" href="/case-studies/agencja-zatrudnienia-tymczasowego " >
            <span 
                className="h-full w-1 relative block bg-neutral-600
                    after:content-['']  after:size-full  after:bg-accent-400   after:scale-y-0 after:absolute  after:origin-bottom group-hocus:after:scale-y-100 after:duration-500  after:ease-in-out after:transition-transform max-lg1:row-start-1 max-lg1:row-end-3
                "
            />
            <Image
                alt=""
                className="max-lg1:w-full max-lg1:aspect-video lg1:size-full object-cover max-lg1:col-start-2 max-lg1:col-end-4 max-lg1:row-start-1"
                height={img.height || 768}
                loading="lazy"
                src={img.src}
                quality={75}
                width={img.width || 1920}
            />
            <section
                className="p-3 max-lg1:col-start-2 max-lg1:col-end-4 max-lg1:row-start-2"
            >
                <h3
                    className="text-neutral-50 text-xl-plus  sm2:text-3xl sm4:text-4xl-plus font-heading font-black uppercase text-balance leading-tight group-hocus:text-accent-400 duration-200 ease-in-out transition-colors"
                >Agencja zatrudnienia tymczasowego</h3>
                <p 
                    className="text-sm sm2:text-base text-neutral-400 text-balance leading-relaxed"
                >Zwiększenie widoczności klienta w Polsce na hasła związane z migrantami ze wschodu</p>
            </section>
        </Link>
    )
}