import { LINKS } from "@/types/dataTypes";
import Image from "next/image";


export function ContactButton() {
    return (
        <div className="z-10">
            <a href={LINKS.whatsapp} target="_blank" className="bg-brand text-black px-4 py-2 w-full flex items-center justify-center gap-4 font-display text-2xl cursor-pointer active:drop-shadow-[0px_-4px_0px_var(--color-brand-shadow)] active:translate-y-[4px] transition-all duration-100">
                <Image
                    src="/icons/whatsapp-logo.png"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                />
                Entre em contato
            </a>
        </div>
    )
}