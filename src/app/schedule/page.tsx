'use client';

import Header from "@/components/header";
import { MonthlySchedule } from "@/components/schedule/Monthly";
import { useState } from "react";

export const dynamic = 'force-dynamic'

export default function SchedulePage() {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="">
      <section className="min-h-screen mt-30">
        <input className="bg-white text-black mb-4" type="date" value={selectedDate.toISOString().split('T')[0]} onChange={(e) => setSelectedDate(new Date(e.target.value))} />
        <div className="w-[425px]">
          <MonthlySchedule date={selectedDate} />
        </div>
      </section>

    </div>
  );
}

