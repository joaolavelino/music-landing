import { ContactButton } from "@/components/contactButton";
import { GigSchedule } from "@/components/schedule";
import { LINKS } from "@/types/dataTypes";
import Image from "next/image";


export default function ContactSection() {
    return (
        <section className="relative overflow-hidden bg-bg flex flex-col justify-end gap-8 px-4 spt-80 pb-10" id="contato">

            <div className="flex flex-col items-end gap-2 z-5 mt-24">
                <h2 className="font-title text-4xl text-brand text-right drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]">Contato</h2>
            </div>

            <div className="flex flex-col gap-4 z-10">
                <ContactButton />
                <a href={LINKS.instagramSolo} target="_blank" className="hover:outline-4 outline-brand hover:-outline-offset-4 transition-all duration-300" >
                    <div className="w-full relative">
                        <Image
                            src="/picsLive/ig.jpg"
                            alt="musician"
                            fill
                            className="object-cover object-center -z-10"
                            priority
                        />

                        <div className="flex items-center p-6 gap-4 justify-center">
                            <Image
                                src="/icons/igIcon.png"
                                alt="instagram logo"
                                width={42}
                                height={42}
                            />
                            <p className="font-heading text-3xl">@joaoavelino.art</p>
                        </div>

                    </div>
                </a>
                <a href={LINKS.instagramDuo} target="_blank" className="hover:outline-4 outline-brand hover:-outline-offset-4 transition-all duration-300" >
                    <div className="w-full relative">
                        <Image
                            src="/picsLive/tao.jpeg"
                            alt="Musical Duo"
                            fill
                            className="object-cover object-top-left -z-10"
                            priority
                        />

                        <div className="flex items-center p-6 gap-4 justify-center">
                            <Image
                                src="/icons/igIcon.png"
                                alt="instagram logo"
                                width={42}
                                height={42}
                            />
                            <p className="font-heading text-3xl">The Alley-oops</p>
                        </div>

                    </div>
                </a>
            </div>
        </section>
    )
}