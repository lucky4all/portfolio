import { useState } from 'react'
export default function FormPage() {
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [message, setMessage] = useState('');
    const [showSucess, setShowSucess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let response = await fetch("https://formspree.io/f/xqayanrl", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nombre: name, contacto: contactInfo, mensaje: message }) })
            setShowSucess(true);
            globalThis.localStorage.setItem('formSubmitted', 'true');
            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container px-4 mx-auto">
                <div className="mx-auto">
                    <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contactame! :)</h2>
                        <p className='text-sm text-gray-600'>Nota: te contactaré a través del medio ingresado, sea correo o numero telefonico.</p>
                        <form className='mt-5' onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="name">Nombre</label>
                                <input onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your name" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="email">Email o Telefono</label>
                                <input onChange={(e) => setContactInfo(e.target.value)} className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" placeholder="Enter your email" name="email" id="email" type="email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-800 mb-1" htmlFor="message">Mensaje (opcional)</label>
                                <textarea onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-2 bg-gray-200 resize-none rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300" rows={4} placeholder="Enter your message" name="message" id="message" defaultValue={""} />
                            </div>
                            <button className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300" type="submit">
                                Ponerse en contacto
                            </button>
                        </form>
                        {showSucess && (
                            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                                <p>Gracias por contactarme! Te respondere lo antes posible</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}