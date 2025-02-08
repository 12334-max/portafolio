import { useContext } from 'react'
import { Context } from '../../services/Context'

function ProyectCard() {
    const { jobs } = useContext(Context)

    return (<div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-3'>
        {
            jobs.map((t) => (
                <div className="bg-slate-900 rounded-xl hover:-translate-y-1 hover:scale-80 duration-300">
                    <img src={t.image} alt="logo" className='rounded-lg' />
                    <p className='text-lg text-slate-400 font-semibold p-3'>{t.title}</p>
                    <p className='text-zinc-400 text-sm text-justify px-2'>{t.description}</p>
                </div>
            ))
        }
    </div>);
}

export default ProyectCard