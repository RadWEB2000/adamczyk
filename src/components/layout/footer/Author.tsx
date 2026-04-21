import Link from "next/link";
import {  FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon,  MediumIcon, YouTubeIcon } from "@/assets/svgr";

function Socials(){
    return (
        
        <ul
            className="   gap-1.5 flex items-center justify-center flex-row flex-wrap  "
        >
            <Link className="size-6 sm4:size-10  md4:size-7 xl3:size-10 p-1 aspect-square bg-neutral-900 hocus:bg-[#1877f2] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center" href="#">
                <FacebookIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link className="size-6 sm4:size-10 md4:size-7 xl3:size-10  p-1 aspect-square bg-neutral-900 hocus:bg-[#c32aa3] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center"  href="#">
                <InstagramIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link  className="size-6 sm4:size-10  md4:size-7 xl3:size-10 p-1 aspect-square bg-neutral-900 hocus:bg-[#777] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center" href="#">
                <GithubIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link  className="size-6 sm4:size-10 md4:size-7 xl3:size-10 p-1 aspect-square bg-neutral-900 hocus:bg-[#0a66c2] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center" href="#">
                <LinkedInIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link className="size-6 sm4:size-10 md4:size-7 xl3:size-10  p-1 aspect-square bg-neutral-900 hocus:bg-[#02b875] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center"  href="#">
                <MediumIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
            <Link className="size-6 sm4:size-10 md4:size-7 xl3:size-10  p-1 aspect-square bg-neutral-900 hocus:bg-[#ff0000] hocus:brightness-110 active:scale-97 transition-all duration-200 ease-in-out flex items-center justify-center"  href="#">
                <YouTubeIcon
                    className="fill-neutral-50 size-full"
                />
            </Link>
        </ul>
    )
}

export default function Author(){
    return (
         <div
            className="border-t pt-3 border-t-brand-700 items-center page-section-width mx-auto mb-2 flex flex-col gap-4 md4:grid grid-cols-[1fr_2fr_1fr]"
         >
            <ul className="flex items-center max-md4:order-2 justify-center gap-2">
                <Link className="text-xs hocus:underline underline-offset-4 uppercase text-center" href="/polityka-cookies" rel="index nofollow">Polityka cookies</Link>
                <Link className="text-xs hocus:underline underline-offset-4 uppercase text-center" href="/polityka-prywatnosc" rel="index nofollow">Polityka prywatności</Link>
            </ul>
            <p className="text-center max-md4:order-1">Radosław Adamczyk &copy; {new Date().getFullYear()}</p>
            <Socials/>
        </div>
    )
}