import Image from "next/image"
import { Ubuntu, Roboto, Inconsolata } from "next/font/google"
const ubuntu = Ubuntu({
  weight: "700",
  subsets: ['latin']
})

const inconsolata = Inconsolata({
  weight: "400",
  subsets: ['latin']
})

const roboto = Roboto({
  weight: "400",
  subsets: ['latin']
})

// entry point
export default function Home() {
  return (
    <div className="flex justify-center mt-[7vh] text-center flex-col">
      <div className={roboto.className}>
        <h1 className="text-7xl font-bold">Hola, soy <span className="text-purple-400">LuckyDev <span className="font-sans">👋🏻</span></span></h1>
      </div>
      <div className={inconsolata.className}>
        <p className="mt-[5vh] text-2xl text-gray-400">Un Desarrollador Creativo Creando Aplicaciones Digitales de forma <span className="text-sky-600">Impecable</span></p>
      </div>
       <AlternativeCard />
      
    </div>
  )
}

export function Card() {
  return (
    <div className="flex flex-col justify-center items-center mt-12 border-indigo-500 border-2 rounded-2xl w-[25vw] h-[50vh] overflow-hidden gap-5 ml-[38vw]">
      <Image 
        src="/lucky-one.jpg"
        alt="imagen no disponible"
        width={200}
        height={150}
        className="rounded-3xl hover:border-indigo-500 border-2"
      />
      <p>Hola! soy Lucas Coscia, un desarrollador web con ganas <strong>muchas</strong> de aprender en el hermoso campo de la industria tech.</p>
    </div>
  )
}

export function AlternativeCard() {
  return (
    <div>

    </div>
  )
}
