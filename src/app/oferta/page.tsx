import { CaseStudies, IndustriesSection, PartnershipBenefits, Services, Steps } from "@/views/offer-view";
import { RegularHero as Hero} from "@/utils/ui";
import Image from "next/image";
import { Faq, TableOfContents } from "@/components/utils/ui";
import { Testimonials } from "@/components/views/home-view";
import { getOfferPage } from "@/data/queries/getOfferPage";
import type { Metadata } from "next";


export async function generateMetadata():Promise<Metadata>{
  const {seo} = await getOfferPage();
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

export default async function OfferPage(){
    const {page:{benefits,caseStudies,collaborationProcess,content,faq,featuredImage,hero,services,targetGroups,testimonials}} = await getOfferPage();
  
    return (
        <div className="min-h-152 pb-22">
            <Hero
                {...hero}
            />
            <main className="space-y-4 my-5">
                <IndustriesSection
                    {...targetGroups}
                />
                <div className="page-section-width mx-auto">
                    <Image
                      {...featuredImage}
                      className="aspect-15/5 w-full object-cover object-center"
                      loading="lazy"
                      quality={65}
                    />
                    <Services services={services} />
                </div>
                <div>
                  <PartnershipBenefits {...benefits}  />
                  <Steps {...collaborationProcess} />
                  {
                    caseStudies &&
                    <CaseStudies {...caseStudies} />
                  }
                </div>
                <div className="page-section-width mx-auto mt-15 mb-10 xl:grid xl:grid-cols-[360px_1fr] gap-3">
                    <aside
                        className="bg-neutral-200/50 px-3 py-2 "
                    >
                        <TableOfContents/>
                    </aside>
                    <article
                        className="max-w-full *:max-w-full overflow-x-hidden"
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                </div>
                <Testimonials
                  cards={testimonials}
                />
                <div className="page-section-width mx-auto mt-7 mb-3">
                    <Faq
                      {...faq}
                    />
                </div>
            </main>
        </div>
    )
}