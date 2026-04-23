import { EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, LocationIcon, MediumIcon, PhoneIcon, YouTubeIcon } from "@/assets/svgr";
import Link from "next/link";
import img from "@/img/me/krak-2.webp"
import Image from "next/image";


function Socials(){
    return (
        <div
            className="col-start-2 mt-4 max-sm4:space-y-3 sm4:p-8 gap-6 sm4:grid grid-cols-[6fr_4fr] items-center"
        >
            <h4 className="text-2xl text-balance text-start uppercase font-semibold">Jestem równiez dostępny na:</h4>
        <ul
            className="   gap-1.5 flex items-center justify-start flex-row flex-wrap   sm4:grid grid-cols-3 "
        >
            <Link className="size-11 sm4:size-full p-2 aspect-square bg-neutral-900 hocus:bg-[#1877f2] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center" href="#">
                <FacebookIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link className="size-11 sm4:size-full p-2 aspect-square bg-neutral-900 hocus:bg-[#c32aa3] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center"  href="#">
                <InstagramIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link  className="size-11 sm4:size-full p-2 aspect-square bg-neutral-900 hocus:bg-[#777] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center" href="#">
                <GithubIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link  className="size-11 sm4:size-full p-2 aspect-square bg-neutral-900 hocus:bg-[#0a66c2] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center" href="#">
                <LinkedInIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link className="size-11 sm4:size-full p-2 aspect-square bg-neutral-900 hocus:bg-[#02b875] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center"  href="#">
                <MediumIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link className="size-11 sm4:size-full p-2 aspect-square bg-neutral-900 hocus:bg-[#ff0000] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center"  href="#">
                <YouTubeIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
        </ul>
        </div>
    )
}

export default function ContactDetails(){
    return (
        <div
            className="space-y-3"
        >
            <h2
                className="page-section__title uppercase text-accent-500"
            >Dane kontaktowe</h2>
            <span
                className="w-full h-1 block bg-brand-950 my-2"
            />
            <div className="max-sm4:space-y-3 sm4:grid grid-cols-[2fr_3fr]">
                <Image
                    alt=""
                    className="size-full row-start-1 object-cover row-end-3 col-start-1"
                    src={img.src}
                    height={725}
                    width={725}
                />
                <section
                    className="not-italic flex flex-col items-start justify-center gap-3 sm4:p-12"
                >
                      <hgroup
                    className="flex col-span-full sm4:mb-10 flex-col-reverse *:font-heading"
                >
                    <h3
                        className="text-5xl-plus font-extrabold"
                    >AdamczykTOP</h3>
                    <h4 className="text-3xl font-semibold">Radosław Adamczyk</h4>
                </hgroup>
                <Link className="inline-flex underline-offset-4 hocus:underline hocus:text-accent-500 hocus:*:text-accent-500 hocus:*:fill-accent-500 items-center gap-2 duration-200 ease-in-out transition-all *:duration-200 *:ease-in-out *:transition-all" href="tel:+48794100413">
                        <PhoneIcon
                            className="size-7 fill-brand-400"
                        />
                        <span
                            className="text-lg font-bold text-brand-600 leading-none"
                        >+48 794-100-413</span>
                    </Link>
                    <Link className="inline-flex underline-offset-4 hocus:underline hocus:text-accent-500 hocus:*:text-accent-500 hocus:*:fill-accent-500 items-center gap-2 duration-200 ease-in-out transition-all *:duration-200 *:ease-in-out *:transition-all" href="mailto:kontakt@adamczyk.top">
                        <EmailIcon
                           className="size-7 fill-brand-400"
                        />
                        <span
                               className="text-lg font-bold text-brand-600 leading-none"
                        >kontakt@adamczyk.top</span>
                    </Link>
                <p
                    className="w-full inline-flex items-center gap-2" 
                >
                    <LocationIcon
                        className="size-7 fill-brand-400"
                    />
                    <span
                        className="text-lg font-bold text-brand-600 leading-relaxed"
                    >
                        Donatowo 53,<br/> 64-020 Czempiń
                    </span>
                </p>
                </section>
                <Socials/>
            </div>
        </div>
    )
}