import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/Hero";
import ScheduleSection from "@/components/sections/Schedule";
import VideoSection from "@/components/sections/videos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <VideoSection />
      <ContactSection />
    </div>
  );
}

