import { RegularBlogCard as Card } from "@/utils/cards";
import { ControlPanel, Hero } from "@/views/blog-view";

export default function BlogPage(){
    return (
        <div className="min-h-125 pb-25">
            <Hero/>
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