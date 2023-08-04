import ProyectCard from './ProyectList'

function ProyectList() {
    return (
        <div className='rounded-xl mb-10 shadow-lg shadow-gray-900 bg-slate-950'>
            <h1 className='text-2xl text-center font-bold'>Proyectos</h1>
            <ProyectCard />
        </div>
    )
}

export default ProyectList