import { gigSchedule } from '@/lib/gigs'
import { GigLine } from './GigLine';
import Image from 'next/image';

interface MonthlyScheduleProps {
    date: Date
}

export function MonthlySchedule({ date }: MonthlyScheduleProps) {

    const selectedMonth = date.getMonth();
    const selectedYear = date.getFullYear();

    const gigs = gigSchedule.filter(el => el.date.getMonth() === selectedMonth && el.date.getFullYear() === selectedYear);
    const sortedGigs = gigs.sort((a, b) => a.date.getTime() - b.date.getTime());


    return (
        <div className="relative p-4 overflow-hidden rounded-md ml-4">
            <Image
                src="/picsLive/guitar.png"
                alt="Guitar Player"
                fill
                className="object-cover object-top z-0"
                priority
            />
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="flex flex-col gap-4 relative z-10">
                {sortedGigs.map((gig, index) => (
                    <GigLine gig={gig} index={index} key={gig.date.getTime()} />
                ))}
            </div>
        </div>
    )
}