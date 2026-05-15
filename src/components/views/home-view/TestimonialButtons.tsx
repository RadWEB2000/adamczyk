import type { T_TestimonialButtons } from "@/ts/buttons.types";

export default function TestimonialButtons({length,items}:T_TestimonialButtons){
    return (
        <div className="flex flex-row justify-center items-center gap-3 mt-4">
            {
                items.map(({id}) => {
                    return (
                        <button  className="size-4 block rounded-full bg-neutral-50 active:bg-accent-400 duration-200 ease-in-out  transition-all active:scale-95" key={id} type="button" />
                    )
                })
            }
        </div>
    )
}