import Image from "next/image";
import img from "@/img/backgrounds/laptop.webp"

function Tile(){
    return (
        <div
            className="text-brand-200 bg-blue-600/0 shadow-[0_0_2px_0_white] rounded-full p-3 aspect-square flex flex-col items-center justify-center"
        >
           
            <div
                className="inline-flex items-center"
            >

                <p
                    className="font-heading text-8xl font-extrabold"
                >120</p>
                <span className="flex items-center justify-center size-10 text-3xl-plus font-bold" >+</span>
            </div>
            <p
                className="text-center text-2xl"
            >klientów</p>
        </div>
    )
}

export default function Statistics(){

    return (
        <div
            className="w-screen min-h-[80vh] relative grid grid-cols-1 grid-rows-1 *:col-start-1 *:row-start-1 z-0"
        >
            <Image
                alt=""
                className="absolute size-full object-cover grayscale -z-1 brightness-55"
                height={img.height || 728}
                loading="lazy"
                quality={45}
                src={img.src}
                width={img.width || 1920}
            />
            <div
                className="p-21 inset-0  flex flex-col flex-wrap  gap-12 justify-between"
            >
                <h2
                    className="text-accent-50"
                >Skalujemy wyniki każdego dnia</h2>
                <div
                    className="flex flex-row flex-wrap items-end gap-12 justify-end"
                >
                    <Tile/>
                    <Tile/>
                    <Tile/>
                    <Tile/>
                </div>
            </div>
        </div>
    )
}