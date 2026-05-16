import { ServiceModules, WhyChoose } from "@/views/service-view";
import { RegularHero as Hero, Faq, TableOfContents} from "@/utils/ui";
import { CaseStudies, CitiesSection, IndustriesSection, PartnershipBenefits, Steps } from "@/views/offer-view";
import { Author, RecommendedArticles } from "@/views/post-view";
import { Testimonials } from "@/views/home-view";
import Image from "next/image";
import { getServicePage } from "@/data/queries/getServicePage";
import { Metadata } from "next";
import { generateBreadcrumbs } from "@/lib/functions/generateBreadcrumbs";

export async function generateMetadata({params}:{params:Promise<{service:Array<string>}>}):Promise<Metadata>{
  const slug:Array<string> = (await params).service;
  const uri = `/oferta/${slug.join('/')}`;
  const {seo} = await getServicePage(uri);
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



export default async function ServicePage({params}:{params:Promise<{service:Array<string>}>}){

    const slug:Array<string> = (await params).service;

    

    const uri = `/oferta/${slug.join('/')}`;

    const {page:{benefits,blog,caseStudies,cities,collaborationProcess,content,faq,featuredImage,hero,targetGroups,testimonials}} = await getServicePage(uri);



    return (
        <div className="min-h-152 pb-22">
          <Hero
              {...hero}
          />
          <main
            className="mt-5 xl:mt-10 space-y-10"
          >
            <div className="page-section-width mx-auto">
              <Image
                    {...featuredImage}
                    className="aspect-15/5 object-cover object-center w-full"
                    loading="lazy"
                    quality={75}
              />
            </div>
              <IndustriesSection {...targetGroups} />
            <div>
              <PartnershipBenefits {...benefits} />
              <Steps {...collaborationProcess} />
              {
                caseStudies &&
                <CaseStudies {...caseStudies} />
              }
            </div>
              {/* <CaseStudies/> */}
            <div className="page-section-width mx-auto mt-15 mb-10 xl:grid xl:grid-cols-[360px_1fr] gap-3">
                  <aside
                      className="bg-neutral-200/50 px-3 py-2"
                  >
                      <TableOfContents/>
                  </aside>
                  <article
                      className="max-w-full *:max-w-full overflow-x-hidden"
                      dangerouslySetInnerHTML={{__html:content}}
                  />
              </div>
              {/* <ServiceModules/> */}
              <div className="page-section-width mx-auto">
                <Faq {...faq} />
              </div>
              <Testimonials cards={testimonials} />
              {/* <CitiesSection/> */}
              <div className="page-section-width mx-auto">
                {/* <RecommendedArticles/> */}
              </div>
          </main>
        </div>
    )
}