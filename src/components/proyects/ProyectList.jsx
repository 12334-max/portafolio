import { useContext } from 'react'
import { Context } from '../../context/Context'

const shadow = "transition rounded-md bg-slate-900 shadow-slate-800 shadow-md hover:-translate-y-1 hover:scale-80 duration-300"

function ProyectCard() {
    const { jobs } = useContext(Context)

    return (<div className='grid sm:grid-cols-2 lg:grid-cols-3 mb-10 gap-10 rounded-xl p-4 shadow shadow-slate-2000'>
        {
            jobs.map((t) => (
                <div className={shadow}>
                    <img src={t.image} alt="logo" className='rounded-lg' />
                    <p className='text-lg p-3'>{t.title}</p>
                    <p className='text-zinc-400 text-sm text-justify px-2'>{t.description}</p>
                </div>
            ))
        }
    </div>);
}

export default ProyectCard