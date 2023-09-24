import { MdWhatsapp, MdAlternateEmail } from 'react-icons/md'

function Footer() {
    return (
        <>
            <footer className=" bg-slate-950 gap-8">
                <div className='grid place-content-center pb-8'>
                    <p className='text-lg text-center py-4 text-slate-400 font-bold'>
                        Contactame!
                    </p>
                    <p className='text-slate-700 w-auto sm:w-72 md:w-96 text-center'>
                        Soy una persona proactiva, con habilidades de trabajar en equipo y dispuesto a asumir nuevos desafíos.
                        Si necesitas un programador entusiasta y comprometido, estaré encantado de colaborar contigo.
                    </p>
                </div>
                <div className='flex justify-between items-center mx-auto md:mx-36 lg:mx-64 xl:mx-96 pb-8'>
                    <div className='w-96 text-slate-600'>
                        <MdWhatsapp size={25} color='blue' />
                        <p><span className='text-lg text-slate-400 font-bold'> </span>  55 4057 8129</p>
                    </div>

                    <div className="w-96 text-slate-600">
                        <p> <MdAlternateEmail size={25} color='blue' /> <span className='text-lg text-slate-400 font-bold'></span> javi18082020@outlook.es</p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer