"use client"
import { ContactButton } from "@/components/contactButton";
import { GigSchedule } from "@/components/schedule";
import { VIDEOSURL } from "@/lib/videos";
import { VideoFrame } from "./VideoFrame";
import { useEffect } from "react";


export default function VideoSection() {
    useEffect(() => {
        if (!document.getElementById("instagram-embed-script")) {
            const script = document.createElement("script")
            script.id = "instagram-embed-script"
            script.src = "//www.instagram.com/embed.js"
            script.async = true
            document.body.appendChild(script)
        } else {
            // @ts-ignore
            window.instgrm?.Embeds.process()
        }
    }, [])

    return (
        <section className="relative min-h-screen overflow-hidden bg-bg flex flex-col justify-end  gap-8 px-4 lg:px-12 p-15 pb-10" id="videos">

            <div className="flex flex-col items-end gap-2 z-5 mt-12">
                <h2 className="font-title text-4xl text-brand text-right drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]">Vídeos</h2>
            </div>

            <div className="flex flex-col gap-4 z-10 md:grid md:grid-cols-2">
                {VIDEOSURL.map(video => (
                    <VideoFrame key={video.url} link={video.url} />
                ))}

            </div>
        </section>
    )
}