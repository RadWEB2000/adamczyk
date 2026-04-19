
const cards = [
    {
        title:`E-commerce`,
        content:`SEO dla e-commerce to realna przewaga w walce o sprzedaż. Jako agencja SEO pracujemy ze średnimi i dużymi sklepami, które potrzebują skalowalnych rozwiązań i stawiają na stabilny rozwój. Koncentrujemy się na optymalizacji kategorii i kart produktowych, technicznym SEO, mocnych linkach i strategii contentowej, która wspiera decyzje zakupowe w całym lejku. Wiemy, jak zwiększyć ruch z wyszukiwarki, ale też jak przełożyć go na konwersje - dlatego łączymy SEO z SXO i analizą danych. Jako agencja SEO mamy doświadczenie z platformami typu Shopify, WooCommerce czy PrestaShop i potrafimy dopasować działania do technologii i możliwości Twojego sklepu.`
    },
    {
        title:`Producenci & B2B`,
        content:`Jako agencja SEO generujemy leady i pozyskujemy klientów z ruchu organicznego, integrując działania z całą strategią marketingową. Niezależnie od tego, czy Twoja firma sprzedaje produkty w marketplace’ach lub u retailerów, czy oferuje rozwiązania B2B, znamy złożoność decyzji zakupowych i wiemy, jak wpisać SEO w proces sprzedażowy, aby dostarczało wartościowe kontakty lub zamówienia. Jako agencja SEO pracujemy nad kompleksowym pozycjonowaniem, biorąc pod uwagę strukturę Twojej strony, działania w innych kanałach, a także zróżnicowane intencje wyszukiwań Twoich potencjalnych klientów.`
    },
    {
        title:`Usługodawcy`,
        content:`SEO dla firm usługowych to jedno z najskuteczniejszych źródeł pozyskiwania klientów - niezależnie od tego, czy Twoja firma działa lokalnie, czy w dużej skali. Jako agencja SEO pomagamy budować widoczność na frazy, które dokładnie odpowiadają na intencje użytkowników – od zapytań lokalnych („audyt energetyczny Warszawa”) po eksperckie long-taily („jak wybrać system CRM dla firmy usługowej”). Tworzymy strategie, które łączą content, optymalizację techniczną i UX, żeby użytkownik nie tylko trafił na stronę, ale również został na niej i złożył zapytanie. Osadzamy SEO w szerszym kontekście Twojej komunikacji marketingowej, aby współgrało z kampaniami płatnymi, social mediami i ofertą handlową. Jako agencja SEO wiemy, jak ważne jest szybkie reagowanie na zmiany sezonowe, lokalne potrzeby i konkurencję, dlatego stawiamy na elastyczne podejście i pełną transparentność działań.`
    },
    {
        title:`Wydawnictwa & NGO`,
        content:`SEO dla wydawnictw i organizacji NGO to narzędzie do budowania zasięgu, dotarcia do nowych odbiorców i zwiększania zaangażowania, bez konieczności stałego inwestowania w płatną promocję. Jako agencja SEO pomagamy zwiększać widoczność treści w wyszukiwarce: od artykułów evergreen, przez bieżące publikacje, aż po kampanie tematyczne. Dbamy o poprawną strukturę serwisu, optymalizację techniczną (np. indeksację, szybkość, mobile) i analizę potencjału treści, które już istnieją. W przypadku fundacji rozumiemy, że SEO wspiera nie tylko ruch, ale i misję - pozwala dotrzeć do darczyńców, wolontariuszy i beneficjentów. Jako agencja SEO łączymy dane z empatią i doświadczeniem, aby ruch organiczny nie był tylko statystyką, ale realnym wsparciem celów redakcyjnych, edukacyjnych czy społecznych.`
    },
]

export default function IndustriesSection(){
    return (
        <div className="page-section-width my-5 mx-auto">
            <section className="page-section xl:grid xl:grid-cols-2 items-center mb-5">
                <hgroup className="page-section__headings">
                    <h2 className="page-section__title">Agencja SEO dla Twojego modelu biznesowego</h2>
                    <h3 className="page-section__subtitle text-accent-500">Dla kogo pozycjonujemy strony?</h3>
                </hgroup>
                <p className="page-section__content">
                    SEO to inwestycja w trwały, skalowalny wzrost ruchu, sprzedaży i rozpoznawalności bez ciągłego płacenia za kliknięcia. Pracujemy na danych, ale patrzymy szerzej – na model działania Twojej firmy, ścieżkę zakupową klienta i miejsce SEO w całym ekosystemie marketingowym.
                </p>
            </section>
            <ul
                className="grid grid-cols-1 xl4:grid-cols-2 gap-3 xl4:px-4 xl4:gap-6"
            >
                {
                    cards.map(({content,title}) => {
                        return (
                            <li
                                className="bg-brand-200/15 p-4 xl4:p-8 h-fits"
                            >
                                <h4
                                    className="text-lg-plus xl4:text-5xl font-bold uppercase text-brand-500"
                                >{title}</h4>
                                <span
                                    className="w-full h-1 block bg-brand-700 my-3"
                                />
                                <p
                                    className="text-neutral-500 text-balance text-xs leading-tight xl4:text-sm xl4:leading-loose"
                                    dangerouslySetInnerHTML={{__html:content}}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}