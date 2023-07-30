import ProyectCard from './ProyectList'

function ProyectList() {
    return (
        <div className='rounded-xl mb-10 shadow-lg shadow-gray-900 bg-slate-950'>
            <h1 className='text-2xl text-center'>Proyectos</h1>
            <div className='mb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl p-4 shadow shadow-slate-2000 '>
                <ProyectCard />
            </div>
        </div>
    )
}

export default ProyectList