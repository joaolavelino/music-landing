import { ContactButton } from "@/components/contactButton";
import Image from "next/image";
import { events } from '@/lib/events'
import { EventCard } from "./EventCard";


export default function EventSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-bg flex flex-col " id='eventos'>
            <Image
                src="/picsLive/guitlandscape.jpg"
                alt="Guitar Being Played"
                fill
                className="object-cover object-top-center"
                priority
            />


            <div className="min-h-screen flex flex-col justify-end gap-2 z-5 pb-8 lg:px-12 font-display text-brand text-xl bg-black/70 p-4 pt-30 md:p-12">

                <div className="flex flex-col items-end gap-4">
                    <h2 className="font-title text-4xl text-brand text-right drop-shadow-[0px_4px_0px_var(--color-brand-shadow)] ">Eventos</h2>
                    <p className="font-display text-xl text-brand text-right md:w-1/2">
                        Música ao vivo para diferentes ocasiões, ambientes e públicos.
                        <span className="text-white">De encontro corporativo, encontro particular à confraternização da firma, da feira ao festival.</span>
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {events.map(event => {
                        return <EventCard event={event} image={
                            <Image src={event.image} alt={event.name} width={200} height={50} className="object-cover object-top-left" priority />
                        } key={event.name} />
                    })}
                </div>
                <div className="flex flex-col gap-4 w-full pt-8 ">

                    <ContactButton />

                </div>
            </div>



        </section >
    )
}