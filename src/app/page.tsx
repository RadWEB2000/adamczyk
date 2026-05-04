import { Faq } from "@/utils/ui";
import { About, Blog, CaseStudies, Hero, Overview, Services, Statistics, Testimonials } from "@/views/home-view";

export default function HomePage(){


  return (
    <div
      className="pb-25"
    >
      <Hero/>
      <main
        className="space-y-8  2xl5:*:my-20"
      >
        <Overview/>
        <About/>
        <div>
          <Services/>
          <Statistics/>
        </div>
        {/* <CaseStudies/> */}
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