import { homePageStatic as data} from "@/static/home-page"
import { About, Hero, Overview } from "@/views/home-view"
export default function HomePage(){

  const {hero, about} = data;

  return (
    <div
      className=""
    >
      <Hero
        {...hero}
      />
      <main
        className="space-y-8"
      >
        <Overview/>
        <About
          {...about}
        />  
      </main>    
    </div>
  )
}