import ProyectCard from './ProyectList'

function ProjectList() {
    return (
        <div className='rounded-xl mb-10 shadow-lg shadow-gray-900 bg-slate-950'>
            <h1 className='text-2xl text-center text-slate-400 font-bold'>Proyectos</h1>
            <ProyectCard />
        </div>
    )
}

export default ProjectList