import Image from "next/image"

export default function Section(){
    return (
        <div
            className="lg1:grid grid-cols-[250px_1fr] gap-4 max-lg1:space-y-2 lg1:space-x-12"
        >
            <span
                className="h-0.5 bg-brand-400 w-full block col-span-full mb-5"
            />
            <h2
                className="uppercase text-base sm:text-lg text-balance leading-none font-heading font-black text-accent-600"
            >
                Wnioski i rekomendacje
            </h2>
            <section
                className="*:text-balance space-y-2 *:max-w-[85ch]"
            >
                <h3
                    className="font-bold font-heading text-3xl text-brand-600 uppercase leading-tight sm:text-4xl"
                >Przejęcie lokalnych zapytań i zbudowanie widoczności marki w Google</h3>
                <p
                    className="text-sm leading-relaxed"
                >
                    Celem projektu było zaprojektowanie oraz wdrożenie skalowalnego systemu stron lokalnych dla sklepów PEPCO na każdym rynku, na którym działa marka. Strony miały precyzyjnie odpowiadać na lokalne intencje użytkowników, uwzględniając zarówno zapytania typu „PEPCO + miasto”, jak i „PEPCO + konkretny adres sklepu”. Kluczowe było dostarczenie wartościowych, unikalnych treści zintegrowanych z systemem centralnego zarządzania, ale z opcją lokalnej personalizacji. Projekt zakładał także spójność z wizerunkiem marki, łatwe skalowanie na kolejne rynki oraz maksymalizację efektów SEO: odzyskanie ruchu organicznego, zwiększenie liczby kliknięć i poprawę pozycji w wynikach wyszukiwania. Dzięki temu PEPCO mogło odzyskać kontrolę nad własnym ruchem, wzmocnić obecność w Google i realnie wpłynąć na doświadczenie użytkownika na poziomie lokalnym.
                </p>
            </section>
            <figure
                className="col-span-full space-y-1.5"
            >
                <Image
                    alt="Strony konkretnych lokalizacji sklepów – POLSKA"
                    className=" w-full object-contain"
                    height={764}
                    loading="lazy"
                    src='https://performancegroup.pl/app/uploads/2025/08/wykres-strony-konkretnych-sklepow-polska-wykres.png'
                    quality={75}
                    width={1920}

                />
                <figcaption
                    className="italic text-neutral-500 text-xs-plus"
                >
                    Strony konkretnych lokalizacji sklepów – POLSKA
                </figcaption>
            </figure>
        </div>
    )
}