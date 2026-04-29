
import { RegularBlogCard as Card} from "@/utils/cards";

export default function RecommendedArticles(){
    return(
         <aside className="col-span-full">
                <span className="w-full h-1 block bg-brand-900" />
                <h2
                    className="text-4xl uppercase font-heading font-extrabold my-6"
                >Rekomendowane wpisy blogowe</h2>
                <div className="grid grid-cols-1 sm4:grid-cols-2 xl2:grid-cols-3">
                    {/* <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                </div>
            </aside> 
    )
}