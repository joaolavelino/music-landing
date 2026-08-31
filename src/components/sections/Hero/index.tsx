import { ContactButton } from "@/components/contactButton";
import { NextGigCard } from "@/components/nextGig";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-bg flex flex-col lg:grid lg:grid-cols-2 lg:gap-0  justify-end gap-16 px-4 lg:px-0 pt-80 lg:pt-0 pb-10">
            <div className="absolute w-full inset-0 lg:relative lg:inset-auto lg:h-full">
                <Image
                    src="/picsLive/home.png"
                    alt="Guitar Player"
                    fill
                    className="object-cover object-top md:object-[25%_30%]"
                    priority
                />
            </div>
            <div className="relative z-10 flex flex-col justify-end items-end gap-16 w-full lg:gap-24  px-4 pb-10 md:px-8">
                <div className="flex flex-col items-end gap-2 z-5 mt-12">
                    <h1 className="font-title text-6xl text-brand text-right drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]">JOÃO<br />AVELINO</h1>
                    <p className="font-display text-2xl text-black bg-brand px-4 py-1 pb-0 pr-8 z-10 drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]">Música ao vivo</p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <NextGigCard />
                    <ContactButton />

                </div>
            </div>
        </section>
    )
}