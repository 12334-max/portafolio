import { MdWhatsapp, MdAlternateEmail } from 'react-icons/md'

function Footer() {
    return (
        <>
            <div className='dark:bg-slate-950 rounded-xl gap-3 justify-items-center'>
                <div className='w-1/2 md:w-auto justify-items-center'>
                    <p className='text-lg text-center py-4 text-slate-400 font-bold'>
                        Contactame!
                    </p>
                    <p className='text-slate-700 text-center w-auto md:w-1/2 p-3'>
                        Soy una persona proactiva, con habilidades de trabajar en equipo y dispuesto a asumir nuevos desafíos.
                        Si necesitas un programador entusiasta y comprometido, estaré encantado de colaborar contigo.
                    </p>
                </div>
                <div className='w-1/2 justify-items-center p-3'>
                    <div className="text-slate-600 flex gap-1">
                        <MdAlternateEmail size={25} color='blue' />
                        <p> <span className='text-lg text-slate-400 font-bold'></span> javi18082020@outlook.es</p>
                    </div>
                    <div className='text-slate-600 flex gap-1'>
                        <MdWhatsapp size={25} color='blue' />
                        <p><span className='text-lg text-slate-400 font-bold'> </span>  55 4057 8129</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer