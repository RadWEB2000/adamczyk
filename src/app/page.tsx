import { homePageStatic as data} from "@/static/home-page"
import { Hero } from "@/views/home-view"
export default function HomePage(){

  const {hero} = data;

  return (
    <div
      className=""
    >
      <Hero
        {...hero}
      />
    
    </div>
  )
}