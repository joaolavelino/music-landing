import { FORMATS, Gig } from "@/types/dataTypes";
import { format } from "date-fns";

interface GigLineProps {
    gig: Gig
    index: number
}

export function GigLine({ gig, index }: GigLineProps) {

    const isEven = index % 2 == 0



    return (
        <div className={`flex flex-col items-start ${isEven ? 'text-brand border-brand' : 'text-white border-white'} border-b-8`}>
            <div className="w-full flex justify-between items-center ">
                <p className="font-display text-2xl text-center leading-4">{format(gig.date, 'dd/MM - HH:mm')}</p>
                <p className="font-display text-2xl  text-center leading-0">{FORMATS[gig.format]}</p>
            </div>

            <p className="font-display text-2xl text-cente leading-tight">
                {gig.venue}
                <span className="ml-4 text-lg">
                    (
                    {gig.region.city !== 'Curitiba' ? `${gig.region.city}` : `${gig.region.detail}`}
                    )
                </span>

            </p>
        </div>
    )
}