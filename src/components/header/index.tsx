
export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full max-w-[1200px] bg-[linear-gradient(to_bottom,var(--color-bg)_72px,transparent)] flex justify-center h-40">

            <nav className="flex justify-around md:justify-center md:gap-12 w-full  font-display text-2xl text-brand py-4 mx-auto">
                <a href="#home"><h1 className="hidden md:block font-title text-xl text-brand">João Avelino</h1></a>
                <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#sobre">SOBRE</a>
                <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#agenda">AGENDA</a>
                <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#videos">VÍDEOS</a>
                <a className="hover:text-white transition-colors duration-200 cursor-pointer" href="#eventos">EVENTOS</a>
                <a className="text-white transition-colors duration-200 cursor-pointer" href="#contato">CONTATO</a>
            </nav>
        </header>
    )
}