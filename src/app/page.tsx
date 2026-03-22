import { homePageStatic as data} from "@/static/home-page"
import { About, Hero, Overview } from "@/views/home-view"
export default function HomePage(){

  const {hero, about, overview} = data;

  return (
    <div
      className=""
    >
      <Hero
        {...hero}
      />
      <main
        className="space-y-8  2xl5:*:my-20"
      >
        <Overview content={overview} />
        <About
          {...about}
        />  
        <section className="bg-border-light/25 py-30 h-70">
a
        </section>
      </main>    
    </div>
  )
}