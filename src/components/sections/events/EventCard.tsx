import { MusicEvent } from "@/types/dataTypes";

interface EventCardProps {
    image: React.ReactNode
    event: MusicEvent
}

export const EventCard = ({ image, event }: EventCardProps) => {
    return (
        <article className="p-4 bg-black/70 flex-1 flex gap-8 items-center md:flex-col md:gap-0">
            <div className="flex-1 md:w-full mb-8 h-40 flex justify-center items-center">{image}</div>
            <div className="mt-8 space-y-4 flex-1">
                <h3 className="font-display text-white text-2xl">{event.name}</h3>
                <p className="font-display text-brand text-md">{event.description}</p>
            </div>
        </article>
    );
};