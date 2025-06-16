import Link from "next/link"
import "../app/globals.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
    weight: "400",
    subsets: ['latin']
})

export default function Cabezera() {
    return (
        <header className="flex flex-row bg-gray-700 h-16 shadow-2xs shadow-black items-center justify-between px-8">
            <p className="text-purple-500 text-3xl font-bold border-r-4 border-purple-500 pr-4 hover:text-purple-600 cursor-pointer transition-colors">⚡ Lucky</p>
            <Link href="/" id="enlace" className={roboto.className}>Inicio</Link>
            <Link href="/contacto" id="enlace" className={roboto.className}>Contacto</Link>
            <Link href="proyectos" id="enlace" className={roboto.className}>Proyectos</Link>
            <button className="bg-yellow-400 text-black p-2 rounded-xl font-bold cursor-pointer border-black border-2 hover:bg-amber-400 transition-colors">Contratame</button>
        </header>
    )
}