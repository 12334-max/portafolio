import { MdWhatsapp, MdAlternateEmail } from 'react-icons/md'

function Footer() {
    return (
        <>
            <footer className=" bg-slate-950 text-white text-center grid place-content-center gap-5 border">
                <div className="w-96 border">
                    <strong>!CONTACTAME!</strong>
                    <p className="text-center">Soy una persona proactiva, con habilidades de trabajar en equipo y dispuesto a asumir nuevos desafíos.
                        Si necesitas un programador entusiasta y comprometido, estaré encantado de colaborar contigo.</p>
                </div>

                <div className='border w-96'>
                    <div className="w-auto grid grid-cols-2">
                        <div className='border w-2'>
                            <MdWhatsapp size={25} />
                        </div>
                        <div>
                            <strong className='border'>
                                Whatsapp:
                            </strong> 55 4057 8129
                        </div>
                    </div>

                    <div className="w-auto grid grid-cols-2">
                        <div>
                            <MdAlternateEmail size={25} />
                        </div>
                        <div>
                            <strong className='border'>
                                Correo:
                            </strong> javi18082020@outlook.es
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer