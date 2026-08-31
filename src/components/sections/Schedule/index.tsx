import { ContactButton } from "@/components/contactButton";
import { GigSchedule } from "@/components/schedule";


export default function ScheduleSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-bg flex flex-col lg:grid lg:grid-cols-2 justify-end gap-8 lg:gap-4 pt-12 px-4 " id="agenda">

            <div className="flex flex-col items-end gap-2 z-5 lg:h-screen lg:justify-end lg:pb-24 w-full  pl-10">
                <h2 className="font-title text-4xl text-brand text-right drop-shadow-[0px_4px_0px_var(--color-brand-shadow)] mt-12">Agenda</h2>
                <p className="font-display text-xl text-brand text-right">Confira as próximas apresentações</p>
                <div className="hidden lg:block mt-4 w-full"><ContactButton /></div>
            </div>

            <div className="flex flex-col gap-4 z-10 lg:p-12 lg:pb-24 lg:justify-end lg:h-screen">
                <GigSchedule />
                <div className="block lg:hidden"><ContactButton /></div>

            </div>
        </section>
    )
}