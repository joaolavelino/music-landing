import { ContactButton } from "@/components/contactButton";
import Image from "next/image";


export default function AboutSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-bg flex flex-col  lg:grid lg:grid-cols-2 lg:gap-0  justify-end gap-16 px-4 lg:px-0 pt-80 lg:pt-0 pb-10" id='sobre'>


            <div className="h-screen flex flex-col justify-end gap-2 z-5 pb-8 lg:px-12 font-display text-brand text-xl bg-black/70 lg:bg-transparent p-4 md:p-12 ">

                <p>Sou <span className="text-white">João Avelino</span>, músico e me apresento em bares, eventos e restaurantes em Curitiba e região.</p>
                <p>Toco um repertório variado, que abrange <span className="text-white">blues, rock, RnB, jazz, soul, funk </span>, com releituras de outros estilos. </p>
                <div className="space-y-4 mt-4 lg:mt-8">
                    <h2 className="font-display text-4xl hidden lg:block">Formatos</h2>

                    <div className="flex flex-col items-start justify-between w-full md:flex-row gap-4">
                        <div className="flex flex-col items-center flex-1 gap-4">
                            <h2 className="font-title text-3xl text-white ">Solo</h2>
                            <p className="text-center">Voz e guitarra, em um formato enxuto e bastante versátil.</p>
                        </div>
                        <div className="flex flex-col items-center flex-1 gap-4 text-center">
                            <Image
                                width={120}
                                height={50}
                                src="/picsLive/taologo.png"
                                alt="Guitar Player"
                                className="object-cover object-top-left"
                                priority
                            />
                            <p>Duo com percussão, para apresentações mais encorpadas, mas ainda compactas.</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full pt-8 ">

                    <ContactButton />

                </div>
            </div>
            <div className="absolute w-full inset-0 lg:relative lg:inset-auto lg:h-screen">
                <Image
                    src="/picsLive/about.png"
                    alt="Guitar Player"
                    fill
                    className="object-cover object-top-left"
                    priority
                />
            </div>


        </section>
    )
}