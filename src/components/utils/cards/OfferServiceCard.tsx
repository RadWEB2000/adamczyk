import Image from "next/image";
import img from "@/img/peoples/girl-looking-through-binoculars.png"
import { SecondaryLinkButton as Button} from "@/utils/buttons";
import { T_OfferServiceCard } from "@/ts/card.types";
import Link from "next/link";

export default function OfferServiceCard({button,content,image,subtitle,title,subservices}:T_OfferServiceCard){
    return (
        <li
            className="first-of-type:lg5:grid grid-cols-2 bg-brand-300/0  gap-1  page-section first-of-type:col-span-full flex flex-col" 
        >
            <span
                className="col-span-full w-full h-1 block bg-brand-400"
            />
            <div
                className=""
            >
                <hgroup
                    className="page-section__headings pb-5"
                >
                    <h2
                        className="page-section__title"
                    >{title}</h2>
                    <h3
                        className="page-section__subtitle lg5:text-6xl-plus! text-accent-500"
                    >{subtitle}</h3>
                </hgroup>
                <Button
                    {...button}
                     theme="dark"
                />
            </div>
            <section
                className="  lg5:mt-auto lg5:mb-0 space-y-3 "
            >
                <p
                    className="page-section__content"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                {
                    subservices &&
                    <ul className="grid grid-cols-1 md1:grid-cols-2 gap-1">
                        {
                            subservices.slice(0,10).map(({href,label}) => {
                                return (
                                    <Link
                                        className="list-item place-content-center z-0 overflow-clip bg-brand-800 py-2 text-brand-50 text-center uppercase text-xs-plus px-1 relative before:content-[''] before:h-full before:w-[calc(100%+120px)] before:bg-accent-300 font-semibold before:block before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:skew-x-15 before:-z-1 before:scale-x-1 before:origin-left hocus:before:scale-x-100 before:duration-800 before:ease-in-out before:transition-transform hocus:text-brand-900 duration-100 transition-colors ease-in-out"
                                        href={href}
                                    >
                                        {label}
                                    </Link>
                                )
                            })
                        }
                    </ul>
                }
            </section>
        </li>
    )
}