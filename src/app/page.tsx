import { About, CaseStudies, Hero, Overview, Services, Statistics } from "@/views/home-view";

export default function HomePage(){


  return (
    <div
      className=""
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
        <CaseStudies/>
        <section className="py-30 h-270">
a
        </section>
      </main>    
    </div>
  )
}