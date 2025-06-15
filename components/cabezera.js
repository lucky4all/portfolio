import Link from "next/link"
import "../app/globals.css"
export default function Cabezera() {
    return (
        <header className="flex flex-row bg-gray-700 h-16 shadow-xs shadow-gray-500 items-center justify-between px-5">
            <p className="text-purple-500 text-3xl font-bold">⚡ Lucky</p>
            <Link href="/" id="enlace">Inicio</Link>
            <Link href="/contacto" id="enlace">Contacto</Link>
        </header>
    )
}