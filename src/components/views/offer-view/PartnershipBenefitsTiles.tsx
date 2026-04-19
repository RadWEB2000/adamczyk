'use client'
import { PartnershipBenefitCard as Card} from "@/utils/cards";
import { useState } from "react";

const benefits = [
  {
    title: "Partnerskie relacje",
    content:
      "Pracujemy nad tym, co jest dla Ciebie ważne. Bierzemy pod uwagę Twoje realne potrzeby biznesowe i działania prowadzone w innych kanałach digital.",
  },
  {
    title: "Elastyczne podejście",
    content:
      "Dopasowuję zakres współpracy do etapu rozwoju firmy i jej realnych potrzeb biznesowych.",
  },
  {
    title: "Strategia oparta na danych",
    content:
      "Każde działanie SEO, contentowe i techniczne wynika z danych oraz wpływu na wzrost sprzedaży.",
  },
  {
    title: "Myślenie produktowe",
    content:
      "Patrzę szerzej niż tylko frazy – analizuję UX, strukturę informacji i ścieżki konwersji.",
  },
];

export default function PartnershipBenefitsTiles(){
     const [openIndex, setOpenIndex] = useState(0); // pierwsze otwarte

  return (
    <ul className="space-y-2">
      {benefits.map((item, index) => (
        <Card
          key={item.title}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(index)}
        />
      ))}
    </ul>
  );
}