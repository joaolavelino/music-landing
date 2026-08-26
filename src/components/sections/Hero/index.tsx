import { ContactButton } from "@/components/contactButton";
import { NextGigCard } from "@/components/nextGig";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-bg flex flex-col justify-end gap-16 px-4 spt-80 pb-10">
            <Image
                src="/picsLive/home.png"
                alt="Guitar Player"
                fill
                className="object-cover object-top "
                priority
            />
            <div className="flex flex-col items-end gap-2 z-5 mt-12">
                <h1 className="font-title text-6xl text-brand text-right drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]">JOÃO<br />AVELINO</h1>
                <p className="font-display text-2xl text-black bg-brand px-4 py-1 pb-0 pr-8 z-10 drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]">Música ao vivo</p>
            </div>

            <div className="flex flex-col gap-4">
                <NextGigCard />
                <ContactButton />

            </div>
        </section>
    )
}