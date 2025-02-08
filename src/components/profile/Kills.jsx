import { useContext } from 'react'
import { ImStarFull } from "react-icons/im";
import { Context } from '../../services/Context'

function Kill() {
    const { kills } = useContext(Context)
    return (
        <div className='rounded-xl p-4 mb-10 shadow-2xl border w-auto md:w-60 shadow-slate-2000 bg-slate-950'>
            <h3 className='text-2xl text-slate-400 pb-3 font-bold'>Habilidades</h3>
            <ul className='text-zinc-400 md:columns-1 lg:columns-2 '>
                {kills.map((k) => (
                    <li className='hover:-translate-y-1 hover:scale-100 duration-300'>{k.title}
                        <div className='h-3 max-w-xl'>
                            <div className='w-full h-full rounded-full bg-gray-800'>
                                <div className='h-full rounded-full bg-blue-600 text-end text-[0.5rem]' style={{ "width": k.level }}> <strong>{k.level}</strong></div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Kill