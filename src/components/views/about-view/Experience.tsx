import Image from "next/image"

import sunrise from "@/img/brands/past-companies/sunrise-system.svg"
import four_real from "@/img/brands/past-companies/4real.svg"
import lumo from "@/img/brands/past-companies/lumo.svg"
import g_creative from "@/img/brands/past-companies/g-creative.svg"
import traffic_trends from "@/img/brands/past-companies/traffictrends.svg"
import studio_lokomotywa from "@/img/brands/past-companies/studio-lokomotywa.svg"


const BRANDS = [
  { src: sunrise, alt: "Sunrise System" },
  { src: four_real, alt: "4Real" },
  { src: lumo, alt: "Lumo by Performance Media" },
  { src: g_creative, alt: "G-Creative" },
  { src: traffic_trends, alt: "Traffic Trends" },
  { src: studio_lokomotywa, alt: "Studio Lokomotywa" },
]

export default function Experience() {
  return (
    <section className="bg-neutral-200/45 mt-15 py-20">
      <div className="page-section-width mx-auto space-y-20">
        <div>
          <h2 className="page-section__subtitle text-balance uppercase text-accent-500">
            Doświadczenie zdobyte w agencjach SEO i performance
          </h2>
          <span className="h-0.5 w-full bg-neutral-500 block my-3" />

          <p className="page-section__content max-w-2xl">
            Pracowałem w różnych środowiskach – od dużych agencji SEO,
            przez zespoły performance marketingowe, aż po mniejsze,
            wyspecjalizowane firmy.
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12 mt-10 items-center opacity-70">
            {BRANDS.map(({ src, alt }) => (
              <li key={alt} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  className="h-13 grayscale w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}