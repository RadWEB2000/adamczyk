import type { T_Testimonials } from "@/ts/card.types";
import { HomeTestimonialCard as Card} from "@/utils/cards";
import {TestimonialButtons as Buttons} from "@/views/home-view";

export default function Testimonials({cards}:T_Testimonials){
    return (
        <div className=" py-20 bg-linear-120 from-neutral-800 to-brand-800 mt-0 ">
            <div className="page-section-width mx-auto">
                {
                    cards &&
                    <>
                        <ul className="grid grid-cols-1 gap-3">
                            {
                                cards.slice(0,1).map((card) => {
                                    return (
                                        <Card
                                            {...card}
                                            key={`testimonial-card-${card.fullname}-${card.company}`}
                                        />
                                    )
                                })
                            }
                        </ul>
                        <Buttons items={cards.map((card) => {
                            return {
                                id:`testimonial-button-${card.fullname}-${card.company}`
                            }
                        })} length={cards.length} />
                    </>
                }
            </div>
        </div>
    )
}