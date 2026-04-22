import type { T_RegularCityCard } from "@/ts/card.types";
import Image from "next/image";
import Link from "next/link";

export default function RegularCityCard({label,href,image,...props}:T_RegularCityCard){
    return (
        <Link
            className="w-54 md3:w-62 xl4:w-76 shrink-0 group space-y-3 *:duration-100 *:ease-in-out *:transition-all active:scale-95 duration-100 ease-in-out transition-transform" 
            href={href}
            {...props}
        >
            <Image
                {...image}
                className="aspect-16/10 w-full object-cover group-hocus:grayscale "
                height={image.height || 512}
                loading="lazy"
                width={image.width || 726}
                quality={56}
            />
            <h4
                className="font-heading uppercase font-bold text-lg group-hocus:text-accent-400 text-center"
            >{label}</h4>
        </Link>
    )
}