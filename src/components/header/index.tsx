
export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full max-w-[1200px] bg-[linear-gradient(to_bottom,var(--color-bg)_72px,transparent)] flex justify-center h-40">
            <nav className="flex justify-center gap-12 w-full  font-display text-2xl text-brand py-4 mx-auto">
                <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#sobre">SOBRE</a>
                <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#agenda">AGENDA</a>
                <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#videos">VÍDEOS</a>
                <a className="text-white transition-colors duration-200 cursor-pointer" href="#contato">CONTATO</a>
            </nav>
        </header>
    )
}