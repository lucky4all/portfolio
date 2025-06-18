import Link from "next/link"
import "../app/globals.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: "400",
    subsets: ['latin']
})

export default function Cabezera() {
    return (
        <header className="flex flex-row bg-gray-700 h-16 shadow-2xs shadow-black items-center justify-between px-4 sm:px-8 lg:px-16 overflow-auto flex-wrap">
            <p className="text-purple-500 text-2xl sm:text-3xl font-bold border-r-4 border-purple-500 pr-2 sm:gap-5 hover:text-purple-600 cursor-pointer transition-colors">
                ⚡ Lucky
            </p>
            <nav className="flex gap-2 sm:gap-4 lg:gap-8 items-center">
                <Link href="/" id="enlace" className={roboto.className + " text-base sm:text-lg"}>Inicio</Link>
                <Link href="/contacto" id="enlace" className={roboto.className + " text-base sm:text-lg"} prefetch={false}>Contacto</Link>
                <Link href="proyectos" id="enlace" className={roboto.className + " text-base sm:text-lg"} prefetch={false}>Proyectos</Link>
                <button className="bg-yellow-400 text-black px-2 py-1 sm:px-4 sm:py-2 rounded-xl font-bold cursor-pointer border-black border-2 hover:bg-amber-400 transition-colors text-sm sm:text-base">
                    Contratame
                </button>
            </nav>
        </header>
    )
}