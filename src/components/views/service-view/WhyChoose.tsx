import img from "@/img/me/adamczyk-planowanie-notes.png"
import Image from "next/image";

function Tile(){
    return (
        <li
            className="*:text-balance space-y-1"
        >
            <h3
                className="text-base lg:text-xl xl:text-2xl font-extrabold text-brand-500 uppercase"
            >Widoczność</h3>
            <strong
                className="text-xs  lg:text-sm xl:text-base font-thin"
            >
                Pozycjonowanie pomaga stronie pojawiać się wyżej w wynikach wyszukiwania
            </strong>
        </li>
    )
}

export default function WhyChoose(){
    return (
        <div className="page-section-width mx-auto md3:grid grid-cols-7 gap-5 *:row-start-1">
            <section className="page-section flex flex-col space-y-3 col-start-1 col-end-5 py-5">
                <hgroup className="page-section__headings">
                    <h2 className="page-section__title">Odkryj siłę pozycjonowania!</h2>
                    <h3 className="page-section__subtitle text-accent-500">Dlaczego warto zdecydować się na pozycjonowanie?</h3>
                </hgroup>
                <p className="page-section__content">Odkryj możliwości, jakie może dać Twojej firmie pozycjonowanie:</p>
                <ul
                    className="grid grid-cols-1 gap-2 mt-3 xs2:grid-cols-2 xs2:gap-4 xs2:mt-5"
                >
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </ul>
            </section>
            <Image
                className="col-start-5 size-full object-cover col-end-8"
                alt=""
                height={768}
                loading="lazy"
                src={img.src}
                title=""
                width={1920}
            />
        </div>
    )
}