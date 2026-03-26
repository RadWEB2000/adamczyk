import { homePageStatic } from "@/static/home-page"

export default function Overview(){

    const content = homePageStatic.overview

    return (
        <section
            className="page-section-width mx-auto mt-30"
        >
            <p
                className="text-xl font-bold uppercase scroll-reveal sm3:text-3xl-plus text-balance md5:text-6xl xl2:text-8xl 2xl:text-8xl-plus 2xl5:text-10xl"
                dangerouslySetInnerHTML={{__html:content}}
            />
        </section>
    )
}