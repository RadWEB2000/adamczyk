export default function FirstContact(){
    return (
        <div
            className="mt-4 space-y-3"
        >
            <section>
                <h2
                    className="page-section__title uppercase text-accent-500"
                >Jak wygląda pierwszy kontakt?</h2>
                <span
                    className="w-full h-1 block bg-brand-950 my-2"
                />
                <ol
                    className="sm4:*:text-lg-plus *:leading-relaxed *:text-balance *:text-start"
                >
                    <li className="list-decimal list-inside">Odpowiadam w ciągu 24h  </li>
                    <li className="list-decimal list-inside">Analizuję Twoją stronę / sytuację  </li>
                    <li className="list-decimal list-inside">Wracam z konkretnymi rekomendacjami  </li>
                    <li className="list-decimal list-inside">Ustalamy dalsze działania</li>
                </ol>
            </section>
            <section>
                <h2
                    className="page-section__title uppercase text-accent-500"
                >Dla kogo jest współpraca?</h2>
                <span
                    className="w-full h-1 block bg-brand-950 my-2"
                />
                <ul
                    className="sm4:*:text-lg-plus *:leading-relaxed *:text-balance *:text-start"
                >
                    <li className="list-['✔'] list-inside" > Firmy, które chcą skalować SEO / sprzedaż</li>
                    <li className="list-['✔'] list-inside"> Projekty z budżetem i nastawieniem na wynik</li>
                    <li className="list-['✔'] list-inside"> Osoby, które chcą długofalowej strategii </li>
                </ul>
            </section>
        </div>
    )
}