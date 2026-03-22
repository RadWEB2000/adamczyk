import type { T_Overview } from "@/ts/home-page.types";

export default function Overview({content}:T_Overview){
    return (
        <p
            className="w-[min(1700px,85%)] mx-auto 2xl5:w-[min(1900px,85%)] text-4xl-plus font-extrabold leading-tight text-balance mt-20 mb-15 md:text-7xl 2xl:text-9xl 2xl5:text-10xl block text-neutral-400"
        >
            {content}
        </p>
    )
}