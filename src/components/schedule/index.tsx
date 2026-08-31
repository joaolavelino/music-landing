import { gigSchedule } from '@/lib/gigs'
import { format } from 'date-fns';
import { GigLine } from './GigLine';
import Image from 'next/image';


export function GigSchedule() {

    const thisMonth = new Date().getMonth();
    const nextMonth = new Date().getMonth() + 1;
    const gigs = gigSchedule.filter((gig) => gig.date.getMonth() === thisMonth || gig.date.getMonth() === nextMonth);
    const sortedGigs = gigs.sort((a, b) => a.date.getTime() - b.date.getTime());



    return (
        <div className="relative bg-black/70 p-4">
            <Image
                src="/picsLive/guitar.png"
                alt="Guitar Player"
                fill
                className="object-cover object-top -z-10"
                priority
            />
            <div className="flex flex-col gap-4 z-10">
                {sortedGigs.map((gig, index) => (
                    <GigLine gig={gig} index={index} key={gig.date.getTime()} />
                ))}
            </div>
        </div>
    )
}