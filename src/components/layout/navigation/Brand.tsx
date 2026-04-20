import { Logo } from "@/assets/svgr";
import Link from "next/link";

export default function Brand(){
    return (
        <Link className="inline-flex group items-center *:duration-200  *:ease-in-out col-start-1 col-end-3 row-start-1 *:transition-colors" href="/" hrefLang="pl-PL" >
            <Logo
                className="size-15 xl4:size-20 fill-neutral-50 group-hocus:fill-accent-400"
            />
            <span
                className="font-heading font-black text-xl xl4:text-4xl-plus text-neutral-50 group-hocus:text-accent-400"
            >AdamczykTOP</span>
        </Link>
    )
}