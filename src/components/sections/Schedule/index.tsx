import { ContactButton } from "@/components/contactButton";
import { GigSchedule } from "@/components/schedule";


export default function ScheduleSection() {
    return (
        <section className="relative h-screen overflow-hidden bg-bg flex flex-col justify-end gap-8 px-4 spt-80 pb-15" id="agenda">

            <div className="flex flex-col items-end gap-2 z-5 mt-12">
                <h2 className="font-title text-4xl text-brand text-right drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]">Agenda</h2>
            </div>

            <div className="flex flex-col gap-4 z-10">
                <GigSchedule />
                <ContactButton />

            </div>
        </section>
    )
}