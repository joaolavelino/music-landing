import { gigSchedule } from '@/lib/gigs'
import { format } from 'date-fns'


export function NextGigCard() {

    const nextGig = gigSchedule.filter(el => el.date > new Date())[0]


    return (
        <div className="bg-black/70 w-full z-10 p-4 border-t-4 border-b-4 border-brand">
            <h3 className="font-display text-xl text-brand ">Próxima Apresentação</h3>
            <h3 className="font-display text-4xl text-brand  ">{format(nextGig.date, 'dd/MM')} - {nextGig.venue}</h3>
        </div>
    )
}