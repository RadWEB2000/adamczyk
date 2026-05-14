import { About, Blog, CaseStudies, Hero, Overview, Services, Statistics, Testimonials } from "@/views/home-view";
import { getHomePage } from "@/data/queries/getHomePage";
import { Faq } from "@/utils/ui";
import type { Metadata } from "next";

export async function generateMetadata():Promise<Metadata>{
  const {seo} = await getHomePage();
  return {
    title:seo.metaTitle,
    formatDetection:{
      email:true,
      telephone:true
    },
    alternates:{
      canonical:seo.canonical
    },
    description:seo.metaDescription,
    robots:seo.robots,
    openGraph:{
      title:seo.ogTitle,
      description:seo.ogDescription,
      locale:seo.locale,
      type:seo.type,
      url:seo.url,
      siteName:seo.site,

    },
  }
}

export default async function HomePage(){

  const {page:{about,blog,caseStudies,faq,hero,overview,services,testimonials}} = await getHomePage();

  return (
    <div
      className="pb-25"
    >
      <Hero
        {...hero}
      />
      <main
        className="space-y-8  2xl5:*:my-20"
      >
        <Overview/>
        <About/>
        <div>
          <Services/>
          <Statistics/>
        </div>
        <CaseStudies/>
        <div>
          <Blog/>
          <Testimonials/>
        </div>
        <div className="page-section-width mx-auto">
          <Faq/>
        </div>
      </main>    
    </div>
  )
}