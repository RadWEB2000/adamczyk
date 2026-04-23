import img from "@/img/me/r-adamczyk-semiforest.webp"
import Image from "next/image"

export default function About(){
    return (
        <div className="page-section-width mx-auto xl2:grid max-xl2:space-y-6 gap-10 items-center grid-cols-[550px_1fr]">
            <Image
                alt=""
                className=" max-xl2:max-h-120 object-cover w-full object-top max-w-137.5"
                height={img.height || 1920}
                src={img.src}
                width={img.width || 1024}
            />
            <section
                className="page-section"
            >
                <hgroup className="page-section__headings">
                    <h2 className="page-section__title">Wszechstronny specjalista SEO</h2>
                    <h3 className="page-section__subtitle text-accent-500">Kim jestem?</h3>
                </hgroup>
                <p
                    className="page-section__content text-neutral-500"
                >Jestem specjalistą SEO nie tylko ze względów biznesowych, ale z prawdziwej pasji. Od kilkunastu lat interesuję się marketingiem internetowym i stale poszerzam swoją wiedzę, bowiem e-marketing jest tą specjalnością, która nie lubi stagnacji i ciągle się rozwija, zmienia, unowocześnia.<br/><br/>
Drugim moim zamiłowaniem, zaraz po pozycjonowaniu jest sport. To dzięki niemu wiem jak ważna jest determinacja, systematyczność i samodyscyplina, co z pewnością przekłada się na efekty mojej pracy- w pozycjonowaniu tak jak w sporcie, dążę do uzyskania najwyższych wyników.<br/><br/>

Zarówno w życiu, jak i w pracy wyróżniają mnie takie cechy jak rzetelność, kreatywność, sumienność i pełne zaangażowanie w to co robię. Do tego lubię kontakt z ludźmi i cenię sobie zarówno tych, którzy przychodzą do mnie z konkretami i wiedzą czego chcą, jak i tych, którzy z tematyką pozycjonowania nie mają nic wspólnego i chętnie darzą mnie swoim zaufaniem w tej kwestii.<br/><br/>
Jeśli szukasz osoby, która profesjonalnie i skutecznie zajmie się pozycjonowaniem Twojej strony – zapraszam do kontaktu. Będzie mi miło, jeśli do grona osób, które powierzyły mi przyszłość swojej strony i firmy, dołączysz i Ty.</p>
            </section>
        </div>
    )
}