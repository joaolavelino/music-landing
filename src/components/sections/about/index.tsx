import { ContactButton } from "@/components/contactButton";
import { GigSchedule } from "@/components/schedule";
import Image from "next/image";


export default function AboutSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-bg flex flex-col justify-end gap-16 px-4 spt-80 pb-10" id='sobre'>
            <Image
                src="/picsLive/about.png"
                alt="Guitar Player"
                fill
                className="object-cover object-top-left"
                priority
            />
            <div className="flex flex-col items-end gap-2 z-5 mt-12 font-display text-brand text-2xl bg-black/70 p-4">

                <p>Sou João Avelino, músico e me apresento em bares, restaurantes e eventos em Curitiba e região.</p>
                <p>Toco um repertório variado, que abrange <span className="text-white">blues, rock, RnB, jazz, soul, funk </span>, com releituras de outros estilos. Me apresento tanto em formato solo quanto como duo, com o <span className=" text-white">The Alley-oops</span>.</p>
            </div>

            <div className="flex flex-col gap-4">

                <ContactButton />

            </div>
        </section>
    )
}