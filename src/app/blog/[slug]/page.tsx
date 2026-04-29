import { Faq, TableOfContents } from "@/components/utils/ui";
import { getPost } from "@/data/queries/getPost";
import { Author, Hero, RecommendedArticles } from "@/views/post-view";
import type { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}):Promise<Metadata>{
  const slug = (await params).slug;
  const {seo:{meta,og}} = await getPost({slug:slug});
  
  return {
    title:meta.title,
    description:meta.description,
    robots:meta.robots,
    openGraph: {
      title:og.title,
      description:og.descritpion,
      locale:og.locale,
      siteName:og.site,
    },
    other:{
      
    }
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}){

  const slug = (await params).slug;
  const {page:{author,content,date,excerpt,image,readingTime,title, breadcrumbs}} = await getPost({slug:slug});

    return (
        <div className="min-h-125 pb-25">
            <Hero
              breadcrumbs={{items:breadcrumbs}}
              excerpt={excerpt}
              image={image}
              readingTime={readingTime}
              release={date}
              title={title}
            />
            <main className="page-section-width mx-auto mt-15 mb-10 xl:grid xl:grid-cols-[360px_1fr] gap-3">
                <aside
                    className="bg-neutral-200/50 px-3 py-2 row-end-3 row-start-1"
                >
                    <TableOfContents/>
                </aside>
                <article
                    className="max-w-full *:max-w-full overflow-x-hidden"
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <div className="col-start-2 space-y-4 bg-red-200/0">
                    <Faq/>
                    <Author/>
                </div>
                {/* <RecommendedArticles/> */}
            </main>
        </div>
    )
}