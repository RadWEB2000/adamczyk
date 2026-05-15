'use client'
import { useState } from "react";
import { PartnershipBenefitCard as Card} from "@/utils/cards";
import type { T_PartnershipBenefitsTiles } from "@/ts/offer-page.types";


export default function PartnershipBenefitsTiles({reasons}:T_PartnershipBenefitsTiles){
     const [openIndex, setOpenIndex] = useState(0); // pierwsze otwarte

  return (
    <ul className="space-y-2">
      {reasons.map((item, index) => (
        <Card
          content={item.content}
          isOpen={openIndex === index}
          key={item.title}
          onToggle={() => setOpenIndex(index)}
          title={item.title}
        />
      ))}
    </ul>
  );
}
