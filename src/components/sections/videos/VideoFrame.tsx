"use client"

interface VideoFrameProps {
    link: string
}

export const VideoFrame = ({ link }: VideoFrameProps) => {
    const embedHtml = `
        <blockquote class="instagram-media"  data-instgrm-permalink="${link}" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%;">
            <div style="padding:16px;">
                <a href="${link}" target="_blank">Ver essa foto no Instagram</a>
            </div>
        </blockquote>
    `

    return <div dangerouslySetInnerHTML={{ __html: embedHtml }} className="h-[529px] overflow-hidden drop-shadow-[0px_4px_0px_var(--color-brand-shadow)]" />
}