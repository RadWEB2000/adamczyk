import { RegularHero } from "@/components/utils/ui";
import { RegularBlogCard as Card } from "@/utils/cards";
import { ControlPanel, Hero } from "@/views/blog-view";

export default function BlogPage(){
    return (
        <div className="min-h-125 pb-25">
            <RegularHero
                breadcrumbs={{
                    home:{
                        href:'/',
                        label:'Start'
                    },
                    items:[
                        {
                            href:'/blog',
                            label:'Blog'
                        }
                    ]
                }}
                subtitle="Aktualności"
                title="Blog o marketingu internetowym"
                content="Poznaj mój blog o marketingu internetowym gdzie dowiesz się wiele rzeczy z zakresu pozycjonowania stron internetowych w Google i AI oraz arkana tworzenia stron internetowych w nowoczesnych i prostych technologiach"
            />
            <main
                className="page-section-width my-10 min-h-screen bg-pink-200/0 mx-auto lg5:grid grid-cols-[350px_1fr] gap-2"
            >
                <ControlPanel/>
                <div
                className="grid grid-cols-1 md1:grid-cols-2 gap-1 bg-neutral-200/0"
                >
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </main>
        </div>
    )
}