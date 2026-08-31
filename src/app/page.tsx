import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import EventSection from "@/components/sections/events";
import HeroSection from "@/components/sections/Hero";
import ScheduleSection from "@/components/sections/Schedule";
import VideoSection from "@/components/sections/videos";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <VideoSection />
      <EventSection />
      <ContactSection />

    </div>
  );
}

