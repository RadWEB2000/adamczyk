import { HomeTestimonialCard as Card} from "@/utils/cards";
import {TestimonialButtons as Buttons} from "@/views/home-view";

export default function Testimonials(){
    return (
        <div className=" py-20 bg-linear-120 from-neutral-800 to-brand-800 mt-0 ">
            <div className="page-section-width mx-auto">
                <ul className="grid grid-cols-1 gap-3">
                    <Card/>
                </ul>
                <Buttons/>
            </div>
        </div>
    )
}