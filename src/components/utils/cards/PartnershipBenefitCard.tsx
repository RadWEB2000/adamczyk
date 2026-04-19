import type { T_PartnershipBenefitCard } from "@/ts/card.types";

export default function PartnershipBenefitCard({content,isOpen,onToggle,title}:T_PartnershipBenefitCard){
    return (
        <li className="group">
            <button
                onClick={onToggle}
                className="w-full bg-brand-900 group-hover:bg-brand-200 px-4 py-3 text-left duration-100 ease-in-out transition-colors"
                type="button"
            >
                <h4 className="uppercase font-bold text-sm xl4:text-lg-plus text-brand-100 group-hover:text-brand-900 duration-100 ease-in-out transition-colors">
                {title}
                </h4>
            </button>
            <div
                className={`
                grid transition-all duration-500 ease-in-out
                ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                `}
            >
                <div className="overflow-hidden">
                <strong className="p-4 block font-normal text-xs xl4:text-base">{content}</strong>
                </div>
            </div>
        </li>
    )
}